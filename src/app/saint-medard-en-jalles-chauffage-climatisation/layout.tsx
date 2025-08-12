import { Metadata } from 'next';

// Métadonnées ultra-optimisées Saint-Medard-En-Jalles
export const metadata: Metadata = {
  title: 'Chauffage Climatisation Saint-Medard-En-Jalles | ClimGO Expert Local',
  description: 'Expert chauffage climatisation Saint-Medard-En-Jalles 33160. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié. Devis gratuit sous 24h.',
  
  keywords: [
    // Mots-clés principaux
    'chauffage saint-medard-en-jalles', 'climatisation saint-medard-en-jalles', 'pompe à chaleur saint-medard-en-jalles',
    'chauffagiste saint-medard-en-jalles 33160', 'plombier chauffagiste saint-medard-en-jalles',
    
    // Localisation précise  
    'chauffage saint-medard-en-jalles', 'climatisation saint-medard-en-jalles',
    
    // Services spécifiques
    'installation pompe à chaleur saint-medard-en-jalles', 'dépannage chauffage saint-medard-en-jalles',
    'entretien climatisation saint-medard-en-jalles', 'réparation PAC saint-medard-en-jalles',
    
    // Urgences
    'chauffagiste urgence saint-medard-en-jalles', 'dépannage 24h saint-medard-en-jalles',
    
    // Certifications
    'artisan RGE saint-medard-en-jalles', 'qualipac saint-medard-en-jalles'
  ].join(', '),
  
  // Open Graph optimisé
  openGraph: {
    title: 'Chauffage Climatisation Saint-Medard-En-Jalles | ClimGO Expert Local',
    description: 'ClimGO, expert chauffage climatisation Saint-Medard-En-Jalles. Installation, dépannage, entretien PAC. Artisan RGE certifié. Devis gratuit.',
    url: 'https://climgo.fr/saint-medard-en-jalles-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://climgo.fr/images/og-saint-medard-en-jalles-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation Saint-Medard-En-Jalles - ClimGO',
    }],
  },
  
  // Géolocalisation précise
  other: {
    'geo.region': 'FR-33',
    'geo.placename': 'Saint-Medard-En-Jalles',
    'geo.position': '44.8975;-0.7208',
    'ICBM': '44.8975, -0.7208',
    'business.contact_data.locality': 'Saint-Medard-En-Jalles',
    'business.contact_data.postal_code': '33160',
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

export default function SaintMedardEnJallesLayout({
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
              "name": "ClimGO Saint-Medard-En-Jalles",
              "description": "Expert chauffage et climatisation à Saint-Medard-En-Jalles. Installation, dépannage et entretien de systèmes de chauffage et pompes à chaleur.",
              "url": "https://climgo.fr/saint-medard-en-jalles-chauffage-climatisation",
              "telephone": "+33-7-66-46-00-08",
              "email": "contact@climgo.fr",
              
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Saint-Medard-En-Jalles",
                "postalCode": "33160",
                "addressRegion": "Nouvelle-Aquitaine",
                "addressCountry": "FR"
              },
              
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 44.8975,
                "longitude": -0.7208
              },
              
              "openingHours": [
                "Mo 08:00-18:00", "Tu 08:00-18:00", "We 08:00-18:00",
                "Th 08:00-18:00", "Fr 08:00-18:00", "Sa 09:00-17:00"
              ],
              
              "priceRange": "€€",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "53",
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
                  "name": "Quel est le prix d'une pompe à chaleur à Saint-Medard-En-Jalles ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Le prix d'une pompe à chaleur à Saint-Medard-En-Jalles varie entre 8 000€ et 15 000€. ClimGO vous propose un devis gratuit et vous accompagne pour les aides financières."
                  }
                },
                {
                  "@type": "Question",
                  "name": "ClimGO intervient-il en urgence à Saint-Medard-En-Jalles ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, ClimGO propose un service d'urgence 24h/7j à Saint-Medard-En-Jalles. Contactez-nous au 07 66 46 00 08 pour une intervention rapide."
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