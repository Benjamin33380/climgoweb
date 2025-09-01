import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { authenticateToken } from '@/lib/auth';

const prisma = new PrismaClient();

// PUT - Mettre à jour le profil utilisateur
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

    const { firstName, lastName, email } = await request.json();

    // Validation des données
    if (email && !email.includes('@')) {
      return NextResponse.json(
        { error: 'Format d\'email invalide' },
        { status: 400 }
      );
    }

    // Vérifier si l'email est déjà utilisé par un autre utilisateur
    if (email && email !== decoded.email) {
      const existingUser = await prisma.user.findFirst({
        where: {
          email: email,
          id: { not: decoded.userId }
        }
      });

      if (existingUser) {
        return NextResponse.json(
          { error: 'Cet email est déjà utilisé par un autre utilisateur' },
          { status: 400 }
        );
      }
    }

    // Mettre à jour le profil
    const updatedUser = await prisma.user.update({
      where: { id: decoded.userId },
      data: {
        firstName: firstName || null,
        lastName: lastName || null,
        email: email || decoded.email,
        updatedAt: new Date()
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        isActive: true,
        emailVerified: true,
        createdAt: true,
        updatedAt: true
      }
    });

    return NextResponse.json({
      success: true,
      user: updatedUser,
      message: 'Profil mis à jour avec succès'
    });

  } catch (error) {
    console.error('Erreur lors de la mise à jour du profil:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
} 