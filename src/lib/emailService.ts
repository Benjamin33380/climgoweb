import nodemailer from 'nodemailer';
import { emailTemplates, replaceTemplateVariables } from './emailTemplates';
import { prisma } from '@/lib/prisma';

// Configuration du transporteur email (OVH/Zimbra)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'ssl0.ovh.net', // Serveur SMTP OVH
  port: parseInt(process.env.SMTP_PORT || '587'), // Port SMTP (587 pour TLS, 465 pour SSL)
  secure: false, // true pour 465, false pour autres ports
  auth: {
    user: process.env.SMTP_USER || 'contact@climgo.fr',
    pass: process.env.SMTP_PASS || '', // Mot de passe de votre compte mail
  },
  tls: {
    rejectUnauthorized: false, // Pour éviter les erreurs de certificat
  },
});

export interface EmailRecipient {
  email: string;
  firstName?: string;
  lastName?: string;
}

export interface EmailData {
  template: string;
  subject: string;
  variables: Record<string, string>;
  recipients: EmailRecipient[];
}

export class EmailService {
  /**
   * Envoyer un email à un destinataire
   */
  static async sendEmail(to: string, subject: string, html: string): Promise<boolean> {
    try {
      const mailOptions = {
        from: `"ClimGO" <${process.env.SMTP_USER || 'contact@climgo.fr'}>`,
        to,
        subject,
        html,
      };

      await transporter.sendMail(mailOptions);
      console.log(`✅ Email envoyé à ${to}`);
      return true;
    } catch (error) {
      console.error(`❌ Erreur envoi email à ${to}:`, error);
      return false;
    }
  }

  /**
   * Envoyer un email basé sur un template
   */
  static async sendTemplateEmail(
    templateName: string,
    recipients: EmailRecipient[],
    variables: Record<string, string>
  ): Promise<{ success: number; failed: number; errors: string[] }> {
    const template = emailTemplates[templateName];
    if (!template) {
      throw new Error(`Template ${templateName} non trouvé`);
    }

    let success = 0;
    let failed = 0;
    const errors: string[] = [];

    for (const recipient of recipients) {
      try {
        // Remplacer les variables du template
        const personalizedVariables = {
          ...variables,
          firstName: recipient.firstName || 'Utilisateur',
          unsubscribeUrl: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://climgo.fr'}/unsubscribe?email=${encodeURIComponent(recipient.email)}`,
        };

        const subject = replaceTemplateVariables(template.subject, personalizedVariables);
        const html = replaceTemplateVariables(template.html, personalizedVariables);

        const sent = await this.sendEmail(recipient.email, subject, html);
        if (sent) {
          success++;
        } else {
          failed++;
          errors.push(`Échec envoi à ${recipient.email}`);
        }
      } catch (error) {
        failed++;
        errors.push(`Erreur envoi à ${recipient.email}: ${error}`);
      }
    }

    return { success, failed, errors };
  }

  /**
   * Envoyer une notification d'article créé à tous les utilisateurs
   */
  static async sendArticleNotification(
    articleTitle: string,
    articleExcerpt: string,
    articleSlug: string
  ): Promise<{ success: number; failed: number; errors: string[] }> {
    console.log('📧 [EmailService] sendArticleNotification appelé');
    console.log('📧 [EmailService] Article:', { articleTitle, articleExcerpt, articleSlug });
    
    // Récupérer tous les utilisateurs et abonnés newsletter
    const recipients = await this.getAllEmailRecipients();
    console.log('📧 [EmailService] Destinataires récupérés:', recipients.length);
    console.log('📧 [EmailService] Destinataires:', recipients);

    const variables = {
      articleTitle,
      articleExcerpt,
      articleUrl: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://climgo.fr'}/blog/${articleSlug}`,
    };
    
    console.log('📧 [EmailService] Variables:', variables);

    const result = await this.sendTemplateEmail('templateArticleCreatedNotification', recipients, variables);
    console.log('📧 [EmailService] Résultat envoi:', result);
    
    return result;
  }

  /**
   * Récupérer tous les destinataires d'emails
   */
  static async getAllEmailRecipients(): Promise<EmailRecipient[]> {
    try {
      console.log('📧 [EmailService] Récupération des destinataires via Prisma...');
      
      // Récupérer les utilisateurs directement avec Prisma
      const users = await prisma.user.findMany({
        where: {
          isActive: true
        },
        select: {
          email: true,
          firstName: true,
          lastName: true
        }
      });
      
      // Récupérer les abonnés newsletter directement avec Prisma
      const subscribers = await prisma.newsletter.findMany({
        where: {
          isActive: true
        },
        select: {
          email: true
        }
      });

      const recipients: EmailRecipient[] = [];

      // Ajouter les utilisateurs
      users.forEach((user) => {
        if (user.email) {
          recipients.push({
            email: user.email,
            firstName: user.firstName || undefined,
            lastName: user.lastName || undefined,
          });
        }
      });

      // Ajouter les abonnés newsletter (éviter les doublons)
      subscribers.forEach((subscriber) => {
        if (subscriber.email && !recipients.find(r => r.email === subscriber.email)) {
          recipients.push({
            email: subscriber.email,
            firstName: undefined,
            lastName: undefined,
          });
        }
      });

      console.log('📧 [EmailService] Utilisateurs trouvés:', users.length);
      console.log('📧 [EmailService] Abonnés trouvés:', subscribers.length);
      console.log('📧 [EmailService] Total destinataires:', recipients.length);

      return recipients;
    } catch (error) {
      console.error('❌ [EmailService] Erreur récupération destinataires:', error);
      return [];
    }
  }

  /**
   * Tester la connexion SMTP
   */
  static async testConnection(): Promise<boolean> {
    try {
      await transporter.verify();
      console.log('✅ Connexion SMTP réussie');
      return true;
    } catch (error) {
      console.error('❌ Erreur connexion SMTP:', error);
      return false;
    }
  }
} 