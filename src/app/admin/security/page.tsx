'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { 
  Shield,
  AlertTriangle,
  Eye,
  Unlock,
  Activity,
  Clock,
  Globe,
  User,
  RefreshCw
} from 'lucide-react'

interface SecurityStats {
  totalAttempts: number
  blockedIPs: number
  recentAttempts: number
}

interface BruteforceAttempt {
  id: string
  ip: string
  email?: string
  attempts: number
  blocked: boolean
  blockedUntil?: string
  lastAttempt: string
}

export default function SecurityPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [stats, setStats] = useState<SecurityStats>({
    totalAttempts: 0,
    blockedIPs: 0,
    recentAttempts: 0
  })
  const [recentAttempts, setRecentAttempts] = useState<BruteforceAttempt[]>([])
  const [blockedIPs, setBlockedIPs] = useState<BruteforceAttempt[]>([])

  useEffect(() => {
    if (status === 'loading') return
    
    if (!session) {
      router.push('/auth/signin')
      return
    }
    
    if (session.user.role !== 'ADMIN') {
      router.push('/auth/signin')
      return
    }
    
    fetchSecurityData()
  }, [session, status, router])

  const fetchSecurityData = async () => {
    try {
      const response = await fetch('/api/admin/security')
      if (response.ok) {
        const data = await response.json()
        setStats(data.stats)
        setRecentAttempts(data.recentAttempts)
        setBlockedIPs(data.blockedIPs)
      }
    } catch (error) {
      console.error('Erreur:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const unblockIP = async (ip: string, email?: string) => {
    try {
      const response = await fetch('/api/admin/security', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'unblock',
          ip,
          email
        }),
      })

      if (response.ok) {
        fetchSecurityData() // Rafraîchir les données
      }
    } catch (error) {
      console.error('Erreur lors du déblocage:', error)
    }
  }

  if (status === 'loading' || isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Shield className="h-8 w-8" />
            Sécurité
          </h1>
          <p className="text-muted-foreground mt-2">
            Surveillance et protection anti-bruteforce
          </p>
        </div>
        <button
          onClick={fetchSecurityData}
          className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          <RefreshCw className="h-4 w-4 mr-2" />
          Actualiser
        </button>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-card rounded-lg border shadow-sm p-6">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="h-5 w-5 text-blue-500" />
            <h3 className="font-medium">Tentatives totales</h3>
          </div>
          <div className="text-2xl font-bold">{stats.totalAttempts}</div>
          <p className="text-sm text-muted-foreground">Toutes les tentatives</p>
        </div>

        <div className="bg-card rounded-lg border shadow-sm p-6">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            <h3 className="font-medium">IPs bloquées</h3>
          </div>
          <div className="text-2xl font-bold">{stats.blockedIPs}</div>
          <p className="text-sm text-muted-foreground">Actuellement bloquées</p>
        </div>

        <div className="bg-card rounded-lg border shadow-sm p-6">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="h-5 w-5 text-yellow-500" />
            <h3 className="font-medium">Récentes (24h)</h3>
          </div>
          <div className="text-2xl font-bold">{stats.recentAttempts}</div>
          <p className="text-sm text-muted-foreground">Dernières 24 heures</p>
        </div>
      </div>

      {/* IPs bloquées */}
      <div className="bg-card rounded-lg border shadow-sm mb-8">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            <h2 className="text-lg font-semibold">IPs actuellement bloquées</h2>
          </div>

          {blockedIPs.length === 0 ? (
            <div className="text-center py-8">
              <Shield className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <p className="text-muted-foreground">Aucune IP bloquée actuellement</p>
            </div>
          ) : (
            <div className="space-y-4">
              {blockedIPs.map((attempt) => (
                <div
                  key={attempt.id}
                  className="flex items-center justify-between p-4 border rounded-lg bg-red-50"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Globe className="h-4 w-4" />
                      <span className="font-medium">{attempt.ip}</span>
                      {attempt.email && (
                        <span className="text-sm text-muted-foreground">
                          ({attempt.email})
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {attempt.attempts} tentatives - Bloqué jusqu'à{' '}
                      {attempt.blockedUntil && 
                        new Date(attempt.blockedUntil).toLocaleString('fr-FR')
                      }
                    </div>
                  </div>
                  <button
                    onClick={() => unblockIP(attempt.ip, attempt.email)}
                    className="inline-flex items-center px-3 py-2 text-sm bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                  >
                    <Unlock className="h-4 w-4 mr-1" />
                    Débloquer
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Tentatives récentes */}
      <div className="bg-card rounded-lg border shadow-sm">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <Eye className="h-5 w-5" />
            <h2 className="text-lg font-semibold">Tentatives récentes (24h)</h2>
          </div>

          {recentAttempts.length === 0 ? (
            <div className="text-center py-8">
              <Activity className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Aucune tentative récente</p>
            </div>
          ) : (
            <div className="space-y-4">
              {recentAttempts.map((attempt) => (
                <div
                  key={attempt.id}
                  className={`flex items-center justify-between p-4 border rounded-lg ${
                    attempt.blocked 
                      ? 'bg-red-50 border-red-200' 
                      : 'bg-yellow-50 border-yellow-200'
                  }`}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Globe className="h-4 w-4" />
                      <span className="font-medium">{attempt.ip}</span>
                      {attempt.email && (
                        <span className="text-sm text-muted-foreground">
                          ({attempt.email})
                        </span>
                      )}
                      {attempt.blocked && (
                        <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                          Bloqué
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {attempt.attempts} tentative(s) - Dernière:{' '}
                      {new Date(attempt.lastAttempt).toLocaleString('fr-FR')}
                    </div>
                  </div>
                  {attempt.blocked && (
                    <button
                      onClick={() => unblockIP(attempt.ip, attempt.email)}
                      className="inline-flex items-center px-3 py-2 text-sm bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                    >
                      <Unlock className="h-4 w-4 mr-1" />
                      Débloquer
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

