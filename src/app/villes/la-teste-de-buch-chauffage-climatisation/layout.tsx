import { Metadata } from 'next';

// Métadonnées ultra-optimisées La-Teste-De-Buch COMPLETE
export const metadata: Metadata = {
  title: 'Chauffage Climatisation La-Teste-De-Buch 33260 | ClimGO Expert Local',
  description: 'Expert chauffage climatisation La-Teste-De-Buch 33260. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié. Devis gratuit sous 24h.',
  
  keywords: 'climatisation gironde, chauffage gironde, pompe à chaleur gironde, chauffagiste bordeaux, installateur climatisation, artisan RGE, installation PAC air eau, entretien climatisation, dépannage chauffage, chaudière gaz condensation, plancher chauffant, radiateurs électriques, maintenance pompe à chaleur, réparation climatisation, devis gratuit, intervention urgence, certificat RGE, MaPrimeRénov, aide financière chauffage, prime CEE, crédit impôt, économie énergie, rénovation énergétique, audit énergétique, chauffage la teste-de-buch, climatisation la teste-de-buch, chauffagiste la teste-de-buch, pompe à chaleur la teste-de-buch, installation PAC la teste-de-buch, dépannage chauffage la teste-de-buch, entretien climatisation la teste-de-buch, artisan RGE la teste-de-buch, chaudière la teste-de-buch, maintenance la teste-de-buch, expert chauffage 33260, climatisation 33260, chauffagiste 33260, devis gratuit la teste-de-buch, intervention urgence la teste-de-buch, spécialiste CVC la teste-de-buch, entreprise chauffage la teste-de-buch, installateur agréé la teste-de-buch, technicien qualifié la teste-de-buch, service après-vente la teste-de-buch',
  
  // Open Graph optimisé COMPLET
  openGraph: {
    title: 'Chauffage Climatisation La-Teste-De-Buch 33260 | ClimGO Expert Local',
    description: 'ClimGO, expert chauffage climatisation La-Teste-De-Buch. Installation, dépannage, entretien PAC. Artisan RGE certifié. Devis gratuit.',
    url: 'https://www.climgo.fr/la-teste-de-buch-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og-la-teste-de-buch-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation La-Teste-De-Buch - ClimGO',
    }],
  },
  
  // Twitter Cards COMPLET
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Chauffage Climatisation La-Teste-De-Buch 33260 | ClimGO Expert Local',
    description: 'Expert chauffage climatisation La-Teste-De-Buch. Installation PAC, dépannage urgent. Artisan RGE certifié.',
    images: ['https://www.climgo.fr/images/twitter-la-teste-de-buch-chauffage-climatisation.jpg'],
  },
  
  // Métadonnées avancées COMPLÈTES
  other: {
    // Géolocalisation précise
    'geo.region': 'FR-33',
    'geo.placename': 'La-Teste-De-Buch',
    'geo.position': '44.6307;-1.1459',
    'ICBM': '44.6307, -1.1459',
    'geo.country': 'France',
    'geo.state': 'Nouvelle-Aquitaine',
    
    // Dublin Core COMPLET
    'DC.title': 'Chauffage Climatisation La-Teste-De-Buch 33260 | ClimGO Expert Local',
    'DC.description': 'Expert chauffage climatisation La-Teste-De-Buch 33260. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié.',
    'DC.creator': 'ClimGO',
    'DC.publisher': 'ClimGO',
    'DC.language': 'fr-FR',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://www.climgo.fr/la-teste-de-buch-chauffage-climatisation',
    'DC.source': 'https://www.climgo.fr',
    'DC.coverage': 'La-Teste-De-Buch, Gironde, France',
    'DC.rights': '© 2025 ClimGO. Tous droits réservés.',
    
    // Données business locales COMPLÈTES
    'business.contact_data.locality': 'La-Teste-De-Buch',
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
    canonical: 'https://www.climgo.fr/la-teste-de-buch-chauffage-climatisation',
  },
  
  verification: {
    google: 'VERIFICATION_CODE_TO_ADD',
    other: {
      bing: 'VERIFICATION_CODE_TO_ADD'
    }
  }
};

export default function LaTesteDeBuchLayout({
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