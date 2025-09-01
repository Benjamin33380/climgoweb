import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Récupérer tous les articles publiés du blog
export async function GET(  ) {
  try {
    console.log('🔍 [API Blog] Début de la requête GET /api/blog');
    
    // Récupérer uniquement les articles publiés, triés par date de création
    const articles = await prisma.article.findMany({
      where: {
        published: true
      },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        imageUrl: true,
        published: true,
        createdAt: true,
        updatedAt: true,
        _count: {
          select: {
            comments: true,
            ratings: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    console.log('🔍 [API Blog] Articles publiés récupérés:', articles.length);
    console.log('🔍 [API Blog] Premier article:', articles[0] || 'Aucun article publié');

    return NextResponse.json({
      articles: articles,
      pagination: {
        page: 1,
        limit: 10,
        total: articles.length,
        totalPages: 1
      }
    });

  } catch (error) {
    console.error('❌ [API Blog] Erreur:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des articles', details: error instanceof Error ? error.message : 'Erreur inconnue' },
      { status: 500 }
    );
  }
}
