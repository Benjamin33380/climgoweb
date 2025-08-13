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
  FolderOpen,
  Clock,
  Play,
  Pause,
  CheckCircle,
  XCircle,
  MapPin,
  Calendar,
  Progress
} from 'lucide-react'

interface Project {
  id: string
  name: string
  description?: string
  address?: string
  status: string
  progress: number
  startDate?: string
  endDate?: string
  createdAt: string
  client: {
    name: string
    email: string
  }
  _count: {
    tasks: number
    photos: number
  }
}

const statusConfig = {
  PLANNING: { label: 'Planification', color: 'bg-blue-100 text-blue-800', icon: Clock },
  IN_PROGRESS: { label: 'En cours', color: 'bg-yellow-100 text-yellow-800', icon: Play },
  PAUSED: { label: 'En pause', color: 'bg-orange-100 text-orange-800', icon: Pause },
  COMPLETED: { label: 'Terminé', color: 'bg-green-100 text-green-800', icon: CheckCircle },
  CANCELLED: { label: 'Annulé', color: 'bg-red-100 text-red-800', icon: XCircle },
}

export default function ProjectsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [projects, setProjects] = useState<Project[]>([])
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
    
    // fetchProjects()
    setIsLoading(false) // Temporaire
  }, [session, status, router])

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (project.address?.toLowerCase().includes(searchTerm.toLowerCase()) || false)
    const matchesStatus = statusFilter === 'ALL' || project.status === statusFilter
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
          <h1 className="text-3xl font-bold">Projets</h1>
          <p className="text-muted-foreground mt-2">
            Suivez vos chantiers et projets en cours
          </p>
        </div>
        <Link
          href="/admin/projects/new"
          className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          <Plus className="h-4 w-4 mr-2" />
          Nouveau Projet
        </Link>
      </div>

      {/* Filtres */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Rechercher un projet..."
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
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <FolderOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground mb-4">
                {searchTerm || statusFilter !== 'ALL' ? 'Aucun projet trouvé' : 'Aucun projet créé'}
              </p>
              <Link
                href="/admin/projects/new"
                className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                <Plus className="h-4 w-4 mr-2" />
                Créer votre premier projet
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => {
                const statusInfo = statusConfig[project.status as keyof typeof statusConfig]
                const StatusIcon = statusInfo.icon
                
                return (
                  <div
                    key={project.id}
                    className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-lg">{project.name}</h3>
                          <span className={`px-2 py-1 text-xs rounded-full flex items-center gap-1 ${statusInfo.color}`}>
                            <StatusIcon className="h-3 w-3" />
                            {statusInfo.label}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          Client: {project.client.name}
                        </p>
                        {project.address && (
                          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                            <MapPin className="h-3 w-3" />
                            {project.address}
                          </div>
                        )}
                        {project.description && (
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            {project.description}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Barre de progression */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">Progression</span>
                        <span className="text-sm text-muted-foreground">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Dates */}
                    <div className="mb-4 space-y-1">
                      {project.startDate && (
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          Début: {new Date(project.startDate).toLocaleDateString('fr-FR')}
                        </div>
                      )}
                      {project.endDate && (
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          Fin prévue: {new Date(project.endDate).toLocaleDateString('fr-FR')}
                        </div>
                      )}
                    </div>

                    {/* Statistiques */}
                    <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                      <div className="text-center p-2 bg-muted rounded">
                        <div className="font-semibold">{project._count.tasks}</div>
                        <div className="text-muted-foreground">Tâches</div>
                      </div>
                      <div className="text-center p-2 bg-muted rounded">
                        <div className="font-semibold">{project._count.photos}</div>
                        <div className="text-muted-foreground">Photos</div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-between items-center">
                      <div className="flex gap-1">
                        <Link
                          href={`/admin/projects/${project.id}`}
                          className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                          title="Voir le détail"
                        >
                          <Eye className="h-4 w-4" />
                        </Link>
                        <Link
                          href={`/admin/projects/${project.id}/edit`}
                          className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                          title="Modifier"
                        >
                          <Edit className="h-4 w-4" />
                        </Link>
                      </div>
                      <button
                        className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                        title="Supprimer"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>

      {/* Statistiques rapides */}
      {projects.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-6">
          {Object.entries(statusConfig).map(([status, config]) => {
            const count = projects.filter(p => p.status === status).length
            
            return (
              <div key={status} className="bg-card rounded-lg border p-4">
                <div className="flex items-center gap-2 mb-2">
                  <config.icon className="h-4 w-4" />
                  <h3 className="font-medium text-sm">{config.label}</h3>
                </div>
                <div className="text-2xl font-bold">{count}</div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

