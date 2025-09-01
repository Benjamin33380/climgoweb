'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ImageUpload } from '@/components/ui/ImageUpload';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Save, 
  Eye, 
  EyeOff, 
  FileText, 
  Image as ImageIcon,
  Loader2 
} from 'lucide-react';
import dynamic from 'next/dynamic';
import MarkdownRenderer from '@/components/ui/MarkdownRenderer';
import Image from 'next/image';

// Import dynamique de l'éditeur Markdown pour éviter les erreurs SSR
const MDEditor = dynamic(
  () => import('@uiw/react-md-editor').then((mod) => mod.default),
  { ssr: false }
);

interface ArticleFormData {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  imageUrl: string;
  published: boolean;
}

interface ArticleEditorProps {
  initialData?: Partial<ArticleFormData>;
  onSave: (data: ArticleFormData) => Promise<void>;
  onCancel: () => void;
  isEditing?: boolean;
  loading?: boolean;
}

export function ArticleEditor({
  initialData,
  onSave,
  onCancel,
  isEditing = false,
  loading = false
}: ArticleEditorProps) {
  const [formData, setFormData] = useState<ArticleFormData>({
    title: initialData?.title || '',
    slug: initialData?.slug || '',
    content: initialData?.content || '',
    excerpt: initialData?.excerpt || '',
    imageUrl: initialData?.imageUrl || '',
    published: initialData?.published || false
  });

  const [activeTab, setActiveTab] = useState('edit');
  const [showPreview, setShowPreview] = useState(false);

  // Générer le slug automatiquement depuis le titre
  useEffect(() => {
    if (formData.title && !isEditing) {
      const baseSlug = formData.title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
      
      // Ajouter un timestamp pour garantir l'unicité
      const timestamp = Date.now().toString().slice(-6);
      const uniqueSlug = `${baseSlug}-${timestamp}`;
      
      setFormData(prev => ({ ...prev, slug: uniqueSlug }));
    }
  }, [formData.title, isEditing]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation des données avant envoi
    if (!formData.title.trim()) {
      alert('Le titre est requis');
      return;
    }
    
    if (!formData.content.trim()) {
      alert('Le contenu est requis');
      return;
    }
    
    if (!formData.slug.trim()) {
      alert('Le slug est requis');
      return;
    }
    
    console.log('📤 ArticleEditor - Données à envoyer via onSave:', JSON.stringify(formData, null, 2));
    
    // Appeler onSave avec les données (la page parent gère l'API)
    await onSave(formData);
  };

  const handleContentChange = (value?: string) => {
    setFormData(prev => ({ ...prev, content: value || '' }));
  };

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* En-tête avec titre et actions */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              {isEditing ? 'Modifier l\'article' : 'Nouvel article'}
            </h2>
            <p className="text-muted-foreground">
              {isEditing ? 'Modifiez votre article existant' : 'Créez un nouvel article pour votre blog'}
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={togglePreview}
              className="flex items-center gap-2"
            >
              {showPreview ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              {showPreview ? 'Masquer' : 'Aperçu'}
            </Button>
            
            <Button
              type="submit"
              disabled={loading || !formData.title || !formData.content}
              className="flex items-center gap-2"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Save className="h-4 w-4" />
              )}
              {loading ? 'Enregistrement...' : 'Enregistrer'}
            </Button>
            
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
            >
              Annuler
            </Button>
          </div>
        </div>



        {/* Onglets Édition/Prévisualisation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="edit" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Édition
            </TabsTrigger>
            <TabsTrigger value="preview" className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              Prévisualisation
            </TabsTrigger>
          </TabsList>

          <TabsContent value="edit" className="space-y-6">
            {/* Informations de base */}
            <Card>
              <CardHeader>
                <CardTitle>Informations de base</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Titre *</label>
                    <Input
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="Titre de l'article"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Slug *</label>
                    <div className="flex gap-2">
                      <Input
                        value={formData.slug}
                        onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                        placeholder="slug-de-l-article"
                        required
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          if (formData.title) {
                            const baseSlug = formData.title
                              .toLowerCase()
                              .normalize('NFD')
                              .replace(/[\u0300-\u036f]/g, '')
                              .replace(/[^a-z0-9\s-]/g, '')
                              .replace(/\s+/g, '-')
                              .replace(/-+/g, '-')
                              .trim();
                            
                            const timestamp = Date.now().toString().slice(-6);
                            const uniqueSlug = `${baseSlug}-${timestamp}`;
                            
                            setFormData(prev => ({ ...prev, slug: uniqueSlug }));
                          }
                        }}
                        disabled={!formData.title}
                      >
                        🔄 Régénérer
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Extrait</label>
                  <Textarea
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    placeholder="Résumé de l'article..."
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Image de l'article</label>
                  <ImageUpload
                    value={formData.imageUrl}
                    onChange={(url) => setFormData({ ...formData, imageUrl: url })}
                    placeholder="Glissez l'image de l'article ici"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="published"
                    checked={formData.published}
                    onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                    className="rounded"
                  />
                  <label htmlFor="published" className="text-sm font-medium">
                    Publier immédiatement
                  </label>
                </div>
              </CardContent>
            </Card>

            {/* Éditeur Markdown */}
            <Card>
              <CardHeader>
                <CardTitle>Contenu de l'article</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Utilisez la syntaxe Markdown pour formater votre contenu
                </p>
              </CardHeader>
              <CardContent>
                <div data-color-mode="light">
                  <MDEditor
                    value={formData.content}
                    onChange={handleContentChange}
                    height={500}
                    preview="live"
                    className="w-full"
                    hideToolbar={false}
                    visibleDragbar={true}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preview" className="space-y-6">
            {/* Prévisualisation de l'article */}
            <Card>
              <CardHeader>
                <CardTitle>Aperçu de l'article</CardTitle>
                <div className="flex items-center gap-2">
                  <Badge variant={formData.published ? "default" : "secondary"}>
                    {formData.published ? "Publié" : "Brouillon"}
                  </Badge>
                  {formData.imageUrl && (
                    <Badge variant="outline" className="flex items-center gap-1">
                      <ImageIcon className="h-3 w-3" />
                      Image
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {formData.title && (
                  <div className="mb-6">
                    <h1 className="text-3xl font-bold mb-4">{formData.title}</h1>
                    {formData.excerpt && (
                      <p className="text-lg text-muted-foreground italic mb-4">
                        {formData.excerpt}
                      </p>
                    )}
                    {formData.imageUrl && (
                      <Image
                        src={formData.imageUrl}
                        alt={formData.title}
                        width={1200}
                        height={630}
                        className="w-full h-64 object-cover rounded-lg mb-6"
                      />
                    )}
                  </div>
                )}

                {formData.content ? (
                  <MarkdownRenderer content={formData.content} />
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <FileText className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p>Aucun contenu à prévisualiser</p>
                    <p className="text-sm">Commencez à écrire dans l'onglet Édition</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </form>
    </div>
  );
} 