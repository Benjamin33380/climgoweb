import { Metadata } from 'next';
import { HEADQUARTERS_COORDINATES, generateGeoJsonLd, generateServiceAreaJsonLd } from '@/config/geo';

export const metadata: Metadata = {
  title: 'Entretien Chauffage Climatisation Gironde | ClimGO',
  description: 'Entretien chauffage climatisation Gironde. Maintenance PAC, chaudière, climatiseur. Contrat entretien annuel. Intervention rapide.',
  keywords: 'maintenance chauffage, entretien climatisation, contrat maintenance, révision annuelle, nettoyage installation, contrôle étanchéité, remplacement filtres, vérification sécurité, optimisation performance, diagnostic panne, réparation urgente, dépannage 24h, pièces détachées, garantie constructeur, expertise technique, prévention pannes, amélioration rendement, mise aux normes',
  
  openGraph: {
    title: 'Entretien Chauffage Climatisation Gironde | ClimGO',
    description: 'Entretien chauffage climatisation Gironde. Maintenance PAC, chaudière, climatiseur. Contrat entretien annuel. Intervention rapide.',
    url: 'https://www.climgo.fr/maintenance',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: '/img/serp/sav.jpeg',
      width: 1200,
      height: 630,
      alt: 'Maintenance Chauffage Climatisation Gironde | ClimGO',
    }],
  },
  
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Entretien Chauffage Climatisation Gironde | ClimGO',
    description: 'Entretien chauffage climatisation Gironde. Maintenance PAC, chaudière, climatiseur. Contrat entretien annuel. Intervention rapide.',
    images: ['/img/serp/sav.jpeg'],
  },
  
  alternates: {
    canonical: 'https://www.climgo.fr/maintenance',
    languages: {
      'x-default': 'https://www.climgo.fr/maintenance',
      'fr-FR': 'https://www.climgo.fr/maintenance',
    },
  },
  
  other: {
    'DC.title': 'Entretien Chauffage Climatisation Gironde | ClimGO',
    'DC.description': 'Entretien chauffage climatisation Gironde. Maintenance PAC, chaudière, climatiseur.',
    'DC.type': 'Service',
    'category': 'Maintenance',
    'priceRange': '120-300€',
    'google-site-verification': 'Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g'
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
  }
};

export default function MaintenanceLayout({
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
            "name": "Entretien Chauffage Climatisation Gironde",
            "description": "Entretien chauffage climatisation Gironde. Maintenance PAC, chaudière, climatiseur. Contrat entretien annuel. Intervention rapide. Expert RGE certifié ClimGO.",
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
            "serviceType": "Entretien et dépannage de systèmes thermiques",
            "url": "https://www.climgo.fr/maintenance",
            "offers": {
              "@type": "Offer",
              "description": "Contrat maintenance annuel, dépannage 24h - Devis gratuit"
            }
          })
        }}
      />

      {/* JSON-LD FAQ - Questions spécifiques maintenance */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Quel est le prix d'un contrat de maintenance annuel ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Un contrat de maintenance annuel coûte entre 120€ et 300€ selon l'équipement et la fréquence. ClimGO propose des formules adaptées à vos besoins avec intervention rapide et pièces détachées garanties."
                }
              },
              {
                "@type": "Question",
                "name": "À quelle fréquence faut-il entretenir sa PAC ou chaudière ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Un entretien annuel est obligatoire pour maintenir la garantie constructeur et optimiser les performances. ClimGO vous propose des contrats de maintenance préventive pour éviter les pannes coûteuses."
                }
              },
              {
                "@type": "Question",
                "name": "Quels sont vos délais d'intervention en cas de panne ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ClimGO s'engage sur des délais rapides : diagnostic sous 4h, intervention sous 24h pour les urgences. Nos techniciens sont disponibles 7j/7 pour assurer votre confort en toutes circonstances."
                }
              },
              {
                "@type": "Question",
                "name": "Que comprend un entretien de climatisation ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "L'entretien comprend le nettoyage des filtres, le contrôle des performances, la vérification de l'étanchéité et l'optimisation des réglages. ClimGO garantit des installations performantes et durables."
                }
              },
              {
                "@type": "Question",
                "name": "Proposez-vous des pièces détachées d'origine ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, ClimGO utilise exclusivement des pièces détachées d'origine garantissant la compatibilité et la durée de vie de vos équipements. Nous vous proposons également des alternatives économiques quand c'est possible."
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