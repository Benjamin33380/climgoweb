import { Metadata } from 'next';

// Métadonnées ultra-optimisées La-Teste-De-Buch
export const metadata: Metadata = {
  title: 'Chauffage Climatisation La-Teste-De-Buch | ClimGO Expert Local',
  description: 'Expert chauffage climatisation La-Teste-De-Buch 33260. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié. Devis gratuit sous 24h.',
  
  keywords: [
    // Mots-clés principaux
    'chauffage la-teste-de-buch', 'climatisation la-teste-de-buch', 'pompe à chaleur la-teste-de-buch',
    'chauffagiste la-teste-de-buch 33260', 'plombier chauffagiste la-teste-de-buch',
    
    // Localisation précise  
    'chauffage la-teste-de-buch', 'climatisation la-teste-de-buch',
    
    // Services spécifiques
    'installation pompe à chaleur la-teste-de-buch', 'dépannage chauffage la-teste-de-buch',
    'entretien climatisation la-teste-de-buch', 'réparation PAC la-teste-de-buch',
    
    // Urgences
    'chauffagiste urgence la-teste-de-buch', 'dépannage 24h la-teste-de-buch',
    
    // Certifications
    'artisan RGE la-teste-de-buch', 'qualipac la-teste-de-buch'
  ].join(', '),
  
  // Open Graph optimisé
  openGraph: {
    title: 'Chauffage Climatisation La-Teste-De-Buch | ClimGO Expert Local',
    description: 'ClimGO, expert chauffage climatisation La-Teste-De-Buch. Installation, dépannage, entretien PAC. Artisan RGE certifié. Devis gratuit.',
    url: 'https://climgo.fr/la-teste-de-buch-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://climgo.fr/images/og-la-teste-de-buch-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation La-Teste-De-Buch - ClimGO',
    }],
  },
  
  // Géolocalisation précise
  other: {
    'geo.region': 'FR-33',
    'geo.placename': 'La-Teste-De-Buch',
    'geo.position': '44.6307;-1.1459',
    'ICBM': '44.6307, -1.1459',
    'business.contact_data.locality': 'La-Teste-De-Buch',
    'business.contact_data.postal_code': '33260',
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

export default function LaTesteDeBuchLayout({
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
              "name": "ClimGO La-Teste-De-Buch",
              "description": "Expert chauffage et climatisation à La-Teste-De-Buch. Installation, dépannage et entretien de systèmes de chauffage et pompes à chaleur.",
              "url": "https://climgo.fr/la-teste-de-buch-chauffage-climatisation",
              "telephone": "+33-7-66-46-00-08",
              "email": "contact@climgo.fr",
              
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "La-Teste-De-Buch",
                "postalCode": "33260",
                "addressRegion": "Nouvelle-Aquitaine",
                "addressCountry": "FR"
              },
              
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 44.6307,
                "longitude": -1.1459
              },
              
              "openingHours": [
                "Mo 08:00-18:00", "Tu 08:00-18:00", "We 08:00-18:00",
                "Th 08:00-18:00", "Fr 08:00-18:00", "Sa 09:00-17:00"
              ],
              
              "priceRange": "€€",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "59",
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
                  "name": "Quel est le prix d'une pompe à chaleur à La-Teste-De-Buch ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Le prix d'une pompe à chaleur à La-Teste-De-Buch varie entre 8 000€ et 15 000€. ClimGO vous propose un devis gratuit et vous accompagne pour les aides financières."
                  }
                },
                {
                  "@type": "Question",
                  "name": "ClimGO intervient-il en urgence à La-Teste-De-Buch ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, ClimGO propose un service d'urgence 24h/7j à La-Teste-De-Buch. Contactez-nous au 07 66 46 00 08 pour une intervention rapide."
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