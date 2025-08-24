import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Aides & Subventions ClimGO | MaPrimeRénov, CEE',
  description: 'Découvrez toutes les aides de l\'État 2025 pour vos travaux chauffage climatisation. ClimGO vous accompagne dans vos démarches.',
  keywords: 'aides chauffage, MaPrimeRénov, prime CEE, éco-PTZ, TVA réduite, rénovation énergétique, ClimGO, devis gratuit',
  
  openGraph: {
    title: 'Aides & Subventions ClimGO | MaPrimeRénov, CEE',
    description: 'Toutes les aides 2025 pour vos travaux chauffage climatisation. ClimGO vous accompagne : MaPrimeRénov\', CEE, TVA réduite. Devis gratuit.',
    url: 'https://www.climgo.fr/aides-etat',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og/aides-etat.jpg',
      width: 1200,
      height: 630,
      alt: 'Aides & Subventions ClimGO | MaPrimeRénov, CEE',
    }],
  },
  
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Aides & Subventions ClimGO | MaPrimeRénov, CEE',
    description: 'Toutes les aides 2025 pour vos travaux chauffage climatisation. ClimGO vous accompagne.',
    images: ['https://www.climgo.fr/images/og/aides-etat.jpg'],
  },
  
  alternates: {
    canonical: 'https://www.climgo.fr/aides-etat',
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

export default function AidesEtatLayout({
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
