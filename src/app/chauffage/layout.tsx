import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chauffage Gironde | Installation Chaudière PAC | ClimGO Expert RGE',
  description: 'Expert chauffage Gironde. Installation chaudière gaz, fioul, granulés, pompe à chaleur. Artisan RGE certifié. Devis gratuit, intervention 24h.',
  keywords: 'chauffage gironde, installation chaudière, pompe à chaleur air eau, chauffagiste RGE, chaudière gaz condensation, PAC haute température',
  
  openGraph: {
    title: 'Chauffage Gironde | Installation Chaudière PAC | ClimGO Expert RGE',
    description: 'Expert chauffage Gironde. Installation chaudière gaz, fioul, granulés, pompe à chaleur. Artisan RGE certifié. Devis gratuit, intervention 24h.',
    url: 'https://www.climgo.fr/chauffage',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og-chauffage.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage ClimGO',
    }],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Chauffage Gironde | Installation Chaudière PAC | ClimGO Expert RGE',
    description: 'Expert chauffage Gironde. Installation chaudière gaz, fioul, granulés, pompe à chaleur. Artisan RGE certifié. Devis gratuit, intervention 24h.',
  },
  
  other: {
    'DC.title': 'Chauffage Gironde | Installation Chaudière PAC | ClimGO Expert RGE',
    'DC.description': 'Expert chauffage Gironde. Installation chaudière gaz, fioul, granulés, pompe à chaleur. Artisan RGE certifié. Devis gratuit, intervention 24h.',
    'DC.type': 'Service',
    'category': 'Chauffage',
    'priceRange': '3000-15000€',
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

export default function ChauffageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr-FR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="canonical" href="https://www.climgo.fr/chauffage" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Chauffage",
              "description": "Expert chauffage Gironde. Installation chaudière gaz, fioul, granulés, pompe à chaleur. Artisan RGE certifié. Devis gratuit, intervention 24h.",
              "provider": {
                "@type": "Organization",
                "name": "ClimGO",
                "url": "https://www.climgo.fr"
              },
              "serviceType": "Chauffage",
              "areaServed": {
                "@type": "State",
                "name": "Gironde"
              },
              "offers": [{"@type":"Offer","itemOffered":{"@type":"Service","name":"Installation chaudière gaz"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Installation PAC air/eau"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Remplacement chauffage"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Dépannage urgence"}}]
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}