import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chauffage Gironde | Installation PAC, Plancher Chauffant',
  description: 'Expert chauffage Gironde. Installation pompe à chaleur, plancher chauffant, radiateurs. Artisan RGE certifié.',
  keywords: 'chauffage gironde, installation pompe à chaleur, plancher chauffant, radiateurs, artisan RGE, MaPrimeRénov, prime CEE, devis gratuit chauffage',
  
  openGraph: {
    title: 'Chauffage Gironde | Installation PAC, Plancher Chauffant',
    description: 'Expert chauffage Gironde. Installation pompe à chaleur, plancher chauffant, radiateurs. Artisan RGE certifié.',
    url: 'https://www.climgo.fr/chauffage',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: '/img/serp/chauff.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage Gironde - Installation PAC, Plancher Chauffant | ClimGO',
    }],
  },
  
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Chauffage Gironde | Installation PAC, Plancher Chauffant',
    description: 'Expert chauffage Gironde. Installation pompe à chaleur, plancher chauffant, radiateurs.',
    images: ['/img/serp/chauff.jpg'],
  },
  
  alternates: {
    canonical: 'https://www.climgo.fr/chauffage',
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Chauffage Gironde - Installation PAC, Plancher Chauffant",
            "description": "Expert chauffage Gironde. Installation pompe à chaleur, plancher chauffant, radiateurs. Artisan RGE certifié.",
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
            "serviceType": "Installation et maintenance de systèmes de chauffage",
            "url": "https://www.climgo.fr/chauffage",
            "offers": {
              "@type": "Offer",
              "description": "Installation PAC, plancher chauffant, radiateurs - Devis gratuit"
            }
          })
        }}
      />
      {children}
    </>
  );
}