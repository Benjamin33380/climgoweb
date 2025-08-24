import { Metadata } from 'next';

// Métadonnées ultra-optimisées Lege-Cap-Ferret COMPLETE
export const metadata: Metadata = {
  title: 'Chauffage Climatisation Lege-Cap-Ferret 33950 | ClimGO Expert Local',
  description: 'Expert chauffage climatisation Lege-Cap-Ferret 33950. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié. Devis gratuit sous 24h.',
  
  keywords: 'climatisation gironde, chauffage gironde, pompe à chaleur gironde, chauffagiste bordeaux, installateur climatisation, artisan RGE, installation PAC air eau, entretien climatisation, dépannage chauffage, chaudière gaz condensation, plancher chauffant, radiateurs électriques, maintenance pompe à chaleur, réparation climatisation, devis gratuit, intervention urgence, certificat RGE, MaPrimeRénov, aide financière chauffage, prime CEE, crédit impôt, économie énergie, rénovation énergétique, audit énergétique, chauffage lège-cap-ferret, climatisation lège-cap-ferret, chauffagiste lège-cap-ferret, pompe à chaleur lège-cap-ferret, installation PAC lège-cap-ferret, dépannage chauffage lège-cap-ferret, entretien climatisation lège-cap-ferret, artisan RGE lège-cap-ferret, chaudière lège-cap-ferret, maintenance lège-cap-ferret, expert chauffage 33950, climatisation 33950, chauffagiste 33950, devis gratuit lège-cap-ferret, intervention urgence lège-cap-ferret, spécialiste CVC lège-cap-ferret, entreprise chauffage lège-cap-ferret, installateur agréé lège-cap-ferret, technicien qualifié lège-cap-ferret, service après-vente lège-cap-ferret',
  
  // Open Graph optimisé COMPLET
  openGraph: {
    title: 'Chauffage Climatisation Lege-Cap-Ferret 33950 | ClimGO Expert Local',
    description: 'ClimGO, expert chauffage climatisation Lege-Cap-Ferret. Installation, dépannage, entretien PAC. Artisan RGE certifié. Devis gratuit.',
    url: 'https://climgo.fr/villes/lege-cap-ferret-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://climgo.fr/images/og-lege-cap-ferret-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation Lege-Cap-Ferret - ClimGO',
    }],
  },
  
  // Twitter Cards COMPLET
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Chauffage Climatisation Lege-Cap-Ferret 33950 | ClimGO Expert Local',
    description: 'Expert chauffage climatisation Lege-Cap-Ferret. Installation PAC, dépannage urgent. Artisan RGE certifié.',
    images: ['https://climgo.fr/images/twitter-lege-cap-ferret-chauffage-climatisation.jpg'],
  },
  
  // Métadonnées avancées COMPLÈTES
  other: {
    // Géolocalisation précise
    'geo.region': 'FR-33',
    'geo.placename': 'Lege-Cap-Ferret',
    'geo.position': '44.7931;-1.2431',
    'ICBM': '44.7931, -1.2431',
    'geo.country': 'France',
    'geo.state': 'Nouvelle-Aquitaine',
    
    // Dublin Core COMPLET
    'DC.title': 'Chauffage Climatisation Lege-Cap-Ferret 33950 | ClimGO Expert Local',
    'DC.description': 'Expert chauffage climatisation Lege-Cap-Ferret 33950. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié.',
    'DC.creator': 'ClimGO',
    'DC.publisher': 'ClimGO',
    'DC.language': 'fr-FR',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://climgo.fr/villes/lege-cap-ferret-chauffage-climatisation',
    'DC.source': 'https://climgo.fr',
    'DC.coverage': 'Lege-Cap-Ferret, Gironde, France',
    'DC.rights': '© 2025 ClimGO. Tous droits réservés.',
    
    // Données business locales COMPLÈTES
    'business.contact_data.locality': 'Lege-Cap-Ferret',
    'business.contact_data.postal_code': '33950',
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
    canonical: 'https://climgo.fr/villes/lege-cap-ferret-chauffage-climatisation',
  },
  
  verification: {
    google: 'VERIFICATION_CODE_TO_ADD',
    other: {
      bing: 'VERIFICATION_CODE_TO_ADD'
    }
  }
};

export default function LegeCapFerretLayout({
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