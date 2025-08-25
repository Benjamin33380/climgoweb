import { Metadata } from 'next';

// Métadonnées ultra-optimisées Gujan-Mestras COMPLETE
export const metadata: Metadata = {
  title: 'Chauffage Climatisation Gujan-Mestras 33260 | ClimGO',
  description: 'Expert chauffage climatisation Gujan-Mestras 33260. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',
  
  keywords: 'climatisation Gujan-Mestras, chauffage Gujan-Mestras, pompe à chaleur Gujan-Mestras, chauffagiste Gujan-Mestras, installateur climatisation Gujan-Mestras, artisan RGE Gujan-Mestras, installation PAC Gujan-Mestras, entretien climatisation Gujan-Mestras, dépannage chauffage Gujan-Mestras, chaudière Gujan-Mestras, maintenance Gujan-Mestras, réparation climatisation Gujan-Mestras, devis gratuit Gujan-Mestras, intervention urgence Gujan-Mestras, certificat RGE Gujan-Mestras, MaPrimeRénov Gujan-Mestras, aide financière chauffage Gujan-Mestras, prime CEE Gujan-Mestras, crédit impôt Gujan-Mestras, économie énergie Gujan-Mestras, rénovation énergétique Gujan-Mestras, audit énergétique Gujan-Mestras, expert chauffage 33260, climatisation 33260, chauffagiste 33260, devis gratuit Gujan-Mestras, intervention urgence Gujan-Mestras, spécialiste CVC Gujan-Mestras, entreprise chauffage Gujan-Mestras, installateur agréé Gujan-Mestras, technicien qualifié Gujan-Mestras, service après-vente Gujan-Mestras',
  
  // Open Graph optimisé COMPLET
  openGraph: {
    title: 'Chauffage Climatisation Gujan-Mestras 33260 | ClimGO',
    description: 'Expert chauffage climatisation Gujan-Mestras 33260. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',
    url: 'https://www.climgo.fr/villes/gujan-mestras-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og/gujan-mestras-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation Gujan-Mestras 33260 - ClimGO',
    }],
  },
  
  // Twitter Cards COMPLET
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Chauffage Climatisation Gujan-Mestras 33260 | ClimGO',
    description: 'Expert chauffage climatisation Gujan-Mestras 33260. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',
    images: ['https://www.climgo.fr/images/og/gujan-mestras-chauffage-climatisation.jpg'],
  },
  
  // Métadonnées avancées COMPLÈTES
  other: {
    // Géolocalisation précise
    'geo.region': 'FR-33',
    'geo.placename': 'Gujan-Mestras',
    'geo.position': '44.8997;-0.7031',
    'ICBM': '44.8997, -0.7031',
    'geo.country': 'France',
    'geo.state': 'Nouvelle-Aquitaine',
    
    // Dublin Core COMPLET
    'DC.title': 'Chauffage Climatisation Gujan-Mestras 33260 | ClimGO',
    'DC.description': 'Expert chauffage climatisation Gujan-Mestras 33260. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',
    'DC.creator': 'ClimGO',
    'DC.publisher': 'ClimGO',
    'DC.language': 'fr-FR',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://www.climgo.fr/villes/gujan-mestras-chauffage-climatisation',
    'DC.source': 'https://www.climgo.fr',
    'DC.coverage': 'Gujan-Mestras, Gironde, France',
    'DC.rights': '© 2025 ClimGO. Tous droits réservés.',
    
    // Données business locales COMPLÈTES
    'business.contact_data.locality': 'Gujan-Mestras',
    'business.contact_data.postal_code': '33260',
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
    canonical: 'https://www.climgo.fr/villes/gujan-mestras-chauffage-climatisation',
  },
  
  verification: {
    google: 'Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g',
    other: {
      bing: 'VERIFICATION_CODE_TO_ADD'
    }
  }
};

export default function GujanMestrasLayout({
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