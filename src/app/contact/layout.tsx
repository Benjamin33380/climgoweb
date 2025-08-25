import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

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
      <JsonLd type="business" />
      {children}
    </>
  );
}