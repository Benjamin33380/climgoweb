'use client';

import { useState, useEffect } from 'react';
import BlogSearch from './BlogSearch';
import BlogCard from './BlogCard';

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

interface BlogSearchWrapperProps {
  articles: Article[];
}

export default function BlogSearchWrapper({ articles }: BlogSearchWrapperProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredArticles, setFilteredArticles] = useState<Article[]>(articles);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredArticles(articles);
    } else {
      const filtered = articles.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredArticles(filtered);
    }
  }, [searchQuery, articles]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleClear = () => {
    setSearchQuery('');
    setFilteredArticles(articles);
  };

  return (
    <>
      <div className="bg-card border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <BlogSearch onSearch={handleSearch} currentQuery={searchQuery} />
        </div>
      </div>

      {/* Affichage des articles filtrés */}
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
                onClick={handleClear}
                className="mt-4 text-primary hover:text-primary/80 underline"
              >
                Effacer la recherche
              </button>
            )}
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">
              {searchQuery ? `Résultats de recherche (${filteredArticles.length})` : 'Nos Articles & Conseils'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <BlogCard key={article.id} article={article} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
} 