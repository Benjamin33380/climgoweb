import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Middleware simplifié pour vérifier l'authentification
function verifyToken(request: NextRequest) {
  const token = request.headers.get('authorization')?.replace('Bearer ', '');
  
  if (!token) {
    throw new Error('Token manquant');
  }

  // Vérification simple du token (à améliorer en production)
  if (token !== 'admin-token') {
    throw new Error('Token invalide');
  }

  return { id: 'admin-1' };
}

// GET - Récupérer tous les commentaires
export async function GET(request: NextRequest) {
  try {
    verifyToken(request);

    const comments = await prisma.comment.findMany({
      include: {
        article: {
          select: {
            title: true,
            slug: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json(comments);
  } catch (error) {
    if (error instanceof Error && error.message.includes('Token')) {
      return NextResponse.json(
        { error: 'Non autorisé' },
        { status: 401 }
      );
    }
    
    console.error('Erreur lors de la récupération des commentaires:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// PATCH - Approuver/rejeter un commentaire
export async function PATCH(request: NextRequest) {
  try {
    verifyToken(request);
    
    const { commentId, approved } = await request.json();

    if (!commentId || typeof approved !== 'boolean') {
      return NextResponse.json(
        { error: 'ID du commentaire et statut requis' },
        { status: 400 }
      );
    }

    const comment = await prisma.comment.update({
      where: { id: commentId },
      data: { approved }
    });

    return NextResponse.json(comment);
  } catch (error) {
    if (error instanceof Error && error.message.includes('Token')) {
      return NextResponse.json(
        { error: 'Non autorisé' },
        { status: 401 }
      );
    }
    
    console.error('Erreur lors de la mise à jour du commentaire:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
      );
  } finally {
    await prisma.$disconnect();
  }
}

// DELETE - Supprimer un commentaire
export async function DELETE(request: NextRequest) {
  try {
    verifyToken(request);
    
    const { commentId } = await request.json();

    if (!commentId) {
      return NextResponse.json(
        { error: 'ID du commentaire requis' },
        { status: 400 }
      );
    }

    await prisma.comment.delete({
      where: { id: commentId }
    });

    return NextResponse.json({ message: 'Commentaire supprimé' });
  } catch (error) {
    if (error instanceof Error && error.message.includes('Token')) {
      return NextResponse.json(
        { error: 'Non autorisé' },
        { status: 401 }
      );
    }
    
    console.error('Erreur lors de la suppression du commentaire:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
} 