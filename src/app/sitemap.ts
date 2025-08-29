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

  // Articles du blog - TODO: Remplacer par Supabase
  const blogUrls: MetadataRoute.Sitemap = []
  
  // TODO: Remplacer par Supabase pour récupérer les articles
  console.log('Blog articles not available for sitemap (Supabase à configurer)')

  return [
    ...staticUrls,
    ...serviceUrls,
    ...cityUrls,
    ...blogUrls
  ]
}
