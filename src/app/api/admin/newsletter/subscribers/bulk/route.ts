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

    // Récupérer les emails à ajouter
    const { emails } = await request.json();

    if (!emails || !Array.isArray(emails) || emails.length === 0) {
      return NextResponse.json(
        { error: 'Liste d\'emails requise' },
        { status: 400 }
      );
    }

    // Valider les emails
    const validEmails = emails.filter(email => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    });

    if (validEmails.length === 0) {
      return NextResponse.json(
        { error: 'Aucun email valide fourni' },
        { status: 400 }
      );
    }

    console.log(`📧 [BulkSubscribers] Ajout de ${validEmails.length} abonnés`);

    // Ajouter les abonnés en masse
    const results = [];
    let added = 0;
    let skipped = 0;
    let errors = 0;

    for (const email of validEmails) {
      try {
        // Vérifier si l'email existe déjà
        const existing = await prisma.newsletter.findUnique({
          where: { email: email.toLowerCase() }
        });

        if (existing) {
          skipped++;
          results.push({ email, status: 'skipped', reason: 'Déjà existant' });
          continue;
        }

        // Ajouter le nouvel abonné
        await prisma.newsletter.create({
          data: {
            email: email.toLowerCase(),
            isActive: true
          }
        });

        added++;
        results.push({ email, status: 'added' });

      } catch (error) {
        errors++;
        results.push({ email, status: 'error', reason: error instanceof Error ? error.message : 'Erreur inconnue' });
        console.error(`❌ [BulkSubscribers] Erreur pour ${email}:`, error);
      }
    }

    console.log(`✅ [BulkSubscribers] Résultat: ${added} ajoutés, ${skipped} ignorés, ${errors} erreurs`);

    return NextResponse.json({
      message: 'Import terminé',
      summary: {
        total: validEmails.length,
        added,
        skipped,
        errors
      },
      results
    });

  } catch (error) {
    console.error('💥 [BulkSubscribers] Erreur lors de l\'import:', error);
    return NextResponse.json(
      { 
        error: 'Erreur lors de l\'import des abonnés',
        details: error instanceof Error ? error.message : 'Erreur inconnue'
      },
      { status: 500 }
    );
  }
} 