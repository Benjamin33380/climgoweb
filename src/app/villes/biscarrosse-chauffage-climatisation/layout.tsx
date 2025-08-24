import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

// Métadonnées ultra-optimisées Biscarrosse COMPLETE
export const metadata: Metadata = {
  title: 'Chauffage Climatisation Biscarrosse 40600 | Expert Local | ClimGO',
  description: 'Expert chauffage climatisation Biscarrosse 40600. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié. Devis gratuit sous 24h.',
  
  keywords: 'climatisation Biscarrosse, chauffage Biscarrosse, pompe à chaleur Biscarrosse, chauffagiste Biscarrosse, installateur climatisation Biscarrosse, artisan RGE Biscarrosse, installation PAC Biscarrosse, entretien climatisation Biscarrosse, dépannage chauffage Biscarrosse, chaudière Biscarrosse, maintenance Biscarrosse, réparation climatisation Biscarrosse, devis gratuit Biscarrosse, intervention urgence Biscarrosse, certificat RGE Biscarrosse, MaPrimeRénov Biscarrosse, aide financière chauffage Biscarrosse, prime CEE Biscarrosse, crédit impôt Biscarrosse, économie énergie Biscarrosse, rénovation énergétique Biscarrosse, audit énergétique Biscarrosse, expert chauffage 40600, climatisation 40600, chauffagiste 40600, devis gratuit Biscarrosse, intervention urgence Biscarrosse, spécialiste CVC Biscarrosse, entreprise chauffage Biscarrosse, installateur agréé Biscarrosse, technicien qualifié Biscarrosse, service après-vente Biscarrosse',
  
  // Open Graph optimisé COMPLET
  openGraph: {
    title: 'Chauffage Climatisation Biscarrosse 40600 | Expert Local | ClimGO',
    description: 'ClimGO, expert chauffage climatisation Biscarrosse 40600. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié. Devis gratuit.',
    url: 'https://www.climgo.fr/villes/biscarrosse-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og/biscarrosse-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation Biscarrosse 40600 - ClimGO Expert Local',
    }],
  },
  
  // Twitter Cards COMPLET
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Chauffage Climatisation Biscarrosse 40600 | Expert Local | ClimGO',
    description: 'Expert chauffage climatisation Biscarrosse 40600. Installation PAC, dépannage urgent. Artisan RGE certifié.',
    images: ['https://www.climgo.fr/images/og/biscarrosse-chauffage-climatisation.jpg'],
  },
  
  // Métadonnées avancées COMPLÈTES
  other: {
    // Géolocalisation précise
    'geo.region': 'FR-33',
    'geo.placename': 'Biscarrosse',
    'geo.position': '44.8997;-0.7031',
    'ICBM': '44.8997, -0.7031',
    'geo.country': 'France',
    'geo.state': 'Nouvelle-Aquitaine',
    
    // Dublin Core COMPLET
    'DC.title': 'Chauffage Climatisation Biscarrosse 40600 | ClimGO Expert Local',
    'DC.description': 'Expert chauffage climatisation Biscarrosse 40600. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié.',
    'DC.creator': 'ClimGO',
    'DC.publisher': 'ClimGO',
    'DC.language': 'fr-FR',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://www.climgo.fr/villes/biscarrosse-chauffage-climatisation',
    'DC.source': 'https://www.climgo.fr',
    'DC.coverage': 'Biscarrosse, Gironde, France',
    'DC.rights': '© 2025 ClimGO. Tous droits réservés.',
    
    // Données business locales COMPLÈTES
    'business.contact_data.locality': 'Biscarrosse',
    'business.contact_data.postal_code': '40600',
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
    canonical: 'https://www.climgo.fr/villes/biscarrosse-chauffage-climatisation',
  },
  
  verification: {
    google: 'Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g',
    other: {
      bing: 'VERIFICATION_CODE_TO_ADD'
    }
  }
};

export default function BiscarrosseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd type="city" city="Biscarrosse" postalCode="40600" />
      {children}
    </>
  );
}