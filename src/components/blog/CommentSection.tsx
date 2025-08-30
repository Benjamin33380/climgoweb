'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { 
  MessageSquare, 
  Star, 
  Heart, 
  Reply, 
  Flag, 
  User as UserIcon,
  Send,
  Loader2,
  ThumbsUp,
  AlertCircle
} from 'lucide-react';
import { useUser } from '@/hooks/useUser';
import { supabase } from '@/lib/supabase';

interface Comment {
  id: string;
  content: string;
  created_at: string;
  updated_at: string;
  is_approved: boolean;
  like_count: number;
  parent_id?: string;
  user_id: string;
  users?: {
    username?: string;
    email: string;
    avatar_url?: string;
  };
  replies?: Comment[];
  user_liked?: boolean;
}

interface Rating {
  id: string;
  rating: number;
  review?: string;
  created_at: string;
  user_id: string;
  users?: {
    username?: string;
    email: string;
  };
}

interface CommentSectionProps {
  articleId: string;
  articleSlug: string;
  isVipOnly: boolean;
}

export function CommentSection({ articleId, articleSlug, isVipOnly }: CommentSectionProps) {
  const { user } = useUser();
  const [comments, setComments] = useState<Comment[]>([]);
  const [ratings, setRatings] = useState<Rating[]>([]);
  const [userRating, setUserRating] = useState<Rating | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Formulaires
  const [newComment, setNewComment] = useState('');
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState('');
  const [newRating, setNewRating] = useState(0);
  const [newReview, setNewReview] = useState('');
  const [hoverRating, setHoverRating] = useState(0);

  useEffect(() => {
    loadComments();
    loadRatings();
    if (user) {
      loadUserRating();
    }
  }, [articleId, user]);

  const loadComments = async () => {
    try {
      const { data, error } = await supabase
        .from('comments')
        .select(`
          *,
          users(username, email, avatar_url)
        `)
        .eq('article_id', articleId)
        .eq('is_approved', true)
        .is('parent_id', null)
        .order('created_at', { ascending: false });

      if (error) throw error;

      // Charger les réponses pour chaque commentaire
      const commentsWithReplies = await Promise.all(
        (data || []).map(async (comment) => {
          const { data: replies } = await supabase
            .from('comments')
            .select(`
              *,
              users(username, email, avatar_url)
            `)
            .eq('parent_id', comment.id)
            .eq('is_approved', true)
            .order('created_at', { ascending: true });

          return {
            ...comment,
            replies: replies || []
          };
        })
      );

      setComments(commentsWithReplies);
    } catch (error) {
      console.error('Erreur lors du chargement des commentaires:', error);
    }
  };

  const loadRatings = async () => {
    try {
      const { data, error } = await supabase
        .from('ratings')
        .select(`
          *,
          users(username, email)
        `)
        .eq('article_id', articleId)
        .eq('is_approved', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setRatings(data || []);
    } catch (error) {
      console.error('Erreur lors du chargement des évaluations:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadUserRating = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('ratings')
        .select('*')
        .eq('article_id', articleId)
        .eq('user_id', user.id)
        .single();

      if (data) {
        setUserRating(data);
        setNewRating(data.rating);
        setNewReview(data.review || '');
      }
    } catch (error) {
      // Pas d'évaluation existante, c'est normal
    }
  };

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !newComment.trim()) return;

    setSubmitting(true);
    setError('');
    setSuccess('');

    try {
      const { error } = await supabase
        .from('comments')
        .insert([
          {
            article_id: articleId,
            user_id: user.id,
            content: newComment.trim(),
            is_approved: false // Modération requise
          }
        ]);

      if (error) throw error;

      setNewComment('');
      setSuccess('Commentaire soumis ! Il sera visible après modération.');
      
      // Créer une notification admin
      await supabase
        .from('admin_notifications')
        .insert([
          {
            type: 'comment',
            title: 'Nouveau commentaire',
            message: `${user.username || user.email} a commenté l'article "${articleSlug}"`,
            user_id: user.id,
            related_id: articleId,
            data: { article_slug: articleSlug, comment_preview: newComment.substring(0, 100) }
          }
        ]);

    } catch (error: any) {
      setError('Erreur lors de l\'envoi du commentaire: ' + error.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleReplySubmit = async (parentId: string) => {
    if (!user || !replyContent.trim()) return;

    setSubmitting(true);
    setError('');

    try {
      const { error } = await supabase
        .from('comments')
        .insert([
          {
            article_id: articleId,
            user_id: user.id,
            parent_id: parentId,
            content: replyContent.trim(),
            is_approved: false
          }
        ]);

      if (error) throw error;

      setReplyContent('');
      setReplyTo(null);
      setSuccess('Réponse soumise ! Elle sera visible après modération.');
    } catch (error: any) {
      setError('Erreur lors de l\'envoi de la réponse: ' + error.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleRatingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || newRating === 0) return;

    setSubmitting(true);
    setError('');
    setSuccess('');

    try {
      if (userRating) {
        // Mettre à jour l'évaluation existante
        const { error } = await supabase
          .from('ratings')
          .update({
            rating: newRating,
            review: newReview.trim() || null,
            updated_at: new Date().toISOString()
          })
          .eq('id', userRating.id);

        if (error) throw error;
        setSuccess('Évaluation mise à jour !');
      } else {
        // Créer une nouvelle évaluation
        const { error } = await supabase
          .from('ratings')
          .insert([
            {
              article_id: articleId,
              user_id: user.id,
              rating: newRating,
              review: newReview.trim() || null
            }
          ]);

        if (error) throw error;
        setSuccess('Évaluation soumise !');
      }

      await loadRatings();
      await loadUserRating();
    } catch (error: any) {
      setError('Erreur lors de l\'envoi de l\'évaluation: ' + error.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleLikeComment = async (commentId: string) => {
    if (!user) return;

    try {
      // Vérifier si déjà liké
      const { data: existingLike } = await supabase
        .from('comment_likes')
        .select('id')
        .eq('comment_id', commentId)
        .eq('user_id', user.id)
        .single();

      if (existingLike) {
        // Retirer le like
        await supabase
          .from('comment_likes')
          .delete()
          .eq('id', existingLike.id);
      } else {
        // Ajouter le like
        await supabase
          .from('comment_likes')
          .insert([
            {
              comment_id: commentId,
              user_id: user.id
            }
          ]);
      }

      // Recharger les commentaires
      await loadComments();
    } catch (error) {
      console.error('Erreur lors du like:', error);
    }
  };

  const calculateAverageRating = () => {
    if (ratings.length === 0) return 0;
    const sum = ratings.reduce((acc, rating) => acc + rating.rating, 0);
    return Math.round((sum / ratings.length) * 10) / 10;
  };

  const renderStars = (rating: number, interactive: boolean = false, onHover?: (rating: number) => void, onClick?: (rating: number) => void) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-5 w-5 ${
              star <= (interactive ? hoverRating || rating : rating)
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            } ${interactive ? 'cursor-pointer hover:text-yellow-400' : ''}`}
            onMouseEnter={() => interactive && onHover && onHover(star)}
            onMouseLeave={() => interactive && onHover && onHover(0)}
            onClick={() => interactive && onClick && onClick(star)}
          />
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  // Si l'article est VIP et l'utilisateur n'est pas connecté
  if (isVipOnly && !user) {
    return (
      <Card className="mt-8">
        <CardContent className="p-6 text-center">
          <AlertCircle className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-lg font-semibold mb-2">Contenu réservé aux membres</h3>
          <p className="text-muted-foreground mb-4">
            Connectez-vous pour voir les commentaires et laisser votre avis sur cet article.
          </p>
          <Button asChild>
            <a href="/auth">Se connecter</a>
          </Button>
        </CardContent>
      </Card>
    );
  }

  const averageRating = calculateAverageRating();

  return (
    <div className="mt-8 space-y-6">
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

      {/* Section des évaluations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5" />
            Évaluations ({ratings.length})
          </CardTitle>
          {ratings.length > 0 && (
            <div className="flex items-center gap-2">
              {renderStars(averageRating)}
              <span className="text-sm text-muted-foreground">
                {averageRating}/5 ({ratings.length} avis)
              </span>
            </div>
          )}
        </CardHeader>
        <CardContent className="space-y-4">
          {user && (
            <form onSubmit={handleRatingSubmit} className="space-y-4 p-4 border border-border rounded-lg">
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  {userRating ? 'Modifier votre évaluation' : 'Évaluer cet article'}
                </label>
                {renderStars(
                  newRating,
                  true,
                  setHoverRating,
                  setNewRating
                )}
              </div>
              
              <Textarea
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
                placeholder="Laissez un commentaire sur cet article (optionnel)"
                rows={3}
              />
              
              <Button
                type="submit"
                disabled={submitting || newRating === 0}
                className="flex items-center gap-2"
              >
                {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Star className="h-4 w-4" />}
                {userRating ? 'Mettre à jour' : 'Évaluer'}
              </Button>
            </form>
          )}

          {/* Liste des évaluations */}
          <div className="space-y-4">
            {ratings.map((rating) => (
              <div key={rating.id} className="p-4 border border-border rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <UserIcon className="h-8 w-8 text-muted-foreground" />
                    <div>
                      <p className="font-medium">
                        {rating.users?.username || rating.users?.email}
                      </p>
                      <div className="flex items-center gap-2">
                        {renderStars(rating.rating)}
                        <span className="text-sm text-muted-foreground">
                          {new Date(rating.created_at).toLocaleDateString('fr-FR')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {rating.review && (
                  <p className="text-sm mt-2">{rating.review}</p>
                )}
              </div>
            ))}
            
            {ratings.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <Star className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Aucune évaluation pour le moment</p>
                {user && <p className="text-sm">Soyez le premier à évaluer cet article !</p>}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Section des commentaires */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Commentaires ({comments.length})
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {user && (
            <form onSubmit={handleCommentSubmit} className="space-y-4 p-4 border border-border rounded-lg">
              <Textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Partagez votre avis sur cet article..."
                rows={4}
                required
              />
              <Button
                type="submit"
                disabled={submitting || !newComment.trim()}
                className="flex items-center gap-2"
              >
                {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                Publier le commentaire
              </Button>
            </form>
          )}

          {/* Liste des commentaires */}
          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="space-y-3">
                <div className="p-4 border border-border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      {comment.users?.avatar_url ? (
                        <img
                          src={comment.users.avatar_url}
                          alt="Avatar"
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      ) : (
                        <UserIcon className="h-8 w-8 text-muted-foreground" />
                      )}
                      <div>
                        <p className="font-medium">
                          {comment.users?.username || comment.users?.email}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(comment.created_at).toLocaleDateString('fr-FR')}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="mb-3">{comment.content}</p>
                  
                  <div className="flex items-center gap-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleLikeComment(comment.id)}
                      className="flex items-center gap-1"
                      disabled={!user}
                    >
                      <ThumbsUp className="h-4 w-4" />
                      {comment.like_count || 0}
                    </Button>
                    
                    {user && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setReplyTo(replyTo === comment.id ? null : comment.id)}
                        className="flex items-center gap-1"
                      >
                        <Reply className="h-4 w-4" />
                        Répondre
                      </Button>
                    )}
                  </div>

                  {/* Formulaire de réponse */}
                  {replyTo === comment.id && (
                    <div className="mt-4 p-3 bg-muted rounded-lg">
                      <Textarea
                        value={replyContent}
                        onChange={(e) => setReplyContent(e.target.value)}
                        placeholder="Votre réponse..."
                        rows={3}
                      />
                      <div className="flex gap-2 mt-2">
                        <Button
                          size="sm"
                          onClick={() => handleReplySubmit(comment.id)}
                          disabled={submitting || !replyContent.trim()}
                        >
                          Répondre
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setReplyTo(null)}
                        >
                          Annuler
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Réponses */}
                {comment.replies && comment.replies.length > 0 && (
                  <div className="ml-8 space-y-3">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="p-3 border border-border rounded-lg bg-muted/50">
                        <div className="flex items-center gap-3 mb-2">
                          {reply.users?.avatar_url ? (
                            <img
                              src={reply.users.avatar_url}
                              alt="Avatar"
                              className="w-6 h-6 rounded-full object-cover"
                            />
                          ) : (
                            <UserIcon className="h-6 w-6 text-muted-foreground" />
                          )}
                          <div>
                            <p className="text-sm font-medium">
                              {reply.users?.username || reply.users?.email}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {new Date(reply.created_at).toLocaleDateString('fr-FR')}
                            </p>
                          </div>
                        </div>
                        <p className="text-sm">{reply.content}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {comments.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Aucun commentaire pour le moment</p>
                {user && <p className="text-sm">Soyez le premier à commenter !</p>}
              </div>
            )}
          </div>

          {!user && (
            <div className="text-center py-6 border border-border rounded-lg">
              <p className="text-muted-foreground mb-4">
                Connectez-vous pour commenter et évaluer cet article
              </p>
              <Button asChild>
                <a href="/auth">Se connecter</a>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}