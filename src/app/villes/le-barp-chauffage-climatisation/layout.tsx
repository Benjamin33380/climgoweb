import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import GoogleAnalytics from '@/components/GoogleAnalytics';

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
    default: "ClimGO Le Barp - Chauffage & Climatisation",
    template: "%s | ClimGO Le Barp"
  },
  description: "Expert chauffage climatisation au Barp. Installation PAC air/eau, climatisation réversible, entretien et dépannage. Artisan RGE certifié.",
  keywords: ["chauffage Le Barp", "climatisation Le Barp", "pompe à chaleur Le Barp", "installation PAC Le Barp", "entretien chauffage Le Barp", "artisan RGE Le Barp", "PAC air-eau Le Barp", "PAC air-air Le Barp", "plancher chauffant Le Barp", "radiateurs Le Barp", "maintenance Le Barp", "dépannage Le Barp", "devis gratuit Le Barp"],
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
    url: "https://www.climgo.fr/villes/le-barp-chauffage-climatisation",
    title: "ClimGO Le Barp - Chauffage & Climatisation",
    description: "Expert chauffage climatisation au Barp. Installation PAC air/eau, climatisation réversible, entretien et dépannage. Artisan RGE certifié.",
    siteName: "ClimGO",
    images: [
      {
        url: "/img/climdame.png",
        width: 1200,
        height: 630,
        alt: "ClimGO Le Barp - Chauffage & Climatisation | Installation PAC, Entretien",
      },
    ],
  },
  // Twitter Cards COMPLET
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'ClimGO Le Barp - Chauffage & Climatisation',
    description: 'Expert chauffage climatisation Le Barp 33114. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',
    images: ['https://www.climgo.fr/images/og/le-barp-chauffage-climatisation.jpg'],
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
    canonical: "https://www.climgo.fr/villes/le-barp-chauffage-climatisation",
    languages: {
      'x-default': 'https://www.climgo.fr/villes/le-barp-chauffage-climatisation',
      'fr-FR': 'https://www.climgo.fr/villes/le-barp-chauffage-climatisation',
    },
  },
  verification: {
    google: "Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g",
    other: { bing: "VERIFICATION_CODE_TO_ADD" },
  },
  manifest: "/favicon/site.webmanifest",
  other: {
    "zones-desservies": "Le Barp, Bassin d'Arcachon, Gironde, Nouvelle-Aquitaine",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "ClimGO Le Barp",
    "application-name": "ClimGO Le Barp",
    "msapplication-TileColor": "#0ea5e9",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function LeBarpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Schéma JSON-LD principal - LocalBusiness pour Le Barp */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "ClimGO Le Barp",
              "legalName": "ClimGO",
              "url": "https://www.climgo.fr/villes/le-barp-chauffage-climatisation",
              "telephone": "+33766460008",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.climgo.fr/img/climdame.png",
                "width": 1200,
                "height": 630
              },
              "image": "https://www.climgo.fr/img/climdame.png",
              "description": "ClimGO, expert chauffage et climatisation au Barp. Installation PAC air/eau, climatisation réversible, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "28 rue de Cantelaude",
                "addressLocality": "Marcheprime",
                "addressRegion": "Nouvelle-Aquitaine",
                "postalCode": "33380",
                "addressCountry": "FR"
              },
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
                  "name": "Le Barp"
                },
                {
                  "@type": "Place",
                  "name": "Bordeaux"
                },
                {
                  "@type": "Place",
                  "name": "Canéjan"
                },
                {
                  "@type": "Place",
                  "name": "Cestas"
                },
                {
                  "@type": "Place",
                  "name": "La Brède"
                },
                {
                  "@type": "Place",
                  "name": "Marcheprime"
                },
                {
                  "@type": "Place",
                  "name": "Saucats"
                },
                {
                  "@type": "Place",
                  "name": "Mios"
                },
                {
                  "@type": "Place",
                  "name": "Gujan-Mestras"
                },
                {
                  "@type": "Place",
                  "name": "Biganos"
                }
              ],
              "foundingDate": "2025",
              "founder": {
                "@type": "Person",
                "name": "ClimGO Team"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Services ClimGO Le Barp",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Chauffage Le Barp",
                      "description": "Installation et maintenance de systèmes de chauffage, PAC, planchers chauffants au Barp",
                      "url": "https://www.climgo.fr/chauffage",
                      "category": "Chauffage"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Climatisation Le Barp",
                      "description": "Installation et maintenance de systèmes de climatisation au Barp",
                      "url": "https://www.climgo.fr/climatisation",
                      "category": "Climatisation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Eau Chaude Sanitaire Le Barp",
                      "description": "Installation et maintenance de systèmes d'eau chaude sanitaire au Barp",
                      "url": "https://www.climgo.fr/eau-chaude-sanitaire",
                      "category": "Eau Chaude Sanitaire"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Maintenance Le Barp",
                      "description": "Entretien et dépannage de vos équipements thermiques au Barp",
                      "url": "https://www.climgo.fr/maintenance",
                      "category": "Maintenance"
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* JSON-LD pour la page web de Le Barp */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "ClimGO Le Barp - Chauffage & Climatisation",
              "url": "https://www.climgo.fr/villes/le-barp-chauffage-climatisation",
              "description": "ClimGO, expert chauffage et climatisation au Barp. Installation PAC air/eau, climatisation réversible, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
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
              "name": "Services ClimGO Le Barp",
              "description": "Liste des services proposés par ClimGO au Barp",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "WebPage",
                    "name": "Chauffage Le Barp",
                    "url": "https://www.climgo.fr/chauffage",
                    "description": "Installation et maintenance de systèmes de chauffage, PAC, planchers chauffants au Barp"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "WebPage",
                    "name": "Climatisation Le Barp",
                    "url": "https://www.climgo.fr/climatisation",
                    "description": "Installation et maintenance de systèmes de climatisation au Barp"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "WebPage",
                    "name": "Eau Chaude Sanitaire Le Barp",
                    "url": "https://www.climgo.fr/eau-chaude-sanitaire",
                    "description": "Installation et maintenance de systèmes d'eau chaude sanitaire au Barp"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "WebPage",
                    "name": "Maintenance Le Barp",
                    "url": "https://www.climgo.fr/maintenance",
                    "description": "Entretien et dépannage de vos équipements thermiques au Barp"
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

        {/* JSON-LD FAQ - Questions génériques pour Le Barp (ville faible) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Quels services propose ClimGO ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ClimGO propose l'installation, la maintenance et le dépannage de systèmes de chauffage, climatisation et eau chaude sanitaire. Nous sommes spécialisés dans les pompes à chaleur et équipements thermiques."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Proposez-vous des devis gratuits ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, ClimGO propose des devis gratuits et sans engagement. Nos experts évaluent vos besoins et vous proposent la solution la plus adaptée à votre projet."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Quels sont vos délais d'intervention ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ClimGO s'engage sur des délais rapides : devis sous 24h, installation sous 15 jours et dépannage d'urgence sous 4h. Nous assurons votre confort rapidement."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Êtes-vous certifiés RGE ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, ClimGO est certifié RGE (Reconnu Garant de l'Environnement). Cette certification vous permet de bénéficier des aides de l'État et garantit la qualité de nos installations."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Pouvez-vous m'aider avec les aides de l'État ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, ClimGO vous accompagne dans vos démarches MaPrimeRénov'. Nous calculons les montants éligibles et vous aidons à obtenir jusqu'à 90% d'aides selon vos revenus."
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
