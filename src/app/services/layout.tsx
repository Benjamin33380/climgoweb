import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services ClimGO | Chauffage Climatisation PAC Gironde | Expert RGE',
  description: 'Tous nos services chauffage climatisation en Gironde. Installation, dépannage, entretien PAC, chaudière, climatiseur. Artisan RGE certifié.',
  keywords: 'services chauffage climatisation, entreprise CVC, génie climatique, bureau étude thermique, conception installation, mise en service, formation utilisateur, assistance technique, support client, devis personnalisé, étude faisabilité, conseil énergétique, suivi consommation, optimisation coûts, retour investissement',
  
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
    <>
      {children}
    </>
  );
}