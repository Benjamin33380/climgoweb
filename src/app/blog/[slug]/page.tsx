import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, MessageSquare, Calendar, User, ArrowLeft } from 'lucide-react';
import { PrismaClient } from '@prisma/client';

import MarkdownRenderer from '@/components/MarkdownRenderer';
import InternalLinking from '@/components/InternalLinking';

const prisma = new PrismaClient();

interface ArticleForLinking {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  imageUrl: string | null;
  createdAt: Date;
}

// Fonction pour récupérer l'article et les données associées
async function getArticleData(slug: string) {
  try {
    // Récupérer l'article
    const article = await prisma.article.findUnique({
      where: { slug, published: true },
      include: {
        admin: {
          select: {
            name: true,
            email: true
          }
        }
      }
    });

    if (!article) {
      return null;
    }

    // Récupérer tous les articles publiés pour le maillage interne
    const allArticles: ArticleForLinking[] = await prisma.article.findMany({
      where: { published: true },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        imageUrl: true,
        createdAt: true
      },
      orderBy: { createdAt: 'desc' }
    });

    // Récupérer les commentaires approuvés
    const comments = await prisma.comment.findMany({
      where: { 
        articleId: article.id,
        approved: true 
      },
      orderBy: { createdAt: 'desc' }
    });

    // Récupérer les ratings
    const ratings = await prisma.rating.findMany({
      where: { articleId: article.id }
    });

    const averageRating = ratings.length > 0 
      ? ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length 
      : 0;

    return {
      article,
      allArticles,
      comments,
      ratings: {
        averageRating: Math.round(averageRating * 10) / 10,
        totalRatings: ratings.length
      }
    };
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
    return null;
  } finally {
    await prisma.$disconnect();
  }
}

// Composant client pour les commentaires et ratings
import CommentSection from './CommentSection';

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await getArticleData(slug);

  if (!data) {
    notFound();
  }

  const { article, allArticles, comments, ratings } = data;

  return (
    <div className="min-h-screen bg-background">
        {/* Article Header */}
        <div className="bg-card border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <div className="mb-6">
                <Link
                  href="/blog"
                  className="inline-flex items-center text-primary hover:text-primary/80 mb-4"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour au blog
                </Link>
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                {article.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {article.excerpt || ''}
              </p>
              <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{article.admin.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(article.createdAt).toLocaleDateString('fr-FR')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>{comments.length} commentaires</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4" />
                  <span>{ratings.averageRating}/5 ({ratings.totalRatings} votes)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Article Content */}
            <div className="lg:col-span-2">
              {article.imageUrl && (
                <div className="mb-8">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    width={800}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              )}

              <Card>
                <CardContent className="p-8">
                  <MarkdownRenderer content={article.content} />
                </CardContent>
              </Card>

              {/* Section commentaires */}
              <div className="mt-12">
                <CommentSection 
                  articleSlug={article.slug}
                  articleId={article.id}
                  initialComments={comments}
                  initialRatings={ratings}
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Maillage interne */}
              <Card>
                <CardHeader>
                  <CardTitle>Navigation interne</CardTitle>
                </CardHeader>
                <CardContent>
                  <InternalLinking 
                    currentArticleId={article.id}
                    allArticles={allArticles}
                  />
                </CardContent>
              </Card>

              {/* Statistiques de l'article */}
              <Card>
                <CardHeader>
                  <CardTitle>Statistiques</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Note moyenne</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-medium">{ratings.averageRating}/5</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Total des votes</span>
                    <span className="font-medium">{ratings.totalRatings}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Commentaires</span>
                    <span className="font-medium">{comments.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Date de publication</span>
                    <span className="font-medium">
                      {new Date(article.createdAt).toLocaleDateString('fr-FR')}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
  );
} 