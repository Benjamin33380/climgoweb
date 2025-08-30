import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Fonction pour envoyer la newsletter automatiquement
async function sendArticleNewsletter(article: { title: string; excerpt: string; slug: string; category?: string; image_url?: string; image_alt?: string; reading_time?: number; tags?: string[] }) {
  try {
    // Récupérer tous les abonnés actifs
    const { data: subscribers } = await supabase
      .from('newsletter_subscribers')
      .select('email')
      .eq('is_active', true);

    if (!subscribers || subscribers.length === 0) {
      return;
    }

    const subject = `Nouvel article ClimGO: ${article.title}`;
    const articleUrl = `https://www.climgo.fr/blog/${article.slug}`;
    
    const htmlContent = `
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
          .article-image { width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin: 20px 0; }
          .button { display: inline-block; background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
          .category { background: #f3f4f6; color: #374151; padding: 4px 12px; border-radius: 20px; font-size: 12px; display: inline-block; margin-bottom: 15px; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1 style="margin: 0; font-size: 24px;">ClimGO</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Nouvel article disponible</p>
        </div>
        
        <div class="content">
          <div class="category">${article.category}</div>
          <h2 style="color: #1f2937; margin-bottom: 15px;">${article.title}</h2>
          
          ${article.image_url ? `<img src="${article.image_url}" alt="${article.image_alt || article.title}" class="article-image" />` : ''}
          
          ${article.excerpt ? `<p style="font-size: 16px; color: #6b7280; font-style: italic;">${article.excerpt}</p>` : ''}
          
          <p>Un nouvel article vient d'être publié sur notre blog ClimGO. Découvrez nos conseils d'experts en chauffage et climatisation.</p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${articleUrl}" class="button">Lire l'article complet</a>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 14px; color: #6b7280;">
            <p><strong>Temps de lecture estimé:</strong> ${article.reading_time || 5} minute${(article.reading_time || 5) > 1 ? 's' : ''}</p>
            ${article.tags && article.tags.length > 0 ? `<p><strong>Tags:</strong> ${article.tags.join(', ')}</p>` : ''}
          </div>
        </div>
        
        <div class="footer">
          <p><strong>ClimGO</strong> - Spécialiste Chauffage & Climatisation en Gironde</p>
          <p>07 66 46 00 08 | contact@climgo.fr | www.climgo.fr</p>
          
          <div style="margin-top: 20px;">
            <p>Vous recevez cet email car vous êtes abonné à notre newsletter.</p>
            <p><a href="https://www.climgo.fr/unsubscribe?email={{email}}" style="color: #6b7280;">Se désabonner</a></p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Envoyer par batch
    const batchSize = 50;
    for (let i = 0; i < subscribers.length; i += batchSize) {
      const batch = subscribers.slice(i, i + batchSize);
      
      const emailPromises = batch.map(subscriber => 
        resend.emails.send({
          from: 'ClimGO <newsletter@climgo.fr>',
          to: subscriber.email,
          subject: subject,
          html: htmlContent.replace('{{email}}', encodeURIComponent(subscriber.email)),
          headers: {
            'List-Unsubscribe': `<https://www.climgo.fr/unsubscribe?email=${encodeURIComponent(subscriber.email)}>`,
          }
        })
      );

      await Promise.allSettled(emailPromises);
    }

    // Enregistrer la campagne
    await supabase
      .from('newsletter_campaigns')
      .insert([
        {
          subject,
          content_html: htmlContent,
          sent_to_count: subscribers.length,
          status: 'sent',
          sent_at: new Date().toISOString()
        }
      ]);

  } catch (error) {
    console.error('Erreur lors de l\'envoi de la newsletter automatique:', error);
    throw error;
  }
}

// GET - Récupérer tous les articles
export async function GET(request: NextRequest) {
  try {
    // TODO: Vérifier l'authentification admin
    
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const search = searchParams.get('search') || '';
    const status = searchParams.get('status') || 'all'; // all, published, draft
    
    const offset = (page - 1) * limit;

    let query = supabase
      .from('articles')
      .select(`
        *,
        users(username, email)
      `);

    // Filtres
    if (search) {
      query = query.or(`title.ilike.%${search}%,content_markdown.ilike.%${search}%`);
    }

    if (status === 'published') {
      query = query.eq('published', true);
    } else if (status === 'draft') {
      query = query.eq('published', false);
    }

    const { data: articles, error, count } = await query
      .range(offset, offset + limit - 1)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Erreur lors de la récupération des articles:', error);
      return NextResponse.json(
        { error: 'Erreur lors de la récupération des articles' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      articles: articles || [],
      pagination: {
        page,
        limit,
        total: count || 0,
        totalPages: Math.ceil((count || 0) / limit)
      }
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des articles:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}

// POST - Créer un nouvel article
export async function POST(request: NextRequest) {
  try {
    // TODO: Vérifier l'authentification admin
    
    const body = await request.json();
    const {
      title,
      slug,
      excerpt,
      content_markdown,
      image_url,
      image_alt,
      meta_title,
      meta_description,
      meta_keywords,
      category,
      tags,
      is_vip_only,
      published,
      reading_time,
      author_id
    } = body;

    if (!title || !content_markdown || !author_id) {
      return NextResponse.json(
        { error: 'Titre, contenu et auteur requis' },
        { status: 400 }
      );
    }

    // Vérifier l'unicité du slug
    const { data: existingArticle } = await supabase
      .from('articles')
      .select('id')
      .eq('slug', slug)
      .single();

    if (existingArticle) {
      return NextResponse.json(
        { error: 'Ce slug existe déjà' },
        { status: 400 }
      );
    }

    const { data: article, error } = await supabase
      .from('articles')
      .insert([{
        title,
        slug,
        excerpt: excerpt || null,
        content_markdown,
        image_url: image_url || null,
        image_alt: image_alt || null,
        meta_title: meta_title || title,
        meta_description: meta_description || excerpt || null,
        meta_keywords: meta_keywords || null,
        category: category || 'chauffage',
        tags: tags || null,
        is_vip_only: is_vip_only || false,
        published: published || false,
        reading_time: reading_time || 1,
        author_id,
        published_at: published ? new Date().toISOString() : null
      }])
      .select()
      .single();

    if (error) {
      console.error('Erreur lors de la création de l\'article:', error);
      return NextResponse.json(
        { error: 'Erreur lors de la création de l\'article' },
        { status: 500 }
      );
    }

    // Si l'article est publié, envoyer la newsletter automatiquement
    if (published) {
      try {
        await sendArticleNewsletter(article);
      } catch (newsletterError) {
        console.error('Erreur lors de l\'envoi de la newsletter:', newsletterError);
        // Ne pas faire échouer la création de l'article pour autant
      }
    }

    return NextResponse.json(article, { status: 201 });
  } catch (error) {
    console.error('Erreur lors de la création de l\'article:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}