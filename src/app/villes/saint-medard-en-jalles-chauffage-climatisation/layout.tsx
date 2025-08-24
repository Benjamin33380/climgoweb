import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

// Métadonnées ultra-optimisées Saint-Médard-en-Jalles COMPLETE
export const metadata: Metadata = {
  title: 'Chauffage Climatisation Saint-Médard-en-Jalles 33160 | ClimGO',
  description: 'Expert chauffage climatisation Saint-Médard-en-Jalles 33160. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',

  keywords: 'climatisation Saint-Médard-en-Jalles, chauffage Saint-Médard-en-Jalles, pompe à chaleur Saint-Médard-en-Jalles, chauffagiste Saint-Médard-en-Jalles, installateur climatisation Saint-Médard-en-Jalles, artisan RGE Saint-Médard-en-Jalles, installation PAC Saint-Médard-en-Jalles, entretien climatisation Saint-Médard-en-Jalles, dépannage chauffage Saint-Médard-en-Jalles, chaudière Saint-Médard-en-Jalles, maintenance Saint-Médard-en-Jalles, réparation climatisation Saint-Médard-en-Jalles, devis gratuit Saint-Médard-en-Jalles, intervention urgence Saint-Médard-en-Jalles, certificat RGE Saint-Médard-en-Jalles, MaPrimeRénov Saint-Médard-en-Jalles, aide financière chauffage Saint-Médard-en-Jalles, prime CEE Saint-Médard-en-Jalles, crédit impôt Saint-Médard-en-Jalles, économie énergie Saint-Médard-en-Jalles, rénovation énergétique Saint-Médard-en-Jalles, audit énergétique Saint-Médard-en-Jalles, expert chauffage 33160, climatisation 33160, chauffagiste 33160, devis gratuit Saint-Médard-en-Jalles, intervention urgence Saint-Médard-en-Jalles, spécialiste CVC Saint-Médard-en-Jalles, entreprise chauffage Saint-Médard-en-Jalles, installateur agréé Saint-Médard-en-Jalles, technicien qualifié Saint-Médard-en-Jalles, service après-vente Saint-Médard-en-Jalles',

  // Open Graph optimisé COMPLET
  openGraph: {
    title: 'Chauffage Climatisation Saint-Médard-en-Jalles 33160 | ClimGO',
    description: 'Expert chauffage climatisation Saint-Médard-en-Jalles 33160. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',
    url: 'https://www.climgo.fr/villes/saint-medard-en-jalles-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og/saint-medard-en-jalles-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation Saint-Médard-en-Jalles 33160 - ClimGO',
    }],
  },

  // Twitter Cards COMPLET
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Chauffage Climatisation Saint-Médard-en-Jalles 33160 | ClimGO',
    description: 'Expert chauffage climatisation Saint-Médard-en-Jalles 33160. Installation PAC, dépannage, entretien. Artisan RGE.',
    images: ['https://www.climgo.fr/images/og/saint-medard-en-jalles-chauffage-climatisation.jpg'],
  },

  // Métadonnées avancées COMPLÈTES
  other: {
    // Géolocalisation précise
    'geo.region': 'FR-33',
    'geo.placename': 'Saint-Médard-en-Jalles',
    'geo.position': '44.8997;-0.7031',
    'ICBM': '44.8997, -0.7031',
    'geo.country': 'France',
    'geo.state': 'Nouvelle-Aquitaine',

    // Dublin Core COMPLET
    'DC.title': 'Chauffage Climatisation Saint-Médard-en-Jalles 33160 | ClimGO',
    'DC.description': 'Expert chauffage climatisation Saint-Médard-en-Jalles 33160. Installation PAC, dépannage, entretien. Artisan RGE.',
    'DC.creator': 'ClimGO',
    'DC.publisher': 'ClimGO',
    'DC.language': 'fr-FR',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://www.climgo.fr/villes/saint-medard-en-jalles-chauffage-climatisation',
    'DC.source': 'https://www.climgo.fr',
    'DC.coverage': 'Saint-Médard-en-Jalles, Gironde, France',
    'DC.rights': '© 2025 ClimGO. Tous droits réservés.',

    // Données business locales COMPLÈTES
    'business.contact_data.locality': 'Saint-Médard-en-Jalles',
    'business.contact_data.postal_code': '33160',
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
    canonical: 'https://www.climgo.fr/villes/saint-medard-en-jalles-chauffage-climatisation',
  },

  verification: {
    google: 'Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g',
    other: {
      bing: 'VERIFICATION_CODE_TO_ADD'
    }
  }
};

export default function SaintMedardEnJallesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd type="city" city="Saint-Médard-en-Jalles" postalCode="33160" />
      {children}
    </>
  );
}