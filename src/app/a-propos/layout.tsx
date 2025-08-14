import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos de ClimGO | Expert Chauffage Climatisation Gironde',
  description: 'Découvrez ClimGO, spécialiste en chauffage, climatisation et pompes à chaleur depuis 10 ans. Entreprise RGE en Gironde et Nord Landes. 500+ clients satisfaits.',
  
  keywords: 'ClimGO à propos, entreprise chauffage gironde, spécialiste climatisation, pompe à chaleur expert, installation PAC, entreprise RGE, chauffagiste gironde, climatisation landes, histoire ClimGO, équipe chauffage, certifications RGE, QualiPAC, Qualibat, entreprise locale chauffage, spécialiste énergies renouvelables, installateur pompe chaleur, maintenance chauffage, dépannage climatisation, bordeaux chauffage, entreprise familiale',
  
  openGraph: {
    title: 'À propos de ClimGO | Expert Chauffage Climatisation depuis 10 ans',
    description: 'Entreprise spécialisée en chauffage, climatisation et pompes à chaleur. RGE, QualiPAC. 500+ clients satisfaits en Gironde et Nord Landes.',
    url: 'https://www.climgo.fr/a-propos',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og-a-propos-climgo.jpg',
      width: 1200,
      height: 630,
      alt: 'ClimGO - Équipe experts chauffage climatisation',
    }],
  },
  
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'À propos ClimGO | Expert Chauffage Climatisation Gironde',
    description: '10 ans d\'expérience, 500+ clients satisfaits. Spécialiste pompes à chaleur, chauffage, climatisation. RGE.',
    images: ['https://www.climgo.fr/images/twitter-a-propos-climgo.jpg'],
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
    'DC.title': 'À propos de ClimGO | Expert Chauffage Climatisation Gironde',
    'DC.description': 'Histoire, valeurs et expertise de ClimGO, spécialiste chauffage climatisation depuis 10 ans en Gironde.',
    'DC.creator': 'ClimGO',
    'DC.publisher': 'ClimGO',
    'DC.language': 'fr-FR',
    'DC.type': 'AboutPage',
    'DC.format': 'text/html',
    'DC.identifier': 'https://www.climgo.fr/a-propos',
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
    'category': 'Chauffage, Climatisation, Pompe à chaleur, Entreprise',
    'serviceType': 'Installation, Maintenance, Dépannage, Conseil',
    'established': '2014',
    'employees': '1-10',
    'industry': 'Chauffage, Ventilation, Climatisation',
    
    // Schema.org
    'organization.name': 'ClimGO',
    'organization.foundingDate': '2014',
    'organization.location': 'Gironde, France',
    'organization.serviceArea': 'Gironde, Nord des Landes',
    'organization.specialty': 'Chauffage, Climatisation, Pompe à chaleur',
    
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
    canonical: 'https://www.climgo.fr/a-propos',
  },
  
  verification: {
    google: 'VERIFICATION_CODE_TO_ADD',
    other: {
      bing: 'VERIFICATION_CODE_TO_ADD'
    }
  }
};

export default function AProposLayout({
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
