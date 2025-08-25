import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Eau Chaude Sanitaire | Installation Chauffe-eau Gironde",
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
    title: "Eau Chaude Sanitaire | Installation Chauffe-eau Gironde",
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
    title: "Eau Chaude Sanitaire | Installation Chauffe-eau Gironde",
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
      
      {children}
    </>
  );
}