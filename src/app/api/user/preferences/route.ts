import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { authenticateToken } from '@/lib/auth';

const prisma = new PrismaClient();

// GET - Récupérer les préférences utilisateur
export async function GET(request: NextRequest) {
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

    // Récupérer les préférences de l'utilisateur
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        // Pour l'instant, on retourne des préférences par défaut
        // Plus tard, on pourra ajouter une table user_preferences
      }
    });

    if (!user) {
      return NextResponse.json(
        { error: 'Utilisateur non trouvé' },
        { status: 404 }
      );
    }

    // Préférences par défaut
    const preferences = {
      newsletter_subscribed: false,
      email_notifications: true,
      comment_notifications: true,
      rating_notifications: true,
      marketing_emails: false,
      profile_public: false,
      show_activity: true
    };

    return NextResponse.json({
      user,
      preferences
    });

  } catch (error) {
    console.error('Erreur lors de la récupération des préférences:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}

// PUT - Mettre à jour les préférences utilisateur
export async function PUT(request: NextRequest) {
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


    // Pour l'instant, on retourne un succès
    // Plus tard, on pourra sauvegarder dans une table user_preferences
    return NextResponse.json({
      success: true,
      message: 'Préférences mises à jour avec succès'
    });

  } catch (error) {
    console.error('Erreur lors de la mise à jour des préférences:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
} 