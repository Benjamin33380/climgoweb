import { NextRequest, NextResponse } from 'next/server';
import { createUser } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { email, password, firstName, lastName } = await request.json();

    // Validation des données
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email et mot de passe requis' },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Le mot de passe doit contenir au moins 6 caractères' },
        { status: 400 }
      );
    }

    // Créer l'utilisateur avec 5 points par défaut
    const result = await createUser({
      email,
      password,
      firstName,
      lastName,
      role: 'USER'
    });

    if (!result.success) {
      return NextResponse.json(
        { error: result.error },
        { status: 400 }
      );
    }

    // L'utilisateur est créé avec 5 points par défaut (défini dans le schéma Prisma)
    return NextResponse.json({
      success: true,
      message: 'Compte créé avec succès ! Vous avez gagné 5 points de bienvenue.',
      user: result.user
    });

  } catch (error) {
    console.error('Erreur lors de l\'inscription:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
} 