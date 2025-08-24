import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales | ClimGO',
  description: 'Mentions légales ClimGO - Expert chauffage climatisation Gironde. Informations légales et administratives.',
  
  alternates: {
    canonical: 'https://www.climgo.fr/mentions-legales',
  },
  
  robots: {
    index: true,
    follow: true,
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
