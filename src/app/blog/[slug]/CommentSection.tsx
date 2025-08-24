'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Star, MessageSquare } from 'lucide-react';

interface Comment {
  id: string;
  content: string;
  author: string;
  email: string;
  approved: boolean;
  createdAt: Date;
}

interface Rating {
  averageRating: number;
  totalRatings: number;
}

interface CommentSectionProps {
  articleSlug: string;
  articleId: string;
  initialComments: Comment[];
  initialRatings: Rating;
}

export default function CommentSection({ 
  articleSlug, 
  initialComments, 
  initialRatings 
}: CommentSectionProps) {
  const [comments] = useState<Comment[]>(initialComments);
  const [ratings, setRatings] = useState<Rating>(initialRatings);
  
  // États pour le formulaire de commentaire
  const [commentForm, setCommentForm] = useState({
    author: '',
    email: '',
    content: ''
  });
  const [submittingComment, setSubmittingComment] = useState(false);

  // États pour le rating
  const [userRating, setUserRating] = useState(0);
  const [submittingRating, setSubmittingRating] = useState(false);

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittingComment(true);

    try {
      const response = await fetch(`/api/articles/${articleSlug}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentForm),
      });

      if (response.ok) {
        // Réinitialiser le formulaire
        setCommentForm({ author: '', email: '', content: '' });
        alert('Commentaire soumis avec succès ! Il sera visible après modération.');
      } else {
        throw new Error('Erreur lors de l\'envoi du commentaire');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du commentaire:', error);
      alert('Erreur lors de l\'envoi du commentaire');
    } finally {
      setSubmittingComment(false);
    }
  };

  const handleRatingSubmit = async () => {
    if (userRating === 0) return;

    setSubmittingRating(true);

    try {
      const response = await fetch(`/api/articles/${articleSlug}/ratings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rating: userRating }),
      });

      if (response.ok) {
        // Mettre à jour les ratings localement
        const newTotal = ratings.totalRatings + 1;
        const newAverage = ((ratings.averageRating * ratings.totalRatings) + userRating) / newTotal;
        setRatings({
          averageRating: Math.round(newAverage * 10) / 10,
          totalRatings: newTotal
        });
        setUserRating(0);
        alert('Rating envoyé avec succès !');
      } else {
        throw new Error('Erreur lors de l\'envoi du rating');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du rating:', error);
      alert('Erreur lors de l\'envoi du rating');
    } finally {
      setSubmittingRating(false);
    }
  };

  return (
    <div className="space-y-8 grid md:grid-cols-2 gap-4">
      {/* Rating */}
      

      {/* Comment Form */}
      <Card>
        <CardHeader>
          <CardTitle>Ajouter un commentaire</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCommentSubmit} className="space-y-4">
            <div>
              <Input
                placeholder="Votre nom"
                value={commentForm.author}
                onChange={(e) => setCommentForm(prev => ({ ...prev, author: e.target.value }))}
                required
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Votre email"
                value={commentForm.email}
                onChange={(e) => setCommentForm(prev => ({ ...prev, email: e.target.value }))}
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Votre commentaire"
                value={commentForm.content}
                onChange={(e) => setCommentForm(prev => ({ ...prev, content: e.target.value }))}
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <Button
              type="submit"
              disabled={submittingComment}
              className="w-full"
            >
              {submittingComment ? 'Envoi...' : 'Envoyer le commentaire'}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <span>Note de l&apos;article</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-600">
              {ratings.averageRating.toFixed(1)}
            </div>
            <div className="text-sm text-muted-foreground">
              {ratings.totalRatings} avis
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Votre note :</label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setUserRating(star)}
                  className={`text-2xl ${
                    star <= userRating ? 'text-yellow-500' : 'text-gray-300'
                  } hover:text-yellow-400 transition-colors`}
                >
                  ★
                </button>
              ))}
            </div>
            <Button
              onClick={handleRatingSubmit}
              disabled={userRating === 0 || submittingRating}
              className="w-full"
            >
              {submittingRating ? 'Envoi...' : 'Envoyer ma note'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Comments Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MessageSquare className="w-5 h-5" />
            <span>Commentaires ({comments.length})</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {comments.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">
              Aucun commentaire pour le moment. Soyez le premier à commenter !
            </p>
          ) : (
            <div className="space-y-6">
              {comments.map((comment) => (
                <div key={comment.id} className="border-b pb-6 last:border-b-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-foreground">{comment.author}</span>
                      <span className="text-sm text-muted-foreground">
                        {new Date(comment.createdAt).toLocaleDateString('fr-FR')}
                      </span>
                    </div>
                  </div>
                  <p className="text-foreground">{comment.content}</p>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 