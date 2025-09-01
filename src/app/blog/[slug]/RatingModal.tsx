'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Star, X } from 'lucide-react';

interface RatingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (value: number) => Promise<{ success: boolean; error?: string }>;
}

export default function RatingModal({ isOpen, onClose, onSubmit }: RatingModalProps) {
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Fermer le modal avec la touche Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = async () => {
    if (selectedRating === 0) {
      setError('Veuillez sélectionner une note');
      return;
    }

    setIsSubmitting(true);
    setError('');

    const result = await onSubmit(selectedRating);
    
    if (result.success) {
      setSelectedRating(0);
      onClose();
    } else {
      setError(result.error || 'Erreur lors de l\'envoi de la note');
    }
    
    setIsSubmitting(false);
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setSelectedRating(0);
      setError('');
      onClose();
    }
  };

  const getRatingText = (rating: number) => {
    switch (rating) {
      case 1: return 'Très mauvais';
      case 2: return 'Mauvais';
      case 3: return 'Moyen';
      case 4: return 'Bon';
      case 5: return 'Excellent';
      default: return 'Sélectionnez une note';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-background rounded-lg shadow-xl w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            Noter cet article
          </h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            disabled={isSubmitting}
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Étoiles */}
          <div className="text-center space-y-4">
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setSelectedRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  disabled={isSubmitting}
                  className="transition-all duration-200 hover:scale-110 disabled:opacity-50"
                >
                  <Star
                    className={`h-12 w-12 ${
                      star <= (hoverRating || selectedRating)
                        ? 'text-yellow-500 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>
            
            <div className="text-lg font-medium text-foreground">
              {getRatingText(hoverRating || selectedRating)}
            </div>
          </div>

          {error && (
            <div className="text-sm text-red-600 bg-red-50 p-3 rounded-md">
              {error}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex gap-2 justify-end p-6 border-t">
          <Button
            variant="outline"
            onClick={handleClose}
            disabled={isSubmitting}
          >
            Annuler
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting || selectedRating === 0}
            className="flex items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Envoi...
              </>
            ) : (
              <>
                <Star className="h-4 w-4" />
                Envoyer ma note
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
} 