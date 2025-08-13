'use client'

import { Metadata } from 'next'

interface SEOMetaProps {
  city?: string
  service?: string
  type?: 'city' | 'service' | 'blog' | 'home'
  customTitle?: string
  customDescription?: string
  keywords?: string[]
}

// Base de données de mots-clés ultra-SEO pour chaque ville
const cityKeywords: Record<string, string[]> = {
  'bordeaux': ['chauffage bordeaux', 'climatisation bordeaux', 'pompe à chaleur bordeaux 33000', 'chauffagiste bordeaux', 'artisan RGE bordeaux'],
  'merignac': ['chauffage mérignac', 'climatisation mérignac', 'pompe à chaleur mérignac 33700', 'chauffagiste mérignac', 'installation PAC mérignac'],
  'pessac': ['chauffage pessac', 'climatisation pessac', 'pompe à chaleur pessac 33600', 'chauffagiste pessac', 'dépannage chauffage pessac'],
  'talence': ['chauffage talence', 'climatisation talence', 'pompe à chaleur talence 33400', 'chauffagiste talence', 'entretien climatisation talence'],
  'arcachon': ['chauffage arcachon', 'climatisation arcachon', 'pompe à chaleur arcachon 33120', 'chauffagiste arcachon', 'installation PAC arcachon'],
  // ... (toutes tes autres villes)
}

const serviceKeywords: Record<string, string[]> = {
  'chauffage': ['installation chaudière', 'pompe à chaleur air eau', 'chauffage central', 'radiateurs', 'plancher chauffant', 'chaudière gaz', 'chaudière fioul'],
  'climatisation': ['climatisation réversible', 'pompe à chaleur air air', 'climatiseur mural', 'climatisation gainable', 'clim multi-split'],
  'maintenance': ['entretien chaudière', 'maintenance climatisation', 'dépannage chauffage', 'contrat entretien', 'réparation PAC'],
  'eau-chaude-sanitaire': ['chauffe-eau thermodynamique', 'ballon eau chaude', 'chauffe-eau solaire', 'cumulus', 'préparateur ECS']
}

export function generateSEOMeta({ 
  city, 
  service, 
  type = 'home', 
  customTitle, 
  customDescription,
  keywords = []
}: SEOMetaProps): Metadata {
  
  let title = customTitle
  let description = customDescription
  const metaKeywords: string[] = [...keywords]

  // Génération dynamique selon le type
  switch (type) {
    case 'city':
      if (city) {
        const cityName = city.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
        title = title || `Chauffage Climatisation ${cityName} | Expert RGE ClimGO | Devis Gratuit`
        description = description || `Expert chauffage climatisation ${cityName}. Installation pompe à chaleur, dépannage urgent, entretien. Artisan RGE certifié. Devis gratuit sous 24h. ☎️ 07 66 46 00 08`
        
        // Ajouter les keywords spécifiques à la ville
        metaKeywords.push(...(cityKeywords[city] || []))
        metaKeywords.push(
          `expert chauffage ${cityName.toLowerCase()}`,
          `climatisation ${cityName.toLowerCase()}`,
          `artisan RGE ${cityName.toLowerCase()}`,
          `dépannage chauffage ${cityName.toLowerCase()}`,
          `installation PAC ${cityName.toLowerCase()}`
        )
      }
      break

    case 'service':
      if (service) {
        const serviceName = service.replace(/-/g, ' ')
        title = title || `${serviceName.charAt(0).toUpperCase() + serviceName.slice(1)} Gironde | Installation Maintenance | ClimGO RGE`
        description = description || `Spécialiste ${serviceName} en Gironde. Installation, maintenance, dépannage par artisan RGE certifié. Devis gratuit. Intervention rapide. ☎️ 07 66 46 00 08`
        
        // Ajouter les keywords spécifiques au service
        metaKeywords.push(...(serviceKeywords[service] || []))
        metaKeywords.push(
          `${serviceName} gironde`,
          `installation ${serviceName}`,
          `expert ${serviceName}`,
          `artisan ${serviceName}`
        )
      }
      break

    case 'blog':
      title = title || 'Blog ClimGO | Conseils Chauffage Climatisation | Expert RGE Gironde'
      description = description || 'Blog expert ClimGO : conseils chauffage, climatisation, maintenance. Guides techniques, aides financières, nouveautés. Artisan RGE certifié Gironde.'
      metaKeywords.push(
        'blog chauffage', 'conseils climatisation', 'guide technique CVC',
        'aides financières chauffage', 'MaPrimeRénov', 'entretien chaudière',
        'optimisation chauffage', 'économies énergie'
      )
      break

    default: // home
      title = title || 'ClimGO | Expert Chauffage Climatisation Gironde | Artisan RGE Certifié'
      description = description || 'ClimGO, expert chauffage climatisation Gironde. Installation pompe à chaleur, dépannage urgent, entretien. Artisan RGE certifié. Devis gratuit ☎️ 07 66 46 00 08'
      metaKeywords.push(
        'chauffage gironde', 'climatisation gironde', 'pompe à chaleur gironde',
        'artisan RGE gironde', 'chauffagiste bordeaux', 'installation PAC',
        'dépannage chauffage', 'entretien climatisation', 'devis gratuit'
      )
  }

  // Keywords de base ClimGO
  const baseKeywords = [
    'ClimGO', 'chauffage', 'climatisation', 'pompe à chaleur', 'maintenance',
    'artisan RGE', 'installation', 'dépannage', 'entretien', 'gironde',
    'bordeaux', 'devis gratuit', 'intervention rapide', 'expert CVC'
  ]

  // Fusionner tous les keywords
  const allKeywords = Array.from(new Set([...baseKeywords, ...metaKeywords]))

  return {
    title,
    description,
    keywords: allKeywords.join(', '),
    
    // Open Graph ultra-optimisé
    openGraph: {
      title,
      description,
      url: `https://www.climgo.fr`,
      siteName: 'ClimGO - Expert Chauffage Climatisation',
      images: [
        {
          url: 'https://www.climgo.fr/images/og-climgo.jpg',
          width: 1200,
          height: 630,
          alt: `${title} - ClimGO`,
        }
      ],
      locale: 'fr_FR',
      type: 'website',
    },

    // Twitter Cards
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: '@climgo_fr',
      creator: '@climgo_fr',
    },

    // Métadonnées avancées
    authors: [{ name: 'ClimGO' }],
    creator: 'ClimGO',
    publisher: 'ClimGO',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    // Données supplémentaires
    other: {
      'revisit-after': '7 days',
      'distribution': 'global',
      'rating': 'general',
      'language': 'fr',
      'geo.region': 'FR-33',
      'geo.placename': city ? city.replace(/-/g, ' ') : 'Gironde',
      'geo.position': '44.8378;-0.5792',
      'ICBM': '44.8378, -0.5792',
    },
  }
}

// Hook pour utiliser facilement le générateur
export function useSEOMeta(props: SEOMetaProps) {
  return generateSEOMeta(props)
}
