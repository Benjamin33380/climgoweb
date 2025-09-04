'use client'

import dynamic from 'next/dynamic'

// Import dynamique du Logo3D pour optimiser le chargement
const Logo3D = dynamic(() => import('@/components/Logo3D').then(mod => ({ default: mod.Logo3D })), {
  ssr: false,
  loading: () => <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gray-200 animate-pulse rounded-lg" />
})

interface SplineHeroProps {
  title: string
  subtitle: string
  description: string
  badge?: string
}

export function SplineHero({ title, subtitle, description, badge }: SplineHeroProps) {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] bg-white dark:bg-black overflow-hidden">

      
      <div className="relative container mx-auto px-4 xs:px-5 sm:px-6 py-8 xs:py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center min-h-[50vh] sm:min-h-[60vh]">
          {/* Contenu texte */}
          <div className="w-full max-w-2xl mx-auto lg:mx-0 text-center lg:text-left order-2 lg:order-1">
            {badge && (
              <div className="mb-6 xs:mb-7 sm:mb-8">
                <span className="inline-block px-3 xs:px-4 py-1.5 xs:py-2 bg-black/10 dark:bg-white/10 border border-black dark:border-white rounded-full text-xs xs:text-sm font-medium text-black dark:text-white">
                  {badge}
                </span>
              </div>
            )}
            
            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold lg:font-light tracking-tight mb-2 xs:mb-3 sm:mb-4 md:mb-6 text-black dark:text-white break-words leading-tight">
              {title}
            </h1>
            
            <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-black dark:text-white mb-3 xs:mb-4 sm:mb-4 md:mb-6 lg:mb-8 leading-relaxed font-medium lg:font-normal">
              {subtitle}
            </h2>
            
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-black dark:text-white max-w-full lg:max-w-4xl mx-auto lg:mx-0 px-0 sm:px-2 lg:px-0">
              {description}
            </p>
          </div>
          
          {/* Logo 3D GLB */}
          <div className="relative flex items-center justify-center w-full order-1 lg:order-2">
            <Logo3D className="transform-gpu w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80" />
          </div>
        </div>
      </div>
    </section>
  )
}
