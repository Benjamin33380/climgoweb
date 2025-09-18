import { Metadata } from 'next';
import { HEADQUARTERS_COORDINATES, generateGeoJsonLd, generateServiceAreaJsonLd } from '@/config/geo';

export const metadata: Metadata = {
  title: "Contactez votre expert local RGE",
  description: "Contactez ClimGO Gironde - Devis gratuit, étude personnalisée, aides financières. Artisan RGE proche de vous. 07.66.46.00.08",
  keywords: [
    "devis chauffage Gironde",
    "devis climatisation Gironde",
    "contact ClimGO",
    "artisan RGE Gironde",
    "devis gratuit",
    "intervention rapide",
  ],
  openGraph: {
    title: "Contactez votre expert local RGE",
    description: "Contactez ClimGO Gironde - Devis gratuit, étude personnalisée, aides financières. Artisan RGE proche de vous. 07.66.46.00.08",
    url: "https://www.climgo.fr/contact",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/img/climdame.png",
        width: 1200,
        height: 630,
        alt: "Contact ClimGO - Devis Gratuit Gironde",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@climgo_fr",
    creator: "@climgo_fr",
    title: "Contactez votre expert local RGE",
    description: "Contactez ClimGO Gironde - Devis gratuit, étude personnalisée, aides financières. Artisan RGE proche de vous. 07.66.46.00.08",
    images: ["/img/climdame.png"],
  },
  alternates: {
    canonical: "https://www.climgo.fr/contact",
    languages: {
      'x-default': 'https://www.climgo.fr/contact',
      'fr-FR': 'https://www.climgo.fr/contact',
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

export default function ContactLayout({
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
            "@type": "ContactPage",
            "name": "Contact ClimGO - Devis Gratuit",
            "description": "Contactez ClimGO pour un devis gratuit en chauffage et climatisation en Gironde. Intervention rapide, artisan RGE certifié.",
            "url": "https://www.climgo.fr/contact",
            "mainEntity": {"@id": "https://www.climgo.fr/#organization"},
            "offers": {
              "@type": "Offer",
              "description": "Devis gratuit sous 24h - Intervention rapide"
            }
          })
        }}
      />

      {/* JSON-LD FAQ - Questions spécifiques contact */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Combien de temps pour recevoir un devis ClimGO ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ClimGO s'engage à vous fournir un devis gratuit sous 24h. Nos experts se déplacent chez vous pour évaluer vos besoins et vous proposer la solution la plus adaptée à votre projet."
                }
              },
              {
                "@type": "Question",
                "name": "Quels sont vos horaires de contact et d'intervention ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Notre équipe est disponible du lundi au vendredi de 8h à 19h, le samedi de 9h à 13h. Pour les urgences, nous intervenons 7j/7 avec des délais d'intervention rapides."
                }
              },
              {
                "@type": "Question",
                "name": "Proposez-vous des devis à distance ou uniquement sur site ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nous proposons des devis préliminaires par téléphone ou email, mais une visite sur site est recommandée pour un devis précis. ClimGO s'engage sur des devis détaillés et sans surprise."
                }
              },
              {
                "@type": "Question",
                "name": "Quels documents préparer pour un devis ClimGO ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Préparez vos factures d'énergie, plans de votre logement et informations sur votre installation actuelle. ClimGO vous accompagne dans la préparation de votre dossier pour optimiser les aides disponibles."
                }
              },
              {
                "@type": "Question",
                "name": "Intervenez-vous en urgence en cas de panne ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, ClimGO propose un service d'urgence 7j/7. Nous nous engageons sur des délais d'intervention rapides : diagnostic sous 4h et intervention sous 24h pour assurer votre confort en toutes circonstances."
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