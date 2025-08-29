import { NextRequest, NextResponse } from 'next/server';

// Middleware simplifié pour vérifier l'authentification
function verifyToken(request: NextRequest) {
  const token = request.headers.get('authorization')?.replace('Bearer ', '');
  
  if (!token) {
    throw new Error('Token manquant');
  }

  // Vérification simple du token (à améliorer en production)
  if (token !== 'admin-token') {
    throw new Error('Token invalide');
  }

  return { adminId: 'admin-1' };
}

// GET - Récupérer un article par ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    verifyToken(request);

    // TODO: Remplacer par Supabase
    const article = null;

    if (!article) {
      return NextResponse.json(
        { error: 'Article non trouvé' },
        { status: 404 }
      );
    }

    return NextResponse.json(article);
  } catch (error) {
    if (error instanceof Error && error.message.includes('Token')) {
      return NextResponse.json(
        { error: 'Non autorisé' },
        { status: 401 }
      );
    }
    
    console.error('Erreur lors de la récupération de l\'article:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}

// PUT - Mettre à jour un article
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const decoded = verifyToken(request);
    const { id } = await params;
    
    const formData = await request.formData();
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const excerpt = formData.get('excerpt') as string;
    const published = formData.get('published') === 'true';

    if (!title || !content) {
      return NextResponse.json(
        { error: 'Titre et contenu requis' },
        { status: 400 }
      );
    }

    // TODO: Remplacer par Supabase
    const article = {
      id,
      title,
      content_markdown: content,
      excerpt,
      published,
      author_id: decoded.adminId,
      updated_at: new Date().toISOString()
    };

    return NextResponse.json(article);
  } catch (error) {
    if (error instanceof Error && error.message.includes('Token')) {
      return NextResponse.json(
        { error: 'Non autorisé' },
        { status: 401 }
      );
    }
    
    console.error('Erreur lors de la mise à jour de l\'article:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}

// DELETE - Supprimer un article
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    verifyToken(request);

    // TODO: Remplacer par Supabase
    return NextResponse.json({ message: 'Article supprimé' });
  } catch (error) {
    if (error instanceof Error && error.message.includes('Token')) {
      return NextResponse.json(
        { error: 'Non autorisé' },
        { status: 401 }
      );
    }
    
    console.error('Erreur lors de la suppression de l\'article:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
} 