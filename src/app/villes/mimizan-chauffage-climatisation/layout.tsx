import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

// Métadonnées ultra-optimisées Mimizan COMPLETE
export const metadata: Metadata = {
  title: 'Chauffage Climatisation Mimizan 40200 | Expert Local #1 | ClimGO',
  description: 'Expert chauffage climatisation Mimizan 40200. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié #1. Devis gratuit sous 24h.',
  
  keywords: 'climatisation Mimizan, chauffage Mimizan, pompe à chaleur Mimizan, chauffagiste Mimizan, installateur climatisation Mimizan, artisan RGE Mimizan, installation PAC Mimizan, entretien climatisation Mimizan, dépannage chauffage Mimizan, chaudière Mimizan, maintenance Mimizan, réparation climatisation Mimizan, devis gratuit Mimizan, intervention urgence Mimizan, certificat RGE Mimizan, MaPrimeRénov Mimizan, aide financière chauffage Mimizan, prime CEE Mimizan, crédit impôt Mimizan, économie énergie Mimizan, rénovation énergétique Mimizan, audit énergétique Mimizan, expert chauffage 40200, climatisation 40200, chauffagiste 40200, devis gratuit Mimizan, intervention urgence Mimizan, spécialiste CVC Mimizan, entreprise chauffage Mimizan, installateur agréé Mimizan, technicien qualifié Mimizan, service après-vente Mimizan',
  
  // Open Graph optimisé COMPLET
  openGraph: {
    title: 'Chauffage Climatisation Mimizan 40200 | Expert Local #1 | ClimGO',
    description: 'ClimGO, expert chauffage climatisation Mimizan 40200. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié #1. Devis gratuit.',
    url: 'https://www.climgo.fr/villes/mimizan-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og/mimizan-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation Mimizan 40200 - ClimGO Expert Local #1',
    }],
  },
  
  // Twitter Cards COMPLET
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Chauffage Climatisation Mimizan 40200 | Expert Local #1 | ClimGO',
    description: 'Expert chauffage climatisation Mimizan 40200. Installation PAC, dépannage urgent. Artisan RGE certifié #1.',
    images: ['https://www.climgo.fr/images/og/mimizan-chauffage-climatisation.jpg'],
  },
  
  // Métadonnées avancées COMPLÈTES
  other: {
    // Géolocalisation précise
    'geo.region': 'FR-33',
    'geo.placename': 'Mimizan',
    'geo.position': '44.8997;-0.7031',
    'ICBM': '44.8997, -0.7031',
    'geo.country': 'France',
    'geo.state': 'Nouvelle-Aquitaine',
    
    // Dublin Core COMPLET
    'DC.title': 'Chauffage Climatisation Mimizan 40200 | ClimGO Expert Local #1',
    'DC.description': 'Expert chauffage climatisation Mimizan 40200. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié #1.',
    'DC.creator': 'ClimGO',
    'DC.publisher': 'ClimGO',
    'DC.language': 'fr-FR',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://www.climgo.fr/villes/mimizan-chauffage-climatisation',
    'DC.source': 'https://www.climgo.fr',
    'DC.coverage': 'Mimizan, Gironde, France',
    'DC.rights': '© 2025 ClimGO. Tous droits réservés.',
    
    // Données business locales COMPLÈTES
    'business.contact_data.locality': 'Mimizan',
    'business.contact_data.postal_code': '40200',
    'business.contact_data.phone_number': '+33766460008',
    'business.contact_data.website': 'https://www.climgo.fr',
    'business.contact_data.email': 'contact@climgo.fr',
    
    // Signaux SEO local AVANCÉS
    'rating': '4.8',
    'priceRange': '€€',
    'audience': 'Particuliers et Professionnels',
    'category': 'Chauffage, Climatisation, Pompe à chaleur',
    'serviceType': 'Installation, Dépannage, Entretien',
    
    // Référencement avancé
    'revisit-after': '1 day',
    'robots': 'index,follow,noimageindex,max-video-preview:-1,max-image-preview:large,max-snippet:-1',
    'googlebot': 'index,follow,max-video-preview:-1,max-image-preview:large,max-snippet:-1',
    
    // Vérifications
    'google-site-verification': 'Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g',
    'bing-site-verification': 'VERIFICATION_CODE_TO_ADD'
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
  },
  
  alternates: {
    canonical: 'https://www.climgo.fr/villes/mimizan-chauffage-climatisation',
  },
  
  verification: {
    google: 'Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g',
    other: {
      bing: 'VERIFICATION_CODE_TO_ADD'
    }
  }
};

export default function MimizanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd type="city" city="Mimizan" postalCode="40200" />
      {children}
    </>
  );
}