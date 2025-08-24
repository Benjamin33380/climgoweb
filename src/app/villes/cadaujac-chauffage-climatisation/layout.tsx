import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

// Métadonnées ultra-optimisées Cadaujac COMPLETE
export const metadata: Metadata = {
  title: 'Chauffage Climatisation Cadaujac 33140 | Expert Local | ClimGO',
  description: 'Expert chauffage climatisation Cadaujac 33140. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié. Devis gratuit sous 24h.',
  
  keywords: 'climatisation Cadaujac, chauffage Cadaujac, pompe à chaleur Cadaujac, chauffagiste Cadaujac, installateur climatisation Cadaujac, artisan RGE Cadaujac, installation PAC Cadaujac, entretien climatisation Cadaujac, dépannage chauffage Cadaujac, chaudière Cadaujac, maintenance Cadaujac, réparation climatisation Cadaujac, devis gratuit Cadaujac, intervention urgence Cadaujac, certificat RGE Cadaujac, MaPrimeRénov Cadaujac, aide financière chauffage Cadaujac, prime CEE Cadaujac, crédit impôt Cadaujac, économie énergie Cadaujac, rénovation énergétique Cadaujac, audit énergétique Cadaujac, expert chauffage 33140, climatisation 33140, chauffagiste 33140, devis gratuit Cadaujac, intervention urgence Cadaujac, spécialiste CVC Cadaujac, entreprise chauffage Cadaujac, installateur agréé Cadaujac, technicien qualifié Cadaujac, service après-vente Cadaujac',
  
  // Open Graph optimisé COMPLET
  openGraph: {
    title: 'Chauffage Climatisation Cadaujac 33140 | Expert Local | ClimGO',
    description: 'ClimGO, expert chauffage climatisation Cadaujac 33140. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié. Devis gratuit.',
    url: 'https://www.climgo.fr/villes/cadaujac-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og/cadaujac-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation Cadaujac 33140 - ClimGO Expert Local',
    }],
  },
  
  // Twitter Cards COMPLET
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Chauffage Climatisation Cadaujac 33140 | Expert Local | ClimGO',
    description: 'Expert chauffage climatisation Cadaujac 33140. Installation PAC, dépannage urgent. Artisan RGE certifié.',
    images: ['https://www.climgo.fr/images/og/cadaujac-chauffage-climatisation.jpg'],
  },
  
  // Métadonnées avancées COMPLÈTES
  other: {
    // Géolocalisation précise
    'geo.region': 'FR-33',
    'geo.placename': 'Cadaujac',
    'geo.position': '44.8997;-0.7031',
    'ICBM': '44.8997, -0.7031',
    'geo.country': 'France',
    'geo.state': 'Nouvelle-Aquitaine',
    
    // Dublin Core COMPLET
    'DC.title': 'Chauffage Climatisation Cadaujac 33140 | ClimGO Expert Local',
    'DC.description': 'Expert chauffage climatisation Cadaujac 33140. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié.',
    'DC.creator': 'ClimGO',
    'DC.publisher': 'ClimGO',
    'DC.language': 'fr-FR',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://www.climgo.fr/villes/cadaujac-chauffage-climatisation',
    'DC.source': 'https://www.climgo.fr',
    'DC.coverage': 'Cadaujac, Gironde, France',
    'DC.rights': '© 2025 ClimGO. Tous droits réservés.',
    
    // Données business locales COMPLÈTES
    'business.contact_data.locality': 'Cadaujac',
    'business.contact_data.postal_code': '33140',
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
    canonical: 'https://www.climgo.fr/villes/cadaujac-chauffage-climatisation',
  },
  
  verification: {
    google: 'Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g',
    other: {
      bing: 'VERIFICATION_CODE_TO_ADD'
    }
  }
};

export default function CadaujacLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd type="city" city="Cadaujac" postalCode="33140" />
      {children}
    </>
  );
}