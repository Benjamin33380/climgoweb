import { Metadata } from 'next';

// Métadonnées ultra-optimisées Andernos-Les-Bains
export const metadata: Metadata = {
  title: 'Chauffage Climatisation Andernos-Les-Bains | ClimGO Expert Local',
  description: 'Expert chauffage climatisation Andernos-Les-Bains 33510. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié. Devis gratuit sous 24h.',
  
  keywords: [
    // Mots-clés principaux
    'chauffage andernos-les-bains', 'climatisation andernos-les-bains', 'pompe à chaleur andernos-les-bains',
    'chauffagiste andernos-les-bains 33510', 'plombier chauffagiste andernos-les-bains',
    
    // Localisation précise  
    'chauffage andernos-les-bains', 'climatisation andernos-les-bains',
    
    // Services spécifiques
    'installation pompe à chaleur andernos-les-bains', 'dépannage chauffage andernos-les-bains',
    'entretien climatisation andernos-les-bains', 'réparation PAC andernos-les-bains',
    
    // Urgences
    'chauffagiste urgence andernos-les-bains', 'dépannage 24h andernos-les-bains',
    
    // Certifications
    'artisan RGE andernos-les-bains', 'qualipac andernos-les-bains'
  ].join(', '),
  
  // Open Graph optimisé
  openGraph: {
    title: 'Chauffage Climatisation Andernos-Les-Bains | ClimGO Expert Local',
    description: 'ClimGO, expert chauffage climatisation Andernos-Les-Bains. Installation, dépannage, entretien PAC. Artisan RGE certifié. Devis gratuit.',
    url: 'https://climgo.fr/andernos-les-bains-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://climgo.fr/images/og-andernos-les-bains-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation Andernos-Les-Bains - ClimGO',
    }],
  },
  
  // Géolocalisation précise
  other: {
    'geo.region': 'FR-33',
    'geo.placename': 'Andernos-Les-Bains',
    'geo.position': '44.7431;-1.1017',
    'ICBM': '44.7431, -1.1017',
    'business.contact_data.locality': 'Andernos-Les-Bains',
    'business.contact_data.postal_code': '33510',
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

export default function AndernosLesBainsLayout({
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
              "name": "ClimGO Andernos-Les-Bains",
              "description": "Expert chauffage et climatisation à Andernos-Les-Bains. Installation, dépannage et entretien de systèmes de chauffage et pompes à chaleur.",
              "url": "https://climgo.fr/andernos-les-bains-chauffage-climatisation",
              "telephone": "+33-7-66-46-00-08",
              "email": "contact@climgo.fr",
              
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Andernos-Les-Bains",
                "postalCode": "33510",
                "addressRegion": "Nouvelle-Aquitaine",
                "addressCountry": "FR"
              },
              
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 44.7431,
                "longitude": -1.1017
              },
              
              "openingHours": [
                "Mo 08:00-18:00", "Tu 08:00-18:00", "We 08:00-18:00",
                "Th 08:00-18:00", "Fr 08:00-18:00", "Sa 09:00-17:00"
              ],
              
              "priceRange": "€€",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "98",
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
                  "name": "Quel est le prix d'une pompe à chaleur à Andernos-Les-Bains ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Le prix d'une pompe à chaleur à Andernos-Les-Bains varie entre 8 000€ et 15 000€. ClimGO vous propose un devis gratuit et vous accompagne pour les aides financières."
                  }
                },
                {
                  "@type": "Question",
                  "name": "ClimGO intervient-il en urgence à Andernos-Les-Bains ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, ClimGO propose un service d'urgence 24h/7j à Andernos-Les-Bains. Contactez-nous au 07 66 46 00 08 pour une intervention rapide."
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