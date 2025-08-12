import { Metadata } from 'next';

// Métadonnées ultra-optimisées Saint-Aubin-De-Medoc
export const metadata: Metadata = {
  title: 'Chauffage Climatisation Saint-Aubin-De-Medoc | ClimGO Expert Local',
  description: 'Expert chauffage climatisation Saint-Aubin-De-Medoc 33160. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié. Devis gratuit sous 24h.',
  
  keywords: [
    // Mots-clés principaux
    'chauffage saint-aubin-de-medoc', 'climatisation saint-aubin-de-medoc', 'pompe à chaleur saint-aubin-de-medoc',
    'chauffagiste saint-aubin-de-medoc 33160', 'plombier chauffagiste saint-aubin-de-medoc',
    
    // Localisation précise  
    'chauffage saint-aubin-de-medoc', 'climatisation saint-aubin-de-medoc',
    
    // Services spécifiques
    'installation pompe à chaleur saint-aubin-de-medoc', 'dépannage chauffage saint-aubin-de-medoc',
    'entretien climatisation saint-aubin-de-medoc', 'réparation PAC saint-aubin-de-medoc',
    
    // Urgences
    'chauffagiste urgence saint-aubin-de-medoc', 'dépannage 24h saint-aubin-de-medoc',
    
    // Certifications
    'artisan RGE saint-aubin-de-medoc', 'qualipac saint-aubin-de-medoc'
  ].join(', '),
  
  // Open Graph optimisé
  openGraph: {
    title: 'Chauffage Climatisation Saint-Aubin-De-Medoc | ClimGO Expert Local',
    description: 'ClimGO, expert chauffage climatisation Saint-Aubin-De-Medoc. Installation, dépannage, entretien PAC. Artisan RGE certifié. Devis gratuit.',
    url: 'https://climgo.fr/saint-aubin-de-medoc-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://climgo.fr/images/og-saint-aubin-de-medoc-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation Saint-Aubin-De-Medoc - ClimGO',
    }],
  },
  
  // Géolocalisation précise
  other: {
    'geo.region': 'FR-33',
    'geo.placename': 'Saint-Aubin-De-Medoc',
    'geo.position': '44.8997;-0.7031',
    'ICBM': '44.8997, -0.7031',
    'business.contact_data.locality': 'Saint-Aubin-De-Medoc',
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

export default function SaintAubinDeMedocLayout({
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
              "name": "ClimGO Saint-Aubin-De-Medoc",
              "description": "Expert chauffage et climatisation à Saint-Aubin-De-Medoc. Installation, dépannage et entretien de systèmes de chauffage et pompes à chaleur.",
              "url": "https://climgo.fr/saint-aubin-de-medoc-chauffage-climatisation",
              "telephone": "+33-7-66-46-00-08",
              "email": "contact@climgo.fr",
              
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Saint-Aubin-De-Medoc",
                "postalCode": "33160",
                "addressRegion": "Nouvelle-Aquitaine",
                "addressCountry": "FR"
              },
              
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 44.8997,
                "longitude": -0.7031
              },
              
              "openingHours": [
                "Mo 08:00-18:00", "Tu 08:00-18:00", "We 08:00-18:00",
                "Th 08:00-18:00", "Fr 08:00-18:00", "Sa 09:00-17:00"
              ],
              
              "priceRange": "€€",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "88",
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
                  "name": "Quel est le prix d'une pompe à chaleur à Saint-Aubin-De-Medoc ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Le prix d'une pompe à chaleur à Saint-Aubin-De-Medoc varie entre 8 000€ et 15 000€. ClimGO vous propose un devis gratuit et vous accompagne pour les aides financières."
                  }
                },
                {
                  "@type": "Question",
                  "name": "ClimGO intervient-il en urgence à Saint-Aubin-De-Medoc ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, ClimGO propose un service d'urgence 24h/7j à Saint-Aubin-De-Medoc. Contactez-nous au 07 66 46 00 08 pour une intervention rapide."
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