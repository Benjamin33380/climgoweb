// Configuration des optimisations de performance

export const PERFORMANCE_CONFIG = {
  // Cache TTL en millisecondes
  CACHE_TTL: {
    ARTICLES: 3600000, // 1 heure
    COMMENTS: 1800000, // 30 minutes
    RATINGS: 1800000, // 30 minutes
    METADATA: 7200000, // 2 heures
  },

  // Limites de requêtes
  QUERY_LIMITS: {
    ARTICLES: 20,
    COMMENTS: 50,
    RATINGS: 100,
    RELATED_ARTICLES: 5,
  },

  // Configuration des images
  IMAGE_CONFIG: {
    QUALITY: 85,
    FORMATS: ['image/avif', 'image/webp'],
    SIZES: {
      HERO: '(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw',
      THUMBNAIL: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw',
    },
  },

  // Configuration de revalidation
  REVALIDATION: {
    ARTICLES: 3600, // 1 heure
    BLOG_PAGE: 1800, // 30 minutes
    STATIC_PAGES: 86400, // 24 heures
  },

  // Configuration du bundle
  BUNDLE_OPTIMIZATION: {
    CHUNK_SIZE_LIMIT: 244000, // 244KB
    MAX_ASYNC_REQUESTS: 30,
    MAX_INITIAL_REQUESTS: 30,
  },
};

// Fonction utilitaire pour vérifier les performances
export function checkPerformanceMetrics() {
  if (typeof window === 'undefined') return null;

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  
  return {
    // Time to First Byte
    ttfb: navigation.responseStart - navigation.requestStart,
    
    // First Contentful Paint
    fcp: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0,
    
    // Largest Contentful Paint
    lcp: performance.getEntriesByName('largest-contentful-paint')[0]?.startTime || 0,
    
    // First Input Delay
    fid: (performance.getEntriesByType('first-input')[0] as any)?.processingStart || 0,
    
    // Cumulative Layout Shift
    cls: performance.getEntriesByType('layout-shift')
      .reduce((acc, entry) => acc + (entry as any).value, 0),
  };
}

// Fonction pour logger les métriques de performance
export function logPerformanceMetrics() {
  if (typeof window === 'undefined') return;

  const metrics = checkPerformanceMetrics();
  if (metrics) {
    console.log('📊 Métriques de performance:', {
      'Time to First Byte': `${metrics.ttfb.toFixed(2)}ms`,
      'First Contentful Paint': `${metrics.fcp.toFixed(2)}ms`,
      'Largest Contentful Paint': `${metrics.lcp.toFixed(2)}ms`,
      'First Input Delay': `${metrics.fid.toFixed(2)}ms`,
      'Cumulative Layout Shift': metrics.cls.toFixed(4),
    });
  }
}
