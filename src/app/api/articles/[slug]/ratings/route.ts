import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

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

    // Si userId est fourni, récupérer la note de cet utilisateur
    if (userId) {
      const { data: userRating, error: userRatingError } = await supabase
        .from('ratings')
        .select('rating')
        .eq('article_id', article.id)
        .eq('user_id', userId)
        .single();

      if (userRatingError && userRatingError.code !== 'PGRST116') {
        console.error('Erreur lors de la récupération de la note utilisateur:', userRatingError);
      }

      return NextResponse.json({ 
        userRating: userRating?.rating || 0 
      });
    }

    // Récupérer toutes les notes avec les informations utilisateur
    const { data: ratings, error: ratingsError } = await supabase
      .from('ratings')
      .select(`
        id,
        rating,
        created_at,
        user:users(username)
      `)
      .eq('article_id', article.id)
      .order('created_at', { ascending: false });

    if (ratingsError) {
      console.error('Erreur lors de la récupération des notes:', ratingsError);
      return NextResponse.json(
        { error: 'Erreur lors de la récupération des notes' },
        { status: 500 }
      );
    }

    // Calculer la moyenne
    const averageRating = ratings && ratings.length > 0 
      ? ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length 
      : 0;

    return NextResponse.json({ 
      ratings: ratings || [], 
      averageRating: Math.round(averageRating * 10) / 10,
      totalRatings: ratings?.length || 0
    });
  } catch (error) {
    console.error('Erreur API ratings:', error);
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
    const { rating } = await request.json();

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

    // Validation de la note
    if (!rating || rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'La note doit être comprise entre 1 et 5' },
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

    // Vérifier si l'utilisateur a déjà noté cet article
    const { data: existingRating } = await supabase
      .from('ratings')
      .select('id')
      .eq('article_id', article.id)
      .eq('user_id', user.id)
      .single();

    let result;
    if (existingRating) {
      // Mettre à jour la note existante
      const { data, error } = await supabase
        .from('ratings')
        .update({ rating })
        .eq('id', existingRating.id)
        .select()
        .single();

      if (error) {
        console.error('Erreur lors de la mise à jour de la note:', error);
        return NextResponse.json(
          { error: 'Erreur lors de la mise à jour de la note' },
          { status: 500 }
        );
      }
      result = data;
    } else {
      // Créer une nouvelle note
      const { data, error } = await supabase
        .from('ratings')
        .insert({
          article_id: article.id,
          user_id: user.id,
          rating
        })
        .select()
        .single();

      if (error) {
        console.error('Erreur lors de la création de la note:', error);
        return NextResponse.json(
          { error: 'Erreur lors de la création de la note' },
          { status: 500 }
        );
      }
      result = data;
    }

    return NextResponse.json({
      success: true,
      message: 'Note enregistrée avec succès',
      rating: result
    });
  } catch (error) {
    console.error('Erreur API création note:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}