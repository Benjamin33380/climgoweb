import { Metadata } from 'next';

// Métadonnées ultra-optimisées Eysines COMPLETE
export const metadata: Metadata = {
  title: 'Chauffage Climatisation Eysines 33320 | ClimGO Expert Local',
  description: 'Expert chauffage climatisation Eysines 33320. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié. Devis gratuit sous 24h.',
  
  keywords: 'climatisation gironde, chauffage gironde, pompe à chaleur gironde, chauffagiste bordeaux, installateur climatisation, artisan RGE, installation PAC air eau, entretien climatisation, dépannage chauffage, chaudière gaz condensation, plancher chauffant, radiateurs électriques, maintenance pompe à chaleur, réparation climatisation, devis gratuit, intervention urgence, certificat RGE, MaPrimeRénov, aide financière chauffage, prime CEE, crédit impôt, économie énergie, rénovation énergétique, audit énergétique, chauffage eysines, climatisation eysines, chauffagiste eysines, pompe à chaleur eysines, installation PAC eysines, dépannage chauffage eysines, entretien climatisation eysines, artisan RGE eysines, chaudière eysines, maintenance eysines, expert chauffage 33320, climatisation 33320, chauffagiste 33320, devis gratuit eysines, intervention urgence eysines, spécialiste CVC eysines, entreprise chauffage eysines, installateur agréé eysines, technicien qualifié eysines, service après-vente eysines',
  
  // Open Graph optimisé COMPLET
  openGraph: {
    title: 'Chauffage Climatisation Eysines 33320 | ClimGO Expert Local',
    description: 'ClimGO, expert chauffage climatisation Eysines. Installation, dépannage, entretien PAC. Artisan RGE certifié. Devis gratuit.',
    url: 'https://www.climgo.fr/eysines-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og-eysines-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation Eysines - ClimGO',
    }],
  },
  
  // Twitter Cards COMPLET
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Chauffage Climatisation Eysines 33320 | ClimGO Expert Local',
    description: 'Expert chauffage climatisation Eysines. Installation PAC, dépannage urgent. Artisan RGE certifié.',
    images: ['https://www.climgo.fr/images/twitter-eysines-chauffage-climatisation.jpg'],
  },
  
  // Métadonnées avancées COMPLÈTES
  other: {
    // Géolocalisation précise
    'geo.region': 'FR-33',
    'geo.placename': 'Eysines',
    'geo.position': '44.8764;-0.6464',
    'ICBM': '44.8764, -0.6464',
    'geo.country': 'France',
    'geo.state': 'Nouvelle-Aquitaine',
    
    // Dublin Core COMPLET
    'DC.title': 'Chauffage Climatisation Eysines 33320 | ClimGO Expert Local',
    'DC.description': 'Expert chauffage climatisation Eysines 33320. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié.',
    'DC.creator': 'ClimGO',
    'DC.publisher': 'ClimGO',
    'DC.language': 'fr-FR',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://www.climgo.fr/eysines-chauffage-climatisation',
    'DC.source': 'https://www.climgo.fr',
    'DC.coverage': 'Eysines, Gironde, France',
    'DC.rights': '© 2025 ClimGO. Tous droits réservés.',
    
    // Données business locales COMPLÈTES
    'business.contact_data.locality': 'Eysines',
    'business.contact_data.postal_code': '33320',
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
    canonical: 'https://www.climgo.fr/eysines-chauffage-climatisation',
  },
  
  verification: {
    google: 'VERIFICATION_CODE_TO_ADD',
    other: {
      bing: 'VERIFICATION_CODE_TO_ADD'
    }
  }
};

export default function EysinesLayout({
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