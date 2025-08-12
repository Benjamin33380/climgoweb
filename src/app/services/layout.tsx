import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services ClimGO | Chauffage Climatisation PAC Gironde | Expert RGE',
  description: 'Tous nos services chauffage climatisation en Gironde. Installation, dépannage, entretien PAC, chaudière, climatiseur. Artisan RGE certifié.',
  keywords: 'services chauffage, services climatisation, installation PAC, expert RGE gironde',
  
  openGraph: {
    title: 'Services ClimGO | Chauffage Climatisation PAC Gironde | Expert RGE',
    description: 'Tous nos services chauffage climatisation en Gironde. Installation, dépannage, entretien PAC, chaudière, climatiseur. Artisan RGE certifié.',
    url: 'https://www.climgo.fr/services',
    type: 'website'
  },
  
  other: {
    'DC.title': 'Services ClimGO | Chauffage Climatisation PAC Gironde | Expert RGE',
    'DC.type': 'Service',
    'google-site-verification': 'Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g'
  },
  
  robots: { index: true, follow: true }
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr-FR">
      <head>
        <link rel="canonical" href="https://www.climgo.fr/services" />
      </head>
      <body>{children}</body>
    </html>
  );
}