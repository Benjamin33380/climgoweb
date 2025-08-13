'use client'

import { useEffect, useState } from 'react'
import { TrendingUp, Clock, Zap, Eye } from 'lucide-react'

interface WebVitals {
  CLS: number | null
  FID: number | null
  FCP: number | null
  LCP: number | null
  TTFB: number | null
}

export default function PerformanceMonitor() {
  const [vitals, setVitals] = useState<WebVitals>({
    CLS: null,
    FID: null, 
    FCP: null,
    LCP: null,
    TTFB: null
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // S'assurer qu'on est côté client
    if (typeof window === 'undefined') return
    
    // Activer seulement en dev ou pour les admins
    const shouldShow = process.env.NODE_ENV === 'development' || 
                      localStorage.getItem('climgo_admin') === 'true'
    
    if (!shouldShow) return

    setIsVisible(true)

    // Importer dynamiquement web-vitals
    const loadWebVitals = async () => {
      try {
        const { onCLS, onINP, onFCP, onLCP, onTTFB } = await import('web-vitals')
        
        onCLS((metric) => {
          setVitals(prev => ({ ...prev, CLS: metric.value }))
          // Envoyer à Google Analytics si configuré
          gtag('event', 'CLS', {
            event_category: 'Web Vitals',
            value: Math.round(metric.value * 1000),
            non_interaction: true,
          })
        })

        onINP((metric) => {
          setVitals(prev => ({ ...prev, FID: metric.value }))
          gtag('event', 'INP', {
            event_category: 'Web Vitals',
            value: Math.round(metric.value),
            non_interaction: true,
          })
        })

        onFCP((metric) => {
          setVitals(prev => ({ ...prev, FCP: metric.value }))
        })

        onLCP((metric) => {
          setVitals(prev => ({ ...prev, LCP: metric.value }))
          gtag('event', 'LCP', {
            event_category: 'Web Vitals',
            value: Math.round(metric.value),
            non_interaction: true,
          })
        })

        onTTFB((metric) => {
          setVitals(prev => ({ ...prev, TTFB: metric.value }))
        })

      } catch (error) {
        console.log('Web Vitals not available')
      }
    }

    loadWebVitals()
  }, [])

  // Fonction gtag pour Google Analytics
  const gtag = (type: string, name: string, params: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && (window as unknown as { gtag: (...args: unknown[]) => void }).gtag) {
      ;(window as unknown as { gtag: (...args: unknown[]) => void }).gtag(type, name, params)
    }
  }

  // Fonction pour déterminer la couleur selon les Core Web Vitals
  const getVitalColor = (metric: string, value: number) => {
    const thresholds: Record<string, { good: number; needs_improvement: number }> = {
      CLS: { good: 0.1, needs_improvement: 0.25 },
      FID: { good: 100, needs_improvement: 300 },
      LCP: { good: 2500, needs_improvement: 4000 },
      FCP: { good: 1800, needs_improvement: 3000 },
      TTFB: { good: 800, needs_improvement: 1800 }
    }

    const threshold = thresholds[metric]
    if (!threshold) return 'text-gray-500'

    if (value <= threshold.good) return 'text-green-500'
    if (value <= threshold.needs_improvement) return 'text-yellow-500'
    return 'text-red-500'
  }

  const formatValue = (metric: string, value: number) => {
    if (metric === 'CLS') return value.toFixed(3)
    return `${Math.round(value)}ms`
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-background/95 backdrop-blur border rounded-lg shadow-lg p-4 max-w-xs">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="w-4 h-4 text-primary" />
          <h3 className="text-sm font-semibold">Core Web Vitals</h3>
        </div>
        
        <div className="space-y-2 text-xs">
          {/* LCP - Largest Contentful Paint */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Eye className="w-3 h-3" />
              <span>LCP</span>
            </div>
            <span className={vitals.LCP ? getVitalColor('LCP', vitals.LCP) : 'text-gray-400'}>
              {vitals.LCP ? formatValue('LCP', vitals.LCP) : '...'}
            </span>
          </div>

          {/* FID - First Input Delay */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="w-3 h-3" />
              <span>FID</span>
            </div>
            <span className={vitals.FID ? getVitalColor('FID', vitals.FID) : 'text-gray-400'}>
              {vitals.FID ? formatValue('FID', vitals.FID) : '...'}
            </span>
          </div>

          {/* CLS - Cumulative Layout Shift */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-3 h-3" />
              <span>CLS</span>
            </div>
            <span className={vitals.CLS ? getVitalColor('CLS', vitals.CLS) : 'text-gray-400'}>
              {vitals.CLS ? formatValue('CLS', vitals.CLS) : '...'}
            </span>
          </div>

          {/* FCP - First Contentful Paint */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-3 h-3" />
              <span>FCP</span>
            </div>
            <span className={vitals.FCP ? getVitalColor('FCP', vitals.FCP) : 'text-gray-400'}>
              {vitals.FCP ? formatValue('FCP', vitals.FCP) : '...'}
            </span>
          </div>

          {/* TTFB - Time To First Byte */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="w-3 h-3" />
              <span>TTFB</span>
            </div>
            <span className={vitals.TTFB ? getVitalColor('TTFB', vitals.TTFB) : 'text-gray-400'}>
              {vitals.TTFB ? formatValue('TTFB', vitals.TTFB) : '...'}
            </span>
          </div>
        </div>

        <div className="mt-3 pt-2 border-t text-xs text-muted-foreground">
          <div className="flex gap-3">
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Bon
            </span>
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              Moyen
            </span>
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Mauvais
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Hook pour envoyer les métriques à ton dashboard admin
export function usePerformanceTracking() {
  useEffect(() => {
    const sendMetricsToAdmin = async (metrics: WebVitals) => {
      try {
        await fetch('/api/admin/performance', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            metrics,
            url: window.location.href,
            userAgent: navigator.userAgent,
            timestamp: new Date().toISOString()
          })
        })
      } catch (error) {
        console.log('Metrics not sent')
      }
    }

    // Collecter et envoyer les métriques
    const loadWebVitals = async () => {
      try {
        const { onCLS, onINP, onLCP } = await import('web-vitals')
        const metrics: Partial<WebVitals> = {}
        
        onCLS((metric) => {
          metrics.CLS = metric.value
        })
        
        onINP((metric) => {
          metrics.FID = metric.value  
        })
        
        onLCP((metric) => {
          metrics.LCP = metric.value
          // Envoyer quand on a LCP (généralement le dernier)
          sendMetricsToAdmin(metrics as WebVitals)
        })
        
      } catch (error) {
        console.log('Performance tracking not available')
      }
    }

    loadWebVitals()
  }, [])
}
