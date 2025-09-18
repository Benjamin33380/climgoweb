// app/villes/arcachon-chauffage-climatisation/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { getCityCoordinates, generateGeoJsonLd, generateServiceAreaJsonLd } from "@/config/geo";

const SITE = "https://www.climgo.fr";
const PATH = "/villes/arcachon-chauffage-climatisation";
const PAGE_URL = `${SITE}${PATH}`;
const OG_IMAGE = `${SITE}/villes/arca.webp`;

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
    { media: "(prefers-color-scheme: light)", color: "#f9fafb" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  colorScheme: "light dark",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "ClimGO Arcachon – Chauffage & Climatisation",
    template: "%s | ClimGO Arcachon",
  },
  description:
    "Expert chauffage & climatisation à Arcachon (33120). Pompes à chaleur air/eau, clim réversible, entretien et dépannage. Artisan RGE.",
  authors: [{ name: "ClimGO", url: SITE }],
  creator: "ClimGO",
  publisher: "ClimGO",
  formatDetection: { email: false, address: false, telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: PAGE_URL,
    siteName: "ClimGO",
    title: "ClimGO Arcachon – Chauffage & Climatisation",
    description:
      "Installation PAC (air/eau), clim réversible, entretien & dépannage à Arcachon. Devis rapide.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "ClimGO Arcachon" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@climgo_fr",
    creator: "@climgo_fr",
    title: "ClimGO Arcachon – Chauffage & Climatisation",
    description:
      "PAC, clim réversible, entretien & dépannage à Arcachon. Artisan RGE.",
    images: [OG_IMAGE],
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
  alternates: {
    canonical: PATH,
    languages: {
      "fr-FR": PATH,
      "x-default": PATH,
    },
  },
  verification: {
    google: "Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g",
    other: { bing: "VERIFICATION_CODE_TO_ADD" },
  },
  manifest: "/favicon/site.webmanifest",
  other: {
    "zones-desservies": "Arcachon, Bassin d'Arcachon, Gironde, Nouvelle-Aquitaine",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "ClimGO Arcachon",
    "application-name": "ClimGO Arcachon",
    "msapplication-TileColor": "#0ea5e9",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function ArcachonLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Coordonnées de la mairie d'Arcachon
  const arcachonCoords = getCityCoordinates('arcachon');
  
  // 1) Entreprise locale (LocalBusiness)
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness"],
    name: "ClimGO - Installation Climatisation en Gironde",
    url: PAGE_URL,
    image: `${SITE}/img/serp/clim.png`,
    telephone: "+33766460008",
    address: {
      "@type": "PostalAddress",
      streetAddress: "28 rue de Cantelaude",
      addressLocality: "Marcheprime",
      addressRegion: "Nouvelle-Aquitaine",
      postalCode: "33380",
      addressCountry: "FR",
    },
    // Données géographiques de la mairie d'Arcachon
    "geo": arcachonCoords ? generateGeoJsonLd(arcachonCoords, "Mairie d'Arcachon") : undefined,
    // Zone de service avec géolocalisation (rayon de 25km autour d'Arcachon)
    "serviceArea": arcachonCoords ? generateServiceAreaJsonLd(arcachonCoords, "25000") : undefined,
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "19:30"
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Gironde"
      },
      {
        "@type": "AdministrativeArea",
        name: "Bordeaux Métropole"
      },
      {
        "@type": "AdministrativeArea",
        name: "Bassin d'Arcachon"
      },
      {
        "@type": "Place",
        name: "Arcachon",
        "geo": arcachonCoords ? generateGeoJsonLd(arcachonCoords, "Mairie d'Arcachon") : undefined
      },
      {
        "@type": "Place",
        name: "Marcheprime",
        "geo": getCityCoordinates('marcheprime') ? generateGeoJsonLd(getCityCoordinates('marcheprime')!, "Mairie de Marcheprime") : undefined
      },
      {
        "@type": "Place",
        name: "Biganos",
        "geo": getCityCoordinates('biganos') ? generateGeoJsonLd(getCityCoordinates('biganos')!, "Mairie de Biganos") : undefined
      },
      {
        "@type": "Place",
        name: "Mios",
        "geo": getCityCoordinates('mios') ? generateGeoJsonLd(getCityCoordinates('mios')!, "Mairie de Mios") : undefined
      },
      {
        "@type": "Place",
        name: "Bordeaux",
        "geo": getCityCoordinates('bordeaux') ? generateGeoJsonLd(getCityCoordinates('bordeaux')!, "Mairie de Bordeaux") : undefined
      },
      {
        "@type": "Place",
        name: "Andernos-les-Bains",
        "geo": getCityCoordinates('andernos-les-bains') ? generateGeoJsonLd(getCityCoordinates('andernos-les-bains')!, "Mairie d'Andernos-les-Bains") : undefined
      }
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "25"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services ClimGO Arcachon",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Chauffage Arcachon",
            description: "Installation et maintenance de systèmes de chauffage, PAC, planchers chauffants à Arcachon",
            url: "https://www.climgo.fr/chauffage",
            category: "Chauffage"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Climatisation Arcachon",
            description: "Installation et maintenance de systèmes de climatisation à Arcachon",
            url: "https://www.climgo.fr/climatisation",
            category: "Climatisation"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Eau Chaude Sanitaire Arcachon",
            description: "Installation et maintenance de systèmes d'eau chaude sanitaire à Arcachon",
            url: "https://www.climgo.fr/eau-chaude-sanitaire",
            category: "Eau Chaude Sanitaire"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Maintenance Arcachon",
            description: "Entretien et dépannage de vos équipements thermiques à Arcachon",
            url: "https://www.climgo.fr/maintenance",
            category: "Maintenance"
          }
        }
      ]
    },
    description: "Installation, entretien et dépannage de systèmes de chauffage et climatisation à Arcachon"
  };

  // 2) Contexte de la page
  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "ClimGO Arcachon – Chauffage & Climatisation",
    url: PAGE_URL,
    inLanguage: "fr-FR",
    isPartOf: { "@type": "WebSite", name: "ClimGO", url: SITE },
    description:
      "Installation, entretien et dépannage PAC & clim à Arcachon. Devis rapide.",
  };

  // 3) Fil d'Ariane
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { 
        "@type": "ListItem", 
        position: 1, 
        name: "Accueil", 
        item: `${SITE}/` 
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Zones desservies",
        item: `${SITE}/zones-desservies`,
      },
      { 
        "@type": "ListItem", 
        position: 3, 
        name: "Arcachon", 
        item: PAGE_URL 
      },
    ],
  };

  // 4) FAQ - Questions spécifiques à Arcachon
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Combien coûte l'installation d'une climatisation réversible à Arcachon ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "À Arcachon, l'installation d'une climatisation réversible coûte entre 1 500€ et 4 500€ selon la puissance et le nombre de pièces. Les prix incluent la pose, la mise en service et la garantie. Un devis gratuit permet d'obtenir un tarif précis adapté à votre logement."
        }
      },
      {
        "@type": "Question",
        name: "Que faire si ma climatisation ne fait plus de froid à Arcachon ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si votre climatisation ne produit plus de froid, vérifiez d'abord le filtre à air et le thermostat. Le problème peut venir d'un manque de gaz frigorigène, d'un dysfonctionnement du compresseur ou d'un blocage. Un technicien peut diagnostiquer et réparer rapidement le problème."
        }
      },
      {
        "@type": "Question",
        name: "Quelle est la meilleure marque de pompe à chaleur pour Arcachon ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les marques Daikin, Mitsubishi Electric et Panasonic sont particulièrement adaptées au climat d'Arcachon. Elles offrent d'excellentes performances en climat océanique et une bonne résistance à l'humidité. Le choix dépend de votre budget et de vos besoins spécifiques."
        }
      },
      {
        "@type": "Question",
        name: "Comment entretenir sa climatisation à Arcachon ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "L'entretien annuel de votre climatisation à Arcachon est essentiel. Il comprend le nettoyage des filtres, la vérification du niveau de gaz, le contrôle des connexions électriques et le nettoyage de l'unité extérieure. Un contrat de maintenance garantit un fonctionnement optimal."
        }
      },
      {
        "@type": "Question",
        name: "Pompe à chaleur air/eau ou chauffe-eau thermodynamique à Arcachon ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La pompe à chaleur air/eau chauffe votre logement et produit l'eau chaude sanitaire. Le chauffe-eau thermodynamique ne produit que l'eau chaude. Pour un projet complet, la PAC air/eau est plus économique. Pour remplacer uniquement un chauffe-eau, le thermodynamique est plus adapté."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
      <GoogleAnalytics />
      {children}
    </>
  );
}