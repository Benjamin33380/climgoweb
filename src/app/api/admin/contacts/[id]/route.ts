import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// PATCH - Mettre à jour le statut d'un contact
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { status } = body;

    if (!status || !['PENDING', 'PROCESSED', 'CLOSED'].includes(status)) {
      return NextResponse.json(
        { error: 'Statut invalide' },
        { status: 400 }
      );
    }

    const contact = await prisma.contact.update({
      where: { id },
      data: { status }
    });

    return NextResponse.json(contact);
  } catch (error) {
    console.error('Erreur lors de la mise à jour du contact:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour du contact' },
      { status: 500 }
    );
  }
}

// DELETE - Supprimer un contact
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await prisma.contact.delete({
      where: { id }
    });

    return NextResponse.json({ message: 'Contact supprimé avec succès' });
  } catch (error) {
    console.error('Erreur lors de la suppression du contact:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la suppression du contact' },
      { status: 500 }
    );
  }
} 