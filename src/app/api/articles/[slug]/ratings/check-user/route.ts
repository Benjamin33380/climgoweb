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

// GET - Vérifier si l'utilisateur a déjà noté cet article
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    // Vérifier l'authentification
    const authResult = await getAuthUser(request);
    if (!authResult.success || !authResult.user) {
      return NextResponse.json(
        { error: 'Vous devez être connecté' },
        { status: 401 }
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
      },
      select: { id: true, value: true }
    });

    return NextResponse.json({
      hasRated: !!existingRating,
      rating: existingRating ? existingRating.value : null
    });

  } catch (error) {
    console.error('Erreur lors de la vérification du rating:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
} 