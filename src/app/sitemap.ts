import { cities, services } from '@/config/cities'
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

  // Pages services
  const serviceUrls = services.map(service => ({
    url: `${baseUrl}/${service}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9
  }))

  // Pages villes
  const cityUrls = cities.map(city => ({
    url: `${baseUrl}/villes/${city}-chauffage-climatisation`,
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
    
    const posts = await prisma.post.findMany({
      where: { published: true },
      select: { slug: true, createdAt: true, updatedAt: true },
      orderBy: { createdAt: 'desc' }
    })

    blogUrls = posts.map(post => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt || post.createdAt,
      changeFrequency: 'monthly' as const,
      priority: 0.7
    }))

    await prisma.$disconnect()
  } catch (error) {
    console.log('Blog posts not available for sitemap:', error)
    // Fallback : pas d'articles du blog
  }

  return [
    ...staticUrls,
    ...serviceUrls,
    ...cityUrls,
    ...blogUrls
  ]
}
