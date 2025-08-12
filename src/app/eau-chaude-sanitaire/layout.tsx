import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chauffe-eau Ballon Eau Chaude Gironde | ClimGO Installation',
  description: 'Installation chauffe-eau Gironde. Ballon eau chaude, chauffe-eau thermodynamique, solaire. Remplacement urgence. Artisan qualifié.',
  keywords: 'chauffe eau gironde, ballon eau chaude, chauffe eau thermodynamique, chauffe eau solaire, remplacement chauffe eau',
  
  openGraph: {
    title: 'Chauffe-eau Ballon Eau Chaude Gironde | ClimGO Installation',
    description: 'Installation chauffe-eau Gironde. Ballon eau chaude, chauffe-eau thermodynamique, solaire. Remplacement urgence. Artisan qualifié.',
    url: 'https://www.climgo.fr/eau-chaude-sanitaire',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og-eau-chaude-sanitaire.jpg',
      width: 1200,
      height: 630,
      alt: 'Eau chaude sanitaire ClimGO',
    }],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Chauffe-eau Ballon Eau Chaude Gironde | ClimGO Installation',
    description: 'Installation chauffe-eau Gironde. Ballon eau chaude, chauffe-eau thermodynamique, solaire. Remplacement urgence. Artisan qualifié.',
  },
  
  other: {
    'DC.title': 'Chauffe-eau Ballon Eau Chaude Gironde | ClimGO Installation',
    'DC.description': 'Installation chauffe-eau Gironde. Ballon eau chaude, chauffe-eau thermodynamique, solaire. Remplacement urgence. Artisan qualifié.',
    'DC.type': 'Service',
    'category': 'Eau chaude sanitaire',
    'priceRange': '800-4000€',
    'google-site-verification': 'Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g'
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

export default function EauChaudeSanitaireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr-FR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="canonical" href="https://www.climgo.fr/eau-chaude-sanitaire" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Eau chaude sanitaire",
              "description": "Installation chauffe-eau Gironde. Ballon eau chaude, chauffe-eau thermodynamique, solaire. Remplacement urgence. Artisan qualifié.",
              "provider": {
                "@type": "Organization",
                "name": "ClimGO",
                "url": "https://www.climgo.fr"
              },
              "serviceType": "Eau chaude sanitaire",
              "areaServed": {
                "@type": "State",
                "name": "Gironde"
              },
              "offers": [{"@type":"Offer","itemOffered":{"@type":"Service","name":"Installation chauffe-eau électrique"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Chauffe-eau thermodynamique"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Ballon solaire"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Dépannage urgence"}}]
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}