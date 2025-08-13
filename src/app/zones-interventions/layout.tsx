import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zones Intervention ClimGO | Chauffage Climatisation Gironde',
  description: 'ClimGO intervient dans toute la Gironde pour vos projets chauffage climatisation. Bordeaux, Arcachon, Bassin, Médoc. Artisan local RGE.',
  keywords: 'zones intervention, chauffage gironde, climatisation bordeaux, bassin arcachon, artisan local',
  
  openGraph: {
    title: 'Zones Intervention ClimGO | Chauffage Climatisation Gironde',
    description: 'ClimGO intervient dans toute la Gironde pour vos projets chauffage climatisation. Bordeaux, Arcachon, Bassin, Médoc. Artisan local RGE.',
    url: 'https://www.climgo.fr/zones-interventions',
    type: 'website'
  },
  
  other: {
    'DC.title': 'Zones Intervention ClimGO | Chauffage Climatisation Gironde',
    'DC.type': 'WebPage',
    'google-site-verification': 'Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g'
  },
  
  robots: { index: true, follow: true }
};

export default function ZonesinterventionsLayout({
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