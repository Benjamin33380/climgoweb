import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email et mot de passe requis' },
        { status: 400 }
      );
    }

    // Trouver l'admin par email
    const admin = await prisma.admin.findFirst({
      where: { email }
    });

    if (!admin) {
      return NextResponse.json(
        { error: 'Identifiants invalides' },
        { status: 401 }
      );
    }

    // Vérification simplifiée du mot de passe (à améliorer en production)
    if (password !== 'admin123') {
      return NextResponse.json(
        { error: 'Identifiants invalides' },
        { status: 401 }
      );
    }

    // Token simplifié (à améliorer en production)
    const token = 'admin-token';

    // Retourner le token et les infos admin (sans le mot de passe)
    const { password: _, ...adminWithoutPassword } = admin;

    return NextResponse.json({
      token,
      admin: adminWithoutPassword
    });

  } catch (error) {
    console.error('Erreur de connexion:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
} 