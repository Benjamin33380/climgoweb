import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Contactez ClimGO | Devis Gratuit Chauffage Climatisation',
  description: 'Contactez ClimGO pour un devis gratuit chauffage climatisation. Installation, maintenance, dépannage.',
  keywords: 'contact ClimGO, devis gratuit chauffage, devis climatisation Gironde, installation PAC, maintenance chauffage, dépannage urgence, ClimGO Gironde',
  
  openGraph: {
    title: 'Contactez ClimGO | Devis Gratuit Chauffage Climatisation',
    description: 'Contactez ClimGO pour un devis gratuit chauffage climatisation. Installation, maintenance, dépannage.',
    url: 'https://www.climgo.fr/contact',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Contactez ClimGO | Devis Gratuit Chauffage Climatisation',
    description: 'Contactez ClimGO pour un devis gratuit chauffage climatisation. Installation, maintenance, dépannage.',
  },
  
  alternates: {
    canonical: 'https://www.climgo.fr/contact',
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

export default function ContactLayout({
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