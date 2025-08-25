import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales | ClimGO',
  description: 'Mentions légales ClimGO. Informations légales, hébergement, propriété intellectuelle. ClimGO SASU - Expert chauffage climatisation Gironde.',
  keywords: 'mentions légales ClimGO, ClimGO SASU, hébergement Vercel, propriété intellectuelle ClimGO, droit applicable ClimGO',
  
  openGraph: {
    title: 'Mentions Légales | ClimGO',
    description: 'Mentions légales ClimGO. Informations légales, hébergement, propriété intellectuelle. ClimGO SASU - Expert chauffage climatisation Gironde.',
    url: 'https://www.climgo.fr/mentions-legales',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og/mentions-legales-climgo.jpg',
      width: 1200,
      height: 630,
      alt: 'Mentions Légales ClimGO',
    }],
  },
  
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: 'Mentions Légales | ClimGO',
    description: 'Mentions légales ClimGO. Informations légales, hébergement, propriété intellectuelle.',
    images: ['https://www.climgo.fr/images/og/mentions-legales-climgo.jpg'],
  },
  
  alternates: {
    canonical: 'https://www.climgo.fr/mentions-legales',
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

export default function MentionsLegalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      
      {children}
    </>
  );
}
