import { Metadata } from 'next';
import { HEADQUARTERS_COORDINATES, generateGeoJsonLd, generateServiceAreaJsonLd } from '@/config/geo';

export const metadata: Metadata = {
  title: 'À propos ClimGO | Benjamin Cardoso RGE',
  description: 'Benjamin Cardoso, fondateur ClimGO. Chauffagiste climaticien RGE Gironde depuis 2025. Expertise PAC, passion du métier.',
  keywords: 'ClimGO, expert chauffage climatisation, artisan RGE Gironde, entreprise chauffage, ClimGO histoire, ClimGO équipe',
  
  openGraph: {
    title: 'À propos de ClimGO | Expert Chauffage Climatisation Gironde',
    description: 'Découvrez ClimGO, votre expert en chauffage et climatisation en Gironde depuis plus de 10 ans. Artisan RGE certifié.',
    url: 'https://www.climgo.fr/a-propos',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og/a-propos-climgo.jpg',
      width: 1200,
      height: 630,
      alt: 'À propos de ClimGO | Expert Chauffage Climatisation',
    }],
  },
  
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'À propos de ClimGO | Expert Chauffage Climatisation Gironde',
    description: 'Découvrez ClimGO, votre expert en chauffage et climatisation en Gironde depuis plus de 10 ans.',
    images: ['https://www.climgo.fr/images/og/a-propos-climgo.jpg'],
  },
  
  alternates: {
    canonical: 'https://www.climgo.fr/a-propos',
    languages: {
      'x-default': 'https://www.climgo.fr/a-propos',
      'fr-FR': 'https://www.climgo.fr/a-propos',
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

export default function AProposLayout({
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
            "@type": "AboutPage",
            "name": "À propos de ClimGO",
            "description": "Découvrez ClimGO, votre expert en chauffage et climatisation en Gironde depuis plus de 10 ans. Artisan RGE certifié.",
            "url": "https://www.climgo.fr/a-propos",
            "mainEntity": {
              "@type": "HVACBusiness",
              "name": "ClimGO",
              "legalName": "ClimGO",
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
              "areaServed": {
                "@type": "Place",
                "name": "Gironde, Bordeaux Métropole, Bassin d'Arcachon, Marcheprime, Biganos, Mios, Arcachon, Bordeaux, Andernos-les-Bains",
                "geo": generateGeoJsonLd(HEADQUARTERS_COORDINATES, "Zone d'intervention ClimGO")
              },
              "foundingDate": "2014",
              "description": "Expert en chauffage et climatisation en Gironde, artisan RGE certifié"
            }
          })
        }}
      />

      {/* JSON-LD FAQ - Questions spécifiques à propos */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Depuis combien de temps ClimGO exerce en Gironde ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ClimGO exerce en Gironde depuis plus de 10 ans, depuis 2014. Notre expertise et notre connaissance du territoire nous permettent de vous proposer des solutions adaptées au climat et aux spécificités de la région."
                }
              },
              {
                "@type": "Question",
                "name": "ClimGO est-il certifié RGE et qu'est-ce que cela signifie ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, ClimGO est certifié RGE (Reconnu Garant de l'Environnement). Cette certification garantit la qualité de nos installations et vous permet de bénéficier des aides de l'État pour vos travaux de rénovation énergétique."
                }
              },
              {
                "@type": "Question",
                "name": "Quelle est la zone d'intervention de ClimGO ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ClimGO couvre toute la Gironde, Bordeaux Métropole et le Bassin d'Arcachon. Nos techniciens se déplacent chez vous pour l'installation, la maintenance et le dépannage de vos équipements thermiques."
                }
              },
              {
                "@type": "Question",
                "name": "Quels sont les services proposés par ClimGO ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ClimGO propose l'installation et la maintenance de pompes à chaleur, climatisation, chauffe-eau thermodynamiques, planchers chauffants et tous systèmes de chauffage. Nous assurons également le dépannage d'urgence 7j/7."
                }
              },
              {
                "@type": "Question",
                "name": "ClimGO propose-t-il des garanties sur ses installations ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, ClimGO propose des garanties constructeur et des garanties de service sur toutes nos installations. Nous nous engageons sur la qualité de nos prestations et assurons le suivi de vos équipements dans la durée."
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
