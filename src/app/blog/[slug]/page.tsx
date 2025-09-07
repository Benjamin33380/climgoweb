import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { prisma } from '@/lib/prisma';
import { formatDate } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import MarkdownRenderer from '@/components/ui/MarkdownRenderer';
import ActionButtons from './ActionButtons';
import InternalLinkingOptimized from '@/components/blog/InternalLinkingOptimized';
import CommentSection from './CommentSection';
import { getCachedArticles, getCachedComments, getCachedRatings } from '@/lib/blog-cache';
import { 
  Calendar, 
  User, 
  MessageSquare, 
  Clock,
  Eye 
} from 'lucide-react';
import Image from 'next/image';
import { Suspense } from 'react';

// Optimisation : Revalidation plus longue pour les articles (1 heure)
export const revalidate = 3600;

// Optimisation : Cache statique pour les articles
export const dynamic = 'force-static';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Générer les métadonnées dynamiques
export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = await prisma.article.findUnique({
    where: { slug: (await params).slug, published: true },
    include: {
      author: {
        select: {
          firstName: true,
          lastName: true,
          email: true
        }
      }
    }
  });

  if (!article) {
    return {
      title: 'Article non trouvé',
      description: 'L\'article demandé n\'existe pas ou n\'est pas publié.'
    };
  }

  const authorName = article.author.firstName && article.author.lastName 
    ? `${article.author.firstName} ${article.author.lastName}`
    : article.author.email;

  return {
    title: `${article.title} | ClimGO Blog`,
    description: article.excerpt || article.content.substring(0, 160),
    openGraph: {
      title: article.title,
      description: article.excerpt || article.content.substring(0, 160),
      type: 'article',
      images: article.imageUrl ? [
        {
          url: article.imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        }
      ] : [],
      authors: [authorName],
      publishedTime: article.createdAt?.toISOString() || new Date().toISOString(),
      modifiedTime: article.updatedAt?.toISOString() || new Date().toISOString(),
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt || article.content.substring(0, 160),
      images: article.imageUrl ? [article.imageUrl] : [],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const slug = (await params).slug;
  
  // Optimisation : Récupérer d'abord l'article pour avoir son ID
  const article = await prisma.article.findUnique({
    where: { slug, published: true },
    include: {
      author: {
        select: {
          firstName: true,
          lastName: true,
          email: true
        }
      },
      _count: {
        select: {
          comments: true,
          ratings: true
        }
      }
    }
  });

  if (!article) {
    notFound();
  }

  // Optimisation : Utilisation du cache pour les requêtes parallèles
  const [allArticles, comments, ratings] = await Promise.all([
    getCachedArticles(),
    getCachedComments(article.id),
    getCachedRatings(article.id)
  ]);

  // Parser le contenu Markdown
  // Calculer le temps de lecture (environ 200 mots par minute)
  const wordCount = article.content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  const authorName = article.author.firstName && article.author.lastName 
    ? `${article.author.firstName} ${article.author.lastName}`
    : article.author.email;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section avec image optimisée */}
      {article.imageUrl && (
        <div className="relative h-64 w-full md:h-96 rounded-xl overflow-hidden">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover"
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </div>
      )}

      {/* Contenu principal avec sidebar */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar gauche - Boutons d'action */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <ActionButtons
              articleSlug={article.slug}
              articleId={article.id}
            />
          </div>

          {/* Contenu central - Article */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            {/* En-tête de l'article */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                {article.title}
              </h1>
              
              {article.excerpt && (
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  {article.excerpt}
                </p>
              )}

              {/* Métadonnées de l'article */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{authorName}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{article.createdAt ? formatDate(article.createdAt) : 'Date inconnue'}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{readingTime} min de lecture</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>{article._count?.comments || 0} commentaire{(article._count?.comments || 0) !== 1 ? 's' : ''}</span>
                </div>
              </div>
            </div>

            {/* Contenu Markdown */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <MarkdownRenderer 
                  content={article.content}
                  className="prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-code:text-foreground prose-blockquote:text-muted-foreground prose-li:text-foreground"
                />
              </CardContent>
            </Card>

            {/* Footer de l'article */}
            <div className="border-t pt-8 mb-12">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">
                    Article publié le {article.createdAt ? formatDate(article.createdAt) : 'Date inconnue'}
                  </Badge>
                  {article.updatedAt && article.createdAt && article.updatedAt > article.createdAt && (
                    <Badge variant="secondary">
                      Modifié le {formatDate(article.updatedAt)}
                    </Badge>
                  )}
                </div>
                
                <div className="text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    Article ClimGO
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar droite - Maillage interne optimisé */}
          <div className="lg:col-span-3 order-3">
            <InternalLinkingOptimized
              currentArticleId={article.id}
              initialArticles={allArticles}
            />
          </div>
        </div>
      </div>

      {/* Section des commentaires et ratings en bas - Chargement lazy */}
      <div className="bg-card border-t">
        <div className="container mx-auto px-4 py-12">
          <Suspense fallback={
            <div className="text-center py-8">
              <div className="animate-pulse">
                <div className="h-8 bg-muted rounded w-1/3 mx-auto mb-4"></div>
                <div className="h-4 bg-muted rounded w-1/2 mx-auto"></div>
              </div>
            </div>
          }>
            <CommentSection
              articleSlug={article.slug}
              articleId={article.id}
              initialComments={comments}
              initialRatings={ratings}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
}