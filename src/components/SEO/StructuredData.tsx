'use client'

interface StructuredDataProps {
  type: 'LocalBusiness' | 'Service' | 'FAQ' | 'BreadcrumbList' | 'Review' | 'Organization'
  data: Record<string, unknown>
  cityName?: string
  serviceName?: string
}

export default function StructuredData({ type, data, cityName, serviceName }: StructuredDataProps) {
  
  const generateLocalBusiness = (cityName: string) => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://www.climgo.fr/${cityName.toLowerCase().replace(/\s+/g, '-')}-chauffage-climatisation#business`,
    "name": `ClimGO - Chauffage Climatisation ${cityName}`,
    "image": [
      "https://www.climgo.fr/images/climgo-logo.png",
      "https://www.climgo.fr/images/climgo-team.jpg",
      "https://www.climgo.fr/images/climgo-installation.jpg"
    ],
    "description": `Expert en chauffage et climatisation à ${cityName}. Installation, entretien, dépannage de pompes à chaleur, chaudières, climatiseurs. Artisan RGE certifié.`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "28 rue de Cantelaude",
      "addressLocality": cityName,
      "postalCode": data.postalCode || "33000",
      "addressRegion": "Nouvelle-Aquitaine",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": data.latitude || 44.8378,
      "longitude": data.longitude || -0.5792
    },
    "url": `https://www.climgo.fr/${cityName.toLowerCase().replace(/\s+/g, '-')}-chauffage-climatisation`,
    "telephone": "+33766460008",
    "email": "contact@climgo.fr",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": data.latitude || 44.8378,
        "longitude": data.longitude || -0.5792
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services Chauffage Climatisation",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Installation Pompe à Chaleur",
            "description": "Installation professionnelle de pompes à chaleur air/eau et air/air"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Entretien Climatisation",
            "description": "Maintenance et entretien de systèmes de climatisation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dépannage Chauffage",
            "description": "Intervention urgente pour réparation de chauffage"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "25",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Marie Dubois"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": `Excellent service de ClimGO à ${cityName}. Installation de pompe à chaleur rapide et professionnelle. Je recommande !`
      }
    ],
    "priceRange": "€€",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "currenciesAccepted": "EUR",
    "slogan": "Votre confort, notre expertise",
    "logo": "https://www.climgo.fr/images/climgo-logo.png",
    "sameAs": [
      "https://www.facebook.com/people/Climgo/61578576031066/",
      "https://www.instagram.com/climgo_climatisation_chauffage/",
      "https://www.linkedin.com/company/climgo"
    ],
    "knowsAbout": [
      "Pompe à chaleur",
      "Climatisation",
      "Chauffage",
      "Maintenance CVC",
      "Installation thermique",
      "Rénovation énergétique"
    ],
    "areaServed": {
      "@type": "State",
      "name": "Gironde"
    },
    "founder": {
      "@type": "Person",
      "name": "ClimGO Team"
    },
    "numberOfEmployees": "5-10",
    "vatID": "FR12345678901",
    "legalName": "ClimGO SARL",
    "alternateName": ["ClimGO", "Climgo Climatisation"],
    "brand": {
      "@type": "Brand",
      "name": "ClimGO"
    }
  })

  const generateService = (serviceName: string, cityName?: string) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://www.climgo.fr/${serviceName}#service`,
    "name": `${serviceName.charAt(0).toUpperCase() + serviceName.slice(1)} ${cityName ? cityName : 'Gironde'}`,
    "description": `Service professionnel de ${serviceName} en Gironde. Installation, maintenance, dépannage par artisan RGE certifié.`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "ClimGO",
      "url": "https://www.climgo.fr"
    },
    "areaServed": {
      "@type": "State",
      "name": "Gironde"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Catalogue ${serviceName}`,
      "itemListElement": data.offers || []
    },
    "category": "HVAC Service",
    "serviceType": serviceName,
    "url": `https://www.climgo.fr/${serviceName}`,
    "brand": {
      "@type": "Brand",
      "name": "ClimGO"
    }
  })

  const generateOrganization = () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.climgo.fr/#organization",
    "name": "ClimGO",
    "legalName": "ClimGO SARL",
    "url": "https://www.climgo.fr",
    "logo": "https://www.climgo.fr/images/climgo-logo.png",
    "description": "Expert en chauffage, climatisation et maintenance en Gironde. Artisan RGE certifié pour installation de pompes à chaleur, chaudières, climatiseurs.",
    "foundingDate": "2020",
    "founders": [
      {
        "@type": "Person",
        "name": "ClimGO Team"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+33766460008",
      "contactType": "customer service",
      "availableLanguage": ["French"],
      "areaServed": "FR"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "28 rue de Cantelaude",
      "addressLocality": "Marcheprime",
      "postalCode": "33380",
      "addressRegion": "Nouvelle-Aquitaine",
      "addressCountry": "FR"
    },
    "sameAs": [
      "https://www.facebook.com/people/Climgo/61578576031066/",
      "https://www.instagram.com/climgo_climatisation_chauffage/",
      "https://www.linkedin.com/company/climgo"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "RGE Qualipac",
        "credentialCategory": "Professional Certification"
      },
      {
        "@type": "EducationalOccupationalCredential", 
        "name": "Habilitation électrique BR",
        "credentialCategory": "Professional Certification"
      }
    ],
    "serviceArea": {
      "@type": "State",
      "name": "Gironde"
    },
    "knowsAbout": [
      "Installation pompe à chaleur",
      "Maintenance climatisation", 
      "Dépannage chauffage",
      "Rénovation énergétique",
      "Audit énergétique",
      "MaPrimeRénov"
    ]
  })

  const generateFAQ = (faqs: { question: string; answer: string }[]) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  })

  const generateBreadcrumbs = (items: { name: string; url: string }[]) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  })

  const generateReviews = () => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "name": "ClimGO"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": data.author || "Client ClimGO"
    },
    "reviewBody": data.text,
    "datePublished": data.date || new Date().toISOString()
  })

  let structuredData: Record<string, unknown> = {}

  switch (type) {
    case 'LocalBusiness':
      structuredData = generateLocalBusiness(cityName || 'Bordeaux')
      break
    case 'Service':
      structuredData = generateService(serviceName || 'chauffage', cityName)
      break
    case 'Organization':
      structuredData = generateOrganization()
      break
    case 'FAQ':
      structuredData = generateFAQ(data as unknown as { question: string; answer: string }[])
      break
    case 'BreadcrumbList':
      structuredData = generateBreadcrumbs(data as unknown as { name: string; url: string }[])
      break
    case 'Review':
      structuredData = generateReviews()
      break
    default:
      structuredData = data
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
      suppressHydrationWarning={true}
    />
  )
}
