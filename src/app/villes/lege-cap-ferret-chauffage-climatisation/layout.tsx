import { Metadata } from 'next';

// Métadonnées ultra-optimisées Lege-Cap-Ferret COMPLETE
export const metadata: Metadata = {
  title: 'Chauffage Climatisation Lege-Cap-Ferret 33950 | ClimGO',
  description: 'Expert chauffage climatisation Lege-Cap-Ferret 33950. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',
  
  keywords: 'climatisation Lege-Cap-Ferret, chauffage Lege-Cap-Ferret, pompe à chaleur Lege-Cap-Ferret, chauffagiste Lege-Cap-Ferret, installateur climatisation Lege-Cap-Ferret, artisan RGE Lege-Cap-Ferret, installation PAC Lege-Cap-Ferret, entretien climatisation Lege-Cap-Ferret, dépannage chauffage Lege-Cap-Ferret, chaudière Lege-Cap-Ferret, maintenance Lege-Cap-Ferret, réparation climatisation Lege-Cap-Ferret, devis gratuit Lege-Cap-Ferret, intervention urgence Lege-Cap-Ferret, certificat RGE Lege-Cap-Ferret, MaPrimeRénov Lege-Cap-Ferret, aide financière chauffage Lege-Cap-Ferret, prime CEE Lege-Cap-Ferret, crédit impôt Lege-Cap-Ferret, économie énergie Lege-Cap-Ferret, rénovation énergétique Lege-Cap-Ferret, audit énergétique Lege-Cap-Ferret, expert chauffage 33950, climatisation 33950, chauffagiste 33950, devis gratuit Lege-Cap-Ferret, intervention urgence Lege-Cap-Ferret, spécialiste CVC Lege-Cap-Ferret, entreprise chauffage Lege-Cap-Ferret, installateur agréé Lege-Cap-Ferret, technicien qualifié Lege-Cap-Ferret, service après-vente Lege-Cap-Ferret',
  
  // Open Graph optimisé COMPLET
  openGraph: {
    title: 'Chauffage Climatisation Lege-Cap-Ferret 33950 | ClimGO',
    description: 'Expert chauffage climatisation Lege-Cap-Ferret 33950. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',
    url: 'https://www.climgo.fr/villes/lege-cap-ferret-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og/lege-cap-ferret-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation Lege-Cap-Ferret 33950 - ClimGO',
    }],
  },
  
  // Twitter Cards COMPLET
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Chauffage Climatisation Lege-Cap-Ferret 33950 | ClimGO',
    description: 'Expert chauffage climatisation Lege-Cap-Ferret 33950. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',
    images: ['https://www.climgo.fr/images/og/lege-cap-ferret-chauffage-climatisation.jpg'],
  },
  
  // Métadonnées avancées COMPLÈTES
  other: {
    // Géolocalisation précise
    'geo.region': 'FR-33',
    'geo.placename': 'Lege-Cap-Ferret',
    'geo.position': '44.8997;-0.7031',
    'ICBM': '44.8997, -0.7031',
    'geo.country': 'France',
    'geo.state': 'Nouvelle-Aquitaine',
    
    // Dublin Core COMPLET
    'DC.title': 'Chauffage Climatisation Lege-Cap-Ferret 33950 | ClimGO',
    'DC.description': 'Expert chauffage climatisation Lege-Cap-Ferret 33950. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',
    'DC.creator': 'ClimGO',
    'DC.publisher': 'ClimGO',
    'DC.language': 'fr-FR',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://www.climgo.fr/villes/lege-cap-ferret-chauffage-climatisation',
    'DC.source': 'https://www.climgo.fr',
    'DC.coverage': 'Lege-Cap-Ferret, Gironde, France',
    'DC.rights': '© 2025 ClimGO. Tous droits réservés.',
    
    // Données business locales COMPLÈTES
    'business.contact_data.locality': 'Lege-Cap-Ferret',
    'business.contact_data.postal_code': '33950',
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
    canonical: 'https://www.climgo.fr/villes/lege-cap-ferret-chauffage-climatisation',
  },
  
  verification: {
    google: 'Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g',
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