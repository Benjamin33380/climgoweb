import { Metadata } from 'next';

// Métadonnées ultra-optimisées Saint-Jean-D-Illac
export const metadata: Metadata = {
  title: 'Chauffage Climatisation Saint-Jean-D-Illac | ClimGO Expert Local',
  description: 'Expert chauffage climatisation Saint-Jean-D-Illac 33127. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié. Devis gratuit sous 24h.',
  
  keywords: [
    // Mots-clés principaux
    'chauffage saint-jean-d-illac', 'climatisation saint-jean-d-illac', 'pompe à chaleur saint-jean-d-illac',
    'chauffagiste saint-jean-d-illac 33127', 'plombier chauffagiste saint-jean-d-illac',
    
    // Localisation précise  
    'chauffage saint-jean-d-illac', 'climatisation saint-jean-d-illac',
    
    // Services spécifiques
    'installation pompe à chaleur saint-jean-d-illac', 'dépannage chauffage saint-jean-d-illac',
    'entretien climatisation saint-jean-d-illac', 'réparation PAC saint-jean-d-illac',
    
    // Urgences
    'chauffagiste urgence saint-jean-d-illac', 'dépannage 24h saint-jean-d-illac',
    
    // Certifications
    'artisan RGE saint-jean-d-illac', 'qualipac saint-jean-d-illac'
  ].join(', '),
  
  // Open Graph optimisé
  openGraph: {
    title: 'Chauffage Climatisation Saint-Jean-D-Illac | ClimGO Expert Local',
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
  
  // Géolocalisation précise
  other: {
    'geo.region': 'FR-33',
    'geo.placename': 'Saint-Jean-D-Illac',
    'geo.position': '44.8031;-0.7686',
    'ICBM': '44.8031, -0.7686',
    'business.contact_data.locality': 'Saint-Jean-D-Illac',
    'business.contact_data.postal_code': '33127',
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

export default function SaintJeanDIllacLayout({
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
              "name": "ClimGO Saint-Jean-D-Illac",
              "description": "Expert chauffage et climatisation à Saint-Jean-D-Illac. Installation, dépannage et entretien de systèmes de chauffage et pompes à chaleur.",
              "url": "https://climgo.fr/saint-jean-d-illac-chauffage-climatisation",
              "telephone": "+33-7-66-46-00-08",
              "email": "contact@climgo.fr",
              
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
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "94",
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
      </head>
      <body>{children}</body>
    </html>
  );
}