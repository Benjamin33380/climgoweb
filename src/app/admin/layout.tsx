import { Metadata } from 'next'
import { AdminAuthProvider } from '@/hooks/useAdminAuth';

export const metadata: Metadata = {
  title: 'Admin ClimGO | Conseils Chauffage Climatisation Gironde',
  description: 'Admin ClimGO : conseils chauffage, climatisation, maintenance. Guides techniques, aides financières, nouveautés. Conseils d\'artisan RGE certifié.',
  keywords: 'admin chauffage, conseils climatisation, maintenance pompe à chaleur, aides financières chauffage, MaPrimeRénov, guide technique CVC, artisan RGE gironde, économies énergie, rénovation énergétique, entretien chaudière, optimisation chauffage, nouvelles technologies',
  
  openGraph: {
    title: 'Admin ClimGO | Conseils Chauffage Climatisation Gironde',
    description: 'Admin ClimGO : conseils chauffage, climatisation, maintenance. Guides techniques, aides financières, nouveautés.',
    url: 'https://www.climgo.fr/admin',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og-admin.jpg',
      width: 1200,
      height: 630,
      alt: 'Admin ClimGO',
    }],
    locale: 'fr_FR',
    siteName: 'ClimGO',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Admin ClimGO | Conseils Chauffage Climatisation Gironde',
    description: 'Admin ClimGO : conseils chauffage, climatisation, maintenance. Guides techniques, aides financières.',
  },
  
  other: {
    'DC.title': 'Admin ClimGO | Conseils Chauffage Climatisation Gironde',
    'DC.description': 'Admin ClimGO : conseils chauffage, climatisation, maintenance. Guides techniques, aides financières, nouveautés.',
    'DC.type': 'Blog',
    'google-site-verification': 'Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g'
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminAuthProvider>
      <div className="min-h-screen bg-gray-50">
        {children}
      </div>
    </AdminAuthProvider>
  );
}
