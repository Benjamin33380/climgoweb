import { NextRequest, NextResponse } from 'next/server';
import { authenticateToken } from '@/lib/auth';
import { uploadImage } from '@/lib/cloudinary';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
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

    // Récupérer le fichier depuis FormData
    const formData = await request.formData();
    const file = formData.get('image') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'Aucun fichier fourni' },
        { status: 400 }
      );
    }

    // Validation du fichier
    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { error: 'Le fichier doit être une image' },
        { status: 400 }
      );
    }

    if (file.size > 5 * 1024 * 1024) { // 5MB max
      return NextResponse.json(
        { error: 'L\'image doit faire moins de 5MB' },
        { status: 400 }
      );
    }

    // Convertir le fichier en buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    // Upload vers Cloudinary
    const result = await uploadImage(buffer, {
      folder: 'climgo-articles',
      transformation: [
        { width: 1200, height: 630, crop: 'fill', quality: 'auto' }
      ]
    });

    return NextResponse.json({
      success: true,
      message: 'Image uploadée avec succès',
      ...result
    });

  } catch (error) {
    console.error('Erreur lors de l\'upload:', error);
    return NextResponse.json(
      { 
        error: 'Erreur lors de l\'upload de l\'image',
        details: error instanceof Error ? error.message : 'Erreur inconnue'
      },
      { status: 500 }
    );
  }
} 