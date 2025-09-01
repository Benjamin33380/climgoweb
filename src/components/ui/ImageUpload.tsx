'use client';

import { useState, useCallback } from 'react';
import { Upload, X, Image as ImageIcon, Loader2 } from 'lucide-react';
import { Button } from './button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface ImageUploadProps {
  value?: string;
  onChange: (value: string) => void;
  onRemove?: () => void;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
}

export function ImageUpload({
  value,
  onChange,
  onRemove,
  disabled,
  className,
  placeholder = "Glissez une image ici ou cliquez pour sélectionner"
}: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleUpload = useCallback(async (file: File) => {
    if (!file) return;

    // Validation du fichier
    if (!file.type.startsWith('image/')) {
      alert('Veuillez sélectionner une image valide');
      return;
    }

    if (file.size > 5 * 1024 * 1024) { // 5MB max
      alert('L\'image doit faire moins de 5MB');
      return;
    }

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append('image', file);

      console.log('🚀 Début de l\'upload de l\'image...');
      
      const response = await fetch('/api/admin/upload-image', {
        method: 'POST',
        body: formData,
      });

      console.log('📡 Réponse de l\'API:', response.status, response.statusText);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('❌ Erreur API:', errorData);
        throw new Error(`Échec de l'upload: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log('✅ Upload réussi:', data);
      
      if (data.secure_url) {
        onChange(data.secure_url);
        console.log('🖼️ URL de l\'image mise à jour:', data.secure_url);
      } else {
        throw new Error('URL de l\'image manquante dans la réponse');
      }
    } catch (error) {
      console.error('❌ Erreur upload:', error);
      alert(`Erreur lors de l'upload de l'image: ${error instanceof Error ? error.message : 'Erreur inconnue'}`);
    } finally {
      setIsUploading(false);
    }
  }, [onChange]);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleUpload(e.dataTransfer.files[0]);
    }
  }, [handleUpload]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleUpload(e.target.files[0]);
    }
  }, [handleUpload]);

  const handleRemove = useCallback(() => {
    onChange('');
    onRemove?.();
  }, [onChange, onRemove]);

  return (
    <div className={cn('space-y-4', className)}>
      {/* Zone d'upload */}
      <div
        className={cn(
          'relative border-2 border-dashed rounded-lg p-6 text-center transition-colors',
          dragActive ? 'border-primary bg-primary/5' : 'border-border',
          disabled && 'opacity-50 cursor-not-allowed'
        )}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
          disabled={disabled || isUploading}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />

        {isUploading ? (
          <div className="flex flex-col items-center space-y-2">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-sm text-muted-foreground">Upload en cours...</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-primary h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
            </div>
          </div>
        ) : value ? (
          <div className="space-y-2">
            <div className="relative inline-block">
              <Image
                src={value}
                alt="Aperçu"
                className="max-w-full h-32 object-cover rounded-lg shadow-lg"
                width={1200}
                height={630}
                onError={(e) => {
                  console.error('Erreur de chargement de l\'image:', value);
                  e.currentTarget.style.display = 'none';
                }}
              />
              <Button
                type="button"
                variant="destructive"
                size="sm"
                className="absolute -top-2 -right-2 h-6 w-6 p-0 rounded-full shadow-lg"
                onClick={handleRemove}
                disabled={disabled}
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                ✅ Image uploadée avec succès
              </p>
              <p className="text-xs text-muted-foreground">
                Cliquez pour changer l'image
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-2">
            <ImageIcon className="h-8 w-8 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">{placeholder}</p>
            <p className="text-xs text-muted-foreground">
              PNG, JPG, GIF jusqu'à 5MB
            </p>
          </div>
        )}
      </div>

      {/* Bouton d'upload alternatif */}
      {!value && !isUploading && (
        <div className="flex justify-center">
          <Button
            type="button"
            variant="outline"
            disabled={disabled}
            onClick={() => (document.querySelector('input[type="file"]') as HTMLInputElement)?.click()}
          >
            <Upload className="h-4 w-4 mr-2" />
            Sélectionner une image
          </Button>
        </div>
      )}

      {/* URL de l'image (pour debug) */}
      {value && (
        <div className="text-xs text-muted-foreground break-all">
          <strong>URL:</strong> {value}
        </div>
      )}
    </div>
  );
} 