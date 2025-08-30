import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || 'https://dummy-redis.upstash.io',
  token: process.env.UPSTASH_REDIS_REST_TOKEN || 'dummy-token',
})

export default redis

// Fonctions utilitaires pour le cache
export const cacheUtils = {
  // Mettre en cache un article
  cacheArticle: async (slug: string, article: Record<string, unknown>) => {
    await redis.set(`article:${slug}`, JSON.stringify(article), { ex: 3600 }) // 1 heure
  },
  
  // Récupérer un article du cache
  getCachedArticle: async (slug: string) => {
    const cached = await redis.get(`article:${slug}`)
    return cached ? JSON.parse(cached as string) : null
  },
  
  // Mettre en cache les commentaires
  cacheComments: async (articleId: string, comments: Record<string, unknown>[]) => {
    await redis.set(`comments:${articleId}`, JSON.stringify(comments), { ex: 1800 }) // 30 min
  },
  
  // Récupérer les commentaires du cache
  getCachedComments: async (articleId: string) => {
    const cached = await redis.get(`comments:${articleId}`)
    return cached ? JSON.parse(cached as string) : null
  },
  
  // Rate limiting pour les commentaires
  checkRateLimit: async (userId: string, action: string) => {
    const key = `ratelimit:${userId}:${action}`
    const count = await redis.incr(key)
    
    if (count === 1) {
      await redis.expire(key, 3600) // 1 heure
    }
    
    return count <= 5 // Max 5 actions par heure
  }
}
