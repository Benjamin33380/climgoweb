import { Metadata } from 'next';

// Métadonnées ultra-optimisées Merignac
export const metadata: Metadata = {
  title: 'Chauffage Climatisation Merignac | ClimGO Expert Local',
  description: 'Expert chauffage climatisation Merignac 33700. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié. Devis gratuit sous 24h.',
  
  keywords: [
    // Mots-clés principaux
    'chauffage merignac', 'climatisation merignac', 'pompe à chaleur merignac',
    'chauffagiste merignac 33700', 'plombier chauffagiste merignac',
    
    // Localisation précise  
    'chauffage merignac', 'climatisation merignac',
    
    // Services spécifiques
    'installation pompe à chaleur merignac', 'dépannage chauffage merignac',
    'entretien climatisation merignac', 'réparation PAC merignac',
    
    // Urgences
    'chauffagiste urgence merignac', 'dépannage 24h merignac',
    
    // Certifications
    'artisan RGE merignac', 'qualipac merignac'
  ].join(', '),
  
  // Open Graph optimisé
  openGraph: {
    title: 'Chauffage Climatisation Merignac | ClimGO Expert Local',
    description: 'ClimGO, expert chauffage climatisation Merignac. Installation, dépannage, entretien PAC. Artisan RGE certifié. Devis gratuit.',
    url: 'https://climgo.fr/merignac-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://climgo.fr/images/og-merignac-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation Merignac - ClimGO',
    }],
  },
  
  // Géolocalisation précise
  other: {
    'geo.region': 'FR-33',
    'geo.placename': 'Merignac',
    'geo.position': '44.8404;-0.6763',
    'ICBM': '44.8404, -0.6763',
    'business.contact_data.locality': 'Merignac',
    'business.contact_data.postal_code': '33700',
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

export default function MerignacLayout({
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
              "name": "ClimGO Merignac",
              "description": "Expert chauffage et climatisation à Merignac. Installation, dépannage et entretien de systèmes de chauffage et pompes à chaleur.",
              "url": "https://climgo.fr/merignac-chauffage-climatisation",
              "telephone": "+33-7-66-46-00-08",
              "email": "contact@climgo.fr",
              
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Merignac",
                "postalCode": "33700",
                "addressRegion": "Nouvelle-Aquitaine",
                "addressCountry": "FR"
              },
              
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 44.8404,
                "longitude": -0.6763
              },
              
              "openingHours": [
                "Mo 08:00-18:00", "Tu 08:00-18:00", "We 08:00-18:00",
                "Th 08:00-18:00", "Fr 08:00-18:00", "Sa 09:00-17:00"
              ],
              
              "priceRange": "€€",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "70",
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
                  "name": "Quel est le prix d'une pompe à chaleur à Merignac ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Le prix d'une pompe à chaleur à Merignac varie entre 8 000€ et 15 000€. ClimGO vous propose un devis gratuit et vous accompagne pour les aides financières."
                  }
                },
                {
                  "@type": "Question",
                  "name": "ClimGO intervient-il en urgence à Merignac ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, ClimGO propose un service d'urgence 24h/7j à Merignac. Contactez-nous au 07 66 46 00 08 pour une intervention rapide."
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