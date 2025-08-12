import { Metadata } from 'next';
import { CityData } from '@/data/cityData';

interface CityLayoutSEOProps {
  cityData: CityData;
  children: React.ReactNode;
}

// Génération des métadonnées ultra-optimisées
export function generateCityMetadata(cityData: CityData): Metadata {
  const baseUrl = 'https://climgo.fr';
  const pageUrl = `${baseUrl}/${cityData.slug}`;
  
  return {
    title: cityData.seoData.title,
    description: cityData.seoData.description,
    keywords: [
      ...cityData.seoData.keywords,
      ...cityData.seoData.localKeywords,
      'chauffage', 'climatisation', 'pompe à chaleur', 'PAC', 'RGE',
      cityData.department, cityData.region, ...cityData.postalCodes
    ].join(', '),
    
    // Open Graph optimisé
    openGraph: {
      title: cityData.seoData.title,
      description: cityData.seoData.description,
      url: pageUrl,
      siteName: 'ClimGO - Expert Chauffage Climatisation',
      locale: 'fr_FR',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/images/og-${cityData.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: `Chauffage climatisation ${cityData.name} - ClimGO`,
        }
      ],
    },
    
    // Twitter Cards
    twitter: {
      card: 'summary_large_image',
      title: cityData.seoData.title,
      description: cityData.seoData.description,
      images: [`${baseUrl}/images/twitter-${cityData.slug}.jpg`],
    },
    
    // Géolocalisation
    other: {
      'geo.region': `FR-${cityData.department}`,
      'geo.placename': cityData.name,
      'geo.position': `${cityData.coordinates.lat};${cityData.coordinates.lng}`,
      'ICBM': `${cityData.coordinates.lat}, ${cityData.coordinates.lng}`,
      'DC.title': cityData.seoData.title,
    },
    
    // Canonical et alternates
    alternates: {
      canonical: pageUrl,
    },
    
    // Robots optimisé
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
  };
}

// JSON-LD Schema ultra-complet
export function generateCityJsonLD(cityData: CityData) {
  const baseUrl = 'https://climgo.fr';
  
  // Schema Organization principal
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ClimGO",
    "url": baseUrl,
    "logo": `${baseUrl}/logo-climgo.png`,
    "description": "Expert en chauffage, climatisation et pompes à chaleur. Intervention rapide, artisan RGE certifié.",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gironde",
      "addressRegion": "Nouvelle-Aquitaine",
      "addressCountry": "FR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+33-7-66-46-00-08",
      "contactType": "customer service",
      "availableLanguage": "French",
      "areaServed": "FR-33"
    },
    "sameAs": [
      "https://www.facebook.com/climgo.fr",
      "https://www.instagram.com/climgo.fr",
      "https://www.linkedin.com/company/climgo"
    ]
  };

  // Schema LocalBusiness spécifique à la ville
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `ClimGO ${cityData.name}`,
    "description": `Expert chauffage et climatisation à ${cityData.name}. Installation, dépannage et entretien de systèmes de chauffage, climatisation et pompes à chaleur.`,
    "url": `${baseUrl}/${cityData.slug}`,
    "telephone": "+33-7-66-46-00-08",
    "email": "contact@climgo.fr",
    
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityData.name,
      "postalCode": cityData.postalCodes[0],
      "addressRegion": cityData.region,
      "addressCountry": "FR"
    },
    
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": cityData.coordinates.lat,
      "longitude": cityData.coordinates.lng
    },
    
    "openingHours": Object.entries(cityData.businessData.workingHours).map(([day, hours]) => 
      `${day.substring(0, 2)} ${hours}`
    ),
    
    "priceRange": cityData.businessData.priceRange,
    
    "areaServed": cityData.businessData.serviceArea.map(area => ({
      "@type": "City",
      "name": area
    })),
    
    "hasCredential": cityData.businessData.certifications.map(cert => ({
      "@type": "EducationalOccupationalCredential",
      "name": cert
    })),
    
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Marie L."
        },
        "reviewBody": `Excellent service à ${cityData.name}. Installation de pompe à chaleur rapide et professionnelle. Je recommande vivement ClimGO !`
      }
    ]
  };

  // Schema Service pour chaque service
  const servicesSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Installation Chauffage",
      "description": `Installation de systèmes de chauffage à ${cityData.name}`,
      "provider": {
        "@type": "LocalBusiness",
        "name": `ClimGO ${cityData.name}`
      },
      "areaServed": {
        "@type": "City",
        "name": cityData.name
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services Chauffage",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Installation Pompe à Chaleur"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Installation Chaudière"
            }
          }
        ]
      }
    }
  ];

  // Schema FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Quel est le prix d'une pompe à chaleur à ${cityData.name} ?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Le prix d'une pompe à chaleur à ${cityData.name} varie entre 8 000€ et 15 000€ selon le modèle. ClimGO propose des devis gratuits et vous accompagne dans les aides financières disponibles.`
        }
      },
      {
        "@type": "Question", 
        "name": `ClimGO intervient-il en urgence à ${cityData.name} ?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Oui, ClimGO propose un service d'urgence 24h/7j à ${cityData.name} et dans tout le ${cityData.department}. Contactez-nous au 07 66 46 00 08 pour une intervention rapide.`
        }
      }
    ]
  };

  return {
    organization: organizationSchema,
    localBusiness: localBusinessSchema,
    services: servicesSchema,
    faq: faqSchema
  };
}

export default function CityLayoutSEO({ cityData, children }: CityLayoutSEOProps) {
  const jsonLD = generateCityJsonLD(cityData);
  
  return (
    <>
      {/* JSON-LD Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLD.organization)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLD.localBusiness)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLD.faq)
        }}
      />
      {jsonLD.services.map((service, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(service)
          }}
        />
      ))}
      
      {/* Contenu de la page */}
      {children}
    </>
  );
}
