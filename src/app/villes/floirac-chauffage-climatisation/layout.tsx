import { Metadata } from 'next';

// Métadonnées ultra-optimisées Floirac COMPLETE
export const metadata: Metadata = {
  title: 'Chauffage Climatisation Floirac 33270 | ClimGO Expert Local',
  description: 'Expert chauffage climatisation Floirac 33270. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié. Devis gratuit sous 24h.',
  
  keywords: 'climatisation gironde, chauffage gironde, pompe à chaleur gironde, chauffagiste bordeaux, installateur climatisation, artisan RGE, installation PAC air eau, entretien climatisation, dépannage chauffage, chaudière gaz condensation, plancher chauffant, radiateurs électriques, maintenance pompe à chaleur, réparation climatisation, devis gratuit, intervention urgence, certificat RGE, MaPrimeRénov, aide financière chauffage, prime CEE, crédit impôt, économie énergie, rénovation énergétique, audit énergétique, chauffage floirac, climatisation floirac, chauffagiste floirac, pompe à chaleur floirac, installation PAC floirac, dépannage chauffage floirac, entretien climatisation floirac, artisan RGE floirac, chaudière floirac, maintenance floirac, expert chauffage 33270, climatisation 33270, chauffagiste 33270, devis gratuit floirac, intervention urgence floirac, spécialiste CVC floirac, entreprise chauffage floirac, installateur agréé floirac, technicien qualifié floirac, service après-vente floirac',
  
  // Open Graph optimisé COMPLET
  openGraph: {
    title: 'Chauffage Climatisation Floirac 33270 | ClimGO Expert Local',
    description: 'ClimGO, expert chauffage climatisation Floirac. Installation, dépannage, entretien PAC. Artisan RGE certifié. Devis gratuit.',
    url: 'https://climgo.fr/floirac-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://climgo.fr/images/og-floirac-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation Floirac - ClimGO',
    }],
  },
  
  // Twitter Cards COMPLET
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Chauffage Climatisation Floirac 33270 | ClimGO Expert Local',
    description: 'Expert chauffage climatisation Floirac. Installation PAC, dépannage urgent. Artisan RGE certifié.',
    images: ['https://climgo.fr/images/twitter-floirac-chauffage-climatisation.jpg'],
  },
  
  // Métadonnées avancées COMPLÈTES
  other: {
    // Géolocalisation précise
    'geo.region': 'FR-33',
    'geo.placename': 'Floirac',
    'geo.position': '44.8364;-0.5164',
    'ICBM': '44.8364, -0.5164',
    'geo.country': 'France',
    'geo.state': 'Nouvelle-Aquitaine',
    
    // Dublin Core COMPLET
    'DC.title': 'Chauffage Climatisation Floirac 33270 | ClimGO Expert Local',
    'DC.description': 'Expert chauffage climatisation Floirac 33270. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié.',
    'DC.creator': 'ClimGO',
    'DC.publisher': 'ClimGO',
    'DC.language': 'fr-FR',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://climgo.fr/floirac-chauffage-climatisation',
    'DC.source': 'https://climgo.fr',
    'DC.coverage': 'Floirac, Gironde, France',
    'DC.rights': '© 2025 ClimGO. Tous droits réservés.',
    
    // Données business locales COMPLÈTES
    'business.contact_data.locality': 'Floirac',
    'business.contact_data.postal_code': '33270',
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
    canonical: 'https://climgo.fr/floirac-chauffage-climatisation',
  },
  
  verification: {
    google: 'VERIFICATION_CODE_TO_ADD',
    other: {
      bing: 'VERIFICATION_CODE_TO_ADD'
    }
  }
};

export default function FloiracLayout({
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