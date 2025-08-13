import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chauffe-eau Ballon Eau Chaude Gironde | ClimGO Installation',
  description: 'Installation chauffe-eau Gironde. Ballon eau chaude, chauffe-eau thermodynamique, solaire. Remplacement urgence. Artisan qualifié.',
  keywords: 'eau chaude sanitaire, chauffe-eau thermodynamique, ballon eau chaude, chauffe-eau solaire, préparateur ECS, production eau chaude, cumulus électrique, chauffe-eau gaz, ballon thermodynamique, installation sanitaire, remplacement chauffe-eau, détartrage ballon, isolation ballon, récupération chaleur, système solaire combiné, bouclage sanitaire, légionellose prévention, température eau chaude',
  
  openGraph: {
    title: 'Chauffe-eau Ballon Eau Chaude Gironde | ClimGO Installation',
    description: 'Installation chauffe-eau Gironde. Ballon eau chaude, chauffe-eau thermodynamique, solaire. Remplacement urgence. Artisan qualifié.',
    url: 'https://www.climgo.fr/eau-chaude-sanitaire',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og-eau-chaude-sanitaire.jpg',
      width: 1200,
      height: 630,
      alt: 'Eau chaude sanitaire ClimGO',
    }],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Chauffe-eau Ballon Eau Chaude Gironde | ClimGO Installation',
    description: 'Installation chauffe-eau Gironde. Ballon eau chaude, chauffe-eau thermodynamique, solaire. Remplacement urgence. Artisan qualifié.',
  },
  
  other: {
    'DC.title': 'Chauffe-eau Ballon Eau Chaude Gironde | ClimGO Installation',
    'DC.description': 'Installation chauffe-eau Gironde. Ballon eau chaude, chauffe-eau thermodynamique, solaire. Remplacement urgence. Artisan qualifié.',
    'DC.type': 'Service',
    'category': 'Eau chaude sanitaire',
    'priceRange': '800-4000€',
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

export default function EauChaudeSanitaireLayout({
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