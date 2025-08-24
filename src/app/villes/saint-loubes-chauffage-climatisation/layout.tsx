import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

// Métadonnées ultra-optimisées Saint-Loubes COMPLETE
export const metadata: Metadata = {
  title: 'Chauffage Climatisation Saint-Loubes 33450 | Expert Local #1 | ClimGO',
  description: 'Expert chauffage climatisation Saint-Loubes 33450. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié #1. Devis gratuit sous 24h.',
  
  keywords: 'climatisation Saint-Loubes, chauffage Saint-Loubes, pompe à chaleur Saint-Loubes, chauffagiste Saint-Loubes, installateur climatisation Saint-Loubes, artisan RGE Saint-Loubes, installation PAC Saint-Loubes, entretien climatisation Saint-Loubes, dépannage chauffage Saint-Loubes, chaudière Saint-Loubes, maintenance Saint-Loubes, réparation climatisation Saint-Loubes, devis gratuit Saint-Loubes, intervention urgence Saint-Loubes, certificat RGE Saint-Loubes, MaPrimeRénov Saint-Loubes, aide financière chauffage Saint-Loubes, prime CEE Saint-Loubes, crédit impôt Saint-Loubes, économie énergie Saint-Loubes, rénovation énergétique Saint-Loubes, audit énergétique Saint-Loubes, expert chauffage 33450, climatisation 33450, chauffagiste 33450, devis gratuit Saint-Loubes, intervention urgence Saint-Loubes, spécialiste CVC Saint-Loubes, entreprise chauffage Saint-Loubes, installateur agréé Saint-Loubes, technicien qualifié Saint-Loubes, service après-vente Saint-Loubes',
  
  // Open Graph optimisé COMPLET
  openGraph: {
    title: 'Chauffage Climatisation Saint-Loubes 33450 | Expert Local #1 | ClimGO',
    description: 'ClimGO, expert chauffage climatisation Saint-Loubes 33450. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié #1. Devis gratuit.',
    url: 'https://www.climgo.fr/villes/saint-loubes-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og/saint-loubes-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation Saint-Loubes 33450 - ClimGO Expert Local #1',
    }],
  },
  
  // Twitter Cards COMPLET
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Chauffage Climatisation Saint-Loubes 33450 | Expert Local #1 | ClimGO',
    description: 'Expert chauffage climatisation Saint-Loubes 33450. Installation PAC, dépannage urgent. Artisan RGE certifié #1.',
    images: ['https://www.climgo.fr/images/og/saint-loubes-chauffage-climatisation.jpg'],
  },
  
  // Métadonnées avancées COMPLÈTES
  other: {
    // Géolocalisation précise
    'geo.region': 'FR-33',
    'geo.placename': 'Saint-Loubes',
    'geo.position': '44.8997;-0.7031',
    'ICBM': '44.8997, -0.7031',
    'geo.country': 'France',
    'geo.state': 'Nouvelle-Aquitaine',
    
    // Dublin Core COMPLET
    'DC.title': 'Chauffage Climatisation Saint-Loubes 33450 | ClimGO Expert Local #1',
    'DC.description': 'Expert chauffage climatisation Saint-Loubes 33450. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié #1.',
    'DC.creator': 'ClimGO',
    'DC.publisher': 'ClimGO',
    'DC.language': 'fr-FR',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://www.climgo.fr/villes/saint-loubes-chauffage-climatisation',
    'DC.source': 'https://www.climgo.fr',
    'DC.coverage': 'Saint-Loubes, Gironde, France',
    'DC.rights': '© 2025 ClimGO. Tous droits réservés.',
    
    // Données business locales COMPLÈTES
    'business.contact_data.locality': 'Saint-Loubes',
    'business.contact_data.postal_code': '33450',
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
    canonical: 'https://www.climgo.fr/villes/saint-loubes-chauffage-climatisation',
  },
  
  verification: {
    google: 'Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g',
    other: {
      bing: 'VERIFICATION_CODE_TO_ADD'
    }
  }
};

export default function SaintLoubesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd type="city" city="Saint-Loubes" postalCode="33450" />
      {children}
    </>
  );
}