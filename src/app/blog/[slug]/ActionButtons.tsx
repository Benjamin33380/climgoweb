'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Star, MessageSquare, Check } from 'lucide-react';
import { useUser } from '@/components/providers/UserProvider';
import CommentModal from './CommentModal';
import RatingModal from './RatingModal';
import PointsAnimation from '@/components/ui/PointsAnimation';

interface ActionButtonsProps {
  articleSlug: string;
  articleId: string;
}

export default function ActionButtons({ 
  articleSlug, 
  articleId
}: ActionButtonsProps) {
  const { user } = useUser();
  const router = useRouter();
  
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [showPointsAnimation, setShowPointsAnimation] = useState(false);
  const [pointsGained, setPointsGained] = useState(0);
  const [pointsMessage, setPointsMessage] = useState('');
  const [hasRated, setHasRated] = useState(false);
  const [isCheckingRating, setIsCheckingRating] = useState(true);

  // Vérifier si l'utilisateur a déjà noté cet article
  useEffect(() => {
    if (user && articleId) {
      checkUserRating();
    } else {
      setIsCheckingRating(false);
    }
  }, [user, articleId]); // eslint-disable-line react-hooks/exhaustive-deps

  const checkUserRating = async () => {
    try {
      const response = await fetch(`/api/articles/${articleSlug}/ratings/check-user`, {
        method: 'GET',
      });
      
      if (response.ok) {
        const data = await response.json();
        setHasRated(data.hasRated);
      }
    } catch (error) {
      console.error('Erreur lors de la vérification du rating:', error);
    } finally {
      setIsCheckingRating(false);
    }
  };

  const handleCommentClick = () => {
    if (!user) {
      router.push('/auth');
      return;
    }
    setShowCommentModal(true);
  };

  const handleRatingClick = () => {
    if (!user) {
      router.push('/auth');
      return;
    }
    if (hasRated) {
      return; // Ne rien faire si déjà noté
    }
    setShowRatingModal(true);
  };

  const handleCommentSubmit = async (content: string) => {
    try {
      const response = await fetch(`/api/articles/${articleSlug}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
      });

      if (response.ok) {
        setShowCommentModal(false);
        // Afficher l'animation des points gagnés
        setPointsGained(8);
        setPointsMessage('Commentaire publié avec succès !');
        setShowPointsAnimation(true);
        // Recharger la page après l'animation
        setTimeout(() => window.location.reload(), 3500);
        return { success: true };
      } else {
        const errorData = await response.json();
        return { success: false, error: errorData.error || 'Erreur lors de l\'envoi' };
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du rating:', error);
      return { success: false, error: 'Erreur de connexion' };
    }
  };

  const handleRatingSubmit = async (value: number) => {
    try {
      const response = await fetch(`/api/articles/${articleSlug}/ratings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value }),
      });

      if (response.ok) {
        setShowRatingModal(false);
        setHasRated(true); // Marquer comme noté
        // Afficher l'animation des points gagnés
        setPointsGained(4);
        setPointsMessage('Article noté avec succès !');
        setShowPointsAnimation(true);
        // Recharger la page après l'animation
        setTimeout(() => window.location.reload(), 3500);
        return { success: true };
      } else {
        const errorData = await response.json();
        return { success: false, error: errorData.error || 'Erreur lors de l\'envoi' };
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du commentaire:', error);
      return { success: false, error: 'Erreur de connexion' };
    }
  };

  return (
    <>
      <div className="sticky top-8 space-y-4">
        {/* Bouton Commentaires */}
        <Button
          onClick={handleCommentClick}
          variant="outline"
          size="lg"
          className="w-fit flex items-start gap-3 justify-start px-4 py-4 h-auto text-left"
        >
          <MessageSquare className="h-6 w-6 flex-shrink-0 mt-0.5" />
          <div className="flex-1 min-w-0">
            <div className="font-medium text-sm leading-tight">
              {user ? 'Ajouter un commentaire' : 'Se connecter pour commenter'}
            </div>
            <div className="text-xs text-muted-foreground leading-tight mt-1">
              {user ? 'Partagez votre avis (+8 points)' : 'Connectez-vous pour participer'}
            </div>
          </div>
        </Button>
        
        {/* Bouton Rating */}
        <Button
          onClick={handleRatingClick}
          variant={hasRated ? "secondary" : "outline"}
          size="lg"
          disabled={hasRated || isCheckingRating}
          className={`w-fit flex items-start gap-3 justify-start px-4 py-4 h-auto text-left ${
            hasRated ? 'bg-green-100 text-green-800 border-green-200' : ''
          }`}
        >
          {hasRated ? (
            <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
          ) : (
            <Star className="h-6 w-6 flex-shrink-0 mt-0.5" />
          )}
          <div className="flex-1 min-w-0">
            <div className="font-medium text-sm leading-tight">
              {hasRated 
                ? 'Article déjà noté' 
                : user 
                  ? 'Noter l\'article' 
                  : 'Se connecter pour noter'
              }
            </div>
            <div className="text-xs text-muted-foreground leading-tight mt-1">
              {hasRated 
                ? 'Vous avez déjà donné votre avis' 
                : user 
                  ? 'Donnez votre avis (+4 points)' 
                  : 'Connectez-vous pour évaluer'
              }
            </div>
          </div>
        </Button>
      </div>

      {/* Modals */}
      <CommentModal
        isOpen={showCommentModal}
        onClose={() => setShowCommentModal(false)}
        onSubmit={handleCommentSubmit}
      />
      
      <RatingModal
        isOpen={showRatingModal}
        onClose={() => setShowRatingModal(false)}
        onSubmit={handleRatingSubmit}
      />

      {/* Animation des points gagnés */}
      <PointsAnimation
        points={pointsGained}
        message={pointsMessage}
        isVisible={showPointsAnimation}
        onComplete={() => setShowPointsAnimation(false)}
      />
    </>
  );
} 