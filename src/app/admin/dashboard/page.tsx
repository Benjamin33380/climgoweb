'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
  Mail,
  LogOut
} from 'lucide-react';
import { useAdminAuth } from '@/hooks/useAdminAuth';

export default function AdminDashboard() {
  const { user, logout } = useAdminAuth();
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalArticles: 0,
    totalComments: 0,
    totalRatings: 0,
    averageRating: 0,
    monthlyGrowth: 0
  });

  useEffect(() => {
    // Simuler le chargement des données
    const timer = setTimeout(() => {
      setStats({
        totalUsers: 156,
        totalArticles: 23,
        totalComments: 89,
        totalRatings: 67,
        averageRating: 4.2,
        monthlyGrowth: 12.5
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'comment': return <MessageSquare className="h-4 w-4" />;
      case 'rating': return <Star className="h-4 w-4" />;
      case 'article': return <FileText className="h-4 w-4" />;
      case 'user': return <Users className="h-4 w-4" />;
      default: return <Activity className="h-4 w-4" />;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'comment': return 'bg-blue-100 text-blue-800';
      case 'rating': return 'bg-yellow-100 text-yellow-800';
      case 'article': return 'bg-green-100 text-green-800';
      case 'user': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const recentActivity = [
    { id: 1, type: 'comment', message: 'Nouveau commentaire sur "Chauffage écologique"', time: 'Il y a 5 min', user: 'Jean D.' },
    { id: 2, type: 'rating', message: 'Note 5 étoiles pour "Climatisation réversible"', time: 'Il y a 15 min', user: 'Marie L.' },
    { id: 3, type: 'article', message: 'Article "Maintenance préventive" publié', time: 'Il y a 1h', user: 'Admin' },
    { id: 4, type: 'user', message: 'Nouveau compte utilisateur créé', time: 'Il y a 2h', user: 'Pierre M.' },
    { id: 5, type: 'comment', message: 'Commentaire modéré et approuvé', time: 'Il y a 3h', user: 'Modérateur' }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header avec déconnexion */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tableau de bord</h1>
          <p className="text-gray-600">Bienvenue, {user?.email}</p>
        </div>
        <Button onClick={logout} variant="outline" className="flex items-center gap-2">
          <LogOut className="h-4 w-4" />
          Déconnexion
        </Button>
      </div>

      {/* Statistiques principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Utilisateurs</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalUsers}</div>
            <p className="text-xs text-muted-foreground">
              +{stats.monthlyGrowth}% ce mois
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Articles</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalArticles}</div>
            <p className="text-xs text-muted-foreground">
              +2 cette semaine
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Commentaires</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalComments}</div>
            <p className="text-xs text-muted-foreground">
              +15 cette semaine
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Note moyenne</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.averageRating}/5</div>
            <p className="text-xs text-muted-foreground">
              {stats.totalRatings} avis
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Graphique d'évolution */}
      <Card>
        <CardHeader>
          <CardTitle>Évolution de l'activité</CardTitle>
          <CardDescription>
            Statistiques des 30 derniers jours
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center text-gray-500">
              <TrendingUp className="h-12 w-12 mx-auto mb-2" />
              <p>Graphique d'évolution</p>
              <p className="text-sm">Intégration Chart.js à venir</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Activité récente */}
      <Card>
        <CardHeader>
          <CardTitle>Activité récente</CardTitle>
          <CardDescription>
            Dernières actions sur la plateforme
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-4">
                <div className={`p-2 rounded-full ${getActivityColor(activity.type)}`}>
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.message}</p>
                  <p className="text-xs text-gray-500">
                    par {activity.user} • {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Actions rapides */}
      <Card>
        <CardHeader>
          <CardTitle>Actions rapides</CardTitle>
          <CardDescription>
            Accédez rapidement aux fonctionnalités principales
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Nouvel article
            </Button>
            <Button className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Newsletter
            </Button>
            <Button className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Gérer utilisateurs
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 