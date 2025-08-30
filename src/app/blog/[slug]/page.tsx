import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import CommentSection from '@/components/blog/CommentSection';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, Eye, Star } from 'lucide-react';

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

interface Article {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  featured_image?: string;
  category: string;
  tags: string[];
  reading_time: number;
  published_at: string;
  author: {
    username: string;
    avatar_url?: string;
  };
  views_count: number;
  is_vip: boolean;
}

async function getArticle(slug: string): Promise<Article | null> {
  try {
    const { data, error } = await supabase
      .from('articles')
      .select(`
        id,
        title,
        content,
        excerpt,
        slug,
        featured_image,
        category,
        tags,
        reading_time,
        published_at,
        views_count,
        is_vip,
        author:users(username, avatar_url)
      `)
      .eq('slug', slug)
      .eq('is_published', true)
      .single();

    if (error || !data) {
      return null;
    }

    return data as any;
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'article:', error);
    return null;
  }
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  
  if (!article) {
    return {
      title: 'Article non trouvé - ClimGO',
      description: 'Cet article n\'existe pas ou n\'est plus disponible'
    };
  }

  return {
    title: `${article.title} - ClimGO`,
    description: article.excerpt,
    keywords: `${article.category}, ${article.tags.join(', ')}, chauffage, climatisation, ClimGO`,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      images: article.featured_image ? [article.featured_image] : [],
      publishedTime: article.published_at,
      authors: [article.author.username]
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: article.featured_image ? [article.featured_image] : []
    }
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const article = await getArticle(slug);
  
  if (!article) {
    notFound();
  }

  // Incrémenter le compteur de vues (optionnel)
  try {
    await supabase
      .from('articles')
      .update({ views_count: (article.views_count || 0) + 1 })
      .eq('id', article.id);
  } catch (error) {
    console.error('Erreur lors de l\'incrémentation des vues:', error);
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header de l'article */}
        <article className="mb-12">
          <header className="mb-8">
            {/* Badge VIP si applicable */}
            {article.is_vip && (
              <div className="mb-4">
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                  <Star className="w-3 h-3 mr-1" />
                  Article VIP
                </Badge>
              </div>
            )}

            {/* Catégorie et tags */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="outline">{article.category}</Badge>
              {article.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Titre */}
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              {article.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              {article.excerpt}
            </p>

            {/* Métadonnées */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author.username}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(article.published_at)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.reading_time} min de lecture</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>{article.views_count || 0} vues</span>
              </div>
            </div>
          </header>

          {/* Image à la une */}
          {article.featured_image && (
            <div className="mb-8">
              <img
                src={article.featured_image}
                alt={article.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          )}

          {/* Contenu de l'article */}
          <div 
            className="prose prose-lg dark:prose-invert max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>

        {/* Section des commentaires */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Star className="w-6 h-6" />
            Commentaires et avis
          </h2>
          <CommentSection articleSlug={slug} />
        </Card>
      </div>
    </div>
  );
}