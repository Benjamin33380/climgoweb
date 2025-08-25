import { Metadata } from 'next';

// Métadonnées ultra-optimisées Villenave-D-Ornon COMPLETE
export const metadata: Metadata = {
  title: "Chauffage Climatisation Villenave-d'Ornon | Expert ClimGO",
  description: "Expert chauffage et climatisation à Villenave-d'Ornon (33140). ClimGO, artisan RGE certifié. Installation PAC, maintenance, dépannage. Devis gratuit.",
  keywords: [
    "chauffage Villenave-d'Ornon",
    "climatisation Villenave-d'Ornon",
    "installation PAC 33140",
    "artisan RGE Villenave-d'Ornon",
    "maintenance chauffage",
    "dépannage climatisation",
  ],
  openGraph: {
    title: "Chauffage Climatisation Villenave-d'Ornon | Expert ClimGO",
    description: "Expert chauffage et climatisation à Villenave-d'Ornon (33140). ClimGO, artisan RGE certifié. Installation PAC, maintenance, dépannage.",
    url: "https://www.climgo.fr/villes/villenave-d-ornon-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/img/climdame.png",
        width: 1200,
        height: 630,
        alt: "ClimGO - Chauffage Climatisation Villenave-d'Ornon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@climgo_fr",
    creator: "@climgo_fr",
    title: "Chauffage Climatisation Villenave-d'Ornon | Expert ClimGO",
    description: "Expert chauffage et climatisation à Villenave-d'Ornon (33140). ClimGO, artisan RGE certifié. Installation PAC, maintenance, dépannage.",
    images: ["/img/climdame.png"],
  },
  alternates: {
    canonical: "https://www.climgo.fr/villes/villenave-d-ornon-chauffage-climatisation",
  },
};

export default function VillenaveDOrnonLayout({
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