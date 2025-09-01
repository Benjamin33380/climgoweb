import BlogSearchWrapper from '@/components/BlogSearchWrapper';
import { Suspense } from 'react';
import { prisma } from '@/lib/prisma';

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
    console.log('🔍 [BlogPage] Récupération des articles depuis Prisma...');
    
    // Récupérer directement depuis Prisma
    const dbArticles = await prisma.article.findMany({
      where: {
        published: true
      },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        imageUrl: true,
        published: true,
        createdAt: true,
        _count: {
          select: {
            comments: true,
            ratings: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    // Transformer les données pour correspondre à l'interface Article
    const articles: Article[] = dbArticles.map(article => ({
      id: article.id,
      title: article.title,
      slug: article.slug,
      excerpt: article.excerpt || '', // Convertir null en chaîne vide
      imageUrl: article.imageUrl,
      published: article.published,
      createdAt: article.createdAt?.toISOString() || new Date().toISOString(),
      _count: article._count
    }));
    
    console.log('✅ [BlogPage] Articles récupérés depuis Prisma:', articles.length);
    return articles;
    
  } catch (error) {
    console.error('❌ [BlogPage] Erreur lors de la récupération des articles:', error);
    return [];
  }
}

export default async function BlogPage() {
  const articles = await getArticles();
  
  console.log('📚 [BlogPage] Articles récupérés:', articles.length);
  console.log('📚 [BlogPage] Articles:', articles);

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
