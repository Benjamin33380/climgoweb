import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

// Métadonnées ultra-optimisées Cestas COMPLETE
export const metadata: Metadata = {
  title: 'Chauffage Climatisation Cestas 33610 | ClimGO',
  description: 'Expert chauffage climatisation Cestas 33610. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',
  
  keywords: 'climatisation Cestas, chauffage Cestas, pompe à chaleur Cestas, chauffagiste Cestas, installateur climatisation Cestas, artisan RGE Cestas, installation PAC Cestas, entretien climatisation Cestas, dépannage chauffage Cestas, chaudière Cestas, maintenance Cestas, réparation climatisation Cestas, devis gratuit Cestas, intervention urgence Cestas, certificat RGE Cestas, MaPrimeRénov Cestas, aide financière chauffage Cestas, prime CEE Cestas, crédit impôt Cestas, économie énergie Cestas, rénovation énergétique Cestas, audit énergétique Cestas, expert chauffage 33610, climatisation 33610, chauffagiste 33610, devis gratuit Cestas, intervention urgence Cestas, spécialiste CVC Cestas, entreprise chauffage Cestas, installateur agréé Cestas, technicien qualifié Cestas, service après-vente Cestas',
  
  // Open Graph optimisé COMPLET
  openGraph: {
    title: 'Chauffage Climatisation Cestas 33610 | ClimGO',
    description: 'Expert chauffage climatisation Cestas 33610. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',
    url: 'https://www.climgo.fr/villes/cestas-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og/cestas-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation Cestas 33610 - ClimGO',
    }],
  },
  
  // Twitter Cards COMPLET
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Chauffage Climatisation Cestas 33610 | ClimGO',
    description: 'Expert chauffage climatisation Cestas 33610. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',
    images: ['https://www.climgo.fr/images/og/cestas-chauffage-climatisation.jpg'],
  },
  
  // Métadonnées avancées COMPLÈTES
  other: {
    // Géolocalisation précise
    'geo.region': 'FR-33',
    'geo.placename': 'Cestas',
    'geo.position': '44.8997;-0.7031',
    'ICBM': '44.8997, -0.7031',
    'geo.country': 'France',
    'geo.state': 'Nouvelle-Aquitaine',
    
    // Dublin Core COMPLET
    'DC.title': 'Chauffage Climatisation Cestas 33610 | ClimGO',
    'DC.description': 'Expert chauffage climatisation Cestas 33610. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',
    'DC.creator': 'ClimGO',
    'DC.publisher': 'ClimGO',
    'DC.language': 'fr-FR',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://www.climgo.fr/villes/cestas-chauffage-climatisation',
    'DC.source': 'https://www.climgo.fr',
    'DC.coverage': 'Cestas, Gironde, France',
    'DC.rights': '© 2025 ClimGO. Tous droits réservés.',
    
    // Données business locales COMPLÈTES
    'business.contact_data.locality': 'Cestas',
    'business.contact_data.postal_code': '33610',
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
    canonical: 'https://www.climgo.fr/villes/cestas-chauffage-climatisation',
  },
  
  verification: {
    google: 'Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g',
    other: {
      bing: 'VERIFICATION_CODE_TO_ADD'
    }
  }
};

export default function CestasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd type="city" city="Cestas" postalCode="33610" />
      {children}
    </>
  );
}