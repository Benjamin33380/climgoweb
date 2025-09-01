'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  imageUrl: string | null;
  createdAt: string;
}

interface InternalLinkingProps {
  currentArticleId: string;
  articles: Article[];
}

export default function InternalLinking({ currentArticleId, articles }: InternalLinkingProps) {
  // Trouver l'index de l'article actuel
  const currentIndex = articles.findIndex(article => article.id === currentArticleId);
  
  if (currentIndex === -1) return null;

  // Récupérer les 3 articles précédents (publiés AVANT l'article actuel)
  const previousArticles = articles
    .slice(currentIndex + 1)
    .slice(0, 3);
  
  // Récupérer les 3 articles suivants (publiés APRÈS l'article actuel)
  const nextArticles = articles
    .slice(0, currentIndex)
    .slice(-3)
    .reverse(); // Plus récent en premier

  if (previousArticles.length === 0 && nextArticles.length === 0) {
    return null;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-8">
      {/* Articles précédents (publiés AVANT) */}
      {previousArticles.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <ChevronLeft className="h-5 w-5" />
            Articles précédents
          </h3>
          <div className="space-y-4">
            {previousArticles.map((article) => (
              <Link key={article.id} href={`/blog/${article.slug}`} className="block">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex gap-3">
                      {article.imageUrl && (
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <Image
                            src={article.imageUrl}
                            alt={article.title}
                            fill
                            className="object-cover rounded-md"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-foreground line-clamp-2 mb-1">
                          {article.title}
                        </h4>
                        {article.excerpt && (
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                            {article.excerpt}
                          </p>
                        )}
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>{formatDate(article.createdAt)}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Articles suivants (publiés APRÈS) */}
      {nextArticles.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            Articles suivants
            <ChevronRight className="h-5 w-5" />
          </h3>
          <div className="space-y-3">
            {nextArticles.map((article) => (
              <Link key={article.id} href={`/blog/${article.slug}`}>
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex gap-3">
                      {article.imageUrl && (
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <Image
                            src={article.imageUrl}
                            alt={article.title}
                            fill
                            className="object-cover rounded-md"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-foreground line-clamp-2 mb-1">
                          {article.title}
                        </h4>
                        {article.excerpt && (
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                            {article.excerpt}
                          </p>
                        )}
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>{formatDate(article.createdAt)}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 