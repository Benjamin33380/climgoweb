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

    // TODO: Remplacer par Supabase Auth
    if (email === 'admin@climgo.fr' && password === 'admin123') {
      return NextResponse.json({
        token: 'admin-token',
        user: {
          id: 'admin-1',
          email: 'admin@climgo.fr',
          role: 'admin'
        }
      });
    }

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