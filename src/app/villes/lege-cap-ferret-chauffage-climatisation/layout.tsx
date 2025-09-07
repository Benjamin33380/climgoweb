import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { getCityCoordinates, generateGeoJsonLd, generateServiceAreaJsonLd } from "@/config/geo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "light dark",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.climgo.fr'),
  title: {
    default: "ClimGO Lège-Cap-Ferret - Chauffage & Climatisation",
    template: "%s | ClimGO Lège-Cap-Ferret"
  },
  description: "Expert chauffage climatisation à Lège-Cap-Ferret. Installation PAC air/eau, climatisation réversible, entretien et dépannage. Artisan RGE certifié.",
  keywords: ["chauffage Lège-Cap-Ferret", "climatisation Lège-Cap-Ferret", "pompe à chaleur Lège-Cap-Ferret", "installation PAC Lège-Cap-Ferret", "entretien chauffage Lège-Cap-Ferret", "artisan RGE Lège-Cap-Ferret", "PAC air-eau Lège-Cap-Ferret", "PAC air-air Lège-Cap-Ferret", "plancher chauffant Lège-Cap-Ferret", "radiateurs Lège-Cap-Ferret", "maintenance Lège-Cap-Ferret", "dépannage Lège-Cap-Ferret", "devis gratuit Lège-Cap-Ferret"],
  authors: [{ name: "ClimGO", url: "https://www.climgo.fr" }],
  creator: "ClimGO",
  publisher: "ClimGO",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.climgo.fr/villes/lege-cap-ferret-chauffage-climatisation",
    title: "ClimGO Lège-Cap-Ferret - Chauffage & Climatisation",
    description: "Expert chauffage climatisation à Lège-Cap-Ferret. Installation PAC air/eau, climatisation réversible, entretien et dépannage. Artisan RGE certifié.",
    siteName: "ClimGO",
    images: [
      {
        url: "/img/climdame.png",
        width: 1200,
        height: 630,
        alt: "ClimGO Lège-Cap-Ferret - Chauffage & Climatisation | Installation PAC, Entretien",
      },
    ],
  },
  // Twitter Cards COMPLET
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'ClimGO Lège-Cap-Ferret - Chauffage & Climatisation',
    description: 'Expert chauffage climatisation Lège-Cap-Ferret 33950. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',
    images: ['https://www.climgo.fr/images/og/lege-cap-ferret-chauffage-climatisation.jpg'],
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
    canonical: "https://www.climgo.fr/villes/lege-cap-ferret-chauffage-climatisation",
    languages: {
      'x-default': 'https://www.climgo.fr/villes/lege-cap-ferret-chauffage-climatisation',
      'fr-FR': 'https://www.climgo.fr/villes/lege-cap-ferret-chauffage-climatisation',
    },
  },
  verification: {
    google: "Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g",
    other: { bing: "VERIFICATION_CODE_TO_ADD" },
  },
  manifest: "/favicon/site.webmanifest",
  other: {
    "zones-desservies": "Lège-Cap-Ferret, Bassin d'Arcachon, Gironde, Nouvelle-Aquitaine",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "ClimGO Lège-Cap-Ferret",
    "application-name": "ClimGO Lège-Cap-Ferret",
    "msapplication-TileColor": "#0ea5e9",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function LegeCapFerretLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Coordonnées de la mairie de Lège-Cap-Ferret
  const legeCapFerretCoords = getCityCoordinates('lege-cap-ferret');
  
  return (
    <>
      {/* Schéma JSON-LD principal - LocalBusiness pour Lège-Cap-Ferret */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "ClimGO Lège-Cap-Ferret",
              "legalName": "ClimGO",
              "url": "https://www.climgo.fr/villes/lege-cap-ferret-chauffage-climatisation",
              "telephone": "+33766460008",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.climgo.fr/img/climdame.png",
                "width": 1200,
                "height": 630
              },
              "image": "https://www.climgo.fr/img/climdame.png",
              "description": "ClimGO, expert chauffage et climatisation à Lège-Cap-Ferret. Installation PAC air/eau, climatisation réversible, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "28 rue de Cantelaude",
                "addressLocality": "Marcheprime",
                "addressRegion": "Nouvelle-Aquitaine",
                "postalCode": "33380",
                "addressCountry": "FR"
              },
              // Données géographiques de la mairie de Lège-Cap-Ferret
              "geo": legeCapFerretCoords ? generateGeoJsonLd(legeCapFerretCoords, "Mairie de Lège-Cap-Ferret") : undefined,
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+33766460008",
                "contactType": "customer service",
                "availableLanguage": "French"
              },
              "sameAs": [
                "https://www.climgo.fr"
              ],
              "areaServed": [
                {
                  "@type": "Place",
                  "name": "Lège-Cap-Ferret",
                  "geo": legeCapFerretCoords ? generateGeoJsonLd(legeCapFerretCoords, "Mairie de Lège-Cap-Ferret") : undefined
                },
                {
                  "@type": "Place",
                  "name": "Arcachon",
                  "geo": getCityCoordinates('arcachon') ? generateGeoJsonLd(getCityCoordinates('arcachon')!, "Mairie d'Arcachon") : undefined
                },
                {
                  "@type": "Place",
                  "name": "Andernos-les-Bains",
                  "geo": getCityCoordinates('andernos-les-bains') ? generateGeoJsonLd(getCityCoordinates('andernos-les-bains')!, "Mairie d'Andernos-les-Bains") : undefined
                },
                {
                  "@type": "Place",
                  "name": "Lanton",
                  "geo": getCityCoordinates('lanton') ? generateGeoJsonLd(getCityCoordinates('lanton')!, "Mairie de Lanton") : undefined
                },
                {
                  "@type": "Place",
                  "name": "Audenge",
                  "geo": getCityCoordinates('audenge') ? generateGeoJsonLd(getCityCoordinates('audenge')!, "Mairie d'Audenge") : undefined
                },
                {
                  "@type": "Place",
                  "name": "Lège",
                  "geo": getCityCoordinates('lege') ? generateGeoJsonLd(getCityCoordinates('lege')!, "Mairie de Lège") : undefined
                },
                {
                  "@type": "Place",
                  "name": "Pyla-sur-Mer",
                  "geo": getCityCoordinates('pyla-sur-mer') ? generateGeoJsonLd(getCityCoordinates('pyla-sur-mer')!, "Mairie de Pyla-sur-Mer") : undefined
                },
                {
                  "@type": "Place",
                  "name": "La Teste-de-Buch"
                },
                {
                  "@type": "Place",
                  "name": "Le Teich"
                },
                {
                  "@type": "Place",
                  "name": "Gujan-Mestras"
                }
              ],
              "foundingDate": "2025",
              "founder": {
                "@type": "Person",
                "name": "ClimGO Team"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Services ClimGO Lège-Cap-Ferret",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Chauffage Lège-Cap-Ferret",
                      "description": "Installation et maintenance de systèmes de chauffage, PAC, planchers chauffants à Lège-Cap-Ferret",
                      "url": "https://www.climgo.fr/chauffage",
                      "category": "Chauffage"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Climatisation Lège-Cap-Ferret",
                      "description": "Installation et maintenance de systèmes de climatisation à Lège-Cap-Ferret",
                      "url": "https://www.climgo.fr/climatisation",
                      "category": "Climatisation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Eau Chaude Sanitaire Lège-Cap-Ferret",
                      "description": "Installation et maintenance de systèmes d'eau chaude sanitaire à Lège-Cap-Ferret",
                      "url": "https://www.climgo.fr/eau-chaude-sanitaire",
                      "category": "Eau Chaude Sanitaire"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Maintenance Lège-Cap-Ferret",
                      "description": "Entretien et dépannage de vos équipements thermiques à Lège-Cap-Ferret",
                      "url": "https://www.climgo.fr/maintenance",
                      "category": "Maintenance"
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* JSON-LD pour la page web de Lège-Cap-Ferret */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "ClimGO Lège-Cap-Ferret - Chauffage & Climatisation",
              "url": "https://www.climgo.fr/villes/lege-cap-ferret-chauffage-climatisation",
              "description": "ClimGO, expert chauffage et climatisation à Lège-Cap-Ferret. Installation PAC air/eau, climatisation réversible, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.climgo.fr/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "publisher": {
                "@type": "Organization",
                "name": "ClimGO"
              }
            })
          }}
        />

        {/* JSON-LD pour les liens de navigation */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Services ClimGO Lège-Cap-Ferret",
              "description": "Liste des services proposés par ClimGO à Lège-Cap-Ferret",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "WebPage",
                    "name": "Chauffage Lège-Cap-Ferret",
                    "url": "https://www.climgo.fr/chauffage",
                    "description": "Installation et maintenance de systèmes de chauffage, PAC, planchers chauffants à Lège-Cap-Ferret"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "WebPage",
                    "name": "Climatisation Lège-Cap-Ferret",
                    "url": "https://www.climgo.fr/climatisation",
                    "description": "Installation et maintenance de systèmes de climatisation à Lège-Cap-Ferret"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "WebPage",
                    "name": "Eau Chaude Sanitaire Lège-Cap-Ferret",
                    "url": "https://www.climgo.fr/eau-chaude-sanitaire",
                    "description": "Installation et maintenance de systèmes d'eau chaude sanitaire à Lège-Cap-Ferret"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "WebPage",
                    "name": "Maintenance Lège-Cap-Ferret",
                    "url": "https://www.climgo.fr/maintenance",
                    "description": "Entretien et dépannage de vos équipements thermiques à Lège-Cap-Ferret"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "item": {
                    "@type": "WebPage",
                    "name": "Zones d'interventions",
                    "url": "https://www.climgo.fr/zones-interventions",
                    "description": "Découvrez nos zones d'intervention en Gironde et Bassin d'Arcachon"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 6,
                  "item": {
                    "@type": "WebPage",
                    "name": "Aides & Subventions",
                    "url": "https://www.climgo.fr/aides-etat",
                    "description": "Découvrez les aides de l'État pour vos travaux de rénovation énergétique"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 7,
                  "item": {
                    "@type": "WebPage",
                    "name": "Contact",
                    "url": "https://www.climgo.fr/contact",
                    "description": "Contactez-nous pour un devis gratuit"
                  }
                }
              ]
            })
          }}
        />

        {/* JSON-LD FAQ - Questions intermédiaires pour Lège-Cap-Ferret (ville moyenne) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Intervenez-vous à domicile sur Lège-Cap-Ferret ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, ClimGO intervient à domicile sur Lège-Cap-Ferret et ses environs. Nos techniciens se déplacent chez vous pour l'installation, la maintenance et le dépannage de vos équipements de chauffage et climatisation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Proposez-vous des devis gratuits à Lège-Cap-Ferret ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolument ! ClimGO propose des devis gratuits et sans engagement à Lège-Cap-Ferret. Nos experts évaluent vos besoins et vous proposent la solution la plus adaptée à votre projet."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Quels sont vos délais d'intervention à Lège-Cap-Ferret ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "À Lège-Cap-Ferret, ClimGO s'engage sur des délais rapides : devis sous 24h, installation sous 15 jours et dépannage d'urgence sous 4h. Nous assurons votre confort rapidement."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Êtes-vous certifiés RGE pour Lège-Cap-Ferret ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, ClimGO est certifié RGE (Reconnu Garant de l'Environnement). Cette certification vous permet de bénéficier des aides de l'État et garantit la qualité de nos installations sur Lège-Cap-Ferret."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Pouvez-vous m'aider avec MaPrimeRénov' à Lège-Cap-Ferret ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, ClimGO vous accompagne dans vos démarches MaPrimeRénov' à Lège-Cap-Ferret. Nous calculons les montants éligibles et vous aidons à obtenir jusqu'à 90% d'aides selon vos revenus."
                  }
                }
              ]
            })
          }}
        />
      <GoogleAnalytics />
      {children}
    </>
  );
}
