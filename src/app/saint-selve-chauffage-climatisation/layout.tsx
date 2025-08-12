import { Metadata } from 'next';

// Métadonnées ultra-optimisées Saint-Selve
export const metadata: Metadata = {
  title: 'Chauffage Climatisation Saint-Selve | ClimGO Expert Local',
  description: 'Expert chauffage climatisation Saint-Selve 33650. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié. Devis gratuit sous 24h.',
  
  keywords: [
    // Mots-clés principaux
    'chauffage saint-selve', 'climatisation saint-selve', 'pompe à chaleur saint-selve',
    'chauffagiste saint-selve 33650', 'plombier chauffagiste saint-selve',
    
    // Localisation précise  
    'chauffage saint-selve', 'climatisation saint-selve',
    
    // Services spécifiques
    'installation pompe à chaleur saint-selve', 'dépannage chauffage saint-selve',
    'entretien climatisation saint-selve', 'réparation PAC saint-selve',
    
    // Urgences
    'chauffagiste urgence saint-selve', 'dépannage 24h saint-selve',
    
    // Certifications
    'artisan RGE saint-selve', 'qualipac saint-selve'
  ].join(', '),
  
  // Open Graph optimisé
  openGraph: {
    title: 'Chauffage Climatisation Saint-Selve | ClimGO Expert Local',
    description: 'ClimGO, expert chauffage climatisation Saint-Selve. Installation, dépannage, entretien PAC. Artisan RGE certifié. Devis gratuit.',
    url: 'https://climgo.fr/saint-selve-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://climgo.fr/images/og-saint-selve-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation Saint-Selve - ClimGO',
    }],
  },
  
  // Géolocalisation précise
  other: {
    'geo.region': 'FR-33',
    'geo.placename': 'Saint-Selve',
    'geo.position': '44.6939;-0.4697',
    'ICBM': '44.6939, -0.4697',
    'business.contact_data.locality': 'Saint-Selve',
    'business.contact_data.postal_code': '33650',
    'business.contact_data.phone_number': '+33766460008',
    'rating': '4.8',
    'priceRange': '€€',
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
  }
};

export default function SaintSelveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr-FR">
      <head>
        {/* JSON-LD Schema LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "ClimGO Saint-Selve",
              "description": "Expert chauffage et climatisation à Saint-Selve. Installation, dépannage et entretien de systèmes de chauffage et pompes à chaleur.",
              "url": "https://climgo.fr/saint-selve-chauffage-climatisation",
              "telephone": "+33-7-66-46-00-08",
              "email": "contact@climgo.fr",
              
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Saint-Selve",
                "postalCode": "33650",
                "addressRegion": "Nouvelle-Aquitaine",
                "addressCountry": "FR"
              },
              
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 44.6939,
                "longitude": -0.4697
              },
              
              "openingHours": [
                "Mo 08:00-18:00", "Tu 08:00-18:00", "We 08:00-18:00",
                "Th 08:00-18:00", "Fr 08:00-18:00", "Sa 09:00-17:00"
              ],
              
              "priceRange": "€€",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "68",
                "bestRating": "5"
              },
              
              "hasCredential": [
                { "@type": "EducationalOccupationalCredential", "name": "RGE" },
                { "@type": "EducationalOccupationalCredential", "name": "QualiPAC" }
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
                  "name": "Quel est le prix d'une pompe à chaleur à Saint-Selve ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Le prix d'une pompe à chaleur à Saint-Selve varie entre 8 000€ et 15 000€. ClimGO vous propose un devis gratuit et vous accompagne pour les aides financières."
                  }
                },
                {
                  "@type": "Question",
                  "name": "ClimGO intervient-il en urgence à Saint-Selve ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, ClimGO propose un service d'urgence 24h/7j à Saint-Selve. Contactez-nous au 07 66 46 00 08 pour une intervention rapide."
                  }
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