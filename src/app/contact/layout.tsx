import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Contactez ClimGO | Devis Gratuit Chauffage Climatisation Gironde',
  description: 'Contactez ClimGO pour un devis gratuit chauffage climatisation Gironde. Installation, maintenance, dépannage. 07 66 46 00 08.',
  keywords: 'contact ClimGO, devis gratuit chauffage, devis climatisation Gironde, installation PAC, maintenance chauffage, dépannage urgence, ClimGO Gironde',

  openGraph: {
    title: 'Contactez ClimGO | Devis Gratuit Chauffage Climatisation Gironde',
    description: 'Contactez ClimGO pour un devis gratuit chauffage climatisation Gironde. Installation, maintenance, dépannage.',
    url: 'https://www.climgo.fr/contact',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og/contact-climgo.jpg',
      width: 1200,
      height: 630,
      alt: 'Contactez ClimGO | Devis Gratuit Chauffage Climatisation',
    }],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Contactez ClimGO | Devis Gratuit Chauffage Climatisation Gironde',
    description: 'Contactez ClimGO pour un devis gratuit chauffage climatisation Gironde. Installation, maintenance, dépannage.',
    images: ['https://www.climgo.fr/images/og/contact-climgo.jpg'],
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