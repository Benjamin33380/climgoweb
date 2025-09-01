import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { authenticateToken } from '@/lib/auth';

// Fonction pour extraire le token depuis les cookies
async function getAuthUser(request: NextRequest) {
  try {
    const authToken = request.cookies.get('auth-token')?.value;
    
    if (!authToken) {
      return { success: false, user: null };
    }

    const decoded = await authenticateToken(authToken);
    if (!decoded) {
      return { success: false, user: null };
    }

    // Récupérer les informations complètes de l'utilisateur
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        isActive: true
      }
    });

    if (!user || !user.isActive) {
      return { success: false, user: null };
    }

    return { success: true, user };
  } catch (error) {
    console.error('Erreur lors de la vérification du token:', error);
    return { success: false, user: null };
  }
}

// POST - Créer un nouveau commentaire
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    // Vérifier l'authentification
    const authResult = await getAuthUser(request);
    if (!authResult.success || !authResult.user) {
      return NextResponse.json(
        { error: 'Vous devez être connecté pour commenter' },
        { status: 401 }
      );
    }

    const { content } = await request.json();

    if (!content || typeof content !== 'string' || content.trim().length === 0) {
      return NextResponse.json(
        { error: 'Le contenu du commentaire est requis' },
        { status: 400 }
      );
    }

    // Récupérer l'article par le slug
    const article = await prisma.article.findUnique({
      where: { slug: (await params).slug, published: true },
      select: { id: true }
    });

    if (!article) {
      return NextResponse.json(
        { error: 'Article non trouvé' },
        { status: 404 }
      );
    }

    // Créer le commentaire - automatiquement approuvé pour les utilisateurs connectés
    const comment = await prisma.comment.create({
      data: {
        content: content.trim(),
        authorId: authResult.user.id,
        articleId: article.id,
        isApproved: true // Automatiquement approuvé pour les utilisateurs connectés
      },
      include: {
        author: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true
          }
        }
      }
    });

    // Ajouter 8 points à l'utilisateur pour avoir commenté
    await prisma.user.update({
      where: { id: authResult.user.id },
      data: {
        points: {
          increment: 8
        }
      }
    });

    // Transformer la réponse pour correspondre à l'interface
    const transformedComment = {
      id: comment.id,
      content: comment.content,
      author: {
        id: comment.author.id,
        firstName: comment.author.firstName,
        lastName: comment.author.lastName,
        email: comment.author.email
      },
      isApproved: comment.isApproved,
      createdAt: comment.createdAt.toISOString()
    };

    return NextResponse.json(transformedComment, { status: 201 });

  } catch (error) {
    console.error('Erreur lors de la création du commentaire:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}

// GET - Récupérer les commentaires d'un article
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    // Récupérer l'article par le slug
    const article = await prisma.article.findUnique({
      where: { slug: (await params).slug, published: true },
      select: { id: true }
    });

    if (!article) {
      return NextResponse.json(
        { error: 'Article non trouvé' },
        { status: 404 }
      );
    }

    // Récupérer les commentaires approuvés
    const comments = await prisma.comment.findMany({
      where: {
        articleId: article.id,
        isApproved: true
      },
      include: {
        author: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    // Transformer les commentaires
    const transformedComments = comments.map(comment => ({
      id: comment.id,
      content: comment.content,
      author: {
        id: comment.author.id,
        firstName: comment.author.firstName,
        lastName: comment.author.lastName,
        email: comment.author.email
      },
      isApproved: comment.isApproved,
      createdAt: comment.createdAt.toISOString()
    }));

    return NextResponse.json({ comments: transformedComments });

  } catch (error) {
    console.error('Erreur lors de la récupération des commentaires:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}