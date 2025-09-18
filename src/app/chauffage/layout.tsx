import { Metadata } from 'next';
import { HEADQUARTERS_COORDINATES, generateGeoJsonLd, generateServiceAreaJsonLd } from '@/config/geo';

export const metadata: Metadata = {
  title: 'Chauffagiste Gironde - Installation Pompe à Chaleur, Chauffe-eau Thermodynamique',
  description: 'Chauffagiste expert Gironde ⚡ Installation pompe à chaleur, chauffe-eau thermodynamique, plancher chauffant. Artisan RGE certifié. Devis gratuit 07.66.46.00.08',
  keywords: 'chauffagiste gironde, chauffage gironde, installation pompe à chaleur, chauffe-eau thermodynamique, pompe à chaleur air-eau, pompe à chaleur air-air, plancher chauffant, radiateurs, chauffagiste bordeaux, chauffagiste bassin arcachon, artisan RGE, thermodynamique, PAC air eau, PAC air air, MaPrimeRénov, prime CEE, devis gratuit chauffage, entretien chauffage, dépannage chauffage',
  
  openGraph: {
    title: 'Chauffagiste Gironde - Installation Pompe à Chaleur, Chauffe-eau Thermodynamique',
    description: 'Chauffagiste expert Gironde ⚡ Installation pompe à chaleur, chauffe-eau thermodynamique, plancher chauffant. Artisan RGE certifié. Devis gratuit 07.66.46.00.08',
    url: 'https://www.climgo.fr/chauffage',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: '/img/serp/chauff.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage Gironde - Installation PAC, Plancher Chauffant | ClimGO',
    }],
  },
  
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Chauffagiste Gironde - Installation Pompe à Chaleur, Chauffe-eau Thermodynamique',
    description: 'Chauffagiste expert Gironde ⚡ Installation pompe à chaleur, chauffe-eau thermodynamique, plancher chauffant. Artisan RGE certifié. Devis gratuit 07.66.46.00.08',
    images: ['/img/serp/chauff.jpg'],
  },
  
  alternates: {
    canonical: 'https://www.climgo.fr/chauffage',
    languages: {
      'x-default': 'https://www.climgo.fr/chauffage',
      'fr-FR': 'https://www.climgo.fr/chauffage',
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

export default function ChauffageLayout({
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
            "name": "Chauffage Gironde - Installation PAC, Plancher Chauffant",
            "description": "Expert chauffage Gironde. Installation pompe à chaleur, plancher chauffant, radiateurs. Artisan RGE certifié. 07.66.46.00.08",
            "provider": {"@id": "https://www.climgo.fr/#organization"},
            "areaServed": {"@type": "State", "name": "Gironde"},
            "serviceType": "Installation et maintenance de systèmes de chauffage",
            "url": "https://www.climgo.fr/chauffage",
            "offers": {
              "@type": "Offer",
              "description": "Installation PAC, plancher chauffant, radiateurs - Devis gratuit"
            }
          })
        }}
      />

      {/* JSON-LD FAQ - Questions spécifiques chauffage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Quel est le prix d'installation d'une pompe à chaleur air/eau ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "L'installation d'une PAC air/eau coûte entre 12 000€ et 25 000€ selon la puissance et la complexité. ClimGO vous propose un devis gratuit et vous accompagne pour obtenir MaPrimeRénov' (jusqu'à 90% d'aides)."
                }
              },
              {
                "@type": "Question",
                "name": "Combien de temps dure l'installation d'un plancher chauffant ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "L'installation d'un plancher chauffant prend 3 à 5 jours selon la surface. ClimGO s'engage sur des délais respectés et vous accompagne à chaque étape de votre projet de rénovation énergétique."
                }
              },
              {
                "@type": "Question",
                "name": "Quelle puissance de PAC choisir pour ma maison ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "La puissance dépend de votre surface, isolation et zone climatique. ClimGO réalise une étude thermique gratuite pour dimensionner parfaitement votre installation et optimiser votre confort."
                }
              },
              {
                "@type": "Question",
                "name": "Les radiateurs à eau sont-ils compatibles avec une PAC ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, les radiateurs à eau existants sont compatibles avec une PAC air/eau. ClimGO peut adapter votre installation actuelle ou vous proposer des radiateurs basse température plus performants."
                }
              },
              {
                "@type": "Question",
                "name": "Quelle est la durée de vie d'une pompe à chaleur ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Une PAC bien entretenue dure 15 à 20 ans. ClimGO propose des contrats de maintenance préventive pour maximiser la durée de vie et les performances de votre équipement."
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