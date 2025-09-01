import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Routes protégées admin
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    // Vérifier si l'utilisateur est connecté avec un token JWT
    const authToken = request.cookies.get('auth-token')?.value
    
    if (!authToken) {
      // Rediriger vers la page de connexion admin
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
    
    // Note: La vérification du rôle ADMIN se fait côté client avec ProtectedRoute
    // Le middleware vérifie seulement la présence du token d'authentification
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/client-auth/:path*',
    '/profile/:path*'
  ]
}
