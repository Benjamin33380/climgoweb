'use client';

import { useState, useEffect } from 'react';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Trash2, CheckCircle, XCircle, MessageCircle, Calendar, User, Search, Filter } from 'lucide-react';
import Link from 'next/link';

interface Comment {
  id: string;
  content: string;
  created_at: string;
  is_approved: boolean;
  user: {
    username: string;
    email: string;
  };
  article: {
    title: string;
    slug: string;
  };
}

export default function AdminCommentsPage() {
  const { user, loading } = useAdminAuth();
  const [comments, setComments] = useState<Comment[]>([]);
  const [filteredComments, setFilteredComments] = useState<Comment[]>([]);
  const [loadingComments, setLoadingComments] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'pending' | 'approved'>('all');

  useEffect(() => {
    if (user) {
      loadComments();
    }
  }, [user]);

  useEffect(() => {
    filterComments();
  }, [comments, searchTerm, filterStatus]);

  const loadComments = async () => {
    try {
      const { data, error } = await supabase
        .from('comments')
        .select(`
          id,
          content,
          created_at,
          is_approved,
          user:users(username, email),
          article:articles(title, slug)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setComments((data as any) || []);
    } catch (error) {
      console.error('Erreur lors du chargement des commentaires:', error);
    } finally {
      setLoadingComments(false);
    }
  };

  const filterComments = () => {
    let filtered = comments;

    // Filtrer par statut
    if (filterStatus === 'pending') {
      filtered = filtered.filter(c => !c.is_approved);
    } else if (filterStatus === 'approved') {
      filtered = filtered.filter(c => c.is_approved);
    }

    // Filtrer par terme de recherche
    if (searchTerm) {
      filtered = filtered.filter(c => 
        c.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.article.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredComments(filtered);
  };

  const approveComment = async (commentId: string) => {
    try {
      const { error } = await supabase
        .from('comments')
        .update({ is_approved: true })
        .eq('id', commentId);

      if (error) throw error;
      await loadComments();
    } catch (error) {
      console.error('Erreur lors de l\'approbation:', error);
    }
  };

  const rejectComment = async (commentId: string) => {
    try {
      const { error } = await supabase
        .from('comments')
        .update({ is_approved: false })
        .eq('id', commentId);

      if (error) throw error;
      await loadComments();
    } catch (error) {
      console.error('Erreur lors du rejet:', error);
    }
  };

  const deleteComment = async (commentId: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce commentaire définitivement ?')) return;

    try {
      const { error } = await supabase
        .from('comments')
        .delete()
        .eq('id', commentId);

      if (error) throw error;
      await loadComments();
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
    }
  };

  if (loading || loadingComments) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-2 text-muted-foreground">Chargement...</p>
        </div>
      </div>
    );
  }

  const pendingComments = comments.filter(c => !c.is_approved);
  const approvedComments = comments.filter(c => c.is_approved);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Modération des commentaires</h1>
        <div className="flex gap-2">
          <Badge variant="destructive">
            {pendingComments.length} en attente
          </Badge>
          <Badge variant="secondary">
            {approvedComments.length} approuvés
          </Badge>
          <Badge variant="outline">
            {comments.length} total
          </Badge>
        </div>
      </div>

      {/* Filtres et recherche */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Rechercher dans les commentaires, utilisateurs ou articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant={filterStatus === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterStatus('all')}
              >
                Tous ({comments.length})
              </Button>
              <Button
                variant={filterStatus === 'pending' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterStatus('pending')}
              >
                En attente ({pendingComments.length})
              </Button>
              <Button
                variant={filterStatus === 'approved' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterStatus('approved')}
              >
                Approuvés ({approvedComments.length})
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Liste des commentaires */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            Commentaires ({filteredComments.length})
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {filteredComments.length === 0 ? (
            <div className="text-center py-8">
              <MessageCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                {searchTerm || filterStatus !== 'all' 
                  ? 'Aucun commentaire ne correspond à vos critères'
                  : 'Aucun commentaire pour le moment'
                }
              </p>
            </div>
          ) : (
            filteredComments.map((comment) => (
              <div 
                key={comment.id} 
                className={`border rounded-lg p-4 ${
                  !comment.is_approved 
                    ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800' 
                    : 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{comment.user.username}</p>
                      <p className="text-sm text-muted-foreground">{comment.user.email}</p>
                    </div>
                    <Badge variant={comment.is_approved ? 'secondary' : 'destructive'}>
                      {comment.is_approved ? 'Approuvé' : 'En attente'}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {new Date(comment.created_at).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </div>
                </div>

                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-sm font-medium text-muted-foreground">
                      Article:
                    </p>
                    <Link 
                      href={`/blog/${comment.article.slug}`}
                      className="text-sm text-primary hover:underline"
                      target="_blank"
                    >
                      {comment.article.title}
                    </Link>
                  </div>
                  <div className="bg-background border rounded p-3">
                    <p className="text-sm whitespace-pre-wrap">{comment.content}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  {!comment.is_approved ? (
                    <Button
                      size="sm"
                      onClick={() => approveComment(comment.id)}
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Approuver
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => rejectComment(comment.id)}
                    >
                      <XCircle className="w-4 h-4 mr-1" />
                      Rejeter
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => deleteComment(comment.id)}
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Supprimer
                  </Button>
                </div>
              </div>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
}