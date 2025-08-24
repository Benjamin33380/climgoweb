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
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Zones d\'Intervention ClimGO | Chauffage Climatisation Gironde',
    description: 'Zones d\'intervention ClimGO en Gironde. Bordeaux, Arcachon, Mérignac, Pessac et plus de 40 villes.',
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