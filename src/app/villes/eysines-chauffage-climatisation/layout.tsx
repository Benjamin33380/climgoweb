import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

// Métadonnées ultra-optimisées Eysines COMPLETE
export const metadata: Metadata = {
  title: 'Chauffage Climatisation Eysines 33320 | Expert Local | ClimGO',
  description: 'Expert chauffage climatisation Eysines 33320. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié. Devis gratuit sous 24h.',
  
  keywords: 'climatisation Eysines, chauffage Eysines, pompe à chaleur Eysines, chauffagiste Eysines, installateur climatisation Eysines, artisan RGE Eysines, installation PAC Eysines, entretien climatisation Eysines, dépannage chauffage Eysines, chaudière Eysines, maintenance Eysines, réparation climatisation Eysines, devis gratuit Eysines, intervention urgence Eysines, certificat RGE Eysines, MaPrimeRénov Eysines, aide financière chauffage Eysines, prime CEE Eysines, crédit impôt Eysines, économie énergie Eysines, rénovation énergétique Eysines, audit énergétique Eysines, expert chauffage 33320, climatisation 33320, chauffagiste 33320, devis gratuit Eysines, intervention urgence Eysines, spécialiste CVC Eysines, entreprise chauffage Eysines, installateur agréé Eysines, technicien qualifié Eysines, service après-vente Eysines',
  
  // Open Graph optimisé COMPLET
  openGraph: {
    title: 'Chauffage Climatisation Eysines 33320 | Expert Local | ClimGO',
    description: 'ClimGO, expert chauffage climatisation Eysines 33320. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié. Devis gratuit.',
    url: 'https://www.climgo.fr/villes/eysines-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og/eysines-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation Eysines 33320 - ClimGO Expert Local',
    }],
  },
  
  // Twitter Cards COMPLET
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Chauffage Climatisation Eysines 33320 | Expert Local | ClimGO',
    description: 'Expert chauffage climatisation Eysines 33320. Installation PAC, dépannage urgent. Artisan RGE certifié.',
    images: ['https://www.climgo.fr/images/og/eysines-chauffage-climatisation.jpg'],
  },
  
  // Métadonnées avancées COMPLÈTES
  other: {
    // Géolocalisation précise
    'geo.region': 'FR-33',
    'geo.placename': 'Eysines',
    'geo.position': '44.8997;-0.7031',
    'ICBM': '44.8997, -0.7031',
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
    'DC.identifier': 'https://www.climgo.fr/villes/eysines-chauffage-climatisation',
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
    canonical: 'https://www.climgo.fr/villes/eysines-chauffage-climatisation',
  },
  
  verification: {
    google: 'Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g',
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
      <JsonLd type="city" city="Eysines" postalCode="33320" />
      {children}
    </>
  );
}