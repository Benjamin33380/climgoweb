import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Zones d\'Intervention ClimGO | Chauffage Climatisation Gironde',
  description: 'Zones d\'intervention ClimGO en Gironde. Bordeaux, Arcachon, Mérignac, Pessac et plus de 40 villes. Chauffage climatisation.',
  keywords: 'zones intervention ClimGO, Gironde, Bordeaux, Arcachon, Mérignac, Pessac, chauffage climatisation, ClimGO',

  openGraph: {
    title: 'Zones d\'Intervention ClimGO | Chauffage Climatisation Gironde',
    description: 'Zones d\'intervention ClimGO en Gironde. Bordeaux, Arcachon, Mérignac, Pessac et plus de 40 villes.',
    url: 'https://www.climgo.fr/zones-interventions',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og/zones-interventions-climgo.jpg',
      width: 1200,
      height: 630,
      alt: 'Zones d\'Intervention ClimGO | Chauffage Climatisation Gironde',
    }],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Zones d\'Intervention ClimGO | Chauffage Climatisation Gironde',
    description: 'Zones d\'intervention ClimGO en Gironde. Bordeaux, Arcachon, Mérignac, Pessac et plus de 40 villes.',
    images: ['https://www.climgo.fr/images/og/zones-interventions-climgo.jpg'],
  },

  alternates: {
    canonical: 'https://www.climgo.fr/zones-interventions',
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

export default function ZonesInterventionsLayout({
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