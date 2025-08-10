'use client';

import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 800,
  direction = 'up',
  threshold = 0.2,
  rootMargin = '0px 0px -100px 0px',
  triggerOnce = false
}: ScrollRevealProps) {
  const { elementRef, isVisible } = useScrollReveal({
    threshold,
    rootMargin,
    triggerOnce
  });

  const getTransformClasses = () => {
    const baseClasses = 'transition-all ease-out will-change-transform';
    
    if (isVisible) {
      return `${baseClasses} opacity-100 blur-none translate-x-0 translate-y-0 scale-100`;
    }

    switch (direction) {
      case 'up':
        return `${baseClasses} opacity-0 blur-md translate-y-12 scale-90`;
      case 'down':
        return `${baseClasses} opacity-0 blur-md -translate-y-12 scale-90`;
      case 'left':
        return `${baseClasses} opacity-0 blur-md translate-x-12 scale-90`;
      case 'right':
        return `${baseClasses} opacity-0 blur-md -translate-x-12 scale-90`;
      case 'fade':
      default:
        return `${baseClasses} opacity-0 blur-md scale-90`;
    }
  };

  const style = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`
  };

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`${getTransformClasses()} ${className}`}
      style={style}
      data-scroll-reveal={isVisible ? 'visible' : 'hidden'}
    >
      {children}
    </div>
  );
}
