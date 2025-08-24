import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | ClimGO',
  description: 'Politique de confidentialité ClimGO - Expert chauffage climatisation Gironde. Protection des données personnelles.',
  
  alternates: {
    canonical: 'https://www.climgo.fr/politique-confidentialite',
  },
  
  robots: {
    index: true,
    follow: true,
  }
};

export default function PolitiqueConfidentialiteLayout({
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
