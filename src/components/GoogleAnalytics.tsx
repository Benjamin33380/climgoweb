'use client';

import { useEffect } from 'react';

// ID Google Analytics (peut être public, c'est sécurisé)
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

export default function GoogleAnalytics() {
  useEffect(() => {
    if (!GA_MEASUREMENT_ID || typeof window === 'undefined') return;

    // Lazy loading de Google Analytics après le chargement de la page
    const loadGA = () => {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);
    };

    // Charger GA après 5 secondes ou quand l'utilisateur interagit
    const timer = setTimeout(loadGA, 5000);
    
    const handleUserInteraction = () => {
      clearTimeout(timer);
      loadGA();
      // Supprimer les listeners après le premier chargement
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('scroll', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('scroll', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);

    // Configuration gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });

    // Nettoyer au démontage
    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('scroll', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, [GA_MEASUREMENT_ID]);

  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return null; // Composant invisible
}

// Types globaux pour TypeScript
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}
