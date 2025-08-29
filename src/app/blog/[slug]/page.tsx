import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  
  // TODO: Remplacer par Supabase
  // Pour l'instant, retourner des métadonnées par défaut
  return {
    title: 'Article - ClimGO',
    description: 'Découvrez cet article sur le chauffage, la climatisation et la maintenance',
    keywords: 'chauffage, climatisation, maintenance, article, conseils',
    openGraph: {
      title: 'Article - ClimGO',
      description: 'Découvrez cet article sur le chauffage, la climatisation et la maintenance',
      type: 'article',
      images: []
    }
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  
  // TODO: Remplacer par Supabase
  // Pour l'instant, afficher un message de configuration
  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Article en cours de configuration</h1>
          <p className="text-xl text-gray-600 mb-4">
            Cet article sera disponible une fois Supabase configuré
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Par ClimGO</span>
            <span>•</span>
            <span>Configuration en cours</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Pour afficher cet article, vous devez configurer Supabase et remplacer 
            les placeholders par de vraies données.
          </p>
        </div>
      </article>
    </div>
  );
} 