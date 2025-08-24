import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// POST - Ajouter un rating
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const { rating } = await request.json();

    if (!rating || rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'Rating doit être entre 1 et 5' },
        { status: 400 }
      );
    }

    // Trouver l'article par slug
    const article = await prisma.article.findUnique({
      where: { slug }
    });

    if (!article) {
      return NextResponse.json(
        { error: 'Article non trouvé' },
        { status: 404 }
      );
    }

    // Créer le rating
    const newRating = await prisma.rating.create({
      data: {
        rating,
        articleId: article.id
      }
    });

    return NextResponse.json(newRating, { status: 201 });
  } catch (error) {
    console.error('Erreur lors de l\'ajout du rating:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// GET - Récupérer les ratings d'un article
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    // Trouver l'article par slug
    const article = await prisma.article.findUnique({
      where: { slug }
    });

    if (!article) {
      return NextResponse.json(
        { error: 'Article non trouvé' },
        { status: 404 }
      );
    }

    // Récupérer tous les ratings
    const ratings = await prisma.rating.findMany({
      where: {
        articleId: article.id
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    // Calculer la moyenne
    const totalRating = ratings.reduce((sum, r) => sum + r.rating, 0);
    const averageRating = ratings.length > 0 ? totalRating / ratings.length : 0;

    return NextResponse.json({
      ratings,
      averageRating: Math.round(averageRating * 10) / 10,
      totalRatings: ratings.length
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des ratings:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
} 