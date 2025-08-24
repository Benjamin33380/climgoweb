import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { v2 as cloudinary } from 'cloudinary';

const prisma = new PrismaClient();

// Configuration Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Middleware pour vérifier le token JWT
function verifyToken(request: NextRequest) {
  const token = request.headers.get('authorization')?.replace('Bearer ', '');
  
  if (!token) {
    throw new Error('Token manquant');
  }

  try {
    return jwt.verify(token, process.env.JWT_SECRET!);
  } catch (error) {
    console.error('Erreur lors de la vérification du token:', error);
    throw new Error('Token invalide');
  }
}

// GET - Récupérer tous les articles
export async function GET(request: NextRequest) {
  try {
    verifyToken(request);

    const articles = await prisma.article.findMany({
      include: {
        admin: {
          select: {
            name: true,
            email: true
          }
        },
        _count: {
          select: {
            comments: true,
            ratings: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json(articles);
  } catch (error) {
    if (error instanceof Error && error.message.includes('Token')) {
      return NextResponse.json(
        { error: 'Non autorisé' },
        { status: 401 }
      );
    }
    
    console.error('Erreur lors de la récupération des articles:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// POST - Créer un nouvel article
export async function POST(request: NextRequest) {
  try {
    const decoded = verifyToken(request) as any; // eslint-disable-line @typescript-eslint/no-explicit-any
    
    const formData = await request.formData();
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const excerpt = formData.get('excerpt') as string;
    const image = formData.get('image') as File;
    const published = formData.get('published') === 'true';

    if (!title || !content) {
      return NextResponse.json(
        { error: 'Titre et contenu requis' },
        { status: 400 }
      );
    }

    // Générer le slug
    const slug = title
      .toLowerCase()
      .replace(/[éèê]/g, 'e')
      .replace(/[àâ]/g, 'a')
      .replace(/[ùû]/g, 'u')
      .replace(/[ôö]/g, 'o')
      .replace(/[îï]/g, 'i')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();

    let imageUrl = null;

    // Upload de l'image si fournie
    if (image) {
      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);
      
      const result = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          {
            folder: 'blog',
            transformation: [
              { width: 1200, height: 630, crop: 'fill' },
              { quality: 'auto' }
            ]
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        ).end(buffer);
      });

      imageUrl = (result as any).secure_url; // eslint-disable-line @typescript-eslint/no-explicit-any
    }

    // Créer l'article
    const article = await prisma.article.create({
      data: {
        title,
        content,
        slug,
        excerpt: excerpt || content.substring(0, 160),
        imageUrl,
        published,
        metaTitle: title,
        metaDesc: excerpt || content.substring(0, 160),
        adminId: decoded.id
      }
    });

    return NextResponse.json(article, { status: 201 });
  } catch (error) {
    if (error instanceof Error && error.message.includes('Token')) {
      return NextResponse.json(
        { error: 'Non autorisé' },
        { status: 401 }
      );
    }
    
    console.error('Erreur lors de la création de l\'article:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
} 