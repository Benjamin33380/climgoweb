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
    default: "ClimGO Saint-Médard-en-Jalles - Chauffage & Climatisation | Installation PAC, Entretien",
    template: "%s | ClimGO Saint-Médard-en-Jalles"
  },
  description: "ClimGO, expert chauffage et climatisation à Saint-Médard-en-Jalles. Installation PAC air/eau, climatisation réversible, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
  keywords: ["chauffage Saint-Médard-en-Jalles", "climatisation Saint-Médard-en-Jalles", "pompe à chaleur Saint-Médard-en-Jalles", "installation PAC Saint-Médard-en-Jalles", "entretien chauffage Saint-Médard-en-Jalles", "artisan RGE Saint-Médard-en-Jalles", "PAC air-eau Saint-Médard-en-Jalles", "PAC air-air Saint-Médard-en-Jalles", "plancher chauffant Saint-Médard-en-Jalles", "radiateurs Saint-Médard-en-Jalles", "maintenance Saint-Médard-en-Jalles", "dépannage Saint-Médard-en-Jalles", "devis gratuit Saint-Médard-en-Jalles"],
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
    url: "https://www.climgo.fr/villes/saint-medard-en-jalles-chauffage-climatisation",
    title: "ClimGO Saint-Médard-en-Jalles - Chauffage & Climatisation | Installation PAC, Entretien",
    description: "ClimGO, expert chauffage et climatisation à Saint-Médard-en-Jalles. Installation PAC air/eau, climatisation réversible, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    siteName: "ClimGO",
    images: [
      {
        url: "/img/climdame.png",
        width: 1200,
        height: 630,
        alt: "ClimGO Saint-Médard-en-Jalles - Chauffage & Climatisation | Installation PAC, Entretien",
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
    title: "ClimGO Saint-Médard-en-Jalles - Chauffage & Climatisation | Installation PAC, Entretien",
    description: "ClimGO, expert chauffage et climatisation à Saint-Médard-en-Jalles. Installation PAC air/eau, climatisation réversible, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    images: ["/img/climdame.png"],
  },
  alternates: {
    canonical: "https://www.climgo.fr/villes/saint-medard-en-jalles-chauffage-climatisation",
    languages: {
      'fr-FR': 'https://www.climgo.fr/villes/saint-medard-en-jalles-chauffage-climatisation',
    },
  },
  verification: {
    google: "Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g",
    other: { bing: "VERIFICATION_CODE_TO_ADD" },
  },
  manifest: "/favicon/site.webmanifest",
  other: {
    "zones-desservies": "Saint-Médard-en-Jalles, Bordeaux Métropole, Gironde, Nouvelle-Aquitaine",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "ClimGO Saint-Médard-en-Jalles",
    "application-name": "ClimGO Saint-Médard-en-Jalles",
    "msapplication-TileColor": "#0ea5e9",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function SaintMedardEnJallesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <PerformanceOptimizations />
        
        {/* Schéma JSON-LD principal - LocalBusiness pour Saint-Médard-en-Jalles */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "ClimGO Saint-Médard-en-Jalles",
              "legalName": "ClimGO",
              "url": "https://www.climgo.fr/villes/saint-medard-en-jalles-chauffage-climatisation",
              "telephone": "+33766460008",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.climgo.fr/img/climdame.png",
                "width": 1200,
                "height": 630
              },
              "image": "https://www.climgo.fr/img/climdame.png",
              "description": "ClimGO, expert chauffage et climatisation à Saint-Médard-en-Jalles. Installation PAC air/eau, climatisation réversible, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
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
                  "name": "Saint-Médard-en-Jalles"
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
                  "name": "Eysines"
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
                  "name": "Martignas-sur-Jalle"
                },
                {
                  "@type": "Place",
                  "name": "Saint-Aubin-de-Médoc"
                },
                {
                  "@type": "Place",
                  "name": "Parempuyre"
                }
              ],
              "foundingDate": "2025",
              "founder": {
                "@type": "Person",
                "name": "ClimGO Team"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Services ClimGO Saint-Médard-en-Jalles",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Chauffage Saint-Médard-en-Jalles",
                      "description": "Installation et maintenance de systèmes de chauffage, PAC, planchers chauffants à Saint-Médard-en-Jalles",
                      "url": "https://www.climgo.fr/chauffage",
                      "category": "Chauffage"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Climatisation Saint-Médard-en-Jalles",
                      "description": "Installation et maintenance de systèmes de climatisation à Saint-Médard-en-Jalles",
                      "url": "https://www.climgo.fr/climatisation",
                      "category": "Climatisation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Eau Chaude Sanitaire Saint-Médard-en-Jalles",
                      "description": "Installation et maintenance de systèmes d'eau chaude sanitaire à Saint-Médard-en-Jalles",
                      "url": "https://www.climgo.fr/eau-chaude-sanitaire",
                      "category": "Eau Chaude Sanitaire"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Maintenance Saint-Médard-en-Jalles",
                      "description": "Entretien et dépannage de vos équipements thermiques à Saint-Médard-en-Jalles",
                      "url": "https://www.climgo.fr/maintenance",
                      "category": "Maintenance"
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* JSON-LD pour la page web de Saint-Médard-en-Jalles */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "ClimGO Saint-Médard-en-Jalles - Chauffage & Climatisation",
              "url": "https://www.climgo.fr/villes/saint-medard-en-jalles-chauffage-climatisation",
              "description": "ClimGO, expert chauffage et climatisation à Saint-Médard-en-Jalles. Installation PAC air/eau, climatisation réversible, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
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
              "name": "Services ClimGO Saint-Médard-en-Jalles",
              "description": "Liste des services proposés par ClimGO à Saint-Médard-en-Jalles",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "WebPage",
                    "name": "Chauffage Saint-Médard-en-Jalles",
                    "url": "https://www.climgo.fr/chauffage",
                    "description": "Installation et maintenance de systèmes de chauffage, PAC, planchers chauffants à Saint-Médard-en-Jalles"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "WebPage",
                    "name": "Climatisation Saint-Médard-en-Jalles",
                    "url": "https://www.climgo.fr/climatisation",
                    "description": "Installation et maintenance de systèmes de climatisation à Saint-Médard-en-Jalles"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "WebPage",
                    "name": "Eau Chaude Sanitaire Saint-Médard-en-Jalles",
                    "url": "https://www.climgo.fr/eau-chaude-sanitaire",
                    "description": "Installation et maintenance de systèmes d'eau chaude sanitaire à Saint-Médard-en-Jalles"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "WebPage",
                    "name": "Maintenance Saint-Médard-en-Jalles",
                    "url": "https://www.climgo.fr/maintenance",
                    "description": "Entretien et dépannage de vos équipements thermiques à Saint-Médard-en-Jalles"
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

        {/* JSON-LD FAQ - Questions intermédiaires pour Saint-Médard-en-Jalles (ville moyenne) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Intervenez-vous à domicile sur Saint-Médard-en-Jalles ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, ClimGO intervient à domicile sur Saint-Médard-en-Jalles et ses environs. Nos techniciens se déplacent chez vous pour l'installation, la maintenance et le dépannage de vos équipements de chauffage et climatisation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Proposez-vous des devis gratuits à Saint-Médard-en-Jalles ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolument ! ClimGO propose des devis gratuits et sans engagement à Saint-Médard-en-Jalles. Nos experts évaluent vos besoins et vous proposent la solution la plus adaptée à votre projet."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Quels sont vos délais d'intervention à Saint-Médard-en-Jalles ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "À Saint-Médard-en-Jalles, ClimGO s'engage sur des délais rapides : devis sous 24h, installation sous 15 jours et dépannage d'urgence sous 4h. Nous assurons votre confort rapidement."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Êtes-vous certifiés RGE pour Saint-Médard-en-Jalles ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, ClimGO est certifié RGE (Reconnu Garant de l'Environnement). Cette certification vous permet de bénéficier des aides de l'État et garantit la qualité de nos installations sur Saint-Médard-en-Jalles."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Pouvez-vous m'aider avec MaPrimeRénov' à Saint-Médard-en-Jalles ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, ClimGO vous accompagne dans vos démarches MaPrimeRénov' à Saint-Médard-en-Jalles. Nous calculons les montants éligibles et vous aidons à obtenir jusqu'à 90% d'aides selon vos revenus."
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
