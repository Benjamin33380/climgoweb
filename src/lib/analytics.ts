// Configuration pour Google Tag Manager
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || '';

// Types pour les données Google Analytics via GTM
export interface AnalyticsData {
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

// Fonction pour récupérer les données Google Analytics via GTM
export async function getAnalyticsData(

): Promise<AnalyticsData> {
  // Intégration avec Google Analytics API via GTM
  // Pour l'instant, retourner des données simulées
  
  return {
    pageViews: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
    topPages: [],
    deviceBreakdown: [
      { device: 'Desktop', count: 0, percentage: 0 },
      { device: 'Mobile', count: 0, percentage: 0 },
      { device: 'Tablet', count: 0, percentage: 0 }
    ],
    geographicData: []
  };
}

// Fonction pour récupérer les statistiques d'un article spécifique
export async function getArticleAnalytics(
): Promise<{
  views: number;
  uniqueViews: number;
  avgTimeOnPage: number;
  bounceRate: number;
}> {
  // Intégration avec Google Analytics API via GTM
  return {
    views: 0,
    uniqueViews: 0,
    avgTimeOnPage: 0,
    bounceRate: 0
  };
}

// Fonction pour initialiser Google Tag Manager
export function initializeGTM() {
  if (typeof window !== 'undefined' && GTM_ID) {
    // Script GTM
    (function(w: any, d: any, s: any, l: any, i: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
      w[l] = w[l] || [];
      w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
      const f = d.getElementsByTagName(s)[0];
      const j = d.createElement(s) as HTMLScriptElement;
      const dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      if (f.parentNode) {
        f.parentNode.insertBefore(j, f);
      }
    })(window, document, 'script', 'dataLayer', GTM_ID);
  }
}

// Fonction pour envoyer des événements personnalisés
export function sendGTMEvent(eventName: string, parameters: Record<string, any> = {}) { // eslint-disable-line @typescript-eslint/no-explicit-any
  if (typeof window !== 'undefined' && (window as any).dataLayer) { // eslint-disable-line @typescript-eslint/no-explicit-any
    (window as any).dataLayer.push({ // eslint-disable-line @typescript-eslint/no-explicit-any
      event: eventName,
      ...parameters
    });
  }
} 