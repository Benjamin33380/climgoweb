import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { authenticateToken } from '@/lib/auth';
import { sendArticlePublishedNotification } from '@/lib/notifications';

const prisma = new PrismaClient();

// POST - Publier un article et envoyer les notifications
export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get('auth-token')?.value;

    if (!token) {
      return NextResponse.json(
        { error: 'Token d\'authentification manquant' },
        { status: 401 }
      );
    }

    const decoded = await authenticateToken(token);
    if (!decoded) {
      return NextResponse.json(
        { error: 'Token invalide ou expiré' },
        { status: 401 }
      );
    }

    // Vérifier que l'utilisateur est admin
    if (decoded.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Accès refusé. Rôle admin requis.' },
        { status: 403 }
      );
    }

    const { articleId } = await request.json();

    if (!articleId) {
      return NextResponse.json(
        { error: 'ID de l\'article requis' },
        { status: 400 }
      );
    }

    // Récupérer l'article
    const article = await prisma.article.findUnique({
      where: { id: articleId },
      include: {
        author: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    if (!article) {
      return NextResponse.json(
        { error: 'Article non trouvé' },
        { status: 404 }
      );
    }

    // Préparer les données de l'auteur avec le bon type
    const authorData = {
      id: article.author.id,
      email: article.author.email,
      firstName: article.author.firstName || undefined,
      lastName: article.author.lastName || undefined,
    };

    // Publier l'article
    const updatedArticle = await prisma.article.update({
      where: { id: articleId },
      data: {
        published: true,
        updatedAt: new Date(),
      },
    });

    console.log('📝 [API] Article publié:', article.title);

    // Envoyer les notifications par email
    try {
      const notificationResult = await sendArticlePublishedNotification(
        {
          id: article.id,
          title: article.title,
          slug: article.slug,
          excerpt: article.excerpt || undefined,
          authorId: article.authorId,
        },
        authorData
      );

      console.log('📧 [API] Résultat des notifications:', notificationResult);

      return NextResponse.json({
        success: true,
        message: 'Article publié avec succès',
        article: updatedArticle,
        notifications: notificationResult,
      });
    } catch (notificationError) {
      console.error('❌ [API] Erreur lors de l\'envoi des notifications:', notificationError);
      
      // L'article est publié mais les notifications ont échoué
      return NextResponse.json({
        success: true,
        message: 'Article publié avec succès, mais erreur lors de l\'envoi des notifications',
        article: updatedArticle,
        notificationError: notificationError instanceof Error ? notificationError.message : 'Erreur inconnue',
      });
    }

  } catch (error) {
    console.error('❌ [API] Erreur lors de la publication de l\'article:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
} 