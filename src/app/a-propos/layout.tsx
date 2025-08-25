import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos de ClimGO | Expert Chauffage Climatisation',
  description: 'Découvrez ClimGO, votre expert en chauffage et climatisation en Gironde depuis plus de 10 ans. Artisan RGE certifié.',
  keywords: 'ClimGO, expert chauffage climatisation, artisan RGE Gironde, entreprise chauffage, ClimGO histoire, ClimGO équipe',
  
  openGraph: {
    title: 'À propos de ClimGO | Expert Chauffage Climatisation',
    description: 'Découvrez ClimGO, votre expert en chauffage et climatisation en Gironde depuis plus de 10 ans. Artisan RGE certifié.',
    url: 'https://www.climgo.fr/a-propos',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og/a-propos-climgo.jpg',
      width: 1200,
      height: 630,
      alt: 'À propos de ClimGO | Expert Chauffage Climatisation',
    }],
  },
  
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'À propos de ClimGO | Expert Chauffage Climatisation',
    description: 'Découvrez ClimGO, votre expert en chauffage et climatisation en Gironde depuis plus de 10 ans.',
    images: ['https://www.climgo.fr/images/og/a-propos-climgo.jpg'],
  },
  
  alternates: {
    canonical: 'https://www.climgo.fr/a-propos',
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

export default function AProposLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      
      {children}
    </>
  );
}
