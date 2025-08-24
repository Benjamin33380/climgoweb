import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

// Métadonnées ultra-optimisées Belin-Beliet COMPLETE
export const metadata: Metadata = {
  title: 'Chauffage Climatisation Belin-Beliet 33830 | Expert Local | ClimGO',
  description: 'Expert chauffage climatisation Belin-Beliet 33830. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié. Devis gratuit sous 24h.',
  
  keywords: 'climatisation Belin-Beliet, chauffage Belin-Beliet, pompe à chaleur Belin-Beliet, chauffagiste Belin-Beliet, installateur climatisation Belin-Beliet, artisan RGE Belin-Beliet, installation PAC Belin-Beliet, entretien climatisation Belin-Beliet, dépannage chauffage Belin-Beliet, chaudière Belin-Beliet, maintenance Belin-Beliet, réparation climatisation Belin-Beliet, devis gratuit Belin-Beliet, intervention urgence Belin-Beliet, certificat RGE Belin-Beliet, MaPrimeRénov Belin-Beliet, aide financière chauffage Belin-Beliet, prime CEE Belin-Beliet, crédit impôt Belin-Beliet, économie énergie Belin-Beliet, rénovation énergétique Belin-Beliet, audit énergétique Belin-Beliet, expert chauffage 33830, climatisation 33830, chauffagiste 33830, devis gratuit Belin-Beliet, intervention urgence Belin-Beliet, spécialiste CVC Belin-Beliet, entreprise chauffage Belin-Beliet, installateur agréé Belin-Beliet, technicien qualifié Belin-Beliet, service après-vente Belin-Beliet',
  
  // Open Graph optimisé COMPLET
  openGraph: {
    title: 'Chauffage Climatisation Belin-Beliet 33830 | Expert Local | ClimGO',
    description: 'ClimGO, expert chauffage climatisation Belin-Beliet 33830. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié. Devis gratuit.',
    url: 'https://www.climgo.fr/villes/belin-beliet-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og/belin-beliet-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation Belin-Beliet 33830 - ClimGO Expert Local',
    }],
  },
  
  // Twitter Cards COMPLET
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Chauffage Climatisation Belin-Beliet 33830 | Expert Local | ClimGO',
    description: 'Expert chauffage climatisation Belin-Beliet 33830. Installation PAC, dépannage urgent. Artisan RGE certifié.',
    images: ['https://www.climgo.fr/images/og/belin-beliet-chauffage-climatisation.jpg'],
  },
  
  // Métadonnées avancées COMPLÈTES
  other: {
    // Géolocalisation précise
    'geo.region': 'FR-33',
    'geo.placename': 'Belin-Beliet',
    'geo.position': '44.8997;-0.7031',
    'ICBM': '44.8997, -0.7031',
    'geo.country': 'France',
    'geo.state': 'Nouvelle-Aquitaine',
    
    // Dublin Core COMPLET
    'DC.title': 'Chauffage Climatisation Belin-Beliet 33830 | ClimGO Expert Local',
    'DC.description': 'Expert chauffage climatisation Belin-Beliet 33830. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié.',
    'DC.creator': 'ClimGO',
    'DC.publisher': 'ClimGO',
    'DC.language': 'fr-FR',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://www.climgo.fr/villes/belin-beliet-chauffage-climatisation',
    'DC.source': 'https://www.climgo.fr',
    'DC.coverage': 'Belin-Beliet, Gironde, France',
    'DC.rights': '© 2025 ClimGO. Tous droits réservés.',
    
    // Données business locales COMPLÈTES
    'business.contact_data.locality': 'Belin-Beliet',
    'business.contact_data.postal_code': '33830',
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
    canonical: 'https://www.climgo.fr/villes/belin-beliet-chauffage-climatisation',
  },
  
  verification: {
    google: 'Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g',
    other: {
      bing: 'VERIFICATION_CODE_TO_ADD'
    }
  }
};

export default function BelinBelietLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd type="city" city="Belin-Beliet" postalCode="33830" />
      {children}
    </>
  );
}