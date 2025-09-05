import { CityConfig } from '@/config/cities';

export function CitySchema(cityData: CityConfig) {
  const cityUrl = `https://www.climgo.fr/villes/${cityData.slug}`;
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": `${cityData.name} - Chauffage & Climatisation | ClimGO`,
          "description": cityData.description,
          "url": cityUrl,
          "mainEntity": {
            "@type": "HVACBusiness",
            "name": "ClimGO",
            "url": "https://www.climgo.fr",
            "telephone": "+33766460008",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "28 rue de Cantelaude",
              "addressLocality": "Marcheprime",
              "addressRegion": "Nouvelle-Aquitaine",
              "postalCode": "33380",
              "addressCountry": "FR"
            },
            "areaServed": {
              "@type": "Place",
              "name": cityData.name,
              "containedInPlace": {
                "@type": "Place",
                "name": "Gironde, Nouvelle-Aquitaine"
              }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": `Services ClimGO à ${cityData.name}`,
              "itemListElement": cityData.services.map((service, index) => ({
                "@type": "Offer",
                "position": index + 1,
                "itemOffered": {
                  "@type": "Service",
                  "name": service,
                  "description": `${service} à ${cityData.name} - ClimGO, expert chauffage et climatisation`,
                  "url": `https://www.climgo.fr/${service.toLowerCase().replace(/\s+/g, '-')}`,
                  "provider": {
                    "@type": "HVACBusiness",
                    "name": "ClimGO",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "28 rue de Cantelaude",
                      "addressLocality": "Marcheprime",
                      "addressRegion": "Nouvelle-Aquitaine",
                      "postalCode": "33380",
                      "addressCountry": "FR"
                    }
                  }
                }
              }))
            }
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Accueil",
                "item": "https://www.climgo.fr"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Villes",
                "item": "https://www.climgo.fr/zones-interventions"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": cityData.name,
                "item": cityUrl
              }
            ]
          },
          "potentialAction": {
            "@type": "SearchAction",
            "name": `Demander un devis à ${cityData.name}`,
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://www.climgo.fr/contact"
            }
          }
        })
      }}
    />
  );
}
