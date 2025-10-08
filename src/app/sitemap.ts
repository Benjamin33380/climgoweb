import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.climgo.fr'
  const currentDate = new Date()

  // Pages statiques
  const staticPages = [
    '', // homepage
    'contact',
    'services',
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
  const services = ['chauffage', 'climatisation', 'maintenance', 'eau-chaude-sanitaire']
  const serviceUrls = services.map(service => ({
    url: `${baseUrl}/${service}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9
  }))

  // Articles du blog - Récupération depuis MongoDB
  const blogUrls: MetadataRoute.Sitemap = []
  
  // Récupération des articles depuis la base MongoDB
  console.log('Blog articles not available for sitemap (MongoDB à configurer)')

  return [
    ...staticUrls,
    ...serviceUrls,
    ...blogUrls
  ]
}
