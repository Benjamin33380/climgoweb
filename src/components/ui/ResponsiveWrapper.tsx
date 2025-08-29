'use client';

import { ReactNode } from 'react';

interface ResponsiveWrapperProps {
  children: ReactNode;
  className?: string;
  padding?: 'none' | 'small' | 'medium' | 'large';
  margin?: 'none' | 'small' | 'medium' | 'large';
  grid?: 'none' | '1' | '2' | '3' | '4';
  gap?: 'none' | 'small' | 'medium' | 'large';
  height?: 'none' | 'small' | 'medium' | 'large';
  rounded?: 'none' | 'small' | 'medium' | 'large';
  shadow?: 'none' | 'small' | 'medium' | 'large';
  transform?: boolean;
}

export function ResponsiveWrapper({
  children,
  className = '',
  padding = 'medium',
  margin = 'none',
  grid = 'none',
  gap = 'medium',
  height = 'none',
  rounded = 'medium',
  shadow = 'medium',
  transform = false,
}: ResponsiveWrapperProps) {
  const getPaddingClasses = () => {
    switch (padding) {
      case 'none': return '';
      case 'small': return 'p-2 sm:p-3 lg:p-4';
      case 'medium': return 'p-4 sm:p-6 lg:p-8';
      case 'large': return 'p-6 sm:p-8 lg:p-12';
      default: return 'p-4 sm:p-6 lg:p-8';
    }
  };

  const getMarginClasses = () => {
    switch (margin) {
      case 'none': return '';
      case 'small': return 'my-4 sm:my-6 lg:my-8';
      case 'medium': return 'my-8 sm:my-12 lg:my-16';
      case 'large': return 'my-12 sm:my-16 lg:my-20';
      default: return '';
    }
  };

  const getGridClasses = () => {
    switch (grid) {
      case 'none': return '';
      case '1': return 'grid grid-cols-1';
      case '2': return 'grid grid-cols-1 sm:grid-cols-2';
      case '3': return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
      case '4': return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';
      default: return '';
    }
  };

  const getGapClasses = () => {
    switch (gap) {
      case 'none': return '';
      case 'small': return 'gap-2 sm:gap-3 lg:gap-4';
      case 'medium': return 'gap-4 sm:gap-6 lg:gap-8';
      case 'large': return 'gap-6 sm:gap-8 lg:gap-12';
      default: return 'gap-4 sm:gap-6 lg:gap-8';
    }
  };

  const getHeightClasses = () => {
    switch (height) {
      case 'none': return '';
      case 'small': return 'h-48 sm:h-56 lg:h-64';
      case 'medium': return 'h-64 sm:h-72 lg:h-80';
      case 'large': return 'h-80 sm:h-96 lg:h-[28rem]';
      default: return '';
    }
  };

  const getRoundedClasses = () => {
    switch (rounded) {
      case 'none': return '';
      case 'small': return 'rounded';
      case 'medium': return 'rounded-lg sm:rounded-xl lg:rounded-2xl';
      case 'large': return 'rounded-xl sm:rounded-2xl lg:rounded-3xl';
      default: return 'rounded-lg sm:rounded-xl lg:rounded-2xl';
    }
  };

  const getShadowClasses = () => {
    switch (shadow) {
      case 'none': return '';
      case 'small': return 'shadow-sm sm:shadow-md lg:shadow-lg';
      case 'medium': return 'shadow-md sm:shadow-lg lg:shadow-xl';
      case 'large': return 'shadow-lg sm:shadow-xl lg:shadow-2xl';
      default: return 'shadow-md sm:shadow-lg lg:shadow-xl';
    }
  };

  const getTransformClasses = () => {
    return transform ? 'hover:-translate-y-1 sm:hover:-translate-y-2' : '';
  };

  const classes = [
    getPaddingClasses(),
    getMarginClasses(),
    getGridClasses(),
    getGapClasses(),
    getHeightClasses(),
    getRoundedClasses(),
    getShadowClasses(),
    getTransformClasses(),
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {children}
    </div>
  );
}
