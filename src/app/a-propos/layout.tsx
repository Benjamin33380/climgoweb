import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos de ClimGO | Expert Chauffage Climatisation',
  description: 'Découvrez ClimGO, votre expert en chauffage et climatisation en Gironde depuis plus de 10 ans. Artisan RGE certifié.',
  keywords: 'ClimGO, expert chauffage climatisation, artisan RGE Gironde, entreprise chauffage, ClimGO histoire, ClimGO équipe',
  
  openGraph: {
    title: 'À propos de ClimGO | Expert Chauffage Climatisation',
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
    title: 'À propos de ClimGO | Expert Chauffage Climatisation',
    description: 'Découvrez ClimGO, votre expert en chauffage et climatisation en Gironde depuis plus de 10 ans.',
    images: ['https://www.climgo.fr/images/og/a-propos-climgo.jpg'],
  },
  
  alternates: {
    canonical: 'https://www.climgo.fr/a-propos',
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
              "areaServed": {
                "@type": "Place",
                "name": "Gironde, Bordeaux Métropole, Bassin d'Arcachon"
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
