import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(  ) {
  try {
    console.log('🔍 Récupération des destinataires...');

    // Récupérer TOUS les utilisateurs actifs (pas seulement emailVerified)
    const users = await prisma.user.findMany({
      where: {
        isActive: true
        // emailVerified: true, // Commenté pour inclure tous les utilisateurs actifs
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        emailVerified: true
      }
    });

    console.log(`👥 ${users.length} utilisateurs trouvés`);

    // Récupérer TOUS les abonnés newsletter
    const newsletterSubscribers = await prisma.newsletter.findMany({
      where: {
        isActive: true
      },
      select: {
        id: true,
        email: true,
        createdAt: true
      }
    });

    console.log(`📧 ${newsletterSubscribers.length} abonnés newsletter trouvés`);

    // Combiner et dédupliquer par email
    const allRecipients = new Map();

    // Ajouter d'abord les utilisateurs (priorité)
    users.forEach(user => {
      allRecipients.set(user.email.toLowerCase(), {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        type: 'user',
        source: 'user_account',
        emailVerified: user.emailVerified
      });
    });

    // Ajouter les abonnés newsletter (éviter les doublons)
    newsletterSubscribers.forEach(subscriber => {
      const emailLower = subscriber.email.toLowerCase();
      if (!allRecipients.has(emailLower)) {
        allRecipients.set(emailLower, {
          id: subscriber.id,
          email: subscriber.email,
          firstName: null,
          lastName: null,
          role: null,
          type: 'newsletter',
          source: 'newsletter_signup',
          emailVerified: false
        });
      }
    });

    const recipients = Array.from(allRecipients.values());

    console.log(`✅ ${recipients.length} destinataires uniques au total`);

    // Statistiques
    const stats = {
      total: recipients.length,
      users: users.length,
      newsletter: newsletterSubscribers.length,
      unique: recipients.length
    };

    return NextResponse.json({
      recipients,
      stats
    });

  } catch (error) {
    console.error('❌ Erreur lors de la récupération des destinataires:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}