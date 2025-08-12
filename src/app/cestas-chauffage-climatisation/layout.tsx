import { Metadata } from 'next';

// Métadonnées ultra-optimisées Cestas COMPLETE
export const metadata: Metadata = {
  title: 'Chauffage Climatisation Cestas 33610 | ClimGO Expert Local',
  description: 'Expert chauffage climatisation Cestas 33610. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié. Devis gratuit sous 24h.',
  
  keywords: [
    // Mots-clés principaux
    'chauffage cestas', 'climatisation cestas', 'pompe à chaleur cestas',
    'chauffagiste cestas 33610', 'plombier chauffagiste cestas',
    
    // Services spécifiques
    'installation pompe à chaleur cestas', 'dépannage chauffage cestas',
    'entretien climatisation cestas', 'réparation PAC cestas',
    
    // Urgences
    'chauffagiste urgence cestas', 'dépannage 24h cestas',
    
    // Certifications
    'artisan RGE cestas', 'qualipac cestas'
  ].join(', '),
  
  // Open Graph optimisé COMPLET
  openGraph: {
    title: 'Chauffage Climatisation Cestas 33610 | ClimGO Expert Local',
    description: 'ClimGO, expert chauffage climatisation Cestas. Installation, dépannage, entretien PAC. Artisan RGE certifié. Devis gratuit.',
    url: 'https://www.climgo.fr/cestas-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og-cestas-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation Cestas - ClimGO',
    }],
  },
  
  // Twitter Cards COMPLET
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Chauffage Climatisation Cestas 33610 | ClimGO Expert Local',
    description: 'Expert chauffage climatisation Cestas. Installation PAC, dépannage urgent. Artisan RGE certifié.',
    images: ['https://www.climgo.fr/images/twitter-cestas-chauffage-climatisation.jpg'],
  },
  
  // Métadonnées avancées COMPLÈTES
  other: {
    // Géolocalisation précise
    'geo.region': 'FR-33',
    'geo.placename': 'Cestas',
    'geo.position': '44.7439;-0.6769',
    'ICBM': '44.7439, -0.6769',
    'geo.country': 'France',
    'geo.state': 'Nouvelle-Aquitaine',
    
    // Dublin Core COMPLET
    'DC.title': 'Chauffage Climatisation Cestas 33610 | ClimGO Expert Local',
    'DC.description': 'Expert chauffage climatisation Cestas 33610. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié.',
    'DC.creator': 'ClimGO',
    'DC.publisher': 'ClimGO',
    'DC.language': 'fr-FR',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://www.climgo.fr/cestas-chauffage-climatisation',
    'DC.source': 'https://www.climgo.fr',
    'DC.coverage': 'Cestas, Gironde, France',
    'DC.rights': '© 2025 ClimGO. Tous droits réservés.',
    
    // Données business locales COMPLÈTES
    'business.contact_data.locality': 'Cestas',
    'business.contact_data.postal_code': '33610',
    'business.contact_data.phone_number': '+33766460008',
    'business.contact_data.website': 'https://www.climgo.fr',
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
    canonical: 'https://www.climgo.fr/cestas-chauffage-climatisation',
  },
  
  verification: {
    google: 'VERIFICATION_CODE_TO_ADD',
    other: {
      bing: 'VERIFICATION_CODE_TO_ADD'
    }
  }
};

export default function CestasLayout({
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
              "name": "ClimGO Cestas",
              "description": "Expert chauffage et climatisation à Cestas. Installation, dépannage et entretien de systèmes de chauffage et pompes à chaleur.",
              "url": "https://www.climgo.fr/cestas-chauffage-climatisation",
              "telephone": "+33-7-66-46-00-08",
              "email": "contact@climgo.fr",
              "logo": "https://www.climgo.fr/logo-climgo.png",
              
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Cestas",
                "postalCode": "33610",
                "addressRegion": "Nouvelle-Aquitaine",
                "addressCountry": "FR"
              },
              
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 44.7439,
                "longitude": -0.6769
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
                  "latitude": 44.7439,
                  "longitude": -0.6769
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
        "ratingValue": "5.0",
                "reviewCount": "25",
                "bestRating": "5"
              },
              
              "makesOffer": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Installation Pompe à Chaleur",
                    "description": "Installation de pompes à chaleur air/eau et air/air à Cestas"
                  },
                  "price": "8000",
                  "priceCurrency": "EUR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Dépannage Chauffage Urgence",
                    "description": "Service de dépannage chauffage 24h/7j à Cestas"
                  },
                  "price": "120",
                  "priceCurrency": "EUR"
                }
              ],
              
              "sameAs": [
        "https://www.facebook.com/people/Climgo/61578576031066/",
        "https://www.instagram.com/climgo_climatisation_chauffage/",
        "https://www.linkedin.com/company/climgo"
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
                  "name": "Quel est le prix d'une pompe à chaleur à Cestas ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Le prix d'une pompe à chaleur à Cestas varie entre 8 000€ et 15 000€. ClimGO vous propose un devis gratuit et vous accompagne pour les aides financières."
                  }
                },
                {
                  "@type": "Question",
                  "name": "ClimGO intervient-il en urgence à Cestas ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, ClimGO propose un service d'urgence 24h/7j à Cestas. Contactez-nous au 07 66 46 00 08 pour une intervention rapide."
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
                  "item": "https://www.climgo.fr"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Zones d'intervention",
                  "item": "https://www.climgo.fr/zones-interventions"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Cestas",
                  "item": "https://www.climgo.fr/cestas-chauffage-climatisation"
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