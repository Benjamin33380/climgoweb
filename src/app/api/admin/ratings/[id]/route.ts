import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// DELETE - Supprimer un rating
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await prisma.rating.delete({
      where: { id }
    });

    return NextResponse.json({ message: 'Rating supprimé avec succès' });
  } catch (error) {
    console.error('Erreur lors de la suppression du rating:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la suppression du rating' },
      { status: 500 }
    );
  }
} 