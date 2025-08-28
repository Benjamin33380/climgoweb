'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AdminNav from '@/components/AdminNav';

// Éditeur de texte simple
const MDEditor = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => (
      <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full h-64 p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      placeholder="Rédigez votre article ici..."
    />
);

interface Article {
  id: string;
  title: string;
  content: string;
  slug: string;
  excerpt: string;
  imageUrl: string | null;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function EditArticle() {
  const params = useParams();
  const router = useRouter();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  // États du formulaire
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    published: false
  });

  useEffect(() => {
    // Vérifier l'authentification
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }

    if (params.id) {
      fetchArticle();
    }
  }, [params.id, router]); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchArticle = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/admin/articles`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const articles = await response.json();
        const article = articles.find((a: Article) => a.id === params.id);
        
        if (article) {
          setArticle(article);
          setFormData({
            title: article.title,
            content: article.content,
            excerpt: article.excerpt || '',
            published: article.published
          });
        } else {
          setError('Article non trouvé');
        }
      } else {
        throw new Error('Erreur lors de la récupération de l\'article');
      }
    } catch (error) {
      console.error('Erreur lors du chargement de l\'article:', error);
      setError('Erreur lors du chargement de l\'article');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');

    try {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        throw new Error('Non authentifié');
      }

      const response = await fetch(`/api/admin/articles/${params.id}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erreur lors de la mise à jour');
      }

      // Rediriger vers la liste des articles
      router.push('/admin/articles');
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Erreur lors de la mise à jour');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Chargement...</div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Erreur</h1>
          <p className="text-muted-foreground mb-4">{error}</p>
          <Button onClick={() => router.push('/admin/articles')}>
            Retour à la liste
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <AdminNav onLogout={() => router.push('/admin/login')} />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Modifier l'article</CardTitle>
            <CardDescription>
              Modifiez le contenu de votre article
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Titre */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Titre de l'article *
                </label>
                <Input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Titre de votre article"
                  required
                  disabled={saving}
                />
              </div>

              {/* Extrait */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Extrait (optionnel)
                </label>
                <Input
                  type="text"
                  value={formData.excerpt}
                  onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                  placeholder="Résumé de votre article (max 160 caractères)"
                  maxLength={160}
                  disabled={saving}
                />
                <p className="text-sm text-muted-foreground mt-1">
                  {formData.excerpt.length}/160 caractères
                </p>
              </div>

              {/* Contenu */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Contenu de l'article *
                </label>
                <MDEditor
                  value={formData.content}
                  onChange={(val) => setFormData(prev => ({ ...prev, content: val || '' }))}
                />
              </div>

              {/* Options */}
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.published}
                    onChange={(e) => setFormData(prev => ({ ...prev, published: e.target.checked }))}
                    disabled={saving}
                    className="rounded border-gray-300"
                  />
                  <span className="text-sm font-medium text-foreground">
                    Publier l'article
                  </span>
                </label>
              </div>

              {/* Erreur */}
              {error && (
                <div className="text-red-600 text-sm text-center p-3 bg-red-50 rounded-lg">
                  {error}
                </div>
              )}

              {/* Boutons */}
              <div className="flex justify-end space-x-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push('/admin/articles')}
                  disabled={saving}
                >
                  Annuler
                </Button>
                <Button
                  type="submit"
                  disabled={saving || !formData.title || !formData.content}
                >
                  {saving ? 'Sauvegarde...' : 'Sauvegarder'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
} 