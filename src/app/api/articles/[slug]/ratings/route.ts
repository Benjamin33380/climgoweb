import { NextRequest, NextResponse } from 'next/server';

// GET - Récupérer les avis d'un article
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    // TODO: Remplacer par Supabase
    const ratings: Record<string, unknown>[] = [];

    return NextResponse.json(ratings);
  } catch (error) {
    console.error('Erreur lors de la récupération des avis:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}

// POST - Créer ou mettre à jour un avis
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { rating, userId } = await request.json();
    const { slug } = await params;

    if (typeof rating !== 'number' || rating < 1 || rating > 5 || !userId) {
      return NextResponse.json(
        { error: 'Rating (1-5) et userId requis' },
        { status: 400 }
      );
    }

    // TODO: Remplacer par Supabase
    const ratingData = {
      id: 'temp-id',
      rating,
      user_id: userId,
      article_slug: slug,
      created_at: new Date().toISOString()
    };

    return NextResponse.json(ratingData, { status: 201 });
  } catch (error) {
    console.error('Erreur lors de la création de l\'avis:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
} 