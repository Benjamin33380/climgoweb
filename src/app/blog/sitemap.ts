import { MetadataRoute } from 'next'
import { prisma } from '@/lib/prisma'

// Revalidation du sitemap blog toutes les heures
export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.climgo.fr'
  const currentDate = new Date()

  try {
    // Récupérer tous les articles publiés
    const articles = await prisma.article.findMany({
      where: { published: true },
      select: {
        slug: true,
        updatedAt: true,
        createdAt: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    // Page principale du blog
    const blogMainPage = {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1
    }

    // Pages des articles individuels
    const articlePages = articles.map(article => ({
      url: `${baseUrl}/blog/${article.slug}`,
      lastModified: article.updatedAt || article.createdAt || currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8
    }))

    console.log(`✅ Sitemap blog généré avec ${articles.length} articles`)

    return [
      blogMainPage,
      ...articlePages
    ]
    
  } catch (error) {
    console.error('❌ Erreur lors de la génération du sitemap blog:', error)
    
    // En cas d'erreur, retourner au moins la page principale du blog
    return [
      {
        url: `${baseUrl}/blog`,
        lastModified: currentDate,
        changeFrequency: 'daily' as const,
        priority: 1
      }
    ]
  }
} 