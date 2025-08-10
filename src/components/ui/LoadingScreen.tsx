"use client"

import { useEffect, useState } from 'react'
import { LogoWithFallback } from '@/components/ui/Logo3D'

interface LoadingScreenProps {
  isLoading: boolean
  onComplete?: () => void
}

export function LoadingScreen({ isLoading, onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!isLoading) return

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            onComplete?.()
          }, 200)
          return 100
        }
        return prev + 2
      })
    }, 60) // 3 secondes au total (100 / 2 * 60ms)

    return () => clearInterval(interval)
  }, [isLoading, onComplete])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-black overflow-hidden">
      {/* Effet de particules subtiles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-black/10 dark:bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-black/10 dark:bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-black/10 dark:bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-black/10 dark:bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-black/10 dark:bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/5 right-1/5 w-1 h-1 bg-black/10 dark:bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }} />
        <div className="absolute bottom-1/5 left-1/5 w-1 h-1 bg-black/10 dark:bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '2.2s' }} />
      </div>
      
      {/* Gradient subtil au centre */}
      <div className="absolute inset-0 bg-gradient-radial from-gray-100/30 via-white to-white dark:from-gray-900/30 dark:via-black dark:to-black" />
      
      {/* Loading content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo GLB 3D */}
        <div className="mb-8">
          <LogoWithFallback
            glbUrl="/favicon/logo.glb"
            fallbackPngUrl="/favicon/logo.png"
            isHovered={false}
            className="w-24 h-24" // Plus grand pour le loading
          />
        </div>
        
        {/* Loading Ring avec progression */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-gray-300 dark:border-gray-800 rounded-full">
            <div 
              className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-black dark:border-t-white rounded-full transition-transform duration-100"
              style={{ 
                transform: `rotate(${progress * 3.6}deg)` // 360deg / 100
              }}
            />
          </div>
          
          {/* Pourcentage au centre */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-medium text-black/70 dark:text-white/70">
              {Math.round(progress)}%
            </span>
          </div>
        </div>
        
        {/* Texte ClimGO */}
        <div className="mt-6 text-black/90 dark:text-white/90 text-sm font-medium tracking-wider text-center">
          CLIMGO
        </div>
        
        {/* Barre de progression blanche */}
        <div className="mt-4 w-48 h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white dark:bg-white transition-all duration-100 ease-out shadow-sm"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Texte de chargement */}
        <div className="mt-3 text-xs text-black/60 dark:text-white/60 tracking-wide">
          Chargement en cours...
        </div>
      </div>
    </div>
  )
}
