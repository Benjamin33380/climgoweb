import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

// Métadonnées ultra-optimisées Sanguinet COMPLETE
export const metadata: Metadata = {
  title: 'Chauffage Climatisation Sanguinet 40460 | Expert Local | ClimGO',
  description: 'Expert chauffage climatisation Sanguinet 40460. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié. Devis gratuit sous 24h.',
  
  keywords: 'climatisation Sanguinet, chauffage Sanguinet, pompe à chaleur Sanguinet, chauffagiste Sanguinet, installateur climatisation Sanguinet, artisan RGE Sanguinet, installation PAC Sanguinet, entretien climatisation Sanguinet, dépannage chauffage Sanguinet, chaudière Sanguinet, maintenance Sanguinet, réparation climatisation Sanguinet, devis gratuit Sanguinet, intervention urgence Sanguinet, certificat RGE Sanguinet, MaPrimeRénov Sanguinet, aide financière chauffage Sanguinet, prime CEE Sanguinet, crédit impôt Sanguinet, économie énergie Sanguinet, rénovation énergétique Sanguinet, audit énergétique Sanguinet, expert chauffage 40460, climatisation 40460, chauffagiste 40460, devis gratuit Sanguinet, intervention urgence Sanguinet, spécialiste CVC Sanguinet, entreprise chauffage Sanguinet, installateur agréé Sanguinet, technicien qualifié Sanguinet, service après-vente Sanguinet',
  
  // Open Graph optimisé COMPLET
  openGraph: {
    title: 'Chauffage Climatisation Sanguinet 40460 | Expert Local | ClimGO',
    description: 'ClimGO, expert chauffage climatisation Sanguinet 40460. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié. Devis gratuit.',
    url: 'https://www.climgo.fr/villes/sanguinet-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og/sanguinet-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation Sanguinet 40460 - ClimGO Expert Local',
    }],
  },
  
  // Twitter Cards COMPLET
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Chauffage Climatisation Sanguinet 40460 | Expert Local | ClimGO',
    description: 'Expert chauffage climatisation Sanguinet 40460. Installation PAC, dépannage urgent. Artisan RGE certifié.',
    images: ['https://www.climgo.fr/images/og/sanguinet-chauffage-climatisation.jpg'],
  },
  
  // Métadonnées avancées COMPLÈTES
  other: {
    // Géolocalisation précise
    'geo.region': 'FR-33',
    'geo.placename': 'Sanguinet',
    'geo.position': '44.8997;-0.7031',
    'ICBM': '44.8997, -0.7031',
    'geo.country': 'France',
    'geo.state': 'Nouvelle-Aquitaine',
    
    // Dublin Core COMPLET
    'DC.title': 'Chauffage Climatisation Sanguinet 40460 | ClimGO Expert Local',
    'DC.description': 'Expert chauffage climatisation Sanguinet 40460. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié.',
    'DC.creator': 'ClimGO',
    'DC.publisher': 'ClimGO',
    'DC.language': 'fr-FR',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://www.climgo.fr/villes/sanguinet-chauffage-climatisation',
    'DC.source': 'https://www.climgo.fr',
    'DC.coverage': 'Sanguinet, Gironde, France',
    'DC.rights': '© 2025 ClimGO. Tous droits réservés.',
    
    // Données business locales COMPLÈTES
    'business.contact_data.locality': 'Sanguinet',
    'business.contact_data.postal_code': '40460',
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
    canonical: 'https://www.climgo.fr/villes/sanguinet-chauffage-climatisation',
  },
  
  verification: {
    google: 'Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g',
    other: {
      bing: 'VERIFICATION_CODE_TO_ADD'
    }
  }
};

export default function SanguinetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd type="city" city="Sanguinet" postalCode="40460" />
      {children}
    </>
  );
}