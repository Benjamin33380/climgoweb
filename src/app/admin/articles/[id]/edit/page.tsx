'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArticleEditor } from '@/components/admin/ArticleEditor';
import { useAdminAuth } from '@/hooks/useAdminAuth';

interface Article {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  imageUrl: string | null;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  author: {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
  };
}

interface ArticleFormData {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  imageUrl: string;
  published: boolean;
}

export default function EditArticlePage() {
  const { user, loading: authLoading, isAdmin } = useAdminAuth();
  const router = useRouter();
  const params = useParams();
  const articleId = params.id as string;
  
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState<Article | null>(null);
  const [error, setError] = useState('');

  // Debug: Afficher l'état de l'authentification
  console.log('🔐 [EditArticlePage] État auth:', { user, authLoading, isAdmin });

  // Charger l'article au montage du composant
  useEffect(() => {
    // Attendre que l'authentification soit vérifiée
    if (authLoading) return;
    
    // Vérifier que l'utilisateur est admin
    if (!isAdmin) {
      console.log('🔐 [EditArticlePage] Utilisateur non admin, redirection...');
      router.push('/admin/login');
      return;
    }
    
    if (articleId) {
      fetchArticle();
    }
  }, [articleId, authLoading, isAdmin, router]); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchArticle = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/admin/articles/${articleId}`);
      
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération de l\'article');
      }

      const data = await response.json();
      const fetchedArticle = data.article;
      
      setArticle(fetchedArticle);
    } catch (error) {
      console.error('Erreur lors du chargement de l\'article:', error);
      setError('Erreur lors du chargement de l\'article');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (data: ArticleFormData) => {
    if (!isAdmin) {
      throw new Error('Vous devez être administrateur pour modifier un article');
    }

    try {
      const articleData = {
        title: data.title.trim(),
        slug: data.slug.trim(),
        excerpt: data.excerpt.trim() || null,
        content: data.content.trim(),
        imageUrl: data.imageUrl || null,
        published: data.published
      };

      const response = await fetch(`/api/admin/articles/${articleId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(articleData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erreur lors de la sauvegarde');
      }

      // Rediriger vers la liste des articles
      router.push('/admin/articles');
    } catch (error) {
      throw error;
    }
  };

  const handleCancel = () => {
    router.push('/admin/articles');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Chargement de l'article...</div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            {error || 'Article non trouvé'}
          </h1>
          <button
            onClick={() => router.push('/admin/articles')}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Retour à la liste
          </button>
        </div>
      </div>
    );
  }

  // Préparer les données initiales pour l'éditeur
  const initialData: ArticleFormData = {
    title: article.title,
    slug: article.slug,
    excerpt: article.excerpt || '',
    content: article.content,
    imageUrl: article.imageUrl || '',
    published: article.published
  };

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Modifier l'article</h1>
        <p className="text-muted-foreground mt-2">
          Modifiez le contenu de votre article avec l'éditeur Markdown
        </p>
      </div>

      <ArticleEditor
        initialData={initialData}
        onSave={handleSave}
        onCancel={handleCancel}
        isEditing={true}
        loading={false}
      />
    </div>
  );
} 