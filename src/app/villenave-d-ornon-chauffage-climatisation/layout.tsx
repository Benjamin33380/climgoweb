import { Metadata } from 'next';

// Métadonnées ultra-optimisées Villenave-D-Ornon
export const metadata: Metadata = {
  title: 'Chauffage Climatisation Villenave-D-Ornon | ClimGO Expert Local',
  description: 'Expert chauffage climatisation Villenave-D-Ornon 33140. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié. Devis gratuit sous 24h.',
  
  keywords: [
    // Mots-clés principaux
    'chauffage villenave-d-ornon', 'climatisation villenave-d-ornon', 'pompe à chaleur villenave-d-ornon',
    'chauffagiste villenave-d-ornon 33140', 'plombier chauffagiste villenave-d-ornon',
    
    // Localisation précise  
    'chauffage villenave-d-ornon', 'climatisation villenave-d-ornon',
    
    // Services spécifiques
    'installation pompe à chaleur villenave-d-ornon', 'dépannage chauffage villenave-d-ornon',
    'entretien climatisation villenave-d-ornon', 'réparation PAC villenave-d-ornon',
    
    // Urgences
    'chauffagiste urgence villenave-d-ornon', 'dépannage 24h villenave-d-ornon',
    
    // Certifications
    'artisan RGE villenave-d-ornon', 'qualipac villenave-d-ornon'
  ].join(', '),
  
  // Open Graph optimisé
  openGraph: {
    title: 'Chauffage Climatisation Villenave-D-Ornon | ClimGO Expert Local',
    description: 'ClimGO, expert chauffage climatisation Villenave-D-Ornon. Installation, dépannage, entretien PAC. Artisan RGE certifié. Devis gratuit.',
    url: 'https://climgo.fr/villenave-d-ornon-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://climgo.fr/images/og-villenave-d-ornon-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation Villenave-D-Ornon - ClimGO',
    }],
  },
  
  // Géolocalisation précise
  other: {
    'geo.region': 'FR-33',
    'geo.placename': 'Villenave-D-Ornon',
    'geo.position': '44.7776;-0.5799',
    'ICBM': '44.7776, -0.5799',
    'business.contact_data.locality': 'Villenave-D-Ornon',
    'business.contact_data.postal_code': '33140',
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

export default function VillenaveDOrnonLayout({
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
              "name": "ClimGO Villenave-D-Ornon",
              "description": "Expert chauffage et climatisation à Villenave-D-Ornon. Installation, dépannage et entretien de systèmes de chauffage et pompes à chaleur.",
              "url": "https://climgo.fr/villenave-d-ornon-chauffage-climatisation",
              "telephone": "+33-7-66-46-00-08",
              "email": "contact@climgo.fr",
              
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Villenave-D-Ornon",
                "postalCode": "33140",
                "addressRegion": "Nouvelle-Aquitaine",
                "addressCountry": "FR"
              },
              
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 44.7776,
                "longitude": -0.5799
              },
              
              "openingHours": [
                "Mo 08:00-18:00", "Tu 08:00-18:00", "We 08:00-18:00",
                "Th 08:00-18:00", "Fr 08:00-18:00", "Sa 09:00-17:00"
              ],
              
              "priceRange": "€€",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "82",
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
                  "name": "Quel est le prix d'une pompe à chaleur à Villenave-D-Ornon ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Le prix d'une pompe à chaleur à Villenave-D-Ornon varie entre 8 000€ et 15 000€. ClimGO vous propose un devis gratuit et vous accompagne pour les aides financières."
                  }
                },
                {
                  "@type": "Question",
                  "name": "ClimGO intervient-il en urgence à Villenave-D-Ornon ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, ClimGO propose un service d'urgence 24h/7j à Villenave-D-Ornon. Contactez-nous au 07 66 46 00 08 pour une intervention rapide."
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