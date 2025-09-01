import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { authenticateToken } from '@/lib/auth';

export async function GET(request: NextRequest) {
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

    // Récupérer les statistiques des notifications d'emails
    const emailNotifications = await prisma.notification.findMany({
      where: {
        type: 'NEWSLETTER_SENT'
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: 100 // Limiter aux 100 derniers envois
    });

    // Calculer les statistiques
    const totalSent = emailNotifications.reduce((sum, notif) => sum + notif.sentTo, 0);
    const totalFailed = emailNotifications.reduce((sum, notif) => sum + notif.failedTo, 0);
    const lastSent = emailNotifications.length > 0 ? emailNotifications[0].createdAt : null;

    // Extraire les templates utilisés (depuis les messages)
    const templatesUsed = emailNotifications
      .map(notif => {
        const match = notif.message.match(/template (\w+)/);
        return match ? match[1] : 'unknown';
      })
      .filter((template, index, arr) => arr.indexOf(template) === index); // Dédupliquer

    return NextResponse.json({
      totalSent,
      totalFailed,
      lastSent,
      templatesUsed,
      recentNotifications: emailNotifications.slice(0, 10) // 10 derniers envois
    });

  } catch (error) {
    console.error('Erreur lors de la récupération des statistiques:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des statistiques' },
      { status: 500 }
    );
  }
} 