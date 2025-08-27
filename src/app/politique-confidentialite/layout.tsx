import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | ClimGO',
  description: 'Politique de confidentialité ClimGO. Protection des données personnelles, cookies, RGPD. ClimGO respecte votre vie privée.',
  keywords: 'politique confidentialité ClimGO, protection données personnelles, cookies ClimGO, RGPD ClimGO, vie privée ClimGO',
  
  openGraph: {
    title: 'Politique de Confidentialité | ClimGO',
    description: 'Politique de confidentialité ClimGO. Protection des données personnelles, cookies, RGPD. ClimGO respecte votre vie privée.',
    url: 'https://www.climgo.fr/politique-confidentialite',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og/politique-confidentialite-climgo.jpg',
      width: 1200,
      height: 630,
      alt: 'Politique de Confidentialité ClimGO',
    }],
  },
  
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Politique de Confidentialité | ClimGO',
    description: 'Politique de confidentialité ClimGO. Protection des données personnelles, cookies, RGPD.',
    images: ['https://www.climgo.fr/images/og/politique-confidentialite-climgo.jpg'],
  },
  
  alternates: {
    canonical: 'https://www.climgo.fr/politique-confidentialite',
    languages: {
      'x-default': 'https://www.climgo.fr/politique-confidentialite',
      'fr-FR': 'https://www.climgo.fr/politique-confidentialite',
    },
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
  
  // Icons optimisés (favicon.svg priorisé)
  icons: {
    icon: [
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.svg", type: "image/svg+xml" }],
  }
};

export default function PolitiqueConfidentialiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Politique de Confidentialité ClimGO",
            "description": "Politique de confidentialité ClimGO. Protection des données personnelles, cookies, RGPD. ClimGO respecte votre vie privée.",
            "url": "https://www.climgo.fr/politique-confidentialite",
            "mainEntity": {
              "@type": "HVACBusiness",
              "name": "ClimGO",
              "url": "https://www.climgo.fr",
              "telephone": "+33766460008",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "28 rue de Cantelaude",
                "addressLocality": "Marcheprime",
                "addressRegion": "Nouvelle-Aquitaine",
                "postalCode": "33380",
                "addressCountry": "FR"
              }
            }
          })
        }}
      />
      {children}
    </>
  );
}
