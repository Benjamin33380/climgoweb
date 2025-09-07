import { Metadata } from 'next';
import { HEADQUARTERS_COORDINATES, generateGeoJsonLd, generateServiceAreaJsonLd } from '@/config/geo';

export const metadata: Metadata = {
  title: 'Zones d\'Intervention ClimGO | Chauffage Climatisation Gironde',
  description: 'Zones d\'intervention ClimGO en Gironde. Bordeaux, Arcachon, Mérignac, Pessac et plus de 40 villes. Chauffage climatisation.',
  keywords: 'zones intervention ClimGO, Gironde, Bordeaux, Arcachon, Mérignac, Pessac, chauffage climatisation, ClimGO',

  openGraph: {
    title: 'Zones d\'Intervention ClimGO | Chauffage Climatisation Gironde',
    description: 'Zones d\'intervention ClimGO en Gironde. Bordeaux, Arcachon, Mérignac, Pessac et plus de 40 villes.',
    url: 'https://www.climgo.fr/zones-interventions',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og/zones-interventions-climgo.jpg',
      width: 1200,
      height: 630,
      alt: 'Zones d\'Intervention ClimGO | Chauffage Climatisation Gironde',
    }],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Zones d\'Intervention ClimGO | Chauffage Climatisation Gironde',
    description: 'Zones d\'intervention ClimGO en Gironde. Bordeaux, Arcachon, Mérignac, Pessac et plus de 40 villes.',
    images: ['https://www.climgo.fr/images/og/zones-interventions-climgo.jpg'],
  },

  alternates: {
    canonical: 'https://www.climgo.fr/zones-interventions',
    languages: {
      'x-default': 'https://www.climgo.fr/zones-interventions',
      'fr-FR': 'https://www.climgo.fr/zones-interventions',
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

export default function ZonesInterventionsLayout({
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
            "name": "Zones d'Intervention ClimGO",
            "description": "Zones d'intervention ClimGO en Gironde. Bordeaux, Arcachon, Mérignac, Pessac et plus de 40 villes. Chauffage climatisation.",
            "url": "https://www.climgo.fr/zones-interventions",
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
              },
              // Données géographiques du siège
              "geo": generateGeoJsonLd(HEADQUARTERS_COORDINATES, "ClimGO Marcheprime"),
              // Zone de service avec géolocalisation (rayon de 50km)
              "serviceArea": generateServiceAreaJsonLd(HEADQUARTERS_COORDINATES, "50000"),
              "areaServed": [
                {
                  "@type": "Place",
                  "name": "Bordeaux"
                },
                {
                  "@type": "Place",
                  "name": "Arcachon"
                },
                {
                  "@type": "Place",
                  "name": "Mérignac"
                },
                {
                  "@type": "Place",
                  "name": "Pessac"
                },
                {
                  "@type": "Place",
                  "name": "Gironde"
                }
              ]
            }
          })
        }}
      />

      {/* JSON-LD FAQ - Questions spécifiques zones d'intervention */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Dans quelles villes ClimGO intervient-il en Gironde ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ClimGO intervient dans plus de 40 villes de Gironde : Bordeaux, Arcachon, Mérignac, Pessac, Talence, Cenon, Bègles, Floirac, Bruges, Eysines, Le Haillan, Saint-Médard-en-Jalles et bien d'autres. Nous couvrons toute la Gironde et le Bassin d'Arcachon."
                }
              },
              {
                "@type": "Question",
                "name": "Quel est le rayon d'intervention de ClimGO ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ClimGO intervient dans un rayon de 25km autour de Marcheprime, couvrant toute la Gironde. Nos techniciens se déplacent chez vous pour l'installation, la maintenance et le dépannage de vos équipements thermiques."
                }
              },
              {
                "@type": "Question",
                "name": "ClimGO propose-t-il des services d'urgence dans toutes ces zones ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, ClimGO propose un service d'urgence 7j/7 dans toutes ses zones d'intervention. Nous nous engageons sur des délais rapides : diagnostic sous 4h et intervention sous 24h pour assurer votre confort en toutes circonstances."
                }
              },
              {
                "@type": "Question",
                "name": "Les tarifs sont-ils identiques dans toutes les zones ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, ClimGO applique les mêmes tarifs transparents dans toutes ses zones d'intervention. Nos devis sont gratuits et détaillés, sans surprise, que vous soyez à Bordeaux, Arcachon ou dans une autre ville de Gironde."
                }
              },
              {
                "@type": "Question",
                "name": "ClimGO peut-il intervenir en dehors de la Gironde ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ClimGO se concentre principalement sur la Gironde et le Bassin d'Arcachon pour garantir des délais d'intervention rapides et un service de qualité. Nous pouvons étudier des interventions ponctuelles dans les départements limitrophes selon les cas."
                }
              }
            ]
          })
        }}
      />
      {children}
    </>
  );
}