import { Metadata } from 'next';
import { HEADQUARTERS_COORDINATES, generateGeoJsonLd, generateServiceAreaJsonLd } from '@/config/geo';

export const metadata: Metadata = {
  title: 'Aides & Subventions 2025',
  description: 'Travaux énergétiques subventionnés : remplacement chaudière, pompe à chaleur, ballon thermodynamique, climatisation. MaPrimeRénov\', CEE, TVA 5,5%, Éco-PTZ. Jusqu\'à 80% financés en Gironde.',
  
  keywords: 'installation climatisation avec aide, installation pompe à chaleur subvention, remplacement chaudière aide 2025, ballon thermodynamique installation aide, chauffage réversible subvention, climatisation réversible aide état, PAC air eau MaPrimeRénov, installation chauffage aide CEE, remplacement chaudière gaz fioul, pompe à chaleur air eau subvention, climatisation Gironde aide, chauffage Bordeaux subvention, installation PAC aide 2025, ballon thermodynamique prime, MaPrimeRénov 2025, CEE climatisation, TVA 5.5% chauffage, éco-PTZ pompe à chaleur, entreprise RGE Gironde, RGE QualiPAC Bordeaux, aide ANAH chauffage, prime énergie climatisation, financement travaux chauffage, accompagnement MaPrimeRénov Gironde, devis gratuit installation chauffage, cumul aides pompe à chaleur, barème aide climatisation 2025',
  
  openGraph: {
    title: 'Aides & Subventions 2025',
    description: 'Travaux énergétiques subventionnés : remplacement chaudière, pompe à chaleur, ballon thermodynamique, climatisation. MaPrimeRénov\', CEE, TVA 5,5%, Éco-PTZ. Jusqu\'à 80% financés en Gironde.',
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
    title: 'Aides & Subventions 2025',
    description: 'Travaux énergétiques subventionnés : remplacement chaudière, pompe à chaleur, ballon thermodynamique, climatisation. MaPrimeRénov\', CEE, TVA 5,5%, Éco-PTZ. Jusqu\'à 80% financés.',
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
    'DC.title': 'Aides & Subventions 2025',
    'DC.description': 'Travaux énergétiques subventionnés : remplacement chaudière, pompe à chaleur, ballon thermodynamique, climatisation. MaPrimeRénov\', CEE, TVA 5,5%, Éco-PTZ. Jusqu\'à 80% financés en Gironde.',
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
  
  // Icons optimisés (favicon.svg priorisé)
  icons: {
    icon: [
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.svg", type: "image/svg+xml" }],
  },
  
  alternates: {
    canonical: 'https://www.climgo.fr/aides-etat',
    languages: {
      'x-default': 'https://www.climgo.fr/aides-etat',
      'fr-FR': 'https://www.climgo.fr/aides-etat',
    },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Aides & Subventions Chauffage Climatisation 2025",
            "description": "Découvrez toutes les aides de l'État 2025 pour vos travaux chauffage climatisation. ClimGO vous accompagne dans vos démarches.",
            "provider": {
              "@type": "HVACBusiness",
              "name": "ClimGO",
              "url": "https://www.climgo.fr",
              "telephone": "+33766460008",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "28 rue de Cantelaude",
                "addressLocality": "Marcheprime",
                "addressRegion": "Nouvelle-Aquitaine",
                "postalCode": "33380",
                "addressCountry": "FR"
              },
              // Données géographiques du siège
              "geo": generateGeoJsonLd(HEADQUARTERS_COORDINATES, "ClimGO Marcheprime"),
              // Zone de service avec géolocalisation (rayon de 50km)
              "serviceArea": generateServiceAreaJsonLd(HEADQUARTERS_COORDINATES, "50000")
            },
            "areaServed": {
              "@type": "Place",
              "name": "Gironde, Bordeaux Métropole, Bassin d'Arcachon, Marcheprime, Biganos, Mios, Arcachon, Bordeaux, Andernos-les-Bains",
              "geo": generateGeoJsonLd(HEADQUARTERS_COORDINATES, "Zone d'intervention ClimGO")
            },
            "serviceType": "Accompagnement aides État et subventions",
            "url": "https://www.climgo.fr/aides-etat",
            "offers": {
              "@type": "Offer",
              "description": "MaPrimeRénov', CEE, TVA 5.5%, Éco-PTZ - Accompagnement gratuit"
            }
          })
        }}
      />

      {/* JSON-LD FAQ - Questions spécifiques aides et subventions */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Quelles sont les aides disponibles pour une pompe à chaleur en 2025 ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "En 2025, vous pouvez bénéficier de MaPrimeRénov' (jusqu'à 5 000€), des primes CEE, de la TVA 5.5% et de l'Éco-PTZ. ClimGO vous accompagne gratuitement dans toutes vos démarches pour optimiser vos aides."
                }
              },
              {
                "@type": "Question",
                "name": "Comment calculer le montant de MaPrimeRénov' ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Le montant dépend de vos revenus (éco-bonus), de votre zone géographique et du type d'équipement. ClimGO réalise une simulation gratuite et vous aide à monter votre dossier pour maximiser vos aides."
                }
              },
              {
                "@type": "Question",
                "name": "Quels sont les délais pour recevoir MaPrimeRénov' ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Le versement intervient généralement 2 à 3 mois après la fin des travaux. ClimGO vous accompagne dans le suivi de votre dossier et vous informe de chaque étape de votre demande d'aide."
                }
              },
              {
                "@type": "Question",
                "name": "Puis-je cumuler plusieurs aides pour mes travaux ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, vous pouvez cumuler MaPrimeRénov', les primes CEE et la TVA 5.5%. ClimGO optimise votre dossier pour obtenir le maximum d'aides et réduire votre reste à charge de 60 à 90%."
                }
              },
              {
                "@type": "Question",
                "name": "Faut-il être propriétaire pour bénéficier des aides ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Non, les locataires peuvent aussi bénéficier de certaines aides avec l'accord du propriétaire. ClimGO vous conseille sur les démarches spécifiques selon votre situation et vous accompagne dans votre projet."
                }
              }
            ]
          })
        }}
      />
      {children}
    </>
  );
}
