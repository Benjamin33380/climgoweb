import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chauffage Gironde | Installation Chaudière PAC | ClimGO Expert RGE',
  description: 'Expert chauffage Gironde. Installation chaudière gaz, fioul, granulés, pompe à chaleur. Artisan RGE certifié. Devis gratuit, intervention 24h.',
  keywords: 'chauffage gironde, installation chaudière, pompe à chaleur air eau, chaudière gaz condensation, chaudière granulés, plancher chauffant, radiateurs haute performance, PAC haute température, chauffage central, remplacement chaudière, modernisation chauffage, système hybride, chaudière biomasse, poêle granulés, insert cheminée, chauffage au sol, émetteurs chaleur douce, thermostat connecté, régulation chauffage, optimisation consommation, diagnostic thermique',
  
  openGraph: {
    title: 'Chauffage Gironde | Installation Chaudière PAC | ClimGO Expert RGE',
    description: 'Expert chauffage Gironde. Installation chaudière gaz, fioul, granulés, pompe à chaleur. Artisan RGE certifié. Devis gratuit, intervention 24h.',
    url: 'https://www.climgo.fr/chauffage',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og-chauffage.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage ClimGO',
    }],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Chauffage Gironde | Installation Chaudière PAC | ClimGO Expert RGE',
    description: 'Expert chauffage Gironde. Installation chaudière gaz, fioul, granulés, pompe à chaleur. Artisan RGE certifié. Devis gratuit, intervention 24h.',
  },
  
  other: {
    'DC.title': 'Chauffage Gironde | Installation Chaudière PAC | ClimGO Expert RGE',
    'DC.description': 'Expert chauffage Gironde. Installation chaudière gaz, fioul, granulés, pompe à chaleur. Artisan RGE certifié. Devis gratuit, intervention 24h.',
    'DC.type': 'Service',
    'category': 'Chauffage',
    'priceRange': '3000-15000€',
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

export default function ChauffageLayout({
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