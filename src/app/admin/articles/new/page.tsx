'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Save, 
  Eye, 
  Upload, 
  Image as ImageIcon, 
  FileText, 
  Settings, 
  Globe, 
  Lock,
  Loader2,
  X,
  Plus,
  Hash,
  Clock
} from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useUser } from '@/hooks/useUser';

interface ArticleForm {
  title: string;
  slug: string;
  excerpt: string;
  content_markdown: string;
  image_url: string;
  image_alt: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string[];
  category: string;
  tags: string[];
  is_vip_only: boolean;
  published: boolean;
}

export default function NewArticlePage() {
  const { user } = useUser();
  const router = useRouter();
  const [_loading, _setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [newTag, setNewTag] = useState('');
  const [newKeyword, setNewKeyword] = useState('');

  const [form, setForm] = useState<ArticleForm>({
    title: '',
    slug: '',
    excerpt: '',
    content_markdown: '',
    image_url: '',
    image_alt: '',
    meta_title: '',
    meta_description: '',
    meta_keywords: [],
    category: 'chauffage',
    tags: [],
    is_vip_only: false,
    published: false
  });

  const categories = [
    { value: 'chauffage', label: 'Chauffage' },
    { value: 'climatisation', label: 'Climatisation' },
    { value: 'maintenance', label: 'Maintenance' },
    { value: 'conseils', label: 'Conseils' },
    { value: 'actualites', label: 'Actualités' }
  ];

  // Générer automatiquement le slug à partir du titre
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleTitleChange = (title: string) => {
    setForm(prev => ({
      ...prev,
      title,
      slug: generateSlug(title),
      meta_title: title || prev.meta_title
    }));
  };

  const addTag = () => {
    if (newTag.trim() && !form.tags.includes(newTag.trim())) {
      setForm(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setForm(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const addKeyword = () => {
    if (newKeyword.trim() && !form.meta_keywords.includes(newKeyword.trim())) {
      setForm(prev => ({
        ...prev,
        meta_keywords: [...prev.meta_keywords, newKeyword.trim()]
      }));
      setNewKeyword('');
    }
  };

  const removeKeyword = (keywordToRemove: string) => {
    setForm(prev => ({
      ...prev,
      meta_keywords: prev.meta_keywords.filter(keyword => keyword !== keywordToRemove)
    }));
  };

  const handleImageUpload = async (file: File) => {
    if (!file) return;

    setUploading(true);
    setError('');

    try {
      // Upload vers Cloudinary
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || 'climgo_articles');
      formData.append('folder', 'climgo/articles');

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: 'POST',
          body: formData
        }
      );

      if (!response.ok) {
        throw new Error('Erreur lors de l\'upload de l\'image');
      }

      const _data = await response.json();
      
      setForm(prev => ({
        ...prev,
        image_url: _data.secure_url,
        image_alt: prev.image_alt || form.title
      }));

      setSuccess('Image uploadée avec succès !');
    } catch (error: unknown) {
      setError('Erreur lors de l\'upload: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  const calculateReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };

  const handleSave = async (publish: boolean = false) => {
    if (!user) {
      setError('Vous devez être connecté pour créer un article');
      return;
    }

    if (!form.title.trim() || !form.content_markdown.trim()) {
      setError('Le titre et le contenu sont requis');
      return;
    }

    setSaving(true);
    setError('');
    setSuccess('');

    try {
      const readingTime = calculateReadingTime(form.content_markdown);
      
      const articleData = {
        title: form.title.trim(),
        slug: form.slug.trim(),
        excerpt: form.excerpt.trim() || null,
        content_markdown: form.content_markdown.trim(),
        image_url: form.image_url || null,
        image_alt: form.image_alt || null,
        meta_title: form.meta_title.trim() || form.title.trim(),
        meta_description: form.meta_description.trim() || form.excerpt.trim() || null,
        meta_keywords: form.meta_keywords.length > 0 ? form.meta_keywords : null,
        category: form.category,
        tags: form.tags.length > 0 ? form.tags : null,
        is_vip_only: form.is_vip_only,
        published: publish,
        reading_time: readingTime,
        author_id: user.id,
        published_at: publish ? new Date().toISOString() : null
      };

      const { data, error } = await supabase
        .from('articles')
        .insert([articleData])
        .select()
        .single();

      if (error) {
        throw error;
      }

      setSuccess(`Article ${publish ? 'publié' : 'sauvegardé'} avec succès !`);
      
      // Rediriger vers la liste des articles après un délai
      setTimeout(() => {
        router.push('/admin/articles');
      }, 2000);

    } catch (error: unknown) {
      setError('Erreur lors de la sauvegarde: ' + error.message);
    } finally {
      setSaving(false);
    }
  };

  const renderPreview = () => {
    if (!showPreview) return null;

    return (
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Aperçu de l'article
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none">
            {form.image_url && (
              <img
                src={form.image_url}
                alt={form.image_alt}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            )}
            
            <div className="mb-4">
              <Badge variant="outline" className="mb-2">
                {categories.find(c => c.value === form.category)?.label}
              </Badge>
              {form.is_vip_only && (
                <Badge variant="secondary" className="ml-2">
                  <Lock className="h-3 w-3 mr-1" />
                  VIP
                </Badge>
              )}
            </div>

            <h1 className="text-3xl font-bold mb-4">{form.title || 'Titre de l\'article'}</h1>
            
            {form.excerpt && (
              <p className="text-lg text-muted-foreground mb-6 italic">
                {form.excerpt}
              </p>
            )}

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {calculateReadingTime(form.content_markdown)} min de lecture
              </span>
              {form.tags.length > 0 && (
                <div className="flex items-center gap-1">
                  <Hash className="h-4 w-4" />
                  {form.tags.join(', ')}
                </div>
              )}
            </div>

            <div className="whitespace-pre-wrap">
              {form.content_markdown || 'Contenu de l\'article...'}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Nouvel Article</h1>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => setShowPreview(!showPreview)}
            className="flex items-center gap-2"
          >
            <Eye className="h-4 w-4" />
            {showPreview ? 'Masquer' : 'Aperçu'}
          </Button>
          <Button
            onClick={() => handleSave(false)}
            disabled={saving}
            variant="outline"
            className="flex items-center gap-2"
          >
            {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
            Brouillon
          </Button>
          <Button
            onClick={() => handleSave(true)}
            disabled={saving}
            className="flex items-center gap-2"
          >
            {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Globe className="h-4 w-4" />}
            Publier
          </Button>
        </div>
      </div>

      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert className="mb-6">
          <AlertDescription>{success}</AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="content" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="content">Contenu</TabsTrigger>
          <TabsTrigger value="media">Média</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
          <TabsTrigger value="settings">Paramètres</TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Contenu principal
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Titre de l'article *</Label>
                <Input
                  id="title"
                  value={form.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="Titre accrocheur de votre article"
                  className="text-lg font-medium"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">URL (slug)</Label>
                <Input
                  id="slug"
                  value={form.slug}
                  onChange={(e) => setForm(prev => ({ ...prev, slug: e.target.value }))}
                  placeholder="url-de-votre-article"
                  className="font-mono text-sm"
                />
                <p className="text-xs text-muted-foreground">
                  URL finale: https://www.climgo.fr/blog/{form.slug}
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">Extrait</Label>
                <Textarea
                  id="excerpt"
                  value={form.excerpt}
                  onChange={(e) => setForm(prev => ({ ...prev, excerpt: e.target.value }))}
                  placeholder="Résumé court de votre article (affiché dans les listes)"
                  rows={3}
                />
                <p className="text-xs text-muted-foreground">
                  {form.excerpt.length}/160 caractères recommandés
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Contenu de l'article *</Label>
                <Textarea
                  id="content"
                  value={form.content_markdown}
                  onChange={(e) => setForm(prev => ({ ...prev, content_markdown: e.target.value }))}
                  placeholder="Rédigez votre article en markdown..."
                  rows={20}
                  className="font-mono"
                />
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Markdown supporté: **gras**, *italique*, [lien](url), # Titre</span>
                  <span>{calculateReadingTime(form.content_markdown)} min de lecture</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="media" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ImageIcon className="h-5 w-5" />
                Image principale
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {form.image_url ? (
                <div className="space-y-4">
                  <img
                    src={form.image_url}
                    alt={form.image_alt}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={() => setForm(prev => ({ ...prev, image_url: '', image_alt: '' }))}
                      className="flex items-center gap-2"
                    >
                      <X className="h-4 w-4" />
                      Supprimer
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <ImageIcon className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground mb-4">
                    Glissez une image ici ou cliquez pour sélectionner
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleImageUpload(file);
                    }}
                    className="hidden"
                    id="image-upload"
                  />
                  <Button
                    variant="outline"
                    onClick={() => document.getElementById('image-upload')?.click()}
                    disabled={uploading}
                    className="flex items-center gap-2"
                  >
                    {uploading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Upload className="h-4 w-4" />
                    )}
                    {uploading ? 'Upload...' : 'Sélectionner une image'}
                  </Button>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="image_alt">Texte alternatif de l'image</Label>
                <Input
                  id="image_alt"
                  value={form.image_alt}
                  onChange={(e) => setForm(prev => ({ ...prev, image_alt: e.target.value }))}
                  placeholder="Description de l'image pour l'accessibilité"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seo" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Optimisation SEO
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="meta_title">Titre SEO</Label>
                <Input
                  id="meta_title"
                  value={form.meta_title}
                  onChange={(e) => setForm(prev => ({ ...prev, meta_title: e.target.value }))}
                  placeholder="Titre optimisé pour les moteurs de recherche"
                />
                <p className="text-xs text-muted-foreground">
                  {form.meta_title.length}/60 caractères recommandés
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="meta_description">Description SEO</Label>
                <Textarea
                  id="meta_description"
                  value={form.meta_description}
                  onChange={(e) => setForm(prev => ({ ...prev, meta_description: e.target.value }))}
                  placeholder="Description qui apparaîtra dans les résultats de recherche"
                  rows={3}
                />
                <p className="text-xs text-muted-foreground">
                  {form.meta_description.length}/160 caractères recommandés
                </p>
              </div>

              <div className="space-y-2">
                <Label>Mots-clés SEO</Label>
                <div className="flex gap-2">
                  <Input
                    value={newKeyword}
                    onChange={(e) => setNewKeyword(e.target.value)}
                    placeholder="Ajouter un mot-clé"
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addKeyword())}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={addKeyword}
                    className="flex items-center gap-2"
                  >
                    <Plus className="h-4 w-4" />
                    Ajouter
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {form.meta_keywords.map((keyword) => (
                    <Badge key={keyword} variant="secondary" className="flex items-center gap-1">
                      {keyword}
                      <button
                        onClick={() => removeKeyword(keyword)}
                        className="ml-1 hover:text-destructive"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Paramètres de l'article
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="category">Catégorie</Label>
                <select
                  id="category"
                  value={form.category}
                  onChange={(e) => setForm(prev => ({ ...prev, category: e.target.value }))}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                >
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label>Tags</Label>
                <div className="flex gap-2">
                  <Input
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="Ajouter un tag"
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={addTag}
                    className="flex items-center gap-2"
                  >
                    <Plus className="h-4 w-4" />
                    Ajouter
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {form.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="flex items-center gap-1">
                      <Hash className="h-3 w-3" />
                      {tag}
                      <button
                        onClick={() => removeTag(tag)}
                        className="ml-1 hover:text-destructive"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div>
                  <h4 className="font-medium flex items-center gap-2">
                    <Lock className="h-4 w-4" />
                    Article VIP
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Réservé aux utilisateurs connectés uniquement
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={form.is_vip_only}
                  onChange={(e) => setForm(prev => ({ ...prev, is_vip_only: e.target.checked }))}
                  className="w-4 h-4"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {renderPreview()}
    </div>
  );
}