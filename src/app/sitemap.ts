import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

// Configuration du site
const SITE_URL = 'https://www.climgo.fr' // Remplacez par votre domaine
const DEFAULT_PRIORITY = 0.7
const DEFAULT_CHANGE_FREQ = 'monthly' as const

// Pages statiques avec leurs priorités personnalisées
const STATIC_ROUTES = [
  {
    url: '',
    priority: 1.0,
    changeFrequency: 'weekly' as const,
    lastModified: new Date(),
  },
  {
    url: '/services',
    priority: 0.9,
    changeFrequency: 'weekly' as const,
    lastModified: new Date(),
  },
  {
    url: '/chauffage',
    priority: 0.8,
    changeFrequency: 'monthly' as const,
    lastModified: new Date(),
  },
  {
    url: '/climatisation',
    priority: 0.8,
    changeFrequency: 'monthly' as const,
    lastModified: new Date(),
  },
  {
    url: '/eau-chaude-sanitaire',
    priority: 0.8,
    changeFrequency: 'monthly' as const,
    lastModified: new Date(),
  },
  {
    url: '/maintenance',
    priority: 0.8,
    changeFrequency: 'monthly' as const,
    lastModified: new Date(),
  },
  // Pages d'entreprise
  {
    url: '/a-propos',
    priority: 0.6,
    changeFrequency: 'yearly' as const,
    lastModified: new Date(),
  },
  {
    url: '/politique-confidentialite',
    priority: 0.3,
    changeFrequency: 'yearly' as const,
    lastModified: new Date(),
  },
  {
    url: '/certifications',
    priority: 0.5,
    changeFrequency: 'yearly' as const,
    lastModified: new Date(),
  },
  {
    url: '/mentions-legales',
    priority: 0.3,
    changeFrequency: 'yearly' as const,
    lastModified: new Date(),
  },
  {
    url: '/aides-etat',
    priority: 0.7,
    changeFrequency: 'monthly' as const,
    lastModified: new Date(),
  },
  {
    url: '/cgv',
    priority: 0.3,
    changeFrequency: 'yearly' as const,
    lastModified: new Date(),
  },
  // Zones d'intervention
  {
    url: '/bordeaux',
    priority: 0.7,
    changeFrequency: 'monthly' as const,
    lastModified: new Date(),
  },
  {
    url: '/arcachon',
    priority: 0.7,
    changeFrequency: 'monthly' as const,
    lastModified: new Date(),
  },
  {
    url: '/medoc',
    priority: 0.7,
    changeFrequency: 'monthly' as const,
    lastModified: new Date(),
  },
]

// Fonction pour scanner automatiquement les pages dans /app
function scanAppDirectory(): string[] {
  const appDir = path.join(process.cwd(), 'src/app')
  const routes: string[] = []

  function scanDirectory(dir: string, currentPath = ''): void {
    try {
      const items = fs.readdirSync(dir, { withFileTypes: true })
      
      for (const item of items) {
        if (item.isDirectory()) {
          // Ignorer les dossiers spéciaux Next.js
          if (item.name.startsWith('(') || item.name.startsWith('_') || item.name === 'api') {
            continue
          }

          // Construire le chemin de la route
          const routePath = currentPath + '/' + item.name
          const subDir = path.join(dir, item.name)
          
          // Vérifier s'il y a un page.tsx dans ce dossier
          const hasPageFile = fs.existsSync(path.join(subDir, 'page.tsx')) || 
                             fs.existsSync(path.join(subDir, 'page.ts'))
          
          if (hasPageFile) {
            routes.push(routePath)
          }
          
          // Scanner récursivement les sous-dossiers
          scanDirectory(subDir, routePath)
        }
      }
    } catch (error) {
      console.warn(`Erreur lors du scan du dossier ${dir}:`, error)
    }
  }

  scanDirectory(appDir)
  return routes
}

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemap: MetadataRoute.Sitemap = []

  // Ajouter les routes statiques configurées
  for (const route of STATIC_ROUTES) {
    sitemap.push({
      url: `${SITE_URL}${route.url}`,
      lastModified: route.lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })
  }

  // Scanner automatiquement les nouvelles pages
  const dynamicRoutes = scanAppDirectory()
  
  for (const route of dynamicRoutes) {
    // Éviter les doublons avec les routes statiques
    const isStaticRoute = STATIC_ROUTES.some(staticRoute => 
      staticRoute.url === route || staticRoute.url === route.slice(1)
    )
    
    if (!isStaticRoute && route !== '') {
      sitemap.push({
        url: `${SITE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: DEFAULT_CHANGE_FREQ,
        priority: DEFAULT_PRIORITY,
      })
    }
  }

  // Trier par priorité décroissante
  sitemap.sort((a, b) => (b.priority || 0) - (a.priority || 0))

  return sitemap
}
