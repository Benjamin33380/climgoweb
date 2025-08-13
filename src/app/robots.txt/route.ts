import { NextResponse } from 'next/server'

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://www.climgo.fr/sitemap.xml

# Pages importantes pour le SEO
Allow: /chauffage
Allow: /climatisation  
Allow: /maintenance
Allow: /eau-chaude-sanitaire
Allow: /blog
Allow: /contact
Allow: /zones-interventions

# Pages ville - ULTRA-IMPORTANTES pour SEO local
Allow: /*-chauffage-climatisation

# Désindexer les pages admin
Disallow: /admin/
Disallow: /api/
Disallow: /auth/

# Désindexer les fichiers techniques
Disallow: /_next/
Disallow: /favicon/

# Crawl delay pour être sympa avec les bots
Crawl-delay: 1

# Instructions spéciales pour Google
User-agent: Googlebot
Allow: /
Crawl-delay: 0

# Instructions pour Bing
User-agent: Bingbot  
Allow: /
Crawl-delay: 1

# Instructions pour autres moteurs français
User-agent: Qwantbot
Allow: /

# Host canonical
Host: https://www.climgo.fr`

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}

