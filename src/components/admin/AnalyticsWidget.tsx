'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, Clock, TrendingDown, RefreshCw, BarChart3 } from 'lucide-react';

interface AnalyticsData {
  totalViews: number;
  avgSessionDuration: number;
  bounceRate: number;
  dateRange: {
    startDate: string;
    endDate: string;
  };
}

export default function AnalyticsWidget() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showEmbed, setShowEmbed] = useState(false);

  useEffect(() => {
    // Essayer d'abord l'API locale, sinon afficher l'embed
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/api/analytics');
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données');
      }
      
      const analyticsData = await response.json();
      setData(analyticsData);
    } catch (err) {
      console.error('API locale non disponible, utilisation de Google Analytics Embed', err);
      setShowEmbed(true);
      setError(null);
    } finally {
      setLoading(false);
    }
  };

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  // Si l'API locale n'est pas disponible, afficher l'embed Google Analytics
  if (showEmbed) {
    return (
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Google Analytics - Données en Temps Réel
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              Connectez-vous à Google Analytics pour voir vos données d'engagement
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm font-medium mb-2">Métriques disponibles :</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Vues totales et pages populaires</li>
                <li>• Temps de session moyen</li>
                <li>• Taux de rebond et engagement</li>
                <li>• Données géographiques et appareils</li>
              </ul>
            </div>
            <button
              onClick={() => window.open('https://analytics.google.com', '_blank')}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
              Ouvrir Google Analytics
            </button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (loading) {
    return (
      <div className="grid gap-4 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Chargement...</CardTitle>
              <RefreshCw className="h-4 w-4 animate-spin text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">...</div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center text-muted-foreground">
            <p className="mb-2">Erreur lors du chargement des analytics</p>
            <p className="text-sm">{error}</p>
            <button
              onClick={fetchAnalytics}
              className="mt-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
              Réessayer
            </button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!data) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center text-muted-foreground">
            Aucune donnée disponible
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {/* Vues totales */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Vues totales</CardTitle>
          <Eye className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.totalViews.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">
            {data.dateRange.startDate} → {data.dateRange.endDate}
          </p>
        </CardContent>
      </Card>

      {/* Temps de lecture moyen */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Temps de lecture moyen</CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{formatDuration(data.avgSessionDuration)}</div>
          <p className="text-xs text-muted-foreground">
            Session moyenne
          </p>
        </CardContent>
      </Card>

      {/* Taux de rebond */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Taux de rebond</CardTitle>
          <TrendingDown className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.bounceRate}%</div>
          <p className="text-xs text-muted-foreground">
            Visiteurs partis sans interaction
          </p>
        </CardContent>
      </Card>
    </div>
  );
} 