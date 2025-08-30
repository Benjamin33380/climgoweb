'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@/hooks/useUser';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Star, MessageCircle, Trash2 } from 'lucide-react';

interface Comment {
  id: string;
  content: string;
  created_at: string;
  user: {
    username: string;
    avatar_url?: string;
  };
}

interface Rating {
  id: string;
  rating: number;
  created_at: string;
  user: {
    username: string;
  };
}

interface CommentSectionProps {
  articleSlug: string;
}

export default function CommentSection({ articleSlug }: CommentSectionProps) {
  const { user } = useUser();
  const [comments, setComments] = useState<Comment[]>([]);
  const [ratings, setRatings] = useState<Rating[]>([]);
  const [userRating, setUserRating] = useState<number>(0);
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  const loadComments = async () => {
    try {
      const response = await fetch(`/api/articles/${articleSlug}/comments`);
      if (response.ok) {
        const data = await response.json();
        setComments(data.comments || []);
      }
    } catch (error) {
      console.error('Erreur lors du chargement des commentaires:', error);
    }
  };

  const loadRatings = async () => {
    try {
      const response = await fetch(`/api/articles/${articleSlug}/ratings`);
      if (response.ok) {
        const data = await response.json();
        setRatings(data.ratings || []);
      }
    } catch (error) {
      console.error('Erreur lors du chargement des notes:', error);
    }
  };

  const loadUserRating = async () => {
    if (!user) return;
    
    try {
      const response = await fetch(`/api/articles/${articleSlug}/ratings?userId=${user.id}`);
      if (response.ok) {
        const data = await response.json();
        setUserRating(data.userRating || 0);
      }
    } catch (error) {
      console.error('Erreur lors du chargement de la note utilisateur:', error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      await Promise.all([loadComments(), loadRatings(), loadUserRating()]);
      setLoading(false);
    };
    loadData();
  }, [articleSlug, user]);

  const submitComment = async () => {
    if (!user || !newComment.trim()) return;

    try {
      const response = await fetch(`/api/articles/${articleSlug}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: newComment })
      });

      if (response.ok) {
        setNewComment('');
        await loadComments();
      }
    } catch (error) {
      console.error('Erreur lors de l\'ajout du commentaire:', error);
    }
  };

  const submitRating = async (rating: number) => {
    if (!user) return;

    try {
      const response = await fetch(`/api/articles/${articleSlug}/ratings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rating })
      });

      if (response.ok) {
        setUserRating(rating);
        setNewRating(0);
        await loadRatings();
      }
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la note:', error);
    }
  };

  const averageRating = ratings.length > 0 
    ? ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length 
    : 0;

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Section des notes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5" />
            Notes et avis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-6 w-6 ${
                    star <= averageRating
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-lg font-semibold">
              {averageRating.toFixed(1)} ({ratings.length} avis)
            </span>
          </div>

          {user && (
            <div className="border-t pt-4">
              <p className="mb-2 font-medium">Votre note :</p>
              <div className="flex items-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => submitRating(star)}
                    className="transition-colors"
                  >
                    <Star
                      className={`h-6 w-6 ${
                        star <= (newRating || userRating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300 hover:text-yellow-200'
                      }`}
                      onMouseEnter={() => setNewRating(star)}
                      onMouseLeave={() => setNewRating(0)}
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Section des commentaires */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            Commentaires ({comments.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {user && (
            <div className="mb-6 p-4 border rounded-lg bg-gray-50">
              <Textarea
                placeholder="Partagez votre avis sur cet article..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="mb-3"
                rows={3}
              />
              <Button 
                onClick={submitComment}
                disabled={!newComment.trim()}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Publier le commentaire
              </Button>
            </div>
          )}

          <div className="space-y-4">
            {comments.length === 0 ? (
              <p className="text-gray-500 text-center py-8">
                Aucun commentaire pour le moment. Soyez le premier à commenter !
              </p>
            ) : (
              comments.map((comment) => (
                <div key={comment.id} className="border-b pb-4 last:border-b-0">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      {comment.user.avatar_url ? (
                        <img 
                          src={comment.user.avatar_url} 
                          alt={comment.user.username}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      ) : (
                        <span className="text-blue-600 font-semibold">
                          {comment.user.username.charAt(0).toUpperCase()}
                        </span>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-gray-900">
                          {comment.user.username}
                        </span>
                        <span className="text-sm text-gray-500">
                          {new Date(comment.created_at).toLocaleDateString('fr-FR')}
                        </span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {comment.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {!user && (
            <div className="text-center py-6 bg-gray-50 rounded-lg mt-6">
              <p className="text-gray-600 mb-3">
                Connectez-vous pour laisser un commentaire et noter cet article
              </p>
              <Button 
                onClick={() => window.location.href = '/auth'}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Se connecter
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
