'use client';

import { useEffect } from 'react';

export default function SafariMobileFix() {
  useEffect(() => {
    // Détecter Safari sur iOS
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    
    if (isSafari && isIOS) {
      // Appliquer des styles spécifiques pour Safari iOS
      const style = document.createElement('style');
      style.textContent = `
        html, body {
          background-color: #ffffff !important;
          -webkit-background-color: #ffffff !important;
          background: #ffffff !important;
          -webkit-background: #ffffff !important;
        }
        
        .dark html, .dark body {
          background-color: #000000 !important;
          -webkit-background-color: #000000 !important;
          background: #000000 !important;
          -webkit-background: #000000 !important;
        }
        
        * {
          -webkit-tap-highlight-color: transparent !important;
        }
        
        .bg-background {
          background-color: inherit !important;
          -webkit-background-color: inherit !important;
        }
      `;
      
      document.head.appendChild(style);
      
      // Force le rafraîchissement du fond
      document.documentElement.style.backgroundColor = '#ffffff';
      document.body.style.backgroundColor = '#ffffff';
      
      // Observer les changements de thème
      const observer = new MutationObserver(() => {
        const isDark = document.documentElement.classList.contains('dark');
        const bgColor = isDark ? '#000000' : '#ffffff';
        
        document.documentElement.style.backgroundColor = bgColor;
        document.body.style.backgroundColor = bgColor;
      });
      
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class']
      });
      
      return () => {
        observer.disconnect();
        document.head.removeChild(style);
      };
    }
  }, []);

  return null; // Ce composant ne rend rien
}
