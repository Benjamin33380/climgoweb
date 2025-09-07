import { prisma } from '@/lib/prisma';
import { cache } from '@/lib/cache';

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  imageUrl: string | null;
  createdAt: string;
}

interface Comment {
  id: string;
  content: string;
  author: {
    id: string;
    firstName: string | null;
    lastName: string | null;
    email: string;
  };
  isApproved: boolean;
  createdAt: string;
}

interface Rating {
  id: string;
  value: number;
  author: {
    id: string;
    firstName: string | null;
    lastName: string | null;
  };
  createdAt: string;
}

// Cache des articles pour le maillage interne (1 heure)
export async function getCachedArticles(): Promise<Article[]> {
  const cacheKey = 'blog:articles:all';
  const cached = cache.get<Article[]>(cacheKey);
  
  if (cached) {
    return cached;
  }

  const articles = await prisma.article.findMany({
    where: { published: true },
    select: {
      id: true,
      title: true,
      slug: true,
      excerpt: true,
      imageUrl: true,
      createdAt: true
    },
    orderBy: {
      createdAt: 'desc'
    },
    take: 20
  });

  const formattedArticles = articles.map(article => ({
    id: article.id,
    title: article.title,
    slug: article.slug,
    excerpt: article.excerpt,
    imageUrl: article.imageUrl,
    createdAt: article.createdAt?.toISOString() || new Date().toISOString()
  }));

  cache.set(cacheKey, formattedArticles, 3600000); // 1 heure
  return formattedArticles;
}

// Cache des commentaires d'un article (30 minutes)
export async function getCachedComments(articleId: string): Promise<Comment[]> {
  const cacheKey = `blog:comments:${articleId}`;
  const cached = cache.get<Comment[]>(cacheKey);
  
  if (cached) {
    return cached;
  }

  const comments = await prisma.comment.findMany({
    where: {
      articleId,
      isApproved: true
    },
    include: {
      author: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true
        }
      }
    },
    orderBy: {
      createdAt: 'desc'
    },
    take: 50
  });

  const formattedComments = comments.map(comment => ({
    id: comment.id,
    content: comment.content,
    author: {
      id: comment.author.id,
      firstName: comment.author.firstName,
      lastName: comment.author.lastName,
      email: comment.author.email
    },
    isApproved: comment.isApproved,
    createdAt: comment.createdAt.toISOString()
  }));

  cache.set(cacheKey, formattedComments, 1800000); // 30 minutes
  return formattedComments;
}

// Cache des ratings d'un article (30 minutes)
export async function getCachedRatings(articleId: string): Promise<Rating[]> {
  const cacheKey = `blog:ratings:${articleId}`;
  const cached = cache.get<Rating[]>(cacheKey);
  
  if (cached) {
    return cached;
  }

  const ratings = await prisma.rating.findMany({
    where: {
      articleId
    },
    include: {
      author: {
        select: {
          id: true,
          firstName: true,
          lastName: true
        }
      }
    },
    orderBy: {
      createdAt: 'desc'
    },
    take: 100
  });

  const formattedRatings = ratings.map(rating => ({
    id: rating.id,
    value: rating.value,
    author: {
      id: rating.author.id,
      firstName: rating.author.firstName,
      lastName: rating.author.lastName
    },
    createdAt: rating.createdAt.toISOString()
  }));

  cache.set(cacheKey, formattedRatings, 1800000); // 30 minutes
  return formattedRatings;
}

// Invalider le cache d'un article
export function invalidateArticleCache(articleId: string): void {
  cache.delete('blog:articles:all');
  cache.delete(`blog:comments:${articleId}`);
  cache.delete(`blog:ratings:${articleId}`);
}
