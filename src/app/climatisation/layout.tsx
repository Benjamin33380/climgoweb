import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Climatisation Gironde | Installation Climatiseur PAC Air/Air',
  description: 'Climatisation Gironde. Installation climatiseur, PAC air/air, réversible. Entretien, dépannage. Expert RGE certifié ClimGO. Devis gratuit sous 48h.',
  keywords: 'climatisation Gironde, installation climatiseur, PAC air air, climatiseur réversible, entretien climatisation, dépannage clim, ClimGO',
  
  openGraph: {
    title: 'Climatisation Gironde | Installation Climatiseur PAC Air/Air',
    description: 'Climatisation Gironde. Installation climatiseur, PAC air/air, réversible. Entretien, dépannage. Expert RGE certifié ClimGO. Devis gratuit sous 48h.',
    url: 'https://www.climgo.fr/climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og/climatisation-gironde.jpg',
      width: 1200,
      height: 630,
      alt: 'Climatisation Gironde - Installation PAC Air/Air | ClimGO',
    }],
  },
  
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Climatisation Gironde | Installation Climatiseur PAC Air/Air',
    description: 'Climatisation Gironde. Installation climatiseur, PAC air/air, réversible. Entretien, dépannage. Expert RGE certifié ClimGO.',
    images: ['https://www.climgo.fr/images/og/climatisation-gironde.jpg'],
  },
  
  alternates: {
    canonical: 'https://www.climgo.fr/climatisation',
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

export default function ClimatisationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd type="service" service="climatisation" />
      {children}
    </>
  );
}