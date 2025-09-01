'use client';

import { useEffect, useState } from 'react';
import { parseMarkdown } from '@/lib/markdown';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

/**
 * Composant pour afficher le contenu markdown en HTML
 * Utilise dangerouslySetInnerHTML de manière sécurisée avec notre fonction parseMarkdown
 */
export function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
  const [parsedContent, setParsedContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const parseContent = async () => {
      if (!content) {
        setParsedContent('');
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        const html = await parseMarkdown(content);
        setParsedContent(html);
      } catch (error) {
        console.error('Erreur lors du parsing du markdown:', error);
        setParsedContent(content); // Fallback au contenu brut
      } finally {
        setIsLoading(false);
      }
    };

    parseContent();
  }, [content]);

  if (isLoading) {
    return (
      <div className={`prose prose-lg max-w-none ${className}`}>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
        </div>
      </div>
    );
  }

  if (!parsedContent) {
    return null;
  }

  return (
    <div 
      className={`prose prose-lg max-w-none ${className}`}
      dangerouslySetInnerHTML={{
        __html: parsedContent
      }}
    />
  );
}

export default MarkdownRenderer; 