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
    default: "ClimGO Saint-Aubin-de-Médoc - Chauffage & Climatisation",
    template: "%s | ClimGO Saint-Aubin-de-Médoc"
  },
  description: "Expert chauffage climatisation Saint-Aubin-de-Médoc 33160. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.",
  keywords: ["chauffage Saint-Aubin-de-Médoc", "climatisation Saint-Aubin-de-Médoc", "pompe à chaleur Saint-Aubin-de-Médoc", "installation PAC Saint-Aubin-de-Médoc", "entretien chauffage Saint-Aubin-de-Médoc", "artisan RGE Saint-Aubin-de-Médoc", "PAC air-eau Saint-Aubin-de-Médoc", "PAC air-air Saint-Aubin-de-Médoc", "plancher chauffant Saint-Aubin-de-Médoc", "radiateurs Saint-Aubin-de-Médoc", "maintenance Saint-Aubin-de-Médoc", "dépannage Saint-Aubin-de-Médoc", "devis gratuit Saint-Aubin-de-Médoc"],
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
    url: "https://www.climgo.fr/villes/saint-aubin-de-medoc-chauffage-climatisation",
    title: "ClimGO Saint-Aubin-de-Médoc - Chauffage & Climatisation",
    description: "Expert chauffage climatisation Saint-Aubin-de-Médoc 33160. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.",
    siteName: "ClimGO",
    images: [
      {
        url: "/img/climdame.png",
        width: 1200,
        height: 630,
        alt: "ClimGO Saint-Aubin-de-Médoc - Chauffage & Climatisation | Installation PAC, Entretien",
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
    title: "ClimGO Saint-Aubin-de-Médoc - Chauffage & Climatisation",
    description: "Expert chauffage climatisation Saint-Aubin-de-Médoc 33160. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.",
    images: ["/img/climdame.png"],
  },
  alternates: {
    canonical: "https://www.climgo.fr/villes/saint-aubin-de-medoc-chauffage-climatisation",
    languages: {
      'x-default': 'https://www.climgo.fr/villes/saint-aubin-de-medoc-chauffage-climatisation',
      'fr-FR': 'https://www.climgo.fr/villes/saint-aubin-de-medoc-chauffage-climatisation',
    },
  },
  verification: {
    google: "Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g",
    other: { bing: "VERIFICATION_CODE_TO_ADD" },
  },
  manifest: "/favicon/site.webmanifest",
  other: {
    "zones-desservies": "Saint-Aubin-de-Médoc, Bordeaux Métropole, Gironde, Nouvelle-Aquitaine",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "ClimGO Saint-Aubin-de-Médoc",
    "application-name": "ClimGO Saint-Aubin-de-Médoc",
    "msapplication-TileColor": "#0ea5e9",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function SaintAubinDeMedocLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Schéma JSON-LD principal - LocalBusiness pour Saint-Aubin-de-Médoc */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "ClimGO Saint-Aubin-de-Médoc",
              "legalName": "ClimGO",
              "url": "https://www.climgo.fr/villes/saint-aubin-de-medoc-chauffage-climatisation",
              "telephone": "+33766460008",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.climgo.fr/img/climdame.png",
                "width": 1200,
                "height": 630
              },
              "image": "https://www.climgo.fr/img/climdame.png",
              "description": "ClimGO, expert chauffage et climatisation à Saint-Aubin-de-Médoc. Installation PAC air/eau, climatisation réversible, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
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
                  "name": "Saint-Aubin-de-Médoc"
                },
                {
                  "@type": "Place",
                  "name": "Bordeaux"
                },
                {
                  "@type": "Place",
                  "name": "Mérignac"
                },
                {
                  "@type": "Place",
                  "name": "Le Haillan"
                },
                {
                  "@type": "Place",
                  "name": "Blanquefort"
                },
                {
                  "@type": "Place",
                  "name": "Le Taillan-Médoc"
                },
                {
                  "@type": "Place",
                  "name": "Eysines"
                },
                {
                  "@type": "Place",
                  "name": "Bruges"
                },
                {
                  "@type": "Place",
                  "name": "Parempuyre"
                },
                {
                  "@type": "Place",
                  "name": "Ludon-Médoc"
                }
              ],
              "foundingDate": "2025",
              "founder": {
                "@type": "Person",
                "name": "ClimGO Team"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Services ClimGO Saint-Aubin-de-Médoc",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Chauffage Saint-Aubin-de-Médoc",
                      "description": "Installation et maintenance de systèmes de chauffage, PAC, planchers chauffants à Saint-Aubin-de-Médoc",
                      "url": "https://www.climgo.fr/chauffage",
                      "category": "Chauffage"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Climatisation Saint-Aubin-de-Médoc",
                      "description": "Installation et maintenance de systèmes de climatisation à Saint-Aubin-de-Médoc",
                      "url": "https://www.climgo.fr/climatisation",
                      "category": "Climatisation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Eau Chaude Sanitaire Saint-Aubin-de-Médoc",
                      "description": "Installation et maintenance de systèmes d'eau chaude sanitaire à Saint-Aubin-de-Médoc",
                      "url": "https://www.climgo.fr/eau-chaude-sanitaire",
                      "category": "Eau Chaude Sanitaire"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Maintenance Saint-Aubin-de-Médoc",
                      "description": "Entretien et dépannage de vos équipements thermiques à Saint-Aubin-de-Médoc",
                      "url": "https://www.climgo.fr/maintenance",
                      "category": "Maintenance"
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* JSON-LD pour la page web de Saint-Aubin-de-Médoc */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "ClimGO Saint-Aubin-de-Médoc - Chauffage & Climatisation",
              "url": "https://www.climgo.fr/villes/saint-aubin-de-medoc-chauffage-climatisation",
              "description": "ClimGO, expert chauffage et climatisation à Saint-Aubin-de-Médoc. Installation PAC air/eau, climatisation réversible, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
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
              "name": "Services ClimGO Saint-Aubin-de-Médoc",
              "description": "Liste des services proposés par ClimGO à Saint-Aubin-de-Médoc",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "WebPage",
                    "name": "Chauffage Saint-Aubin-de-Médoc",
                    "url": "https://www.climgo.fr/chauffage",
                    "description": "Installation et maintenance de systèmes de chauffage, PAC, planchers chauffants à Saint-Aubin-de-Médoc"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "WebPage",
                    "name": "Climatisation Saint-Aubin-de-Médoc",
                    "url": "https://www.climgo.fr/climatisation",
                    "description": "Installation et maintenance de systèmes de climatisation à Saint-Aubin-de-Médoc"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "WebPage",
                    "name": "Eau Chaude Sanitaire Saint-Aubin-de-Médoc",
                    "url": "https://www.climgo.fr/eau-chaude-sanitaire",
                    "description": "Installation et maintenance de systèmes d'eau chaude sanitaire à Saint-Aubin-de-Médoc"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "WebPage",
                    "name": "Maintenance Saint-Aubin-de-Médoc",
                    "url": "https://www.climgo.fr/maintenance",
                    "description": "Entretien et dépannage de vos équipements thermiques à Saint-Aubin-de-Médoc"
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

        {/* JSON-LD FAQ - Questions intermédiaires pour Saint-Aubin-de-Médoc (ville moyenne) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Intervenez-vous à domicile sur Saint-Aubin-de-Médoc ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, ClimGO intervient à domicile sur Saint-Aubin-de-Médoc et ses environs. Nos techniciens se déplacent chez vous pour l'installation, la maintenance et le dépannage de vos équipements de chauffage et climatisation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Proposez-vous des devis gratuits à Saint-Aubin-de-Médoc ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolument ! ClimGO propose des devis gratuits et sans engagement à Saint-Aubin-de-Médoc. Nos experts évaluent vos besoins et vous proposent la solution la plus adaptée à votre projet."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Quels sont vos délais d'intervention à Saint-Aubin-de-Médoc ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "À Saint-Aubin-de-Médoc, ClimGO s'engage sur des délais rapides : devis sous 24h, installation sous 15 jours et dépannage d'urgence sous 4h. Nous assurons votre confort rapidement."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Êtes-vous certifiés RGE pour Saint-Aubin-de-Médoc ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, ClimGO est certifié RGE (Reconnu Garant de l'Environnement). Cette certification vous permet de bénéficier des aides de l'État et garantit la qualité de nos installations sur Saint-Aubin-de-Médoc."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Pouvez-vous m'aider avec MaPrimeRénov' à Saint-Aubin-de-Médoc ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, ClimGO vous accompagne dans vos démarches MaPrimeRénov' à Saint-Aubin-de-Médoc. Nous calculons les montants éligibles et vous aidons à obtenir jusqu'à 90% d'aides selon vos revenus."
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
