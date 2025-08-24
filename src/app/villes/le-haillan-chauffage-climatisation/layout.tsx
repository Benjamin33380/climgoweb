import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

// Métadonnées ultra-optimisées Le Haillan COMPLETE
export const metadata: Metadata = {
  title: 'Chauffage Climatisation Le Haillan 33185 | Expert Local #1 | ClimGO',
  description: 'Expert chauffage climatisation Le Haillan 33185. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié #1. Devis gratuit sous 24h.',
  
  keywords: 'climatisation Le Haillan, chauffage Le Haillan, pompe à chaleur Le Haillan, chauffagiste Le Haillan, installateur climatisation Le Haillan, artisan RGE Le Haillan, installation PAC Le Haillan, entretien climatisation Le Haillan, dépannage chauffage Le Haillan, chaudière Le Haillan, maintenance Le Haillan, réparation climatisation Le Haillan, devis gratuit Le Haillan, intervention urgence Le Haillan, certificat RGE Le Haillan, MaPrimeRénov Le Haillan, aide financière chauffage Le Haillan, prime CEE Le Haillan, crédit impôt Le Haillan, économie énergie Le Haillan, rénovation énergétique Le Haillan, audit énergétique Le Haillan, expert chauffage 33185, climatisation 33185, chauffagiste 33185, devis gratuit Le Haillan, intervention urgence Le Haillan, spécialiste CVC Le Haillan, entreprise chauffage Le Haillan, installateur agréé Le Haillan, technicien qualifié Le Haillan, service après-vente Le Haillan',
  
  // Open Graph optimisé COMPLET
  openGraph: {
    title: 'Chauffage Climatisation Le Haillan 33185 | Expert Local #1 | ClimGO',
    description: 'ClimGO, expert chauffage climatisation Le Haillan 33185. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié #1. Devis gratuit.',
    url: 'https://www.climgo.fr/villes/le-haillan-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og/le-haillan-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation Le Haillan 33185 - ClimGO Expert Local #1',
    }],
  },
  
  // Twitter Cards COMPLET
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Chauffage Climatisation Le Haillan 33185 | Expert Local #1 | ClimGO',
    description: 'Expert chauffage climatisation Le Haillan 33185. Installation PAC, dépannage urgent. Artisan RGE certifié #1.',
    images: ['https://www.climgo.fr/images/og/le-haillan-chauffage-climatisation.jpg'],
  },
  
  // Métadonnées avancées COMPLÈTES
  other: {
    // Géolocalisation précise
    'geo.region': 'FR-33',
    'geo.placename': 'Le Haillan',
    'geo.position': '44.8997;-0.7031',
    'ICBM': '44.8997, -0.7031',
    'geo.country': 'France',
    'geo.state': 'Nouvelle-Aquitaine',
    
    // Dublin Core COMPLET
    'DC.title': 'Chauffage Climatisation Le Haillan 33185 | ClimGO Expert Local #1',
    'DC.description': 'Expert chauffage climatisation Le Haillan 33185. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié #1.',
    'DC.creator': 'ClimGO',
    'DC.publisher': 'ClimGO',
    'DC.language': 'fr-FR',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://www.climgo.fr/villes/le-haillan-chauffage-climatisation',
    'DC.source': 'https://www.climgo.fr',
    'DC.coverage': 'Le Haillan, Gironde, France',
    'DC.rights': '© 2025 ClimGO. Tous droits réservés.',
    
    // Données business locales COMPLÈTES
    'business.contact_data.locality': 'Le Haillan',
    'business.contact_data.postal_code': '33185',
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
    canonical: 'https://www.climgo.fr/villes/le-haillan-chauffage-climatisation',
  },
  
  verification: {
    google: 'Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g',
    other: {
      bing: 'VERIFICATION_CODE_TO_ADD'
    }
  }
};

export default function LeHaillanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd type="city" city="Le Haillan" postalCode="33185" />
      {children}
    </>
  );
}