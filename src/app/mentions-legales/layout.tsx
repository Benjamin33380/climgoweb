import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales | ClimGO',
  description: 'Mentions légales ClimGO. Informations légales, hébergement, propriété intellectuelle. ClimGO SASU - Expert chauffage climatisation Gironde.',
  keywords: 'mentions légales ClimGO, ClimGO SASU, hébergement Vercel, propriété intellectuelle ClimGO, droit applicable ClimGO',
  
  openGraph: {
    title: 'Mentions Légales | ClimGO',
    description: 'Mentions légales ClimGO. Informations légales, hébergement, propriété intellectuelle. ClimGO SASU - Expert chauffage climatisation Gironde.',
    url: 'https://www.climgo.fr/mentions-legales',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og/mentions-legales-climgo.jpg',
      width: 1200,
      height: 630,
      alt: 'Mentions Légales ClimGO',
    }],
  },
  
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Mentions Légales | ClimGO',
    description: 'Mentions légales ClimGO. Informations légales, hébergement, propriété intellectuelle.',
    images: ['https://www.climgo.fr/images/og/mentions-legales-climgo.jpg'],
  },
  
  alternates: {
    canonical: 'https://www.climgo.fr/mentions-legales',
    languages: {
      'x-default': 'https://www.climgo.fr/mentions-legales',
      'fr-FR': 'https://www.climgo.fr/mentions-legales',
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

export default function MentionsLegalesLayout({
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
            "name": "Mentions Légales ClimGO",
            "description": "Mentions légales ClimGO. Informations légales, hébergement, propriété intellectuelle. ClimGO SASU - Expert chauffage climatisation Gironde.",
            "url": "https://www.climgo.fr/mentions-legales",
            "mainEntity": {
              "@type": "HVACBusiness",
              "name": "ClimGO",
              "legalName": "ClimGO SASU",
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
