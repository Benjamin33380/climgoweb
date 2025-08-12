import { Metadata } from 'next';

// Métadonnées ultra-optimisées Martignas-Sur-Jalle
export const metadata: Metadata = {
  title: 'Chauffage Climatisation Martignas-Sur-Jalle | ClimGO Expert Local',
  description: 'Expert chauffage climatisation Martignas-Sur-Jalle 33127. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié. Devis gratuit sous 24h.',
  
  keywords: [
    // Mots-clés principaux
    'chauffage martignas-sur-jalle', 'climatisation martignas-sur-jalle', 'pompe à chaleur martignas-sur-jalle',
    'chauffagiste martignas-sur-jalle 33127', 'plombier chauffagiste martignas-sur-jalle',
    
    // Localisation précise  
    'chauffage martignas-sur-jalle', 'climatisation martignas-sur-jalle',
    
    // Services spécifiques
    'installation pompe à chaleur martignas-sur-jalle', 'dépannage chauffage martignas-sur-jalle',
    'entretien climatisation martignas-sur-jalle', 'réparation PAC martignas-sur-jalle',
    
    // Urgences
    'chauffagiste urgence martignas-sur-jalle', 'dépannage 24h martignas-sur-jalle',
    
    // Certifications
    'artisan RGE martignas-sur-jalle', 'qualipac martignas-sur-jalle'
  ].join(', '),
  
  // Open Graph optimisé
  openGraph: {
    title: 'Chauffage Climatisation Martignas-Sur-Jalle | ClimGO Expert Local',
    description: 'ClimGO, expert chauffage climatisation Martignas-Sur-Jalle. Installation, dépannage, entretien PAC. Artisan RGE certifié. Devis gratuit.',
    url: 'https://climgo.fr/martignas-sur-jalle-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://climgo.fr/images/og-martignas-sur-jalle-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation Martignas-Sur-Jalle - ClimGO',
    }],
  },
  
  // Géolocalisation précise
  other: {
    'geo.region': 'FR-33',
    'geo.placename': 'Martignas-Sur-Jalle',
    'geo.position': '44.8431;-0.7831',
    'ICBM': '44.8431, -0.7831',
    'business.contact_data.locality': 'Martignas-Sur-Jalle',
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

export default function MartignasSurJalleLayout({
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
              "name": "ClimGO Martignas-Sur-Jalle",
              "description": "Expert chauffage et climatisation à Martignas-Sur-Jalle. Installation, dépannage et entretien de systèmes de chauffage et pompes à chaleur.",
              "url": "https://climgo.fr/martignas-sur-jalle-chauffage-climatisation",
              "telephone": "+33-7-66-46-00-08",
              "email": "contact@climgo.fr",
              
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Martignas-Sur-Jalle",
                "postalCode": "33127",
                "addressRegion": "Nouvelle-Aquitaine",
                "addressCountry": "FR"
              },
              
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 44.8431,
                "longitude": -0.7831
              },
              
              "openingHours": [
                "Mo 08:00-18:00", "Tu 08:00-18:00", "We 08:00-18:00",
                "Th 08:00-18:00", "Fr 08:00-18:00", "Sa 09:00-17:00"
              ],
              
              "priceRange": "€€",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "75",
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
                  "name": "Quel est le prix d'une pompe à chaleur à Martignas-Sur-Jalle ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Le prix d'une pompe à chaleur à Martignas-Sur-Jalle varie entre 8 000€ et 15 000€. ClimGO vous propose un devis gratuit et vous accompagne pour les aides financières."
                  }
                },
                {
                  "@type": "Question",
                  "name": "ClimGO intervient-il en urgence à Martignas-Sur-Jalle ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, ClimGO propose un service d'urgence 24h/7j à Martignas-Sur-Jalle. Contactez-nous au 07 66 46 00 08 pour une intervention rapide."
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