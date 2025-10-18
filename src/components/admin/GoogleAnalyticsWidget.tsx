'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  BarChart3, 
  Users, 
  Eye, 
  Clock, 
  TrendingDown,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
} from 'lucide-react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  topPages: Array<{
    path: string;
    title: string;
    views: number;
  }>;
  deviceBreakdown: Array<{
    device: string;
    count: number;
    percentage: number;
  }>;
  geographicData: Array<{
    country: string;
    city: string;
    sessions: number;
  }>;
}

interface GoogleAnalyticsWidgetProps {
  period: string;
}

export default function GoogleAnalyticsWidget({ period }: GoogleAnalyticsWidgetProps) {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadAnalyticsData();
  }, [period]);

  const loadAnalyticsData = async () => {
    setLoading(true);
    setError('');

    try {
      // Appel à l'API Google Analytics via GTM
      // Pour l'instant, utiliser des données simulées
      const mockData: AnalyticsData = {
        pageViews: Math.floor(Math.random() * 1000) + 500,
        uniqueVisitors: Math.floor(Math.random() * 500) + 200,
        bounceRate: Math.floor(Math.random() * 30) + 20,
        avgSessionDuration: Math.floor(Math.random() * 300) + 120,
        topPages: [
          { path: '/', title: 'Accueil', views: Math.floor(Math.random() * 200) + 100 },
          { path: '/blog', title: 'Blog', views: Math.floor(Math.random() * 150) + 80 },
          { path: '/pompe-a-chaleur', title: 'Pompe à chaleur', views: Math.floor(Math.random() * 100) + 50 }
        ],
        deviceBreakdown: [
          { device: 'Desktop', count: Math.floor(Math.random() * 300) + 200, percentage: 45 },
          { device: 'Mobile', count: Math.floor(Math.random() * 400) + 300, percentage: 50 },
          { device: 'Tablet', count: Math.floor(Math.random() * 100) + 50, percentage: 5 }
        ],
        geographicData: [
          { country: 'France', city: 'Bordeaux', sessions: Math.floor(Math.random() * 100) + 50 },
          { country: 'France', city: 'Paris', sessions: Math.floor(Math.random() * 50) + 25 },
          { country: 'France', city: 'Lyon', sessions: Math.floor(Math.random() * 30) + 15 }
        ]
      };

      setAnalyticsData(mockData);
    } catch (error) {
      setError('Erreur lors du chargement des données Google Analytics via GTM');
      console.error('Erreur analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Google Analytics (via GTM)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Google Analytics (via GTM)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-4 text-red-600">
            <p>{error}</p>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={loadAnalyticsData}
              className="mt-2"
            >
              Réessayer
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!analyticsData) {
    return null;
  }

  return (
    <div className="space-y-6">
      {/* Statistiques principales */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Eye className="h-8 w-8 text-blue-500" />
              <div>
                <div className="text-2xl font-bold">{analyticsData.pageViews.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Pages vues</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-green-500" />
              <div>
                <div className="text-2xl font-bold">{analyticsData.uniqueVisitors.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Visiteurs uniques</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Clock className="h-8 w-8 text-purple-500" />
              <div>
                <div className="text-2xl font-bold">{Math.round(analyticsData.avgSessionDuration / 60)}m</div>
                <div className="text-sm text-muted-foreground">Durée moyenne</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <TrendingDown className="h-8 w-8 text-orange-500" />
              <div>
                <div className="text-2xl font-bold">{analyticsData.bounceRate}%</div>
                <div className="text-sm text-muted-foreground">Taux de rebond</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pages populaires */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Pages les plus visitées
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {analyticsData.topPages.map((page, index) => (
              <div key={page.path} className="flex items-center justify-between p-3 rounded-lg hover:bg-accent transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium">{page.title}</p>
                    <p className="text-sm text-muted-foreground">{page.path}</p>
                  </div>
                </div>
                <Badge variant="secondary">
                  {page.views.toLocaleString()} vues
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Répartition des appareils */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Smartphone className="h-5 w-5" />
            Répartition des appareils
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {analyticsData.deviceBreakdown.map((device) => (
              <div key={device.device} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {device.device === 'Mobile' ? (
                    <Smartphone className="h-4 w-4" />
                  ) : device.device === 'Tablet' ? (
                    <Tablet className="h-4 w-4" />
                  ) : (
                    <Monitor className="h-4 w-4" />
                  )}
                  <span className="text-sm">{device.device}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">{device.count.toLocaleString()}</span>
                  <Badge variant="outline">{device.percentage}%</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Données géographiques */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Top villes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {analyticsData.geographicData.map((location, index) => (
              <div key={`${location.city}-${location.country}`} className="flex items-center justify-between p-3 rounded-lg hover:bg-accent transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium">{location.city}</p>
                    <p className="text-sm text-muted-foreground">{location.country}</p>
                  </div>
                </div>
                <Badge variant="secondary">
                  {location.sessions.toLocaleString()} sessions
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 