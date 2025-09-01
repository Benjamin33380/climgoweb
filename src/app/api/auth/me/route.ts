import { NextRequest, NextResponse } from 'next/server';
import { authenticateToken } from '@/lib/auth';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    console.log('🔍 [API /me] Début de la requête GET /api/auth/me');
    
    const token = request.cookies.get('auth-token')?.value;
    console.log('🔍 [API /me] Token trouvé:', token ? 'Oui' : 'Non');

    if (!token) {
      console.log('🔍 [API /me] Pas de token, retour 401');
      return NextResponse.json(
        { error: 'Token d\'authentification manquant' },
        { status: 401 }
      );
    }

    const decoded = await authenticateToken(token);
    console.log('🔍 [API /me] Token décodé:', decoded);
    
    if (!decoded) {
      console.log('🔍 [API /me] Token invalide, retour 401');
      return NextResponse.json(
        { error: 'Token invalide ou expiré' },
        { status: 401 }
      );
    }

    // Récupérer les informations complètes de l'utilisateur
    console.log('🔍 [API /me] Recherche de l\'utilisateur avec ID:', decoded.userId);
    
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        isActive: true,
        emailVerified: true,
        points: true,
        createdAt: true,
        updatedAt: true
      }
    });

    console.log('🔍 [API /me] Utilisateur trouvé en base:', user);

    if (!user || !user.isActive) {
      console.log('🔍 [API /me] Utilisateur non trouvé ou inactif:', { found: !!user, isActive: user?.isActive });
      return NextResponse.json(
        { error: 'Utilisateur non trouvé ou inactif' },
        { status: 404 }
      );
    }

    console.log('🔍 [API /me] Retour de l\'utilisateur:', user);
    return NextResponse.json({
      user,
      message: 'Utilisateur authentifié'
    });
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'utilisateur:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
} 