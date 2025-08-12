import { Metadata } from 'next';

// Métadonnées ultra-optimisées Saint-Jean-D-Illac COMPLETE
export const metadata: Metadata = {
  title: 'Chauffage Climatisation Saint-Jean-D-Illac 33127 | ClimGO Expert Local',
  description: 'Expert chauffage climatisation Saint-Jean-D-Illac 33127. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié. Devis gratuit sous 24h.',
  
  keywords: [
    // Mots-clés principaux
    'chauffage saint-jean-d-illac', 'climatisation saint-jean-d-illac', 'pompe à chaleur saint-jean-d-illac',
    'chauffagiste saint-jean-d-illac 33127', 'plombier chauffagiste saint-jean-d-illac',
    
    // Services spécifiques
    'installation pompe à chaleur saint-jean-d-illac', 'dépannage chauffage saint-jean-d-illac',
    'entretien climatisation saint-jean-d-illac', 'réparation PAC saint-jean-d-illac',
    
    // Urgences
    'chauffagiste urgence saint-jean-d-illac', 'dépannage 24h saint-jean-d-illac',
    
    // Certifications
    'artisan RGE saint-jean-d-illac', 'qualipac saint-jean-d-illac'
  ].join(', '),
  
  // Open Graph optimisé COMPLET
  openGraph: {
    title: 'Chauffage Climatisation Saint-Jean-D-Illac 33127 | ClimGO Expert Local',
    description: 'ClimGO, expert chauffage climatisation Saint-Jean-D-Illac. Installation, dépannage, entretien PAC. Artisan RGE certifié. Devis gratuit.',
    url: 'https://climgo.fr/saint-jean-d-illac-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://climgo.fr/images/og-saint-jean-d-illac-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation Saint-Jean-D-Illac - ClimGO',
    }],
  },
  
  // Twitter Cards COMPLET
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Chauffage Climatisation Saint-Jean-D-Illac 33127 | ClimGO Expert Local',
    description: 'Expert chauffage climatisation Saint-Jean-D-Illac. Installation PAC, dépannage urgent. Artisan RGE certifié.',
    images: ['https://climgo.fr/images/twitter-saint-jean-d-illac-chauffage-climatisation.jpg'],
  },
  
  // Métadonnées avancées COMPLÈTES
  other: {
    // Géolocalisation précise
    'geo.region': 'FR-33',
    'geo.placename': 'Saint-Jean-D-Illac',
    'geo.position': '44.8031;-0.7686',
    'ICBM': '44.8031, -0.7686',
    'geo.country': 'France',
    'geo.state': 'Nouvelle-Aquitaine',
    
    // Dublin Core COMPLET
    'DC.title': 'Chauffage Climatisation Saint-Jean-D-Illac 33127 | ClimGO Expert Local',
    'DC.description': 'Expert chauffage climatisation Saint-Jean-D-Illac 33127. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié.',
    'DC.creator': 'ClimGO',
    'DC.publisher': 'ClimGO',
    'DC.language': 'fr-FR',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://climgo.fr/saint-jean-d-illac-chauffage-climatisation',
    'DC.source': 'https://climgo.fr',
    'DC.coverage': 'Saint-Jean-D-Illac, Gironde, France',
    'DC.rights': '© 2025 ClimGO. Tous droits réservés.',
    
    // Données business locales COMPLÈTES
    'business.contact_data.locality': 'Saint-Jean-D-Illac',
    'business.contact_data.postal_code': '33127',
    'business.contact_data.phone_number': '+33766460008',
    'business.contact_data.website': 'https://climgo.fr',
    'business.contact_data.email': 'contact@climgo.fr',
    
    // Signaux SEO local AVANCÉS
    'rating': '4.8',
    'priceRange': '€€',
    'audience': 'Particuliers et Professionnels',
    'category': 'Chauffage, Climatisation, Pompe à chaleur',
    'serviceType': 'Installation, Dépannage, Entretien',
    
    // Référencement avancé
    'revisit-after': '7 days',
    'robots': 'index,follow,noimageindex,max-video-preview:-1,max-image-preview:large,max-snippet:-1',
    'googlebot': 'index,follow,max-video-preview:-1,max-image-preview:large,max-snippet:-1',
    
    // Vérifications
    'google-site-verification': 'Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g',
    'bing-site-verification': 'VERIFICATION_CODE_TO_ADD'
  },
  
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
  
  alternates: {
    canonical: 'https://climgo.fr/saint-jean-d-illac-chauffage-climatisation',
  },
  
  verification: {
    google: 'VERIFICATION_CODE_TO_ADD',
    other: {
      bing: 'VERIFICATION_CODE_TO_ADD'
    }
  }
};

export default function SaintJeanDIllacLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr-FR">
      <head>
        {/* Préconnexions performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//maps.googleapis.com" />
        
        {/* Favicons complets */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* JSON-LD Schema LocalBusiness ULTRA-COMPLET */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "ClimGO Saint-Jean-D-Illac",
              "description": "Expert chauffage et climatisation à Saint-Jean-D-Illac. Installation, dépannage et entretien de systèmes de chauffage et pompes à chaleur.",
              "url": "https://climgo.fr/saint-jean-d-illac-chauffage-climatisation",
              "telephone": "+33-7-66-46-00-08",
              "email": "contact@climgo.fr",
              "logo": "https://climgo.fr/logo-climgo.png",
              
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Saint-Jean-D-Illac",
                "postalCode": "33127",
                "addressRegion": "Nouvelle-Aquitaine",
                "addressCountry": "FR"
              },
              
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 44.8031,
                "longitude": -0.7686
              },
              
              "openingHours": [
                "Mo 08:00-18:00", "Tu 08:00-18:00", "We 08:00-18:00",
                "Th 08:00-18:00", "Fr 08:00-18:00", "Sa 09:00-17:00"
              ],
              
              "priceRange": "€€",
              "currenciesAccepted": "EUR",
              
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 44.8031,
                  "longitude": -0.7686
                },
                "geoRadius": "15000"
              },
              
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "RGE - Reconnu Garant de l'Environnement"
                },
                {
                  "@type": "EducationalOccupationalCredential", 
                  "name": "QualiPAC"
                }
              ],
              
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "47",
                "bestRating": "5"
              },
              
              "makesOffer": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Installation Pompe à Chaleur",
                    "description": "Installation de pompes à chaleur air/eau et air/air à Saint-Jean-D-Illac"
                  },
                  "price": "8000",
                  "priceCurrency": "EUR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Dépannage Chauffage Urgence",
                    "description": "Service de dépannage chauffage 24h/7j à Saint-Jean-D-Illac"
                  },
                  "price": "120",
                  "priceCurrency": "EUR"
                }
              ],
              
              "sameAs": [
                "https://www.facebook.com/climgo.fr",
                "https://www.instagram.com/climgo.fr"
              ]
            })
          }}
        />
        
        {/* Schema FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Quel est le prix d'une pompe à chaleur à Saint-Jean-D-Illac ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Le prix d'une pompe à chaleur à Saint-Jean-D-Illac varie entre 8 000€ et 15 000€. ClimGO vous propose un devis gratuit et vous accompagne pour les aides financières."
                  }
                },
                {
                  "@type": "Question",
                  "name": "ClimGO intervient-il en urgence à Saint-Jean-D-Illac ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, ClimGO propose un service d'urgence 24h/7j à Saint-Jean-D-Illac. Contactez-nous au 07 66 46 00 08 pour une intervention rapide."
                  }
                }
              ]
            })
          }}
        />
        
        {/* Schema BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Accueil",
                  "item": "https://climgo.fr"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Zones d'intervention",
                  "item": "https://climgo.fr/zones-interventions"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Saint-Jean-D-Illac",
                  "item": "https://climgo.fr/saint-jean-d-illac-chauffage-climatisation"
                }
              ]
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}