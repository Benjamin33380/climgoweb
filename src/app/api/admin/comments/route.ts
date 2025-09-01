import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

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

  return { adminId: 'admin-1' };
}

// GET - Récupérer tous les commentaires
export async function GET() {
  try {
    const comments = await prisma.comment.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        author: {
          select: {
            firstName: true,
            lastName: true,
            email: true
          }
        },
        article: {
          select: {
            title: true,
            slug: true
          }
        }
      }
    });

    return NextResponse.json(comments);
  } catch (error) {
    console.error('Erreur lors de la récupération des commentaires:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des commentaires' },
      { status: 500 }
    );
  }
}

// PATCH - Modifier un commentaire
export async function PATCH(request: NextRequest) {
  try {
    verifyToken(request);
    
    const { commentId, approved } = await request.json();

    if (typeof commentId !== 'string' || typeof approved !== 'boolean') {
      return NextResponse.json(
        { error: 'commentId et approved requis' },
        { status: 400 }
      );
    }

    // TODO: Remplacer par Supabase
    const comment = {
      id: commentId,
      is_approved: approved,
      updated_at: new Date().toISOString()
    };

    return NextResponse.json(comment);
  } catch (error) {
    if (error instanceof Error && error.message.includes('Token')) {
      return NextResponse.json(
        { error: 'Non autorisé' },
        { status: 401 }
      );
    }
    
    console.error('Erreur lors de la modification du commentaire:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}

// DELETE - Supprimer un commentaire
export async function DELETE(request: NextRequest) {
  try {
    verifyToken(request);
    
    const { commentId } = await request.json();

    if (typeof commentId !== 'string') {
      return NextResponse.json(
        { error: 'commentId requis' },
        { status: 400 }
      );
    }

    // TODO: Remplacer par Supabase
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
  }
} 