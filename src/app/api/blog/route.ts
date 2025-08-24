import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const search = searchParams.get('search') || '';

    const skip = (page - 1) * limit;

    // Construire la requête de recherche
    const where = {
      published: true,
      ...(search && {
        OR: [
          { title: { contains: search } },
          { content: { contains: search } },
          { excerpt: { contains: search } }
        ]
      })
    };



    // Récupérer les articles
    const [articles, total] = await Promise.all([
      prisma.article.findMany({
        where,
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
        },
        skip,
        take: limit
      }),
      prisma.article.count({ where })
    ]);

    const totalPages = Math.ceil(total / limit);

    return NextResponse.json({
      articles,
      pagination: {
        page,
        limit,
        total,
        pages: totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1
      }
    });

  } catch (error) {
    console.error('Erreur lors de la récupération des articles:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
