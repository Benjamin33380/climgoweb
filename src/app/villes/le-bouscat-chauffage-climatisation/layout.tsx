import { Metadata } from 'next';

// Métadonnées ultra-optimisées Le Bouscat COMPLETE
export const metadata: Metadata = {
  title: 'Chauffage Climatisation Le Bouscat 33110 | ClimGO',
  description: 'Expert chauffage climatisation Le Bouscat 33110. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',
  
  keywords: 'climatisation Le Bouscat, chauffage Le Bouscat, pompe à chaleur Le Bouscat, chauffagiste Le Bouscat, installateur climatisation Le Bouscat, artisan RGE Le Bouscat, installation PAC Le Bouscat, entretien climatisation Le Bouscat, dépannage chauffage Le Bouscat, chaudière Le Bouscat, maintenance Le Bouscat, réparation climatisation Le Bouscat, devis gratuit Le Bouscat, intervention urgence Le Bouscat, certificat RGE Le Bouscat, MaPrimeRénov Le Bouscat, aide financière chauffage Le Bouscat, prime CEE Le Bouscat, crédit impôt Le Bouscat, économie énergie Le Bouscat, rénovation énergétique Le Bouscat, audit énergétique Le Bouscat, expert chauffage 33110, climatisation 33110, chauffagiste 33110, devis gratuit Le Bouscat, intervention urgence Le Bouscat, spécialiste CVC Le Bouscat, entreprise chauffage Le Bouscat, installateur agréé Le Bouscat, technicien qualifié Le Bouscat, service après-vente Le Bouscat',
  
  // Open Graph optimisé COMPLET
  openGraph: {
    title: 'Chauffage Climatisation Le Bouscat 33110 | ClimGO',
    description: 'Expert chauffage climatisation Le Bouscat 33110. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',
    url: 'https://www.climgo.fr/villes/le-bouscat-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og/le-bouscat-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation Le Bouscat 33110 - ClimGO',
    }],
  },
  
  // Twitter Cards COMPLET
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Chauffage Climatisation Le Bouscat 33110 | ClimGO',
    description: 'Expert chauffage climatisation Le Bouscat 33110. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',
    images: ['https://www.climgo.fr/images/og/le-bouscat-chauffage-climatisation.jpg'],
  },
  
  // Métadonnées avancées COMPLÈTES
  other: {
    // Géolocalisation précise
    'geo.region': 'FR-33',
    'geo.placename': 'Le Bouscat',
    'geo.position': '44.8997;-0.7031',
    'ICBM': '44.8997, -0.7031',
    'geo.country': 'France',
    'geo.state': 'Nouvelle-Aquitaine',
    
    // Dublin Core COMPLET
    'DC.title': 'Chauffage Climatisation Le Bouscat 33110 | ClimGO',
    'DC.description': 'Expert chauffage climatisation Le Bouscat 33110. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',
    'DC.creator': 'ClimGO',
    'DC.publisher': 'ClimGO',
    'DC.language': 'fr-FR',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://www.climgo.fr/villes/le-bouscat-chauffage-climatisation',
    'DC.source': 'https://www.climgo.fr',
    'DC.coverage': 'Le Bouscat, Gironde, France',
    'DC.rights': '© 2025 ClimGO. Tous droits réservés.',
    
    // Données business locales COMPLÈTES
    'business.contact_data.locality': 'Le Bouscat',
    'business.contact_data.postal_code': '33110',
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
    canonical: 'https://www.climgo.fr/villes/le-bouscat-chauffage-climatisation',
  },
  
  verification: {
    google: 'Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g',
    other: {
      bing: 'VERIFICATION_CODE_TO_ADD'
    }
  }
};

export default function LeBouscatLayout({
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