import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact ClimGO | Devis Gratuit Chauffage Climatisation",
  description: "Contactez ClimGO pour un devis gratuit en chauffage et climatisation en Gironde. Intervention rapide, artisan RGE certifié. Devis sous 24h.",
  keywords: [
    "devis chauffage Gironde",
    "devis climatisation Gironde",
    "contact ClimGO",
    "artisan RGE Gironde",
    "devis gratuit",
    "intervention rapide",
  ],
  openGraph: {
    title: "Contact ClimGO | Devis Gratuit Chauffage Climatisation",
    description: "Contactez ClimGO pour un devis gratuit en chauffage et climatisation en Gironde. Intervention rapide, artisan RGE certifié.",
    url: "https://www.climgo.fr/contact",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/img/climdame.png",
        width: 1200,
        height: 630,
        alt: "Contact ClimGO - Devis Gratuit Gironde",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@climgo_fr",
    creator: "@climgo_fr",
    title: "Contact ClimGO | Devis Gratuit Chauffage Climatisation",
    description: "Contactez ClimGO pour un devis gratuit en chauffage et climatisation en Gironde. Intervention rapide, artisan RGE certifié.",
    images: ["/img/climdame.png"],
  },
  alternates: {
    canonical: "https://www.climgo.fr/contact",
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

export default function ContactLayout({
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
            "@type": "ContactPage",
            "name": "Contact ClimGO - Devis Gratuit",
            "description": "Contactez ClimGO pour un devis gratuit en chauffage et climatisation en Gironde. Intervention rapide, artisan RGE certifié.",
            "url": "https://www.climgo.fr/contact",
            "mainEntity": {
              "@type": "HVACBusiness",
              "name": "ClimGO",
              "telephone": "+33766460008",
              "email": "contact@climgo.fr",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "28 rue de Cantelaude",
                "addressLocality": "Marcheprime",
                "addressRegion": "Nouvelle-Aquitaine",
                "postalCode": "33380",
                "addressCountry": "FR"
              },
              "areaServed": {
                "@type": "Place",
                "name": "Gironde, Bordeaux Métropole, Bassin d'Arcachon"
              }
            },
            "offers": {
              "@type": "Offer",
              "description": "Devis gratuit sous 24h - Intervention rapide"
            }
          })
        }}
      />
      {children}
    </>
  );
}