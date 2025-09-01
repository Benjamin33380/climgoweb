import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { authenticateToken } from '@/lib/auth';
import { EmailService } from '@/lib/emailService';

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

    // Récupérer les données de la requête
    const body = await request.json();
    const { template, subject, recipientIds, customVariables } = body;

    // Validation des données
    if (!template || !subject) {
      return NextResponse.json(
        { error: 'Template et sujet sont requis' },
        { status: 400 }
      );
    }

    if (!recipientIds || recipientIds.length === 0) {
      return NextResponse.json(
        { error: 'Au moins un destinataire est requis' },
        { status: 400 }
      );
    }

    console.log('📧 [NewsletterSend] Début de l\'envoi:', {
      template,
      subject,
      recipientCount: recipientIds?.length || 0,
      recipientIds
    });

    // Récupérer les destinataires depuis la base de données
    const userIds = recipientIds.filter((id: string) => id.startsWith('user-')).map((id: string) => id.replace('user-', ''));
    const subscriberIds = recipientIds.filter((id: string) => id.startsWith('subscriber-')).map((id: string) => id.replace('subscriber-', ''));
    
    console.log('📧 [NewsletterSend] IDs utilisateurs:', userIds);
    console.log('📧 [NewsletterSend] IDs abonnés:', subscriberIds);

    // Récupérer TOUS les utilisateurs et abonnés sélectionnés
    const allRecipients = [];

    // Récupérer les utilisateurs
    if (userIds.length > 0) {
      const userRecipients = await prisma.user.findMany({
        where: {
          id: { in: userIds },
          isActive: true // Ne pas filtrer par emailVerified
        },
        select: {
          email: true,
          firstName: true,
          lastName: true
        }
      });
      
      allRecipients.push(...userRecipients.map(user => ({
        email: user.email,
        firstName: user.firstName || undefined,
        lastName: user.lastName || undefined
      })));
      
      console.log('📧 [NewsletterSend] Utilisateurs trouvés:', userRecipients.length);
    }

    // Récupérer les abonnés newsletter
    if (subscriberIds.length > 0) {
      const subscriberRecipients = await prisma.newsletter.findMany({
        where: {
          id: { in: subscriberIds },
          isActive: true
        },
        select: {
          email: true
        }
      });
      
      allRecipients.push(...subscriberRecipients.map(sub => ({
        email: sub.email,
        firstName: undefined,
        lastName: undefined
      })));
      
      console.log('📧 [NewsletterSend] Abonnés trouvés:', subscriberRecipients.length);
    }

    console.log('📧 [NewsletterSend] Total destinataires:', allRecipients.length);
    console.log('📧 [NewsletterSend] Tous les destinataires:', allRecipients);

    if (allRecipients.length === 0) {
      return NextResponse.json(
        { error: 'Aucun destinataire valide trouvé' },
        { status: 400 }
      );
    }

    // Envoyer les emails avec les variables remplacées
    const result = await EmailService.sendTemplateEmail(
      template,
      allRecipients,
      customVariables || {}
    );

    console.log('📧 [NewsletterSend] Résultat envoi:', result);

    // Enregistrer les statistiques
    try {
      await prisma.notification.create({
        data: {
          type: 'NEWSLETTER_SENT',
          title: `Newsletter: ${subject}`,
          message: `Email envoyé via le template ${template}`,
          userId: decoded.userId,
          sentTo: result.success,
          failedTo: result.failed
        }
      });
    } catch (error) {
      console.error('❌ [NewsletterSend] Erreur lors de l\'enregistrement des stats:', error);
    }

    return NextResponse.json({
      success: result.success,
      failed: result.failed,
      errors: result.errors,
      recipients: allRecipients.length,
      debug: {
        template,
        variables: customVariables,
        recipientCount: allRecipients.length
      }
    });

  } catch (error) {
    console.error('💥 [NewsletterSend] Erreur lors de l\'envoi:', error);
    return NextResponse.json(
      { 
        error: 'Erreur lors de l\'envoi des emails',
        details: error instanceof Error ? error.message : 'Erreur inconnue'
      },
      { status: 500 }
    );
  }
}
