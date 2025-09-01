import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { authenticateToken, hashPassword } from '@/lib/auth';

export async function PUT(
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

    const userId = (await params).id;
    const { email, password, firstName, lastName, role } = await request.json();

    // Validation des données
    if (!email) {
      return NextResponse.json(
        { error: 'Email requis' },
        { status: 400 }
      );
    }

    // Vérifier que l'utilisateur existe
    const existingUser = await prisma.user.findUnique({
      where: { id: userId }
    });

    if (!existingUser) {
      return NextResponse.json(
        { error: 'Utilisateur non trouvé' },
        { status: 404 }
      );
    }

    // Vérifier que l'email n'est pas déjà utilisé par un autre utilisateur
    if (email !== existingUser.email) {
      const userWithEmail = await prisma.user.findUnique({
        where: { email }
      });

      if (userWithEmail && userWithEmail.id !== userId) {
        return NextResponse.json(
          { error: 'Un autre utilisateur utilise déjà cet email' },
          { status: 400 }
        );
      }
    }

    // Préparer les données de mise à jour
    const updateData: any = { // eslint-disable-line @typescript-eslint/no-explicit-any
      email,
      firstName: firstName || null,
      lastName: lastName || null,
      role: role || 'USER'
    };

    // Ajouter le mot de passe seulement s'il est fourni
    if (password && password.trim() !== '') {
      updateData.password = await hashPassword(password);
    }

    // Mettre à jour l'utilisateur
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: updateData,
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
      message: 'Utilisateur modifié avec succès',
      user: updatedUser
    });

  } catch (error) {
    console.error('Erreur lors de la modification de l\'utilisateur:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la modification de l\'utilisateur' },
      { status: 500 }
    );
  }
}

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

    const userId = (await params).id;

    // Empêcher l'admin de se supprimer lui-même
    if (userId === decoded.userId) {
      return NextResponse.json(
        { error: 'Vous ne pouvez pas supprimer votre propre compte' },
        { status: 400 }
      );
    }

    // Vérifier que l'utilisateur existe
    const user = await prisma.user.findUnique({
      where: { id: userId }
    });

    if (!user) {
      return NextResponse.json(
        { error: 'Utilisateur non trouvé' },
        { status: 404 }
      );
    }

    // Supprimer l'utilisateur
    await prisma.user.delete({
      where: { id: userId }
    });

    return NextResponse.json({
      message: 'Utilisateur supprimé avec succès'
    });

  } catch (error) {
    console.error('Erreur lors de la suppression de l\'utilisateur:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la suppression de l\'utilisateur' },
      { status: 500 }
    );
  }
} 