'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight } from 'lucide-react';
import { formatDate } from '@/lib/utils';

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  imageUrl: string | null;
  createdAt: string;
}

interface InternalLinkingOptimizedProps {
  currentArticleId: string;
  initialArticles: Article[];
}

export default function InternalLinkingOptimized({ 
  currentArticleId, 
  initialArticles 
}: InternalLinkingOptimizedProps) {
  const [articles, setArticles] = useState<Article[]>(initialArticles);
  const [loading, setLoading] = useState(false);

  // Filtrer les articles pour exclure l'article actuel
  const relatedArticles = articles.filter(article => article.id !== currentArticleId).slice(0, 5);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <ArrowRight className="h-5 w-5" />
          Articles connexes
        </h3>
        
        <div className="space-y-4">
          {relatedArticles.map((article) => (
            <Link key={article.id} href={`/blog/${article.slug}`}>
              <Card className="hover:shadow-md transition-shadow duration-200 cursor-pointer group">
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm leading-tight group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                    
                    {article.excerpt && (
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {article.excerpt}
                      </p>
                    )}
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{formatDate(new Date(article.createdAt))}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        Lire
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
