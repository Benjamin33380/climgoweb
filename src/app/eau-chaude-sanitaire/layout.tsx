import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Chauffe-eau Gironde | Installation & Maintenance",
  description: "Installation et maintenance de chauffe-eau en Gironde. ClimGO, expert en eau chaude sanitaire. Devis gratuit, intervention rapide. Artisan RGE certifié.",
  keywords: [
    "chauffe-eau Gironde",
    "eau chaude sanitaire",
    "installation chauffe-eau",
    "maintenance chauffe-eau",
    "artisan RGE Gironde",
    "devis gratuit",
  ],
  openGraph: {
    title: "Chauffe-eau Gironde | Installation & Maintenance",
    description: "Installation et maintenance de chauffe-eau en Gironde. ClimGO, expert en eau chaude sanitaire. Devis gratuit, intervention rapide.",
    url: "https://www.climgo.fr/eau-chaude-sanitaire",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/img/serp/ecs.webp",
        width: 1200,
        height: 630,
        alt: "ClimGO - Eau Chaude Sanitaire Gironde",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@climgo_fr",
    creator: "@climgo_fr",
    title: "Chauffe-eau Gironde | Installation & Maintenance",
    description: "Installation et maintenance de chauffe-eau en Gironde. ClimGO, expert en eau chaude sanitaire. Devis gratuit, intervention rapide.",
    images: ["/img/serp/ecs.webp"],
  },
  alternates: {
    canonical: "https://www.climgo.fr/eau-chaude-sanitaire",
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Eau Chaude Sanitaire Gironde - Installation & Maintenance",
            "description": "Installation et maintenance de chauffe-eau en Gironde. ClimGO, expert en eau chaude sanitaire. Devis gratuit, intervention rapide.",
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
            "serviceType": "Installation et maintenance de systèmes d'eau chaude sanitaire",
            "url": "https://www.climgo.fr/eau-chaude-sanitaire",
            "offers": {
              "@type": "Offer",
              "description": "Installation et maintenance chauffe-eau - Devis gratuit"
            }
          })
        }}
      />
      {children}
    </>
  );
}