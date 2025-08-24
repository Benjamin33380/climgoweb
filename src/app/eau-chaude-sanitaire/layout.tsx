import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Chauffe-eau Ballon Eau Chaude Gironde | Installation ClimGO',
  description: 'Installation chauffe-eau ballon eau chaude Gironde. Ballon thermodynamique, électrique, solaire. Devis gratuit.',
  keywords: 'chauffe-eau gironde, ballon eau chaude, installation chauffe-eau, ballon thermodynamique, ballon électrique, ballon solaire, cumulus, production eau chaude, économies énergie, devis gratuit, ClimGO',
  
  openGraph: {
    title: 'Chauffe-eau Ballon Eau Chaude Gironde | Installation ClimGO',
    description: 'Installation chauffe-eau ballon eau chaude Gironde. Ballon thermodynamique, électrique, solaire. Devis gratuit.',
    url: 'https://www.climgo.fr/eau-chaude-sanitaire',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og/eau-chaude-sanitaire-gironde.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffe-eau Ballon Eau Chaude Gironde | ClimGO',
    }],
  },
  
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Chauffe-eau Ballon Eau Chaude Gironde | Installation ClimGO',
    description: 'Installation chauffe-eau ballon eau chaude Gironde. Ballon thermodynamique, électrique, solaire. Devis gratuit.',
    images: ['https://www.climgo.fr/images/og/eau-chaude-sanitaire-gironde.jpg'],
  },
  
  alternates: {
    canonical: 'https://www.climgo.fr/eau-chaude-sanitaire',
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

export default function EauChaudeSanitaireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd type="service" service="eau-chaude-sanitaire" />
      {children}
    </>
  );
}