import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

// Métadonnées ultra-optimisées Talence COMPLETE
export const metadata: Metadata = {
  title: 'Chauffage Climatisation Talence 33400 | Expert Local | ClimGO',
  description: 'Expert chauffage climatisation Talence 33400. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié. Devis gratuit sous 24h.',
  
  keywords: 'climatisation Talence, chauffage Talence, pompe à chaleur Talence, chauffagiste Talence, installateur climatisation Talence, artisan RGE Talence, installation PAC Talence, entretien climatisation Talence, dépannage chauffage Talence, chaudière Talence, maintenance Talence, réparation climatisation Talence, devis gratuit Talence, intervention urgence Talence, certificat RGE Talence, MaPrimeRénov Talence, aide financière chauffage Talence, prime CEE Talence, crédit impôt Talence, économie énergie Talence, rénovation énergétique Talence, audit énergétique Talence, expert chauffage 33400, climatisation 33400, chauffagiste 33400, devis gratuit Talence, intervention urgence Talence, spécialiste CVC Talence, entreprise chauffage Talence, installateur agréé Talence, technicien qualifié Talence, service après-vente Talence',
  
  // Open Graph optimisé COMPLET
  openGraph: {
    title: 'Chauffage Climatisation Talence 33400 | Expert Local | ClimGO',
    description: 'ClimGO, expert chauffage climatisation Talence 33400. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié. Devis gratuit.',
    url: 'https://www.climgo.fr/villes/talence-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og/talence-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation Talence 33400 - ClimGO Expert Local',
    }],
  },
  
  // Twitter Cards COMPLET
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Chauffage Climatisation Talence 33400 | Expert Local | ClimGO',
    description: 'Expert chauffage climatisation Talence 33400. Installation PAC, dépannage urgent. Artisan RGE certifié.',
    images: ['https://www.climgo.fr/images/og/talence-chauffage-climatisation.jpg'],
  },
  
  // Métadonnées avancées COMPLÈTES
  other: {
    // Géolocalisation précise
    'geo.region': 'FR-33',
    'geo.placename': 'Talence',
    'geo.position': '44.8997;-0.7031',
    'ICBM': '44.8997, -0.7031',
    'geo.country': 'France',
    'geo.state': 'Nouvelle-Aquitaine',
    
    // Dublin Core COMPLET
    'DC.title': 'Chauffage Climatisation Talence 33400 | ClimGO Expert Local',
    'DC.description': 'Expert chauffage climatisation Talence 33400. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié.',
    'DC.creator': 'ClimGO',
    'DC.publisher': 'ClimGO',
    'DC.language': 'fr-FR',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://www.climgo.fr/villes/talence-chauffage-climatisation',
    'DC.source': 'https://www.climgo.fr',
    'DC.coverage': 'Talence, Gironde, France',
    'DC.rights': '© 2025 ClimGO. Tous droits réservés.',
    
    // Données business locales COMPLÈTES
    'business.contact_data.locality': 'Talence',
    'business.contact_data.postal_code': '33400',
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
    canonical: 'https://www.climgo.fr/villes/talence-chauffage-climatisation',
  },
  
  verification: {
    google: 'Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g',
    other: {
      bing: 'VERIFICATION_CODE_TO_ADD'
    }
  }
};

export default function TalenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd type="city" city="Talence" postalCode="33400" />
      {children}
    </>
  );
}