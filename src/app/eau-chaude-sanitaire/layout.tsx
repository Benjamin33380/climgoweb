import { Metadata } from 'next';
import { HEADQUARTERS_COORDINATES, generateGeoJsonLd, generateServiceAreaJsonLd } from '@/config/geo';

export const metadata: Metadata = {
  title: "Chauffe-eau Thermodynamique Gironde - Installation & Dépannage",
  description: "Spécialiste chauffe-eau thermodynamique Gironde ⚡ Installation, dépannage, maintenance. Économies jusqu'à 70%. Artisan RGE. Devis gratuit 07.66.46.00.08",
  keywords: "plombier chauffagiste, plombier gironde, plombier bordeaux, plombier bassin arcachon, chauffe-eau thermodynamique, chauffe-eau thermodynamique gironde, installation chauffe-eau thermodynamique, chauffe-eau bordeaux, chauffe-eau bassin arcachon, eau chaude sanitaire, cumulus thermodynamique, ballon thermodynamique, dépannage chauffe-eau, maintenance chauffe-eau, artisan RGE gironde, MaPrimeRénov chauffe-eau, devis gratuit chauffe-eau, chauffe-eau économique, thermodynamique air eau, installation plomberie",
  openGraph: {
    title: "Eau chaude sanitaire | Installation & Maintenance Gironde",
    description: "Installation et maintenance de chauffe-eau en Gironde. ClimGO, expert en eau chaude sanitaire. Devis gratuit, intervention rapide.",
    url: "https://www.climgo.fr/eau-chaude-sanitaire",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/img/serp/ecs.webp",
        width: 1200,
        height: 630,
        alt: "ClimGO - Eau Chaude Sanitaire Gironde",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@climgo_fr",
    creator: "@climgo_fr",
    title: "Eau chaude sanitaire | Installation & Maintenance Gironde",
    description: "Installation et maintenance de chauffe-eau en Gironde. ClimGO, expert en eau chaude sanitaire. Devis gratuit, intervention rapide.",
    images: ["/img/serp/ecs.webp"],
  },
  alternates: {
    canonical: "https://www.climgo.fr/eau-chaude-sanitaire",
    languages: {
      'x-default': 'https://www.climgo.fr/eau-chaude-sanitaire',
      'fr-FR': 'https://www.climgo.fr/eau-chaude-sanitaire',
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

export default function EauChaudeSanitaireLayout({
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
            "name": "Eau Chaude Sanitaire Gironde - Installation & Maintenance",
            "description": "Installation et maintenance de chauffe-eau en Gironde. ClimGO, expert en eau chaude sanitaire. Devis gratuit, intervention rapide.",
            "provider": {"@id": "https://www.climgo.fr/#organization"},
            "areaServed": {"@type": "State", "name": "Gironde"},
            "serviceType": "Installation et maintenance de systèmes d'eau chaude sanitaire",
            "url": "https://www.climgo.fr/eau-chaude-sanitaire",
            "offers": {
              "@type": "Offer",
              "description": "Installation et maintenance chauffe-eau - Devis gratuit"
            }
          })
        }}
      />

      {/* JSON-LD FAQ - Questions spécifiques eau chaude sanitaire */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Combien de temps dure l'installation d'un chauffe-eau ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "L'installation d'un chauffe-eau prend 2 à 4 heures selon le type et la complexité. ClimGO s'engage sur des délais respectés et vous garantit une eau chaude disponible rapidement."
                }
              },
              {
                "@type": "Question",
                "name": "Quelle capacité de chauffe-eau choisir pour ma famille ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "La capacité dépend du nombre de personnes : 100L pour 1-2 personnes, 200L pour 3-4 personnes, 300L pour 5+ personnes. ClimGO vous conseille pour optimiser votre confort et vos économies."
                }
              },
              {
                "@type": "Question",
                "name": "Faut-il entretenir son chauffe-eau chaque année ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, un entretien annuel est recommandé pour maintenir les performances et éviter la panne. ClimGO propose des contrats de maintenance préventive avec intervention rapide en cas de problème."
                }
              },
              {
                "@type": "Question",
                "name": "Un chauffe-eau thermodynamique est-il rentable ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, il permet d'économiser 50 à 70% sur votre facture d'eau chaude. Avec MaPrimeRénov', l'investissement est rentabilisé en 3 à 5 ans. ClimGO vous accompagne dans votre projet d'économie d'énergie."
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