import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NewHeader } from "@/components/ui/NewHeader";
import Footer from "@/components/ui/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { ClientHeroUIProvider } from "@/components/providers/HeroUIProvider";
import { GlobalScrollShadow } from '@/components/ui/GlobalScrollShadow';
import { scrollShadowConfig } from '@/config/scrollShadow';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ---------- CONFIG GLOBALE ----------
const SITE_NAME = "ClimGO";
const SITE_URL = "https://www.climgo.fr";
const DEFAULT_DESCRIPTION =
  "ClimGO, expert chauffage et climatisation en Gironde. Installation PAC, entretien et dépannage. Artisan RGE. Devis gratuit.";

const PHONE = "+33766460008"; // ton numéro pro
const BUSINESS = {
  legalName: "ClimGO",
  brand: "ClimGO",
  streetAddress: "28 rue de Cantelaude",
  postalCode: "33380",
  addressLocality: "Marcheprime",
  addressRegion: "Nouvelle-Aquitaine",
  addressCountry: "FR",
  geo: { lat: 44.837789, lng: -0.57918 }, // coordonnées Bordeaux (à ajuster si besoin)
  openingHours: ["Mo-Fr 08:00-19:00", "Sa 09:00-13:00"],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ClimGO - Expert Chauffage Climatisation Gironde",
    template: "%s",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "chauffage Gironde",
    "climatisation Gironde",
    "pompe à chaleur",
    "entretien clim",
    "installateur chauffage",
    "artisan RGE",
    "Bordeaux",
  ],
  authors: [{ name: "ClimGO", url: SITE_URL }],
  creator: "ClimGO",
  formatDetection: { email: false, address: false, telephone: false },
  // ⚠️ Pas de canonical global ici : mets les canoniques dans chaque page via generateMetadata
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "ClimGO - Expert Chauffage Climatisation Gironde",
    description: DEFAULT_DESCRIPTION,
    locale: "fr_FR",
    images: [
      { url: "/img/climdame.png", width: 1200, height: 630, alt: "ClimGO" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@climgo_fr",
    creator: "@climgo_fr",
    title: "ClimGO - Expert Chauffage Climatisation Gironde",
    description: "Installation PAC, entretien, dépannage. Artisan RGE. Devis gratuit.",
    images: ["/img/climdame.png"],
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
  verification: {
    google: "Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g",
    other: { bing: "VERIFICATION_CODE_TO_ADD" },
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon-32x32.png", sizes: "32x32" }],
  },
  manifest: "/favicon/site.webmanifest",
  other: {
    // Un petit champ custom utile (optionnel)
    "zones-desservies": "Gironde, Bordeaux Métropole, Bassin d'Arcachon",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0ea5e9",
};

// ---------- JSON-LD HELPERS ----------
function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function WebsiteSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_URL}/recherche?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      }}
    />
  );
}

function LocalBusinessSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "HVACBusiness",
        name: BUSINESS.brand,
        legalName: BUSINESS.legalName,
        url: SITE_URL,
        telephone: PHONE,
        image: `${SITE_URL}/img/climdame.png`, // image ClimGO 1200x630
        address: {
          "@type": "PostalAddress",
          streetAddress: BUSINESS.streetAddress,
          addressLocality: BUSINESS.addressLocality,
          addressRegion: BUSINESS.addressRegion,
          postalCode: BUSINESS.postalCode,
          addressCountry: BUSINESS.addressCountry,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: BUSINESS.geo.lat,
          longitude: BUSINESS.geo.lng,
        },
        openingHours: BUSINESS.openingHours,
        areaServed: ["Gironde", "Bordeaux Métropole", "Bassin d'Arcachon"],
        priceRange: "€€",
      }}
    />
  );
}

// ---------- LAYOUT ROOT ----------
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ClientHeroUIProvider>
            <GlobalScrollShadow
              size={scrollShadowConfig.size}
              shadowColor={scrollShadowConfig.shadowColor}
              blurIntensity={scrollShadowConfig.blurIntensity}
              className="min-h-screen bg-background text-foreground"
            >
              <NewHeader />
              <main className="flex-1">{children}</main>
              <Footer />
            </GlobalScrollShadow>
          </ClientHeroUIProvider>
        </ThemeProvider>

        {/* JSON-LD globaux */}
        <WebsiteSchema />
        <LocalBusinessSchema />
      </body>
    </html>
  );
}
