import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MessageSquare, Star, Edit, Eye, EyeOff } from 'lucide-react';

interface RecentArticlesProps {
  articles: Array<{
    id: string;
    title: string;
    slug: string;
    published: boolean;
    createdAt: string;
    _count: {
      comments: number;
      ratings: number;
    };
  }>;
  onPublishToggle?: (articleId: string, currentStatus: boolean) => void;
}

export default function RecentArticles({ articles, onPublishToggle }: RecentArticlesProps) {
  return (
    <div className="space-y-4">
      {articles.slice(0, 5).map((article) => (
        <div key={article.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-800 transition-colors">
          <div className="flex-1">
            <h4 className="font-medium text-gray-100 mb-1 line-clamp-1">
              {article.title}
            </h4>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Calendar className="w-3 h-3" />
                <span>{new Date(article.createdAt).toLocaleDateString('fr-FR')}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageSquare className="w-3 h-3" />
                <span>{article._count.comments}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="w-3 h-3" />
                <span>{article._count.ratings}</span>
              </div>
              <Badge variant={article.published ? "default" : "secondary"}>
                {article.published ? "Publié" : "Brouillon"}
              </Badge>
            </div>
          </div>
                              <div className="flex items-center space-x-2 ml-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onPublishToggle?.(article.id, article.published)}
                      >
                        {article.published ? (
                          <>
                            <EyeOff className="w-3 h-3 mr-1" />
                            Dépublier
                          </>
                        ) : (
                          <>
                            <Eye className="w-3 h-3 mr-1" />
                            Publier
                          </>
                        )}
                      </Button>
                      <Link href={`/admin/articles/${article.id}/edit`}>
                        <Button variant="outline" size="sm">
                          <Edit className="w-3 h-3 mr-1" />
                          Modifier
                        </Button>
                      </Link>
                      <Link href={`/blog/${article.slug}`}>
                        <Button variant="ghost" size="sm">
                          Voir
                        </Button>
                      </Link>
                    </div>
        </div>
      ))}
      
      {articles.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>Aucun article créé pour le moment</p>
        </div>
      )}
      
      {articles.length > 5 && (
        <div className="text-center pt-4">
          <Link href="/admin/articles">
            <Button variant="outline" size="sm">
              Voir tous les articles
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
} 