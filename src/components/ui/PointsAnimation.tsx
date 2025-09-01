'use client';

import { useState, useEffect } from 'react';
import { Star, Sparkles } from 'lucide-react';

interface PointsAnimationProps {
  points: number;
  message: string;
  isVisible: boolean;
  onComplete: () => void;
}

export default function PointsAnimation({ points, message, isVisible, onComplete }: PointsAnimationProps) {
  const [showAnimation, setShowAnimation] = useState(false);
  const [showPoints, setShowPoints] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShowAnimation(true);
      
      // Séquence d'animation
      setTimeout(() => setShowPoints(true), 300);
      setTimeout(() => setShowMessage(true), 600);
      setTimeout(() => {
        setShowAnimation(false);
        setShowPoints(false);
        setShowMessage(false);
        onComplete();
      }, 3000);
    }
  }, [isVisible, onComplete]);

  if (!showAnimation) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      {/* Overlay avec effet de brillance */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-orange-500/20 to-red-500/20 animate-pulse" />
      
      {/* Conteneur principal */}
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 text-center transform transition-all duration-500 scale-100">
        {/* Icône d'étoile animée */}
        <div className="mb-4">
          <Star className="h-16 w-16 text-yellow-500 mx-auto animate-bounce" />
        </div>
        
        {/* Points gagnés */}
        <div className={`transition-all duration-500 transform ${
          showPoints ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
        }`}>
          <div className="text-4xl font-bold text-yellow-600 mb-2">
            +{points} points
          </div>
          <div className="flex items-center justify-center gap-2 text-yellow-500">
            <Sparkles className="h-5 w-5 animate-pulse" />
            <span className="text-lg font-semibold">Points gagnés !</span>
            <Sparkles className="h-5 w-5 animate-pulse" />
          </div>
        </div>
        
        {/* Message */}
        <div className={`mt-4 transition-all duration-500 transform ${
          showMessage ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
        }`}>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            {message}
          </p>
        </div>
        
        {/* Effet de particules */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-ping"
              style={{
                left: `${20 + (i * 10)}%`,
                top: `${20 + (i * 5)}%`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: '1s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 