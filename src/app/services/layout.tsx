import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Services ClimGO | Chauffage Climatisation PAC Gironde",
  description: "Services ClimGO : installation, maintenance et dépannage de chauffage, climatisation et pompes à chaleur en Gironde. Artisan RGE certifié, devis gratuit.",
  keywords: [
    "services chauffage Gironde",
    "services climatisation Gironde",
    "installation PAC Gironde",
    "maintenance chauffage",
    "dépannage climatisation",
    "artisan RGE Gironde",
  ],
  openGraph: {
    title: "Services ClimGO | Chauffage Climatisation PAC Gironde",
    description: "Services ClimGO : installation, maintenance et dépannage de chauffage, climatisation et pompes à chaleur en Gironde. Artisan RGE certifié.",
    url: "https://www.climgo.fr/services",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/img/climdame.png",
        width: 1200,
        height: 630,
        alt: "Services ClimGO - Chauffage Climatisation Gironde",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@climgo_fr",
    creator: "@climgo_fr",
    title: "Services ClimGO | Chauffage Climatisation PAC Gironde",
    description: "Services ClimGO : installation, maintenance et dépannage de chauffage, climatisation et pompes à chaleur en Gironde. Artisan RGE certifié.",
    images: ["/img/climdame.png"],
  },
  alternates: {
    canonical: "https://www.climgo.fr/services",
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

export default function ServicesLayout({
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
            "name": "Services ClimGO - Chauffage Climatisation PAC",
            "description": "Services ClimGO : installation, maintenance et dépannage de chauffage, climatisation et pompes à chaleur en Gironde. Artisan RGE certifié.",
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
            "serviceType": "Installation, maintenance et dépannage de systèmes thermiques",
            "url": "https://www.climgo.fr/services",
            "offers": {
              "@type": "Offer",
              "description": "Chauffage, climatisation, PAC - Devis gratuit"
            }
          })
        }}
      />
      {children}
    </>
  );
}