import BlogSearchWrapper from '@/components/BlogSearchWrapper';
import { Suspense } from 'react';

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  imageUrl: string | null;
  published: boolean;
  createdAt: string;
  _count: {
    comments: number;
    ratings: number;
  };
}

async function getArticles(): Promise<Article[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.climgo.fr'}/api/blog`, {
      cache: 'no-store'
    });
    if (response.ok) {
      const data = await response.json();
      return data.articles || [];
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des articles:', error);
  }
  return [];
}

export default async function BlogPage() {
  const articles = await getArticles();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Blog ClimGO - Conseils Chauffage Climatisation Gironde
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos conseils, actualités et guides sur le chauffage, 
              la climatisation et la maintenance de vos systèmes
            </p>
          </div>
        </div>
      </div>

      {/* Search */}
      <Suspense fallback={<div className="bg-card border-b py-8 text-center">Chargement de la recherche...</div>}>
        <BlogSearchWrapper articles={articles} />
      </Suspense>
    </div>
  );
}
