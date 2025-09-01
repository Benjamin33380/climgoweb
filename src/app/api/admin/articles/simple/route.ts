import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Route ultra-simple pour récupérer les articles
export async function GET() {
  try {
    console.log('🚀 Route simple des articles...');

    // Récupérer juste les articles de base, sans relations
    const articles = await prisma.article.findMany({
      select: {
        id: true,
        title: true,
        slug: true,
        content: true,
        excerpt: true,
        published: true,
        authorId: true,
        createdAt: true,
        updatedAt: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    console.log(`✅ ${articles.length} articles récupérés`);

    // Nettoyer les données pour gérer les valeurs nulles
    const cleanedArticles = articles.map(article => ({
      ...article,
      createdAt: article.createdAt || new Date(),
      updatedAt: article.updatedAt || new Date(),
      // Ajouter des données d'auteur factices pour l'instant
      author: {
        id: article.authorId,
        email: 'admin@climgo.fr',
        firstName: 'Admin',
        lastName: 'ClimGO'
      },
      _count: {
        comments: 0
      }
    }));

    return NextResponse.json({
      articles: cleanedArticles,
      pagination: {
        page: 1,
        limit: cleanedArticles.length,
        total: cleanedArticles.length,
        totalPages: 1
      }
    });

  } catch (error) {
    console.error('❌ Erreur route simple:', error);
    
    // Retourner une réponse d'erreur détaillée
    return NextResponse.json({
      error: 'Erreur lors de la récupération des articles',
      details: error instanceof Error ? error.message : 'Erreur inconnue',
      stack: error instanceof Error ? error.stack : undefined
    }, { status: 500 });
  }
} 