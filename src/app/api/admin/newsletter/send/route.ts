import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// POST - Envoyer une newsletter
export async function POST(request: NextRequest) {
  try {
    // TODO: Vérifier l'authentification admin
    
    const { subject, content, previewText } = await request.json();

    if (!subject || !content) {
      return NextResponse.json(
        { error: 'Sujet et contenu requis' },
        { status: 400 }
      );
    }

    // Récupérer tous les abonnés actifs
    const { data: subscribers, error: subscribersError } = await supabase
      .from('newsletter_subscribers')
      .select('email')
      .eq('is_active', true);

    if (subscribersError) {
      console.error('Erreur lors de la récupération des abonnés:', subscribersError);
      return NextResponse.json(
        { error: 'Erreur lors de la récupération des abonnés' },
        { status: 500 }
      );
    }

    if (!subscribers || subscribers.length === 0) {
      return NextResponse.json(
        { error: 'Aucun abonné trouvé' },
        { status: 400 }
      );
    }

    // Créer la campagne newsletter
    const { data: campaign, error: campaignError } = await supabase
      .from('newsletter_campaigns')
      .insert([
        {
          subject,
          content_html: formatNewsletterContent(content, subject, previewText),
          content_text: content,
          sent_to_count: subscribers.length,
          status: 'sending'
        }
      ])
      .select()
      .single();

    if (campaignError) {
      console.error('Erreur lors de la création de la campagne:', campaignError);
      return NextResponse.json(
        { error: 'Erreur lors de la création de la campagne' },
        { status: 500 }
      );
    }

    // Envoyer les emails (par batch pour éviter les limites)
    const batchSize = 50;
    const batches = [];
    
    for (let i = 0; i < subscribers.length; i += batchSize) {
      batches.push(subscribers.slice(i, i + batchSize));
    }

    let successCount = 0;
    let errorCount = 0;

    for (const batch of batches) {
      try {
        const emailPromises = batch.map(subscriber => 
          resend.emails.send({
            from: 'ClimGO <newsletter@climgo.fr>',
            to: subscriber.email,
            subject: subject,
            html: formatNewsletterContent(content, subject, previewText),
            text: content,
            headers: {
              'List-Unsubscribe': `<https://www.climgo.fr/unsubscribe?email=${encodeURIComponent(subscriber.email)}>`,
              'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click'
            }
          })
        );

        await Promise.allSettled(emailPromises);
        successCount += batch.length;
      } catch (error) {
        console.error('Erreur lors de l\'envoi du batch:', error);
        errorCount += batch.length;
      }
    }

    // Mettre à jour la campagne
    await supabase
      .from('newsletter_campaigns')
      .update({
        status: errorCount === 0 ? 'sent' : 'partial',
        sent_at: new Date().toISOString(),
        sent_to_count: successCount
      })
      .eq('id', campaign.id);

    return NextResponse.json({
      success: true,
      sent_count: successCount,
      error_count: errorCount,
      campaign_id: campaign.id
    });

  } catch (error) {
    console.error('Erreur lors de l\'envoi de la newsletter:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}

function formatNewsletterContent(content: string, subject: string, previewText?: string): string {
  // Convertir le markdown simple en HTML
  const htmlContent = content
    .replace(/\n/g, '<br />')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color: #2563eb; text-decoration: underline;">$1</a>');

  return `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${subject}</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); color: white; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: white; padding: 30px 20px; border: 1px solid #e5e7eb; }
        .footer { background: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #6b7280; border-radius: 0 0 8px 8px; }
        .logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
        .preview { font-size: 14px; opacity: 0.9; margin-bottom: 0; }
        .unsubscribe { margin-top: 20px; }
        .unsubscribe a { color: #6b7280; text-decoration: none; }
        .button { display: inline-block; background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="logo">ClimGO</div>
        ${previewText ? `<p class="preview">${previewText}</p>` : ''}
      </div>
      
      <div class="content">
        <h1 style="color: #1f2937; margin-bottom: 20px;">${subject}</h1>
        <div style="font-size: 16px; line-height: 1.6;">
          ${htmlContent}
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <a href="https://www.climgo.fr/contact" class="button">Nous contacter</a>
        </div>
      </div>
      
      <div class="footer">
        <p><strong>ClimGO</strong> - Spécialiste Chauffage & Climatisation en Gironde</p>
        <p>07 66 46 00 08 | contact@climgo.fr | www.climgo.fr</p>
        
        <div class="unsubscribe">
          <p>Vous recevez cet email car vous êtes abonné à notre newsletter.</p>
          <p><a href="https://www.climgo.fr/unsubscribe?email={{email}}">Se désabonner</a> | <a href="https://www.climgo.fr/newsletter/preferences?email={{email}}">Gérer mes préférences</a></p>
        </div>
      </div>
    </body>
    </html>
  `;
}
