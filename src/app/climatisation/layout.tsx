import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Climatisation Gironde | Installation Climatiseur PAC Air/Air | ClimGO',
  description: 'Expert climatisation Gironde. Installation climatiseur reversible, PAC air/air multi-split. Artisan RGE. Devis gratuit, pose professionnelle.',
  keywords: 'climatisation gironde, installation climatiseur, clim réversible, climatisation murale, climatisation gainable, climatisation cassette, pompe à chaleur air air, système multi-split, climatiseur mobile, rafraîchissement adiabatique, ventilation VMC, purification air, climatisation bureau, clim commerce, climatisation industrielle, maintenance climatisation, contrat entretien clim, réparation climatiseur, fluide frigorigène, détection fuite, nettoyage filtres clim',
  
  openGraph: {
    title: 'Climatisation Gironde | Installation Climatiseur PAC Air/Air | ClimGO',
    description: 'Expert climatisation Gironde. Installation climatiseur reversible, PAC air/air multi-split. Artisan RGE. Devis gratuit, pose professionnelle.',
    url: 'https://www.climgo.fr/climatisation',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Climatisation ClimGO',
    }],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Climatisation Gironde | Installation Climatiseur PAC Air/Air | ClimGO',
    description: 'Expert climatisation Gironde. Installation climatiseur reversible, PAC air/air multi-split. Artisan RGE. Devis gratuit, pose professionnelle.',
  },
  
  other: {
    'DC.title': 'Climatisation Gironde | Installation Climatiseur PAC Air/Air | ClimGO',
    'DC.description': 'Expert climatisation Gironde. Installation climatiseur reversible, PAC air/air multi-split. Artisan RGE. Devis gratuit, pose professionnelle.',
    'DC.type': 'Service',
    'category': 'Climatisation',
    'priceRange': '1500-8000€',
    'google-site-verification': 'Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g'
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
      {children}
    </>
  );
}