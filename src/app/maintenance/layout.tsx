import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Entretien Chauffage Climatisation Gironde | ClimGO Maintenance',
  description: 'Entretien chauffage climatisation Gironde. Maintenance PAC, chaudière, climatiseur. Contrat entretien annuel. Intervention rapide.',
  keywords: 'maintenance chauffage, entretien climatisation, contrat maintenance, révision annuelle, nettoyage installation, contrôle étanchéité, remplacement filtres, vérification sécurité, optimisation performance, diagnostic panne, réparation urgente, dépannage 24h, pièces détachées, garantie constructeur, expertise technique, prévention pannes, amélioration rendement, mise aux normes',
  
  openGraph: {
    title: 'Entretien Chauffage Climatisation Gironde | ClimGO Maintenance',
    description: 'Entretien chauffage climatisation Gironde. Maintenance PAC, chaudière, climatiseur. Contrat entretien annuel. Intervention rapide.',
    url: 'https://www.climgo.fr/maintenance',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og-maintenance.jpg',
      width: 1200,
      height: 630,
      alt: 'Maintenance ClimGO',
    }],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Entretien Chauffage Climatisation Gironde | ClimGO Maintenance',
    description: 'Entretien chauffage climatisation Gironde. Maintenance PAC, chaudière, climatiseur. Contrat entretien annuel. Intervention rapide.',
  },
  
  other: {
    'DC.title': 'Entretien Chauffage Climatisation Gironde | ClimGO Maintenance',
    'DC.description': 'Entretien chauffage climatisation Gironde. Maintenance PAC, chaudière, climatiseur. Contrat entretien annuel. Intervention rapide.',
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