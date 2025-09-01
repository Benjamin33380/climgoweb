import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validation de l'email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Adresse email invalide' },
        { status: 400 }
      );
    }

    // Vérifier si l'email existe déjà
    const existingSubscriber = await prisma.newsletter.findUnique({
      where: { email: email.toLowerCase() }
    });

    if (existingSubscriber) {
      if (existingSubscriber.isActive) {
        return NextResponse.json(
          { error: 'Cette adresse email est déjà inscrite à la newsletter' },
          { status: 400 }
        );
      } else {
        // Réactiver l'inscription
        await prisma.newsletter.update({
          where: { email: email.toLowerCase() },
          data: { isActive: true }
        });
        
        return NextResponse.json({
          message: 'Inscription réactivée avec succès !'
        });
      }
    }

    // Créer un nouvel abonné
    await prisma.newsletter.create({
      data: {
        email: email.toLowerCase(),
        isActive: true
      }
    });

    return NextResponse.json({
      message: 'Inscription à la newsletter réussie !'
    }, { status: 201 });

  } catch (error) {
    console.error('Erreur lors de l\'inscription à la newsletter:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
} 