import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Climatisation Gironde | Installation Climatiseur PAC Air/Air',
  description: 'Climatisation Gironde. Installation climatiseur, PAC air/air, réversible. Entretien, dépannage. Expert RGE certifié ClimGO. Devis gratuit sous 48h.',
  keywords: 'climatisation Gironde, installation climatiseur, PAC air air, climatiseur réversible, entretien climatisation, dépannage clim, ClimGO',
  
  openGraph: {
    title: 'Climatisation Gironde | Installation Climatiseur PAC Air/Air',
    description: 'Climatisation Gironde. Installation climatiseur, PAC air/air, réversible. Entretien, dépannage. Expert RGE certifié ClimGO. Devis gratuit sous 48h.',
    url: 'https://www.climgo.fr/climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: '/img/serp/clim.png',
      width: 1200,
      height: 630,
      alt: 'Climatisation Gironde - Installation PAC Air/Air | ClimGO',
    }],
  },
  
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Climatisation Gironde | Installation Climatiseur PAC Air/Air',
    description: 'Climatisation Gironde. Installation climatiseur, PAC air/air, réversible. Entretien, dépannage. Expert RGE certifié ClimGO.',
    images: ['/img/serp/clim.png'],
  },
  
  alternates: {
    canonical: 'https://www.climgo.fr/climatisation',
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Climatisation Gironde - Installation PAC Air/Air",
            "description": "Climatisation Gironde. Installation climatiseur, PAC air/air, réversible. Entretien, dépannage. Expert RGE certifié ClimGO.",
            "provider": {
              "@type": "HVACBusiness",
              "name": "ClimGO",
              "url": "https://www.climgo.fr",
              "telephone": "+33766460008",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "28 rue de Cantelaude",
                "addressLocality": "Marcheprime",
                "addressRegion": "Nouvelle-Aquitaine",
                "postalCode": "33380",
                "addressCountry": "FR"
              }
            },
            "areaServed": {
              "@type": "Place",
              "name": "Gironde, Bordeaux Métropole, Bassin d'Arcachon"
            },
            "serviceType": "Installation et maintenance de systèmes de climatisation",
            "url": "https://www.climgo.fr/climatisation",
            "offers": {
              "@type": "Offer",
              "description": "Installation climatiseur, PAC air/air, entretien - Devis gratuit"
            }
          })
        }}
      />
      {children}
    </>
  );
}