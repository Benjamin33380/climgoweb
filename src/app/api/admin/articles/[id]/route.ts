import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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

  return { id: 'admin-1' };
}

// PATCH - Modifier un article
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const decoded = verifyToken(request) as any; // eslint-disable-line @typescript-eslint/no-explicit-any
    const { id } = await params;
    const { title, content, excerpt, published, imageUrl } = await request.json();

    // Vérifier que l'admin est propriétaire de l'article
    const existingArticle = await prisma.article.findUnique({
      where: { id },
      select: { adminId: true }
    });

    if (!existingArticle) {
      return NextResponse.json(
        { error: 'Article non trouvé' },
        { status: 404 }
      );
    }

    if (existingArticle.adminId !== decoded.id) {
      return NextResponse.json(
        { error: 'Non autorisé à modifier cet article' },
        { status: 403 }
      );
    }

    // Mettre à jour l'article
    const updatedArticle = await prisma.article.update({
      where: { id },
      data: {
        ...(title && { title }),
        ...(content && { content }),
        ...(excerpt && { excerpt }),
        ...(typeof published === 'boolean' && { published }),
        ...(imageUrl && { imageUrl }),
        updatedAt: new Date()
      }
    });

    return NextResponse.json(updatedArticle);
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
  } finally {
    await prisma.$disconnect();
  }
}

// DELETE - Supprimer un article
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const decoded = verifyToken(request) as any; // eslint-disable-line @typescript-eslint/no-explicit-any
    const { id } = await params;
    // Vérifier que l'admin est propriétaire de l'article
    const existingArticle = await prisma.article.findUnique({
      where: { id },
      select: { adminId: true }
    });

    if (!existingArticle) {
      return NextResponse.json(
        { error: 'Article non trouvé' },
        { status: 404 }
      );
    }

    if (existingArticle.adminId !== decoded.id) {
      return NextResponse.json(
        { error: 'Non autorisé à supprimer cet article' },
        { status: 403 }
      );
    }

    // Supprimer l'article et ses relations
    await prisma.$transaction([
      // Supprimer les commentaires
      prisma.comment.deleteMany({
        where: { articleId: id }
      }),
      // Supprimer les ratings
      prisma.rating.deleteMany({
        where: { articleId: id }
      }),
      // Supprimer l'article
      prisma.article.delete({
        where: { id }
      })
    ]);

    return NextResponse.json({ message: 'Article supprimé avec succès' });
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
  } finally {
    await prisma.$disconnect();
  }
} 