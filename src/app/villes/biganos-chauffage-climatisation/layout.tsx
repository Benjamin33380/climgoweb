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
    default: "ClimGO Biganos - Chauffage & Climatisation",
    template: "%s | ClimGO Biganos"
  },
  description: "Expert chauffage climatisation Biganos 33380. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.",
  keywords: ["chauffage Biganos", "climatisation Biganos", "pompe à chaleur Biganos", "installation PAC Biganos", "entretien chauffage Biganos", "artisan RGE Biganos", "PAC air-eau Biganos", "PAC air-air Biganos", "plancher chauffant Biganos", "radiateurs Biganos", "maintenance Biganos", "dépannage Biganos", "devis gratuit Biganos"],
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
    url: "https://www.climgo.fr/villes/biganos-chauffage-climatisation",
    title: "ClimGO Biganos - Chauffage & Climatisation",
    description: "Expert chauffage climatisation Biganos 33380. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.",
    siteName: "ClimGO",
    images: [
      {
        url: "/img/climdame.png",
        width: 1200,
        height: 630,
        alt: "ClimGO Biganos - Chauffage & Climatisation | Installation PAC, Entretien",
      },
    ],
  },
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
  twitter: {
    card: "summary_large_image",
    title: "ClimGO Biganos - Chauffage & Climatisation",
    description: "Expert chauffage climatisation Biganos 33380. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.",
    images: ["/img/climdame.png"],
  },
  alternates: {
    canonical: "https://www.climgo.fr/villes/biganos-chauffage-climatisation",
    languages: {
      'x-default': 'https://www.climgo.fr/villes/biganos-chauffage-climatisation',
      'fr-FR': 'https://www.climgo.fr/villes/biganos-chauffage-climatisation',
    },
  },
  verification: {
    google: "Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g",
    other: { bing: "VERIFICATION_CODE_TO_ADD" },
  },
  manifest: "/favicon/site.webmanifest",
  other: {
    "zones-desservies": "Biganos, Bassin d'Arcachon, Gironde, Nouvelle-Aquitaine",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "ClimGO Biganos",
    "application-name": "ClimGO Biganos",
    "msapplication-TileColor": "#0ea5e9",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function BiganosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Schéma JSON-LD principal - LocalBusiness pour Biganos */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "ClimGO Biganos",
              "legalName": "ClimGO",
              "url": "https://www.climgo.fr/villes/biganos-chauffage-climatisation",
              "telephone": "+33766460008",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.climgo.fr/img/climdame.png",
                "width": 1200,
                "height": 630
              },
              "image": "https://www.climgo.fr/img/climdame.png",
              "description": "ClimGO, expert chauffage et climatisation à Biganos. Installation PAC air/eau, climatisation réversible, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
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
                  "name": "Biganos"
                },
                {
                  "@type": "Place",
                  "name": "Arcachon"
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
                },
                {
                  "@type": "Place",
                  "name": "Audenge"
                },
                {
                  "@type": "Place",
                  "name": "Lanton"
                },
                {
                  "@type": "Place",
                  "name": "Andernos-les-Bains"
                },
                {
                  "@type": "Place",
                  "name": "Lège-Cap-Ferret"
                },
                {
                  "@type": "Place",
                  "name": "Pyla-sur-Mer"
                }
              ],
              "foundingDate": "2025",
              "founder": {
                "@type": "Person",
                "name": "ClimGO Team"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Services ClimGO Biganos",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Chauffage Biganos",
                      "description": "Installation et maintenance de systèmes de chauffage, PAC, planchers chauffants à Biganos",
                      "url": "https://www.climgo.fr/chauffage",
                      "category": "Chauffage"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Climatisation Biganos",
                      "description": "Installation et maintenance de systèmes de climatisation à Biganos",
                      "url": "https://www.climgo.fr/climatisation",
                      "category": "Climatisation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Eau Chaude Sanitaire Biganos",
                      "description": "Installation et maintenance de systèmes d'eau chaude sanitaire à Biganos",
                      "url": "https://www.climgo.fr/eau-chaude-sanitaire",
                      "category": "Eau Chaude Sanitaire"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Maintenance Biganos",
                      "description": "Entretien et dépannage de vos équipements thermiques à Biganos",
                      "url": "https://www.climgo.fr/maintenance",
                      "category": "Maintenance"
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* JSON-LD pour la page web de Biganos */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "ClimGO Biganos - Chauffage & Climatisation",
              "url": "https://www.climgo.fr/villes/biganos-chauffage-climatisation",
              "description": "ClimGO, expert chauffage et climatisation à Biganos. Installation PAC air/eau, climatisation réversible, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
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
              "name": "Services ClimGO Biganos",
              "description": "Liste des services proposés par ClimGO à Biganos",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "WebPage",
                    "name": "Chauffage Biganos",
                    "url": "https://www.climgo.fr/chauffage",
                    "description": "Installation et maintenance de systèmes de chauffage, PAC, planchers chauffants à Biganos"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "WebPage",
                    "name": "Climatisation Biganos",
                    "url": "https://www.climgo.fr/climatisation",
                    "description": "Installation et maintenance de systèmes de climatisation à Biganos"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "WebPage",
                    "name": "Eau Chaude Sanitaire Biganos",
                    "url": "https://www.climgo.fr/eau-chaude-sanitaire",
                    "description": "Installation et maintenance de systèmes d'eau chaude sanitaire à Biganos"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "WebPage",
                    "name": "Maintenance Biganos",
                    "url": "https://www.climgo.fr/maintenance",
                    "description": "Entretien et dépannage de vos équipements thermiques à Biganos"
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

        {/* JSON-LD FAQ - Questions intermédiaires pour Biganos (ville moyenne) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Intervenez-vous à domicile sur Biganos ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, ClimGO intervient à domicile sur Biganos et ses environs. Nos techniciens se déplacent chez vous pour l'installation, la maintenance et le dépannage de vos équipements de chauffage et climatisation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Proposez-vous des devis gratuits à Biganos ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolument ! ClimGO propose des devis gratuits et sans engagement à Biganos. Nos experts évaluent vos besoins et vous proposent la solution la plus adaptée à votre projet."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Quels sont vos délais d'intervention à Biganos ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "À Biganos, ClimGO s'engage sur des délais rapides : devis sous 24h, installation sous 15 jours et dépannage d'urgence sous 4h. Nous assurons votre confort rapidement."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Êtes-vous certifiés RGE pour Biganos ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, ClimGO est certifié RGE (Reconnu Garant de l'Environnement). Cette certification vous permet de bénéficier des aides de l'État et garantit la qualité de nos installations sur Biganos."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Pouvez-vous m'aider avec MaPrimeRénov' à Biganos ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, ClimGO vous accompagne dans vos démarches MaPrimeRénov' à Biganos. Nous calculons les montants éligibles et vous aidons à obtenir jusqu'à 90% d'aides selon vos revenus."
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
