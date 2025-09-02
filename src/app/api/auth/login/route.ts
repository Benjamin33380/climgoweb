import { NextRequest, NextResponse } from 'next/server';
import { authenticateUser } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    console.log('🔐 [API Login] Début de la requête de connexion');
    
    const { email, password } = await request.json();
    console.log('🔐 [API Login] Tentative de connexion pour:', email);

    if (!email || !password) {
      console.log('🔐 [API Login] Email ou mot de passe manquant');
      return NextResponse.json(
        { error: 'Email et mot de passe requis' },
        { status: 400 }
      );
    }

    const result = await authenticateUser(email, password);
    console.log('🔐 [API Login] Résultat de authenticateUser:', { 
      success: result.success, 
      hasUser: !!result.user, 
      hasToken: !!result.token,
      userRole: result.user?.role 
    });

    if (!result.success) {
      return NextResponse.json(
        { error: result.error },
        { status: 401 }
      );
    }

    // Créer la réponse avec les cookies
    const response = NextResponse.json({
      user: result.user,
      message: 'Connexion réussie'
    });

    // Définir le cookie sécurisé
    if (result.token) {
      response.cookies.set('auth-token', result.token, {
        httpOnly: true,
        secure: false, // Désactivé temporairement pour la production
        sameSite: 'lax', // Plus permissif
        maxAge: 24 * 60 * 60, // 24 heures
        path: '/'
      });
    }

    return response;
  } catch (error) {
    console.error('Erreur de connexion:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
} 