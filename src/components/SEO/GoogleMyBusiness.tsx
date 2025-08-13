'use client'

import { useState, useEffect } from 'react'
import { Star, MapPin, Clock, Phone, ExternalLink, Users } from 'lucide-react'
import Link from 'next/link'

interface GoogleMyBusinessProps {
  city?: string
  showFullWidget?: boolean
  className?: string
}

interface BusinessInfo {
  name: string
  rating: number
  reviewCount: number
  address: string
  phone: string
  website: string
  hours: { [key: string]: string }
  photos: string[]
  services: string[]
  placeId?: string
}

export default function GoogleMyBusiness({ 
  city, 
  showFullWidget = false, 
  className = '' 
}: GoogleMyBusinessProps) {
  
  const [businessInfo, setBusinessInfo] = useState<BusinessInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [recentReviews, setRecentReviews] = useState<{ author: string; rating: number; text: string; date: string; verified: boolean }[]>([])

  useEffect(() => {
    loadBusinessInfo()
  }, [city])

  const loadBusinessInfo = async () => {
    setLoading(true)
    
    // Simuler les données Google My Business
    // En production, tu peux utiliser l'API Google Places
    const mockBusinessInfo: BusinessInfo = {
      name: `ClimGO ${city ? city.replace(/-/g, ' ') : 'Gironde'}`,
      rating: 5.0,
      reviewCount: 25,
      address: "28 rue de Cantelaude, 33380 Marcheprime",
      phone: "07 66 46 00 08",
      website: "https://www.climgo.fr",
      hours: {
        "Lundi": "08:00 - 18:00",
        "Mardi": "08:00 - 18:00", 
        "Mercredi": "08:00 - 18:00",
        "Jeudi": "08:00 - 18:00",
        "Vendredi": "08:00 - 18:00",
        "Samedi": "09:00 - 17:00",
        "Dimanche": "Fermé"
      },
      photos: [
        "/images/climgo-installation-1.jpg",
        "/images/climgo-team.jpg",
        "/images/climgo-equipment.jpg"
      ],
      services: [
        "Installation pompe à chaleur",
        "Dépannage chauffage",
        "Entretien climatisation",
        "Maintenance CVC"
      ],
      placeId: "ChIJXXXXXXXXXXXXXXXXXXXXX" // Place ID Google réel
    }

    // Ajouter des avis simulés
    const mockReviews = [
      {
        author: "Marie D.",
        rating: 5,
        text: `Excellent service de ClimGO${city ? ` à ${city.replace(/-/g, ' ')}` : ''}. Installation rapide et propre. Je recommande !`,
        date: "Il y a 2 semaines",
        verified: true
      },
      {
        author: "Jean-Pierre L.", 
        rating: 5,
        text: "Intervention en urgence pour ma chaudière. Technicien compétent et tarifs corrects.",
        date: "Il y a 1 mois",
        verified: true
      },
      {
        author: "Sophie M.",
        rating: 5, 
        text: "Installation pompe à chaleur parfaite. Explications claires sur les aides financières.",
        date: "Il y a 2 mois",
        verified: true
      }
    ]

    setBusinessInfo(mockBusinessInfo)
    setRecentReviews(mockReviews)
    setLoading(false)
  }

  const getCurrentDayHours = () => {
    const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
    const today = days[new Date().getDay()]
    return businessInfo?.hours[today] || "Fermé"
  }

  const isCurrentlyOpen = () => {
    const currentHours = getCurrentDayHours()
    if (currentHours === "Fermé") return false
    
    const now = new Date()
    const currentTime = now.getHours() * 60 + now.getMinutes()
    const [openTime, closeTime] = currentHours.split(' - ').map(time => {
      const [hours, minutes] = time.split(':').map(Number)
      return hours * 60 + minutes
    })
    
    return currentTime >= openTime && currentTime <= closeTime
  }

  if (loading) {
    return (
      <div className={`bg-card rounded-lg border p-6 animate-pulse ${className}`}>
        <div className="space-y-3">
          <div className="h-4 bg-muted rounded w-1/2"></div>
          <div className="h-3 bg-muted rounded w-1/3"></div>
          <div className="h-3 bg-muted rounded w-2/3"></div>
        </div>
      </div>
    )
  }

  if (!businessInfo) return null

  return (
    <div className={`bg-card rounded-lg border overflow-hidden ${className}`}>
      
      {/* En-tête avec nom et étoiles */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-foreground">
              {businessInfo.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              Expert en chauffage et climatisation
            </p>
          </div>
          <Link
            href={`https://search.google.com/local/writereview?placeid=${businessInfo.placeId}`}
            target="_blank"
            className="text-xs text-primary hover:underline flex items-center gap-1"
          >
            <ExternalLink className="w-3 h-3" />
            Voir sur Google
          </Link>
        </div>

        {/* Rating et avis */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            {[1,2,3,4,5].map(star => (
              <Star 
                key={star}
                className={`w-4 h-4 ${
                  star <= businessInfo.rating 
                    ? 'text-yellow-400 fill-yellow-400' 
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-medium">
            {businessInfo.rating}
          </span>
          <span className="text-sm text-muted-foreground">
            ({businessInfo.reviewCount} avis)
          </span>
        </div>

        {/* Infos pratiques */}
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <span>{businessInfo.address}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-muted-foreground" />
            <Link 
              href={`tel:${businessInfo.phone.replace(/\s/g, '')}`}
              className="text-primary hover:underline"
            >
              {businessInfo.phone}
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span className={isCurrentlyOpen() ? 'text-green-600' : 'text-red-600'}>
              {isCurrentlyOpen() ? 'Ouvert' : 'Fermé'} • {getCurrentDayHours()}
            </span>
          </div>
        </div>
      </div>

      {/* Widget complet */}
      {showFullWidget && (
        <>
          {/* Horaires détaillés */}
          <div className="px-6 pb-4">
            <h4 className="text-sm font-medium mb-2">Horaires d'ouverture</h4>
            <div className="grid grid-cols-2 gap-1 text-xs">
              {Object.entries(businessInfo.hours).map(([day, hours]) => (
                <div key={day} className="flex justify-between">
                  <span className="text-muted-foreground">{day}</span>
                  <span>{hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="px-6 pb-4">
            <h4 className="text-sm font-medium mb-2">Nos services</h4>
            <div className="flex flex-wrap gap-1">
              {businessInfo.services.map((service, index) => (
                <span 
                  key={index}
                  className="text-xs bg-muted px-2 py-1 rounded"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Avis récents */}
          <div className="px-6 pb-4">
            <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
              <Users className="w-4 h-4" />
              Avis récents
            </h4>
            <div className="space-y-3">
              {recentReviews.slice(0, 2).map((review, index) => (
                <div key={index} className="text-xs">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium">{review.author}</span>
                    <div className="flex">
                      {[1,2,3,4,5].map(star => (
                        <Star 
                          key={star}
                          className={`w-3 h-3 ${
                            star <= review.rating 
                              ? 'text-yellow-400 fill-yellow-400' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-muted-foreground">{review.date}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {review.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* CTA */}
      <div className="px-6 pb-6">
        <div className="grid grid-cols-2 gap-2">
          <Link
            href="/contact"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-2 rounded text-sm text-center font-medium transition-colors"
          >
            Devis gratuit
          </Link>
          <Link
            href={`tel:${businessInfo.phone.replace(/\s/g, '')}`}
            className="border border-primary text-primary hover:bg-primary/10 px-3 py-2 rounded text-sm text-center font-medium transition-colors"
          >
            Appeler
          </Link>
        </div>
      </div>

      {/* Schema.org pour Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": businessInfo.name,
            "image": businessInfo.photos,
            "@id": `https://www.climgo.fr${city ? `/${city}-chauffage-climatisation` : ''}`,
            "url": businessInfo.website,
            "telephone": businessInfo.phone,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": businessInfo.address.split(',')[0],
              "addressLocality": businessInfo.address.split(',')[1]?.trim(),
              "addressCountry": "FR"
            },
            "openingHoursSpecification": Object.entries(businessInfo.hours).map(([day, hours]) => ({
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": day,
              "opens": hours !== "Fermé" ? hours.split(' - ')[0] : undefined,
              "closes": hours !== "Fermé" ? hours.split(' - ')[1] : undefined
            })).filter(spec => spec.opens),
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": businessInfo.rating,
              "reviewCount": businessInfo.reviewCount
            },
            "review": recentReviews.map(review => ({
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": review.author
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": review.rating
              },
              "reviewBody": review.text
            }))
          })
        }}
      />
    </div>
  )
}
