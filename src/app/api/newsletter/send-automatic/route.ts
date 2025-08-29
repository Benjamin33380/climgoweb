import { NextRequest, NextResponse } from 'next/server';
// import { supabase } from '@/lib/supabase';
// import resend from '@/lib/resend';

export async function POST(request: NextRequest) {
  try {
    const { type, data } = await request.json();

    // TODO: Activer quand Supabase et Resend sont configurés
    return NextResponse.json({
      message: 'Newsletter automatique - À configurer',
      note: 'Configurez Supabase et Resend dans .env pour activer cette fonctionnalité'
    });

    // Code temporairement commenté pour éviter les erreurs de build
    /*
    // Récupérer tous les abonnés à la newsletter
    const { data: subscribers, error: subscribersError } = await supabase
      .from('newsletter_subscribers')
      .select('*')
      .eq('is_active', true);

    if (subscribersError) {
      throw new Error('Erreur lors de la récupération des abonnés');
    }

    if (!subscribers || subscribers.length === 0) {
      return NextResponse.json({ message: 'Aucun abonné trouvé' });
    }

    let subject = '';
    let htmlContent = '';

    if (type === 'new_article') {
      const { title, excerpt, slug, author } = data;
      subject = `📰 Nouvel article : ${title}`;
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333;">📰 Nouvel article publié !</h1>
          <h2 style="color: #666;">${title}</h2>
          <p style="color: #777; line-height: 1.6;">${excerpt}</p>
          <p style="color: #999;">Par ${author}</p>
          <a href="${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}" 
             style="display: inline-block; background: #007bff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; margin-top: 20px;">
            Lire l'article complet
          </a>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="color: #999; font-size: 12px;">
            Vous recevez cet email car vous êtes inscrit à la newsletter ClimGO.<br>
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}/unsubscribe" style="color: #999;">Se désinscrire</a>
          </p>
        </div>
      `;
    } else if (type === 'newsletter') {
      const { subject: newsletterSubject, content } = data;
      subject = newsletterSubject;
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          ${content}
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="color: #999; font-size: 12px;">
            Vous recevez cet email car vous êtes inscrit à la newsletter ClimGO.<br>
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}/unsubscribe" style="color: #999;">Se désinscrire</a>
          </p>
        </div>
      `;
    }

    // Envoyer les emails via Resend
    const emailPromises = subscribers.map(async (subscriber) => {
      try {
        await resend.emails.send({
          from: 'ClimGO <newsletter@climgo.fr>',
          to: subscriber.email,
          subject,
          html: htmlContent,
        });

        // Marquer l'email comme envoyé dans la base de données
        await supabase
          .from('newsletter_subscribers')
          .update({ 
            last_email_sent: new Date().toISOString(),
            emails_sent: (subscriber.emails_sent || 0) + 1
          })
          .eq('id', subscriber.id);

        return { success: true, email: subscriber.email };
      } catch (error) {
        console.error(`Erreur envoi email à ${subscriber.email}:`, error);
        return { success: false, email: subscriber.email, error };
      }
    });

    const results = await Promise.all(emailPromises);
    const successful = results.filter(r => r.success).length;
    const failed = results.filter(r => !r.success).length;

    return NextResponse.json({
      message: `Newsletter envoyée avec succès`,
      total: subscribers.length,
      successful,
      failed,
      results
    });
    */

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Erreur lors de l\'envoi de la newsletter';
    console.error('Erreur envoi newsletter automatique:', error);
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
