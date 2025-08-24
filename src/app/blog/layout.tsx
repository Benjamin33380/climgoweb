import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Blog ClimGO | Conseils Chauffage Climatisation Gironde',
  description: 'Blog ClimGO : conseils chauffage climatisation, actualités, guides techniques.',
  keywords: 'blog ClimGO, conseils chauffage, conseils climatisation, actualités ClimGO, expert RGE Gironde',
  
  openGraph: {
    title: 'Blog ClimGO | Conseils Chauffage Climatisation Gironde',
    description: 'Blog ClimGO : conseils chauffage climatisation, actualités, guides techniques.',
    url: 'https://www.climgo.fr/blog',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Blog ClimGO | Conseils Chauffage Climatisation Gironde',
    description: 'Blog ClimGO : conseils chauffage climatisation, actualités, guides techniques.',
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
