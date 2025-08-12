import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact ClimGO | Devis Gratuit Chauffage Climatisation Gironde',
  description: 'Contactez ClimGO pour votre projet chauffage climatisation en Gironde. Devis gratuit sous 24h. Artisan RGE. Tel: 07 66 46 00 08.',
  keywords: 'contact climgo, devis chauffage, devis climatisation, artisan RGE gironde, chauffagiste bordeaux',
  
  openGraph: {
    title: 'Contact ClimGO | Devis Gratuit Chauffage Climatisation Gironde',
    description: 'Contactez ClimGO pour votre projet chauffage climatisation en Gironde. Devis gratuit sous 24h. Artisan RGE. Tel: 07 66 46 00 08.',
    url: 'https://www.climgo.fr/contact',
    type: 'website'
  },
  
  other: {
    'DC.title': 'Contact ClimGO | Devis Gratuit Chauffage Climatisation Gironde',
    'DC.type': 'ContactPage',
    'google-site-verification': 'Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g'
  },
  
  robots: { index: true, follow: true }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr-FR">
      <head>
        <link rel="canonical" href="https://www.climgo.fr/contact" />
      </head>
      <body>{children}</body>
    </html>
  );
}