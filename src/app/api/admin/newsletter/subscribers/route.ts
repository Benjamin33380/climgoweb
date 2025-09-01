import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { authenticateToken } from '@/lib/auth';

export async function POST(request: NextRequest) {
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

    // Récupérer l'email à ajouter
    const { email } = await request.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email requis' },
        { status: 400 }
      );
    }

    // Valider le format de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format d\'email invalide' },
        { status: 400 }
      );
    }

    // Vérifier si l'email existe déjà
    const existing = await prisma.newsletter.findUnique({
      where: { email: email.toLowerCase() }
    });

    if (existing) {
      return NextResponse.json(
        { error: 'Cet email est déjà inscrit à la newsletter' },
        { status: 409 }
      );
    }

    // Ajouter le nouvel abonné
    const subscriber = await prisma.newsletter.create({
      data: {
        email: email.toLowerCase(),
        isActive: true
      }
    });

    console.log(`✅ [AddSubscriber] Nouvel abonné ajouté: ${subscriber.email}`);

    return NextResponse.json({
      message: 'Abonné ajouté avec succès',
      subscriber: {
        id: subscriber.id,
        email: subscriber.email,
        isActive: subscriber.isActive,
        createdAt: subscriber.createdAt
      }
    }, { status: 201 });

  } catch (error) {
    console.error('💥 [AddSubscriber] Erreur lors de l\'ajout:', error);
    return NextResponse.json(
      { 
        error: 'Erreur lors de l\'ajout de l\'abonné',
        details: error instanceof Error ? error.message : 'Erreur inconnue'
      },
      { status: 500 }
    );
  }
}

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

    // Récupérer les paramètres de requête
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '50');
    const search = searchParams.get('search') || '';

    // Construire les filtres
    const where: any = {}; // eslint-disable-line @typescript-eslint/no-explicit-any
    
    if (search) {
      where.email = { contains: search, mode: 'insensitive' };
    }

    // Compter le total d'abonnés
    const total = await prisma.newsletter.count({ where });

    // Récupérer les abonnés avec pagination
    const subscribers = await prisma.newsletter.findMany({
      where,
      orderBy: {
        createdAt: 'desc'
      },
      skip: (page - 1) * limit,
      take: limit,
      select: {
        id: true,
        email: true,
        isActive: true,
        createdAt: true
      }
    });

    const totalPages = Math.ceil(total / limit);

    return NextResponse.json({
      subscribers,
      pagination: {
        page,
        limit,
        total,
        totalPages
      }
    });

  } catch (error) {
    console.error('Erreur lors de la récupération des abonnés:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des abonnés' },
      { status: 500 }
    );
  }
}