import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

// Métadonnées ultra-optimisées Gradignan COMPLETE
export const metadata: Metadata = {
  title: 'Chauffage Climatisation Gradignan 33170 | ClimGO',
  description: 'Expert chauffage climatisation Gradignan 33170. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',
  
  keywords: 'climatisation Gradignan, chauffage Gradignan, pompe à chaleur Gradignan, chauffagiste Gradignan, installateur climatisation Gradignan, artisan RGE Gradignan, installation PAC Gradignan, entretien climatisation Gradignan, dépannage chauffage Gradignan, chaudière Gradignan, maintenance Gradignan, réparation climatisation Gradignan, devis gratuit Gradignan, intervention urgence Gradignan, certificat RGE Gradignan, MaPrimeRénov Gradignan, aide financière chauffage Gradignan, prime CEE Gradignan, crédit impôt Gradignan, économie énergie Gradignan, rénovation énergétique Gradignan, audit énergétique Gradignan, expert chauffage 33170, climatisation 33170, chauffagiste 33170, devis gratuit Gradignan, intervention urgence Gradignan, spécialiste CVC Gradignan, entreprise chauffage Gradignan, installateur agréé Gradignan, technicien qualifié Gradignan, service après-vente Gradignan',
  
  // Open Graph optimisé COMPLET
  openGraph: {
    title: 'Chauffage Climatisation Gradignan 33170 | ClimGO',
    description: 'Expert chauffage climatisation Gradignan 33170. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',
    url: 'https://www.climgo.fr/villes/gradignan-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og/gradignan-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation Gradignan 33170 - ClimGO',
    }],
  },
  
  // Twitter Cards COMPLET
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Chauffage Climatisation Gradignan 33170 | ClimGO',
    description: 'Expert chauffage climatisation Gradignan 33170. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',
    images: ['https://www.climgo.fr/images/og/gradignan-chauffage-climatisation.jpg'],
  },
  
  // Métadonnées avancées COMPLÈTES
  other: {
    // Géolocalisation précise
    'geo.region': 'FR-33',
    'geo.placename': 'Gradignan',
    'geo.position': '44.8997;-0.7031',
    'ICBM': '44.8997, -0.7031',
    'geo.country': 'France',
    'geo.state': 'Nouvelle-Aquitaine',
    
    // Dublin Core COMPLET
    'DC.title': 'Chauffage Climatisation Gradignan 33170 | ClimGO',
    'DC.description': 'Expert chauffage climatisation Gradignan 33170. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',
    'DC.creator': 'ClimGO',
    'DC.publisher': 'ClimGO',
    'DC.language': 'fr-FR',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://www.climgo.fr/villes/gradignan-chauffage-climatisation',
    'DC.source': 'https://www.climgo.fr',
    'DC.coverage': 'Gradignan, Gironde, France',
    'DC.rights': '© 2025 ClimGO. Tous droits réservés.',
    
    // Données business locales COMPLÈTES
    'business.contact_data.locality': 'Gradignan',
    'business.contact_data.postal_code': '33170',
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
    canonical: 'https://www.climgo.fr/villes/gradignan-chauffage-climatisation',
  },
  
  verification: {
    google: 'Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g',
    other: {
      bing: 'VERIFICATION_CODE_TO_ADD'
    }
  }
};

export default function GradignanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd type="city" city="Gradignan" postalCode="33170" />
      {children}
    </>
  );
}