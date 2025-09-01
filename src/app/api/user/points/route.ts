import { NextRequest, NextResponse } from 'next/server';
import { authenticateToken } from '@/lib/auth';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('auth-token')?.value;

    if (!token) {
      return NextResponse.json(
        { error: 'Token d\'authentification manquant' },
        { status: 401 }
      );
    }

    const decoded = await authenticateToken(token);
    
    if (!decoded) {
      return NextResponse.json(
        { error: 'Token invalide ou expiré' },
        { status: 401 }
      );
    }

    // Récupérer les points de l'utilisateur
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { 
        id: true,
        points: true
      }
    });

    if (!user) {
      return NextResponse.json(
        { error: 'Utilisateur non trouvé' },
        { status: 404 }
      );
    }

    // Récupérer les points
    const points = user.points ?? 5;

    return NextResponse.json({
      points: points
    });

  } catch (error) {
    console.error('Erreur lors de la récupération des points:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
} 