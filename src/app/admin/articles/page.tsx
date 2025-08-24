'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import AdminNav from '@/components/AdminNav';
import Image from 'next/image';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  EyeOff, 
  Search,
  Calendar,
  MessageSquare,
  Star,
} from 'lucide-react';

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  imageUrl: string | null;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  admin: {
    name: string;
    email: string;
  };
  _count: {
    comments: number;
    ratings: number;
  };
}

export default function ArticlesManagement() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterPublished, setFilterPublished] = useState<'all' | 'published' | 'draft'>('all');
  const router = useRouter();

  useEffect(() => {
    // Vérifier l'authentification
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }

    fetchArticles();
  }, [router]);

  const fetchArticles = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/articles', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setArticles(data);
      } else {
        throw new Error('Erreur lors de la récupération des articles');
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des articles:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePublishToggle = async (articleId: string, currentStatus: boolean) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/admin/articles/${articleId}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ published: !currentStatus })
      });

      if (response.ok) {
        // Mettre à jour l'état local
        setArticles(prev => 
          prev.map(article => 
            article.id === articleId 
              ? { ...article, published: !currentStatus }
              : article
          )
        );
      } else {
        throw new Error('Erreur lors de la mise à jour');
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour:', error);
      alert('Erreur lors de la mise à jour du statut');
    }
  };

  const handleDeleteArticle = async (articleId: string, title: string) => {
    if (!confirm(`Êtes-vous sûr de vouloir supprimer l'article "${title}" ?`)) {
      return;
    }

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/admin/articles/${articleId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        // Retirer l'article de l'état local
        setArticles(prev => prev.filter(article => article.id !== articleId));
        alert('Article supprimé avec succès');
      } else {
        throw new Error('Erreur lors de la suppression');
      }
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
      alert('Erreur lors de la suppression');
    }
  };

  // Filtrer les articles
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = filterPublished === 'all' || 
                         (filterPublished === 'published' && article.published) ||
                         (filterPublished === 'draft' && !article.published);
    
    return matchesSearch && matchesFilter;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Chargement...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <AdminNav onLogout={() => router.push('/admin/login')} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Gestion des Articles</h1>
            <p className="text-muted-foreground mt-2">
              Gérez tous vos articles de blog
            </p>
          </div>
          <Link href="/admin/articles/new" className="mt-4 sm:mt-0">
            <Button className="flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Nouvel Article</span>
            </Button>
          </Link>
        </div>

        {/* Filtres et recherche */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Rechercher un article..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant={filterPublished === 'all' ? 'default' : 'outline'}
                  onClick={() => setFilterPublished('all')}
                  size="sm"
                >
                  Tous ({articles.length})
                </Button>
                <Button
                  variant={filterPublished === 'published' ? 'default' : 'outline'}
                  onClick={() => setFilterPublished('published')}
                  size="sm"
                >
                  Publiés ({articles.filter(a => a.published).length})
                </Button>
                <Button
                  variant={filterPublished === 'draft' ? 'default' : 'outline'}
                  onClick={() => setFilterPublished('draft')}
                  size="sm"
                >
                  Brouillons ({articles.filter(a => !a.published).length})
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Liste des articles */}
        {filteredArticles.length === 0 ? (
          <Card>
            <CardContent className="text-center py-16">
              <h3 className="text-lg font-medium text-foreground mb-2">
                {searchQuery || filterPublished !== 'all' ? 'Aucun article trouvé' : 'Aucun article'}
              </h3>
              <p className="text-muted-foreground mb-4">
                {searchQuery || filterPublished !== 'all' 
                  ? 'Essayez de modifier vos critères de recherche.'
                  : 'Commencez par créer votre premier article !'
                }
              </p>
              {(searchQuery || filterPublished !== 'all') && (
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery('');
                    setFilterPublished('all');
                  }}
                >
                  Réinitialiser les filtres
                </Button>
              )}
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {filteredArticles.map((article) => (
              <Card key={article.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-start space-x-4">
                        {article.imageUrl && (
                          <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={article.imageUrl}
                              alt={article.title}
                              className="w-full h-full object-cover"
                              width={300}
                              height={300}
                            />
                          </div>
                        )}
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-lg font-semibold text-foreground line-clamp-1">
                              {article.title}
                            </h3>
                            <Badge variant={article.published ? "default" : "secondary"}>
                              {article.published ? "Publié" : "Brouillon"}
                            </Badge>
                          </div>
                          
                          <p className="text-muted-foreground mb-3 line-clamp-2">
                            {article.excerpt}
                          </p>
                          
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-3 h-3" />
                              <span>{new Date(article.createdAt).toLocaleDateString('fr-FR')}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MessageSquare className="w-3 h-3" />
                              <span>{article._count.comments}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Star className="w-3 h-3" />
                              <span>{article._count.ratings}</span>
                            </div>
                            <span>Par {article.admin.name}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 ml-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePublishToggle(article.id, article.published)}
                      >
                        {article.published ? (
                          <>
                            <EyeOff className="w-3 h-3 mr-1" />
                            Dépublier
                          </>
                        ) : (
                          <>
                            <Eye className="w-3 h-3 mr-1" />
                            Publier
                          </>
                        )}
                      </Button>
                      
                      <Link href={`/admin/articles/${article.id}/edit`}>
                        <Button variant="outline" size="sm">
                          <Edit className="w-3 h-3 mr-1" />
                          Modifier
                        </Button>
                      </Link>
                      
                      <Link href={`/blog/${article.slug}`}>
                        <Button variant="ghost" size="sm">
                          <Eye className="w-3 h-3 mr-1" />
                          Voir
                        </Button>
                      </Link>
                      
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDeleteArticle(article.id, article.title)}
                      >
                        <Trash2 className="w-3 h-3 mr-1" />
                        Supprimer
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
} 