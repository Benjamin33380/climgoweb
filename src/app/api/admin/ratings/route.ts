import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Récupérer tous les ratings
export async function GET() {
  try {
    const ratings = await prisma.rating.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        author: {
          select: {
            firstName: true,
            lastName: true,
            email: true
          }
        },
        article: {
          select: {
            title: true,
            slug: true
          }
        }
      }
    });

    return NextResponse.json(ratings);
  } catch (error) {
    console.error('Erreur lors de la récupération des ratings:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des ratings' },
      { status: 500 }
    );
  }
} 