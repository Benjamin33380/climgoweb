'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AdminNav from '@/components/AdminNav';
// import RecentArticles from '@/components/RecentArticles';

interface Article {
  id: string;
  title: string;
  slug: string;
  published: boolean;
  createdAt: string;
  _count: {
    comments: number;
    ratings: number;
  };
}

interface Comment {
  id: string;
  content: string;
  author: string;
  email: string;
  approved: boolean;
  createdAt: string;
  article: {
    title: string;
    slug: string;
  };
}

export default function AdminDashboard() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Vérifier l'authentification
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }

    fetchData();
  }, [router]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      
      // Récupérer les articles
      const articlesResponse = await fetch('/api/admin/articles', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (articlesResponse.ok) {
        const articlesData = await articlesResponse.json();
        setArticles(articlesData);
      }

      // Récupérer les commentaires
      const commentsResponse = await fetch('/api/admin/comments', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (commentsResponse.ok) {
        const commentsData = await commentsResponse.json();
        setComments(commentsData);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminData');
    router.push('/admin/login');
  };

  // const handlePublishToggle = async (articleId: string, currentStatus: boolean) => {
  //   // Fonction supprimée car non utilisée
  // };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Chargement...</div>
      </div>
    );
  }

  const pendingComments = comments.filter(c => !c.approved);
  const publishedArticles = articles.filter(a => a.published);
  const draftArticles = articles.filter(a => !a.published);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <AdminNav onLogout={handleLogout} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Articles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{articles.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Articles Publiés</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{publishedArticles.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Brouillons</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">{draftArticles.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Commentaires en attente</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{pendingComments.length}</div>
            </CardContent>
          </Card>
        </div>

        {/* Articles récents */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Articles Récents</CardTitle>
                  <CardDescription>
                    Vos derniers articles créés
                  </CardDescription>
                </div>
                <Link href="/admin/articles">
                  <Button variant="outline" size="sm">
                    Voir tous
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {articles.slice(0, 5).map((article) => (
                  <div key={article.id} className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{article.title}</span>
                      <span className="text-sm text-gray-500">
                        {new Date(article.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-500">
                        Commentaires: {article._count.comments}
                      </span>
                      <span className="text-xs text-gray-500">
                        Notes: {article._count.ratings}
                      </span>
                    </div>
                  </div>
                ))}
                {articles.length === 0 && (
                  <p className="text-gray-500 text-center py-4">
                    Aucun article créé
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Commentaires en attente</CardTitle>
              <CardDescription>
                Commentaires nécessitant une modération
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingComments.slice(0, 5).map((comment) => (
                  <div key={comment.id} className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{comment.author}</span>
                      <span className="text-sm text-gray-500">
                        {new Date(comment.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{comment.content}</p>
                    <div className="text-xs text-gray-500">
                      Article: {comment.article.title}
                    </div>
                  </div>
                ))}
                {pendingComments.length === 0 && (
                  <p className="text-gray-500 text-center py-4">
                    Aucun commentaire en attente
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
} 