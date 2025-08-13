import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog ClimGO | Conseils Chauffage Climatisation Gironde',
  description: 'Blog expert ClimGO : conseils chauffage, climatisation, maintenance. Guides techniques, aides financières, nouveautés. Conseils d\'artisan RGE certifié.',
  keywords: 'blog chauffage, conseils climatisation, maintenance pompe à chaleur, aides financières chauffage, MaPrimeRénov, guide technique CVC, artisan RGE gironde, économies énergie, rénovation énergétique, entretien chaudière, optimisation chauffage, nouvelles technologies',
  
  openGraph: {
    title: 'Blog ClimGO | Conseils Chauffage Climatisation Gironde',
    description: 'Blog expert ClimGO : conseils chauffage, climatisation, maintenance. Guides techniques, aides financières, nouveautés.',
    url: 'https://www.climgo.fr/blog',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og-blog.jpg',
      width: 1200,
      height: 630,
      alt: 'Blog ClimGO',
    }],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Blog ClimGO | Conseils Chauffage Climatisation Gironde',
    description: 'Blog expert ClimGO : conseils chauffage, climatisation, maintenance. Guides techniques, aides financières.',
  },
  
  other: {
    'DC.title': 'Blog ClimGO | Conseils Chauffage Climatisation Gironde',
    'DC.description': 'Blog expert ClimGO : conseils chauffage, climatisation, maintenance. Guides techniques, aides financières, nouveautés.',
    'DC.type': 'Blog',
    'google-site-verification': 'Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g'
  },
  
  robots: { index: true, follow: true }
};

export default function BlogLayout({
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
