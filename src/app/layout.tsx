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
    default: "Climatisation & Pompe à Chaleur RGE en Gironde | ClimGO",
    template: "%s | ClimGO"
  },
  description: "Spécialiste RGE de l'installation et de l'entretien de climatisation et pompe à chaleur en Gironde et Nord des Landes. Profitez des aides de l'État pour vos travaux.",
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
    title: "ClimGO | Chauffagiste Climaticien RGE Gironde",
    description: "Spécialiste RGE de l'installation et de l'entretien de climatisation et pompe à chaleur en Gironde et Nord des Landes. Profitez des aides de l'État pour vos travaux.",
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
    title: "ClimGO | Chauffagiste Climaticien RGE Gironde",
    description: "Spécialiste RGE de l'installation et de l'entretien de climatisation et pompe à chaleur en Gironde et Nord des Landes. Profitez des aides de l'État pour vos travaux.",
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
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 44.6969,
                "longitude": -0.8533
              },
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
                "https://www.facebook.com/profile.php?id=61579576031066",
                "https://www.linkedin.com/company/climgo",
                "https://www.instagram.com/climgo_climatisation_chauffage/"
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
                    "name": "Qualit'EnR"
                  }
                },
              ],
              "areaServed": [
                {
                  "@type": "State",
                  "name": "Gironde"
                },
                {
                  "@type": "City",
                  "name": "Bordeaux"
                },
                {
                  "@type": "Place",
                  "name": "Bassin d'Arcachon"
                }
             ],
              "foundingDate": "2025-05-13",
              "founder": {
                "@type": "Person",
                "name": "Benjamin CARDOSO"
              },
              // Données d'avis et de notation pour Google (vrais avis GMB)
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "23",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Lilou AUVRAY"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "Travail soigné et rapide, le résultat est impeccable. Je recommande !",
                  "datePublished": "2024-07"
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Jérome Bernard"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "Jeune entrepreneur avec des qualités d'écoutes, de conseils et un professionnalisme à la hauteur de mes attentes.",
                  "datePublished": "2024-06"
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Celine Raison"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "Je vous recommande Mr Cardoso, jeune entrepreneur sérieux, travail soigné, avec de l'expérience.",
                  "datePublished": "2024-07"
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Couvidoux Charly"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "Pose de climatisation sur la commune de Biganos, sérieux professionnel et de qualité.",
                  "datePublished": "2024-07"
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Yoan Demondion"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "Très satisfait de l'intervention pour mon système gainable. Le travail été propre, soigné et réalisé avec beaucoup de professionnalisme.",
                  "datePublished": "2024-07"
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Thomas Barbotin"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "Rapide, précis, efficace !",
                  "datePublished": "2024-08"
                }
              ],
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
                    "name": "Nos services",
                    "url": "https://www.climgo.fr/services",
                    "description": "Découvrez tous nos services : chauffage, climatisation, chauffe-eau"
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
                    "name": "Chauffage",
                    "url": "https://www.climgo.fr/chauffage",
                    "description": "Installation et maintenance de systèmes de chauffage, PAC, planchers chauffants"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "WebPage",
                    "name": "Eau chaude sanitaire",
                    "url": "https://www.climgo.fr/eau-chaude-sanitaire",
                    "description": "Installation et maintenance de chauffe-eau thermodynamiques et électriques"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "item": {
                    "@type": "WebPage",
                    "name": "Contact",
                    "url": "https://www.climgo.fr/contact",
                    "description": "Contactez-nous pour un devis gratuit et personnalisé"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 6,
                  "item": {
                    "@type": "WebPage",
                    "name": "Zones d'interventions",
                    "url": "https://www.climgo.fr/zones-interventions",
                    "description": "Découvrez nos zones d'intervention en Gironde et Bassin d'Arcachon"
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
