import { Metadata } from 'next';
import { HEADQUARTERS_COORDINATES, generateGeoJsonLd, generateServiceAreaJsonLd } from '@/config/geo';

export const metadata: Metadata = {
  title: 'Climatisation - Installation, dépannage, maintenance',
  description: 'ClimGO votre expert local Girondin - Climatisation - Devis gratuit, aides financières, suivi dossier. Artisan RGE. 07.66.46.00.08',
  keywords: 'climatisation Gironde, installation climatiseur, PAC air air, climatiseur réversible, entretien climatisation, dépannage clim, ClimGO',
  
  openGraph: {
    title: 'Climatisation - Installation, dépannage, maintenance',
    description: 'ClimGO votre expert local Girondin - Climatisation - Devis gratuit, aides financières, suivi dossier. Artisan RGE. 07.66.46.00.08',
    url: 'https://www.climgo.fr/climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: '/img/serp/clim.png',
      width: 1200,
      height: 630,
      alt: 'Climatisation Gironde - Installation PAC Air/Air | ClimGO',
    }],
  },
  
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Climatisation - Installation, dépannage, maintenance',
    description: 'ClimGO votre expert local Girondin - Climatisation - Devis gratuit, aides financières, suivi dossier. Artisan RGE. 07.66.46.00.08',
    images: ['/img/serp/clim.png'],
  },
  
  alternates: {
    canonical: 'https://www.climgo.fr/climatisation',
    languages: {
      'x-default': 'https://www.climgo.fr/climatisation',
      'fr-FR': 'https://www.climgo.fr/climatisation',
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

export default function ClimatisationLayout({
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
            "@type": "Service",
            "name": "Climatisation Gironde - Installation PAC Air/Air",
            "description": "Climatisation Gironde. Installation climatiseur, PAC air/air, réversible. Entretien, dépannage. Expert RGE certifié ClimGO.",
            "provider": {"@id": "https://www.climgo.fr/#organization"},
            "areaServed": {"@type": "State", "name": "Gironde"},
            "serviceType": "Installation et maintenance de systèmes de climatisation",
            "url": "https://www.climgo.fr/climatisation",
            "offers": {
              "@type": "Offer",
              "description": "Installation climatiseur, PAC air/air, entretien - Devis gratuit"
            }
          })
        }}
      />

      {/* JSON-LD FAQ - Questions spécifiques climatisation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Quel est le prix d'installation d'un climatiseur réversible ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "L'installation d'un climatiseur réversible coûte entre 1 500€ et 4 000€ selon la puissance et le nombre de pièces. ClimGO propose des devis gratuits et vous accompagne pour optimiser votre confort été comme hiver."
                }
              },
              {
                "@type": "Question",
                "name": "Combien de pièces peut climatiser une PAC air/air ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Une PAC air/air peut climatiser 2 à 8 pièces selon la puissance et le nombre de splits. ClimGO vous conseille pour dimensionner votre installation selon vos besoins et votre surface habitable."
                }
              },
              {
                "@type": "Question",
                "name": "Quelle est la consommation électrique d'un climatiseur ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "La consommation dépend de la classe énergétique et de l'usage. ClimGO privilégie les équipements A+++ qui consomment 30% de moins qu'un modèle standard, optimisant votre facture énergétique."
                }
              },
              {
                "@type": "Question",
                "name": "Faut-il entretenir sa climatisation chaque année ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, un entretien annuel est obligatoire et recommandé pour maintenir les performances et la durée de vie. ClimGO propose des contrats de maintenance préventive avec intervention rapide."
                }
              },
              {
                "@type": "Question",
                "name": "Un climatiseur peut-il chauffer en hiver ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, les climatiseurs réversibles chauffent efficacement jusqu'à -15°C. ClimGO vous propose des solutions adaptées au climat girondin pour un confort optimal toute l'année."
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