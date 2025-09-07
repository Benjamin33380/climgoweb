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
    default: "ClimGO Le Teich - Chauffage & Climatisation",
    template: "%s | ClimGO Le Teich"
  },
  description: "Expert chauffage climatisation au Teich. Installation PAC air/eau, climatisation réversible, entretien et dépannage. Artisan RGE certifié.",
  keywords: ["chauffage Le Teich", "climatisation Le Teich", "pompe à chaleur Le Teich", "installation PAC Le Teich", "entretien chauffage Le Teich", "artisan RGE Le Teich", "PAC air-eau Le Teich", "PAC air-air Le Teich", "plancher chauffant Le Teich", "radiateurs Le Teich", "maintenance Le Teich", "dépannage Le Teich", "devis gratuit Le Teich"],
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
    url: "https://www.climgo.fr/villes/le-teich-chauffage-climatisation",
    title: "ClimGO Le Teich - Chauffage & Climatisation",
    description: "Expert chauffage climatisation au Teich. Installation PAC air/eau, climatisation réversible, entretien et dépannage. Artisan RGE certifié.",
    siteName: "ClimGO",
    images: [
      {
        url: "/img/climdame.png",
        width: 1200,
        height: 630,
        alt: "ClimGO Le Teich - Chauffage & Climatisation | Installation PAC, Entretien",
      },
    ],
  },
  // Twitter Cards COMPLET
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'ClimGO Le Teich - Chauffage & Climatisation',
    description: 'Expert chauffage climatisation Le Teich 33470. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',
    images: ['https://www.climgo.fr/images/og/le-teich-chauffage-climatisation.jpg'],
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
    canonical: "https://www.climgo.fr/villes/le-teich-chauffage-climatisation",
    languages: {
      'x-default': 'https://www.climgo.fr/villes/le-teich-chauffage-climatisation',
      'fr-FR': 'https://www.climgo.fr/villes/le-teich-chauffage-climatisation',
    },
  },
  verification: {
    google: "Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g",
    other: { bing: "VERIFICATION_CODE_TO_ADD" },
  },
  manifest: "/favicon/site.webmanifest",
  other: {
    "zones-desservies": "Le Teich, Bassin d'Arcachon, Gironde, Nouvelle-Aquitaine",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "ClimGO Le Teich",
    "application-name": "ClimGO Le Teich",
    "msapplication-TileColor": "#0ea5e9",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function LeTeichLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Coordonnées de la mairie du Teich
  const leTeichCoords = getCityCoordinates('le-teich');
  
  return (
    <>
      {/* Schéma JSON-LD principal - LocalBusiness pour Le Teich */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "ClimGO Le Teich",
              "legalName": "ClimGO",
              "url": "https://www.climgo.fr/villes/le-teich-chauffage-climatisation",
              "telephone": "+33766460008",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.climgo.fr/img/climdame.png",
                "width": 1200,
                "height": 630
              },
              "image": "https://www.climgo.fr/img/climdame.png",
              "description": "ClimGO, expert chauffage et climatisation au Teich. Installation PAC air/eau, climatisation réversible, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "28 rue de Cantelaude",
                "addressLocality": "Marcheprime",
                "addressRegion": "Nouvelle-Aquitaine",
                "postalCode": "33380",
                "addressCountry": "FR"
              },
              // Données géographiques de la mairie du Teich
              "geo": leTeichCoords ? generateGeoJsonLd(leTeichCoords, "Mairie du Teich") : undefined,
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
                  "name": "Le Teich",
                  "geo": leTeichCoords ? generateGeoJsonLd(leTeichCoords, "Mairie du Teich") : undefined
                },
                {
                  "@type": "Place",
                  "name": "La Teste-de-Buch",
                  "geo": getCityCoordinates('la-teste-de-buch') ? generateGeoJsonLd(getCityCoordinates('la-teste-de-buch')!, "Mairie de La Teste-de-Buch") : undefined
                },
                {
                  "@type": "Place",
                  "name": "Gujan-Mestras",
                  "geo": getCityCoordinates('gujan-mestras') ? generateGeoJsonLd(getCityCoordinates('gujan-mestras')!, "Mairie de Gujan-Mestras") : undefined
                },
                {
                  "@type": "Place",
                  "name": "Arcachon",
                  "geo": getCityCoordinates('arcachon') ? generateGeoJsonLd(getCityCoordinates('arcachon')!, "Mairie d'Arcachon") : undefined
                },
                {
                  "@type": "Place",
                  "name": "Biganos",
                  "geo": getCityCoordinates('biganos') ? generateGeoJsonLd(getCityCoordinates('biganos')!, "Mairie de Biganos") : undefined
                },
                {
                  "@type": "Place",
                  "name": "Audenge",
                  "geo": getCityCoordinates('audenge') ? generateGeoJsonLd(getCityCoordinates('audenge')!, "Mairie d'Audenge") : undefined
                },
                {
                  "@type": "Place",
                  "name": "Lanton",
                  "geo": getCityCoordinates('lanton') ? generateGeoJsonLd(getCityCoordinates('lanton')!, "Mairie de Lanton") : undefined
                },
                {
                  "@type": "Place",
                  "name": "Andernos-les-Bains"
                }
              ],
              "foundingDate": "2025",
              "founder": {
                "@type": "Person",
                "name": "ClimGO Team"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Services ClimGO Le Teich",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Chauffage Le Teich",
                      "description": "Installation et maintenance de systèmes de chauffage, PAC, planchers chauffants au Teich",
                      "url": "https://www.climgo.fr/chauffage",
                      "category": "Chauffage"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Climatisation Le Teich",
                      "description": "Installation et maintenance de systèmes de climatisation au Teich",
                      "url": "https://www.climgo.fr/climatisation",
                      "category": "Climatisation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Eau Chaude Sanitaire Le Teich",
                      "description": "Installation et maintenance de systèmes d'eau chaude sanitaire au Teich",
                      "url": "https://www.climgo.fr/eau-chaude-sanitaire",
                      "category": "Eau Chaude Sanitaire"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Maintenance Le Teich",
                      "description": "Entretien et dépannage de vos équipements thermiques au Teich",
                      "url": "https://www.climgo.fr/maintenance",
                      "category": "Maintenance"
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* JSON-LD pour la page web du Teich */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "ClimGO Le Teich - Chauffage & Climatisation",
              "url": "https://www.climgo.fr/villes/le-teich-chauffage-climatisation",
              "description": "ClimGO, expert chauffage et climatisation au Teich. Installation PAC air/eau, climatisation réversible, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
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
              "name": "Services ClimGO Le Teich",
              "description": "Liste des services proposés par ClimGO au Teich",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "WebPage",
                    "name": "Chauffage Le Teich",
                    "url": "https://www.climgo.fr/chauffage",
                    "description": "Installation et maintenance de systèmes de chauffage, PAC, planchers chauffants au Teich"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "WebPage",
                    "name": "Climatisation Le Teich",
                    "url": "https://www.climgo.fr/climatisation",
                    "description": "Installation et maintenance de systèmes de climatisation au Teich"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "WebPage",
                    "name": "Eau Chaude Sanitaire Le Teich",
                    "url": "https://www.climgo.fr/eau-chaude-sanitaire",
                    "description": "Installation et maintenance de systèmes d'eau chaude sanitaire au Teich"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "WebPage",
                    "name": "Maintenance Le Teich",
                    "url": "https://www.climgo.fr/maintenance",
                    "description": "Entretien et dépannage de vos équipements thermiques au Teich"
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

        {/* JSON-LD FAQ - Questions intermédiaires pour Le Teich (ville moyenne) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Intervenez-vous à domicile sur Le Teich ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, ClimGO intervient à domicile sur Le Teich et ses environs. Nos techniciens se déplacent chez vous pour l'installation, la maintenance et le dépannage de vos équipements de chauffage et climatisation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Proposez-vous des devis gratuits au Teich ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolument ! ClimGO propose des devis gratuits et sans engagement au Teich. Nos experts évaluent vos besoins et vous proposent la solution la plus adaptée à votre projet."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Quels sont vos délais d'intervention au Teich ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Au Teich, ClimGO s'engage sur des délais rapides : devis sous 24h, installation sous 15 jours et dépannage d'urgence sous 4h. Nous assurons votre confort rapidement."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Êtes-vous certifiés RGE pour Le Teich ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, ClimGO est certifié RGE (Reconnu Garant de l'Environnement). Cette certification vous permet de bénéficier des aides de l'État et garantit la qualité de nos installations sur Le Teich."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Pouvez-vous m'aider avec MaPrimeRénov' au Teich ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, ClimGO vous accompagne dans vos démarches MaPrimeRénov' au Teich. Nous calculons les montants éligibles et vous aidons à obtenir jusqu'à 90% d'aides selon vos revenus."
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
