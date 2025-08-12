import { Metadata } from 'next';

// Métadonnées ultra-optimisées Lanton
export const metadata: Metadata = {
  title: 'Chauffage Climatisation Lanton | ClimGO Expert Local',
  description: 'Expert chauffage climatisation Lanton 33138. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié. Devis gratuit sous 24h.',
  
  keywords: [
    // Mots-clés principaux
    'chauffage lanton', 'climatisation lanton', 'pompe à chaleur lanton',
    'chauffagiste lanton 33138', 'plombier chauffagiste lanton',
    
    // Localisation précise  
    'chauffage lanton', 'climatisation lanton',
    
    // Services spécifiques
    'installation pompe à chaleur lanton', 'dépannage chauffage lanton',
    'entretien climatisation lanton', 'réparation PAC lanton',
    
    // Urgences
    'chauffagiste urgence lanton', 'dépannage 24h lanton',
    
    // Certifications
    'artisan RGE lanton', 'qualipac lanton'
  ].join(', '),
  
  // Open Graph optimisé
  openGraph: {
    title: 'Chauffage Climatisation Lanton | ClimGO Expert Local',
    description: 'ClimGO, expert chauffage climatisation Lanton. Installation, dépannage, entretien PAC. Artisan RGE certifié. Devis gratuit.',
    url: 'https://climgo.fr/lanton-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://climgo.fr/images/og-lanton-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation Lanton - ClimGO',
    }],
  },
  
  // Géolocalisation précise
  other: {
    'geo.region': 'FR-33',
    'geo.placename': 'Lanton',
    'geo.position': '44.7058;-1.0336',
    'ICBM': '44.7058, -1.0336',
    'business.contact_data.locality': 'Lanton',
    'business.contact_data.postal_code': '33138',
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

export default function LantonLayout({
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
              "name": "ClimGO Lanton",
              "description": "Expert chauffage et climatisation à Lanton. Installation, dépannage et entretien de systèmes de chauffage et pompes à chaleur.",
              "url": "https://climgo.fr/lanton-chauffage-climatisation",
              "telephone": "+33-7-66-46-00-08",
              "email": "contact@climgo.fr",
              
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lanton",
                "postalCode": "33138",
                "addressRegion": "Nouvelle-Aquitaine",
                "addressCountry": "FR"
              },
              
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 44.7058,
                "longitude": -1.0336
              },
              
              "openingHours": [
                "Mo 08:00-18:00", "Tu 08:00-18:00", "We 08:00-18:00",
                "Th 08:00-18:00", "Fr 08:00-18:00", "Sa 09:00-17:00"
              ],
              
              "priceRange": "€€",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "83",
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
                  "name": "Quel est le prix d'une pompe à chaleur à Lanton ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Le prix d'une pompe à chaleur à Lanton varie entre 8 000€ et 15 000€. ClimGO vous propose un devis gratuit et vous accompagne pour les aides financières."
                  }
                },
                {
                  "@type": "Question",
                  "name": "ClimGO intervient-il en urgence à Lanton ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, ClimGO propose un service d'urgence 24h/7j à Lanton. Contactez-nous au 07 66 46 00 08 pour une intervention rapide."
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