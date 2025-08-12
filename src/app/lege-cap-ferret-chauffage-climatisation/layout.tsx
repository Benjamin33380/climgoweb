import { Metadata } from 'next';

// Métadonnées ultra-optimisées Lege-Cap-Ferret
export const metadata: Metadata = {
  title: 'Chauffage Climatisation Lege-Cap-Ferret | ClimGO Expert Local',
  description: 'Expert chauffage climatisation Lege-Cap-Ferret 33950. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié. Devis gratuit sous 24h.',
  
  keywords: [
    // Mots-clés principaux
    'chauffage lege-cap-ferret', 'climatisation lege-cap-ferret', 'pompe à chaleur lege-cap-ferret',
    'chauffagiste lege-cap-ferret 33950', 'plombier chauffagiste lege-cap-ferret',
    
    // Localisation précise  
    'chauffage lege-cap-ferret', 'climatisation lege-cap-ferret',
    
    // Services spécifiques
    'installation pompe à chaleur lege-cap-ferret', 'dépannage chauffage lege-cap-ferret',
    'entretien climatisation lege-cap-ferret', 'réparation PAC lege-cap-ferret',
    
    // Urgences
    'chauffagiste urgence lege-cap-ferret', 'dépannage 24h lege-cap-ferret',
    
    // Certifications
    'artisan RGE lege-cap-ferret', 'qualipac lege-cap-ferret'
  ].join(', '),
  
  // Open Graph optimisé
  openGraph: {
    title: 'Chauffage Climatisation Lege-Cap-Ferret | ClimGO Expert Local',
    description: 'ClimGO, expert chauffage climatisation Lege-Cap-Ferret. Installation, dépannage, entretien PAC. Artisan RGE certifié. Devis gratuit.',
    url: 'https://climgo.fr/lege-cap-ferret-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://climgo.fr/images/og-lege-cap-ferret-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation Lege-Cap-Ferret - ClimGO',
    }],
  },
  
  // Géolocalisation précise
  other: {
    'geo.region': 'FR-33',
    'geo.placename': 'Lege-Cap-Ferret',
    'geo.position': '44.7931;-1.2431',
    'ICBM': '44.7931, -1.2431',
    'business.contact_data.locality': 'Lege-Cap-Ferret',
    'business.contact_data.postal_code': '33950',
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

export default function LegeCapFerretLayout({
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
              "name": "ClimGO Lege-Cap-Ferret",
              "description": "Expert chauffage et climatisation à Lege-Cap-Ferret. Installation, dépannage et entretien de systèmes de chauffage et pompes à chaleur.",
              "url": "https://climgo.fr/lege-cap-ferret-chauffage-climatisation",
              "telephone": "+33-7-66-46-00-08",
              "email": "contact@climgo.fr",
              
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lege-Cap-Ferret",
                "postalCode": "33950",
                "addressRegion": "Nouvelle-Aquitaine",
                "addressCountry": "FR"
              },
              
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 44.7931,
                "longitude": -1.2431
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
                  "name": "Quel est le prix d'une pompe à chaleur à Lege-Cap-Ferret ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Le prix d'une pompe à chaleur à Lege-Cap-Ferret varie entre 8 000€ et 15 000€. ClimGO vous propose un devis gratuit et vous accompagne pour les aides financières."
                  }
                },
                {
                  "@type": "Question",
                  "name": "ClimGO intervient-il en urgence à Lege-Cap-Ferret ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, ClimGO propose un service d'urgence 24h/7j à Lege-Cap-Ferret. Contactez-nous au 07 66 46 00 08 pour une intervention rapide."
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