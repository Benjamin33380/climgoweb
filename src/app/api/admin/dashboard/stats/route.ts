import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // Récupérer les vraies données depuis la base de données
    const [
      usersCount,
      articlesCount,
      publishedArticlesCount,
      draftArticlesCount,
      commentsCount,
      approvedCommentsCount,
      pendingCommentsCount
    ] = await Promise.all([
      prisma.user.count(),
      prisma.article.count(),
      prisma.article.count({ where: { published: true } }),
      prisma.article.count({ where: { published: false } }),
      prisma.comment.count(),
      prisma.comment.count({ where: { isApproved: true } }),
      prisma.comment.count({ where: { isApproved: false } })
    ]);

    // Calculer les nouvelles inscriptions de la période (30 derniers jours)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    const newUsersThisPeriod = await prisma.user.count({
      where: { createdAt: { gte: thirtyDaysAgo } }
    });

    // Récupérer les articles les plus populaires
    const topArticles = await prisma.article.findMany({
      where: { published: true },
      select: {
        title: true,
        slug: true,
        _count: {
          select: {
            comments: true
          }
        }
      },
      orderBy: {
        comments: {
          _count: 'desc'
        }
      },
      take: 5
    });

    // Récupérer l'activité récente (commentaires)
    const recentComments = await prisma.comment.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        content: true,
        createdAt: true,
        isApproved: true,
        author: { select: { firstName: true, lastName: true } },
        article: { select: { title: true, slug: true } }
      }
    });

    // Formater les données pour le dashboard
    const stats = {
      users: {
        total: usersCount,
        new_this_period: newUsersThisPeriod,
        active: usersCount, // Simplifié pour l'instant
        banned: 0 // À implémenter si nécessaire
      },
      articles: {
        total: articlesCount,
        published: publishedArticlesCount,
        draft: draftArticlesCount,
        total_views: 0, // À remplacer par Google Analytics
        total_likes: 0, // À implémenter si nécessaire
        total_comments: commentsCount
      },
      comments: {
        total: commentsCount,
        approved: approvedCommentsCount,
        pending: pendingCommentsCount
      },
      newsletter: {
        total_subscribers: 0, // À implémenter quand le modèle Newsletter sera créé
        active_subscribers: 0,
        new_this_period: 0
      },
      contacts: {
        total: 0, // À implémenter quand le modèle Contact sera créé
        pending: 0,
        processed: 0
      },
      sessions: {
        total: 0, // À remplacer par Google Analytics
        unique_countries: 0, // À remplacer par Google Analytics
        unique_cities: 0, // À remplacer par Google Analytics
        device_breakdown: [
          { device: 'Desktop', count: 0 }, // À remplacer par Google Analytics
          { device: 'Mobile', count: 0 },
          { device: 'Tablet', count: 0 }
        ]
      },
      engagement: {
        total_views: 0, // À remplacer par Google Analytics
        avg_reading_time: 0, // À remplacer par Google Analytics
        bounce_rate: 0 // À remplacer par Google Analytics
      }
    };

    // Formater les articles populaires
    const formattedTopArticles = topArticles.map(article => ({
      title: article.title,
      slug: article.slug,
      view_count: 0, // À remplacer par Google Analytics
      like_count: 0, // À implémenter si nécessaire
      comment_count: article._count.comments,
      unique_views: 0 // À remplacer par Google Analytics
    }));

    // Formater l'activité récente
    const formattedRecentActivity = recentComments.map(comment => ({
      type: 'comment',
      title: 'Nouveau commentaire',
      description: `Commentaire sur "${comment.article.title}" par ${comment.author.firstName || comment.author.lastName || 'Utilisateur'}`,
      created_at: comment.createdAt.toISOString(),
      status: comment.isApproved ? 'approved' : 'pending',
      link: `/admin/comments`
    }));

    // Données de graphique (à remplacer par Google Analytics)
    const chartData = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      chartData.push({
        date: date.toISOString().split('T')[0],
        users: Math.floor(Math.random() * 10) + 1,
        sessions: Math.floor(Math.random() * 20) + 5,
        views: Math.floor(Math.random() * 50) + 10
      });
    }

    return NextResponse.json({
      stats,
      chartData,
      topArticles: formattedTopArticles,
      recentActivity: formattedRecentActivity
    });

  } catch (error) {
    console.error('Erreur dashboard:', error);
    return NextResponse.json(
      { error: 'Erreur lors du chargement des statistiques' },
      { status: 500 }
    );
  }
}