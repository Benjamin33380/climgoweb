import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MessageSquare, Star } from 'lucide-react';

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
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group h-full flex flex-col">
      {article.imageUrl && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}
      
      <CardHeader className="flex-grow">
        <div className="flex items-center justify-between mb-3">
          <Badge variant="secondary" className="text-xs">
            <Calendar className="w-3 h-3 mr-1" />
            {new Date(article.createdAt).toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </Badge>
          <div className="flex items-center space-x-3 text-xs text-muted-foreground">
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
        
        <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
          <Link href={`/blog/${article.slug}`}>
            {article.title}
          </Link>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <CardDescription className="line-clamp-3 mb-4 text-muted-foreground">
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