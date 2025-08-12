import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Entretien Chauffage Climatisation Gironde | ClimGO Maintenance',
  description: 'Entretien chauffage climatisation Gironde. Maintenance PAC, chaudière, climatiseur. Contrat entretien annuel. Intervention rapide.',
  keywords: 'entretien chauffage, maintenance PAC, entretien chaudière, contrat maintenance, révision climatisation',
  
  openGraph: {
    title: 'Entretien Chauffage Climatisation Gironde | ClimGO Maintenance',
    description: 'Entretien chauffage climatisation Gironde. Maintenance PAC, chaudière, climatiseur. Contrat entretien annuel. Intervention rapide.',
    url: 'https://www.climgo.fr/maintenance',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og-maintenance.jpg',
      width: 1200,
      height: 630,
      alt: 'Maintenance ClimGO',
    }],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Entretien Chauffage Climatisation Gironde | ClimGO Maintenance',
    description: 'Entretien chauffage climatisation Gironde. Maintenance PAC, chaudière, climatiseur. Contrat entretien annuel. Intervention rapide.',
  },
  
  other: {
    'DC.title': 'Entretien Chauffage Climatisation Gironde | ClimGO Maintenance',
    'DC.description': 'Entretien chauffage climatisation Gironde. Maintenance PAC, chaudière, climatiseur. Contrat entretien annuel. Intervention rapide.',
    'DC.type': 'Service',
    'category': 'Maintenance',
    'priceRange': '120-300€',
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

export default function MaintenanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr-FR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="canonical" href="https://www.climgo.fr/maintenance" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Maintenance",
              "description": "Entretien chauffage climatisation Gironde. Maintenance PAC, chaudière, climatiseur. Contrat entretien annuel. Intervention rapide.",
              "provider": {
                "@type": "Organization",
                "name": "ClimGO",
                "url": "https://www.climgo.fr"
              },
              "serviceType": "Maintenance",
              "areaServed": {
                "@type": "State",
                "name": "Gironde"
              },
              "offers": [{"@type":"Offer","itemOffered":{"@type":"Service","name":"Entretien chaudière obligatoire"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Maintenance PAC"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Révision climatisation"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Contrat entretien"}}]
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}