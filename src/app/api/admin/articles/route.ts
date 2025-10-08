import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { authenticateToken } from '@/lib/auth';
import { EmailService } from '@/lib/emailService';

// GET - Lister tous les articles avec pagination et filtres
export async function GET(request: NextRequest) {
  console.log('🔍🔍🔍 API ARTICLES - GET appelé 🔍🔍🔍');
  try {
    // Vérifier l'authentification admin
    const token = request.cookies.get('auth-token')?.value;
    if (!token) {
      return NextResponse.json(
        { error: 'Token manquant' },
        { status: 401 }
      );
    }

    const decoded = await authenticateToken(token);
    if (!decoded) {
      return NextResponse.json(
        { error: 'Token invalide' },
        { status: 401 }
      );
    }

    // Vérifier que l'utilisateur est admin
    const adminUser = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { role: true }
    });

    if (!adminUser || adminUser.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Accès refusé' },
        { status: 403 }
      );
    }

    // Récupérer les paramètres de requête
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const search = searchParams.get('search') || '';
    const status = searchParams.get('status') || 'all';
    const sortBy = searchParams.get('sortBy') || 'createdAt';
    const sortOrder = searchParams.get('sortOrder') || 'desc';

    // Construire les filtres
    const where: any = {}; // eslint-disable-line @typescript-eslint/no-explicit-any
    
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { content: { contains: search, mode: 'insensitive' } },
        { excerpt: { contains: search, mode: 'insensitive' } }
      ];
    }

    if (status !== 'all') {
      where.published = status === 'published';
    }

    // Construire le tri
    const orderBy: any = {}; // eslint-disable-line @typescript-eslint/no-explicit-any
    orderBy[sortBy] = sortOrder;

    // Compter le total d'articles
    const total = await prisma.article.count({ where });

    // Récupérer les articles avec pagination
    console.log('🔍 Tentative de récupération des articles...');
    
    // Récupérer d'abord les articles sans la relation author
    const articles = await prisma.article.findMany({
      where,
      orderBy: orderBy,
      skip: (page - 1) * limit,
      take: limit,
      select: {
        id: true,
        title: true,
        slug: true,
        content: true,
        excerpt: true,
        imageUrl: true,
        published: true,
        authorId: true,
        createdAt: true,
        updatedAt: true,
        _count: {
          select: {
            comments: true
          }
        }
      }
    });

    // Récupérer les auteurs séparément et les joindre manuellement
    const authorIds = [...new Set(articles.map(a => a.authorId))];
    const authors = await prisma.user.findMany({
      where: {
        id: { in: authorIds }
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true
      }
    });

    // Créer un map des auteurs pour un accès rapide
    const authorMap = new Map(authors.map(author => [author.id, author]));

    // Traiter les articles pour ajouter les informations d'auteur
    const processedArticles = articles.map(article => {
      const author = authorMap.get(article.authorId) || {
        id: article.authorId,
        email: 'Auteur inconnu',
        firstName: 'Auteur',
        lastName: 'Inconnu'
      };
      
      return {
        ...article,
        author
      };
    });

    console.log(`✅ ${articles.length} articles récupérés avec Prisma`);
    console.log('📊 Premier article:', articles[0] ? JSON.stringify(articles[0], null, 2) : 'Aucun article');

    const totalPages = Math.ceil(total / limit);

    return NextResponse.json({
      articles: processedArticles,
      pagination: {
        page,
        limit,
        total,
        totalPages
      }
    });

  } catch (error) {
    console.error('Erreur lors de la récupération des articles:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des articles' },
      { status: 500 }
    );
  }
}

// POST - Créer un nouvel article
export async function POST(request: NextRequest) {
  console.log('🚀🚀🚀 API ARTICLES - POST appelé 🚀🚀🚀');
  try {
    console.log('🚀 POST /api/admin/articles - Début de la requête');
    
    // Test de connexion à la base de données
    try {
      console.log('🔌 Test de connexion à la DB...');
      await prisma.$connect();
      console.log('✅ Connexion DB réussie');
    } catch (dbError) {
      console.error('❌ Erreur de connexion DB:', dbError);
      return NextResponse.json(
        { error: 'Erreur de connexion à la base de données' },
        { status: 500 }
      );
    }
    
    // Vérifier l'authentification admin
    const token = request.cookies.get('auth-token')?.value;
    console.log('🔑 Token reçu:', token ? 'OUI' : 'NON');
    
    if (!token) {
      console.log('❌ Token manquant');
      return NextResponse.json(
        { error: 'Token manquant' },
        { status: 401 }
      );
    }

    const decoded = await authenticateToken(token);
    console.log('🔓 Token décodé:', decoded ? 'OUI' : 'NON');
    console.log('👤 User ID:', decoded?.userId);
    
    if (!decoded) {
      console.log('❌ Token invalide');
      return NextResponse.json(
        { error: 'Token invalide' },
        { status: 401 }
      );
    }

    // Vérifier que l'utilisateur est admin
    const adminUser = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { role: true }
    });
    
    console.log('👑 Vérification admin:', adminUser?.role);
    
    if (!adminUser || adminUser.role !== 'ADMIN') {
      console.log('❌ Accès refusé - Role:', adminUser?.role);
      return NextResponse.json(
        { error: 'Accès refusé' },
        { status: 403 }
      );
    }

    // Récupérer et logger les données reçues
    const body = await request.json();
    console.log('📥 Données reçues:', JSON.stringify(body, null, 2));
    
    const { title, content, excerpt, imageUrl, published, slug } = body;

    // Validation des données avec logs
    console.log('✅ Validation des données:');
    console.log('  - title:', title ? 'OUI' : 'NON');
    console.log('  - content:', content ? 'OUI' : 'NON');
    console.log('  - slug:', slug ? 'OUI' : 'NON');
    console.log('  - excerpt:', excerpt || 'NON');
    console.log('  - imageUrl:', imageUrl || 'NON');
    console.log('  - published:', published);

    if (!title || !content || !slug) {
      console.log('❌ Données manquantes');
      return NextResponse.json(
        { error: 'Titre, contenu et slug sont requis' },
        { status: 400 }
      );
    }

    // Vérifier que le slug est unique
    console.log('🔍 Vérification unicité du slug:', slug);
    const existingArticle = await prisma.article.findUnique({
      where: { slug }
    });

    if (existingArticle) {
      console.log('❌ Slug déjà existant');
      return NextResponse.json(
        { error: 'Un article avec ce slug existe déjà' },
        { status: 400 }
      );
    }

    // Préparer les données pour Prisma
    const articleData = {
      title: title.trim(),
      slug: slug.trim(),
      content: content.trim(),
      excerpt: excerpt?.trim() || null,
      imageUrl: imageUrl || null,
      published: published || false,
      authorId: decoded.userId
    };
    
    console.log('📝 Données Prisma:', JSON.stringify(articleData, null, 2));

    // Créer l'article
    console.log('💾 Tentative de création dans la DB...');
    const article = await prisma.article.create({
      data: articleData,
      include: {
        author: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true
          }
        }
      }
    });

    console.log('✅ Article créé avec succès dans la DB:', JSON.stringify(article, null, 2));
    console.log('🔍 Vérification published:', article.published);

    // Envoyer une notification par email si l'article est publié
    if (article.published) {
      console.log('🚀🚀🚀 ARTICLE PUBLIÉ - ENVOI EMAIL DÉMARRÉ 🚀🚀🚀');
      try {
        console.log('📧 Envoi de notification par email...');
        const emailResult = await EmailService.sendArticleNotification(
          article.title,
          article.excerpt || article.content.substring(0, 200) + '...',
          article.slug
        );
        
        console.log('📧 Résultat envoi email:', emailResult);
        
        if (emailResult.success > 0) {
          console.log(`✅ ${emailResult.success} notifications envoyées avec succès`);
        }
        if (emailResult.failed > 0) {
          console.log(`⚠️ ${emailResult.failed} échecs d'envoi`);
        }
      } catch (emailError) {
        console.error('❌ Erreur lors de l\'envoi des notifications:', emailError);
        // Ne pas faire échouer la création de l'article si l'email échoue
      }
    } else {
      console.log('❌ Article non publié, pas d\'envoi d\'email');
    }

    return NextResponse.json({
      message: 'Article créé avec succès',
      article
    }, { status: 201 });

  } catch (error) {
    console.error('💥 ERREUR lors de la création de l\'article:', error);
    console.error('💥 Stack trace:', error instanceof Error ? error.stack : 'Pas de stack trace');
    return NextResponse.json(
      { error: 'Erreur lors de la création de l\'article', details: error instanceof Error ? error.message : 'Erreur inconnue' },
      { status: 500 }
    );
  }
}