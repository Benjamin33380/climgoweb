'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@/hooks/useUser';
import { supabase } from '@/lib/supabase';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  User, 
  MessageCircle, 
  Star, 
  Mail, 
  Calendar, 
  BookOpen, 
  Settings,
  Eye,
  Heart,
  TrendingUp
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface DashboardStats {
  commentsCount: number;
  ratingsCount: number;
  averageRating: number;
  articlesRead: number;
  newsletterSubscribed: boolean;
  memberSince: string;
}

interface RecentActivity {
  id: string;
  type: 'comment' | 'rating' | 'article_read';
  title: string;
  date: string;
  articleSlug?: string;
  rating?: number;
}

export default function DashboardPage() {
  const { user, loading } = useUser();
  const router = useRouter();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([]);
  const [loadingStats, setLoadingStats] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth');
      return;
    }

    if (user) {
      fetchDashboardData();
    }
  }, [user, loading, router]);

  const fetchDashboardData = async () => {
    if (!user) return;

    try {
      setLoadingStats(true);

      // Récupérer les statistiques utilisateur
      const [commentsRes, ratingsRes, userRes] = await Promise.all([
        supabase
          .from('comments')
          .select('id')
          .eq('user_id', user.id),
        supabase
          .from('ratings')
          .select('rating')
          .eq('user_id', user.id),
        supabase
          .from('users')
          .select('newsletter_subscribed, created_at')
          .eq('id', user.id)
          .single()
      ]);

      // Calculer les statistiques
      const commentsCount = commentsRes.data?.length || 0;
      const ratingsCount = ratingsRes.data?.length || 0;
      const averageRating = ratingsRes.data && ratingsRes.data.length > 0
        ? ratingsRes.data.reduce((sum, r) => sum + r.rating, 0) / ratingsRes.data.length
        : 0;

      setStats({
        commentsCount,
        ratingsCount,
        averageRating: Math.round(averageRating * 10) / 10,
        articlesRead: 0, // Placeholder - nécessiterait un système de tracking
        newsletterSubscribed: userRes.data?.newsletter_subscribed || false,
        memberSince: userRes.data?.created_at || ''
      });

      // Récupérer l'activité récente (commentaires et notes)
      const [recentCommentsRes, recentRatingsRes] = await Promise.all([
        supabase
          .from('comments')
          .select(`
            id,
            created_at,
            articles!inner(title, slug)
          `)
          .eq('user_id', user.id)
          .order('created_at', { ascending: false })
          .limit(5),
        supabase
          .from('ratings')
          .select(`
            id,
            rating,
            created_at,
            articles!inner(title, slug)
          `)
          .eq('user_id', user.id)
          .order('created_at', { ascending: false })
          .limit(5)
      ]);

      // Combiner et trier l'activité récente
      const activities: RecentActivity[] = [];

      recentCommentsRes.data?.forEach((comment: any) => {
        activities.push({
          id: comment.id,
          type: 'comment',
          title: `Commentaire sur "${comment.articles?.title || 'Article'}"`,
          date: comment.created_at,
          articleSlug: comment.articles?.slug
        });
      });

      recentRatingsRes.data?.forEach((rating: any) => {
        activities.push({
          id: rating.id,
          type: 'rating',
          title: `Note donnée à "${rating.articles?.title || 'Article'}"`,
          date: rating.created_at,
          articleSlug: rating.articles?.slug,
          rating: rating.rating
        });
      });

      // Trier par date décroissante
      activities.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      setRecentActivity(activities.slice(0, 10));

    } catch (error) {
      console.error('Erreur lors du chargement des données du tableau de bord:', error);
    } finally {
      setLoadingStats(false);
    }
  };

  if (loading || loadingStats) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-2 text-muted-foreground">Chargement...</p>
        </div>
      </div>
    );
  }

  if (!user || !stats) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">Erreur lors du chargement des données</p>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'comment':
        return <MessageCircle className="w-4 h-4 text-blue-500" />;
      case 'rating':
        return <Star className="w-4 h-4 text-yellow-500" />;
      case 'article_read':
        return <Eye className="w-4 h-4 text-green-500" />;
      default:
        return <BookOpen className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Tableau de bord</h1>
              <p className="text-muted-foreground mt-1">
                Bienvenue {user.username || user.email} !
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Link href="/profile">
                <Button variant="outline">
                  <Settings className="w-4 h-4 mr-2" />
                  Profil
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Commentaires</p>
                <p className="text-2xl font-bold">{stats.commentsCount}</p>
              </div>
              <MessageCircle className="w-8 h-8 text-blue-500" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Notes données</p>
                <p className="text-2xl font-bold">{stats.ratingsCount}</p>
              </div>
              <Star className="w-8 h-8 text-yellow-500" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Note moyenne</p>
                <p className="text-2xl font-bold">
                  {stats.averageRating > 0 ? `${stats.averageRating}/5` : '-'}
                </p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Newsletter</p>
                <p className="text-2xl font-bold">
                  {stats.newsletterSubscribed ? '✓' : '✗'}
                </p>
              </div>
              <Mail className="w-8 h-8 text-purple-500" />
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Activité récente */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Activité récente
              </h2>
              
              {recentActivity.length > 0 ? (
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={activity.id}>
                      <div className="flex items-start gap-3">
                        {getActivityIcon(activity.type)}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground">
                            {activity.title}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <p className="text-xs text-muted-foreground">
                              {formatDate(activity.date)}
                            </p>
                            {activity.rating && (
                              <div className="flex items-center gap-1">
                                <Star className="w-3 h-3 text-yellow-500 fill-current" />
                                <span className="text-xs font-medium">{activity.rating}/5</span>
                              </div>
                            )}
                          </div>
                          {activity.articleSlug && (
                            <Link 
                              href={`/blog/${activity.articleSlug}`}
                              className="text-xs text-primary hover:underline mt-1 inline-block"
                            >
                              Voir l'article →
                            </Link>
                          )}
                        </div>
                      </div>
                      {index < recentActivity.length - 1 && (
                        <Separator className="mt-4" />
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Aucune activité récente</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Commencez par lire nos articles et laisser des commentaires !
                  </p>
                  <Link href="/blog">
                    <Button className="mt-4" variant="outline">
                      Découvrir le blog
                    </Button>
                  </Link>
                </div>
              )}
            </Card>
          </div>

          {/* Informations du compte */}
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <User className="w-5 h-5" />
                Mon compte
              </h2>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Email</p>
                  <p className="text-sm">{user.email}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Nom d'utilisateur</p>
                  <p className="text-sm">{user.username || 'Non défini'}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Membre depuis</p>
                  <p className="text-sm">{formatDate(stats.memberSince)}</p>
                </div>
                
                <Separator />
                
                <Link href="/profile">
                  <Button className="w-full" variant="outline">
                    <Settings className="w-4 h-4 mr-2" />
                    Modifier mon profil
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Actions rapides */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Actions rapides</h2>
              
              <div className="space-y-3">
                <Link href="/blog">
                  <Button className="w-full justify-start" variant="ghost">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Lire les articles
                  </Button>
                </Link>
                
                <Link href="/contact">
                  <Button className="w-full justify-start" variant="ghost">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Nous contacter
                  </Button>
                </Link>
                
                {!stats.newsletterSubscribed && (
                  <Link href="/profile">
                    <Button className="w-full justify-start" variant="ghost">
                      <Mail className="w-4 h-4 mr-2" />
                      S'abonner à la newsletter
                    </Button>
                  </Link>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
