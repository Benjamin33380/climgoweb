import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zones d\'Intervention ClimGO | Chauffage Climatisation Gironde',
  description: 'Zones d\'intervention ClimGO en Gironde. Bordeaux, Arcachon, Mérignac, Pessac et plus de 40 villes. Chauffage climatisation.',
  keywords: 'zones intervention ClimGO, Gironde, Bordeaux, Arcachon, Mérignac, Pessac, chauffage climatisation, ClimGO',

  openGraph: {
    title: 'Zones d\'Intervention ClimGO | Chauffage Climatisation Gironde',
    description: 'Zones d\'intervention ClimGO en Gironde. Bordeaux, Arcachon, Mérignac, Pessac et plus de 40 villes.',
    url: 'https://www.climgo.fr/zones-interventions',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og/zones-interventions-climgo.jpg',
      width: 1200,
      height: 630,
      alt: 'Zones d\'Intervention ClimGO | Chauffage Climatisation Gironde',
    }],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Zones d\'Intervention ClimGO | Chauffage Climatisation Gironde',
    description: 'Zones d\'intervention ClimGO en Gironde. Bordeaux, Arcachon, Mérignac, Pessac et plus de 40 villes.',
    images: ['https://www.climgo.fr/images/og/zones-interventions-climgo.jpg'],
  },

  alternates: {
    canonical: 'https://www.climgo.fr/zones-interventions',
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

export default function ZonesInterventionsLayout({
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
            "@type": "WebPage",
            "name": "Zones d'Intervention ClimGO",
            "description": "Zones d'intervention ClimGO en Gironde. Bordeaux, Arcachon, Mérignac, Pessac et plus de 40 villes. Chauffage climatisation.",
            "url": "https://www.climgo.fr/zones-interventions",
            "mainEntity": {
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
              },
              "areaServed": [
                {
                  "@type": "Place",
                  "name": "Bordeaux"
                },
                {
                  "@type": "Place",
                  "name": "Arcachon"
                },
                {
                  "@type": "Place",
                  "name": "Mérignac"
                },
                {
                  "@type": "Place",
                  "name": "Pessac"
                },
                {
                  "@type": "Place",
                  "name": "Gironde"
                }
              ]
            }
          })
        }}
      />
      {children}
    </>
  );
}