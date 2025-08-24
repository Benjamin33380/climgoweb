import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  imageUrl: string | null;
  createdAt: Date;
}

interface InternalLinkingProps {
  currentArticleId: string;
  allArticles: Article[];
}

export default function InternalLinking({ currentArticleId, allArticles }: InternalLinkingProps) {
  // Trouver l'index de l'article actuel
  const currentIndex = allArticles.findIndex(article => article.id === currentArticleId);
  
  if (currentIndex === -1) return null;

  // Récupérer les 3 articles précédents et suivants
  const previousArticles = allArticles
    .slice(Math.max(0, currentIndex - 3), currentIndex)
    .reverse(); // Plus récent en premier

  const nextArticles = allArticles
    .slice(currentIndex + 1, Math.min(allArticles.length, currentIndex + 4));

  if (previousArticles.length === 0 && nextArticles.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      {/* Articles précédents */}
      {previousArticles.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
            <ChevronLeft className="w-5 h-5 mr-2" />
            Articles précédents
          </h3>
          <div className="space-y-3">
            {previousArticles.map((article) => (
              <Link key={article.id} href={`/blog/${article.slug}`}>
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      {article.imageUrl && (
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={article.imageUrl}
                            alt={article.title}
                            className="w-full h-full object-cover"
                            width={500}
                            height={500}
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-foreground line-clamp-2 mb-1 group-hover:text-primary transition-colors">
                          {article.title}
                        </h4>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center space-x-2 mt-2">
                          <ArrowLeft className="w-3 h-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">
                            {new Date(article.createdAt).toLocaleDateString('fr-FR')}
                          </span>
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

      {/* Articles suivants */}
      {nextArticles.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
            Articles suivants
            <ChevronRight className="w-5 h-5 ml-2" />
          </h3>
          <div className="space-y-3">
            {nextArticles.map((article) => (
              <Link key={article.id} href={`/blog/${article.slug}`}>
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      {article.imageUrl && (
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={article.imageUrl}
                            alt={article.title}
                            className="w-full h-full object-cover"
                            width={500}
                            height={500}
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-foreground line-clamp-2 mb-1 group-hover:text-primary transition-colors">
                          {article.title}
                        </h4>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className="text-xs text-muted-foreground">
                            {new Date(article.createdAt).toLocaleDateString('fr-FR')}
                          </span>
                          <ArrowRight className="w-3 h-3 text-muted-foreground" />
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