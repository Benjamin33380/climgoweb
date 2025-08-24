import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

// Métadonnées ultra-optimisées Martillac COMPLETE
export const metadata: Metadata = {
  title: 'Chauffage Climatisation Martillac 33650 | ClimGO',
  description: 'Expert chauffage climatisation Martillac 33650. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',
  
  keywords: 'climatisation Martillac, chauffage Martillac, pompe à chaleur Martillac, chauffagiste Martillac, installateur climatisation Martillac, artisan RGE Martillac, installation PAC Martillac, entretien climatisation Martillac, dépannage chauffage Martillac, chaudière Martillac, maintenance Martillac, réparation climatisation Martillac, devis gratuit Martillac, intervention urgence Martillac, certificat RGE Martillac, MaPrimeRénov Martillac, aide financière chauffage Martillac, prime CEE Martillac, crédit impôt Martillac, économie énergie Martillac, rénovation énergétique Martillac, audit énergétique Martillac, expert chauffage 33650, climatisation 33650, chauffagiste 33650, devis gratuit Martillac, intervention urgence Martillac, spécialiste CVC Martillac, entreprise chauffage Martillac, installateur agréé Martillac, technicien qualifié Martillac, service après-vente Martillac',
  
  // Open Graph optimisé COMPLET
  openGraph: {
    title: 'Chauffage Climatisation Martillac 33650 | ClimGO',
    description: 'Expert chauffage climatisation Martillac 33650. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',
    url: 'https://www.climgo.fr/villes/martillac-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og/martillac-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation Martillac 33650 - ClimGO',
    }],
  },
  
  // Twitter Cards COMPLET
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Chauffage Climatisation Martillac 33650 | ClimGO',
    description: 'Expert chauffage climatisation Martillac 33650. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',
    images: ['https://www.climgo.fr/images/og/martillac-chauffage-climatisation.jpg'],
  },
  
  // Métadonnées avancées COMPLÈTES
  other: {
    // Géolocalisation précise
    'geo.region': 'FR-33',
    'geo.placename': 'Martillac',
    'geo.position': '44.8997;-0.7031',
    'ICBM': '44.8997, -0.7031',
    'geo.country': 'France',
    'geo.state': 'Nouvelle-Aquitaine',
    
    // Dublin Core COMPLET
    'DC.title': 'Chauffage Climatisation Martillac 33650 | ClimGO',
    'DC.description': 'Expert chauffage climatisation Martillac 33650. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',
    'DC.creator': 'ClimGO',
    'DC.publisher': 'ClimGO',
    'DC.language': 'fr-FR',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://www.climgo.fr/villes/martillac-chauffage-climatisation',
    'DC.source': 'https://www.climgo.fr',
    'DC.coverage': 'Martillac, Gironde, France',
    'DC.rights': '© 2025 ClimGO. Tous droits réservés.',
    
    // Données business locales COMPLÈTES
    'business.contact_data.locality': 'Martillac',
    'business.contact_data.postal_code': '33650',
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
    canonical: 'https://www.climgo.fr/villes/martillac-chauffage-climatisation',
  },
  
  verification: {
    google: 'Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g',
    other: {
      bing: 'VERIFICATION_CODE_TO_ADD'
    }
  }
};

export default function MartillacLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd type="city" city="Martillac" postalCode="33650" />
      {children}
    </>
  );
}