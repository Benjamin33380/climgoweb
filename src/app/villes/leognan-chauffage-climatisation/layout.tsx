import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

// Métadonnées ultra-optimisées Leognan COMPLETE
export const metadata: Metadata = {
  title: 'Chauffage Climatisation Leognan 33850 | Expert Local #1 | ClimGO',
  description: 'Expert chauffage climatisation Leognan 33850. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié #1. Devis gratuit sous 24h.',
  
  keywords: 'climatisation Leognan, chauffage Leognan, pompe à chaleur Leognan, chauffagiste Leognan, installateur climatisation Leognan, artisan RGE Leognan, installation PAC Leognan, entretien climatisation Leognan, dépannage chauffage Leognan, chaudière Leognan, maintenance Leognan, réparation climatisation Leognan, devis gratuit Leognan, intervention urgence Leognan, certificat RGE Leognan, MaPrimeRénov Leognan, aide financière chauffage Leognan, prime CEE Leognan, crédit impôt Leognan, économie énergie Leognan, rénovation énergétique Leognan, audit énergétique Leognan, expert chauffage 33850, climatisation 33850, chauffagiste 33850, devis gratuit Leognan, intervention urgence Leognan, spécialiste CVC Leognan, entreprise chauffage Leognan, installateur agréé Leognan, technicien qualifié Leognan, service après-vente Leognan',
  
  // Open Graph optimisé COMPLET
  openGraph: {
    title: 'Chauffage Climatisation Leognan 33850 | Expert Local #1 | ClimGO',
    description: 'ClimGO, expert chauffage climatisation Leognan 33850. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié #1. Devis gratuit.',
    url: 'https://www.climgo.fr/villes/leognan-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og/leognan-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation Leognan 33850 - ClimGO Expert Local #1',
    }],
  },
  
  // Twitter Cards COMPLET
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Chauffage Climatisation Leognan 33850 | Expert Local #1 | ClimGO',
    description: 'Expert chauffage climatisation Leognan 33850. Installation PAC, dépannage urgent. Artisan RGE certifié #1.',
    images: ['https://www.climgo.fr/images/og/leognan-chauffage-climatisation.jpg'],
  },
  
  // Métadonnées avancées COMPLÈTES
  other: {
    // Géolocalisation précise
    'geo.region': 'FR-33',
    'geo.placename': 'Leognan',
    'geo.position': '44.8997;-0.7031',
    'ICBM': '44.8997, -0.7031',
    'geo.country': 'France',
    'geo.state': 'Nouvelle-Aquitaine',
    
    // Dublin Core COMPLET
    'DC.title': 'Chauffage Climatisation Leognan 33850 | ClimGO Expert Local #1',
    'DC.description': 'Expert chauffage climatisation Leognan 33850. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié #1.',
    'DC.creator': 'ClimGO',
    'DC.publisher': 'ClimGO',
    'DC.language': 'fr-FR',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://www.climgo.fr/villes/leognan-chauffage-climatisation',
    'DC.source': 'https://www.climgo.fr',
    'DC.coverage': 'Leognan, Gironde, France',
    'DC.rights': '© 2025 ClimGO. Tous droits réservés.',
    
    // Données business locales COMPLÈTES
    'business.contact_data.locality': 'Leognan',
    'business.contact_data.postal_code': '33850',
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
    canonical: 'https://www.climgo.fr/villes/leognan-chauffage-climatisation',
  },
  
  verification: {
    google: 'Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g',
    other: {
      bing: 'VERIFICATION_CODE_TO_ADD'
    }
  }
};

export default function LeognanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd type="city" city="Leognan" postalCode="33850" />
      {children}
    </>
  );
}