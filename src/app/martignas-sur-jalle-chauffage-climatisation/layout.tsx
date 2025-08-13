import { Metadata } from 'next';

// Métadonnées ultra-optimisées Martignas-Sur-Jalle COMPLETE
export const metadata: Metadata = {
  title: 'Chauffage Climatisation Martignas-Sur-Jalle 33127 | ClimGO Expert Local',
  description: 'Expert chauffage climatisation Martignas-Sur-Jalle 33127. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié. Devis gratuit sous 24h.',
  
  keywords: 'climatisation gironde, chauffage gironde, pompe à chaleur gironde, chauffagiste bordeaux, installateur climatisation, artisan RGE, installation PAC air eau, entretien climatisation, dépannage chauffage, chaudière gaz condensation, plancher chauffant, radiateurs électriques, maintenance pompe à chaleur, réparation climatisation, devis gratuit, intervention urgence, certificat RGE, MaPrimeRénov, aide financière chauffage, prime CEE, crédit impôt, économie énergie, rénovation énergétique, audit énergétique, chauffage martignas-sur-jalle, climatisation martignas-sur-jalle, chauffagiste martignas-sur-jalle, pompe à chaleur martignas-sur-jalle, installation PAC martignas-sur-jalle, dépannage chauffage martignas-sur-jalle, entretien climatisation martignas-sur-jalle, artisan RGE martignas-sur-jalle, chaudière martignas-sur-jalle, maintenance martignas-sur-jalle, expert chauffage 33127, climatisation 33127, chauffagiste 33127, devis gratuit martignas-sur-jalle, intervention urgence martignas-sur-jalle, spécialiste CVC martignas-sur-jalle, entreprise chauffage martignas-sur-jalle, installateur agréé martignas-sur-jalle, technicien qualifié martignas-sur-jalle, service après-vente martignas-sur-jalle',
  
  // Open Graph optimisé COMPLET
  openGraph: {
    title: 'Chauffage Climatisation Martignas-Sur-Jalle 33127 | ClimGO Expert Local',
    description: 'ClimGO, expert chauffage climatisation Martignas-Sur-Jalle. Installation, dépannage, entretien PAC. Artisan RGE certifié. Devis gratuit.',
    url: 'https://climgo.fr/martignas-sur-jalle-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://climgo.fr/images/og-martignas-sur-jalle-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation Martignas-Sur-Jalle - ClimGO',
    }],
  },
  
  // Twitter Cards COMPLET
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Chauffage Climatisation Martignas-Sur-Jalle 33127 | ClimGO Expert Local',
    description: 'Expert chauffage climatisation Martignas-Sur-Jalle. Installation PAC, dépannage urgent. Artisan RGE certifié.',
    images: ['https://climgo.fr/images/twitter-martignas-sur-jalle-chauffage-climatisation.jpg'],
  },
  
  // Métadonnées avancées COMPLÈTES
  other: {
    // Géolocalisation précise
    'geo.region': 'FR-33',
    'geo.placename': 'Martignas-Sur-Jalle',
    'geo.position': '44.8431;-0.7831',
    'ICBM': '44.8431, -0.7831',
    'geo.country': 'France',
    'geo.state': 'Nouvelle-Aquitaine',
    
    // Dublin Core COMPLET
    'DC.title': 'Chauffage Climatisation Martignas-Sur-Jalle 33127 | ClimGO Expert Local',
    'DC.description': 'Expert chauffage climatisation Martignas-Sur-Jalle 33127. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié.',
    'DC.creator': 'ClimGO',
    'DC.publisher': 'ClimGO',
    'DC.language': 'fr-FR',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://climgo.fr/martignas-sur-jalle-chauffage-climatisation',
    'DC.source': 'https://climgo.fr',
    'DC.coverage': 'Martignas-Sur-Jalle, Gironde, France',
    'DC.rights': '© 2025 ClimGO. Tous droits réservés.',
    
    // Données business locales COMPLÈTES
    'business.contact_data.locality': 'Martignas-Sur-Jalle',
    'business.contact_data.postal_code': '33127',
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
    canonical: 'https://climgo.fr/martignas-sur-jalle-chauffage-climatisation',
  },
  
  verification: {
    google: 'VERIFICATION_CODE_TO_ADD',
    other: {
      bing: 'VERIFICATION_CODE_TO_ADD'
    }
  }
};

export default function MartignasSurJalleLayout({
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