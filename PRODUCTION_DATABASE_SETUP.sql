-- =====================================================
-- CLIMGO PRODUCTION DATABASE SETUP
-- =====================================================
-- Script complet pour configurer la base de données ClimGO en production
-- À exécuter dans l'éditeur SQL de Supabase
-- 
-- INSTRUCTIONS :
-- 1. Copiez-collez TOUT ce contenu dans l'éditeur SQL Supabase
-- 2. Exécutez le script complet
-- 3. Vérifiez que toutes les tables sont créées
-- 4. Créez l'utilisateur admin avec le script createAdminSupabase.js
-- =====================================================

-- =====================================================
-- 1. TABLES PRINCIPALES
-- =====================================================

-- Table des utilisateurs étendue (liée à auth.users)
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL UNIQUE,
  username TEXT UNIQUE,
  avatar_url TEXT,
  first_name TEXT,
  last_name TEXT,
  phone TEXT,
  address TEXT,
  postal_code TEXT,
  city TEXT,
  country TEXT DEFAULT 'France',
  birth_date DATE,
  bio TEXT,
  website TEXT,
  points_activity INTEGER DEFAULT 0,
  is_admin BOOLEAN DEFAULT FALSE,
  is_banned BOOLEAN DEFAULT FALSE,
  email_verified BOOLEAN DEFAULT FALSE,
  newsletter_subscribed BOOLEAN DEFAULT FALSE,
  preferences JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_login TIMESTAMP WITH TIME ZONE
);

-- Table des sessions utilisateurs pour tracking
CREATE TABLE IF NOT EXISTS user_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  ip_address INET,
  user_agent TEXT,
  country TEXT,
  city TEXT,
  device_type TEXT,
  browser TEXT,
  os TEXT,
  session_start TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  session_end TIMESTAMP WITH TIME ZONE,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des articles de blog
CREATE TABLE IF NOT EXISTS articles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content_markdown TEXT NOT NULL,
  content_html TEXT,
  image_url TEXT,
  image_alt TEXT,
  meta_title TEXT,
  meta_description TEXT,
  meta_keywords TEXT[],
  published BOOLEAN DEFAULT FALSE,
  is_vip_only BOOLEAN DEFAULT FALSE,
  author_id UUID REFERENCES users(id) ON DELETE SET NULL,
  category TEXT,
  tags TEXT[],
  reading_time INTEGER,
  view_count INTEGER DEFAULT 0,
  like_count INTEGER DEFAULT 0,
  comment_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  published_at TIMESTAMP WITH TIME ZONE
);

-- Table des commentaires
CREATE TABLE IF NOT EXISTS comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  article_id UUID REFERENCES articles(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  parent_id UUID REFERENCES comments(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  is_approved BOOLEAN DEFAULT FALSE,
  is_flagged BOOLEAN DEFAULT FALSE,
  like_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des évaluations/notes
CREATE TABLE IF NOT EXISTS ratings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  article_id UUID REFERENCES articles(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  review TEXT,
  is_approved BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(article_id, user_id)
);

-- Table des likes d'articles
CREATE TABLE IF NOT EXISTS article_likes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  article_id UUID REFERENCES articles(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(article_id, user_id)
);

-- Table des likes de commentaires
CREATE TABLE IF NOT EXISTS comment_likes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  comment_id UUID REFERENCES comments(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(comment_id, user_id)
);

-- Table des vues d'articles pour analytics
CREATE TABLE IF NOT EXISTS article_views (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  article_id UUID REFERENCES articles(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  ip_address INET,
  user_agent TEXT,
  referrer TEXT,
  reading_time INTEGER,
  scroll_percentage INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des abonnés newsletter
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  preferences JSONB DEFAULT '{"general": true, "articles": true, "offers": true}',
  is_active BOOLEAN DEFAULT TRUE,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  unsubscribed_at TIMESTAMP WITH TIME ZONE,
  source TEXT DEFAULT 'website'
);

-- Table des newsletters envoyées
CREATE TABLE IF NOT EXISTS newsletter_campaigns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  subject TEXT NOT NULL,
  content_html TEXT NOT NULL,
  content_text TEXT,
  sent_to_count INTEGER DEFAULT 0,
  open_count INTEGER DEFAULT 0,
  click_count INTEGER DEFAULT 0,
  bounce_count INTEGER DEFAULT 0,
  status TEXT DEFAULT 'draft', -- draft, sending, sent, failed
  sent_at TIMESTAMP WITH TIME ZONE,
  created_by UUID REFERENCES users(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des notifications admin
CREATE TABLE IF NOT EXISTS admin_notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  type TEXT NOT NULL, -- comment, rating, user_registration, etc.
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  data JSONB,
  is_read BOOLEAN DEFAULT FALSE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  related_id UUID, -- ID de l'objet lié (commentaire, article, etc.)
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- 2. INDEXES POUR LES PERFORMANCES
-- =====================================================

CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_username ON users(username);
CREATE INDEX IF NOT EXISTS idx_users_is_admin ON users(is_admin);
CREATE INDEX IF NOT EXISTS idx_users_is_banned ON users(is_banned);
CREATE INDEX IF NOT EXISTS idx_users_created_at ON users(created_at);

CREATE INDEX IF NOT EXISTS idx_user_sessions_user_id ON user_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_user_sessions_created_at ON user_sessions(created_at);
CREATE INDEX IF NOT EXISTS idx_user_sessions_is_active ON user_sessions(is_active);

CREATE INDEX IF NOT EXISTS idx_articles_slug ON articles(slug);
CREATE INDEX IF NOT EXISTS idx_articles_published ON articles(published);
CREATE INDEX IF NOT EXISTS idx_articles_is_vip_only ON articles(is_vip_only);
CREATE INDEX IF NOT EXISTS idx_articles_author_id ON articles(author_id);
CREATE INDEX IF NOT EXISTS idx_articles_created_at ON articles(created_at);
CREATE INDEX IF NOT EXISTS idx_articles_published_at ON articles(published_at);

CREATE INDEX IF NOT EXISTS idx_comments_article_id ON comments(article_id);
CREATE INDEX IF NOT EXISTS idx_comments_user_id ON comments(user_id);
CREATE INDEX IF NOT EXISTS idx_comments_is_approved ON comments(is_approved);
CREATE INDEX IF NOT EXISTS idx_comments_created_at ON comments(created_at);

CREATE INDEX IF NOT EXISTS idx_ratings_article_id ON ratings(article_id);
CREATE INDEX IF NOT EXISTS idx_ratings_user_id ON ratings(user_id);

CREATE INDEX IF NOT EXISTS idx_article_views_article_id ON article_views(article_id);
CREATE INDEX IF NOT EXISTS idx_article_views_created_at ON article_views(created_at);

CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_is_active ON newsletter_subscribers(is_active);

CREATE INDEX IF NOT EXISTS idx_admin_notifications_is_read ON admin_notifications(is_read);
CREATE INDEX IF NOT EXISTS idx_admin_notifications_created_at ON admin_notifications(created_at);

-- =====================================================
-- 3. FONCTIONS ET TRIGGERS
-- =====================================================

-- Fonction pour mettre à jour updated_at automatiquement
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Fonction pour maintenir les compteurs d'articles
CREATE OR REPLACE FUNCTION update_article_comment_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE articles 
    SET comment_count = comment_count + 1 
    WHERE id = NEW.article_id;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE articles 
    SET comment_count = comment_count - 1 
    WHERE id = OLD.article_id;
    RETURN OLD;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION update_article_like_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE articles 
    SET like_count = like_count + 1 
    WHERE id = NEW.article_id;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE articles 
    SET like_count = like_count - 1 
    WHERE id = OLD.article_id;
    RETURN OLD;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION update_comment_like_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE comments 
    SET like_count = like_count + 1 
    WHERE id = NEW.comment_id;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE comments 
    SET like_count = like_count - 1 
    WHERE id = OLD.comment_id;
    RETURN OLD;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Fonction pour incrémenter le compteur de vues
CREATE OR REPLACE FUNCTION increment_article_views(article_id UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE articles 
  SET view_count = view_count + 1 
  WHERE id = article_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Fonction pour les notifications admin
CREATE OR REPLACE FUNCTION notify_admin_new_comment()
RETURNS TRIGGER AS $$
DECLARE
  article_title TEXT;
  article_slug TEXT;
  user_name TEXT;
BEGIN
  SELECT title, slug INTO article_title, article_slug
  FROM articles WHERE id = NEW.article_id;
  
  SELECT COALESCE(username, email) INTO user_name
  FROM users WHERE id = NEW.user_id;
  
  INSERT INTO admin_notifications (
    type, title, message, user_id, related_id, data
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

CREATE OR REPLACE FUNCTION notify_admin_new_rating()
RETURNS TRIGGER AS $$
DECLARE
  article_title TEXT;
  article_slug TEXT;
  user_name TEXT;
BEGIN
  SELECT title, slug INTO article_title, article_slug
  FROM articles WHERE id = NEW.article_id;
  
  SELECT COALESCE(username, email) INTO user_name
  FROM users WHERE id = NEW.user_id;
  
  INSERT INTO admin_notifications (
    type, title, message, user_id, related_id, data
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

CREATE OR REPLACE FUNCTION notify_admin_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO admin_notifications (
    type, title, message, user_id, related_id, data
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

-- Fonction de maintenance
CREATE OR REPLACE FUNCTION maintenance_cleanup()
RETURNS VOID AS $$
BEGIN
  -- Nettoyer les anciennes sessions (plus de 24h inactives)
  UPDATE user_sessions 
  SET is_active = false, session_end = NOW()
  WHERE is_active = true 
    AND created_at < NOW() - INTERVAL '24 hours';
    
  -- Supprimer les anciennes sessions (plus de 30 jours)
  DELETE FROM user_sessions 
  WHERE created_at < NOW() - INTERVAL '30 days';
  
  -- Nettoyer les anciennes notifications (plus de 90 jours)
  DELETE FROM admin_notifications 
  WHERE created_at < NOW() - INTERVAL '90 days';
  
  -- Nettoyer les anciennes vues (plus de 1 an)
  DELETE FROM article_views 
  WHERE created_at < NOW() - INTERVAL '1 year';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- =====================================================
-- 4. TRIGGERS
-- =====================================================

-- Triggers pour updated_at
DROP TRIGGER IF EXISTS trigger_users_updated_at ON users;
CREATE TRIGGER trigger_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS trigger_articles_updated_at ON articles;
CREATE TRIGGER trigger_articles_updated_at
  BEFORE UPDATE ON articles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS trigger_comments_updated_at ON comments;
CREATE TRIGGER trigger_comments_updated_at
  BEFORE UPDATE ON comments
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS trigger_ratings_updated_at ON ratings;
CREATE TRIGGER trigger_ratings_updated_at
  BEFORE UPDATE ON ratings
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Triggers pour les compteurs
DROP TRIGGER IF EXISTS trigger_update_article_comment_count ON comments;
CREATE TRIGGER trigger_update_article_comment_count
  AFTER INSERT OR DELETE ON comments
  FOR EACH ROW EXECUTE FUNCTION update_article_comment_count();

DROP TRIGGER IF EXISTS trigger_update_article_like_count ON article_likes;
CREATE TRIGGER trigger_update_article_like_count
  AFTER INSERT OR DELETE ON article_likes
  FOR EACH ROW EXECUTE FUNCTION update_article_like_count();

DROP TRIGGER IF EXISTS trigger_update_comment_like_count ON comment_likes;
CREATE TRIGGER trigger_update_comment_like_count
  AFTER INSERT OR DELETE ON comment_likes
  FOR EACH ROW EXECUTE FUNCTION update_comment_like_count();

-- Triggers pour les notifications admin
DROP TRIGGER IF EXISTS trigger_notify_admin_new_comment ON comments;
CREATE TRIGGER trigger_notify_admin_new_comment
  AFTER INSERT ON comments
  FOR EACH ROW EXECUTE FUNCTION notify_admin_new_comment();

DROP TRIGGER IF EXISTS trigger_notify_admin_new_rating ON ratings;
CREATE TRIGGER trigger_notify_admin_new_rating
  AFTER INSERT ON ratings
  FOR EACH ROW EXECUTE FUNCTION notify_admin_new_rating();

DROP TRIGGER IF EXISTS trigger_notify_admin_new_user ON users;
CREATE TRIGGER trigger_notify_admin_new_user
  AFTER INSERT ON users
  FOR EACH ROW EXECUTE FUNCTION notify_admin_new_user();

-- =====================================================
-- 5. ROW LEVEL SECURITY (RLS)
-- =====================================================

-- Activer RLS sur toutes les tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE ratings ENABLE ROW LEVEL SECURITY;
ALTER TABLE article_likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE comment_likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE article_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_notifications ENABLE ROW LEVEL SECURITY;

-- Policies pour users
CREATE POLICY "Users can view their own profile" ON users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON users
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Admins can view all users" ON users
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND is_admin = true
    )
  );

CREATE POLICY "Admins can manage all users" ON users
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND is_admin = true
    )
  );

-- Policies pour articles
CREATE POLICY "Published articles are viewable by everyone" ON articles
  FOR SELECT USING (published = true AND is_vip_only = false);

CREATE POLICY "VIP articles are viewable by authenticated users" ON articles
  FOR SELECT USING (
    published = true AND (
      is_vip_only = false OR 
      auth.uid() IS NOT NULL
    )
  );

CREATE POLICY "Admins can manage all articles" ON articles
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND is_admin = true
    )
  );

-- Policies pour comments
CREATE POLICY "Approved comments are viewable by everyone" ON comments
  FOR SELECT USING (is_approved = true);

CREATE POLICY "Users can create comments" ON comments
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own comments" ON comments
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage all comments" ON comments
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND is_admin = true
    )
  );

-- Policies pour ratings
CREATE POLICY "Approved ratings are viewable by everyone" ON ratings
  FOR SELECT USING (is_approved = true);

CREATE POLICY "Users can create ratings" ON ratings
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own ratings" ON ratings
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage all ratings" ON ratings
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND is_admin = true
    )
  );

-- Policies pour likes
CREATE POLICY "Users can manage their own article likes" ON article_likes
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their own comment likes" ON comment_likes
  FOR ALL USING (auth.uid() = user_id);

-- Policies pour newsletter
CREATE POLICY "Newsletter subscribers can view their own subscription" ON newsletter_subscribers
  FOR SELECT USING (user_id = auth.uid() OR email = auth.email());

CREATE POLICY "Anyone can subscribe to newsletter" ON newsletter_subscribers
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can manage newsletter" ON newsletter_subscribers
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND is_admin = true
    )
  );

-- Policies pour admin notifications
CREATE POLICY "Admins can view all notifications" ON admin_notifications
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND is_admin = true
    )
  );

CREATE POLICY "Admins can manage notifications" ON admin_notifications
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND is_admin = true
    )
  );

-- Policies pour les vues d'articles
CREATE POLICY "Anyone can create article views" ON article_views
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can view all article views" ON article_views
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND is_admin = true
    )
  );

-- Policies pour les sessions
CREATE POLICY "Users can view their own sessions" ON user_sessions
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all sessions" ON user_sessions
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND is_admin = true
    )
  );

-- =====================================================
-- 6. VUES UTILES POUR L'ADMIN
-- =====================================================

CREATE OR REPLACE VIEW admin_user_stats AS
SELECT 
  u.id,
  u.email,
  u.username,
  u.created_at,
  u.last_login,
  u.is_banned,
  u.is_admin,
  u.points_activity,
  COUNT(DISTINCT c.id) as comment_count,
  COUNT(DISTINCT r.id) as rating_count,
  COUNT(DISTINCT al.id) as like_count
FROM users u
LEFT JOIN comments c ON u.id = c.user_id
LEFT JOIN ratings r ON u.id = r.user_id  
LEFT JOIN article_likes al ON u.id = al.user_id
GROUP BY u.id, u.email, u.username, u.created_at, u.last_login, u.is_banned, u.is_admin, u.points_activity;

CREATE OR REPLACE VIEW admin_article_stats AS
SELECT 
  a.id,
  a.title,
  a.slug,
  a.published,
  a.is_vip_only,
  a.created_at,
  a.published_at,
  a.view_count,
  a.like_count,
  a.comment_count,
  u.username as author_name,
  COUNT(DISTINCT av.id) as unique_views
FROM articles a
LEFT JOIN users u ON a.author_id = u.id
LEFT JOIN article_views av ON a.id = av.article_id
GROUP BY a.id, a.title, a.slug, a.published, a.is_vip_only, a.created_at, a.published_at, 
         a.view_count, a.like_count, a.comment_count, u.username;

-- =====================================================
-- 7. DONNÉES DE TEST (OPTIONNEL)
-- =====================================================

-- Insérer un article de bienvenue (optionnel)
-- Décommentez si vous voulez un article de test
/*
INSERT INTO articles (
  title, 
  slug, 
  content_markdown, 
  published, 
  meta_title, 
  meta_description,
  excerpt
) VALUES (
  'Bienvenue sur le blog ClimGO',
  'bienvenue-blog-climgo',
  '# Bienvenue sur le blog ClimGO

Découvrez notre nouveau blog dédié au chauffage et à la climatisation en Gironde !

## Fonctionnalités disponibles

- **Commentaires** : Partagez vos expériences
- **Évaluations** : Notez nos articles de 1 à 5 étoiles
- **Newsletter** : Restez informé de nos dernières actualités
- **Panel admin** : Gestion complète du contenu

*ClimGO - Votre expert chauffage et climatisation en Gironde*',
  true,
  'Bienvenue sur le blog ClimGO - Expert chauffage climatisation Gironde',
  'Découvrez le nouveau blog ClimGO avec commentaires, évaluations et newsletter. Expert chauffage climatisation en Gironde.',
  'Découvrez notre nouveau blog dédié au chauffage et à la climatisation en Gironde avec toutes les fonctionnalités interactives.'
) ON CONFLICT (slug) DO NOTHING;
*/

-- =====================================================
-- SCRIPT TERMINÉ
-- =====================================================
-- 
-- ✅ Base de données configurée avec succès !
-- 
-- PROCHAINES ÉTAPES :
-- 1. Exécutez : npm run create-admin-supabase
-- 2. Testez la connexion admin : http://localhost:3000/admin/login
-- 3. Vérifiez que toutes les fonctionnalités marchent
-- 
-- IDENTIFIANTS ADMIN :
-- Email: contact@climgo.fr
-- Mot de passe: benclimgo06
-- 
-- =====================================================
