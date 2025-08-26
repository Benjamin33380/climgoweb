import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog ClimGO | Conseils Chauffage Climatisation Gironde',
  description: 'Blog ClimGO : conseils chauffage climatisation, actualités, guides techniques. Expert RGE en Gironde. Découvrez nos articles d\'experts et astuces pratiques.',
  keywords: 'blog ClimGO, conseils chauffage, conseils climatisation, actualités ClimGO, expert RGE Gironde',

  openGraph: {
    title: 'Blog ClimGO | Conseils Chauffage Climatisation Gironde',
    description: 'Blog ClimGO : conseils chauffage climatisation, actualités, guides techniques. Expert RGE en Gironde. Découvrez nos articles d\'experts et astuces pratiques.',
    url: 'https://www.climgo.fr/blog',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og/blog-climgo.jpg',
      width: 1200,
      height: 630,
      alt: 'Blog ClimGO | Conseils Chauffage Climatisation Gironde',
    }],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Blog ClimGO | Conseils Chauffage Climatisation Gironde',
    description: 'Blog ClimGO : conseils chauffage climatisation, actualités, guides techniques. Expert RGE en Gironde. Découvrez nos articles d\'experts.',
    images: ['https://www.climgo.fr/images/og/blog-climgo.jpg'],
  },

  alternates: {
    canonical: 'https://www.climgo.fr/blog',
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

export default function BlogLayout({
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
            "@type": "Blog",
            "name": "Blog ClimGO - Conseils Chauffage Climatisation",
            "description": "Blog ClimGO : conseils chauffage climatisation, actualités, guides techniques. Expert RGE en Gironde. Découvrez nos articles d'experts et astuces pratiques.",
            "url": "https://www.climgo.fr/blog",
            "publisher": {
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
            },
            "mainEntity": {
              "@type": "HVACBusiness",
              "name": "ClimGO",
              "areaServed": {
                "@type": "Place",
                "name": "Gironde, Bordeaux Métropole, Bassin d'Arcachon"
              }
            }
          })
        }}
      />

      {/* JSON-LD FAQ - Questions spécifiques blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "À quelle fréquence ClimGO publie-t-il des articles ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ClimGO publie régulièrement des articles de conseils, actualités et guides techniques sur le chauffage et la climatisation. Notre blog est mis à jour avec des contenus d'experts pour vous accompagner dans vos projets."
                }
              },
              {
                "@type": "Question",
                "name": "Les articles du blog ClimGO sont-ils écrits par des experts ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, tous nos articles sont rédigés par nos experts techniques certifiés RGE. ClimGO partage son expertise de plus de 10 ans en chauffage et climatisation pour vous proposer des conseils fiables et pratiques."
                }
              },
              {
                "@type": "Question",
                "name": "Puis-je poser des questions sur les articles du blog ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolument ! ClimGO encourage les échanges et répond à vos questions sur nos articles. Contactez-nous pour des conseils personnalisés ou des précisions sur nos contenus techniques."
                }
              },
              {
                "@type": "Question",
                "name": "Le blog ClimGO traite-t-il des aides et subventions ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, ClimGO publie régulièrement des articles sur les aides de l'État, MaPrimeRénov' et les subventions disponibles. Notre blog vous tient informé des dernières actualités pour optimiser vos projets de rénovation."
                }
              },
              {
                "@type": "Question",
                "name": "Les conseils du blog ClimGO sont-ils adaptés à la Gironde ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, ClimGO adapte ses conseils au climat et aux spécificités de la Gironde. Notre expertise locale nous permet de vous proposer des solutions adaptées à votre région et à vos besoins spécifiques."
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
