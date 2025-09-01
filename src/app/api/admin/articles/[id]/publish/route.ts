import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { authenticateToken } from '@/lib/auth';

// PATCH - Publier/dépublier un article
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    // Vérifier l'authentification admin
    const token = request.cookies.get('auth-token')?.value;
    if (!token) {
      return NextResponse.json(
        { error: 'Token manquant' },
        { status: 401 }
      );
    }

    const decoded = await authenticateToken(token);
    if (!decoded) {
      return NextResponse.json(
        { error: 'Token invalide' },
        { status: 401 }
      );
    }

    // Vérifier que l'utilisateur est admin
    const adminUser = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { role: true }
    });

    if (!adminUser || adminUser.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Accès refusé' },
        { status: 403 }
      );
    }

    const articleId = id;
    const { published } = await request.json();

    // Vérifier que l'article existe
    const existingArticle = await prisma.article.findUnique({
      where: { id: articleId }
    });

    if (!existingArticle) {
      return NextResponse.json(
        { error: 'Article non trouvé' },
        { status: 404 }
      );
    }

    // Mettre à jour le statut de publication
    const updatedArticle = await prisma.article.update({
      where: { id: articleId },
      data: {
        published: published,
        updatedAt: new Date()
      },
      include: {
        author: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true
          }
        }
      }
    });

    return NextResponse.json({
      message: `Article ${published ? 'publié' : 'dépublié'} avec succès`,
      article: updatedArticle
    });

  } catch (error) {
    console.error('Erreur lors de la modification du statut de publication:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la modification du statut de publication' },
      { status: 500 }
    );
  }
} 