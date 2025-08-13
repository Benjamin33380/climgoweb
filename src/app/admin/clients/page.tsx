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
  Phone,
  Mail,
  MapPin,
  Building,
  FileText,
  Receipt
} from 'lucide-react'

interface Client {
  id: string
  name: string
  email: string
  phone?: string
  address?: string
  city?: string
  postalCode?: string
  notes?: string
  createdAt: string
  _count: {
    quotes: number
    invoices: number
    projects: number
  }
}

export default function ClientsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [clients, setClients] = useState<Client[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

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
    
    fetchClients()
  }, [session, status, router])

  const fetchClients = async () => {
    try {
      const response = await fetch('/api/admin/clients')
      if (response.ok) {
        const data = await response.json()
        setClients(data.clients || [])
      }
    } catch (_error) {
      console.error('Erreur:', _error)
    } finally {
      setIsLoading(false)
    }
  }

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
          <h1 className="text-3xl font-bold">Clients</h1>
          <p className="text-muted-foreground mt-2">
            Gérez vos clients et leurs informations
          </p>
        </div>
        <Link
          href="/admin/clients/new"
          className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          <Plus className="h-4 w-4 mr-2" />
          Nouveau Client
        </Link>
      </div>

      {/* Barre de recherche */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <input
            type="text"
            placeholder="Rechercher un client..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div className="bg-card rounded-lg border shadow-sm">
        <div className="p-6">
          {filteredClients.length === 0 ? (
            <div className="text-center py-12">
              <Building className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground mb-4">
                {searchTerm ? 'Aucun client trouvé' : 'Aucun client enregistré'}
              </p>
              <Link
                href="/admin/clients/new"
                className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                <Plus className="h-4 w-4 mr-2" />
                Ajouter votre premier client
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredClients.map((client) => (
                <div
                  key={client.id}
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{client.name}</h3>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Mail className="h-3 w-3" />
                          {client.email}
                        </div>
                        {client.phone && (
                          <div className="flex items-center gap-2">
                            <Phone className="h-3 w-3" />
                            {client.phone}
                          </div>
                        )}
                        {client.address && (
                          <div className="flex items-center gap-2">
                            <MapPin className="h-3 w-3" />
                            {client.address}, {client.city} {client.postalCode}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Statistiques */}
                  <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                    <div className="text-center p-2 bg-muted rounded">
                      <div className="font-semibold">{client._count.quotes}</div>
                      <div className="text-muted-foreground">Devis</div>
                    </div>
                    <div className="text-center p-2 bg-muted rounded">
                      <div className="font-semibold">{client._count.invoices}</div>
                      <div className="text-muted-foreground">Factures</div>
                    </div>
                    <div className="text-center p-2 bg-muted rounded">
                      <div className="font-semibold">{client._count.projects}</div>
                      <div className="text-muted-foreground">Projets</div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1">
                      <Link
                        href={`/admin/clients/${client.id}`}
                        className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                        title="Voir le détail"
                      >
                        <Eye className="h-4 w-4" />
                      </Link>
                      <Link
                        href={`/admin/clients/${client.id}/edit`}
                        className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                        title="Modifier"
                      >
                        <Edit className="h-4 w-4" />
                      </Link>
                    </div>
                    <div className="flex gap-1">
                      <Link
                        href={`/admin/quotes/new?client=${client.id}`}
                        className="p-2 text-primary hover:bg-primary/10 rounded transition-colors"
                        title="Nouveau devis"
                      >
                        <FileText className="h-4 w-4" />
                      </Link>
                      <Link
                        href={`/admin/invoices/new?client=${client.id}`}
                        className="p-2 text-primary hover:bg-primary/10 rounded transition-colors"
                        title="Nouvelle facture"
                      >
                        <Receipt className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

