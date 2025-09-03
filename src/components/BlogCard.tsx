'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MessageSquare, Star } from 'lucide-react';
import { useState } from 'react';

interface BlogCardProps {
  article: {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    imageUrl: string | null;
    createdAt: string;
    _count: {
      comments: number;
      ratings: number;
    };
  };
}

export default function BlogCard({ article }: BlogCardProps) {
  const [imageError, setImageError] = useState(false);

  const ImageFallback = () => (
    <div className="relative h-48 sm:h-56 md:h-48 w-full overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
      <div className="text-center p-4">
        <div className="w-12 h-12 mx-auto mb-2 bg-primary/20 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <p className="text-xs text-muted-foreground">Image à venir</p>
      </div>
    </div>
  );

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group h-full flex flex-col">
      {article.imageUrl ? (
        <div className="relative w-full bg-muted" style={{ height: '200px' }}>
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority={false}
            loading="lazy"
          />
        </div>
      ) : (
        <div className="relative w-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center" style={{ height: '200px' }}>
          <span className="text-gray-500">Pas d'image</span>
        </div>
      )}
      
      <CardHeader className="flex-grow p-4 sm:p-6">
        <div className="flex items-center justify-between mb-2 sm:mb-3">
          <Badge variant="secondary" className="text-xs">
            <Calendar className="w-3 h-3 mr-1" />
            {new Date(article.createdAt).toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </Badge>
          <div className="flex items-center space-x-2 sm:space-x-3 text-xs text-muted-foreground">
            <span className="flex items-center">
              <MessageSquare className="w-3 h-3 mr-1" />
              {article._count.comments}
            </span>
            <span className="flex items-center">
              <Star className="w-3 h-3 mr-1" />
              {article._count.ratings}
            </span>
          </div>
        </div>
        
        <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors text-base sm:text-lg">
          <Link href={`/blog/${article.slug}`}>
            {article.title}
          </Link>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-grow p-4 sm:p-6 pt-0">
        <CardDescription className="line-clamp-3 mb-3 sm:mb-4 text-muted-foreground text-sm">
          {article.excerpt}
        </CardDescription>
        
        <Link 
          href={`/blog/${article.slug}`}
          className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm group-hover:underline"
        >
          Lire la suite
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </CardContent>
    </Card>
  );
} 