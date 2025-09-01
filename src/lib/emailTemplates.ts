export interface EmailTemplate {
  name: string;
  subject: string;
  html: string;
  variables: string[];
  description: string;
}

export const emailTemplates: Record<string, EmailTemplate> = {
  templateArticleCreatedNotification: {
    name: "Notification Article Créé",
    subject: "🚀 Nouvel article ClimGO : {{articleTitle}}",
    description: "Template automatique envoyé lors de la création d'un article",
    html: `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nouvel article ClimGO</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            line-height: 1.6; 
            color: #111827; 
            background-color: #111827;
            margin: 0;
            padding: 0;
          }
          .email-container { 
            max-width: 600px; 
            margin: 0 auto; 
            background-color: #1f2937;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
          }
          .header { 
            background: linear-gradient(135deg, #111827 0%, #1f2937 50%, #374151 100%); 
            color: white; 
            padding: 40px 30px; 
            text-align: center; 
            border-radius: 0;
            position: relative;
            overflow: hidden;
          }
          .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
            opacity: 0.3;
          }
          .logo { 
            font-size: 32px; 
            font-weight: bold; 
            margin-bottom: 10px;
            position: relative;
            z-index: 1;
          }
          .header-subtitle {
            font-size: 18px;
            opacity: 0.9;
            position: relative;
            z-index: 1;
          }
          .content { 
            background: #374151; 
            padding: 40px 30px; 
            border-radius: 0;
          }
          .greeting {
            font-size: 24px;
            color: #f9fafb;
            margin-bottom: 20px;
            font-weight: 600;
          }
          .intro-text {
            font-size: 16px;
            color: #d1d5db;
            margin-bottom: 30px;
            line-height: 1.7;
          }
          .article-card { 
            background: linear-gradient(135deg, #4b5563 0%, #6b7280 100%); 
            padding: 30px; 
            margin: 30px 0; 
            border-radius: 16px; 
            border-left: 6px solid #0ea5e9;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
            position: relative;
          }
          .article-title {
            font-size: 22px;
            font-weight: 700;
            color: #f9fafb;
            margin-bottom: 15px;
            line-height: 1.3;
          }
          .article-excerpt {
            font-size: 16px;
            color: #e5e7eb;
            margin-bottom: 25px;
            line-height: 1.6;
          }
          .btn { 
            display: inline-block; 
            background: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%); 
            color: white; 
            padding: 16px 32px; 
            text-decoration: none; 
            border-radius: 12px; 
            margin: 20px 0; 
            font-weight: 600;
            font-size: 16px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 6px -1px rgba(14, 165, 233, 0.3);
          }
          .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 15px -3px rgba(14, 165, 233, 0.4);
          }
          .newsletter-cta {
            background: linear-gradient(135deg, #92400e 0%, #b45309 100%);
            border: 2px solid #f59e0b;
            padding: 25px;
            border-radius: 12px;
            margin: 30px 0;
            text-align: center;
          }
          .newsletter-title {
            font-size: 18px;
            font-weight: 600;
            color: #fef3c7;
            margin-bottom: 10px;
          }
          .newsletter-text {
            color: #fde68a;
            font-size: 14px;
          }
          .footer { 
            background: linear-gradient(135deg, #111827 0%, #1f2937 100%); 
            color: #9ca3af; 
            padding: 30px; 
            text-align: center; 
            font-size: 14px;
          }
          .footer-logo {
            font-size: 20px;
            font-weight: bold;
            color: #ffffff;
            margin-bottom: 15px;
        }
          .footer-contact {
            margin: 15px 0;
            line-height: 1.6;
        }
          .unsubscribe-link {
            color: #6b7280;
            text-decoration: none;
            font-size: 12px;
            margin-top: 20px;
            display: inline-block;
        }
          .unsubscribe-link:hover {
            color: #9ca3af;
        }
          .social-links {
            margin: 20px 0;
        }
          .social-link {
            display: inline-block;
            margin: 0 10px;
            color: #9ca3af;
            text-decoration: none;
        }
          @media (max-width: 600px) {
            .email-container { margin: 0; }
            .header, .content, .footer { padding: 20px; }
            .article-card { padding: 20px; }
            .btn { padding: 14px 24px; font-size: 14px; }
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <div class="logo">ClimGO</div>
            <div class="header-subtitle">Votre expert en chauffage et climatisation en Gironde</div>
          </div>
          
          <div class="content">
            <div class="greeting">Bonjour {{firstName}} ! 👋</div>
            
            <div class="intro-text">
              Un nouvel article a été publié sur notre blog et nous pensons qu'il pourrait vous intéresser. 
              Découvrez nos conseils d'experts et restez informé des dernières innovations en matière de chauffage et climatisation.
            </div>
            
            <div class="article-card">
              <div class="article-title">📝 {{articleTitle}}</div>
              <div class="article-excerpt">{{articleExcerpt}}</div>
              <a href="{{articleUrl}}" class="btn">📖 Lire l'article complet</a>
            </div>
            
            <div class="newsletter-cta">
              <div class="newsletter-title">💡 Restez informé !</div>
              <div class="newsletter-text">
                Recevez nos conseils d'experts, actualités et offres exclusives directement dans votre boîte mail.
              </div>
            </div>
          </div>
          
          <div class="footer">
            <div class="footer-logo">ClimGO</div>
            <div class="footer-contact">
              <div>🏠 15 Avenue des Pins, 33380 Marcheprime</div>
              <div>📞 07.66.46.00.08</div>
              <div>✉️ contact@climgo.fr</div>
            </div>
            <div class="social-links">
              <a href="https://www.climgo.fr" class="social-link">🌐 Site web</a>
              <a href="https://www.climgo.fr/blog" class="social-link">📚 Blog</a>
            </div>
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #374151;">
              <a href="{{unsubscribeUrl}}" class="unsubscribe-link">Se désinscrire de la newsletter</a>
            </div>
          </div>
        </div>
      </body>
      </html>
    `,
    variables: ["firstName", "articleTitle", "articleExcerpt", "articleUrl", "unsubscribeUrl"]
  },

  templateCustomMail: {
    name: "Email Personnalisé",
    subject: "{{subject}}",
    description: "Template pour emails personnalisés avec contenu libre",
    html: `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>{{subject}}</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            line-height: 1.6; 
            color: #111827; 
            background-color: #111827;
            margin: 0;
            padding: 0;
          }
          .email-container { 
            max-width: 600px; 
            margin: 0 auto; 
            background-color: #1f2937;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
          }
          .header { 
            background: linear-gradient(135deg, #111827 0%, #1f2937 50%, #374151 100%); 
            color: white; 
            padding: 40px 30px; 
            text-align: center; 
            border-radius: 0;
            position: relative;
            overflow: hidden;
          }
          .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
            opacity: 0.3;
          }
          .logo { 
            font-size: 32px; 
            font-weight: bold; 
            margin-bottom: 10px;
            position: relative;
            z-index: 1;
          }
          .header-subtitle {
            font-size: 18px;
            opacity: 0.9;
            position: relative;
            z-index: 1;
          }
          .content { 
            background: #374151; 
            padding: 40px 30px; 
            border-radius: 0;
          }
          .greeting {
            font-size: 24px;
            color: #f9fafb;
            margin-bottom: 20px;
            font-weight: 600;
          }
          .message-container { 
            background: linear-gradient(135deg, #4b5563 0%, #6b7280 100%); 
            padding: 30px; 
            margin: 30px 0; 
            border-radius: 16px; 
            border-left: 6px solid #0ea5e9;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
          }
          .message-content {
            font-size: 16px;
            color: #e5e7eb;
            line-height: 1.7;
          }
          .footer { 
            background: linear-gradient(135deg, #111827 0%, #1f2937 100%); 
            color: #9ca3af; 
            padding: 30px; 
            text-align: center; 
            font-size: 14px;
          }
          .footer-logo {
            font-size: 20px;
            font-weight: bold;
            color: #ffffff;
            margin-bottom: 15px;
        }
          .footer-contact {
            margin: 15px 0;
            line-height: 1.6;
        }
          .unsubscribe-link {
            color: #6b7280;
            text-decoration: none;
            font-size: 12px;
            margin-top: 20px;
            display: inline-block;
        }
          .unsubscribe-link:hover {
            color: #9ca3af;
        }
          @media (max-width: 600px) {
            .email-container { margin: 0; }
            .header, .content, .footer { padding: 20px; }
            .message-container { padding: 20px; }
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <div class="logo">ClimGO</div>
            <div class="header-subtitle">Votre expert en chauffage et climatisation en Gironde</div>
          </div>
          
          <div class="content">
            <div class="greeting">Bonjour {{firstName}} ! 👋</div>
            
            <div class="message-container">
              <div class="message-content">
                {{content}}
              </div>
            </div>
          </div>
          
          <div class="footer">
            <div class="footer-logo">ClimGO</div>
            <div class="footer-contact">
              <div>🏠 15 Avenue des Pins, 33380 Marcheprime</div>
              <div>📞 07.66.46.00.08</div>
              <div>✉️ contact@climgo.fr</div>
            </div>
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #374151;">
              <a href="{{unsubscribeUrl}}" class="unsubscribe-link">Se désinscrire de la newsletter</a>
            </div>
          </div>
        </div>
      </body>
      </html>
    `,
    variables: ["firstName", "subject", "content", "unsubscribeUrl"]
  },

  templateNewsletter: {
    name: "Newsletter ClimGO",
    subject: "📰 Newsletter ClimGO - {{subject}}",
    description: "Template pour newsletters régulières",
    html: `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Newsletter ClimGO</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            line-height: 1.6; 
            color: #111827; 
            background-color: #111827;
            margin: 0;
            padding: 0;
          }
          .email-container { 
            max-width: 600px; 
            margin: 0 auto; 
            background-color: #1f2937;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
          }
          .header { 
            background: linear-gradient(135deg, #111827 0%, #1f2937 50%, #374151 100%); 
            color: white; 
            padding: 40px 30px; 
            text-align: center; 
            border-radius: 0;
            position: relative;
            overflow: hidden;
          }
          .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
            opacity: 0.3;
          }
          .logo { 
            font-size: 32px; 
            font-weight: bold; 
            margin-bottom: 10px;
            position: relative;
            z-index: 1;
          }
          .header-subtitle {
            font-size: 18px;
            opacity: 0.9;
            position: relative;
            z-index: 1;
          }
          .content { 
            background: #374151; 
            padding: 40px 30px; 
            border-radius: 0;
          }
          .greeting {
            font-size: 24px;
            color: #f9fafb;
            margin-bottom: 20px;
            font-weight: 600;
          }
          .newsletter-content {
            background: linear-gradient(135deg, #4b5563 0%, #6b7280 100%); 
            padding: 30px; 
            margin: 30px 0; 
            border-radius: 16px; 
            border-left: 6px solid #0ea5e9;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
          }
          .newsletter-title {
            font-size: 20px;
            font-weight: 600;
            color: #f9fafb;
            margin-bottom: 15px;
          }
          .newsletter-text {
            font-size: 16px;
            color: #e5e7eb;
            line-height: 1.7;
            margin-bottom: 20px;
          }
          .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%);
            color: white;
            padding: 16px 32px;
            text-decoration: none;
            border-radius: 12px;
            font-weight: 600;
            font-size: 16px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 6px -1px rgba(14, 165, 233, 0.3);
          }
          .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 15px -3px rgba(14, 165, 233, 0.4);
          }
          .footer { 
            background: linear-gradient(135deg, #111827 0%, #1f2937 100%); 
            color: #9ca3af; 
            padding: 30px; 
            text-align: center; 
            font-size: 14px;
          }
          .footer-logo {
            font-size: 20px;
            font-weight: bold;
            color: #ffffff;
            margin-bottom: 15px;
        }
          .footer-contact {
            margin: 15px 0;
            line-height: 1.6;
        }
          .unsubscribe-link {
            color: #6b7280;
            text-decoration: none;
            font-size: 12px;
            margin-top: 20px;
            display: inline-block;
        }
          .unsubscribe-link:hover {
            color: #9ca3af;
        }
          @media (max-width: 600px) {
            .email-container { margin: 0; }
            .header, .content, .footer { padding: 20px; }
            .newsletter-content { padding: 20px; }
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <div class="logo">ClimGO</div>
            <div class="header-subtitle">Votre expert en chauffage et climatisation en Gironde</div>
          </div>
          
          <div class="content">
            <div class="greeting">Bonjour {{firstName}} ! 👋</div>
            
            <div class="newsletter-content">
              <div class="newsletter-title">📰 {{subject}}</div>
              <div class="newsletter-text">
                {{content}}
              </div>
              {{#if ctaUrl}}
              <a href="{{ctaUrl}}" class="cta-button">{{ctaText}}</a>
              {{else}}
              <a href="https://climgo.fr" class="cta-button">Visiter notre site</a>
              {{/if}}
            </div>
          </div>
          
          <div class="footer">
            <div class="footer-logo">ClimGO</div>
            <div class="footer-contact">
              <div>🏠 15 Avenue des Pins, 33380 Marcheprime</div>
              <div>📞 07.66.46.00.08</div>
              <div>✉️ contact@climgo.fr</div>
            </div>
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #374151;">
              <a href="{{unsubscribeUrl}}" class="unsubscribe-link">Se désinscrire de la newsletter</a>
            </div>
          </div>
        </div>
      </body>
      </html>
    `,
    variables: ["firstName", "subject", "content", "ctaUrl", "ctaText", "unsubscribeUrl"]
  }
};

export function replaceTemplateVariables(template: string, variables: Record<string, string>): string {
  let result = template;
  
  // Remplacer les variables simples
  Object.entries(variables).forEach(([key, value]) => {
    result = result.replace(new RegExp(`{{${key}}}`, 'g'), value || '');
  });
  
  // Gérer les variables conditionnelles pour ctaUrl et ctaText
  if (variables.ctaUrl && variables.ctaText && variables.ctaUrl.trim() !== '' && variables.ctaText.trim() !== '') {
    // Si ctaUrl et ctaText sont définis et non vides, afficher le bouton personnalisé
    result = result.replace(/{{#if ctaUrl}}([\s\S]*?){{else}}([\s\S]*?){{\/if}}/g, '$1');
    // Remplacer les variables dans le bouton personnalisé
    result = result.replace(/\{\{ctaUrl\}\}/g, variables.ctaUrl);
    result = result.replace(/\{\{ctaText\}\}/g, variables.ctaText);
  } else {
    // Sinon, afficher le bouton par défaut
    result = result.replace(/{{#if ctaUrl}}([\s\S]*?){{else}}([\s\S]*?){{\/if}}/g, '$2');
  }
  
  // Nettoyer les variables non remplacées restantes
  result = result.replace(/\{\{[^}]+\}\}/g, '');
  
  return result;
} 