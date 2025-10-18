import { Metadata } from 'next';
import { HEADQUARTERS_COORDINATES, generateGeoJsonLd, generateServiceAreaJsonLd } from '@/config/geo';

export const metadata: Metadata = {
  title: "Nos services - Spécialistes pompes à chaleur",
  description: "ClimGO votre expert local Girondin - Chauffage, climatisation, chauffe-eau - Devis gratuit, aides financières. Artisan RGE. 07.66.46.00.08",
  keywords: [
    "services chauffage Gironde",
    "services climatisation Gironde",
    "installation PAC Gironde",
    "maintenance chauffage",
    "dépannage climatisation",
    "artisan RGE Gironde",
  ],
  openGraph: {
    title: "Nos services - Spécialistes pompes à chaleur",
    description: "ClimGO votre expert local Girondin - Chauffage, climatisation, chauffe-eau - Devis gratuit, aides financières. Artisan RGE. 07.66.46.00.08",
    url: "https://www.climgo.fr/pompe-a-chaleur",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/img/climdame.png",
        width: 1200,
        height: 630,
        alt: "Services ClimGO - Chauffage Climatisation Gironde",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@climgo_fr",
    creator: "@climgo_fr",
    title: "Nos services - Spécialistes pompes à chaleur",
    description: "ClimGO votre expert local Girondin - Chauffage, climatisation, chauffe-eau - Devis gratuit, aides financières. Artisan RGE. 07.66.46.00.08",
    images: ["/img/climdame.png"],
  },
  alternates: {
    canonical: "https://www.climgo.fr/pompe-a-chaleur",
    languages: {
      'x-default': 'https://www.climgo.fr/pompe-a-chaleur',
      'fr-FR': 'https://www.climgo.fr/pompe-a-chaleur',
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

export default function ServicesLayout({
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
            "name": "Services ClimGO - Chauffage Climatisation PAC",
            "description": "Services ClimGO : installation, maintenance et dépannage de chauffage, climatisation et pompes à chaleur en Gironde. Artisan RGE certifié.",
            "provider": {"@id": "https://www.climgo.fr/#organization"},
            "areaServed": {"@type": "State", "name": "Gironde"},
            "serviceType": "Installation, maintenance et dépannage de systèmes thermiques",
            "url": "https://www.climgo.fr/services",
            "offers": {
              "@type": "Offer",
              "description": "Chauffage, climatisation, PAC - Devis gratuit"
            }
          })
        }}
      />

      {/* JSON-LD FAQ - Questions spécifiques services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Quels sont les services principaux proposés par ClimGO ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ClimGO propose l'installation, la maintenance et le dépannage de pompes à chaleur (air/air, air/eau), climatisation, chauffe-eau thermodynamiques, planchers chauffants et tous systèmes de chauffage. Nous assurons également le service d'urgence 7j/7."
                }
              },
              {
                "@type": "Question",
                "name": "ClimGO propose-t-il des devis gratuits pour tous ses services ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, ClimGO propose des devis gratuits et sans engagement pour tous ses services. Nos experts se déplacent chez vous pour évaluer vos besoins et vous proposer la solution la plus adaptée à votre projet et à votre budget."
                }
              },
              {
                "@type": "Question",
                "name": "Quels sont les délais d'intervention ClimGO ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ClimGO s'engage sur des délais rapides : devis sous 24h, installation sous 15 jours et dépannage d'urgence sous 4h. Nous couvrons toute la Gironde et le Bassin d'Arcachon avec des techniciens disponibles 7j/7."
                }
              },
              {
                "@type": "Question",
                "name": "ClimGO assure-t-il la maintenance de tous types d'équipements ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, ClimGO assure la maintenance de tous types d'équipements thermiques : PAC, chaudières, climatiseurs, chauffe-eau. Nous proposons des contrats de maintenance préventive adaptés à vos besoins et à votre budget."
                }
              },
              {
                "@type": "Question",
                "name": "Proposez-vous des garanties sur vos installations ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, ClimGO propose des garanties constructeur et des garanties de service sur toutes ses installations. Nous nous engageons sur la qualité de nos prestations et assurons le suivi de vos équipements dans la durée."
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