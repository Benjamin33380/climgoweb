'use client';

import { useEffect } from 'react';

// ID Google Analytics (peut être public, c'est sécurisé)
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

export default function GoogleAnalytics() {
  useEffect(() => {
    if (!GA_MEASUREMENT_ID || typeof window === 'undefined') return;

    // Initialiser Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

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

    // Nettoyer le script au démontage
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

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
