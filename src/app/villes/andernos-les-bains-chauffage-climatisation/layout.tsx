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
    default: "ClimGO Andernos-les-Bains - Chauffage & Climatisation",
    template: "%s | ClimGO Andernos-les-Bains"
  },
  description: "Expert chauffage climatisation Andernos-les-Bains 33510. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.",
  keywords: ["chauffage Andernos-les-Bains", "climatisation Andernos-les-Bains", "pompe à chaleur Andernos-les-Bains", "installation PAC Andernos-les-Bains", "entretien chauffage Andernos-les-Bains", "artisan RGE Andernos-les-Bains", "PAC air-eau Andernos-les-Bains", "PAC air-air Andernos-les-Bains", "plancher chauffant Andernos-les-Bains", "radiateurs Andernos-les-Bains", "maintenance Andernos-les-Bains", "dépannage Andernos-les-Bains", "devis gratuit Andernos-les-Bains"],
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
    url: "https://www.climgo.fr/villes/andernos-les-bains-chauffage-climatisation",
    title: "ClimGO Andernos-les-Bains - Chauffage & Climatisation",
    description: "Expert chauffage climatisation Andernos-les-Bains 33510. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.",
    siteName: "ClimGO",
    images: [
      {
        url: "/img/climdame.png",
        width: 1200,
        height: 630,
        alt: "ClimGO Andernos-les-Bains - Chauffage & Climatisation | Installation PAC, Entretien",
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
    title: "ClimGO Andernos-les-Bains - Chauffage & Climatisation",
    description: "Expert chauffage climatisation Andernos-les-Bains 33510. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.",
    images: ["/img/climdame.png"],
  },
  alternates: {
    canonical: "https://www.climgo.fr/villes/andernos-les-bains-chauffage-climatisation",
    languages: {
      'x-default': 'https://www.climgo.fr/villes/andernos-les-bains-chauffage-climatisation',
      'fr-FR': 'https://www.climgo.fr/villes/andernos-les-bains-chauffage-climatisation',
    },
  },
  verification: {
    google: "Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g",
    other: { bing: "VERIFICATION_CODE_TO_ADD" },
  },
  manifest: "/favicon/site.webmanifest",
  other: {
    "zones-desservies": "Andernos-les-Bains, Bassin d'Arcachon, Gironde, Nouvelle-Aquitaine",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "ClimGO Andernos-les-Bains",
    "application-name": "ClimGO Andernos-les-Bains",
    "msapplication-TileColor": "#0ea5e9",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function AndernosLesBainsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Coordonnées de la mairie d'Andernos-les-Bains
  const andernosLesBainsCoords = getCityCoordinates('andernos-les-bains');
  
  return (
    <>
      {/* Schéma JSON-LD principal - LocalBusiness pour Andernos-les-Bains */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "ClimGO Andernos-les-Bains",
              "legalName": "ClimGO",
              "url": "https://www.climgo.fr/villes/andernos-les-bains-chauffage-climatisation",
              "telephone": "+33766460008",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.climgo.fr/img/climdame.png",
                "width": 1200,
                "height": 630
              },
              "image": "https://www.climgo.fr/img/climdame.png",
              "description": "ClimGO, expert chauffage et climatisation à Andernos-les-Bains. Installation PAC air/eau, climatisation réversible, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "28 rue de Cantelaude",
                "addressLocality": "Marcheprime",
                "addressRegion": "Nouvelle-Aquitaine",
                "postalCode": "33380",
                "addressCountry": "FR"
              },
              // Données géographiques de la mairie d'Andernos-les-Bains
              "geo": andernosLesBainsCoords ? generateGeoJsonLd(andernosLesBainsCoords, "Mairie d'Andernos-les-Bains") : undefined,
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
                  "name": "Andernos-les-Bains",
                  "geo": andernosLesBainsCoords ? generateGeoJsonLd(andernosLesBainsCoords, "Mairie d'Andernos-les-Bains") : undefined
                },
                {
                  "@type": "Place",
                  "name": "Arcachon",
                  "geo": getCityCoordinates('arcachon') ? generateGeoJsonLd(getCityCoordinates('arcachon')!, "Mairie d'Arcachon") : undefined
                },
                {
                  "@type": "Place",
                  "name": "La Teste-de-Buch",
                  "geo": getCityCoordinates('la-teste-de-buch') ? generateGeoJsonLd(getCityCoordinates('la-teste-de-buch')!, "Mairie de La Teste-de-Buch") : undefined
                },
                {
                  "@type": "Place",
                  "name": "Le Teich",
                  "geo": getCityCoordinates('le-teich') ? generateGeoJsonLd(getCityCoordinates('le-teich')!, "Mairie du Teich") : undefined
                },
                {
                  "@type": "Place",
                  "name": "Gujan-Mestras",
                  "geo": getCityCoordinates('gujan-mestras') ? generateGeoJsonLd(getCityCoordinates('gujan-mestras')!, "Mairie de Gujan-Mestras") : undefined
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
                  "name": "Lanton"
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
                "name": "Services ClimGO Andernos-les-Bains",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Chauffage Andernos-les-Bains",
                      "description": "Installation et maintenance de systèmes de chauffage, PAC, planchers chauffants à Andernos-les-Bains",
                      "url": "https://www.climgo.fr/chauffage",
                      "category": "Chauffage"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Climatisation Andernos-les-Bains",
                      "description": "Installation et maintenance de systèmes de climatisation à Andernos-les-Bains",
                      "url": "https://www.climgo.fr/climatisation",
                      "category": "Climatisation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Eau Chaude Sanitaire Andernos-les-Bains",
                      "description": "Installation et maintenance de systèmes d'eau chaude sanitaire à Andernos-les-Bains",
                      "url": "https://www.climgo.fr/eau-chaude-sanitaire",
                      "category": "Eau Chaude Sanitaire"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Maintenance Andernos-les-Bains",
                      "description": "Entretien et dépannage de vos équipements thermiques à Andernos-les-Bains",
                      "url": "https://www.climgo.fr/maintenance",
                      "category": "Maintenance"
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* JSON-LD pour la page web d'Andernos-les-Bains */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "ClimGO Andernos-les-Bains - Chauffage & Climatisation",
              "url": "https://www.climgo.fr/villes/andernos-les-bains-chauffage-climatisation",
              "description": "ClimGO, expert chauffage et climatisation à Andernos-les-Bains. Installation PAC air/eau, climatisation réversible, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
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
              "name": "Services ClimGO Andernos-les-Bains",
              "description": "Liste des services proposés par ClimGO à Andernos-les-Bains",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "WebPage",
                    "name": "Chauffage Andernos-les-Bains",
                    "url": "https://www.climgo.fr/chauffage",
                    "description": "Installation et maintenance de systèmes de chauffage, PAC, planchers chauffants à Andernos-les-Bains"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "WebPage",
                    "name": "Climatisation Andernos-les-Bains",
                    "url": "https://www.climgo.fr/climatisation",
                    "description": "Installation et maintenance de systèmes de climatisation à Andernos-les-Bains"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "WebPage",
                    "name": "Eau Chaude Sanitaire Andernos-les-Bains",
                    "url": "https://www.climgo.fr/eau-chaude-sanitaire",
                    "description": "Installation et maintenance de systèmes d'eau chaude sanitaire à Andernos-les-Bains"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "WebPage",
                    "name": "Maintenance Andernos-les-Bains",
                    "url": "https://www.climgo.fr/maintenance",
                    "description": "Entretien et dépannage de vos équipements thermiques à Andernos-les-Bains"
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

        {/* JSON-LD FAQ - Questions intermédiaires pour Andernos-les-Bains (ville moyenne) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Intervenez-vous à domicile sur Andernos-les-Bains ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, ClimGO intervient à domicile sur Andernos-les-Bains et ses environs. Nos techniciens se déplacent chez vous pour l'installation, la maintenance et le dépannage de vos équipements de chauffage et climatisation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Proposez-vous des devis gratuits à Andernos-les-Bains ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolument ! ClimGO propose des devis gratuits et sans engagement à Andernos-les-Bains. Nos experts évaluent vos besoins et vous proposent la solution la plus adaptée à votre projet."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Quels sont vos délais d'intervention à Andernos-les-Bains ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "À Andernos-les-Bains, ClimGO s'engage sur des délais rapides : devis sous 24h, installation sous 15 jours et dépannage d'urgence sous 4h. Nous assurons votre confort rapidement."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Êtes-vous certifiés RGE pour Andernos-les-Bains ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, ClimGO est certifié RGE (Reconnu Garant de l'Environnement). Cette certification vous permet de bénéficier des aides de l'État et garantit la qualité de nos installations sur Andernos-les-Bains."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Pouvez-vous m'aider avec MaPrimeRénov' à Andernos-les-Bains ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, ClimGO vous accompagne dans vos démarches MaPrimeRénov' à Andernos-les-Bains. Nous calculons les montants éligibles et vous aidons à obtenir jusqu'à 90% d'aides selon vos revenus."
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
