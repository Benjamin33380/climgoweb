import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.climgo.fr'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/blog',
          '/chauffage',
          '/climatisation',
          '/eau-chaude-sanitaire',
          '/pompe-a-chaleur',
          '/a-propos',
          '/contact',
          '/aides-etat',
          '/mentions-legales',
          '/politique-confidentialite'
        ],
        disallow: [
          '/admin/*',
          '/api/*',
          '/auth/*',
          '/profile/*'
        ]
      },
      {
        userAgent: 'GPTBot',
        allow: [
          '/',
          '/blog/*',
          '/chauffage',
          '/climatisation',
          '/eau-chaude-sanitaire',
          '/pompe-a-chaleur',
          '/a-propos',
          '/contact',
          '/aides-etat'
        ],
        disallow: [
          '/admin/*',
          '/api/*',
          '/auth/*',
          '/dashboard/*',
          '/profile/*'
        ]
      }
    ],
    sitemap: `${baseUrl}/sitemap_index.xml`,
    host: baseUrl
  }
} 