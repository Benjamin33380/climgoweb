import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

// Métadonnées ultra-optimisées Marcheprime COMPLETE
export const metadata: Metadata = {
  title: 'Chauffage Climatisation Marcheprime 33380 | Expert Local | ClimGO',
  description: 'Expert chauffage climatisation Marcheprime 33380. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié. Devis gratuit sous 24h.',
  
  keywords: 'climatisation Marcheprime, chauffage Marcheprime, pompe à chaleur Marcheprime, chauffagiste Marcheprime, installateur climatisation Marcheprime, artisan RGE Marcheprime, installation PAC Marcheprime, entretien climatisation Marcheprime, dépannage chauffage Marcheprime, chaudière Marcheprime, maintenance Marcheprime, réparation climatisation Marcheprime, devis gratuit Marcheprime, intervention urgence Marcheprime, certificat RGE Marcheprime, MaPrimeRénov Marcheprime, aide financière chauffage Marcheprime, prime CEE Marcheprime, crédit impôt Marcheprime, économie énergie Marcheprime, rénovation énergétique Marcheprime, audit énergétique Marcheprime, expert chauffage 33380, climatisation 33380, chauffagiste 33380, devis gratuit Marcheprime, intervention urgence Marcheprime, spécialiste CVC Marcheprime, entreprise chauffage Marcheprime, installateur agréé Marcheprime, technicien qualifié Marcheprime, service après-vente Marcheprime',
  
  // Open Graph optimisé COMPLET
  openGraph: {
    title: 'Chauffage Climatisation Marcheprime 33380 | Expert Local | ClimGO',
    description: 'ClimGO, expert chauffage climatisation Marcheprime 33380. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié. Devis gratuit.',
    url: 'https://www.climgo.fr/villes/marcheprime-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og/marcheprime-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation Marcheprime 33380 - ClimGO Expert Local',
    }],
  },
  
  // Twitter Cards COMPLET
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Chauffage Climatisation Marcheprime 33380 | Expert Local | ClimGO',
    description: 'Expert chauffage climatisation Marcheprime 33380. Installation PAC, dépannage urgent. Artisan RGE certifié.',
    images: ['https://www.climgo.fr/images/og/marcheprime-chauffage-climatisation.jpg'],
  },
  
  // Métadonnées avancées COMPLÈTES
  other: {
    // Géolocalisation précise
    'geo.region': 'FR-33',
    'geo.placename': 'Marcheprime',
    'geo.position': '44.8997;-0.7031',
    'ICBM': '44.8997, -0.7031',
    'geo.country': 'France',
    'geo.state': 'Nouvelle-Aquitaine',
    
    // Dublin Core COMPLET
    'DC.title': 'Chauffage Climatisation Marcheprime 33380 | ClimGO Expert Local',
    'DC.description': 'Expert chauffage climatisation Marcheprime 33380. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié.',
    'DC.creator': 'ClimGO',
    'DC.publisher': 'ClimGO',
    'DC.language': 'fr-FR',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://www.climgo.fr/villes/marcheprime-chauffage-climatisation',
    'DC.source': 'https://www.climgo.fr',
    'DC.coverage': 'Marcheprime, Gironde, France',
    'DC.rights': '© 2025 ClimGO. Tous droits réservés.',
    
    // Données business locales COMPLÈTES
    'business.contact_data.locality': 'Marcheprime',
    'business.contact_data.postal_code': '33380',
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
    canonical: 'https://www.climgo.fr/villes/marcheprime-chauffage-climatisation',
  },
  
  verification: {
    google: 'Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g',
    other: {
      bing: 'VERIFICATION_CODE_TO_ADD'
    }
  }
};

export default function MarcheprimeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd type="city" city="Marcheprime" postalCode="33380" />
      {children}
    </>
  );
}