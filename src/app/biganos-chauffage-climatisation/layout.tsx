import { Metadata } from 'next';

// Métadonnées ultra-optimisées Biganos COMPLETE
export const metadata: Metadata = {
  title: 'Chauffage Climatisation Biganos 33380 | ClimGO Expert Local',
  description: 'Expert chauffage climatisation Biganos 33380. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié. Devis gratuit sous 24h.',
  
  keywords: [
    // Mots-clés principaux
    'chauffage biganos', 'climatisation biganos', 'pompe à chaleur biganos',
    'chauffagiste biganos 33380', 'plombier chauffagiste biganos',
    
    // Services spécifiques
    'installation pompe à chaleur biganos', 'dépannage chauffage biganos',
    'entretien climatisation biganos', 'réparation PAC biganos',
    
    // Urgences
    'chauffagiste urgence biganos', 'dépannage 24h biganos',
    
    // Certifications
    'artisan RGE biganos', 'qualipac biganos'
  ].join(', '),
  
  // Open Graph optimisé COMPLET
  openGraph: {
    title: 'Chauffage Climatisation Biganos 33380 | ClimGO Expert Local',
    description: 'ClimGO, expert chauffage climatisation Biganos. Installation, dépannage, entretien PAC. Artisan RGE certifié. Devis gratuit.',
    url: 'https://www.climgo.fr/biganos-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og-biganos-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation Biganos - ClimGO',
    }],
  },
  
  // Twitter Cards COMPLET
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Chauffage Climatisation Biganos 33380 | ClimGO Expert Local',
    description: 'Expert chauffage climatisation Biganos. Installation PAC, dépannage urgent. Artisan RGE certifié.',
    images: ['https://www.climgo.fr/images/twitter-biganos-chauffage-climatisation.jpg'],
  },
  
  // Métadonnées avancées COMPLÈTES
  other: {
    // Géolocalisation précise
    'geo.region': 'FR-33',
    'geo.placename': 'Biganos',
    'geo.position': '44.6428;-0.9663',
    'ICBM': '44.6428, -0.9663',
    'geo.country': 'France',
    'geo.state': 'Nouvelle-Aquitaine',
    
    // Dublin Core COMPLET
    'DC.title': 'Chauffage Climatisation Biganos 33380 | ClimGO Expert Local',
    'DC.description': 'Expert chauffage climatisation Biganos 33380. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié.',
    'DC.creator': 'ClimGO',
    'DC.publisher': 'ClimGO',
    'DC.language': 'fr-FR',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://www.climgo.fr/biganos-chauffage-climatisation',
    'DC.source': 'https://www.climgo.fr',
    'DC.coverage': 'Biganos, Gironde, France',
    'DC.rights': '© 2025 ClimGO. Tous droits réservés.',
    
    // Données business locales COMPLÈTES
    'business.contact_data.locality': 'Biganos',
    'business.contact_data.postal_code': '33380',
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
    canonical: 'https://www.climgo.fr/biganos-chauffage-climatisation',
  },
  
  verification: {
    google: 'VERIFICATION_CODE_TO_ADD',
    other: {
      bing: 'VERIFICATION_CODE_TO_ADD'
    }
  }
};

export default function BiganosLayout({
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
              "name": "ClimGO Biganos",
              "description": "Expert chauffage et climatisation à Biganos. Installation, dépannage et entretien de systèmes de chauffage et pompes à chaleur.",
              "url": "https://www.climgo.fr/biganos-chauffage-climatisation",
              "telephone": "+33-7-66-46-00-08",
              "email": "contact@climgo.fr",
              "logo": "https://www.climgo.fr/logo-climgo.png",
              
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Biganos",
                "postalCode": "33380",
                "addressRegion": "Nouvelle-Aquitaine",
                "addressCountry": "FR"
              },
              
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 44.6428,
                "longitude": -0.9663
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
                  "latitude": 44.6428,
                  "longitude": -0.9663
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
                    "description": "Installation de pompes à chaleur air/eau et air/air à Biganos"
                  },
                  "price": "8000",
                  "priceCurrency": "EUR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Dépannage Chauffage Urgence",
                    "description": "Service de dépannage chauffage 24h/7j à Biganos"
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
                  "name": "Quel est le prix d'une pompe à chaleur à Biganos ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Le prix d'une pompe à chaleur à Biganos varie entre 8 000€ et 15 000€. ClimGO vous propose un devis gratuit et vous accompagne pour les aides financières."
                  }
                },
                {
                  "@type": "Question",
                  "name": "ClimGO intervient-il en urgence à Biganos ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, ClimGO propose un service d'urgence 24h/7j à Biganos. Contactez-nous au 07 66 46 00 08 pour une intervention rapide."
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
                  "name": "Biganos",
                  "item": "https://www.climgo.fr/biganos-chauffage-climatisation"
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