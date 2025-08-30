import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    // Récupérer l'article pour avoir son ID
    const { data: article, error: articleError } = await supabase
      .from('articles')
      .select('id')
      .eq('slug', slug)
      .single();

    if (articleError || !article) {
      return NextResponse.json(
        { error: 'Article non trouvé' },
        { status: 404 }
      );
    }

    // Récupérer les commentaires avec les informations utilisateur
    const { data: comments, error: commentsError } = await supabase
      .from('comments')
      .select(`
        id,
        content,
        created_at,
        user:users(username, avatar_url)
      `)
      .eq('article_id', article.id)
      .eq('is_approved', true)
      .order('created_at', { ascending: false });

    if (commentsError) {
      console.error('Erreur lors de la récupération des commentaires:', commentsError);
      return NextResponse.json(
        { error: 'Erreur lors de la récupération des commentaires' },
        { status: 500 }
      );
    }

    return NextResponse.json({ comments: comments || [] });
  } catch (error) {
    console.error('Erreur API commentaires:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const { content } = await request.json();

    // Vérifier l'authentification
    const authHeader = request.headers.get('authorization');
    if (!authHeader) {
      return NextResponse.json(
        { error: 'Non autorisé' },
        { status: 401 }
      );
    }

    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);

    if (authError || !user) {
      return NextResponse.json(
        { error: 'Non autorisé' },
        { status: 401 }
      );
    }

    // Validation du contenu
    if (!content || content.trim().length < 10) {
      return NextResponse.json(
        { error: 'Le commentaire doit contenir au moins 10 caractères' },
        { status: 400 }
      );
    }

    // Récupérer l'article
    const { data: article, error: articleError } = await supabase
      .from('articles')
      .select('id')
      .eq('slug', slug)
      .single();

    if (articleError || !article) {
      return NextResponse.json(
        { error: 'Article non trouvé' },
        { status: 404 }
      );
    }

    // Créer le commentaire
    const { data: comment, error: commentError } = await supabase
      .from('comments')
      .insert({
        article_id: article.id,
        user_id: user.id,
        content: content.trim(),
        is_approved: false // Modération requise
      })
      .select()
      .single();

    if (commentError) {
      console.error('Erreur lors de la création du commentaire:', commentError);
      return NextResponse.json(
        { error: 'Erreur lors de la création du commentaire' },
        { status: 500 }
      );
    }

    // Notifier l'admin (optionnel)
    try {
      await supabase
        .from('admin_notifications')
        .insert({
          type: 'new_comment',
          title: 'Nouveau commentaire',
          message: `Nouveau commentaire sur l'article "${slug}" en attente de modération`,
          data: { comment_id: comment.id, article_slug: slug }
        });
    } catch (notifError) {
      console.error('Erreur notification admin:', notifError);
      // Ne pas faire échouer la création du commentaire pour une erreur de notification
    }

    return NextResponse.json({
      success: true,
      message: 'Commentaire soumis avec succès. Il sera visible après modération.',
      comment
    });
  } catch (error) {
    console.error('Erreur API création commentaire:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}