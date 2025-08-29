'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  FileText, 
  MessageSquare, 
  Star, 
  TrendingUp, 
  Activity,
  Calendar,
  Eye,
  ThumbsUp,
  Mail
} from 'lucide-react';

interface DashboardStats {
  totalUsers: number;
  totalArticles: number;
  totalComments: number;
  totalRatings: number;
  averageRating: number;
  recentActivity: Array<{
    id: string;
    type: 'user' | 'article' | 'comment' | 'rating';
    action: string;
    timestamp: string;
    details: string;
  }>;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalUsers: 0,
    totalArticles: 0,
    totalComments: 0,
    totalRatings: 0,
    averageRating: 0,
    recentActivity: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Remplacer par Supabase
    // Simuler des données pour le moment
    setTimeout(() => {
      setStats({
        totalUsers: 156,
        totalArticles: 23,
        totalComments: 89,
        totalRatings: 234,
        averageRating: 4.7,
        recentActivity: [
          {
            id: '1',
            type: 'user',
            action: 'Nouveau utilisateur inscrit',
            timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
            details: 'Marie Dupont s\'est inscrite'
          },
          {
            id: '2',
            type: 'article',
            action: 'Article publié',
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
            details: 'Nouveau guide sur la climatisation'
          },
          {
            id: '3',
            type: 'comment',
            action: 'Commentaire approuvé',
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(),
            details: 'Commentaire sur l\'article chauffage'
          },
          {
            id: '4',
            type: 'rating',
            action: 'Nouvel avis',
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString(),
            details: '5 étoiles pour la maintenance'
          }
        ]
      });
      setLoading(false);
    }, 1000);
  }, []);

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'user': return <Users className="h-4 w-4" />;
      case 'article': return <FileText className="h-4 w-4" />;
      case 'comment': return <MessageSquare className="h-4 w-4" />;
      case 'rating': return <Star className="h-4 w-4" />;
      default: return <Activity className="h-4 w-4" />;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'user': return 'bg-blue-100 text-blue-800';
      case 'article': return 'bg-green-100 text-green-800';
      case 'comment': return 'bg-yellow-100 text-yellow-800';
      case 'rating': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Tableau de bord</h1>
        <p className="text-gray-600 mt-2">
          Vue d'ensemble de votre plateforme ClimGO
        </p>
      </div>

      {/* Statistiques principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Utilisateurs</CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalUsers}</div>
            <p className="text-xs text-gray-600">
              +12% ce mois
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Articles</CardTitle>
            <FileText className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalArticles}</div>
            <p className="text-xs text-gray-600">
              +3 cette semaine
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Commentaires</CardTitle>
            <MessageSquare className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalComments}</div>
            <p className="text-xs text-gray-600">
              +8 aujourd'hui
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Note moyenne</CardTitle>
            <Star className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.averageRating}/5</div>
            <p className="text-xs text-gray-600">
              {stats.totalRatings} avis
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Graphique de tendance */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-600" />
            Évolution de l'activité
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center text-gray-500">
            <div className="text-center">
              <TrendingUp className="h-16 w-16 mx-auto mb-4 text-gray-300" />
              <p>Graphique d'évolution à implémenter</p>
              <p className="text-sm">Intégration Chart.js prévue</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Activité récente */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-blue-600" />
            Activité récente
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {stats.recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center gap-4 p-3 border rounded-lg">
                <div className={`p-2 rounded-full ${getActivityColor(activity.type)}`}>
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.details}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">
                    {new Date(activity.timestamp).toLocaleString('fr-FR')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Actions rapides */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button className="w-full" variant="outline">
          <FileText className="h-4 w-4 mr-2" />
          Nouvel article
        </Button>
        <Button className="w-full" variant="outline">
          <Mail className="h-4 w-4 mr-2" />
          Newsletter
        </Button>
        <Button className="w-full" variant="outline">
          <Users className="h-4 w-4 mr-2" />
          Gérer utilisateurs
        </Button>
      </div>
    </div>
  );
} 