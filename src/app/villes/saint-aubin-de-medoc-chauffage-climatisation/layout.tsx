import { Metadata } from 'next';

// Métadonnées ultra-optimisées Saint-Aubin-De-Medoc COMPLETE
export const metadata: Metadata = {
  title: 'Chauffage Climatisation Saint-Aubin-De-Medoc 33160 | Expert Local',
  description: 'Expert chauffage climatisation Saint-Aubin-De-Medoc 33160. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié. Devis gratuit sous 24h.',
  
  keywords: 'climatisation gironde, chauffage gironde, pompe à chaleur gironde, chauffagiste bordeaux, installateur climatisation, artisan RGE, installation PAC air eau, entretien climatisation, dépannage chauffage, chaudière gaz condensation, plancher chauffant, radiateurs électriques, maintenance pompe à chaleur, réparation climatisation, devis gratuit, intervention urgence, certificat RGE, MaPrimeRénov, aide financière chauffage, prime CEE, crédit impôt, économie énergie, rénovation énergétique, audit énergétique, chauffage saint-aubin-de-médoc, climatisation saint-aubin-de-médoc, chauffagiste saint-aubin-de-médoc, pompe à chaleur saint-aubin-de-médoc, installation PAC saint-aubin-de-médoc, dépannage chauffage saint-aubin-de-médoc, entretien climatisation saint-aubin-de-médoc, artisan RGE saint-aubin-de-médoc, chaudière saint-aubin-de-médoc, maintenance saint-aubin-de-médoc, expert chauffage 33160, climatisation 33160, chauffagiste 33160, devis gratuit saint-aubin-de-médoc, intervention urgence saint-aubin-de-médoc, spécialiste CVC saint-aubin-de-médoc, entreprise chauffage saint-aubin-de-médoc, installateur agréé saint-aubin-de-médoc, technicien qualifié saint-aubin-de-médoc, service après-vente saint-aubin-de-médoc',
  
  // Open Graph optimisé COMPLET
  openGraph: {
    title: 'Chauffage Climatisation Saint-Aubin-De-Medoc 33160 | Expert Local',
    description: 'ClimGO, expert chauffage climatisation Saint-Aubin-De-Medoc. Installation, dépannage, entretien PAC. Artisan RGE certifié. Devis gratuit.',
    url: 'https://climgo.fr/saint-aubin-de-medoc-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://climgo.fr/images/og-saint-aubin-de-medoc-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation Saint-Aubin-De-Medoc - ClimGO',
    }],
  },
  
  // Twitter Cards COMPLET
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Chauffage Climatisation Saint-Aubin-De-Medoc 33160 | Expert Local',
    description: 'Expert chauffage climatisation Saint-Aubin-De-Medoc. Installation PAC, dépannage urgent. Artisan RGE certifié.',
    images: ['https://climgo.fr/images/twitter-saint-aubin-de-medoc-chauffage-climatisation.jpg'],
  },
  
  // Métadonnées avancées COMPLÈTES
  other: {
    // Géolocalisation précise
    'geo.region': 'FR-33',
    'geo.placename': 'Saint-Aubin-De-Medoc',
    'geo.position': '44.8997;-0.7031',
    'ICBM': '44.8997, -0.7031',
    'geo.country': 'France',
    'geo.state': 'Nouvelle-Aquitaine',
    
    // Dublin Core COMPLET
    'DC.title': 'Chauffage Climatisation Saint-Aubin-De-Medoc 33160 | ClimGO Expert Local',
    'DC.description': 'Expert chauffage climatisation Saint-Aubin-De-Medoc 33160. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié.',
    'DC.creator': 'ClimGO',
    'DC.publisher': 'ClimGO',
    'DC.language': 'fr-FR',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://climgo.fr/saint-aubin-de-medoc-chauffage-climatisation',
    'DC.source': 'https://climgo.fr',
    'DC.coverage': 'Saint-Aubin-De-Medoc, Gironde, France',
    'DC.rights': '© 2025 ClimGO. Tous droits réservés.',
    
    // Données business locales COMPLÈTES
    'business.contact_data.locality': 'Saint-Aubin-De-Medoc',
    'business.contact_data.postal_code': '33160',
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
    canonical: 'https://climgo.fr/saint-aubin-de-medoc-chauffage-climatisation',
  },
  
  verification: {
    google: 'VERIFICATION_CODE_TO_ADD',
    other: {
      bing: 'VERIFICATION_CODE_TO_ADD'
    }
  }
};

export default function SaintAubinDeMedocLayout({
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