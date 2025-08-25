import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Entretien Chauffage Climatisation Gironde | ClimGO',
  description: 'Entretien chauffage climatisation Gironde. Maintenance PAC, chaudière, climatiseur. Contrat entretien annuel. Intervention rapide. Expert RGE certifié ClimGO.',
  keywords: 'maintenance chauffage, entretien climatisation, contrat maintenance, révision annuelle, nettoyage installation, contrôle étanchéité, remplacement filtres, vérification sécurité, optimisation performance, diagnostic panne, réparation urgente, dépannage 24h, pièces détachées, garantie constructeur, expertise technique, prévention pannes, amélioration rendement, mise aux normes',
  
  openGraph: {
    title: 'Entretien Chauffage Climatisation Gironde | ClimGO',
    description: 'Entretien chauffage climatisation Gironde. Maintenance PAC, chaudière, climatiseur. Contrat entretien annuel. Intervention rapide. Expert RGE certifié ClimGO.',
    url: 'https://www.climgo.fr/maintenance',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: '/img/serp/sav.jpeg',
      width: 1200,
      height: 630,
      alt: 'Maintenance Chauffage Climatisation Gironde | ClimGO',
    }],
  },
  
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Entretien Chauffage Climatisation Gironde | ClimGO',
    description: 'Entretien chauffage climatisation Gironde. Maintenance PAC, chaudière, climatiseur. Contrat entretien annuel. Intervention rapide.',
    images: ['/img/serp/sav.jpeg'],
  },
  
  alternates: {
    canonical: 'https://www.climgo.fr/maintenance',
  },
  
  other: {
    'DC.title': 'Entretien Chauffage Climatisation Gironde | ClimGO',
    'DC.description': 'Entretien chauffage climatisation Gironde. Maintenance PAC, chaudière, climatiseur.',
    'DC.type': 'Service',
    'category': 'Maintenance',
    'priceRange': '120-300€',
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

export default function MaintenanceLayout({
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