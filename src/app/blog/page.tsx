'use client'

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Eye, MessageSquare, Search, Filter, Grid3X3, List, Clock, Tag, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

interface Post {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage?: string
  published: boolean
  featured: boolean
  views: number
  readTime: number
  category: string
  tags: string[]
  createdAt: string
  publishedAt: string
  author: {
    name: string
    email: string
  }
  _count: {
    comments: number
  }
}

const categories = [
  { name: 'Tout', value: 'all' },
  { name: 'Chauffage', value: 'chauffage' },
  { name: 'Climatisation', value: 'climatisation' },
  { name: 'Maintenance', value: 'maintenance' },

  { name: 'Eau chaude', value: 'eau-chaude' },
  { name: 'Conseils', value: 'conseils' },
  { name: 'Réglementation', value: 'reglementation' }
]

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const fetchPosts = useCallback(async () => {
    try {
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: '9',
        ...(selectedCategory !== 'all' && { category: selectedCategory }),
        ...(searchQuery && { search: searchQuery })
      })
      
      const response = await fetch(`/api/blog?${params}`)
      if (response.ok) {
        const data = await response.json()
        setPosts(data.posts)
        setTotalPages(data.pagination.pages)
      }
    } catch (_error) {
      console.error('Erreur lors du chargement des articles:', _error)
    } finally {
      setLoading(false)
    }
  }, [currentPage, selectedCategory, searchQuery])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1)
    setLoading(true)
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setCurrentPage(1)
    setLoading(true)
  }

  const getCategoryInfo = (categoryValue: string) => {
    return categories.find(cat => cat.value === categoryValue) || categories[0]
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Modern Hero Section */}
      <div className="relative bg-gradient-to-br from-primary via-primary/90 to-accent text-primary-foreground py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-grid-16" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                <TrendingUp className="w-3 h-3 mr-1" />
                Blog Expert
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Blog ClimGO
              </h1>
            </div>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Découvrez nos conseils d'experts en chauffage, climatisation et maintenance. 
              Restez informé des dernières technologies et réglementations.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto mt-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Rechercher un article..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-10 bg-white/95 border-white/20 text-foreground"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Categories & Filters */}
        <div className="mb-8 space-y-6">
          
          {/* Categories */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Catégories
              </h2>
              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleCategoryChange(category.value)}
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
          
          <Separator />
        </div>

        {posts.length === 0 ? (
          <Card className="text-center py-16">
            <CardContent className="space-y-4">
              <CardTitle className="text-2xl">Aucun article trouvé</CardTitle>
              <CardDescription>
                {searchQuery || selectedCategory !== 'all' 
                  ? 'Essayez de modifier vos critères de recherche.' 
                  : 'Les articles apparaîtront ici une fois publiés.'
                }
              </CardDescription>
              {(searchQuery || selectedCategory !== 'all') && (
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory('all')
                  }}
                >
                  Réinitialiser les filtres
                </Button>
              )}
            </CardContent>
          </Card>
        ) : (
          <>
            {/* Articles Display */}
            <div className={
              viewMode === 'grid' 
                ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
                : "space-y-6 mb-12"
            }>
              {posts.map((post) => (
                <Card 
                  key={post.id} 
                  className={`group hover:shadow-lg transition-all duration-300 overflow-hidden ${
                    viewMode === 'list' ? 'flex flex-col sm:flex-row' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={`relative ${
                    viewMode === 'list' 
                      ? 'sm:w-1/3 h-48 sm:h-auto' 
                      : 'h-48 w-full'
                  }`}>
                    {post.coverImage ? (
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <h3 className="text-primary-foreground text-lg font-semibold text-center px-4">
                          {post.title}
                        </h3>
                      </div>
                    )}
                    
                    {/* Overlay badges */}
                    <div className="absolute top-3 left-3 space-y-2">
                      {post.featured && (
                        <Badge className="bg-accent text-accent-foreground">
                          Vedette
                        </Badge>
                      )}
                      {post.category && (
                        <Badge variant="secondary">
                          <Tag className="w-3 h-3 mr-1" />
                          {getCategoryInfo(post.category).name}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={viewMode === 'list' ? 'sm:w-2/3 flex flex-col' : ''}>
                    <CardHeader className="space-y-2">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4 flex-grow">
                      {/* Tags */}
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {post.tags.slice(0, 3).map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {post.tags.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{post.tags.length - 3}
                            </Badge>
                          )}
                        </div>
                      )}

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Avatar className="w-6 h-6">
                              <AvatarFallback className="text-xs">
                                {post.author.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <span>{post.author.name}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(post.publishedAt || post.createdAt)}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3 text-xs">
                          {post.readTime && (
                            <div className="flex items-center space-x-1">
                              <Clock className="w-3 h-3" />
                              <span>{post.readTime}min</span>
                            </div>
                          )}
                          <div className="flex items-center space-x-1">
                            <Eye className="w-3 h-3" />
                            <span>{post.views || 0}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageSquare className="w-3 h-3" />
                            <span>{post._count.comments}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter>
                      <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          Lire l'article
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </Button>
                    </CardFooter>
                  </div>
                </Card>
              ))}
            </div>

            {/* Modern Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center space-x-2">
                <Button
                  variant="outline"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  Précédent
                </Button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? 'default' : 'outline'}
                    onClick={() => setCurrentPage(page)}
                    className="min-w-[40px]"
                  >
                    {page}
                  </Button>
                ))}
                
                <Button
                  variant="outline"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Suivant
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
