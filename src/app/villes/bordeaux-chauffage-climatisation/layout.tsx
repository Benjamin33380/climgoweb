// app/villes/bordeaux-chauffage-climatisation/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const SITE = "https://www.climgo.fr";
const PATH = "/villes/bordeaux-chauffage-climatisation";
const PAGE_URL = `${SITE}${PATH}`;
const OG_IMAGE = `${SITE}/villes/bordeaux.webp`;

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
  metadataBase: new URL(SITE),
  title: {
    default: "ClimGO Bordeaux – Chauffage & Climatisation",
    template: "%s | ClimGO Bordeaux",
  },
  description:
    "Expert chauffage & climatisation à Bordeaux (33000). Pompes à chaleur air/eau, clim réversible, entretien et dépannage. Artisan RGE.",
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
    title: "ClimGO Bordeaux – Chauffage & Climatisation",
    description:
      "Installation PAC (air/eau), clim réversible, entretien & dépannage à Bordeaux. Devis rapide.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "ClimGO Bordeaux" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@climgo_fr",
    creator: "@climgo_fr",
    title: "ClimGO Bordeaux – Chauffage & Climatisation",
    description:
      "PAC, clim réversible, entretien & dépannage à Bordeaux. Artisan RGE.",
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
    languages: { "fr-FR": PATH, "x-default": PATH },
  },
  verification: {
    google: "Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g",
    other: { bing: "VERIFICATION_CODE_TO_ADD" },
  },
  manifest: "/favicon/site.webmanifest",
  other: {
    "zones-desservies": "Bordeaux, Gironde, Nouvelle-Aquitaine",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "ClimGO Bordeaux",
    "application-name": "ClimGO Bordeaux",
    "msapplication-TileColor": "#0ea5e9",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function BordeauxLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // 1) Entreprise locale
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
        "@type": "City",
        name: "Bordeaux"
      },
      {
        "@type": "City",
        name: "Mérignac"
      },
      {
        "@type": "City",
        name: "Pessac"
      },
      {
        "@type": "City",
        name: "Talence"
      },
      {
        "@type": "City",
        name: "Le Bouscat"
      },
      {
        "@type": "City",
        name: "Eysines"
      },
      {
        "@type": "City",
        name: "Bruges"
      }
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "25"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services ClimGO Bordeaux",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Chauffage Bordeaux",
            description: "Installation et maintenance de systèmes de chauffage, PAC, planchers chauffants à Bordeaux",
            url: "https://www.climgo.fr/chauffage",
            category: "Chauffage"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Climatisation Bordeaux",
            description: "Installation et maintenance de systèmes de climatisation à Bordeaux",
            url: "https://www.climgo.fr/climatisation",
            category: "Climatisation"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Eau Chaude Sanitaire Bordeaux",
            description: "Installation et maintenance de systèmes d'eau chaude sanitaire à Bordeaux",
            url: "https://www.climgo.fr/eau-chaude-sanitaire",
            category: "Eau Chaude Sanitaire"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Maintenance Bordeaux",
            description: "Entretien et dépannage de vos équipements thermiques à Bordeaux",
            url: "https://www.climgo.fr/maintenance",
            category: "Maintenance"
          }
        }
      ]
    },
    description: "Installation, entretien et dépannage de systèmes de chauffage et climatisation à Bordeaux"
  };

  // 2) Contexte de la page
  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "ClimGO Bordeaux – Chauffage & Climatisation",
    url: PAGE_URL,
    inLanguage: "fr-FR",
    isPartOf: { "@type": "WebSite", name: "ClimGO", url: SITE },
    description:
      "Installation, entretien et dépannage PAC & clim à Bordeaux. Devis rapide.",
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
        name: "Bordeaux", 
        item: PAGE_URL 
      },
    ],
  };

  // 4) FAQ - Questions spécifiques à Bordeaux
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Prix installation pompe à chaleur air/eau à Bordeaux ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "À Bordeaux, l'installation d'une pompe à chaleur air/eau coûte entre 8 000€ et 20 000€ selon la puissance et la surface. Avec MaPrimeRénov', vous pouvez bénéficier d'aides jusqu'à 5 000€. Un devis gratuit permet de calculer précisément le coût de votre projet."
        }
      },
      {
        "@type": "Question",
        name: "Que faire si ma chaudière est en panne à Bordeaux ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En cas de panne de chaudière, vérifiez d'abord l'alimentation électrique et le gaz. Si le problème persiste, un technicien peut intervenir rapidement pour diagnostiquer et réparer. Pour les urgences, un service de dépannage 7j/7 est disponible à Bordeaux."
        }
      },
      {
        "@type": "Question",
        name: "Climatiseur monosplit ou multisplit pour un appartement à Bordeaux ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pour un appartement à Bordeaux, le monosplit convient pour une seule pièce. Le multisplit permet de climatiser plusieurs pièces avec une seule unité extérieure. Le choix dépend du nombre de pièces à équiper et de votre budget."
        }
      },
      {
        "@type": "Question",
        name: "Comment réparer un chauffe-eau qui fuit à Bordeaux ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Une fuite de chauffe-eau peut venir du joint d'étanchéité, du groupe de sécurité ou de la cuve. Coupez l'alimentation électrique et l'eau, puis contactez un plombier. Une réparation rapide évite les dégâts des eaux et les surconsommations."
        }
      },
      {
        "@type": "Question",
        name: "Avantages et inconvénients d'une pompe à chaleur à Bordeaux ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les avantages : économies d'énergie, aides financières, confort. Les inconvénients : investissement initial, bruit de l'unité extérieure, performance en cas de grand froid. À Bordeaux, le climat tempéré est idéal pour les pompes à chaleur."
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