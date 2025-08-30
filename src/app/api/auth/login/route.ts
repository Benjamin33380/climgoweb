import { NextRequest, NextResponse } from 'next/server';

// POST - Connexion admin
export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email et mot de passe requis' },
        { status: 400 }
      );
    }

    // Authentification sécurisée avec Supabase
    const { createClient } = require('@supabase/supabase-js');
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://dummy.supabase.co',
      process.env.SUPABASE_SERVICE_ROLE_KEY || 'dummy-key'
    );

    // Vérifier les credentials avec Supabase
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error || !data.user) {
      return NextResponse.json(
        { error: 'Identifiants invalides' },
        { status: 401 }
      );
    }

    // Vérifier si l'utilisateur est admin
    const { data: profile } = await supabase
      .from('users')
      .select('is_admin')
      .eq('id', data.user.id)
      .single();

    if (!profile?.is_admin) {
      return NextResponse.json(
        { error: 'Accès non autorisé' },
        { status: 403 }
      );
    }

    return NextResponse.json({
      token: data.session?.access_token,
      user: {
        id: data.user.id,
        email: data.user.email,
        role: 'admin'
      }
    });

    return NextResponse.json(
      { error: 'Identifiants invalides' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
} 