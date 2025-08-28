// app/blog/layout.tsx
import type { Metadata } from 'next';

const SITE = 'https://www.climgo.fr';
const PATH = '/blog';
const PAGE_URL = `${SITE}${PATH}`;
const OG_IMAGE = `${SITE}/images/og/blog-climgo.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: 'Blog ClimGO | Conseils Chauffage Climatisation Gironde',
  description: 'Blog ClimGO : conseils experts en chauffage, climatisation et pompes à chaleur. Actualités, guides techniques, astuces d\'entretien et conseils RGE pour la Gironde et le Bassin d\'Arcachon.',
  keywords: 'blog ClimGO, conseils chauffage, conseils climatisation, actualités ClimGO, expert RGE Gironde',
  alternates: {
    canonical: PATH,
    languages: { 'fr-FR': PATH, 'x-default': PATH },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    url: PAGE_URL,
    title: 'Blog ClimGO | Conseils Chauffage Climatisation Gironde',
    description: 'Blog ClimGO : conseils experts en chauffage, climatisation et pompes à chaleur. Actualités, guides techniques, astuces d\'entretien et conseils RGE pour la Gironde et le Bassin d\'Arcachon.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Blog ClimGO | Conseils Chauffage Climatisation Gironde' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Blog ClimGO | Conseils Chauffage Climatisation Gironde',
    description: 'Blog ClimGO : conseils experts en chauffage, climatisation et pompes à chaleur. Actualités, guides techniques, astuces d\'entretien et conseils RGE pour la Gironde et le Bassin d\'Arcachon.',
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.svg', type: 'image/svg+xml' }],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog ClimGO – Conseils Chauffage Climatisation',
    url: PAGE_URL,
    description: 'Blog ClimGO : conseils experts en chauffage, climatisation et pompes à chaleur. Actualités, guides techniques, astuces d\'entretien et conseils RGE pour la Gironde et le Bassin d\'Arcachon.',
    publisher: {
      '@type': 'HVACBusiness',
      name: 'ClimGO',
      url: SITE,
      telephone: '+33766460008',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '28 rue de Cantelaude',
        addressLocality: 'Marcheprime',
        postalCode: '33380',
        addressCountry: 'FR',
      },
    },
  };

  // ⚠️ Garde ce bloc uniquement si la FAQ est VISIBLE sur /blog
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'À quelle fréquence ClimGO publie-t-il des articles ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ClimGO publie régulièrement des articles de conseils, actualités et guides techniques sur le chauffage et la climatisation. Notre blog est mis à jour avec des contenus d\'experts pour vous accompagner dans vos projets.',
        },
      },
      {
        '@type': 'Question',
        name: 'Les articles du blog ClimGO sont-ils écrits par des experts ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, tous nos articles sont rédigés par nos experts techniques certifiés RGE. ClimGO partage son expertise de plus de 10 ans en chauffage et climatisation pour vous proposer des conseils fiables et pratiques.',
        },
      },
      {
        '@type': 'Question',
        name: 'Puis-je poser des questions sur les articles du blog ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolument ! ClimGO encourage les échanges et répond à vos questions sur nos articles. Contactez-nous pour des conseils personnalisés ou des précisions sur nos contenus techniques.',
        },
      },
      {
        '@type': 'Question',
        name: 'Le blog ClimGO traite-t-il des aides et subventions ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, ClimGO publie régulièrement des articles sur les aides de l\'État, MaPrimeRénov\' et les subventions disponibles. Notre blog vous tient informé des dernières actualités pour optimiser vos projets de rénovation.',
        },
      },
      {
        '@type': 'Question',
        name: 'Les conseils du blog ClimGO sont-ils adaptés à la Gironde ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, ClimGO adapte ses conseils au climat et aux spécificités de la Gironde. Notre expertise locale nous permet de vous proposer des solutions adaptées à votre région et à vos besoins spécifiques.',
        },
      },
    ],
  };

  return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
        />
        {/* Supprime ce <script> si la FAQ n'est pas affichée en HTML sur /blog */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <main id="content" role="main">{children}</main>
      </>
  );
}