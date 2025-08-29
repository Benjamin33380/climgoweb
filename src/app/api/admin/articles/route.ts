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

// GET - Récupérer tous les articles
export async function GET(request: NextRequest) {
  try {
    verifyToken(request);

    // TODO: Remplacer par Supabase
    const articles: Record<string, unknown>[] = [];

    return NextResponse.json(articles);
  } catch (error) {
    if (error instanceof Error && error.message.includes('Token')) {
      return NextResponse.json(
        { error: 'Non autorisé' },
        { status: 401 }
      );
    }
    
    console.error('Erreur lors de la récupération des articles:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}

// POST - Créer un nouvel article
export async function POST(request: NextRequest) {
  try {
    const decoded = verifyToken(request);
    
    const formData = await request.formData();
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const excerpt = formData.get('excerpt') as string;
    const _image = formData.get('image') as File;
    const published = formData.get('published') === 'true';

    if (!title || !content) {
      return NextResponse.json(
        { error: 'Titre et contenu requis' },
        { status: 400 }
      );
    }

    // Générer le slug
    const slug = title
      .toLowerCase()
      .replace(/[éèê]/g, 'e')
      .replace(/[àâ]/g, 'a')
      .replace(/[ùû]/g, 'u')
      .replace(/[ôö]/g, 'o')
      .replace(/[îï]/g, 'i')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();

    const imageUrl = null;

    // TODO: Remplacer par Supabase
    const article = {
      id: 'temp-id',
      title,
      slug,
      content_markdown: content,
      excerpt,
      image_url: imageUrl,
      published,
      author_id: decoded.adminId,
      created_at: new Date().toISOString(),
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
    
    console.error('Erreur lors de la création de l\'article:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
} 