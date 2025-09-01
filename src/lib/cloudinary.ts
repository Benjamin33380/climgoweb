import { v2 as cloudinary } from 'cloudinary';

// Configuration Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;

// Types pour les réponses Cloudinary
export interface CloudinaryUploadResult {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  bytes: number;
}

// Fonction d'upload d'image
export async function uploadImage(
  file: Buffer | string,
  options: {
    folder?: string;
    transformation?: any[]; // eslint-disable-line @typescript-eslint/no-explicit-any
    public_id?: string;
  } = {}
): Promise<CloudinaryUploadResult> {
  try {
    const uploadOptions = {
      folder: options.folder || 'climgo-articles',
      transformation: options.transformation || [
        { width: 1200, height: 630, crop: 'fill', quality: 'auto' }
      ],
      public_id: options.public_id,
      resource_type: 'image' as const,
    };

    let result;
    
    if (typeof file === 'string') {
      // Upload depuis une URL
      result = await cloudinary.uploader.upload(file, uploadOptions);
    } else {
      // Upload depuis un buffer (fichier) - Utiliser une Promise pour gérer l'upload_stream
      result = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          uploadOptions,
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          }
        );
        
        uploadStream.end(file);
      });
    }

    if (!result) {
      throw new Error('Aucun résultat de l\'upload');
    }

    // Type assertion pour le résultat Cloudinary
    const cloudinaryResult = result as any; // eslint-disable-line @typescript-eslint/no-explicit-any

    return {
      public_id: cloudinaryResult.public_id,
      secure_url: cloudinaryResult.secure_url,
      width: cloudinaryResult.width,
      height: cloudinaryResult.height,
      format: cloudinaryResult.format,
      resource_type: cloudinaryResult.resource_type,
      bytes: cloudinaryResult.bytes,
    };
  } catch (error) {
    console.error('Erreur lors de l\'upload Cloudinary:', error);
    throw new Error(`Échec de l'upload de l'image: ${error instanceof Error ? error.message : 'Erreur inconnue'}`);
  }
}

// Fonction de suppression d'image
export async function deleteImage(publicId: string): Promise<void> {
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error('Erreur lors de la suppression Cloudinary:', error);
    // Ne pas faire échouer l'opération principale
  }
}

// Fonction pour obtenir une URL optimisée
export function getOptimizedImageUrl(
  publicId: string,
  options: {
    width?: number;
    height?: number;
    crop?: string;
    quality?: string;
    format?: string;
  } = {}
): string {
  const transformation = [
    { width: options.width || 1200, height: options.height || 630, crop: options.crop || 'fill' },
    { quality: options.quality || 'auto' },
    { format: options.format || 'auto' }
  ];

  return cloudinary.url(publicId, {
    transformation,
    secure: true,
  });
} 