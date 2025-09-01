// app/villes/arcachon-chauffage-climatisation/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PerformanceOptimizations } from "@/components/PerformanceOptimizations";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const SITE = "https://www.climgo.fr";
const PATH = "/villes/arcachon-chauffage-climatisation";
const PAGE_URL = `${SITE}${PATH}`;
const OG_IMAGE = `${SITE}/images/og/arcachon-chauffage-climatisation.jpg`;

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
  // 1) Entreprise locale (LocalBusiness)
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ClimGO",
    url: PAGE_URL,
    image: `${SITE}/img/climdame.png`,
    telephone: "+33766460008",
    address: {
      "@type": "PostalAddress",
      streetAddress: "28 rue de Cantelaude",
      addressLocality: "Marcheprime",
      postalCode: "33380",
      addressCountry: "FR",
    },
    areaServed: { "@type": "City", name: "Arcachon" },
    serviceType: "Chauffage et Climatisation",
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

  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <PerformanceOptimizations />
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
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}