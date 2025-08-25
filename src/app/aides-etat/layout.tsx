import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aides Chauffage Climatisation 2025 | ClimGO',
  description: 'Découvrez toutes les aides de l\'État 2025 pour vos travaux chauffage climatisation. ClimGO vous accompagne dans vos démarches.',
  
  keywords: 'aides état 2025, MaPrimeRénov, CEE, prime CEE, TVA 5.5%, éco-PTZ, subventions chauffage, aides climatisation, pompe à chaleur aide, aide rénovation énergétique, financement travaux, ClimGO RGE, entreprise RGE gironde, aides locales, ANIL, prime chauffage, subvention PAC, aide installation climatisation, crédit impôt, financement pompe chaleur, aide thermodynamique',
  
  openGraph: {
    title: 'Aides Chauffage Climatisation 2025 | ClimGO',
    description: 'Toutes les aides 2025 pour vos travaux chauffage climatisation. ClimGO vous accompagne : MaPrimeRénov\', CEE, TVA réduite. Devis gratuit.',
    url: 'https://www.climgo.fr/aides-etat',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og-aides-etat-climgo.jpg',
      width: 1200,
      height: 630,
      alt: 'Aides État 2025 chauffage climatisation - ClimGO',
    }],
  },
  
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Aides Chauffage Climatisation 2025 | ClimGO',
    description: 'MaPrimeRénov\', CEE, TVA 5,5%, Éco-PTZ : toutes les aides pour vos travaux. ClimGO vous accompagne.',
    images: ['https://www.climgo.fr/images/twitter-aides-etat-climgo.jpg'],
  },
  
  other: {
    // Géolocalisation
    'geo.region': 'FR-33',
    'geo.placename': 'Gironde',
    'geo.position': '44.8378;-0.5792',
    'ICBM': '44.8378, -0.5792',
    'geo.country': 'France',
    'geo.state': 'Nouvelle-Aquitaine',
    
    // Dublin Core
    'DC.title': 'Aides & Subventions ClimGO | MaPrimeRénov, CEE, Éco-PTZ',
    'DC.description': 'Guide complet des aides État 2025 pour travaux chauffage climatisation. Accompagnement ClimGO RGE.',
    'DC.creator': 'ClimGO',
    'DC.publisher': 'ClimGO',
    'DC.language': 'fr-FR',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://www.climgo.fr/aides-etat',
    'DC.source': 'https://www.climgo.fr',
    'DC.coverage': 'France, Gironde, Landes',
    'DC.rights': '© 2025 ClimGO. Tous droits réservés.',
    
    // Données business
    'business.contact_data.locality': 'Gironde',
    'business.contact_data.postal_code': '33000',
    'business.contact_data.phone_number': '+33766460008',
    'business.contact_data.website': 'https://www.climgo.fr',
    'business.contact_data.email': 'contact@climgo.fr',
    
    // Signaux SEO
    'rating': '4.8',
    'priceRange': '€€',
    'audience': 'Particuliers et Professionnels',
    'category': 'Aides, Financement, Subventions, Chauffage, Climatisation',
    'serviceType': 'Accompagnement aides État, Installation RGE',
    
    // Référencement
    'revisit-after': '7 days',
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
    canonical: 'https://www.climgo.fr/aides-etat',
  },
  
  verification: {
    google: 'VERIFICATION_CODE_TO_ADD',
    other: {
      bing: 'VERIFICATION_CODE_TO_ADD'
    }
  }
};

export default function AidesEtatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
