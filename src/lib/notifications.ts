import nodemailer from 'nodemailer';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Configuration du transporteur email
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true pour 465, false pour les autres ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface ArticleData {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  authorId: string;
}

interface UserData {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
}

// Envoyer une notification pour un article publié
export async function sendArticlePublishedNotification(
  article: ArticleData,
  author: UserData
) {
  try {
    console.log('📧 [Notifications] Envoi de notification pour article publié:', article.title);

    // Récupérer tous les utilisateurs abonnés à la newsletter
    const subscribers = await prisma.user.findMany({
      where: {
        isActive: true,
        emailVerified: true,
        // Ici on pourrait ajouter un champ newsletter_subscribed si nécessaire
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
      },
    });

    if (subscribers.length === 0) {
      console.log('📧 [Notifications] Aucun abonné trouvé');
      return { success: true, sent: 0 };
    }

    // Préparer le contenu de l'email
    const emailContent = generateArticleEmailContent(article, author);
    
    // Envoyer les emails en lot
    const emailPromises = subscribers.map(subscriber => 
      sendEmailToSubscriber(subscriber.email, emailContent)
    );

    const results = await Promise.allSettled(emailPromises);
    const successful = results.filter(result => result.status === 'fulfilled').length;
    const failed = results.filter(result => result.status === 'rejected').length;

    console.log(`📧 [Notifications] Emails envoyés: ${successful} succès, ${failed} échecs`);

    // Enregistrer la notification en base
    await prisma.notification.create({
      data: {
        type: 'ARTICLE_PUBLISHED',
        title: `Nouvel article publié: ${article.title}`,
        message: `L'article "${article.title}" a été publié par ${author.firstName || author.email}`,
        userId: author.id,
        articleId: article.id,
        sentTo: successful,
        failedTo: failed,
      },
    });

    return { success: true, sent: successful, failed };
  } catch (error) {
    console.error('❌ [Notifications] Erreur lors de l\'envoi des notifications:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Erreur inconnue' };
  }
}

// Envoyer un email à un abonné
async function sendEmailToSubscriber(
  email: string, 
  content: { subject: string; html: string; text: string },
) {
  try {
    const mailOptions = {
      from: `"ClimGO" <${process.env.SMTP_USER}>`,
      to: email,
      subject: content.subject,
      html: content.html,
      text: content.text,
    };

    await transporter.sendMail(mailOptions);
    console.log(`📧 [Notifications] Email envoyé à ${email}`);
    return { success: true, email };
  } catch (error) {
    console.error(`❌ [Notifications] Erreur envoi email à ${email}:`, error);
    return { success: false, email, error: error instanceof Error ? error.message : 'Erreur inconnue' };
  }
}

// Générer le contenu de l'email
function generateArticleEmailContent(article: ArticleData, author: UserData) {
  const authorName = author.firstName && author.lastName 
    ? `${author.firstName} ${author.lastName}`
    : author.email;

  const subject = `🚀 Nouvel article ClimGO : ${article.title}`;
  
  const html = `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nouvel article ClimGO</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #0ea5e9; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f8fafc; padding: 20px; border-radius: 0 0 8px 8px; }
        .article-title { color: #0ea5e9; font-size: 24px; margin-bottom: 15px; }
        .article-excerpt { background: white; padding: 15px; border-radius: 5px; margin: 15px 0; }
        .cta-button { display: inline-block; background: #0ea5e9; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🚀 ClimGO</h1>
          <p>Nouvel article disponible !</p>
        </div>
        
        <div class="content">
          <h2 class="article-title">${article.title}</h2>
          
          ${article.excerpt ? `
            <div class="article-excerpt">
              <p><strong>Extrait :</strong></p>
              <p>${article.excerpt}</p>
            </div>
          ` : ''}
          
          <p><strong>Auteur :</strong> ${authorName}</p>
          
          <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://climgo.fr'}/blog/${article.slug}" class="cta-button">
            📖 Lire l'article complet
          </a>
          
          <p style="margin-top: 20px;">
            Découvrez nos conseils d'experts en chauffage, climatisation et eau chaude sanitaire en Gironde.
          </p>
        </div>
        
        <div class="footer">
          <p>Vous recevez cet email car vous êtes abonné aux actualités ClimGO.</p>
          <p><a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://climgo.fr'}/unsubscribe">Se désabonner</a></p>
        </div>
      </div>
    </body>
    </html>
  `;

  const text = `
🚀 Nouvel article ClimGO : ${article.title}

${article.excerpt ? `Extrait : ${article.excerpt}` : ''}

Auteur : ${authorName}

Lire l'article complet : ${process.env.NEXT_PUBLIC_SITE_URL || 'https://climgo.fr'}/blog/${article.slug}

---
ClimGO - Expert chauffage et climatisation en Gironde
${process.env.NEXT_PUBLIC_SITE_URL || 'https://climgo.fr'}
  `;

  return { subject, html, text };
}

// Envoyer une notification de test
export async function sendTestNotification(email: string) {
  try {
    const testArticle = {
      id: 'test',
      title: 'Article de test',
      slug: 'test',
      excerpt: 'Ceci est un article de test pour vérifier le système de notifications.',
      authorId: 'test',
    };

    const testAuthor = {
      id: 'test',
      email: 'test@climgo.fr',
      firstName: 'Test',
      lastName: 'ClimGO',
    };

    const content = generateArticleEmailContent(testArticle, testAuthor);
    
    const result = await sendEmailToSubscriber(email, content);
    return result;
  } catch (error) {
    console.error('❌ [Notifications] Erreur test notification:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Erreur inconnue' };
  }
} 