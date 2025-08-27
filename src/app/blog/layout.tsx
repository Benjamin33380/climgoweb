// app/blog/layout.tsx
import type { Metadata } from 'next';

const SITE = 'https://www.climgo.fr';
const PATH = '/blog';
const PAGE_URL = `${SITE}${PATH}`;
const OG_IMAGE = `${SITE}/images/og/blog-climgo.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: 'Blog ClimGO | Conseils Chauffage & Climatisation en Gironde',
  description:
    "Conseils chauffage/climatisation, actualités et guides techniques par ClimGO (RGE) en Gironde.",
  alternates: {
    canonical: PATH,
    languages: { 'fr-FR': PATH, 'x-default': PATH },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'ClimGO',
    url: PAGE_URL,
    title: 'Blog ClimGO | Conseils Chauffage & Climatisation en Gironde',
    description:
      "Conseils chauffage/climatisation, actualités et guides techniques par ClimGO (RGE) en Gironde.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Blog ClimGO' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Blog ClimGO | Conseils Chauffage & Climatisation en Gironde',
    description:
      "Conseils chauffage/climatisation, actualités et guides techniques par ClimGO (RGE) en Gironde.",
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
    name: 'Blog ClimGO – Chauffage & Climatisation',
    url: PAGE_URL,
    description:
      "Conseils chauffage/climatisation, actualités et guides techniques par ClimGO (RGE) en Gironde.",
    publisher: {
      '@type': 'HVACBusiness', // ou 'LocalBusiness' si tu préfères
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
        name: 'À quelle fréquence publiez-vous ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "Nous publions régulièrement des conseils, actualités et guides techniques sur le chauffage et la climatisation.",
        },
      },
      {
        '@type': 'Question',
        name: 'Les articles sont-ils rédigés par des experts RGE ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Oui, nos contenus sont rédigés et relus par nos techniciens certifiés RGE.',
        },
      },
      {
        '@type': 'Question',
        name: 'Puis-je poser des questions sur les articles ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Absolument, contactez-nous pour des conseils personnalisés ou des précisions techniques.',
        },
      },
    ],
  };

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
        />
        {/* Supprime ce <script> si la FAQ n’est pas affichée en HTML sur /blog */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body>
        <main id="content" role="main">{children}</main>
      </body>
    </html>
  );
}