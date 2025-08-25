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
      
      {children}
    </>
  );
}