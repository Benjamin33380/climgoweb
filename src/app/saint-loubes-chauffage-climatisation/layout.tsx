import { Metadata } from 'next';

// Métadonnées ultra-optimisées Saint-Loubes
export const metadata: Metadata = {
  title: 'Chauffage Climatisation Saint-Loubes | ClimGO Expert Local',
  description: 'Expert chauffage climatisation Saint-Loubes 33450. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié. Devis gratuit sous 24h.',
  
  keywords: [
    // Mots-clés principaux
    'chauffage saint-loubes', 'climatisation saint-loubes', 'pompe à chaleur saint-loubes',
    'chauffagiste saint-loubes 33450', 'plombier chauffagiste saint-loubes',
    
    // Localisation précise  
    'chauffage saint-loubes', 'climatisation saint-loubes',
    
    // Services spécifiques
    'installation pompe à chaleur saint-loubes', 'dépannage chauffage saint-loubes',
    'entretien climatisation saint-loubes', 'réparation PAC saint-loubes',
    
    // Urgences
    'chauffagiste urgence saint-loubes', 'dépannage 24h saint-loubes',
    
    // Certifications
    'artisan RGE saint-loubes', 'qualipac saint-loubes'
  ].join(', '),
  
  // Open Graph optimisé
  openGraph: {
    title: 'Chauffage Climatisation Saint-Loubes | ClimGO Expert Local',
    description: 'ClimGO, expert chauffage climatisation Saint-Loubes. Installation, dépannage, entretien PAC. Artisan RGE certifié. Devis gratuit.',
    url: 'https://climgo.fr/saint-loubes-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://climgo.fr/images/og-saint-loubes-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation Saint-Loubes - ClimGO',
    }],
  },
  
  // Géolocalisation précise
  other: {
    'geo.region': 'FR-33',
    'geo.placename': 'Saint-Loubes',
    'geo.position': '44.9156;-0.4297',
    'ICBM': '44.9156, -0.4297',
    'business.contact_data.locality': 'Saint-Loubes',
    'business.contact_data.postal_code': '33450',
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

export default function SaintLoubesLayout({
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
              "name": "ClimGO Saint-Loubes",
              "description": "Expert chauffage et climatisation à Saint-Loubes. Installation, dépannage et entretien de systèmes de chauffage et pompes à chaleur.",
              "url": "https://climgo.fr/saint-loubes-chauffage-climatisation",
              "telephone": "+33-7-66-46-00-08",
              "email": "contact@climgo.fr",
              
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Saint-Loubes",
                "postalCode": "33450",
                "addressRegion": "Nouvelle-Aquitaine",
                "addressCountry": "FR"
              },
              
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 44.9156,
                "longitude": -0.4297
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
                  "name": "Quel est le prix d'une pompe à chaleur à Saint-Loubes ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Le prix d'une pompe à chaleur à Saint-Loubes varie entre 8 000€ et 15 000€. ClimGO vous propose un devis gratuit et vous accompagne pour les aides financières."
                  }
                },
                {
                  "@type": "Question",
                  "name": "ClimGO intervient-il en urgence à Saint-Loubes ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, ClimGO propose un service d'urgence 24h/7j à Saint-Loubes. Contactez-nous au 07 66 46 00 08 pour une intervention rapide."
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