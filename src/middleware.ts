import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Routes protégées admin
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    // Vérifier si l'utilisateur est connecté en tant qu'admin
    const adminToken = request.cookies.get('adminToken')?.value
    
    if (!adminToken) {
      // Rediriger vers la page de connexion admin
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  // Routes protégées client
  if (pathname.startsWith('/client-auth') || pathname.startsWith('/profile')) {
    const clientToken = request.cookies.get('clientToken')?.value
    
    if (!clientToken) {
      // Rediriger vers la page de connexion client
      return NextResponse.redirect(new URL('/client-auth', request.url))
    }
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
