'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Upload, Eye, EyeOff, Save, X } from 'lucide-react';

interface BlogEditorProps {
  article?: {
    id?: string;
    title: string;
    slug: string;
    content_markdown: string;
    excerpt: string;
    image_url?: string;
    published: boolean;
    meta_title?: string;
    meta_description?: string;
    meta_keywords?: string;
  };
  onSave?: () => void;
  mode: 'create' | 'edit';
}

export default function BlogEditor({ article, onSave, mode }: BlogEditorProps) {
  const [formData, setFormData] = useState({
    title: article?.title || '',
    slug: article?.slug || '',
    content_markdown: article?.content_markdown || '',
    excerpt: article?.excerpt || '',
    image_url: article?.image_url || '',
    published: article?.published || false,
    meta_title: article?.meta_title || '',
    meta_description: article?.meta_description || '',
    meta_keywords: article?.meta_keywords || ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Générer le slug automatiquement
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[éèê]/g, 'e')
      .replace(/[àâ]/g, 'a')
      .replace(/[ùû]/g, 'u')
      .replace(/[ôö]/g, 'o')
      .replace(/[îï]/g, 'i')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleTitleChange = (title: string) => {
    setFormData(prev => ({
      ...prev,
      title,
      slug: generateSlug(title)
    }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // TODO: Remplacer par Supabase
      // Simuler une sauvegarde
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSuccess(mode === 'create' ? 'Article créé avec succès !' : 'Article mis à jour avec succès !');
      
      if (onSave) {
        onSave();
      }
    } catch (error) {
      setError('Erreur lors de la sauvegarde');
    } finally {
      setLoading(false);
    }
  };

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          {mode === 'create' ? 'Créer un nouvel article' : 'Modifier l\'article'}
        </h1>
        <p className="text-gray-600 mt-2">
          Rédigez votre article avec un éditeur complet et des options SEO avancées
        </p>
      </div>

      {error && (
        <Alert className="mb-6 border-red-200 bg-red-50">
          <AlertDescription className="text-red-800">{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert className="mb-6 border-green-200 bg-green-50">
          <AlertDescription className="text-green-800">{success}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Informations de base */}
        <Card>
          <CardHeader>
            <CardTitle>Informations de base</CardTitle>
            <CardDescription>
              Titre, slug et extrait de l'article
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="title">Titre *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="Titre de votre article"
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="slug">Slug *</Label>
              <Input
                id="slug"
                value={formData.slug}
                onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                placeholder="url-de-votre-article"
                required
                className="mt-1"
              />
              <p className="text-sm text-gray-500 mt-1">
                L'URL sera : /blog/{formData.slug}
              </p>
            </div>

            <div>
              <Label htmlFor="excerpt">Extrait</Label>
              <Textarea
                id="excerpt"
                value={formData.excerpt}
                onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                placeholder="Résumé court de l'article (visible dans les listes)"
                rows={3}
                className="mt-1"
              />
            </div>
          </CardContent>
        </Card>

        {/* Contenu */}
        <Card>
          <CardHeader>
            <CardTitle>Contenu de l'article</CardTitle>
            <CardDescription>
              Rédigez votre article en Markdown
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label htmlFor="content">Contenu Markdown *</Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={togglePreview}
                >
                  {showPreview ? (
                    <>
                      <EyeOff className="h-4 w-4 mr-2" />
                      Masquer l'aperçu
                    </>
                  ) : (
                    <>
                      <Eye className="h-4 w-4 mr-2" />
                      Aperçu
                    </>
                  )}
                </Button>
              </div>

              {!showPreview ? (
                <Textarea
                  id="content"
                  value={formData.content_markdown}
                  onChange={(e) => setFormData(prev => ({ ...prev, content_markdown: e.target.value }))}
                  placeholder="Rédigez votre article en Markdown..."
                  rows={20}
                  className="font-mono text-sm"
                  required
                />
              ) : (
                <div className="border rounded-md p-4 bg-gray-50 min-h-[500px]">
                  <div className="prose max-w-none">
                    <h1>{formData.title}</h1>
                    {formData.excerpt && <p className="text-lg text-gray-600">{formData.excerpt}</p>}
                    <div dangerouslySetInnerHTML={{ __html: formData.content_markdown }} />
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Image */}
        <Card>
          <CardHeader>
            <CardTitle>Image de l'article</CardTitle>
            <CardDescription>
              Ajoutez une image d'illustration
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="image">Sélectionner une image</Label>
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  ref={fileInputRef}
                  className="mt-1"
                />
              </div>

              {(imagePreview || formData.image_url) && (
                <div className="relative">
                  <img
                    src={imagePreview || formData.image_url}
                    alt="Aperçu"
                    className="w-full max-w-md h-48 object-cover rounded-lg"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() => {
                      setImageFile(null);
                      setImagePreview('');
                      setFormData(prev => ({ ...prev, image_url: '' }));
                      if (fileInputRef.current) {
                        fileInputRef.current.value = '';
                      }
                    }}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* SEO */}
        <Card>
          <CardHeader>
            <CardTitle>Optimisation SEO</CardTitle>
            <CardDescription>
              Métadonnées pour les moteurs de recherche
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="meta_title">Titre SEO</Label>
              <Input
                id="meta_title"
                value={formData.meta_title}
                onChange={(e) => setFormData(prev => ({ ...prev, meta_title: e.target.value }))}
                placeholder="Titre optimisé pour les moteurs de recherche"
                className="mt-1"
              />
              <p className="text-sm text-gray-500 mt-1">
                Laissez vide pour utiliser le titre principal
              </p>
            </div>

            <div>
              <Label htmlFor="meta_description">Description SEO</Label>
              <Textarea
                id="meta_description"
                value={formData.meta_description}
                onChange={(e) => setFormData(prev => ({ ...prev, meta_description: e.target.value }))}
                placeholder="Description optimisée pour les moteurs de recherche"
                rows={3}
                className="mt-1"
              />
              <p className="text-sm text-gray-500 mt-1">
                Laissez vide pour utiliser l'extrait
              </p>
            </div>

            <div>
              <Label htmlFor="meta_keywords">Mots-clés SEO</Label>
              <Input
                id="meta_keywords"
                value={formData.meta_keywords}
                onChange={(e) => setFormData(prev => ({ ...prev, meta_keywords: e.target.value }))}
                placeholder="mots-clés, séparés, par, des, virgules"
                className="mt-1"
              />
            </div>
          </CardContent>
        </Card>

        {/* Publication */}
        <Card>
          <CardHeader>
            <CardTitle>Publication</CardTitle>
            <CardDescription>
              Contrôlez la visibilité de votre article
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="published"
                checked={formData.published}
                onChange={(e) => setFormData(prev => ({ ...prev, published: e.target.checked }))}
                className="rounded border-gray-300"
              />
              <Label htmlFor="published">Publier immédiatement</Label>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Si non coché, l'article sera sauvegardé en brouillon
            </p>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex justify-end space-x-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => window.history.back()}
          >
            Annuler
          </Button>
          <Button
            type="submit"
            disabled={loading}
            className="min-w-[120px]"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Sauvegarde...
              </>
            ) : (
              <>
                <Save className="h-4 w-4 mr-2" />
                {mode === 'create' ? 'Créer' : 'Mettre à jour'}
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
