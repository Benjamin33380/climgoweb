import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { authenticateToken, hashPassword, verifyPassword } from '@/lib/auth';

const prisma = new PrismaClient();

// PUT - Changer le mot de passe utilisateur
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

    const { currentPassword, newPassword } = await request.json();

    // Validation des données
    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        { error: 'Mot de passe actuel et nouveau mot de passe requis' },
        { status: 400 }
      );
    }

    if (newPassword.length < 8) {
      return NextResponse.json(
        { error: 'Le nouveau mot de passe doit contenir au moins 8 caractères' },
        { status: 400 }
      );
    }

    // Récupérer l'utilisateur avec son mot de passe hashé
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: {
        id: true,
        password: true
      }
    });

    if (!user) {
      return NextResponse.json(
        { error: 'Utilisateur non trouvé' },
        { status: 404 }
      );
    }

    // Vérifier le mot de passe actuel
    const isCurrentPasswordValid = await verifyPassword(currentPassword, user.password);
    if (!isCurrentPasswordValid) {
      return NextResponse.json(
        { error: 'Mot de passe actuel incorrect' },
        { status: 400 }
      );
    }

    // Hasher le nouveau mot de passe
    const hashedNewPassword = await hashPassword(newPassword);

    // Mettre à jour le mot de passe
    await prisma.user.update({
      where: { id: decoded.userId },
      data: {
        password: hashedNewPassword,
        updatedAt: new Date()
      }
    });

    return NextResponse.json({
      success: true,
      message: 'Mot de passe modifié avec succès'
    });

  } catch (error) {
    console.error('Erreur lors du changement de mot de passe:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
} 