import { Metadata } from 'next';

// Métadonnées ultra-optimisées Le-Bouscat COMPLETE
export const metadata: Metadata = {
  title: 'Chauffage Climatisation Le-Bouscat 33110 | ClimGO Expert Local',
  description: 'Expert chauffage climatisation Le-Bouscat 33110. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié. Devis gratuit sous 24h.',
  
  keywords: 'climatisation gironde, chauffage gironde, pompe à chaleur gironde, chauffagiste bordeaux, installateur climatisation, artisan RGE, installation PAC air eau, entretien climatisation, dépannage chauffage, chaudière gaz condensation, plancher chauffant, radiateurs électriques, maintenance pompe à chaleur, réparation climatisation, devis gratuit, intervention urgence, certificat RGE, MaPrimeRénov, aide financière chauffage, prime CEE, crédit impôt, économie énergie, rénovation énergétique, audit énergétique, chauffage le bouscat, climatisation le bouscat, chauffagiste le bouscat, pompe à chaleur le bouscat, installation PAC le bouscat, dépannage chauffage le bouscat, entretien climatisation le bouscat, artisan RGE le bouscat, chaudière le bouscat, maintenance le bouscat, expert chauffage 33110, climatisation 33110, chauffagiste 33110, devis gratuit le bouscat, intervention urgence le bouscat, spécialiste CVC le bouscat, entreprise chauffage le bouscat, installateur agréé le bouscat, technicien qualifié le bouscat, service après-vente le bouscat',
  
  // Open Graph optimisé COMPLET
  openGraph: {
    title: 'Chauffage Climatisation Le-Bouscat 33110 | ClimGO Expert Local',
    description: 'ClimGO, expert chauffage climatisation Le-Bouscat. Installation, dépannage, entretien PAC. Artisan RGE certifié. Devis gratuit.',
    url: 'https://climgo.fr/le-bouscat-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://climgo.fr/images/og-le-bouscat-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation Le-Bouscat - ClimGO',
    }],
  },
  
  // Twitter Cards COMPLET
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Chauffage Climatisation Le-Bouscat 33110 | ClimGO Expert Local',
    description: 'Expert chauffage climatisation Le-Bouscat. Installation PAC, dépannage urgent. Artisan RGE certifié.',
    images: ['https://climgo.fr/images/twitter-le-bouscat-chauffage-climatisation.jpg'],
  },
  
  // Métadonnées avancées COMPLÈTES
  other: {
    // Géolocalisation précise
    'geo.region': 'FR-33',
    'geo.placename': 'Le-Bouscat',
    'geo.position': '44.8631;-0.6031',
    'ICBM': '44.8631, -0.6031',
    'geo.country': 'France',
    'geo.state': 'Nouvelle-Aquitaine',
    
    // Dublin Core COMPLET
    'DC.title': 'Chauffage Climatisation Le-Bouscat 33110 | ClimGO Expert Local',
    'DC.description': 'Expert chauffage climatisation Le-Bouscat 33110. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié.',
    'DC.creator': 'ClimGO',
    'DC.publisher': 'ClimGO',
    'DC.language': 'fr-FR',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://climgo.fr/le-bouscat-chauffage-climatisation',
    'DC.source': 'https://climgo.fr',
    'DC.coverage': 'Le-Bouscat, Gironde, France',
    'DC.rights': '© 2025 ClimGO. Tous droits réservés.',
    
    // Données business locales COMPLÈTES
    'business.contact_data.locality': 'Le-Bouscat',
    'business.contact_data.postal_code': '33110',
    'business.contact_data.phone_number': '+33766460008',
    'business.contact_data.website': 'https://climgo.fr',
    'business.contact_data.email': 'contact@climgo.fr',
    
    // Signaux SEO local AVANCÉS
    'rating': '4.8',
    'priceRange': '€€',
    'audience': 'Particuliers et Professionnels',
    'category': 'Chauffage, Climatisation, Pompe à chaleur',
    'serviceType': 'Installation, Dépannage, Entretien',
    
    // Référencement avancé
    'revisit-after': '7 days',
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
    canonical: 'https://climgo.fr/le-bouscat-chauffage-climatisation',
  },
  
  verification: {
    google: 'VERIFICATION_CODE_TO_ADD',
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