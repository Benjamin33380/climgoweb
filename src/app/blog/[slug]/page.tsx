import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { prisma } from '@/lib/prisma';
import { formatDate } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import MarkdownRenderer from '@/components/ui/MarkdownRenderer';
import ActionButtons from './ActionButtons';
import InternalLinking from './InternalLinking';
import CommentSection from './CommentSection';
import { 
  Calendar, 
  User, 
  MessageSquare, 
  Clock,
  Eye 
} from 'lucide-react';
import Image from 'next/image';

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

// Générer les articles statiques au build
export async function generateStaticParams() {
  const articles = await prisma.article.findMany({
    where: { published: true },
    select: { slug: true }
  });

  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await prisma.article.findUnique({
    where: { slug: (await params).slug, published: true },
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

  // Récupérer tous les articles publiés pour le maillage interne
  const dbAllArticles = await prisma.article.findMany({
    where: { published: true },
    select: {
      id: true,
      title: true,
      slug: true,
      excerpt: true,
      imageUrl: true,
      createdAt: true
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  // Transformer les articles pour le maillage interne
  const allArticles = dbAllArticles.map(article => ({
    id: article.id,
    title: article.title,
    slug: article.slug,
    excerpt: article.excerpt,
    imageUrl: article.imageUrl,
    createdAt: article.createdAt?.toISOString() || new Date().toISOString()
  }));

  // Récupérer les commentaires approuvés
  const dbComments = await prisma.comment.findMany({
    where: {
      articleId: article.id,
      isApproved: true
    },
    include: {
      author: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true
        }
      }
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  // Récupérer les ratings
  const dbRatings = await prisma.rating.findMany({
    where: {
      articleId: article.id
    },
    include: {
      author: {
        select: {
          id: true,
          firstName: true,
          lastName: true
        }
      }
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  // Transformer les commentaires pour correspondre à l'interface
  const comments = dbComments.map(comment => ({
    id: comment.id,
    content: comment.content,
    author: {
      id: comment.author.id,
      firstName: comment.author.firstName,
      lastName: comment.author.lastName,
      email: comment.author.email
    },
    isApproved: comment.isApproved,
    createdAt: comment.createdAt.toISOString()
  }));

  // Transformer les ratings pour correspondre à l'interface
  const ratings = dbRatings.map(rating => ({
    id: rating.id,
    value: rating.value,
    author: {
      id: rating.author.id,
      firstName: rating.author.firstName,
      lastName: rating.author.lastName
    },
    createdAt: rating.createdAt.toISOString()
  }));

  // Parser le contenu Markdown
  // Calculer le temps de lecture (environ 200 mots par minute)
  const wordCount = article.content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  const authorName = article.author.firstName && article.author.lastName 
    ? `${article.author.firstName} ${article.author.lastName}`
    : article.author.email;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section avec image */}
      {article.imageUrl && (
        <div className="relative h-64 sm:h-96 w-full overflow-hidden bg-muted">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority={true}
          />
          <div className="absolute inset-0 bg-black/20" />
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

          {/* Sidebar droite - Maillage interne */}
          <div className="lg:col-span-3 order-3">
            <InternalLinking
              currentArticleId={article.id}
              articles={allArticles}
            />
          </div>
        </div>
      </div>

      {/* Section des commentaires et ratings en bas */}
      <div className="bg-card border-t">
        <div className="container mx-auto px-4 py-12">
          <CommentSection
            articleSlug={article.slug}
            articleId={article.id}
            initialComments={comments}
            initialRatings={ratings}
          />
        </div>
      </div>
    </div>
  );
}