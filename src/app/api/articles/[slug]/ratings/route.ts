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

// POST - Créer ou mettre à jour un rating
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    // Vérifier l'authentification
    const authResult = await getAuthUser(request);
    if (!authResult.success || !authResult.user) {
      return NextResponse.json(
        { error: 'Vous devez être connecté pour noter un article' },
        { status: 401 }
      );
    }

    const { value } = await request.json();

    if (!value || typeof value !== 'number' || value < 1 || value > 5) {
      return NextResponse.json(
        { error: 'La note doit être comprise entre 1 et 5' },
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

    // Vérifier si l'utilisateur a déjà noté cet article
    const existingRating = await prisma.rating.findUnique({
      where: {
        authorId_articleId: {
          authorId: authResult.user.id,
          articleId: article.id
        }
      }
    });

    if (existingRating) {
      return NextResponse.json(
        { error: 'Vous avez déjà noté cet article. Vous ne pouvez noter qu\'une seule fois par article.' },
        { status: 400 }
      );
    }

    // Créer un nouveau rating
    const rating = await prisma.rating.create({
      data: {
        value,
        authorId: authResult.user.id,
        articleId: article.id
      },
      include: {
        author: {
          select: {
            id: true,
            firstName: true,
            lastName: true
          }
        }
      }
    });

    // Ajouter 4 points à l'utilisateur pour avoir noté l'article
    await prisma.user.update({
      where: { id: authResult.user.id },
      data: {
        points: {
          increment: 4
        }
      }
    });

    // Transformer la réponse pour correspondre à l'interface
    const transformedRating = {
      id: rating.id,
      value: rating.value,
      author: {
        id: rating.author.id,
        firstName: rating.author.firstName,
        lastName: rating.author.lastName
      },
      createdAt: rating.createdAt.toISOString()
    };

    return NextResponse.json(transformedRating, { status: 201 });

  } catch (error) {
    console.error('Erreur lors de la création du rating:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}

// GET - Récupérer les ratings d'un article
export async function GET(
  request : NextRequest, // eslint-disable-line @typescript-eslint/no-unused-vars
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

    // Récupérer tous les ratings
    const ratings = await prisma.rating.findMany({
      where: {
        articleId: article.id
      },
      include: {
        author: {
          select: {
            id: true,
            firstName: true,
            lastName: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    // Transformer les ratings
    const transformedRatings = ratings.map(rating => ({
      id: rating.id,
      value: rating.value,
      author: {
        id: rating.author.id,
        firstName: rating.author.firstName,
        lastName: rating.author.lastName
      },
      createdAt: rating.createdAt.toISOString()
    }));

    return NextResponse.json({ ratings: transformedRatings });

  } catch (error) {
    console.error('Erreur lors de la récupération des ratings:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}