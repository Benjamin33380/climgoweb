import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    
    if (!slug) {
      return NextResponse.json(
        { error: 'Slug de l\'article requis' },
        { status: 400 }
      );
    }

    // Vérifier que l'article existe par son slug
    const article = await prisma.article.findUnique({
      where: { slug: slug }
    });

    if (!article) {
      return NextResponse.json(
        { error: 'Article non trouvé' },
        { status: 404 }
      );
    }

    // Pour l'instant, on peut juste retourner un succès
    // Plus tard, on pourra ajouter une table article_views si nécessaire
    return NextResponse.json({
      success: true,
      message: 'Vue enregistrée'
    });

  } catch (error) {
    console.error('Erreur lors de l\'enregistrement de la vue:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
} 