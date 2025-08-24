import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Chauffage Gironde | Installation PAC, Plancher Chauffant',
  description: 'Expert chauffage Gironde. Installation pompe à chaleur, plancher chauffant, radiateurs. Artisan RGE certifié.',
  keywords: 'chauffage gironde, installation pompe à chaleur, plancher chauffant, radiateurs, artisan RGE, MaPrimeRénov, prime CEE, devis gratuit chauffage',
  
  openGraph: {
    title: 'Chauffage Gironde | Installation PAC, Plancher Chauffant',
    description: 'Expert chauffage Gironde. Installation pompe à chaleur, plancher chauffant, radiateurs. Artisan RGE certifié.',
    url: 'https://www.climgo.fr/chauffage',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og/chauffage-gironde.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage Gironde - Installation PAC, Plancher Chauffant | ClimGO',
    }],
  },
  
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Chauffage Gironde | Installation PAC, Plancher Chauffant',
    description: 'Expert chauffage Gironde. Installation pompe à chaleur, plancher chauffant, radiateurs.',
    images: ['https://www.climgo.fr/images/og/chauffage-gironde.jpg'],
  },
  
  alternates: {
    canonical: 'https://www.climgo.fr/chauffage',
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