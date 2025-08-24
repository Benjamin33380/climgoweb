'use client';

interface JsonLdProps {
  type: 'business' | 'service' | 'city';
  city?: string;
  postalCode?: string;
  service?: string;
}

export default function JsonLd({ type, city, postalCode, service }: JsonLdProps) {
  if (type === 'business') {
    const businessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "ClimGO",
      "description": "Spécialiste en climatisation, chauffage et maintenance depuis plus de 10 ans. Notre expertise au service de votre confort en Gironde et dans le Nord des Landes.",
      "url": "https://www.climgo.fr",
      "telephone": "+33766460008",
      "email": "contact@climgo.fr",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Gironde",
        "addressCountry": "FR",
        "addressLocality": "Bordeaux"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "44.837789",
        "longitude": "-0.57918"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Bordeaux"
        },
        {
          "@type": "City", 
          "name": "Arcachon"
        },
        {
          "@type": "City",
          "name": "Mérignac"
        },
        {
          "@type": "City",
          "name": "Pessac"
        }
      ],
      "serviceType": ["Chauffage", "Climatisation", "Maintenance", "Pompe à chaleur"],
      "priceRange": "€€",
      "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
      "currenciesAccepted": "EUR",
      "openingHours": "Mo-Fr 08:00-18:00",
      "sameAs": [
        "https://www.facebook.com/climgo",
        "https://www.instagram.com/climgo",
        "https://www.linkedin.com/company/climgo"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "25",
        "bestRating": "5",
        "worstRating": "1"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services ClimGO",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Installation Pompe à Chaleur",
              "description": "Installation de pompes à chaleur air-eau et air-air"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Maintenance Climatisation",
              "description": "Entretien et maintenance de systèmes de climatisation"
            }
          }
        ]
      }
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
    );
  }

  if (type === 'city' && city && postalCode) {
    const citySchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `Chauffage et Climatisation ${city}`,
      "description": `Expert chauffage climatisation ${city} ${postalCode}. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié.`,
      "provider": {
        "@type": "LocalBusiness",
        "name": "ClimGO",
        "telephone": "+33766460008",
        "email": "contact@climgo.fr"
      },
      "areaServed": {
        "@type": "City",
        "name": city,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": city,
          "postalCode": postalCode,
          "addressRegion": "Gironde",
          "addressCountry": "FR"
        }
      },
      "serviceType": ["Chauffage", "Climatisation", "Maintenance"],
      "url": `https://www.climgo.fr/villes/${city.toLowerCase().replace(/\s+/g, '-')}-chauffage-climatisation`
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
      />
    );
  }

  if (type === 'service' && service) {
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `${service.charAt(0).toUpperCase() + service.slice(1)} - ClimGO`,
      "description": `Service de ${service} professionnel en Gironde. Installation, maintenance et dépannage. Devis gratuit.`,
      "provider": {
        "@type": "LocalBusiness",
        "name": "ClimGO",
        "telephone": "+33766460008"
      },
      "areaServed": {
        "@type": "State",
        "name": "Gironde",
        "addressCountry": "FR"
      },
      "url": `https://www.climgo.fr/${service}`
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    );
  }

  return null;
}
