import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  FileText, 
  MessageSquare, 
  Star, 
  Eye, 
  TrendingUp,
  Calendar,
} from 'lucide-react';

interface BlogStatsProps {
  stats: {
    totalArticles: number;
    publishedArticles: number;
    draftArticles: number;
    totalComments: number;
    pendingComments: number;
    totalRatings: number;
    averageRating: number;
    totalViews?: number;
    monthlyGrowth?: number;
  };
}

export default function BlogStats({ stats }: BlogStatsProps) {
  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const formatPercentage = (num: number) => {
    return num > 0 ? `+${num}%` : `${num}%`;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Total Articles */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Articles</CardTitle>
          <FileText className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{formatNumber(stats.totalArticles)}</div>
          <p className="text-xs text-muted-foreground">
            {stats.publishedArticles} publiés, {stats.draftArticles} brouillons
          </p>
        </CardContent>
      </Card>

      {/* Articles Publiés */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Articles Publiés</CardTitle>
          <TrendingUp className="h-4 w-4 text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-600">
            {formatNumber(stats.publishedArticles)}
          </div>
          <p className="text-xs text-muted-foreground">
            {stats.totalArticles > 0 
              ? Math.round((stats.publishedArticles / stats.totalArticles) * 100) + '% du total'
              : 'Aucun article'
            }
          </p>
        </CardContent>
      </Card>

      {/* Commentaires */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Commentaires</CardTitle>
          <MessageSquare className="h-4 w-4 text-blue-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-blue-600">
            {formatNumber(stats.totalComments)}
          </div>
          <p className="text-xs text-muted-foreground">
            {stats.pendingComments} en attente de modération
          </p>
        </CardContent>
      </Card>

      {/* Ratings */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Note Moyenne</CardTitle>
          <Star className="h-4 w-4 text-yellow-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-yellow-600">
            {stats.averageRating.toFixed(1)}/5
          </div>
          <p className="text-xs text-muted-foreground">
            {formatNumber(stats.totalRatings)} avis reçus
          </p>
        </CardContent>
      </Card>

      {/* Croissance mensuelle */}
      {stats.monthlyGrowth !== undefined && (
        <Card className="md:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Croissance Mensuelle</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatPercentage(stats.monthlyGrowth)}
            </div>
            <p className="text-xs text-muted-foreground">
              Par rapport au mois précédent
            </p>
          </CardContent>
        </Card>
      )}

      {/* Vues totales */}
      {stats.totalViews !== undefined && (
        <Card className="md:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vues Totales</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatNumber(stats.totalViews)}
            </div>
            <p className="text-xs text-muted-foreground">
              Depuis le début
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
} 