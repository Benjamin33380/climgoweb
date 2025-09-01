'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, MessageSquare, User, Calendar } from 'lucide-react';

interface Comment {
  id: string;
  content: string;
  author: {
    id: string;
    firstName: string | null;
    lastName: string | null;
    email: string;
  };
  isApproved: boolean;
  createdAt: string;
}

interface Rating {
  id: string;
  value: number;
  author: {
    id: string;
    firstName: string | null;
    lastName: string | null;
  };
  createdAt: string;
}

interface CommentSectionProps {
  articleSlug: string;
  articleId: string;
  initialComments: Comment[];
  initialRatings: Rating[];
}

export default function CommentSection({ 
  initialComments, 
  initialRatings 
}: CommentSectionProps) {
  const [comments] = useState<Comment[]>(initialComments);
  const [ratings] = useState<Rating[]>(initialRatings);

  // Calculer la note moyenne
  const averageRating = ratings.length > 0 
    ? ratings.reduce((sum, rating) => sum + rating.value, 0) / ratings.length 
    : 0;

  // Filtrer les commentaires approuvés
  const approvedComments = comments.filter(comment => comment.isApproved);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Section des ratings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            <span>Note moyenne de l'article</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <span className="text-4xl font-bold text-yellow-600">
                {averageRating.toFixed(1)}
              </span>
              <span className="text-2xl text-yellow-500">/ 5</span>
            </div>
            
            {/* Affichage des étoiles */}
            <div className="flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-6 w-6 ${
                    star <= averageRating 
                      ? 'text-yellow-500 fill-current' 
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <p className="text-muted-foreground">
              {ratings.length} avis utilisateur{ratings.length !== 1 ? 's' : ''}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Section des commentaires */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            <span>Commentaires ({approvedComments.length})</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {approvedComments.length === 0 ? (
            <div className="text-center py-8">
              <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                Aucun commentaire pour le moment. 
                Connectez-vous pour laisser un commentaire !
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {approvedComments.map((comment) => (
                <div key={comment.id} className="border-b pb-6 last:border-b-0">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <span className="font-medium text-foreground">
                          {comment.author.firstName && comment.author.lastName
                            ? `${comment.author.firstName} ${comment.author.lastName}`
                            : comment.author.email.split('@')[0]
                          }
                        </span>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>
                            {new Date(comment.createdAt).toLocaleDateString('fr-FR', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-foreground leading-relaxed">{comment.content}</p>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 