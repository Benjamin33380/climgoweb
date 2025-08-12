import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Climatisation Gironde | Installation Climatiseur PAC Air/Air | ClimGO',
  description: 'Expert climatisation Gironde. Installation climatiseur reversible, PAC air/air multi-split. Artisan RGE. Devis gratuit, pose professionnelle.',
  keywords: 'climatisation gironde, installation climatiseur, PAC air air, climatiseur reversible, multi split, monosplit',
  
  openGraph: {
    title: 'Climatisation Gironde | Installation Climatiseur PAC Air/Air | ClimGO',
    description: 'Expert climatisation Gironde. Installation climatiseur reversible, PAC air/air multi-split. Artisan RGE. Devis gratuit, pose professionnelle.',
    url: 'https://www.climgo.fr/climatisation',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Climatisation ClimGO',
    }],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Climatisation Gironde | Installation Climatiseur PAC Air/Air | ClimGO',
    description: 'Expert climatisation Gironde. Installation climatiseur reversible, PAC air/air multi-split. Artisan RGE. Devis gratuit, pose professionnelle.',
  },
  
  other: {
    'DC.title': 'Climatisation Gironde | Installation Climatiseur PAC Air/Air | ClimGO',
    'DC.description': 'Expert climatisation Gironde. Installation climatiseur reversible, PAC air/air multi-split. Artisan RGE. Devis gratuit, pose professionnelle.',
    'DC.type': 'Service',
    'category': 'Climatisation',
    'priceRange': '1500-8000€',
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

export default function ClimatisationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr-FR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="canonical" href="https://www.climgo.fr/climatisation" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Climatisation",
              "description": "Expert climatisation Gironde. Installation climatiseur reversible, PAC air/air multi-split. Artisan RGE. Devis gratuit, pose professionnelle.",
              "provider": {
                "@type": "Organization",
                "name": "ClimGO",
                "url": "https://www.climgo.fr"
              },
              "serviceType": "Climatisation",
              "areaServed": {
                "@type": "State",
                "name": "Gironde"
              },
              "offers": [{"@type":"Offer","itemOffered":{"@type":"Service","name":"Installation climatiseur mono-split"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Installation multi-split"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"PAC air/air reversible"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Entretien climatisation"}}]
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}