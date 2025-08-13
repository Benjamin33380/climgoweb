'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { 
  Users, 
  FileText, 
  MessageSquare, 
  Mail,
  PlusCircle,
  Eye,
  Edit,
  BarChart3,
  Activity,
  DollarSign,
  Target,
  ArrowUpRight,
  CreditCard,
  Settings
} from 'lucide-react'

export default function AdminDashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [stats, setStats] = useState({
    totalPosts: 0,
    totalUsers: 0,
    totalComments: 0,
    pendingComments: 0,
    newsletterSubscribers: 0,
    contactRequests: 0
  })
  const [recentPosts, setRecentPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Vérifier l'authentification
    if (status === 'loading') return
    
    if (!session) {
      router.push('/auth/signin')
      return
    }
    
    if (session.user.role !== 'ADMIN') {
      router.push('/auth/signin')
      return
    }
    
    fetchStats()
    fetchRecentPosts()
  }, [session, status, router])

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/admin/stats')
      if (response.ok) {
        const data = await response.json()
        setStats(data)
      }
    } catch (_error) {
      console.error('Error fetching stats:', _error)
    }
  }

  const fetchRecentPosts = async () => {
    try {
      const response = await fetch('/api/admin/posts?limit=5')
      if (response.ok) {
        const data = await response.json()
        setRecentPosts(data.posts)
      }
    } catch (_error) {
      console.error('Error fetching posts:', _error)
    } finally {
      setIsLoading(false)
    }
  }

  if (status === 'loading' || isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!session || session.user.role !== 'ADMIN') {
    router.push('/auth/signin')
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="flex h-16 items-center px-4">
          <div className="ml-auto flex items-center space-x-4">
            <Link
              href="/admin/posts/new"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3"
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Nouvel article
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3"
            >
              Voir le site
            </Link>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <div className="hidden border-r bg-muted/40 md:block">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
              <Link href="/admin" className="flex items-center gap-2 font-semibold">
                <Target className="h-6 w-6" />
                <span className="">ClimGO Admin</span>
              </Link>
            </div>
            <div className="flex-1">
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                <Link
                  href="/admin"
                  className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
                >
                  <BarChart3 className="h-4 w-4" />
                  Dashboard
                </Link>
                <Link
                  href="/admin/posts"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <FileText className="h-4 w-4" />
                  Articles
                </Link>
                <Link
                  href="/admin/users"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <Users className="h-4 w-4" />
                  Utilisateurs
                </Link>
                <Link
                  href="/admin/comments"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <MessageSquare className="h-4 w-4" />
                  Commentaires
                </Link>
                <Link
                  href="/admin/newsletter"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <Mail className="h-4 w-4" />
                  Newsletter
                </Link>
                <Link
                  href="/admin/settings"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <Settings className="h-4 w-4" />
                  Paramètres
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
          </div>
          
          {/* Stats Cards */}
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="tracking-tight text-sm font-medium">Chiffre d'affaires total</h3>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="p-6 pt-0">
                <div className="text-2xl font-bold">€{(stats.totalPosts * 1250 + 15231).toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% par rapport au mois dernier
                </p>
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="tracking-tight text-sm font-medium">Abonnements</h3>
                <Users className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="p-6 pt-0">
                <div className="text-2xl font-bold">+{stats.newsletterSubscribers + 2350}</div>
                <p className="text-xs text-muted-foreground">
                  +180.1% par rapport au mois dernier
                </p>
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="tracking-tight text-sm font-medium">Ventes</h3>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="p-6 pt-0">
                <div className="text-2xl font-bold">+{stats.totalPosts * 23 + 120}</div>
                <p className="text-xs text-muted-foreground">
                  +19% par rapport au mois dernier
                </p>
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="tracking-tight text-sm font-medium">Actifs maintenant</h3>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="p-6 pt-0">
                <div className="text-2xl font-bold">+{stats.totalUsers * 5 + 573}</div>
                <p className="text-xs text-muted-foreground">
                  +201 depuis la dernière heure
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {/* Overview Chart */}
            <div className="xl:col-span-2">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight">Aperçu</h3>
                </div>
                <div className="p-6 pt-0">
                  <div className="h-[350px] flex items-center justify-center">
                    <div className="w-full space-y-6">
                      {/* Graphique en barres simulé */}
                      <div className="flex items-end justify-between h-32 gap-2">
                        {[65, 85, 45, 92, 78, 56, 89, 73, 95, 67, 82, 58].map((height, index) => (
                          <div key={index} className="flex flex-col items-center gap-2">
                            <div 
                              className="bg-primary rounded-t w-8 transition-all duration-500 hover:bg-primary/80"
                              style={{ height: `${height}%` }}
                            ></div>
                            <span className="text-xs text-muted-foreground">
                              {['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'][index]}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Légende */}
                      <div className="flex items-center justify-center gap-6">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-primary rounded-full"></div>
                          <span className="text-sm">Revenus</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-muted rounded-full"></div>
                          <span className="text-sm">Objectif</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Sales */}
            <div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight">Ventes récentes</h3>
                  <p className="text-sm text-muted-foreground">
                    Vous avez réalisé {stats.totalPosts * 3 + 265} ventes ce mois-ci.
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <div className="space-y-8">
                    <div className="flex items-center">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-medium">
                        OM
                      </div>
                      <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          Olivia Martin
                        </p>
                        <p className="text-sm text-muted-foreground">
                          olivia.martin@email.com
                        </p>
                      </div>
                      <div className="ml-auto font-medium">+€1,999.00</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center text-white text-sm font-medium">
                        JL
                      </div>
                      <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          Jackson Lee
                        </p>
                        <p className="text-sm text-muted-foreground">
                          jackson.lee@email.com
                        </p>
                      </div>
                      <div className="ml-auto font-medium">+€39.00</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 flex items-center justify-center text-white text-sm font-medium">
                        IN
                      </div>
                      <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          Isabella Nguyen
                        </p>
                        <p className="text-sm text-muted-foreground">
                          isabella.nguyen@email.com
                        </p>
                      </div>
                      <div className="ml-auto font-medium">+€299.00</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center text-white text-sm font-medium">
                        WK
                      </div>
                      <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          William Kim
                        </p>
                        <p className="text-sm text-muted-foreground">
                          will@email.com
                        </p>
                      </div>
                      <div className="ml-auto font-medium">+€99.00</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 flex items-center justify-center text-white text-sm font-medium">
                        SD
                      </div>
                      <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          Sofia Davis
                        </p>
                        <p className="text-sm text-muted-foreground">
                          sofia.davis@email.com
                        </p>
                      </div>
                      <div className="ml-auto font-medium">+€39.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  Articles récents
                </h3>
                <Link
                  href="/admin/posts"
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Voir tout
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="p-6 pt-0">
              <div className="space-y-4">
                {recentPosts.length === 0 ? (
                  <div className="text-center text-muted-foreground py-8">
                    <FileText className="mx-auto h-12 w-12 text-muted-foreground/20" />
                    <h3 className="mt-2 text-sm font-semibold">Aucun article</h3>
                    <p className="mt-1 text-sm">Commencez par créer votre premier article.</p>
                    <div className="mt-6">
                      <Link
                        href="/admin/posts/new"
                        className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
                      >
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Nouvel article
                      </Link>
                    </div>
                  </div>
                ) : (
                  recentPosts.map((post: { id: string; title: string; author?: { name: string }; createdAt: string }) => (
                    <div key={post.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {post.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Par {post.author?.name} • {new Date(post.createdAt).toLocaleDateString('fr-FR')}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8">
                          <Edit className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}