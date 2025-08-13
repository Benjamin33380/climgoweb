import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NewHeader } from '@/components/ui/NewHeader';
import Footer from '@/components/ui/Footer';
import { ThemeProvider } from '@/components/theme-provider';
import { LoadingProvider } from '@/components/providers/LoadingProvider';
import { ClientHeroUIProvider } from '@/components/providers/HeroUIProvider';
import { GlobalScrollShadow } from '@/components/ui/GlobalScrollShadow';
import { AuthProvider } from '@/components/providers/AuthProvider';
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
  title: 'ClimGO - Spécialiste Climatisation & Chauffage Gironde',
  description: 'ClimGO, votre spécialiste en climatisation, chauffage et maintenance en Gironde. Installation, entretien, dépannage. Devis gratuit. ☎️ 07 66 46 00 08',
  keywords: 'climatisation gironde, chauffage gironde, pompe à chaleur gironde, chauffagiste bordeaux, installateur climatisation, artisan RGE, installation PAC air eau, entretien climatisation, dépannage chauffage, chaudière gaz condensation, plancher chauffant, radiateurs électriques, maintenance pompe à chaleur, réparation climatisation, devis gratuit, intervention urgence, certificat RGE, MaPrimeRénov, aide financière chauffage, prime CEE, crédit impôt, économie énergie, rénovation énergétique, audit énergétique',
  authors: [{ name: 'ClimGO' }],
  creator: 'ClimGO',
  publisher: 'ClimGO',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://climgo.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ClimGO - Spécialiste Climatisation & Chauffage Gironde',
    description: 'ClimGO, votre spécialiste en climatisation, chauffage et maintenance en Gironde. Installation, entretien, dépannage. Devis gratuit.',
    url: 'https://climgo.fr',
    siteName: 'ClimGO',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClimGO - Spécialiste Climatisation & Chauffage Gironde',
    description: 'ClimGO, votre spécialiste en climatisation, chauffage et maintenance en Gironde.',
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ClientHeroUIProvider>
              <LoadingProvider>
                <GlobalScrollShadow 
                  size={scrollShadowConfig.size}
                  shadowColor={scrollShadowConfig.shadowColor}
                  blurIntensity={scrollShadowConfig.blurIntensity}
                  className="min-h-screen"
                >
                  <NewHeader />
                  <main>
                    {children}
                  </main>
                  <Footer />
                </GlobalScrollShadow>
              </LoadingProvider>
            </ClientHeroUIProvider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
