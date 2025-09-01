'use client';

import { Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface UserPointsProps {
  points: number;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export default function UserPoints({ points, size = 'md', showLabel = true }: UserPointsProps) {
  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2'
  };

  const iconSizes = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  };

  return (
    <Badge 
      variant="secondary" 
      className={`flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 border border-yellow-200 ${sizeClasses[size]}`}
    >
      <Star className={`${iconSizes[size]} text-yellow-600 fill-current`} />
      <span className="font-semibold">{points}</span>
      {showLabel && <span>points</span>}
    </Badge>
  );
} 