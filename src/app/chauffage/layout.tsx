import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Chauffage Gironde | Installation PAC, Plancher Chauffant | ClimGO',
  description: 'Expert chauffage Gironde. Installation pompe à chaleur, plancher chauffant, radiateurs. Artisan RGE certifié. Devis gratuit. 07 66 46 00 08',
  keywords: 'chauffage gironde, installation pompe à chaleur, plancher chauffant, radiateurs, artisan RGE, MaPrimeRénov, prime CEE, devis gratuit chauffage',
  openGraph: {
    title: 'Chauffage Gironde | Installation PAC, Plancher Chauffant | ClimGO',
    description: 'Expert chauffage Gironde. Installation pompe à chaleur, plancher chauffant, radiateurs. Artisan RGE certifié.',
    url: 'https://www.climgo.fr/chauffage',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chauffage Gironde | Installation PAC, Plancher Chauffant | ClimGO',
    description: 'Expert chauffage Gironde. Installation pompe à chaleur, plancher chauffant, radiateurs.',
  },
  alternates: {
    canonical: 'https://www.climgo.fr/chauffage',
  },
};

export default function ChauffageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd type="service" service="chauffage" />
      {children}
    </>
  );
}