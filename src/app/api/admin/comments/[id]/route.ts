import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// PATCH - Mettre à jour le statut d'approbation d'un commentaire
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { isApproved } = body;

    if (typeof isApproved !== 'boolean') {
      return NextResponse.json(
        { error: 'isApproved doit être un booléen' },
        { status: 400 }
      );
    }

    const comment = await prisma.comment.update({
      where: { id },
      data: { isApproved }
    });

    return NextResponse.json(comment);
  } catch (error) {
    console.error('Erreur lors de la mise à jour du commentaire:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour du commentaire' },
      { status: 500 }
    );
  }
}

// DELETE - Supprimer un commentaire
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await prisma.comment.delete({
      where: { id }
    });

    return NextResponse.json({ message: 'Commentaire supprimé avec succès' });
  } catch (error) {
    console.error('Erreur lors de la suppression du commentaire:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la suppression du commentaire' },
      { status: 500 }
    );
  }
} 