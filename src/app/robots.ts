import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://climgo.fr'
  
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
          '/services',
          '/a-propos',
          '/contact',
          '/villes/*',
          '/zones-interventions',
          '/aides-etat',
          '/mentions-legales',
          '/politique-confidentialite'
        ],
        disallow: [
          '/admin/*',
          '/api/*',
          '/auth/*',
          '/profile/*',
      
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
          '/services',
          '/a-propos',
          '/contact',
          '/villes/*',
          '/zones-interventions',
          '/aides-etat'
        ],
        disallow: [
          '/admin/*',
          '/api/*',
          '/auth/*',
          '/dashboard/*',
          '/profile/*',

        ]
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl
  }
} 