'use client'

import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  quality?: number
  city?: string
  service?: string
  sizes?: string
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
}

export default function OptimizedImage({
  src,
  alt,
  width = 800,
  height = 600,
  className = '',
  priority = false,
  quality = 85,
  city,
  service,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  placeholder = 'empty',
  blurDataURL
}: OptimizedImageProps) {
  
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Générer un alt text SEO-optimisé automatiquement
  const generateSEOAlt = (baseAlt: string) => {
    let optimizedAlt = baseAlt

    // Ajouter le contexte ville si disponible
    if (city && !optimizedAlt.toLowerCase().includes(city.toLowerCase())) {
      const cityName = city.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
      optimizedAlt += ` ${cityName}`
    }

    // Ajouter le contexte service si disponible
    if (service && !optimizedAlt.toLowerCase().includes(service.toLowerCase())) {
      const serviceName = service.replace(/-/g, ' ')
      optimizedAlt += ` ${serviceName}`
    }

    // Ajouter ClimGO si pas présent
    if (!optimizedAlt.toLowerCase().includes('climgo')) {
      optimizedAlt += ' - ClimGO'
    }

    return optimizedAlt
  }

  // Placeholder de base64 pour le blur
  const defaultBlurDataURL = blurDataURL || 
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='

  const optimizedAlt = generateSEOAlt(alt)

  // Gestion des erreurs de chargement
  const handleError = () => {
    setHasError(true)
    setIsLoading(false)
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  // Image de fallback en cas d'erreur
  if (hasError) {
    return (
      <div 
        className={`bg-muted rounded-lg flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <div className="text-center text-muted-foreground p-4">
          <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-xs">Image non disponible</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading overlay */}
      {isLoading && (
        <div 
          className="absolute inset-0 bg-muted animate-pulse rounded-lg"
          style={{ width, height }}
        />
      )}
      
      <Image
        src={src}
        alt={optimizedAlt}
        width={width}
        height={height}
        quality={quality}
        priority={priority}
        sizes={sizes}
        placeholder={placeholder}
        blurDataURL={placeholder === 'blur' ? defaultBlurDataURL : undefined}
        className={`transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onLoad={handleLoad}
        onError={handleError}
        
        // SEO et accessibilité
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        
        // Optimisations avancées
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
      
      {/* Schema.org pour les images */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageObject",
            "url": src,
            "name": optimizedAlt,
            "description": optimizedAlt,
            "width": width,
            "height": height,
            "encodingFormat": "image/jpeg",
            "contentUrl": src,
            "creator": {
              "@type": "Organization",
              "name": "ClimGO"
            },
            "copyrightHolder": {
              "@type": "Organization", 
              "name": "ClimGO"
            },
            "license": "https://www.climgo.fr/mentions-legales"
          })
        }}
      />
    </div>
  )
}

// Hook pour précharger les images critiques
export function useImagePreload(imageSrcs: string[]) {
  useState(() => {
    if (typeof window !== 'undefined') {
      imageSrcs.forEach(src => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'image'
        link.href = src
        document.head.appendChild(link)
      })
    }
  })
}

// Fonction utilitaire pour générer des srcSet automatiques
export function generateSrcSet(baseSrc: string, widths: number[] = [320, 640, 768, 1024, 1280, 1920]) {
  return widths
    .map(width => {
      // Si c'est une image Cloudinary, ajouter les paramètres de redimensionnement
      if (baseSrc.includes('cloudinary.com')) {
        const cloudinaryParams = `/w_${width},q_auto,f_auto`
        const insertIndex = baseSrc.indexOf('/upload/') + '/upload/'.length
        const optimizedSrc = baseSrc.slice(0, insertIndex) + cloudinaryParams + baseSrc.slice(insertIndex)
        return `${optimizedSrc} ${width}w`
      }
      
      // Pour les autres images, ajouter des paramètres Next.js
      const url = new URL(baseSrc, 'https://www.climgo.fr')
      url.searchParams.set('w', width.toString())
      url.searchParams.set('q', '85')
      return `${url.toString()} ${width}w`
    })
    .join(', ')
}

