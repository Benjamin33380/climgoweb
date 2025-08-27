import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PerformanceOptimizations } from '@/components/PerformanceOptimizations';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';

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
    default: "ClimGO Mérignac - Chauffage & Climatisation | Installation PAC, Entretien",
    template: "%s | ClimGO Mérignac"
  },
  description: "Expert chauffage climatisation à Mérignac. Installation PAC air/eau, climatisation réversible, entretien et dépannage. Artisan RGE certifié.",
  keywords: ["chauffage Mérignac", "climatisation Mérignac", "pompe à chaleur Mérignac", "installation PAC Mérignac", "entretien chauffage Mérignac", "artisan RGE Mérignac", "PAC air-eau Mérignac", "PAC air-air Mérignac", "plancher chauffant Mérignac", "radiateurs Mérignac", "maintenance Mérignac", "dépannage Mérignac", "devis gratuit Mérignac"],
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
    url: "https://www.climgo.fr/villes/merignac-chauffage-climatisation",
    title: "ClimGO Mérignac - Chauffage & Climatisation | Installation PAC, Entretien",
    description: "Expert chauffage climatisation à Mérignac. Installation PAC air/eau, climatisation réversible, entretien et dépannage. Artisan RGE certifié.",
    siteName: "ClimGO",
    images: [
      {
        url: "/img/climdame.png",
        width: 1200,
        height: 630,
        alt: "ClimGO Mérignac - Chauffage & Climatisation | Installation PAC, Entretien",
      },
    ],
  },
  // Twitter Cards COMPLET
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Chauffage Climatisation Mérignac 33700 | ClimGO',
    description: 'Expert chauffage climatisation Mérignac 33700. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',
    images: ['https://www.climgo.fr/images/og/merignac-chauffage-climatisation.jpg'],
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
    canonical: "https://www.climgo.fr/villes/merignac-chauffage-climatisation",
    languages: {
      'x-default': 'https://www.climgo.fr/villes/merignac-chauffage-climatisation',
      'fr-FR': 'https://www.climgo.fr/villes/merignac-chauffage-climatisation',
    },
  },
  verification: {
    google: "Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g",
    other: { bing: "VERIFICATION_CODE_TO_ADD" },
  },
  manifest: "/favicon/site.webmanifest",
  other: {
    "zones-desservies": "Mérignac, Bordeaux Métropole, Gironde, Nouvelle-Aquitaine",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "ClimGO Mérignac",
    "application-name": "ClimGO Mérignac",
    "msapplication-TileColor": "#0ea5e9",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function MerignacLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <PerformanceOptimizations />
        
        {/* Schéma JSON-LD principal - LocalBusiness pour Mérignac */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "ClimGO Mérignac",
              "legalName": "ClimGO",
              "url": "https://www.climgo.fr/villes/merignac-chauffage-climatisation",
              "telephone": "+33766460008",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.climgo.fr/img/climdame.png",
                "width": 1200,
                "height": 630
              },
              "image": "https://www.climgo.fr/img/climdame.png",
              "description": "ClimGO, expert chauffage et climatisation à Mérignac. Installation PAC air/eau, climatisation réversible, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
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
                  "name": "Mérignac"
                },
                {
                  "@type": "Place",
                  "name": "Bordeaux"
                },
                {
                  "@type": "Place",
                  "name": "Pessac"
                },
                {
                  "@type": "Place",
                  "name": "Le Haillan"
                },
                {
                  "@type": "Place",
                  "name": "Saint-Médard-en-Jalles"
                },
                {
                  "@type": "Place",
                  "name": "Le Taillan-Médoc"
                },
                {
                  "@type": "Place",
                  "name": "Martignas-sur-Jalle"
                },
                {
                  "@type": "Place",
                  "name": "Le Bouscat"
                },
                {
                  "@type": "Place",
                  "name": "Eysines"
                },
                {
                  "@type": "Place",
                  "name": "Blanquefort"
                }
              ],
              "foundingDate": "2025",
              "founder": {
                "@type": "Person",
                "name": "ClimGO Team"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Services ClimGO Mérignac",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Chauffage Mérignac",
                      "description": "Installation et maintenance de systèmes de chauffage, PAC, planchers chauffants à Mérignac",
                      "url": "https://www.climgo.fr/chauffage",
                      "category": "Chauffage"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Climatisation Mérignac",
                      "description": "Installation et maintenance de systèmes de climatisation à Mérignac",
                      "url": "https://www.climgo.fr/climatisation",
                      "category": "Climatisation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Eau Chaude Sanitaire Mérignac",
                      "description": "Installation et maintenance de systèmes d'eau chaude sanitaire à Mérignac",
                      "url": "https://www.climgo.fr/eau-chaude-sanitaire",
                      "category": "Eau Chaude Sanitaire"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Maintenance Mérignac",
                      "description": "Entretien et dépannage de vos équipements thermiques à Mérignac",
                      "url": "https://www.climgo.fr/maintenance",
                      "category": "Maintenance"
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* JSON-LD pour la page web de Mérignac */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "ClimGO Mérignac - Chauffage & Climatisation",
              "url": "https://www.climgo.fr/villes/merignac-chauffage-climatisation",
              "description": "ClimGO, expert chauffage et climatisation à Mérignac. Installation PAC air/eau, climatisation réversible, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
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
              "name": "Services ClimGO Mérignac",
              "description": "Liste des services proposés par ClimGO à Mérignac",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "WebPage",
                    "name": "Chauffage Mérignac",
                    "url": "https://www.climgo.fr/chauffage",
                    "description": "Installation et maintenance de systèmes de chauffage, PAC, planchers chauffants à Mérignac"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "WebPage",
                    "name": "Climatisation Mérignac",
                    "url": "https://www.climgo.fr/climatisation",
                    "description": "Installation et maintenance de systèmes de climatisation à Mérignac"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "WebPage",
                    "name": "Eau Chaude Sanitaire Mérignac",
                    "url": "https://www.climgo.fr/eau-chaude-sanitaire",
                    "description": "Installation et maintenance de systèmes d'eau chaude sanitaire à Mérignac"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "WebPage",
                    "name": "Maintenance Mérignac",
                    "url": "https://www.climgo.fr/maintenance",
                    "description": "Entretien et dépannage de vos équipements thermiques à Mérignac"
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

        {/* JSON-LD FAQ - Questions spécifiques à Mérignac (ville forte) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Combien coûte l'installation d'une pompe à chaleur à Mérignac ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "À Mérignac, l'installation d'une PAC coûte entre 12 000€ et 25 000€ selon le type (air/air, air/eau) et la surface. ClimGO propose des devis gratuits et vous accompagne pour obtenir MaPrimeRénov' (jusqu'à 5 000€ d'aides)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Quels sont vos délais d'intervention à Mérignac ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "À Mérignac, ClimGO s'engage sur des délais rapides : devis sous 24h, installation sous 15 jours et dépannage d'urgence sous 4h. Nos techniciens sont disponibles 7j/7 pour assurer votre confort."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Proposez-vous des devis gratuits à Mérignac ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, ClimGO propose des devis gratuits et sans engagement à Mérignac. Nos experts se déplacent chez vous pour évaluer vos besoins et vous proposer la solution la plus adaptée à votre projet et à votre budget."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Pouvez-vous m'aider avec MaPrimeRénov' à Mérignac ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolument ! ClimGO vous accompagne dans vos démarches MaPrimeRénov' à Mérignac. Nous calculons les montants éligibles, montons votre dossier et vous aidons à obtenir jusqu'à 90% d'aides selon vos revenus."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Quelle est la différence entre PAC air/air et air/eau à Mérignac ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "À Mérignac, la PAC air/air chauffe et refroidit l'air ambiant. La PAC air/eau chauffe l'eau pour radiateurs/plancher chauffant et produit l'eau chaude sanitaire. ClimGO vous conseille selon vos besoins et votre installation existante."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
