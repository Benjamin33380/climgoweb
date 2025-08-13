'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { 
  Plus,
  Search,
  Edit,
  Eye,
  Trash2,
  FileCheck,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Euro,
  Zap
} from 'lucide-react'

interface Quote {
  id: string
  number: string
  title: string
  total: number
  status: string
  validUntil?: string
  createdAt: string
  client: {
    name: string
    email: string
  }
}

const statusConfig = {
  DRAFT: { label: 'Brouillon', color: 'bg-gray-100 text-gray-800', icon: Clock },
  SENT: { label: 'Envoyé', color: 'bg-blue-100 text-blue-800', icon: FileCheck },
  VIEWED: { label: 'Consulté', color: 'bg-yellow-100 text-yellow-800', icon: Eye },
  ACCEPTED: { label: 'Accepté', color: 'bg-green-100 text-green-800', icon: CheckCircle },
  REJECTED: { label: 'Refusé', color: 'bg-red-100 text-red-800', icon: XCircle },
  EXPIRED: { label: 'Expiré', color: 'bg-orange-100 text-orange-800', icon: AlertCircle },
}

export default function QuotesPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [quotes, setQuotes] = useState<Quote[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('ALL')

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
    
    // fetchQuotes()
    setIsLoading(false) // Temporaire
  }, [session, status, router])

  const filteredQuotes = quotes.filter(quote => {
    const matchesSearch = quote.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         quote.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         quote.client.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'ALL' || quote.status === statusFilter
    return matchesSearch && matchesStatus
  })

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
          <h1 className="text-3xl font-bold">Devis</h1>
          <p className="text-muted-foreground mt-2">
            Gérez vos devis et propositions commerciales
          </p>
        </div>
        <div className="flex space-x-2">
          <Link
            href="/admin/quotes/new-advanced"
            className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            <Zap className="h-4 w-4 mr-2" />
            Devis Avancé
          </Link>
          <Link
            href="/admin/quotes/new"
            className="inline-flex items-center px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors"
          >
            <Plus className="h-4 w-4 mr-2" />
            Devis Simple
          </Link>
        </div>
      </div>

      {/* Filtres */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Rechercher un devis..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="ALL">Tous les statuts</option>
          {Object.entries(statusConfig).map(([key, config]) => (
            <option key={key} value={key}>{config.label}</option>
          ))}
        </select>
      </div>

      <div className="bg-card rounded-lg border shadow-sm">
        <div className="p-6">
          {filteredQuotes.length === 0 ? (
            <div className="text-center py-12">
              <FileCheck className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground mb-4">
                {searchTerm || statusFilter !== 'ALL' ? 'Aucun devis trouvé' : 'Aucun devis créé'}
              </p>
              <Link
                href="/admin/quotes/new"
                className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                <Plus className="h-4 w-4 mr-2" />
                Créer votre premier devis
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredQuotes.map((quote) => {
                const statusInfo = statusConfig[quote.status as keyof typeof statusConfig]
                const StatusIcon = statusInfo.icon
                
                return (
                  <div
                    key={quote.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold">{quote.number}</h3>
                        <span className={`px-2 py-1 text-xs rounded-full flex items-center gap-1 ${statusInfo.color}`}>
                          <StatusIcon className="h-3 w-3" />
                          {statusInfo.label}
                        </span>
                      </div>
                      <p className="text-sm font-medium mb-1">{quote.title}</p>
                      <p className="text-sm text-muted-foreground mb-2">
                        Client: {quote.client.name}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>Créé le {new Date(quote.createdAt).toLocaleDateString('fr-FR')}</span>
                        {quote.validUntil && (
                          <span>Valide jusqu'au {new Date(quote.validUntil).toLocaleDateString('fr-FR')}</span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="flex items-center gap-1 font-semibold">
                          <Euro className="h-4 w-4" />
                          {quote.total.toLocaleString('fr-FR')}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/admin/quotes/${quote.id}`}
                          className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                          title="Voir le détail"
                        >
                          <Eye className="h-4 w-4" />
                        </Link>
                        <Link
                          href={`/admin/quotes/${quote.id}/edit`}
                          className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                          title="Modifier"
                        >
                          <Edit className="h-4 w-4" />
                        </Link>
                        <button
                          className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                          title="Supprimer"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>

      {/* Statistiques rapides */}
      {quotes.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          {Object.entries(statusConfig).map(([status, config]) => {
            const count = quotes.filter(q => q.status === status).length
            const total = quotes.filter(q => q.status === status).reduce((sum, q) => sum + q.total, 0)
            
            return (
              <div key={status} className="bg-card rounded-lg border p-4">
                <div className="flex items-center gap-2 mb-2">
                  <config.icon className="h-4 w-4" />
                  <h3 className="font-medium">{config.label}</h3>
                </div>
                <div className="text-2xl font-bold">{count}</div>
                {total > 0 && (
                  <div className="text-sm text-muted-foreground">
                    {total.toLocaleString('fr-FR')} €
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
