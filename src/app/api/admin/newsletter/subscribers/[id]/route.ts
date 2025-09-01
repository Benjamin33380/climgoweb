import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { authenticateToken } from '@/lib/auth';

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Vérifier l'authentification admin
    const token = request.cookies.get('auth-token')?.value;
    if (!token) {
      return NextResponse.json(
        { error: 'Token manquant' },
        { status: 401 }
      );
    }

    const decoded = await authenticateToken(token);
    if (!decoded) {
      return NextResponse.json(
        { error: 'Token invalide' },
        { status: 401 }
      );
    }

    // Vérifier que l'utilisateur est admin
    const adminUser = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { role: true }
    });

    if (!adminUser || adminUser.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Accès refusé' },
        { status: 403 }
      );
    }

    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { error: 'ID de l\'abonné requis' },
        { status: 400 }
      );
    }

    // Vérifier que l'abonné existe
    const subscriber = await prisma.newsletter.findUnique({
      where: { id }
    });

    if (!subscriber) {
      return NextResponse.json(
        { error: 'Abonné non trouvé' },
        { status: 404 }
      );
    }

    // Supprimer l'abonné
    await prisma.newsletter.delete({
      where: { id }
    });

    console.log(`✅ [DeleteSubscriber] Abonné ${subscriber.email} supprimé`);

    return NextResponse.json({
      message: 'Abonné supprimé avec succès',
      deletedEmail: subscriber.email
    });

  } catch (error) {
    console.error('💥 [DeleteSubscriber] Erreur lors de la suppression:', error);
    return NextResponse.json(
      { 
        error: 'Erreur lors de la suppression de l\'abonné',
        details: error instanceof Error ? error.message : 'Erreur inconnue'
      },
      { status: 500 }
    );
  }
} 