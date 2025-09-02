'use client';

import { useState } from 'react';
import BlogSearch from './BlogSearch';
import { AnimatedBlogTitle } from './AnimatedBlogTitle';

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

interface BlogHeroWrapperProps {
  articles: Article[];
}

export default function BlogHeroWrapper({ articles }: BlogHeroWrapperProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Pour l'instant, on ne fait que mettre à jour l'état local
  };

  return (
    <AnimatedBlogTitle>
      <div className="max-w-2xl mx-auto">
        <BlogSearch onSearch={handleSearch} currentQuery={searchQuery} />
      </div>
    </AnimatedBlogTitle>
  );
}
