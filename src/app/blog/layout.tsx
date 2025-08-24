import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

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
      <JsonLd type="business" />
      {children}
    </>
  );
}
