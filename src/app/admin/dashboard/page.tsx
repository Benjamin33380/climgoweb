'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { NotificationTester } from '@/components/admin/NotificationTester';
import AnalyticsWidget from '@/components/admin/AnalyticsWidget';
import {
  Users,
  FileText,
  MessageSquare,
  Mail,
  Eye,
  Globe,
  Smartphone,
  Monitor,
  Activity,
  Clock,
  Star,
  Heart,
  AlertCircle,
  CheckCircle,
  XCircle,
  Loader2
} from 'lucide-react';

interface DashboardStats {
  users: {
    total: number;
    new_this_period: number;
    active: number;
    banned: number;
  };
  articles: {
    total: number;
    published: number;
    draft: number;
    total_views: number;
    total_likes: number;
    total_comments: number;
  };
  comments: {
    total: number;
    approved: number;
    pending: number;
  };
  newsletter: {
    total_subscribers: number;
    active_subscribers: number;
    new_this_period: number;
  };
  sessions: {
    total: number;
    unique_countries: number;
    unique_cities: number;
    device_breakdown: Array<{ device: string; count: number }>;
  };
  engagement: {
    total_views: number;
    avg_reading_time: number;
    bounce_rate: number;
  };
}

interface ChartData {
  date: string;
  users: number;
  sessions: number;
  views: number;
}

interface TopArticle {
  title: string;
  slug: string;
  view_count: number;
  like_count: number;
  comment_count: number;
  unique_views: number;
}

interface RecentActivity {
  type: string;
  title: string;
  description: string;
  created_at: string;
  status: string;
  link: string;
}

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [period, setPeriod] = useState('30');
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [, setChartData] = useState<ChartData[]>([]);
  const [topArticles, setTopArticles] = useState<TopArticle[]>([]);
  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([]);

  useEffect(() => {
    loadDashboardData();
  }, [period]); // eslint-disable-line react-hooks/exhaustive-deps

  const loadDashboardData = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`/api/admin/dashboard/stats?period=${period}`);
      
      if (!response.ok) {
        throw new Error('Erreur lors du chargement des données');
      }

      const data = await response.json();
      setStats(data.stats);
      setChartData(data.chartData);
      setTopArticles(data.topArticles);
      setRecentActivity(data.recentActivity);
            } catch (error: unknown) {
      setError(error instanceof Error ? error.message : 'Erreur inconnue');
    } finally {
      setLoading(false);
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'comment':
        return <MessageSquare className="h-4 w-4" />;
      case 'user':
        return <Users className="h-4 w-4" />;
      case 'article':
        return <FileText className="h-4 w-4" />;
      default:
        return <Activity className="h-4 w-4" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge variant="secondary" className="text-green-600"><CheckCircle className="h-3 w-3 mr-1" />Approuvé</Badge>;
      case 'pending':
        return <Badge variant="outline" className="text-yellow-600"><Clock className="h-3 w-3 mr-1" />En attente</Badge>;
      case 'rejected':
        return <Badge variant="destructive"><XCircle className="h-3 w-3 mr-1" />Rejeté</Badge>;
      case 'new':
        return <Badge variant="secondary" className="text-blue-600"><AlertCircle className="h-3 w-3 mr-1" />Nouveau</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex items-center justify-center h-64">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-6">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <ProtectedRoute requireAdmin={true}>
      <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard Admin</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Période:</span>
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="px-3 py-1 border border-border rounded-md bg-background text-foreground"
          >
            <option value="7">7 jours</option>
            <option value="30">30 jours</option>
            <option value="90">90 jours</option>
            <option value="365">1 an</option>
          </select>
        </div>
      </div>

      {/* Statistiques principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-blue-500" />
              <div>
                <div className="text-2xl font-bold">{stats?.users.total || 0}</div>
                <div className="text-sm text-muted-foreground">Utilisateurs</div>
                <div className="text-xs text-green-600">+{stats?.users.new_this_period || 0} nouveaux</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <FileText className="h-8 w-8 text-green-500" />
              <div>
                <div className="text-2xl font-bold">{stats?.articles.published || 0}</div>
                <div className="text-sm text-muted-foreground">Articles publiés</div>
                <div className="text-xs text-muted-foreground">{stats?.articles.draft || 0} brouillons</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <MessageSquare className="h-8 w-8 text-purple-500" />
              <div>
                <div className="text-2xl font-bold">{stats?.comments.total || 0}</div>
                <div className="text-sm text-muted-foreground">Commentaires</div>
                <div className="text-xs text-yellow-600">{stats?.comments.pending || 0} en attente</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Mail className="h-8 w-8 text-orange-500" />
              <div>
                <div className="text-2xl font-bold">{stats?.newsletter.active_subscribers || 0}</div>
                <div className="text-sm text-muted-foreground">Abonnés newsletter</div>
                <div className="text-xs text-green-600">+{stats?.newsletter.new_this_period || 0} nouveaux</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="geographic">Géographique</TabsTrigger>
          <TabsTrigger value="activity">Activité</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Statistiques d'engagement */}
            <AnalyticsWidget />

            {/* Top articles */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Articles populaires
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topArticles.map((article, index) => (
                    <div key={article.slug} className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{article.title}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            {article.view_count}
                          </span>
                          <span className="flex items-center gap-1">
                            <Heart className="h-3 w-3" />
                            {article.like_count}
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageSquare className="h-3 w-3" />
                            {article.comment_count}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                  {topArticles.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                      <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Aucun article à afficher</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="engagement" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Eye className="h-8 w-8 text-blue-500" />
                  <div>
                    <div className="text-2xl font-bold">{stats?.articles.total_views || 0}</div>
                    <div className="text-sm text-muted-foreground">Vues d'articles</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Heart className="h-8 w-8 text-red-500" />
                  <div>
                    <div className="text-2xl font-bold">{stats?.articles.total_likes || 0}</div>
                    <div className="text-sm text-muted-foreground">J'aime totaux</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-8 w-8 text-green-500" />
                  <div>
                    <div className="text-2xl font-bold">{stats?.articles.total_comments || 0}</div>
                    <div className="text-sm text-muted-foreground">Commentaires totaux</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="geographic" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Répartition géographique
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Pays uniques</span>
                    <span className="font-bold">{stats?.sessions.unique_countries || 0}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Villes uniques</span>
                    <span className="font-bold">{stats?.sessions.unique_cities || 0}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5" />
                  Appareils
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {stats?.sessions.device_breakdown.map((device) => (
                    <div key={device.device} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {device.device.toLowerCase().includes('mobile') ? (
                          <Smartphone className="h-4 w-4" />
                        ) : (
                          <Monitor className="h-4 w-4" />
                        )}
                        <span className="text-sm">{device.device}</span>
                      </div>
                      <span className="font-bold">{device.count}</span>
                    </div>
                  )) || (
                    <div className="text-center py-4 text-muted-foreground">
                      <p>Aucune donnée d'appareil disponible</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="activity" className="space-y-6">
          {/* Test des notifications */}
          <NotificationTester />
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Activité récente
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent transition-colors">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">{activity.title}</span>
                        {getStatusBadge(activity.status)}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{activity.description}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {new Date(activity.created_at).toLocaleString('fr-FR')}
                      </div>
                    </div>
                  </div>
                ))}
                {recentActivity.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <Activity className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Aucune activité récente</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      </div>
    </ProtectedRoute>
  );
}