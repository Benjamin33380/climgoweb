'use client';

import { useState, useEffect } from 'react';
import BlogCard from '@/components/BlogCard';
import BlogSearch from '@/components/BlogSearch';
import BlogPagination from '@/components/BlogPagination';

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  imageUrl: string | null;
  published: boolean;
  createdAt: string;
  _count: {
    comments: number;
    ratings: number;
  };
}

export default function BlogPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const articlesPerPage = 9;

  useEffect(() => {
    fetchArticles();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = articles.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredArticles(filtered);
      setCurrentPage(1);
    } else {
      setFilteredArticles(articles);
      setCurrentPage(1);
    }
  }, [searchQuery, articles]);

  useEffect(() => {
    const total = Math.ceil(filteredArticles.length / articlesPerPage);
    setTotalPages(total);
  }, [filteredArticles]);

  const fetchArticles = async () => {
    try {
      const response = await fetch('/api/blog');
      if (response.ok) {
        const data = await response.json();
        // L'API retourne { articles, pagination }
        const articles = data.articles || [];
        setArticles(articles);
        setFilteredArticles(articles);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des articles:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Chargement...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Blog ClimGO - Conseils Chauffage Climatisation Gironde
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos conseils, actualités et guides sur le chauffage, 
              la climatisation et la maintenance de vos systèmes
            </p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="bg-card border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <BlogSearch onSearch={setSearchQuery} currentQuery={searchQuery} />
        </div>
      </div>

      {/* Articles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {searchQuery ? 'Aucun article trouvé' : 'Aucun article disponible'}
            </h2>
            <p className="text-muted-foreground">
              {searchQuery 
                ? 'Essayez de modifier vos critères de recherche.'
                : 'Revenez bientôt pour découvrir nos premiers articles !'
              }
            </p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="mt-4 text-primary hover:text-primary/80 underline"
              >
                Effacer la recherche
              </button>
            )}
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">
              Nos Articles & Conseils
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles
                .slice((currentPage - 1) * articlesPerPage, currentPage * articlesPerPage)
                .map((article) => (
                  <BlogCard key={article.id} article={article} />
                ))}
            </div>
            
            <BlogPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </div>
    </div>
  );
}
