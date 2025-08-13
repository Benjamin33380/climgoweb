'use client'

import Link from 'next/link'
import { ArrowRight, MapPin, Wrench } from 'lucide-react'

interface InternalLinkingProps {
  currentCity?: string
  currentService?: string
  className?: string
}

export default function InternalLinking({ 
  currentCity, 
  currentService, 
  className = '' 
}: InternalLinkingProps) {
  
  // Villes principales pour le maillage interne
  const mainCities = [
    { name: 'Bordeaux', slug: 'bordeaux', population: '250k+' },
    { name: 'Mérignac', slug: 'merignac', population: '70k+' },
    { name: 'Pessac', slug: 'pessac', population: '65k+' },
    { name: 'Talence', slug: 'talence', population: '43k+' },
    { name: 'Arcachon', slug: 'arcachon', population: '10k+' },
    { name: 'La Teste-de-Buch', slug: 'la-teste-de-buch', population: '26k+' }
  ]

  // Services pour le cross-linking
  const services = [
    { 
      name: 'Chauffage', 
      slug: 'chauffage', 
      icon: <Wrench className="w-4 h-4" />,
      description: 'Installation & maintenance'
    },
    { 
      name: 'Climatisation', 
      slug: 'climatisation',
      icon: <Wrench className="w-4 h-4" />,
      description: 'Solutions de refroidissement'
    },
    { 
      name: 'Maintenance', 
      slug: 'maintenance',
      icon: <Wrench className="w-4 h-4" />,
      description: 'Entretien professionnel'
    },
    { 
      name: 'Eau chaude sanitaire', 
      slug: 'eau-chaude-sanitaire',
      icon: <Wrench className="w-4 h-4" />,
      description: 'Chauffe-eau & ballons'
    }
  ]

  // Filtrer les villes (exclure la ville actuelle)
  const suggestedCities = mainCities.filter(city => city.slug !== currentCity).slice(0, 3)
  
  // Filtrer les services (exclure le service actuel)
  const suggestedServices = services.filter(service => service.slug !== currentService).slice(0, 2)

  return (
    <div className={`space-y-8 ${className}`}>
      
      {/* Liens vers d'autres villes */}
      {suggestedCities.length > 0 && (
        <div className="bg-card rounded-lg border p-6">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold">
              Nos services dans d'autres villes
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {suggestedCities.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}-chauffage-climatisation`}
                className="group p-4 rounded-lg border hover:border-primary/50 hover:bg-accent/50 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium group-hover:text-primary transition-colors">
                    {city.name}
                  </h4>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-sm text-muted-foreground">
                  {city.population} habitants
                </p>
                <p className="text-xs text-primary mt-1">
                  Chauffage • Climatisation • Maintenance
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Liens vers d'autres services */}
      {suggestedServices.length > 0 && (
        <div className="bg-card rounded-lg border p-6">
          <div className="flex items-center gap-2 mb-4">
            <Wrench className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold">
              Découvrez nos autres services
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {suggestedServices.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="group p-4 rounded-lg border hover:border-primary/50 hover:bg-accent/50 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-primary group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h4 className="font-medium group-hover:text-primary transition-colors">
                    {service.name}
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
                <div className="flex items-center gap-1 mt-2 text-xs text-primary">
                  <span>En savoir plus</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* CTA vers contact */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20 p-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">
            Besoin d'un devis personnalisé ?
          </h3>
          <p className="text-muted-foreground mb-4">
            Nos experts ClimGO vous répondent en moins de 24h
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Obtenir mon devis gratuit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
      
      {/* Liens vers le blog */}
      <div className="bg-card rounded-lg border p-6">
        <h3 className="text-lg font-semibold mb-4">
          📚 Nos conseils d'experts
        </h3>
        <div className="space-y-3">
          <Link
            href="/blog?category=chauffage"
            className="block text-sm hover:text-primary transition-colors"
          >
            → Guide complet : Choisir sa pompe à chaleur en 2025
          </Link>
          <Link
            href="/blog?category=maintenance"
            className="block text-sm hover:text-primary transition-colors"
          >
            → Entretien climatisation : les bonnes pratiques
          </Link>
          <Link
            href="/blog?category=aides"
            className="block text-sm hover:text-primary transition-colors"
          >
            → MaPrimeRénov' 2025 : toutes les aides disponibles
          </Link>
        </div>
      </div>
    </div>
  )
}

