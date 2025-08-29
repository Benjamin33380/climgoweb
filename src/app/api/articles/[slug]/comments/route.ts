import { NextRequest, NextResponse } from 'next/server';

// GET - Récupérer les commentaires d'un article
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    // TODO: Remplacer par Supabase
    const comments: Record<string, unknown>[] = [];

    return NextResponse.json(comments);
  } catch (error) {
    console.error('Erreur lors de la récupération des commentaires:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}

// POST - Créer un commentaire
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { content, userId } = await request.json();
    const { slug } = await params;

    if (!content || !userId) {
      return NextResponse.json(
        { error: 'Contenu et userId requis' },
        { status: 400 }
      );
    }

    // TODO: Remplacer par Supabase
    const comment = {
      id: 'temp-id',
      content,
      user_id: userId,
      article_slug: slug,
      is_approved: false,
      created_at: new Date().toISOString()
    };

    return NextResponse.json(comment, { status: 201 });
  } catch (error) {
    console.error('Erreur lors de la création du commentaire:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
} 