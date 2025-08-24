import { Metadata, Viewport } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

// Fonction pour extraire les mots en gras du contenu markdown
function extractBoldKeywords(content: string): string[] {
  // Regex pour trouver les mots en **gras** ou __gras__
  const boldPattern = /\*\*(.*?)\*\*|__(.*?)__/g;
  const keywords: string[] = [];
  
  let match;
  while ((match = boldPattern.exec(content)) !== null) {
    const keyword = match[1] || match[2]; // match[1] pour **, match[2] pour __
    if (keyword && !keywords.includes(keyword.toLowerCase())) {
      keywords.push(keyword.toLowerCase());
    }
  }
  
  // Limiter à 10 keywords maximum pour éviter le spam
  return keywords.slice(0, 10);
}

// Fonction pour récupérer les métadonnées de l'article
async function getArticleMetadata(slug: string) {
  try {
    const article = await prisma.article.findUnique({
      where: { slug, published: true },
      select: {
        title: true,
        excerpt: true,
        content: true, // Ajout du contenu pour extraire les keywords
        imageUrl: true,
        createdAt: true,
        admin: {
          select: {
            name: true
          }
        }
      }
    });

    if (!article) {
      return null;
    }

    return article;
  } catch (error) {
    console.error('Erreur lors de la récupération des métadonnées:', error);
    return null;
  } finally {
    await prisma.$disconnect();
  }
}

// Génération des métadonnées dynamiques
export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleMetadata(slug);

  if (!article) {
    return {
      title: 'Article non trouvé - ClimGo',
      description: 'L\'article que vous recherchez n\'existe pas ou n\'est pas publié.'
    };
  }

  const title = `${article.title} - Blog ClimGo`;
  const description = article.excerpt || 'Découvrez cet article sur le blog ClimGo';
  const image = article.imageUrl || 'https://www.climgo.fr/logo.png';
  const url = `https://climgo.fr/blog/${slug}`;
  const publishedTime = article.createdAt.toISOString();
  const author = article.admin.name;
  
  // Extraire les keywords des mots en gras
  const boldKeywords = extractBoldKeywords(article.content);
  const defaultKeywords = ['chauffage', 'climatisation', 'maintenance', 'blog', 'conseils'];
  const allKeywords = [...boldKeywords, ...defaultKeywords].slice(0, 15); // Max 15 keywords

  return {
    title,
    description,
    authors: [{ name: author }],
    creator: author,
    publisher: 'ClimGo',
    keywords: allKeywords,
    
    // Open Graph
    openGraph: {
      type: 'article',
      title,
      description,
      url,
      siteName: 'ClimGo',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      locale: 'fr_FR',
      publishedTime,
      authors: [author],
    },
    
    // Twitter
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@climgo',
      site: '@climgo',
    },
    
    // Canonical
    alternates: {
      canonical: url,
    },
    
    // Autres métadonnées
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    // Schema.org structured data
    other: {
      'article:published_time': publishedTime,
      'article:author': author,
      'article:section': 'Blog',
      'article:tag': allKeywords,
    },
  };
}

// Configuration du viewport
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f0f0f' },
  ],
};

// Génération des paramètres statiques (optionnel, pour le SSG)
export async function generateStaticParams() {
  try {
    const articles = await prisma.article.findMany({
      where: { published: true },
      select: { slug: true }
    });

    return articles.map((article) => ({
      slug: article.slug,
    }));
  } catch (error) {
    console.error('Erreur lors de la génération des paramètres statiques:', error);
    return [];
  } finally {
    await prisma.$disconnect();
  }
}

export default async function ArticleLayout({ children, params }: LayoutProps) {
  const { slug } = await params;
  
  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://climgo.fr/blog/${slug}`
            },
            "headline": "Article ClimGo",
            "description": "Article du blog ClimGo",
            "image": "https://climgo.fr/logo.png",
            "author": {
              "@type": "Organization",
              "name": "ClimGo"
            },
            "publisher": {
              "@type": "Organization",
              "name": "ClimGo",
              "logo": {
                "@type": "ImageObject",
                "url": "https://climgo.fr/logo.png"
              }
            },
            "datePublished": new Date().toISOString(),
            "dateModified": new Date().toISOString()
          })
        }}
      />
      {children}
    </>
  );
} 