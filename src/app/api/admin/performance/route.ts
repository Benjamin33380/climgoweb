import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../../../lib/auth'

// Interface pour les métriques
interface PerformanceMetrics {
  CLS: number
  FID: number
  LCP: number
  FCP?: number
  TTFB?: number
  url: string
  userAgent: string
  timestamp: string
}

// Stockage temporaire des métriques (en production, utilise une vraie DB)
let metricsStore: PerformanceMetrics[] = []

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    // Permettre l'envoi anonyme des métriques pour le monitoring
    const { metrics, url, userAgent, timestamp } = await req.json()

    // Valider les données
    if (!metrics || !url) {
      return NextResponse.json(
        { error: 'Données de métriques invalides' },
        { status: 400 }
      )
    }

    // Créer l'objet métrique
    const performanceData: PerformanceMetrics = {
      CLS: metrics.CLS || 0,
      FID: metrics.FID || 0,
      LCP: metrics.LCP || 0,
      FCP: metrics.FCP,
      TTFB: metrics.TTFB,
      url,
      userAgent,
      timestamp: timestamp || new Date().toISOString()
    }

    // Stocker (limiter à 1000 entrées max)
    metricsStore.push(performanceData)
    if (metricsStore.length > 1000) {
      metricsStore = metricsStore.slice(-1000)
    }

    // Log pour debug
    console.log('📊 Performance metrics collected:', {
      url,
      LCP: metrics.LCP,
      CLS: metrics.CLS,
      FID: metrics.FID
    })

    return NextResponse.json(
      { message: 'Métriques enregistrées avec succès' },
      { status: 200 }
    )

  } catch (_error) {
    console.error('Erreur lors de l\'enregistrement des métriques:', _error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    // Seuls les admins peuvent voir les métriques
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Accès non autorisé' }, { status: 403 })
    }

    const { searchParams } = new URL(req.url)
    const days = parseInt(searchParams.get('days') || '7')
    const url = searchParams.get('url')

    // Filtrer par date
    const cutoffDate = new Date()
    cutoffDate.setDate(cutoffDate.getDate() - days)

    let filteredMetrics = metricsStore.filter(metric => 
      new Date(metric.timestamp) >= cutoffDate
    )

    // Filtrer par URL si spécifié
    if (url) {
      filteredMetrics = filteredMetrics.filter(metric => 
        metric.url.includes(url)
      )
    }

    // Calculer les statistiques
    const stats = {
      totalSamples: filteredMetrics.length,
      averageLCP: filteredMetrics.reduce((sum, m) => sum + m.LCP, 0) / filteredMetrics.length || 0,
      averageCLS: filteredMetrics.reduce((sum, m) => sum + m.CLS, 0) / filteredMetrics.length || 0,
      averageFID: filteredMetrics.reduce((sum, m) => sum + m.FID, 0) / filteredMetrics.length || 0,
      
      // Core Web Vitals scoring
      goodLCP: filteredMetrics.filter(m => m.LCP <= 2500).length,
      goodCLS: filteredMetrics.filter(m => m.CLS <= 0.1).length,
      goodFID: filteredMetrics.filter(m => m.FID <= 100).length,
      
      // Pages les plus lentes
      slowestPages: Object.entries(
        filteredMetrics.reduce((acc: Record<string, { count: number; avgLCP: number }>, metric) => {
          if (!acc[metric.url]) {
            acc[metric.url] = { count: 0, avgLCP: 0 }
          }
          acc[metric.url].count++
          acc[metric.url].avgLCP = (acc[metric.url].avgLCP + metric.LCP) / acc[metric.url].count
          return acc
        }, {})
      )
      .map(([url, data]) => ({ url, ...data }))
      .sort((a, b) => b.avgLCP - a.avgLCP)
      .slice(0, 10),

      // Distribution des métriques par jour
      dailyMetrics: Object.entries(
        filteredMetrics.reduce((acc: Record<string, PerformanceMetrics[]>, metric) => {
          const day = metric.timestamp.split('T')[0]
          if (!acc[day]) acc[day] = []
          acc[day].push(metric)
          return acc
        }, {})
      ).map(([date, metrics]) => ({
        date,
        count: metrics.length,
        avgLCP: metrics.reduce((sum, m) => sum + m.LCP, 0) / metrics.length,
        avgCLS: metrics.reduce((sum, m) => sum + m.CLS, 0) / metrics.length,
        avgFID: metrics.reduce((sum, m) => sum + m.FID, 0) / metrics.length
      }))
    }

    return NextResponse.json({
      stats,
      rawMetrics: filteredMetrics.slice(-100) // Limiter à 100 échantillons récents
    })

  } catch (_error) {
    console.error('Erreur lors de la récupération des métriques:', _error)
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des données' },
      { status: 500 }
    )
  }
}

