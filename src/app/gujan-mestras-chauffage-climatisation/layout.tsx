import { Metadata } from 'next';

// Métadonnées ultra-optimisées Gujan-Mestras
export const metadata: Metadata = {
  title: 'Chauffage Climatisation Gujan-Mestras | ClimGO Expert Local',
  description: 'Expert chauffage climatisation Gujan-Mestras 33470. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié. Devis gratuit sous 24h.',
  
  keywords: [
    // Mots-clés principaux
    'chauffage gujan-mestras', 'climatisation gujan-mestras', 'pompe à chaleur gujan-mestras',
    'chauffagiste gujan-mestras 33470', 'plombier chauffagiste gujan-mestras',
    
    // Localisation précise  
    'chauffage gujan-mestras', 'climatisation gujan-mestras',
    
    // Services spécifiques
    'installation pompe à chaleur gujan-mestras', 'dépannage chauffage gujan-mestras',
    'entretien climatisation gujan-mestras', 'réparation PAC gujan-mestras',
    
    // Urgences
    'chauffagiste urgence gujan-mestras', 'dépannage 24h gujan-mestras',
    
    // Certifications
    'artisan RGE gujan-mestras', 'qualipac gujan-mestras'
  ].join(', '),
  
  // Open Graph optimisé
  openGraph: {
    title: 'Chauffage Climatisation Gujan-Mestras | ClimGO Expert Local',
    description: 'ClimGO, expert chauffage climatisation Gujan-Mestras. Installation, dépannage, entretien PAC. Artisan RGE certifié. Devis gratuit.',
    url: 'https://climgo.fr/gujan-mestras-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://climgo.fr/images/og-gujan-mestras-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation Gujan-Mestras - ClimGO',
    }],
  },
  
  // Géolocalisation précise
  other: {
    'geo.region': 'FR-33',
    'geo.placename': 'Gujan-Mestras',
    'geo.position': '44.6307;-1.0689',
    'ICBM': '44.6307, -1.0689',
    'business.contact_data.locality': 'Gujan-Mestras',
    'business.contact_data.postal_code': '33470',
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

export default function GujanMestrasLayout({
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
              "name": "ClimGO Gujan-Mestras",
              "description": "Expert chauffage et climatisation à Gujan-Mestras. Installation, dépannage et entretien de systèmes de chauffage et pompes à chaleur.",
              "url": "https://climgo.fr/gujan-mestras-chauffage-climatisation",
              "telephone": "+33-7-66-46-00-08",
              "email": "contact@climgo.fr",
              
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Gujan-Mestras",
                "postalCode": "33470",
                "addressRegion": "Nouvelle-Aquitaine",
                "addressCountry": "FR"
              },
              
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 44.6307,
                "longitude": -1.0689
              },
              
              "openingHours": [
                "Mo 08:00-18:00", "Tu 08:00-18:00", "We 08:00-18:00",
                "Th 08:00-18:00", "Fr 08:00-18:00", "Sa 09:00-17:00"
              ],
              
              "priceRange": "€€",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "68",
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
                  "name": "Quel est le prix d'une pompe à chaleur à Gujan-Mestras ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Le prix d'une pompe à chaleur à Gujan-Mestras varie entre 8 000€ et 15 000€. ClimGO vous propose un devis gratuit et vous accompagne pour les aides financières."
                  }
                },
                {
                  "@type": "Question",
                  "name": "ClimGO intervient-il en urgence à Gujan-Mestras ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, ClimGO propose un service d'urgence 24h/7j à Gujan-Mestras. Contactez-nous au 07 66 46 00 08 pour une intervention rapide."
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