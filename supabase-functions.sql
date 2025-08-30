-- Fonctions SQL supplémentaires pour ClimGO

-- Fonction pour incrémenter le compteur de vues d'un article
CREATE OR REPLACE FUNCTION increment_article_views(article_id UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE articles 
  SET view_count = view_count + 1 
  WHERE id = article_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Fonction pour calculer les statistiques d'un utilisateur
CREATE OR REPLACE FUNCTION get_user_stats(user_id UUID)
RETURNS JSON AS $$
DECLARE
  result JSON;
BEGIN
  SELECT json_build_object(
    'comment_count', COALESCE(c.count, 0),
    'rating_count', COALESCE(r.count, 0),
    'like_count', COALESCE(l.count, 0),
    'article_count', COALESCE(a.count, 0)
  ) INTO result
  FROM (
    SELECT COUNT(*) as count 
    FROM comments 
    WHERE comments.user_id = get_user_stats.user_id AND is_approved = true
  ) c
  CROSS JOIN (
    SELECT COUNT(*) as count 
    FROM ratings 
    WHERE ratings.user_id = get_user_stats.user_id AND is_approved = true
  ) r
  CROSS JOIN (
    SELECT COUNT(*) as count 
    FROM article_likes 
    WHERE article_likes.user_id = get_user_stats.user_id
  ) l
  CROSS JOIN (
    SELECT COUNT(*) as count 
    FROM articles 
    WHERE articles.author_id = get_user_stats.user_id AND published = true
  ) a;
  
  RETURN result;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Fonction pour obtenir les articles populaires
CREATE OR REPLACE FUNCTION get_popular_articles(limit_count INTEGER DEFAULT 10)
RETURNS TABLE (
  id UUID,
  title TEXT,
  slug TEXT,
  view_count INTEGER,
  like_count INTEGER,
  comment_count INTEGER,
  published_at TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    a.id,
    a.title,
    a.slug,
    a.view_count,
    a.like_count,
    a.comment_count,
    a.published_at
  FROM articles a
  WHERE a.published = true
  ORDER BY (a.view_count * 0.5 + a.like_count * 2 + a.comment_count * 3) DESC
  LIMIT limit_count;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Fonction pour nettoyer les anciennes sessions
CREATE OR REPLACE FUNCTION cleanup_old_sessions()
RETURNS VOID AS $$
BEGIN
  -- Marquer comme inactives les sessions de plus de 24h
  UPDATE user_sessions 
  SET is_active = false, session_end = NOW()
  WHERE is_active = true 
    AND created_at < NOW() - INTERVAL '24 hours';
    
  -- Supprimer les sessions de plus de 30 jours
  DELETE FROM user_sessions 
  WHERE created_at < NOW() - INTERVAL '30 days';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Fonction pour calculer le score d'engagement d'un article
CREATE OR REPLACE FUNCTION calculate_engagement_score(article_id UUID)
RETURNS NUMERIC AS $$
DECLARE
  score NUMERIC := 0;
  views INTEGER := 0;
  likes INTEGER := 0;
  comments INTEGER := 0;
  avg_reading_time NUMERIC := 0;
BEGIN
  -- Récupérer les métriques de base
  SELECT 
    COALESCE(a.view_count, 0),
    COALESCE(a.like_count, 0),
    COALESCE(a.comment_count, 0)
  INTO views, likes, comments
  FROM articles a
  WHERE a.id = article_id;
  
  -- Calculer le temps de lecture moyen
  SELECT COALESCE(AVG(reading_time), 0)
  INTO avg_reading_time
  FROM article_views
  WHERE article_views.article_id = calculate_engagement_score.article_id
    AND reading_time > 0;
  
  -- Calculer le score d'engagement
  score := (views * 0.1) + (likes * 2) + (comments * 5) + (avg_reading_time * 0.01);
  
  RETURN score;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Fonction pour obtenir les tendances de trafic
CREATE OR REPLACE FUNCTION get_traffic_trends(days INTEGER DEFAULT 30)
RETURNS TABLE (
  date DATE,
  unique_visitors BIGINT,
  page_views BIGINT,
  new_users BIGINT
) AS $$
BEGIN
  RETURN QUERY
  WITH date_series AS (
    SELECT generate_series(
      CURRENT_DATE - INTERVAL '1 day' * days,
      CURRENT_DATE,
      INTERVAL '1 day'
    )::DATE as date
  ),
  daily_views AS (
    SELECT 
      av.created_at::DATE as date,
      COUNT(DISTINCT av.user_id) as unique_visitors,
      COUNT(*) as page_views
    FROM article_views av
    WHERE av.created_at >= CURRENT_DATE - INTERVAL '1 day' * days
    GROUP BY av.created_at::DATE
  ),
  daily_users AS (
    SELECT 
      u.created_at::DATE as date,
      COUNT(*) as new_users
    FROM users u
    WHERE u.created_at >= CURRENT_DATE - INTERVAL '1 day' * days
    GROUP BY u.created_at::DATE
  )
  SELECT 
    ds.date,
    COALESCE(dv.unique_visitors, 0) as unique_visitors,
    COALESCE(dv.page_views, 0) as page_views,
    COALESCE(du.new_users, 0) as new_users
  FROM date_series ds
  LEFT JOIN daily_views dv ON ds.date = dv.date
  LEFT JOIN daily_users du ON ds.date = du.date
  ORDER BY ds.date;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Fonction pour obtenir les mots-clés populaires
CREATE OR REPLACE FUNCTION get_popular_keywords(limit_count INTEGER DEFAULT 20)
RETURNS TABLE (
  keyword TEXT,
  frequency BIGINT
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    unnest(meta_keywords) as keyword,
    COUNT(*) as frequency
  FROM articles
  WHERE published = true 
    AND meta_keywords IS NOT NULL
  GROUP BY unnest(meta_keywords)
  ORDER BY frequency DESC
  LIMIT limit_count;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger pour créer automatiquement une notification admin lors d'un nouveau commentaire
CREATE OR REPLACE FUNCTION notify_admin_new_comment()
RETURNS TRIGGER AS $$
DECLARE
  article_title TEXT;
  article_slug TEXT;
  user_name TEXT;
BEGIN
  -- Récupérer les infos de l'article
  SELECT title, slug INTO article_title, article_slug
  FROM articles WHERE id = NEW.article_id;
  
  -- Récupérer le nom de l'utilisateur
  SELECT COALESCE(username, email) INTO user_name
  FROM users WHERE id = NEW.user_id;
  
  -- Créer la notification
  INSERT INTO admin_notifications (
    type,
    title,
    message,
    user_id,
    related_id,
    data
  ) VALUES (
    'comment',
    'Nouveau commentaire',
    user_name || ' a commenté l''article "' || article_title || '"',
    NEW.user_id,
    NEW.article_id,
    json_build_object(
      'article_slug', article_slug,
      'comment_id', NEW.id,
      'comment_preview', LEFT(NEW.content, 100)
    )
  );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Créer le trigger
DROP TRIGGER IF EXISTS trigger_notify_admin_new_comment ON comments;
CREATE TRIGGER trigger_notify_admin_new_comment
  AFTER INSERT ON comments
  FOR EACH ROW EXECUTE FUNCTION notify_admin_new_comment();

-- Trigger pour créer automatiquement une notification admin lors d'une nouvelle évaluation
CREATE OR REPLACE FUNCTION notify_admin_new_rating()
RETURNS TRIGGER AS $$
DECLARE
  article_title TEXT;
  article_slug TEXT;
  user_name TEXT;
BEGIN
  -- Récupérer les infos de l'article
  SELECT title, slug INTO article_title, article_slug
  FROM articles WHERE id = NEW.article_id;
  
  -- Récupérer le nom de l'utilisateur
  SELECT COALESCE(username, email) INTO user_name
  FROM users WHERE id = NEW.user_id;
  
  -- Créer la notification
  INSERT INTO admin_notifications (
    type,
    title,
    message,
    user_id,
    related_id,
    data
  ) VALUES (
    'rating',
    'Nouvelle évaluation',
    user_name || ' a évalué l''article "' || article_title || '" (' || NEW.rating || '/5)',
    NEW.user_id,
    NEW.article_id,
    json_build_object(
      'article_slug', article_slug,
      'rating_id', NEW.id,
      'rating', NEW.rating,
      'review_preview', LEFT(COALESCE(NEW.review, ''), 100)
    )
  );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Créer le trigger
DROP TRIGGER IF EXISTS trigger_notify_admin_new_rating ON ratings;
CREATE TRIGGER trigger_notify_admin_new_rating
  AFTER INSERT ON ratings
  FOR EACH ROW EXECUTE FUNCTION notify_admin_new_rating();

-- Trigger pour créer automatiquement une notification admin lors d'une nouvelle inscription
CREATE OR REPLACE FUNCTION notify_admin_new_user()
RETURNS TRIGGER AS $$
BEGIN
  -- Créer la notification
  INSERT INTO admin_notifications (
    type,
    title,
    message,
    user_id,
    related_id,
    data
  ) VALUES (
    'user_registration',
    'Nouvelle inscription',
    COALESCE(NEW.username, NEW.email) || ' s''est inscrit sur le site',
    NEW.id,
    NEW.id,
    json_build_object(
      'email', NEW.email,
      'username', NEW.username
    )
  );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Créer le trigger
DROP TRIGGER IF EXISTS trigger_notify_admin_new_user ON users;
CREATE TRIGGER trigger_notify_admin_new_user
  AFTER INSERT ON users
  FOR EACH ROW EXECUTE FUNCTION notify_admin_new_user();

-- Tâche de maintenance automatique (à exécuter périodiquement)
CREATE OR REPLACE FUNCTION maintenance_cleanup()
RETURNS VOID AS $$
BEGIN
  -- Nettoyer les anciennes sessions
  PERFORM cleanup_old_sessions();
  
  -- Nettoyer les anciennes notifications (plus de 90 jours)
  DELETE FROM admin_notifications 
  WHERE created_at < NOW() - INTERVAL '90 days';
  
  -- Nettoyer les anciennes vues d'articles (plus de 1 an)
  DELETE FROM article_views 
  WHERE created_at < NOW() - INTERVAL '1 year';
  
  -- Mettre à jour les statistiques des tables
  ANALYZE users;
  ANALYZE articles;
  ANALYZE comments;
  ANALYZE ratings;
  ANALYZE article_views;
  ANALYZE user_sessions;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
