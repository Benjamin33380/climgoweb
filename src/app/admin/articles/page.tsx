'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@/components/providers/UserProvider';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { ArticleEditor } from '@/components/admin/ArticleEditor';
import { 
  FileText, 
  Search, 
  Filter, 
  Calendar,
  User,
  MessageSquare,
  Edit,
  Trash2,
  Plus,
  Loader2,
  CheckCircle,
  XCircle,
  Globe
} from 'lucide-react';

interface Article {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  imageUrl?: string;
  published: boolean;
  authorId: string;
  createdAt: string;
  updatedAt: string;
  author: {
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
  };
  _count: {
    comments: number;
  };
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

interface ArticleFormData {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  imageUrl: string;
  published: boolean;
}

export default function AdminArticlesPage() {
  return (
    <ProtectedRoute requireAdmin={true}>
      <AdminArticlesContent />
    </ProtectedRoute>
  );
}

function AdminArticlesContent() {
  const { user } = useUser();
  const router = useRouter();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 20,
    total: 0,
    totalPages: 0
  });
  
  // États pour les modales CRUD
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState<Article | null>(null);
  const [formData, setFormData] = useState<ArticleFormData>({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    imageUrl: '',
    published: false
  });

  useEffect(() => {
    if (user?.role === 'ADMIN') {
      loadArticles();
    }
  }, [user, pagination.page, search, statusFilter]); // eslint-disable-line react-hooks/exhaustive-deps

  const loadArticles = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        page: pagination.page.toString(),
        limit: pagination.limit.toString(),
        ...(search && { search }),
        ...(statusFilter !== 'all' && { status: statusFilter })
      });

      const response = await fetch(`/api/admin/articles?${params}`, {
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error('Erreur lors du chargement des articles');
      }

      const data = await response.json();
      setArticles(data.articles);
      setPagination(data.pagination);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Erreur inconnue');
    } finally {
      setLoading(false);
    }
  };

  const handleAddArticle = async (articleData?: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
    try {
      // Utiliser les données reçues de ArticleEditor ou formData par défaut
      const dataToSend = articleData || formData;
      
      console.log('📥 handleAddArticle - Données reçues:', JSON.stringify(dataToSend, null, 2));
      
      const response = await fetch('/api/admin/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(dataToSend)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erreur lors de la création');
      }

      const result = await response.json();
      console.log('✅ Article créé avec succès:', result);

      setSuccess('Article créé avec succès');
      setShowAddModal(false);
      setFormData({
        title: '',
        slug: '',
        content: '',
        excerpt: '',
        imageUrl: '',
        published: false
      });
      await loadArticles();
    } catch (error) {
      console.error('❌ Erreur dans handleAddArticle:', error);
      setError(error instanceof Error ? error.message : 'Erreur inconnue');
    }
  };



  const handleDeleteArticle = async () => {
    if (!articleToDelete) return;

    try {
      const response = await fetch(`/api/admin/articles/${articleToDelete.id}`, {
        method: 'DELETE',
        credentials: 'include'
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erreur lors de la suppression');
      }

      setSuccess('Article supprimé avec succès');
      setShowDeleteModal(false);
      setArticleToDelete(null);
      await loadArticles();
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Erreur inconnue');
    }
  };

  const openEditModal = (article: Article) => {
    router.push(`/admin/articles/${article.id}/edit`);
  };

  const openDeleteModal = (article: Article) => {
    setArticleToDelete(article);
    setShowDeleteModal(true);
  };

  const handlePublishArticle = async (article: Article) => {
    try {
      setLoading(true);
      
      const response = await fetch(`/api/admin/articles/${article.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          ...article,
          published: !article.published // Inverser le statut actuel
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erreur lors de la modification du statut');
      }

      setSuccess(`Article ${article.published ? 'dépublié' : 'publié'} avec succès`);
      await loadArticles(); // Recharger la liste
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Erreur lors de la modification du statut');
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (published: boolean) => {
    return published ? (
      <Badge variant="default" className="bg-green-600">
        <CheckCircle className="w-3 h-3 mr-1" />
        Publié
      </Badge>
    ) : (
      <Badge variant="secondary">
        <XCircle className="w-3 h-3 mr-1" />
        Brouillon
      </Badge>
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading && articles.length === 0) {
    return (
      <div className="container mx-auto p-6 flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p>Chargement des articles...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Gestion des articles</h1>
        <div className="flex items-center gap-2">
          <Button onClick={() => setShowAddModal(true)} className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Nouvel article
          </Button>
          <Badge variant="outline">{pagination.total} articles</Badge>
        </div>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert>
          <AlertDescription>{success}</AlertDescription>
        </Alert>
      )}

      {/* Filtres et recherche */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Rechercher par titre ou contenu..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border border-border rounded-md bg-background"
              >
                <option value="all">Tous les statuts</option>
                <option value="published">Publiés</option>
                <option value="draft">Brouillons</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Liste des articles */}
      <Card>
        <CardHeader>
          <CardTitle>Articles</CardTitle>
        </CardHeader>
        <CardContent>
          {articles.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">Aucun article trouvé</p>
            </div>
          ) : (
            <div className="space-y-4">
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="border rounded-lg p-4 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold">{article.title}</h3>
                        {getStatusBadge(article.published)}
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {article.author.firstName && article.author.lastName 
                            ? `${article.author.firstName} ${article.author.lastName}`
                            : article.author.email
                          }
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {formatDate(article.createdAt)}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="h-3 w-3" />
                          {article._count.comments} commentaires
                        </span>
                      </div>

                      {article.excerpt && (
                        <p className="text-sm text-muted-foreground mb-2">
                          {article.excerpt}
                        </p>
                      )}

                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>Slug: {article.slug}</span>
                        {article.imageUrl && (
                          <span>• Image: {article.imageUrl}</span>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => openEditModal(article)}
                        className="text-xs"
                      >
                        <Edit className="h-3 w-3 mr-1" />
                        Modifier
                      </Button>
                      
                      <Button
                        size="sm"
                        variant={article.published ? "secondary" : "default"}
                        onClick={() => handlePublishArticle(article)}
                        className="text-xs"
                        disabled={loading}
                      >
                        <Globe className="h-3 w-3 mr-1" />
                        {article.published ? 'Dépublier' : 'Publier'}
                      </Button>
                      
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => openDeleteModal(article)}
                        className="text-xs text-red-600"
                      >
                        <Trash2 className="h-3 w-3 mr-1" />
                        Supprimer
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {pagination.totalPages > 1 && (
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
              <div className="text-sm text-muted-foreground">
                Page {pagination.page} sur {pagination.totalPages} ({pagination.total} articles)
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPagination(prev => ({ ...prev, page: prev.page - 1 }))}
                  disabled={pagination.page === 1}
                >
                  Précédent
                </Button>
                
                <div className="flex items-center gap-1">
                  {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
                    const page = i + 1;
                    return (
                      <Button
                        key={page}
                        variant={page === pagination.page ? "default" : "outline"}
                        size="sm"
                        onClick={() => setPagination(prev => ({ ...prev, page }))}
                        className="w-8 h-8 p-0"
                      >
                        {page}
                      </Button>
                    );
                  })}
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPagination(prev => ({ ...prev, page: prev.page + 1 }))}
                  disabled={pagination.page === pagination.totalPages}
                >
                  Suivant
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Éditeur d'article */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
          <div className="bg-background w-full max-w-7xl max-h-[95vh] overflow-y-auto">
            <ArticleEditor
              onSave={handleAddArticle}
              onCancel={() => setShowAddModal(false)}
              loading={loading}
            />
          </div>
        </div>
      )}

      

      {/* Modale de confirmation de suppression */}
      {showDeleteModal && articleToDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-background border border-border rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Confirmer la suppression</h2>
            <p className="text-muted-foreground mb-6">
              Êtes-vous sûr de vouloir supprimer l'article <strong>"{articleToDelete.title}"</strong> ? 
              Cette action est irréversible et supprimera également tous les commentaires associés.
            </p>
            <div className="flex gap-2">
              <Button variant="destructive" onClick={handleDeleteArticle} className="flex-1">Supprimer</Button>
              <Button variant="outline" onClick={() => setShowDeleteModal(false)} className="flex-1">Annuler</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 