'use client';

import { useEffect, useState } from 'react';

interface GlobalScrollShadowProps {
  children: React.ReactNode;
  size?: number;
  className?: string;
  shadowColor?: string;
  blurIntensity?: number;
}

export function GlobalScrollShadow({
  children,
  size = 100,
  className = '',
  shadowColor = 'rgba(0, 0, 0, 0.1)',
  blurIntensity = 20
}: GlobalScrollShadowProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      
      setScrollPosition(scrollTop);
      setMaxScroll(scrollHeight - clientHeight);
    };

    // Initialiser les valeurs
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Calculer l'opacité des ombres
  const topShadowOpacity = Math.min(scrollPosition / size, 1);
  const bottomShadowOpacity = Math.min((maxScroll - scrollPosition) / size, 1);

  return (
    <div className={`relative ${className}`}>
      {/* Ombre supérieure avec flou */}
      {topShadowOpacity > 0 && (
        <div
          className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-opacity duration-300"
          style={{
            height: `${size}px`,
            background: `linear-gradient(to bottom, ${shadowColor}, transparent)`,
            opacity: topShadowOpacity,
            filter: `blur(${blurIntensity}px)`,
            transform: 'translateY(-50%)'
          }}
        />
      )}

      {/* Contenu */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Ombre inférieure avec flou */}
      {bottomShadowOpacity > 0 && (
        <div
          className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none transition-opacity duration-300"
          style={{
            height: `${size}px`,
            background: `linear-gradient(to top, ${shadowColor}, transparent)`,
            opacity: bottomShadowOpacity,
            filter: `blur(${blurIntensity}px)`,
            transform: 'translateY(50%)'
          }}
        />
      )}
    </div>
  );
}
