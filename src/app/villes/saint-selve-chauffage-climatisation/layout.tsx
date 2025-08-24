import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

// Métadonnées ultra-optimisées Saint-Selve COMPLETE
export const metadata: Metadata = {
  title: 'Chauffage Climatisation Saint-Selve 33650 | ClimGO',
  description: 'Expert chauffage climatisation Saint-Selve 33650. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',
  
  keywords: 'climatisation Saint-Selve, chauffage Saint-Selve, pompe à chaleur Saint-Selve, chauffagiste Saint-Selve, installateur climatisation Saint-Selve, artisan RGE Saint-Selve, installation PAC Saint-Selve, entretien climatisation Saint-Selve, dépannage chauffage Saint-Selve, chaudière Saint-Selve, maintenance Saint-Selve, réparation climatisation Saint-Selve, devis gratuit Saint-Selve, intervention urgence Saint-Selve, certificat RGE Saint-Selve, MaPrimeRénov Saint-Selve, aide financière chauffage Saint-Selve, prime CEE Saint-Selve, crédit impôt Saint-Selve, économie énergie Saint-Selve, rénovation énergétique Saint-Selve, audit énergétique Saint-Selve, expert chauffage 33650, climatisation 33650, chauffagiste 33650, devis gratuit Saint-Selve, intervention urgence Saint-Selve, spécialiste CVC Saint-Selve, entreprise chauffage Saint-Selve, installateur agréé Saint-Selve, technicien qualifié Saint-Selve, service après-vente Saint-Selve',
  
  // Open Graph optimisé COMPLET
  openGraph: {
    title: 'Chauffage Climatisation Saint-Selve 33650 | ClimGO',
    description: 'Expert chauffage climatisation Saint-Selve 33650. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',
    url: 'https://www.climgo.fr/villes/saint-selve-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og/saint-selve-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation Saint-Selve 33650 - ClimGO',
    }],
  },
  
  // Twitter Cards COMPLET
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Chauffage Climatisation Saint-Selve 33650 | ClimGO',
    description: 'Expert chauffage climatisation Saint-Selve 33650. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',
    images: ['https://www.climgo.fr/images/og/saint-selve-chauffage-climatisation.jpg'],
  },
  
  // Métadonnées avancées COMPLÈTES
  other: {
    // Géolocalisation précise
    'geo.region': 'FR-33',
    'geo.placename': 'Saint-Selve',
    'geo.position': '44.8997;-0.7031',
    'ICBM': '44.8997, -0.7031',
    'geo.country': 'France',
    'geo.state': 'Nouvelle-Aquitaine',
    
    // Dublin Core COMPLET
    'DC.title': 'Chauffage Climatisation Saint-Selve 33650 | ClimGO',
    'DC.description': 'Expert chauffage climatisation Saint-Selve 33650. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',
    'DC.creator': 'ClimGO',
    'DC.publisher': 'ClimGO',
    'DC.language': 'fr-FR',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://www.climgo.fr/villes/saint-selve-chauffage-climatisation',
    'DC.source': 'https://www.climgo.fr',
    'DC.coverage': 'Saint-Selve, Gironde, France',
    'DC.rights': '© 2025 ClimGO. Tous droits réservés.',
    
    // Données business locales COMPLÈTES
    'business.contact_data.locality': 'Saint-Selve',
    'business.contact_data.postal_code': '33650',
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
    canonical: 'https://www.climgo.fr/villes/saint-selve-chauffage-climatisation',
  },
  
  verification: {
    google: 'Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g',
    other: {
      bing: 'VERIFICATION_CODE_TO_ADD'
    }
  }
};

export default function SaintSelveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd type="city" city="Saint-Selve" postalCode="33650" />
      {children}
    </>
  );
}