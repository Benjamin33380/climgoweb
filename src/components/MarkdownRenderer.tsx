import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
}

export default async function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // Traitement du markdown avec remark
  const processedContent = await remark()
    .use(remarkGfm) // Support GitHub Flavored Markdown
    .use(html) // Conversion en HTML
    .process(content);

  const htmlContent = processedContent.toString();

  return (
    <div 
      className="prose prose-lg max-w-none"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
} 