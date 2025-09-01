'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Star, 
  Calendar, 
  User, 
  FileText,
  Trash2,
  Eye,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';
import Link from 'next/link';

interface Rating {
  id: string;
  value: number;
  authorId: string;
  author: {
    firstName: string;
    lastName: string;
    email: string;
  };
  articleId: string;
  article: {
    title: string;
    slug: string;
  };
  createdAt: string;
}

export default function AdminRatingsPage() {
  const [ratings, setRatings] = useState<Rating[]>([]);
  const [filteredRatings, setFilteredRatings] = useState<Rating[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterValue, setFilterValue] = useState<'all' | '1' | '2' | '3' | '4' | '5'>('all');

  useEffect(() => {
    loadRatings();
  }, []);

  useEffect(() => {
    filterRatings();
  }, [ratings, searchTerm, filterValue]); // eslint-disable-line react-hooks/exhaustive-deps

  const loadRatings = async () => {
    try {
      const response = await fetch('/api/admin/ratings');
      if (response.ok) {
        const data = await response.json();
        setRatings(data);
      } else {
        throw new Error('Erreur lors du chargement des ratings');
      }
    } catch (error) {
      console.error('Erreur lors du chargement des ratings:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterRatings = () => {
    let filtered = ratings;

    // Filtrer par valeur
    if (filterValue !== 'all') {
      filtered = filtered.filter(r => r.value === parseInt(filterValue));
    }

    // Filtrer par terme de recherche
    if (searchTerm) {
      filtered = filtered.filter(r => 
        r.author.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.author.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.author.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.article.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredRatings(filtered);
  };

  const deleteRating = async (ratingId: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cet avis définitivement ?')) return;

    try {
      const response = await fetch(`/api/admin/ratings/${ratingId}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        await loadRatings();
      } else {
        throw new Error('Erreur lors de la suppression');
      }
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
    }
  };

  const getRatingStars = (value: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < value 
            ? 'text-yellow-500 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  const getRatingBadge = (value: number) => {
    if (value >= 4) {
      return <Badge variant="secondary" className="text-green-600"><ThumbsUp className="h-3 w-3 mr-1" />Positif</Badge>;
    } else if (value <= 2) {
      return <Badge variant="destructive"><ThumbsDown className="h-3 w-3 mr-1" />Négatif</Badge>;
    } else {
      return <Badge variant="outline">Neutre</Badge>;
    }
  };

  const getValueCount = (value: number) => {
    return ratings.filter(r => r.value === value).length;
  };

  const getAverageRating = () => {
    if (ratings.length === 0) return 0;
    const total = ratings.reduce((sum, r) => sum + r.value, 0);
    return (total / ratings.length).toFixed(1);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-2 text-muted-foreground">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Gestion des avis et évaluations</h1>
        <div className="flex gap-2">
          <Badge variant="secondary">
            Note moyenne: {getAverageRating()}/5
          </Badge>
          <Badge variant="outline">
            {ratings.length} avis total
          </Badge>
        </div>
      </div>

      {/* Statistiques des notes */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[5, 4, 3, 2, 1].map(value => (
          <Card key={value}>
            <CardContent className="p-4 text-center">
              <div className="flex justify-center mb-2">
                {getRatingStars(value)}
              </div>
              <div className="text-2xl font-bold">{getValueCount(value)}</div>
              <div className="text-sm text-muted-foreground">{value} étoile{value > 1 ? 's' : ''}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filtres et recherche */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Rechercher dans les avis..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant={filterValue === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterValue('all')}
              >
                Tous ({ratings.length})
              </Button>
              <Button
                variant={filterValue === '5' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterValue('5')}
              >
                5★ ({getValueCount(5)})
              </Button>
              <Button
                variant={filterValue === '4' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterValue('4')}
              >
                4★ ({getValueCount(4)})
              </Button>
              <Button
                variant={filterValue === '3' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterValue('3')}
              >
                3★ ({getValueCount(3)})
              </Button>
              <Button
                variant={filterValue === '2' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterValue('2')}
              >
                2★ ({getValueCount(2)})
              </Button>
              <Button
                variant={filterValue === '1' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterValue('1')}
              >
                1★ ({getValueCount(1)})
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Liste des ratings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="w-5 h-5" />
            Avis et évaluations ({filteredRatings.length})
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {filteredRatings.length === 0 ? (
            <div className="text-center py-8">
              <Star className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                {searchTerm || filterValue !== 'all' 
                  ? 'Aucun avis ne correspond à vos critères'
                  : 'Aucun avis pour le moment'
                }
              </p>
            </div>
          ) : (
            filteredRatings.map((rating) => (
              <div 
                key={rating.id} 
                className="border rounded-lg p-4 hover:bg-accent transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">
                        {rating.author.firstName} {rating.author.lastName}
                      </p>
                      <p className="text-sm text-muted-foreground">{rating.author.email}</p>
                    </div>
                    {getRatingBadge(rating.value)}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {new Date(rating.createdAt).toLocaleDateString('fr-FR', {
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
                    <FileText className="w-4 h-4 text-muted-foreground" />
                    <p className="text-sm font-medium text-muted-foreground">
                      Article évalué:
                    </p>
                    <Link 
                      href={`/blog/${rating.article.slug}`}
                      className="text-sm text-primary hover:underline"
                      target="_blank"
                    >
                      {rating.article.title}
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-muted-foreground">Note:</span>
                    <div className="flex items-center gap-1">
                      {getRatingStars(rating.value)}
                    </div>
                    <span className="text-sm text-muted-foreground">({rating.value}/5)</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link href={`/blog/${rating.article.slug}`}>
                    <Button variant="ghost" size="sm">
                      <Eye className="w-4 h-4 mr-1" />
                      Voir l'article
                    </Button>
                  </Link>
                  
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => deleteRating(rating.id)}
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