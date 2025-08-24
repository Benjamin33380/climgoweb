import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Services ClimGO | Chauffage Climatisation PAC | Expert RGE',
  description: 'Services ClimGO : chauffage, climatisation, pompe à chaleur. Installation, maintenance, dépannage.',
  keywords: 'services ClimGO, chauffage Gironde, climatisation Gironde, pompe à chaleur, installation PAC, maintenance chauffage, dépannage urgence, expert RGE, ClimGO',
  
  openGraph: {
    title: 'Services ClimGO | Chauffage Climatisation PAC | Expert RGE',
    description: 'Services ClimGO : chauffage, climatisation, pompe à chaleur. Installation, maintenance, dépannage.',
    url: 'https://www.climgo.fr/services',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Services ClimGO | Chauffage Climatisation PAC | Expert RGE',
    description: 'Services ClimGO : chauffage, climatisation, pompe à chaleur. Installation, maintenance, dépannage.',
  },
  
  alternates: {
    canonical: 'https://www.climgo.fr/services',
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

export default function ServicesLayout({
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