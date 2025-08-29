'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, MessageSquare, Star, Send, User, Calendar } from 'lucide-react';

interface Comment {
  id: string;
  content: string;
  user_id: string;
  article_slug: string;
  is_approved: boolean;
  created_at: string;
  users?: {
    username?: string;
    avatar_url?: string;
  };
}

interface Rating {
  id: string;
  rating: number;
  user_id: string;
  article_slug: string;
  created_at: string;
  users?: {
    username?: string;
    email?: string;
  };
}

interface CommentSectionProps {
  articleSlug: string;
  articleId: string;
  initialComments?: Comment[];
  initialRatings?: Rating[];
}

export default function CommentSection({
  articleSlug,
  articleId,
  initialComments = [],
  initialRatings = []
}: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [ratings, setRatings] = useState<Rating[]>(initialRatings);
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<{
    id: string;
    username: string;
    email: string;
    avatar_url?: string;
  } | null>(null);

  useEffect(() => {
    // TODO: Remplacer par Supabase Auth
    // Simuler un utilisateur connecté
    setIsAuthenticated(true);
    setCurrentUser({
      id: 'user-1',
      username: 'Visiteur',
      email: 'visiteur@example.com'
    });
  }, []);

  const loadCommentsAndRatings = async () => {
    try {
      // TODO: Remplacer par Supabase
      // Simuler le chargement des données
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Données simulées
      const mockComments: Comment[] = [
        {
          id: '1',
          content: 'Excellent article ! Très informatif sur la climatisation.',
          user_id: 'user-2',
          article_slug: articleSlug,
          is_approved: true,
          created_at: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
          users: { username: 'Marie D.', avatar_url: '' }
        },
        {
          id: '2',
          content: 'Je recommande vivement ces conseils pour le chauffage.',
          user_id: 'user-3',
          article_slug: articleSlug,
          is_approved: true,
          created_at: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(),
          users: { username: 'Pierre L.', avatar_url: '' }
        }
      ];

      const mockRatings: Rating[] = [
        {
          id: '1',
          rating: 5,
          user_id: 'user-2',
          article_slug: articleSlug,
          created_at: new Date(Date.now() - 1000 * 60 * 60 * 1).toISOString(),
          users: { username: 'Marie D.', email: 'marie@example.com' }
        },
        {
          id: '2',
          rating: 4,
          user_id: 'user-3',
          article_slug: articleSlug,
          created_at: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
          users: { username: 'Pierre L.', email: 'pierre@example.com' }
        }
      ];

      setComments(mockComments);
      setRatings(mockRatings);
    } catch (error) {
      console.error('Erreur lors du chargement:', error);
    }
  };

  useEffect(() => {
    loadCommentsAndRatings();
  }, [articleSlug]);

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !isAuthenticated) return;

    setLoading(true);
    setError('');

    try {
      // TODO: Remplacer par Supabase
      // Simuler l'ajout d'un commentaire
      await new Promise(resolve => setTimeout(resolve, 1000));

      const newCommentObj: Comment = {
        id: Date.now().toString(),
        content: newComment,
        user_id: currentUser!.id,
        article_slug: articleSlug,
        is_approved: false, // En attente de modération
        created_at: new Date().toISOString(),
        users: { username: currentUser!.username, avatar_url: currentUser!.avatar_url }
      };

      setComments(prev => [newCommentObj, ...prev]);
      setNewComment('');
      setSuccess('Commentaire ajouté ! Il sera visible après modération.');

      // Recharger les commentaires
      setTimeout(loadCommentsAndRatings, 1000);
    } catch (_error) {
      setError('Erreur lors de l\'ajout du commentaire');
    } finally {
      setLoading(false);
    }
  };

  const handleRatingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newRating === 0 || !isAuthenticated) return;

    setLoading(true);
    setError('');

    try {
      // TODO: Remplacer par Supabase
      // Simuler l'ajout d'un avis
      await new Promise(resolve => setTimeout(resolve, 1000));

      const newRatingObj: Rating = {
        id: Date.now().toString(),
        rating: newRating,
        user_id: currentUser!.id,
        article_slug: articleSlug,
        created_at: new Date().toISOString(),
        users: { username: currentUser!.username, email: currentUser!.email }
      };

      setRatings(prev => [newRatingObj, ...prev]);
      setNewRating(0);
      setSuccess('Avis ajouté avec succès !');

      // Recharger les avis
      setTimeout(loadCommentsAndRatings, 1000);
    } catch (_error) {
      setError('Erreur lors de l\'ajout de l\'avis');
    } finally {
      setLoading(false);
    }
  };

  const averageRating = ratings.length > 0 
    ? ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length 
    : 0;

  const approvedComments = comments.filter(c => c.is_approved);

  if (!isAuthenticated) {
    return (
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Commentaires et avis</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 text-center py-8">
            Connectez-vous pour laisser un commentaire ou un avis
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="mt-8 space-y-6">
      {/* Avis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            Donnez votre avis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleRatingSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Note : {newRating}/5
              </label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setNewRating(star)}
                    className={`p-1 rounded ${
                      star <= newRating 
                        ? 'text-yellow-400 hover:text-yellow-500' 
                        : 'text-gray-300 hover:text-yellow-400'
                    }`}
                  >
                    <Star className={`h-6 w-6 ${star <= newRating ? 'fill-current' : ''}`} />
                  </button>
                ))}
              </div>
            </div>
            <Button
              type="submit"
              disabled={loading || newRating === 0}
              className="w-full"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Envoi...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Envoyer l'avis
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Statistiques */}
      <Card>
        <CardHeader>
          <CardTitle>Statistiques</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{approvedComments.length}</div>
              <div className="text-sm text-gray-600">Commentaires</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">{averageRating.toFixed(1)}/5</div>
              <div className="text-sm text-gray-600">Note moyenne</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Commentaires */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-blue-500" />
            Commentaires ({approvedComments.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Formulaire de commentaire */}
          <form onSubmit={handleCommentSubmit} className="mb-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
                  Votre commentaire
                </label>
                <Textarea
                  id="comment"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Partagez votre expérience ou posez une question..."
                  rows={4}
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={loading || !newComment.trim()}
                className="w-full"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Envoi...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Envoyer le commentaire
                  </>
                )}
              </Button>
            </div>
          </form>

          {/* Liste des commentaires */}
          <div className="space-y-4">
            {approvedComments.length === 0 ? (
              <p className="text-gray-500 text-center py-8">
                Aucun commentaire pour le moment. Soyez le premier à commenter !
              </p>
            ) : (
              approvedComments.map((comment) => (
                <div key={comment.id} className="border rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium text-gray-900">
                          {comment.users?.username || 'Utilisateur'}
                        </span>
                        <span className="text-sm text-gray-500">
                          <Calendar className="h-3 w-3 inline mr-1" />
                          {new Date(comment.created_at).toLocaleDateString('fr-FR')}
                        </span>
                      </div>
                      <p className="text-gray-700">{comment.content}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>

      {/* Messages d'état */}
      {error && (
        <Alert className="border-red-200 bg-red-50">
          <AlertDescription className="text-red-800">{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert className="border-green-200 bg-green-50">
          <AlertDescription className="text-green-800">{success}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}
