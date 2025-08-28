import { getAllCities } from '@/config/cities'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.climgo.fr'
  const currentDate = new Date()

  // Pages statiques
  const staticPages = [
    '', // homepage
    'contact',
    'services',
    'zones-interventions',
    'aides-etat',
    'a-propos',
    'blog',
    'mentions-legales',
    'politique-confidentialite'
  ]

  // Pages statiques
  const staticUrls = staticPages.map(page => ({
    url: page === '' ? baseUrl : `${baseUrl}/${page}`,
    lastModified: currentDate,
    changeFrequency: page === '' ? 'daily' as const : 'weekly' as const,
    priority: page === '' ? 1 : 0.9
  }))

  // Pages services (hardcodées car pas d'export dans cities.ts)
  const services = ['chauffage', 'climatisation', 'maintenance', 'eau-chaude-sanitaire']
  const serviceUrls = services.map(service => ({
    url: `${baseUrl}/${service}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9
  }))

  // Pages villes - Utilisation de getAllCities() pour obtenir toutes les villes
  const cities = getAllCities()
  const cityUrls = cities.map(city => ({
    url: `${baseUrl}/villes/${city.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8
  }))

  // Articles du blog - Récupération directe depuis la base de données
  let blogUrls: MetadataRoute.Sitemap = []
  
  try {
    // Import dynamique de Prisma pour éviter les erreurs de build
    const { PrismaClient } = await import('@prisma/client')
    const prisma = new PrismaClient()
    
    const articles = await prisma.article.findMany({
      where: { published: true },
      select: { slug: true, createdAt: true, updatedAt: true },
      orderBy: { createdAt: 'desc' }
    })

    blogUrls = articles.map(article => ({
      url: `${baseUrl}/blog/${article.slug}`,
      lastModified: article.updatedAt || article.createdAt,
      changeFrequency: 'monthly' as const,
      priority: 0.8
    }))

    await prisma.$disconnect()
  } catch (error) {
    console.log('Blog articles not available for sitemap:', error)
    // Fallback : pas d'articles du blog
  }

  return [
    ...staticUrls,
    ...serviceUrls,
    ...cityUrls,
    ...blogUrls
  ]
}
