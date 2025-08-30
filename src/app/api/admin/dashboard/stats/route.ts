import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// GET - Récupérer les statistiques du dashboard
export async function GET(request: NextRequest) {
  try {
    // TODO: Vérifier l'authentification admin
    
    const { searchParams } = new URL(request.url);
    const period = searchParams.get('period') || '30'; // jours
    
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - parseInt(period));

    // Statistiques générales
    const [
      usersResult,
      articlesResult,
      commentsResult,
      newsletterResult,
      sessionsResult,
      viewsResult
    ] = await Promise.all([
      // Utilisateurs
      supabase
        .from('users')
        .select('id, created_at, is_banned')
        .gte('created_at', startDate.toISOString()),
      
      // Articles
      supabase
        .from('articles')
        .select('id, created_at, published, view_count, like_count, comment_count'),
      
      // Commentaires
      supabase
        .from('comments')
        .select('id, created_at, is_approved')
        .gte('created_at', startDate.toISOString()),
      
      // Newsletter
      supabase
        .from('newsletter_subscribers')
        .select('id, subscribed_at, is_active'),
      
      // Sessions
      supabase
        .from('user_sessions')
        .select('id, created_at, country, city, device_type')
        .gte('created_at', startDate.toISOString()),
      
      // Vues d'articles
      supabase
        .from('article_views')
        .select('id, created_at, article_id, reading_time')
        .gte('created_at', startDate.toISOString())
    ]);

    // Calculer les statistiques
    const stats = {
      users: {
        total: usersResult.data?.length || 0,
        new_this_period: usersResult.data?.length || 0,
        active: usersResult.data?.filter(u => !u.is_banned).length || 0,
        banned: usersResult.data?.filter(u => u.is_banned).length || 0
      },
      articles: {
        total: articlesResult.data?.length || 0,
        published: articlesResult.data?.filter(a => a.published).length || 0,
        draft: articlesResult.data?.filter(a => !a.published).length || 0,
        total_views: articlesResult.data?.reduce((sum, a) => sum + (a.view_count || 0), 0) || 0,
        total_likes: articlesResult.data?.reduce((sum, a) => sum + (a.like_count || 0), 0) || 0,
        total_comments: articlesResult.data?.reduce((sum, a) => sum + (a.comment_count || 0), 0) || 0
      },
      comments: {
        total: commentsResult.data?.length || 0,
        approved: commentsResult.data?.filter(c => c.is_approved).length || 0,
        pending: commentsResult.data?.filter(c => !c.is_approved).length || 0
      },
      newsletter: {
        total_subscribers: newsletterResult.data?.length || 0,
        active_subscribers: newsletterResult.data?.filter(n => n.is_active).length || 0,
        new_this_period: newsletterResult.data?.filter(n => 
          new Date(n.subscribed_at) >= startDate
        ).length || 0
      },
      sessions: {
        total: sessionsResult.data?.length || 0,
        unique_countries: [...new Set(sessionsResult.data?.map(s => s.country).filter(Boolean))].length,
        unique_cities: [...new Set(sessionsResult.data?.map(s => s.city).filter(Boolean))].length,
        device_breakdown: getDeviceBreakdown(sessionsResult.data || [])
      },
      engagement: {
        total_views: viewsResult.data?.length || 0,
        avg_reading_time: calculateAverageReadingTime(viewsResult.data || []),
        bounce_rate: calculateBounceRate(viewsResult.data || [])
      }
    };

    // Données pour les graphiques (par jour sur la période)
    const chartData = generateChartData(
      usersResult.data || [],
      sessionsResult.data || [],
      viewsResult.data || [],
      parseInt(period)
    );

    // Top articles
    const topArticles = await getTopArticles();

    // Activité récente
    const recentActivity = await getRecentActivity();

    return NextResponse.json({
      stats,
      chartData,
      topArticles,
      recentActivity,
      period: parseInt(period)
    });

  } catch (error) {
    console.error('Erreur lors de la récupération des statistiques:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}

function getDeviceBreakdown(sessions: any[]) {
  const devices = sessions.reduce((acc, session) => {
    const device = session.device_type || 'Unknown';
    acc[device] = (acc[device] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(devices).map(([device, count]) => ({
    device,
    count
  }));
}

function calculateAverageReadingTime(views: any[]) {
  const validReadingTimes = views
    .map(v => v.reading_time)
    .filter(time => time && time > 0);
  
  if (validReadingTimes.length === 0) return 0;
  
  return Math.round(
    validReadingTimes.reduce((sum, time) => sum + time, 0) / validReadingTimes.length
  );
}

function calculateBounceRate(views: any[]) {
  // Bounce rate simplifié : vues avec moins de 30 secondes de lecture
  const totalViews = views.length;
  if (totalViews === 0) return 0;
  
  const bounces = views.filter(v => (v.reading_time || 0) < 30).length;
  return Math.round((bounces / totalViews) * 100);
}

function generateChartData(users: any[], sessions: any[], views: any[], period: number) {
  const data = [];
  const now = new Date();
  
  for (let i = period - 1; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    const dateStr = date.toISOString().split('T')[0];
    
    const dayUsers = users.filter(u => 
      u.created_at.startsWith(dateStr)
    ).length;
    
    const daySessions = sessions.filter(s => 
      s.created_at.startsWith(dateStr)
    ).length;
    
    const dayViews = views.filter(v => 
      v.created_at.startsWith(dateStr)
    ).length;
    
    data.push({
      date: dateStr,
      users: dayUsers,
      sessions: daySessions,
      views: dayViews
    });
  }
  
  return data;
}

async function getTopArticles() {
  const { data } = await supabase
    .from('admin_article_stats')
    .select('title, slug, view_count, like_count, comment_count, unique_views')
    .eq('published', true)
    .order('view_count', { ascending: false })
    .limit(5);
    
  return data || [];
}

async function getRecentActivity() {
  const activities = [];
  
  // Nouveaux commentaires
  const { data: comments } = await supabase
    .from('comments')
    .select(`
      id, content, created_at, is_approved,
      users(username, email),
      articles(title, slug)
    `)
    .order('created_at', { ascending: false })
    .limit(5);
  
  comments?.forEach(comment => {
    activities.push({
      type: 'comment',
      title: 'Nouveau commentaire',
      description: `${comment.users?.username || comment.users?.email} a commenté "${comment.articles?.title}"`,
      created_at: comment.created_at,
      status: comment.is_approved ? 'approved' : 'pending',
      link: `/blog/${comment.articles?.slug}#comment-${comment.id}`
    });
  });
  
  // Nouvelles inscriptions
  const { data: newUsers } = await supabase
    .from('users')
    .select('username, email, created_at')
    .order('created_at', { ascending: false })
    .limit(5);
  
  newUsers?.forEach(user => {
    activities.push({
      type: 'user',
      title: 'Nouvelle inscription',
      description: `${user.username || user.email} s'est inscrit`,
      created_at: user.created_at,
      status: 'new',
      link: `/admin/users?search=${user.email}`
    });
  });
  
  // Trier par date
  activities.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  
  return activities.slice(0, 10);
}
