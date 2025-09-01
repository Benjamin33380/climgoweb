import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { authenticateToken } from '@/lib/auth';

// GET - Récupérer un article spécifique
export async function GET(
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

    // Récupérer l'article avec l'auteur
    const article = await prisma.article.findUnique({
      where: { id: articleId },
      include: {
        author: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true
          }
        },
        _count: {
          select: {
            comments: true
          }
        }
      }
    });

    if (!article) {
      return NextResponse.json(
        { error: 'Article non trouvé' },
        { status: 404 }
      );
    }

    // Nettoyer les données pour gérer les valeurs nulles
    const cleanedArticle = {
      ...article,
      createdAt: article.createdAt || new Date(),
      updatedAt: article.updatedAt || new Date()
    };

    return NextResponse.json({ article: cleanedArticle });

  } catch (error) {
    console.error('Erreur lors de la récupération de l\'article:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération de l\'article' },
      { status: 500 }
    );
  }
}

// PUT - Modifier un article
export async function PUT(
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
    const { title, content, excerpt, imageUrl, published, slug } = await request.json();

    // Validation des données
    if (!title || !content || !slug) {
      return NextResponse.json(
        { error: 'Titre, contenu et slug sont requis' },
        { status: 400 }
      );
    }

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

    // Vérifier que le slug est unique (sauf pour cet article)
    if (slug !== existingArticle.slug) {
      const articleWithSlug = await prisma.article.findUnique({
        where: { slug }
      });

      if (articleWithSlug) {
        return NextResponse.json(
          { error: 'Un autre article utilise déjà ce slug' },
          { status: 400 }
        );
      }
    }

    // Mettre à jour l'article
    const updatedArticle = await prisma.article.update({
      where: { id: articleId },
      data: {
        title,
        slug,
        content,
        excerpt: excerpt || null,
        imageUrl: imageUrl || null,
        published: published || false,
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
      message: 'Article modifié avec succès',
      article: updatedArticle
    });

  } catch (error) {
    console.error('Erreur lors de la modification de l\'article:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la modification de l\'article' },
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

    // Vérifier que l'article existe
    const article = await prisma.article.findUnique({
      where: { id: articleId }
    });

    if (!article) {
      return NextResponse.json(
        { error: 'Article non trouvé' },
        { status: 404 }
      );
    }

    // Supprimer d'abord les relations (commentaires et ratings)
    // MongoDB ne gère pas automatiquement les suppressions en cascade
    console.log(`🗑️ [Admin] Suppression des relations pour l'article ${articleId}`);
    
    try {
      // Supprimer les commentaires
      const deletedComments = await prisma.comment.deleteMany({
        where: { articleId: articleId }
      });
      console.log(`🗑️ [Admin] ${deletedComments.count} commentaires supprimés`);

      // Supprimer les ratings
      const deletedRatings = await prisma.rating.deleteMany({
        where: { articleId: articleId }
      });
      console.log(`🗑️ [Admin] ${deletedRatings.count} ratings supprimés`);

      // Supprimer les notifications liées
      const deletedNotifications = await prisma.notification.deleteMany({
        where: { articleId: articleId }
      });
      console.log(`🗑️ [Admin] ${deletedNotifications.count} notifications supprimées`);

    } catch (relationError) {
      console.error('❌ [Admin] Erreur lors de la suppression des relations:', relationError);
      return NextResponse.json(
        { error: 'Erreur lors de la suppression des relations de l\'article' },
        { status: 500 }
      );
    }

    // Maintenant supprimer l'article
    await prisma.article.delete({
      where: { id: articleId }
    });

    return NextResponse.json({
      message: 'Article supprimé avec succès'
    });

  } catch (error) {
    console.error('Erreur lors de la suppression de l\'article:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la suppression de l\'article' },
      { status: 500 }
    );
  }
} 