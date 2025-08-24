import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

// Métadonnées ultra-optimisées Parentis-en-Born COMPLETE
export const metadata: Metadata = {
  title: 'Chauffage Climatisation Parentis-en-Born 40160 | Expert Local #1 | ClimGO',
  description: 'Expert chauffage climatisation Parentis-en-Born 40160. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié #1. Devis gratuit sous 24h.',
  
  keywords: 'climatisation Parentis-en-Born, chauffage Parentis-en-Born, pompe à chaleur Parentis-en-Born, chauffagiste Parentis-en-Born, installateur climatisation Parentis-en-Born, artisan RGE Parentis-en-Born, installation PAC Parentis-en-Born, entretien climatisation Parentis-en-Born, dépannage chauffage Parentis-en-Born, chaudière Parentis-en-Born, maintenance Parentis-en-Born, réparation climatisation Parentis-en-Born, devis gratuit Parentis-en-Born, intervention urgence Parentis-en-Born, certificat RGE Parentis-en-Born, MaPrimeRénov Parentis-en-Born, aide financière chauffage Parentis-en-Born, prime CEE Parentis-en-Born, crédit impôt Parentis-en-Born, économie énergie Parentis-en-Born, rénovation énergétique Parentis-en-Born, audit énergétique Parentis-en-Born, expert chauffage 40160, climatisation 40160, chauffagiste 40160, devis gratuit Parentis-en-Born, intervention urgence Parentis-en-Born, spécialiste CVC Parentis-en-Born, entreprise chauffage Parentis-en-Born, installateur agréé Parentis-en-Born, technicien qualifié Parentis-en-Born, service après-vente Parentis-en-Born',
  
  // Open Graph optimisé COMPLET
  openGraph: {
    title: 'Chauffage Climatisation Parentis-en-Born 40160 | Expert Local #1 | ClimGO',
    description: 'ClimGO, expert chauffage climatisation Parentis-en-Born 40160. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié #1. Devis gratuit.',
    url: 'https://www.climgo.fr/villes/parentis-en-born-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og/parentis-en-born-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation Parentis-en-Born 40160 - ClimGO Expert Local #1',
    }],
  },
  
  // Twitter Cards COMPLET
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Chauffage Climatisation Parentis-en-Born 40160 | Expert Local #1 | ClimGO',
    description: 'Expert chauffage climatisation Parentis-en-Born 40160. Installation PAC, dépannage urgent. Artisan RGE certifié #1.',
    images: ['https://www.climgo.fr/images/og/parentis-en-born-chauffage-climatisation.jpg'],
  },
  
  // Métadonnées avancées COMPLÈTES
  other: {
    // Géolocalisation précise
    'geo.region': 'FR-33',
    'geo.placename': 'Parentis-en-Born',
    'geo.position': '44.8997;-0.7031',
    'ICBM': '44.8997, -0.7031',
    'geo.country': 'France',
    'geo.state': 'Nouvelle-Aquitaine',
    
    // Dublin Core COMPLET
    'DC.title': 'Chauffage Climatisation Parentis-en-Born 40160 | ClimGO Expert Local #1',
    'DC.description': 'Expert chauffage climatisation Parentis-en-Born 40160. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié #1.',
    'DC.creator': 'ClimGO',
    'DC.publisher': 'ClimGO',
    'DC.language': 'fr-FR',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://www.climgo.fr/villes/parentis-en-born-chauffage-climatisation',
    'DC.source': 'https://www.climgo.fr',
    'DC.coverage': 'Parentis-en-Born, Gironde, France',
    'DC.rights': '© 2025 ClimGO. Tous droits réservés.',
    
    // Données business locales COMPLÈTES
    'business.contact_data.locality': 'Parentis-en-Born',
    'business.contact_data.postal_code': '40160',
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
    canonical: 'https://www.climgo.fr/villes/parentis-en-born-chauffage-climatisation',
  },
  
  verification: {
    google: 'Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g',
    other: {
      bing: 'VERIFICATION_CODE_TO_ADD'
    }
  }
};

export default function ParentisenBornLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd type="city" city="Parentis-en-Born" postalCode="40160" />
      {children}
    </>
  );
}