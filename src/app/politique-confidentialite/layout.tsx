import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | ClimGO',
  description: 'Politique de confidentialité ClimGO. Protection des données personnelles, cookies, RGPD. ClimGO respecte votre vie privée.',
  keywords: 'politique confidentialité ClimGO, protection données personnelles, cookies ClimGO, RGPD ClimGO, vie privée ClimGO',
  
  openGraph: {
    title: 'Politique de Confidentialité | ClimGO',
    description: 'Politique de confidentialité ClimGO. Protection des données personnelles, cookies, RGPD. ClimGO respecte votre vie privée.',
    url: 'https://www.climgo.fr/politique-confidentialite',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og/politique-confidentialite-climgo.jpg',
      width: 1200,
      height: 630,
      alt: 'Politique de Confidentialité ClimGO',
    }],
  },
  
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Politique de Confidentialité | ClimGO',
    description: 'Politique de confidentialité ClimGO. Protection des données personnelles, cookies, RGPD.',
    images: ['https://www.climgo.fr/images/og/politique-confidentialite-climgo.jpg'],
  },
  
  alternates: {
    canonical: 'https://www.climgo.fr/politique-confidentialite',
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

export default function PolitiqueConfidentialiteLayout({
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
