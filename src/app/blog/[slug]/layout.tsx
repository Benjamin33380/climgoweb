import { Metadata } from 'next';

interface BlogLayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogLayoutProps): Promise<Metadata> {
  const { slug } = await params;
  
  // TODO: Remplacer par Supabase
  // Pour l'instant, retourner des métadonnées par défaut
  return {
    title: 'Blog - ClimGO',
    description: 'Découvrez nos articles sur le chauffage, la climatisation et la maintenance',
    keywords: 'chauffage, climatisation, maintenance, blog, conseils',
    openGraph: {
      title: 'Blog - ClimGO',
      description: 'Découvrez nos articles sur le chauffage, la climatisation et la maintenance',
      type: 'website',
      images: []
    }
  };
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return <>{children}</>;
} 