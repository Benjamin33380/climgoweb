'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare, X } from 'lucide-react';

interface CommentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (content: string) => Promise<{ success: boolean; error?: string }>;
}

export default function CommentModal({ isOpen, onClose, onSubmit }: CommentModalProps) {
  const [content, setContent] = useState('');
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
    if (!content.trim()) {
      setError('Le commentaire ne peut pas être vide');
      return;
    }

    setIsSubmitting(true);
    setError('');

    const result = await onSubmit(content.trim());
    
    if (result.success) {
      setContent('');
      onClose();
    } else {
      setError(result.error || 'Erreur lors de l\'envoi du commentaire');
    }
    
    setIsSubmitting(false);
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setContent('');
      setError('');
      onClose();
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
      <div className="relative bg-background rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Ajouter un commentaire
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
        <div className="p-6 space-y-4">
          <div>
            <label htmlFor="comment-content" className="block text-sm font-medium text-foreground mb-2">
              Votre commentaire
            </label>
            <Textarea
              id="comment-content"
              placeholder="Partagez votre avis, question ou expérience..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={4}
              className="resize-none"
              disabled={isSubmitting}
            />
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
            disabled={isSubmitting || !content.trim()}
            className="flex items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Envoi...
              </>
            ) : (
              <>
                <MessageSquare className="h-4 w-4" />
                Envoyer
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
} 