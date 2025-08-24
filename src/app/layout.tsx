import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NewHeader } from '@/components/ui/NewHeader';
import Footer from '@/components/ui/Footer';
import { ThemeProvider } from '@/components/theme-provider';
import JsonLd from '@/components/JsonLd';

import { ClientHeroUIProvider } from '@/components/providers/HeroUIProvider';
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

export const metadata: Metadata = {
  title: {
    default: 'ClimGO - Expert Chauffage & Climatisation Gironde | Expert Local',
    template: '%s | ClimGO - Expert Local Gironde'
  },
  description: 'ClimGO, votre expert en climatisation, chauffage et pompe à chaleur en Gironde. Installation, entretien, dépannage 24h/7j. Devis gratuit. 07 66 46 00 08. Artisan RGE certifié.',
  keywords: [
    'climatisation gironde',
    'chauffage gironde', 
    'pompe à chaleur gironde',
    'chauffagiste bordeaux',
    'installateur climatisation gironde',
    'artisan RGE gironde',
    'installation PAC air eau gironde',
    'entretien climatisation gironde',
    'dépannage chauffage gironde',
    'chaudière gaz condensation gironde',
    'plancher chauffant gironde',
    'radiateurs électriques gironde',
    'maintenance pompe à chaleur gironde',
    'réparation climatisation gironde',
    'devis gratuit chauffage climatisation',
    'intervention urgence chauffage gironde',
    'certificat RGE gironde',
    'MaPrimeRénov gironde',
    'aide financière chauffage gironde',
    'prime CEE gironde',
    'crédit impôt chauffage gironde',
    'économies énergie gironde',
    'rénovation énergétique gironde',
    'audit énergétique gironde',
    'expert chauffage climatisation gironde',
    'spécialiste CVC gironde',
    'entreprise chauffage climatisation gironde',
    'installateur agréé gironde',
    'technicien qualifié chauffage gironde',
    'service après-vente chauffage gironde',
    'chauffage climatisation bordeaux',
    'chauffage climatisation arcachon',
    'chauffage climatisation mérignac',
    'chauffage climatisation pessac',
    'chauffage climatisation talence',
    'chauffage climatisation bègles',
    'chauffage climatisation gradignan',
    'chauffage climatisation le bouscat',
    'chauffage climatisation cenon',
    'chauffage climatisation floirac',
    'chauffage climatisation eysines',
    'chauffage climatisation bruges',
    'chauffage climatisation pessac',
    'chauffage climatisation villenave d ornon',
    'chauffage climatisation leognan',
    'chauffage climatisation saint médard en jalles',
    'chauffage climatisation saint aubin de médoc',
    'chauffage climatisation saint jean d illac',
    'chauffage climatisation saint loubes',
    'chauffage climatisation saint selve',
    'chauffage climatisation salles',
    'chauffage climatisation sanguinet',
    'chauffage climatisation saucats',
    'chauffage climatisation le barp',
    'chauffage climatisation le haillan',
    'chauffage climatisation le teich',
    'chauffage climatisation lege cap ferret',
    'chauffage climatisation gujan mestras',
    'chauffage climatisation la teste de buch',
    'chauffage climatisation lacanau',
    'chauffage climatisation lanton',
    'chauffage climatisation andernos les bains',
    'chauffage climatisation ares',
    'chauffage climatisation audenge',
    'chauffage climatisation begles',
    'chauffage climatisation belin beliet',
    'chauffage climatisation biganos',
    'chauffage climatisation biscarrosse',
    'chauffage climatisation bouliac',
    'chauffage climatisation cadaujac',
    'chauffage climatisation canejan',
    'chauffage climatisation cestas',
    'chauffage climatisation gradignan',
    'chauffage climatisation marcheprime',
    'chauffage climatisation martignas sur jalle',
    'chauffage climatisation martillac',
    'chauffage climatisation mimizan',
    'chauffage climatisation mios',
    'chauffage climatisation parentis',
    'chauffage climatisation andernos les bains',
    'chauffage climatisation arcachon',
    'chauffage climatisation ares',
    'chauffage climatisation audenge',
    'chauffage climatisation begles',
    'chauffage climatisation belin beliet',
    'chauffage climatisation biganos',
    'chauffage climatisation biscarrosse',
    'chauffage climatisation bordeaux',
    'chauffage climatisation bouliac',
    'chauffage climatisation bruges',
    'chauffage climatisation cadaujac',
    'chauffage climatisation canejan',
    'chauffage climatisation cenon',
    'chauffage climatisation cestas',
    'chauffage climatisation eysines',
    'chauffage climatisation floirac',
    'chauffage climatisation gradignan',
    'chauffage climatisation gujan mestras',
    'chauffage climatisation la brede',
    'chauffage climatisation la teste de buch',
    'chauffage climatisation lacanau',
    'chauffage climatisation lanton',
    'chauffage climatisation le barp',
    'chauffage climatisation le bouscat',
    'chauffage climatisation le haillan',
    'chauffage climatisation le teich',
    'chauffage climatisation lege cap ferret',
    'chauffage climatisation leognan',
    'chauffage climatisation marcheprime',
    'chauffage climatisation martignas sur jalle',
    'chauffage climatisation martillac',
    'chauffage climatisation merignac',
    'chauffage climatisation mimizan',
    'chauffage climatisation mios',
    'chauffage climatisation parentis',
    'chauffage climatisation pessac',
    'chauffage climatisation saint aubin de médoc',
    'chauffage climatisation saint jean d illac',
    'chauffage climatisation saint loubes',
    'chauffage climatisation saint médard en jalles',
    'chauffage climatisation saint selve',
    'chauffage climatisation salles',
    'chauffage climatisation sanguinet',
    'chauffage climatisation saucats',
    'chauffage climatisation talence',
    'chauffage climatisation villenave d ornon'
  ].join(', '),
  authors: [{ name: 'ClimGO', url: 'https://www.climgo.fr' }],
  creator: 'ClimGO',
  publisher: 'ClimGO',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.climgo.fr'),
  alternates: {
    canonical: 'https://www.climgo.fr',
  },
  openGraph: {
    title: 'ClimGO - Expert Chauffage & Climatisation Gironde | Installation PAC, Entretien, Dépannage',
    description: 'ClimGO, votre expert en climatisation, chauffage et pompe à chaleur en Gironde. Installation, entretien, dépannage 24h/7j. Devis gratuit. Artisan RGE certifié.',
    url: 'https://www.climgo.fr',
    siteName: 'ClimGO - Expert Chauffage Climatisation Gironde',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/img/climdame.png',
        width: 1200,
        height: 630,
        alt: 'ClimGO - Expert #1 Chauffage Climatisation Gironde - Installation PAC, Entretien, Dépannage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'ClimGO - Expert Chauffage & Climatisation Gironde | Installation PAC, Entretien, Dépannage',
    description: 'ClimGO, votre expert en climatisation, chauffage et pompe à chaleur en Gironde. Installation, entretien, dépannage 24h/7j.',
    images: ['/img/climdame.png'],
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
    google: 'Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g',
    other: {
      bing: 'VERIFICATION_CODE_TO_ADD'
    }
  },
  other: {
    // Données business locales ULTRA-OPTIMISÉES
    'business.contact_data.locality': 'Gironde',
    'business.contact_data.postal_code': '33000',
    'business.contact_data.phone_number': '+33766460008',
    'business.contact_data.website': 'https://www.climgo.fr',
    'business.contact_data.email': 'contact@climgo.fr',
    
    // Signaux SEO local AVANCÉS
    'rating': '4.8',
    'priceRange': '€€',
    'audience': 'Particuliers et Professionnels',
    'category': 'Chauffage, Climatisation, Pompe à chaleur, Maintenance',
    'serviceType': 'Installation, Dépannage, Entretien, Maintenance, Rénovation',
    
    // Référencement avancé
    'revisit-after': '1 day',
    'robots': 'index,follow,noimageindex,max-video-preview:-1,max-image-preview:large,max-snippet:-1',
    'googlebot': 'index,follow,max-video-preview:-1,max-image-preview:large,max-snippet:-1',
    
    // Vérifications
    'google-site-verification': 'Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g',
    
    // Dublin Core COMPLET
    'DC.title': 'ClimGO - Expert Chauffage & Climatisation Gironde | Installation PAC, Entretien, Dépannage',
    'DC.description': 'ClimGO, votre expert en climatisation, chauffage et pompe à chaleur en Gironde. Installation, entretien, dépannage 24h/7j. Devis gratuit.',
    'DC.creator': 'ClimGO',
    'DC.publisher': 'ClimGO',
    'DC.language': 'fr-FR',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://www.climgo.fr',
    'DC.source': 'https://www.climgo.fr',
    'DC.coverage': 'Gironde, Nouvelle-Aquitaine, France',
    'DC.rights': '© 2025 ClimGO. Tous droits réservés.',
    
    // Géolocalisation précise
    'geo.region': 'FR-33',
    'geo.placename': 'Gironde',
    'geo.position': '44.837789;-0.57918',
    'ICBM': '44.837789, -0.57918',
    'geo.country': 'France',
    'geo.state': 'Nouvelle-Aquitaine',
    
    // Mots-clés locaux ULTRA-OPTIMISÉS
    'local.keywords': 'chauffage climatisation gironde, expert chauffage bordeaux, installateur climatisation arcachon, artisan RGE mérignac, installation PAC pessac, entretien climatisation talence, dépannage chauffage bègles, chaudière gradignan, maintenance le bouscat, réparation cenon, devis gratuit floirac, intervention urgence eysines, certificat RGE bruges, MaPrimeRénov pessac, aide financière villenave d ornon, prime CEE leognan, crédit impôt saint médard en jalles, économie énergie saint aubin de médoc, rénovation énergétique saint jean d illac, audit énergétique saint loubes, expert chauffage saint selve, spécialiste CVC salles, entreprise chauffage sanguinet, installateur agréé saucats, technicien qualifié le barp, service après-vente le haillan, chauffage climatisation le teich, installation PAC lege cap ferret, maintenance gujan mestras, dépannage la teste de buch, entretien lacanau, réparation lanton, devis gratuit andernos les bains, intervention urgence ares, spécialiste audenge, expert begles, artisan belin beliet, installateur biganos, technicien biscarrosse, maintenance bordeaux, réparation bouliac, entretien cadaujac, installation canejan, dépannage cenon, devis cestas, intervention eysines, spécialiste floirac, expert gradignan, artisan la brede, installateur la teste de buch, technicien lacanau, maintenance lanton, réparation le barp, entretien le bouscat, installation le haillan, dépannage le teich, devis lege cap ferret, intervention gujan mestras, spécialiste saint aubin de médoc, expert saint jean d illac, artisan saint loubes, installateur saint médard en jalles, technicien saint selve, maintenance salles, réparation sanguinet, entretien saucats, installation talence, dépannage villenave d ornon'
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: [
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        url: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        rel: "icon",
        url: "/favicon/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <JsonLd type="business" />
        {/* Meta tags supplémentaires pour le SEO local */}
        <meta name="geo.region" content="FR-33" />
        <meta name="geo.placename" content="Gironde" />
        <meta name="geo.position" content="44.837789;-0.57918" />
        <meta name="ICBM" content="44.837789, -0.57918" />
        <meta name="geo.country" content="France" />
        <meta name="geo.state" content="Nouvelle-Aquitaine" />
        <meta name="rating" content="4.8" />
        <meta name="priceRange" content="€€" />
        <meta name="audience" content="Particuliers et Professionnels" />
        <meta name="category" content="Chauffage, Climatisation, Pompe à chaleur, Maintenance" />
        <meta name="serviceType" content="Installation, Dépannage, Entretien, Maintenance, Rénovation" />
        <meta name="revisit-after" content="1 day" />
        <meta name="robots" content="index,follow,noimageindex,max-video-preview:-1,max-image-preview:large,max-snippet:-1" />
        <meta name="googlebot" content="index,follow,max-video-preview:-1,max-image-preview:large,max-snippet:-1" />
        <meta name="google-site-verification" content="Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g" />
        <meta name="DC.title" content="ClimGO - Expert #1 Chauffage & Climatisation Gironde | Installation PAC, Entretien, Dépannage" />
        <meta name="DC.description" content="ClimGO, votre expert #1 en climatisation, chauffage et pompe à chaleur en Gironde. Installation, entretien, dépannage 24h/7j. Devis gratuit." />
        <meta name="DC.creator" content="ClimGO" />
        <meta name="DC.publisher" content="ClimGO" />
        <meta name="DC.language" content="fr-FR" />
        <meta name="DC.type" content="Service" />
        <meta name="DC.format" content="text/html" />
        <meta name="DC.identifier" content="https://www.climgo.fr" />
        <meta name="DC.source" content="https://www.climgo.fr" />
        <meta name="DC.coverage" content="Gironde, Nouvelle-Aquitaine, France" />
        <meta name="DC.rights" content="© 2025 ClimGO. Tous droits réservés." />
        <meta name="business.contact_data.locality" content="Gironde" />
        <meta name="business.contact_data.postal_code" content="33000" />
        <meta name="business.contact_data.phone_number" content="+33766460008" />
        <meta name="business.contact_data.website" content="https://www.climgo.fr" />
        <meta name="business.contact_data.email" content="contact@climgo.fr" />
        <meta name="local.keywords" content="chauffage climatisation gironde, expert chauffage bordeaux, installateur climatisation arcachon, artisan RGE mérignac, installation PAC pessac, entretien climatisation talence, dépannage chauffage bègles, chaudière gradignan, maintenance le bouscat, réparation cenon, devis gratuit floirac, intervention urgence eysines, certificat RGE bruges, MaPrimeRénov pessac, aide financière villenave d ornon, prime CEE leognan, crédit impôt saint médard en jalles, économie énergie saint aubin de médoc, rénovation énergétique saint jean d illac, audit énergétique saint loubes, expert chauffage saint selve, spécialiste CVC salles, entreprise chauffage sanguinet, installateur agréé saucats, technicien qualifié le barp, service après-vente le haillan, chauffage climatisation le teich, installation PAC lege cap ferret, maintenance gujan mestras, dépannage la teste de buch, entretien lacanau, réparation lanton, devis gratuit andernos les bains, intervention urgence ares, spécialiste audenge, expert begles, artisan belin beliet, installateur biganos, technicien biscarrosse, maintenance bordeaux, réparation bouliac, entretien cadaujac, installation canejan, dépannage cenon, devis cestas, intervention eysines, spécialiste floirac, expert gradignan, artisan la brede, installateur la teste de buch, technicien lacanau, maintenance lanton, réparation le barp, entretien le bouscat, installation le haillan, dépannage le teich, devis lege cap ferret, intervention gujan mestras, spécialiste saint aubin de médoc, expert saint jean d illac, artisan saint loubes, installateur saint médard en jalles, technicien saint selve, maintenance salles, réparation sanguinet, entretien saucats, installation talence, dépannage villenave d ornon" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClientHeroUIProvider>
            <GlobalScrollShadow 
              size={scrollShadowConfig.size}
              shadowColor={scrollShadowConfig.shadowColor}
              blurIntensity={scrollShadowConfig.blurIntensity}
              className="min-h-screen bg-background text-foreground"
            >
              <NewHeader />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </GlobalScrollShadow>
          </ClientHeroUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
