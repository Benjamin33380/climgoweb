import { Metadata } from 'next';
import { prisma } from '@/lib/prisma';

interface BlogLayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogLayoutProps): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    // Récupérer l'article depuis la base de données
    const article = await prisma.article.findUnique({
      where: { slug },
      select: {
        title: true,
        excerpt: true,
        content: true,
        imageUrl: true
      }
    });

    if (!article) {
      return {
        title: 'Article non trouvé - Blog ClimGO',
        description: 'L\'article demandé n\'existe pas',
      };
    }

    // Extraire les mots en gras du contenu markdown
    const extractBoldKeywords = (content: string): string[] => {
      const boldMatches = content.match(/\*\*(.*?)\*\*/g);
      if (!boldMatches) return [];
      
      return boldMatches
        .map(match => match.replace(/\*\*/g, '').trim())
        .filter(word => word.length > 2) // Filtrer les mots trop courts
        .slice(0, 10); // Limiter à 10 mots-clés
    };

    const keywords = extractBoldKeywords(article.content);
    const metaTitle = article.title;
    const metaDescription = article.excerpt || article.content.substring(0, 160);
    const ogImage = article.imageUrl || '/images/og/blog-default.jpg';

    return {
      title: metaTitle,
      description: metaDescription,
      keywords: keywords.join(', '),
      authors: [{ name: 'ClimGO' }],
      creator: 'ClimGO',
      publisher: 'ClimGO',
      robots: 'index, follow',
      openGraph: {
        title: metaTitle,
        description: metaDescription,
        type: 'article',
        url: `https://www.climgo.fr/blog/${slug}`,
        siteName: 'ClimGO',
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: metaTitle,
          }
        ],
        locale: 'fr_FR',
      },
      twitter: {
        card: 'summary_large_image',
        title: metaTitle,
        description: metaDescription,
        images: [ogImage],
        creator: '@climgo',
        site: '@climgo',
      },
      alternates: {
        canonical: `https://www.climgo.fr/blog/${slug}`,
      },
      other: {
        'article:published_time': new Date().toISOString(),
        'article:section': 'Blog',
        'article:tag': keywords,
      }
    };
    
  } catch (error) {
    console.error('Erreur lors de la récupération des métadonnées:', error);
    
    // Métadonnées par défaut en cas d'erreur
    return {
      title: 'Blog - ClimGO',
      description: 'Découvrez nos articles sur le chauffage, la climatisation et la maintenance',
      keywords: 'chauffage, climatisation, maintenance, blog, conseils',
      openGraph: {
        title: 'Blog - ClimGO',
        description: 'Découvrez nos articles sur le chauffage, la climatisation et la maintenance',
        type: 'website',
        images: []
      }
    };
  }
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return <>
  <main className="px-4 py-20">
    {children}
  </main>
  </>;
} 