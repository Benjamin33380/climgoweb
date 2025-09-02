import BlogSearchWrapper from '@/components/BlogSearchWrapper';
import BlogHeroWrapper from '@/components/BlogHeroWrapper';
import { Suspense } from 'react';
import { prisma } from '@/lib/prisma';
import AutoRefreshBlog from '@/components/blog/AutoRefreshBlog';

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
    <AutoRefreshBlog>
      <div className="min-h-screen bg-background">
        {/* Hero Section avec recherche intégrée */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-8 lg:py-12 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-repeat" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          
          <div className="relative w-full px-4 sm:px-6 lg:px-8">
            <Suspense fallback={
              <div className="text-center">
                <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-full p-4 animate-pulse max-w-2xl mx-auto">
                  <div className="h-12 bg-muted rounded-full"></div>
                </div>
              </div>
            }>
              <BlogHeroWrapper articles={articles} />
            </Suspense>
          </div>
        </section>

        {/* Section Articles séparée */}
        <Suspense fallback={<div className="text-center py-16">Chargement des articles...</div>}>
          <BlogSearchWrapper articles={articles} />
        </Suspense>
      </div>
    </AutoRefreshBlog>
  );
}
