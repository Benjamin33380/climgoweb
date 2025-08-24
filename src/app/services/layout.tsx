import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Services ClimGO | Chauffage Climatisation PAC Gironde | Expert RGE',
  description: 'Services ClimGO : chauffage, climatisation, pompe à chaleur en Gironde. Installation, maintenance, dépannage. Expert RGE certifié. Devis gratuit sous 48h.',
  keywords: 'services ClimGO, chauffage Gironde, climatisation Gironde, pompe à chaleur, installation PAC, maintenance chauffage, dépannage urgence, expert RGE, ClimGO',

  openGraph: {
    title: 'Services ClimGO | Chauffage Climatisation PAC Gironde | Expert RGE',
    description: 'Services ClimGO : chauffage, climatisation, pompe à chaleur en Gironde. Installation, maintenance, dépannage. Expert RGE certifié. Devis gratuit sous 48h.',
    url: 'https://www.climgo.fr/services',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og/services-climgo.jpg',
      width: 1200,
      height: 630,
      alt: 'Services ClimGO | Chauffage Climatisation PAC Gironde',
    }],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Services ClimGO | Chauffage Climatisation PAC Gironde | Expert RGE',
    description: 'Services ClimGO : chauffage, climatisation, pompe à chaleur en Gironde. Installation, maintenance, dépannage. Expert RGE certifié.',
    images: ['https://www.climgo.fr/images/og/services-climgo.jpg'],
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