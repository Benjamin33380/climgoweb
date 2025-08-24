'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AdminNav from '@/components/AdminNav';

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

export default function CommentsManagement() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Vérifier l'authentification
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }

    fetchComments();
  }, [router]);

  const fetchComments = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/comments', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setComments(data);
      } else {
        throw new Error('Erreur lors de la récupération des commentaires');
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Erreur lors de la récupération');
    } finally {
      setLoading(false);
    }
  };

  const handleApproveComment = async (commentId: string, approved: boolean) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/comments', {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ commentId, approved })
      });

      if (response.ok) {
        // Mettre à jour l'état local
        setComments(prev => 
          prev.map(comment => 
            comment.id === commentId 
              ? { ...comment, approved } 
              : comment
          )
        );
      } else {
        throw new Error('Erreur lors de la mise à jour');
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Erreur lors de la mise à jour');
    }
  };

  const handleDeleteComment = async (commentId: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce commentaire ?')) {
      return;
    }

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/comments', {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ commentId })
      });

      if (response.ok) {
        // Retirer le commentaire de l'état local
        setComments(prev => prev.filter(comment => comment.id !== commentId));
      } else {
        throw new Error('Erreur lors de la suppression');
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Erreur lors de la suppression');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Chargement...</div>
      </div>
    );
  }

  const pendingComments = comments.filter(c => !c.approved);
  const approvedComments = comments.filter(c => c.approved);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <AdminNav onLogout={() => router.push('/admin/login')} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="mb-6 text-red-600 text-center p-3 bg-red-50 rounded-lg">
            {error}
          </div>
        )}

        {/* Commentaires en attente */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold mb-2">Gestion des Commentaires</CardTitle>
            <div className="flex items-center space-x-2">
              <span>Commentaires en attente</span>
              <Badge variant="secondary">{pendingComments.length}</Badge>
            </div>
            <CardDescription>
              Commentaires nécessitant une modération
            </CardDescription>
          </CardHeader>
          <CardContent>
            {pendingComments.length === 0 ? (
              <p className="text-gray-500 text-center py-8">
                Aucun commentaire en attente
              </p>
            ) : (
              <div className="space-y-4">
                {pendingComments.map((comment) => (
                  <div key={comment.id} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium">{comment.author}</span>
                          <span className="text-sm text-gray-500">({comment.email})</span>
                        </div>
                        <div className="text-sm text-gray-500">
                          {new Date(comment.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          onClick={() => handleApproveComment(comment.id, true)}
                        >
                          Approuver
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDeleteComment(comment.id)}
                        >
                          Supprimer
                        </Button>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-2">{comment.content}</p>
                    <div className="text-sm text-gray-500">
                      Article: {comment.article.title}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Commentaires approuvés */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span>Commentaires approuvés</span>
              <Badge variant="default">{approvedComments.length}</Badge>
            </CardTitle>
            <CardDescription>
              Commentaires déjà approuvés et visibles
            </CardDescription>
          </CardHeader>
          <CardContent>
            {approvedComments.length === 0 ? (
              <p className="text-gray-500 text-center py-8">
                Aucun commentaire approuvé
              </p>
            ) : (
              <div className="space-y-4">
                {approvedComments.map((comment) => (
                  <div key={comment.id} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium">{comment.author}</span>
                          <span className="text-sm text-gray-500">({comment.email})</span>
                        </div>
                        <div className="text-sm text-gray-500">
                          {new Date(comment.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleApproveComment(comment.id, false)}
                        >
                          Désapprouver
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDeleteComment(comment.id)}
                        >
                          Supprimer
                        </Button>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-2">{comment.content}</p>
                    <div className="text-sm text-gray-500">
                      Article: {comment.article.title}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
} 