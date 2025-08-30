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
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Vérifier d'abord si l'utilisateur existe et est admin
    const { data: profile, error: profileError } = await supabase
      .from('users')
      .select('id, email, is_admin')
      .eq('email', email)
      .single();

    if (profileError || !profile?.is_admin) {
      return NextResponse.json(
        { error: 'Accès non autorisé' },
        { status: 403 }
      );
    }

    // Vérifier les credentials avec Supabase Auth
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

    return NextResponse.json({
      session: data.session,
      user: {
        id: data.user.id,
        email: data.user.email,
        is_admin: true,
        role: 'admin'
      }
    });
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
} 