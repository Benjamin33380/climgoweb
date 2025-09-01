import { NextResponse } from 'next/server';

export async function POST(  ) {
  try {
    const response = NextResponse.json({
      message: 'Déconnexion réussie'
    });

    // Supprimer le cookie d'authentification
    response.cookies.delete('auth-token');

    return response;
  } catch (error) {
    console.error('Erreur de déconnexion:', error);
    
    // Même en cas d'erreur, on supprime le cookie
    const response = NextResponse.json({
      message: 'Déconnexion réussie'
    });

    response.cookies.delete('auth-token');

    return response;
  }
} 