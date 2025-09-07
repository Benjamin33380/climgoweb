import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NewHeader from "@/components/ui/NewHeader"
import MobileHeader from "@/components/ui/MobileHeader";
import Footer from "@/components/ui/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { UserProvider } from "@/components/providers/UserProvider";
import { GlobalScrollShadow } from '@/components/ui/GlobalScrollShadow';
import { scrollShadowConfig } from '@/config/scrollShadow';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import PassiveEventListeners from '@/components/PassiveEventListeners';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { HEADQUARTERS_COORDINATES, generateGeoJsonLd, generateServiceAreaJsonLd } from "@/config/geo";

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
  colorScheme: "light dark",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.climgo.fr'),
  title: {
    default: "ClimGO - Spécialiste Chauffage & Climatisation en Gironde",
    template: "%s | ClimGO"
  },
  description: "Expert chauffage climatisation Gironde. Installation PAC, entretien, dépannage. Artisan RGE. Devis gratuit. 07.66.46.00.08",
  keywords: ["chauffage Gironde", "climatisation Gironde", "pompe à chaleur", "entretien clim", "installateur chauffage", "artisan RGE", "Bordeaux", "Bassin d'Arcachon", "PAC air-eau", "PAC air-air", "plancher chauffant", "radiateurs", "maintenance", "dépannage"],
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
    url: "https://www.climgo.fr",
    title: "ClimGO - Spécialiste Chauffage & Climatisation en Gironde",
    description: "Expert chauffage climatisation Gironde. Installation PAC, entretien, dépannage. Artisan RGE. Devis gratuit. 07.66.46.00.08",
    siteName: "ClimGO",
    images: [
      {
        url: "/img/climdame.png",
        width: 1200,
        height: 630,
        alt: "ClimGO - Chauffage & Climatisation Gironde",
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
    title: "ClimGO - Spécialiste Chauffage & Climatisation en Gironde",
    description: "Expert chauffage climatisation Gironde. Installation PAC, entretien, dépannage. Artisan RGE. Devis gratuit. 07.66.46.00.08",
    images: ["/img/climdame.png"],
  },
  alternates: {
    canonical: "https://www.climgo.fr",
    languages: {
      'x-default': 'https://www.climgo.fr',
      'fr-FR': 'https://www.climgo.fr',
    },
  },
  verification: {
    google: "Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g",
    other: { bing: "VERIFICATION_CODE_TO_ADD" },
  },
  manifest: "/favicon/site.webmanifest",
  other: {
    "zones-desservies": "Gironde, Bordeaux Métropole, Bassin d'Arcachon",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "ClimGO",
    "application-name": "ClimGO",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        {/* Meta tags pour Safari status bar */}
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        
        {/* Schéma JSON-LD principal */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "ClimGO",
              "legalName": "ClimGO",
              "url": "https://www.climgo.fr",
              "telephone": "+33766460008",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.climgo.fr/img/climdame.png",
                "width": 1200,
                "height": 630
              },
              "image": "https://www.climgo.fr/img/climdame.png",
              "description": "ClimGO, expert chauffage et climatisation en Gironde. Installation PAC, entretien et dépannage. Artisan RGE. Devis gratuit.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "28 rue de Cantelaude",
                "addressLocality": "Marcheprime",
                "addressRegion": "Nouvelle-Aquitaine",
                "postalCode": "33380",
                "addressCountry": "FR"
              },
              // Données géographiques du siège social ClimGO
              "geo": generateGeoJsonLd(HEADQUARTERS_COORDINATES, "Siège social ClimGO"),
              "serviceArea": generateServiceAreaJsonLd(HEADQUARTERS_COORDINATES, "50000"),
            "priceRange": "$$",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "08:00",
              "closes": "19:30"
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
              // Certifications et qualifications
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "Certification RGE",
                  "description": "Reconnu Garant de l'Environnement pour les pompes à chaleur",
                  "credentialCategory": "certification",
                  "recognizedBy": {
                    "@type": "Organization",
                    "name": "ADEME"
                  }
                },
                {
                  "@type": "EducationalOccupationalCredential", 
                  "name": "Qualibat",
                  "description": "Certification professionnelle pour les travaux de chauffage",
                  "credentialCategory": "certification"
                }
              ],
              "areaServed": [
                {
                  "@type": "AdministrativeArea",
                  "name": "Gironde"
                },
                {
                  "@type": "AdministrativeArea",
                  "name": "Bordeaux Métropole"
                },
                {
                  "@type": "AdministrativeArea",
                  "name": "Bassin d'Arcachon"
                },
                {
                  "@type": "City",
                  "name": "Marcheprime"
                },
                {
                  "@type": "City",
                  "name": "Biganos"
                },
                {
                  "@type": "City",
                  "name": "Mios"
                },
                {
                  "@type": "City",
                  "name": "Bordeaux"
                },
                {
                  "@type": "City",
                  "name": "Biscarrosse"
                },
                {
                  "@type": "City",
                  "name": "Andernos-les-Bains"
                },
                {
                  "@type": "City",
                  "name": "Pessac"
                },
                {
                  "@type": "City",
                  "name": "Gujan-Mestras"
                },
                {
                  "@type": "City",
                  "name": "La Teste-de-Buch"
                },
                {
                  "@type": "City",
                  "name": "Cestas"
                },
                {
                  "@type": "City",
                  "name": "Le Barp"
                },
                {
                  "@type": "City",
                  "name": "Audenge"
                },
                {
                  "@type": "City",
                  "name": "Lanton"
                },
                {
                  "@type": "City",
                  "name": "Lège-Cap-Ferret"
                },
                {
                  "@type": "City",
                  "name": "Pyla-sur-Mer"
                }
             ],
              "foundingDate": "2014",
              "founder": {
                "@type": "Person",
                "name": "ClimGO Team"
              },
              // Données d'avis et de notation pour Google
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "127",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Marie L."
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "Service excellent ! Installation de PAC parfaite, équipe professionnelle et ponctuelle. Je recommande vivement ClimGO."
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Jean-Pierre M."
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "Très satisfait de l'installation de ma climatisation. Devis clair, travail soigné et prix compétitif. Merci ClimGO !"
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Sophie D."
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "4",
                    "bestRating": "5"
                  },
                  "reviewBody": "Bon service de maintenance, technicien compétent. Petit délai sur le rendez-vous mais travail de qualité."
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Services ClimGO",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Chauffage",
                      "description": "Installation et maintenance de systèmes de chauffage, PAC, planchers chauffants",
                      "url": "https://www.climgo.fr/chauffage",
                      "category": "Chauffage"
                    },
                    "price": "8000-25000",
                    "priceCurrency": "EUR",
                    "availability": "https://schema.org/InStock",
                    "validFrom": "2024-01-01",
                    "validThrough": "2024-12-31"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Climatisation",
                      "description": "Installation et maintenance de systèmes de climatisation",
                      "url": "https://www.climgo.fr/climatisation",
                      "category": "Climatisation"
                    },
                    "price": "2000-8000",
                    "priceCurrency": "EUR",
                    "availability": "https://schema.org/InStock",
                    "validFrom": "2024-01-01",
                    "validThrough": "2024-12-31"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Eau Chaude Sanitaire",
                      "description": "Installation et maintenance de systèmes d'eau chaude sanitaire",
                      "url": "https://www.climgo.fr/eau-chaude-sanitaire",
                      "category": "Eau Chaude Sanitaire"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Maintenance",
                      "description": "Entretien et dépannage de vos équipements thermiques",
                      "url": "https://www.climgo.fr/maintenance",
                      "category": "Maintenance"
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* JSON-LD pour le site web */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "ClimGO",
              "url": "https://www.climgo.fr",
              "description": "ClimGO, expert chauffage et climatisation en Gironde. Installation PAC, entretien et dépannage. Artisan RGE. Devis gratuit.",
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
              "name": "Services ClimGO",
              "description": "Liste des services proposés par ClimGO",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "WebPage",
                    "name": "Chauffage",
                    "url": "https://www.climgo.fr/chauffage",
                    "description": "Installation et maintenance de systèmes de chauffage, PAC, planchers chauffants"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "WebPage",
                    "name": "Climatisation",
                    "url": "https://www.climgo.fr/climatisation",
                    "description": "Installation et maintenance de systèmes de climatisation"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "WebPage",
                    "name": "Eau Chaude Sanitaire",
                    "url": "https://www.climgo.fr/eau-chaude-sanitaire",
                    "description": "Installation et maintenance de systèmes d'eau chaude sanitaire"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "WebPage",
                    "name": "Maintenance",
                    "url": "https://www.climgo.fr/maintenance",
                    "description": "Entretien et dépannage de vos équipements thermiques"
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

        {/* JSON-LD FAQ - Questions les plus recherchées */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Combien coûte l'installation d'une pompe à chaleur en Gironde ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Le coût d'installation d'une PAC varie entre 8 000€ et 25 000€ selon le type (air/air, air/eau, géothermie) et la surface. ClimGO propose des devis gratuits et vous accompagne pour obtenir les aides MaPrimeRénov'."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Quels sont les délais d'intervention d'un chauffagiste en Gironde ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ClimGO s'engage sur des délais rapides : devis sous 24h, installation sous 15 jours et dépannage d'urgence sous 4h. Nous couvrons toute la Gironde et le Bassin d'Arcachon."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Comment obtenir MaPrimeRénov' pour ma rénovation énergétique ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ClimGO vous accompagne dans vos démarches MaPrimeRénov'. Nous calculons les montants éligibles, montons votre dossier et vous aidons à obtenir jusqu'à 90% d'aides selon vos revenus et le type d'équipement."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Quelle est la différence entre PAC air/air et air/eau ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "La PAC air/air chauffe et refroidit l'air ambiant. La PAC air/eau chauffe l'eau pour radiateurs/plancher chauffant et produit l'eau chaude sanitaire. ClimGO vous conseille selon vos besoins et votre installation existante."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Cout d'installation d'une pompe à chaleur en Gironde ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Le coût d'installation d'une PAC varie entre 8 000€ et 25 000€ selon le type (air/air, air/eau, géothermie) et la surface. ClimGO propose des devis gratuits et vous accompagne pour obtenir les aides MaPrimeRénov'."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-black`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <UserProvider>
              <GoogleAnalytics />
              <PassiveEventListeners />
              <SpeedInsights />
              <GlobalScrollShadow
                size={scrollShadowConfig.size}
                shadowColor={scrollShadowConfig.shadowColor}
                blurIntensity={scrollShadowConfig.blurIntensity}
                className="min-h-screen bg-background text-foreground"
              >
                {/* Header Desktop */}
                <div className="hidden lg:block bg-black">
                  <NewHeader />
                </div>
                {/* Header Mobile */}
                <MobileHeader />
                
                <main className="flex-1">{children}</main>
                <Footer />
              </GlobalScrollShadow>
            </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
