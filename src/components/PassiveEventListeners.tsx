'use client';

import { useEffect } from 'react';

export default function PassiveEventListeners() {
  useEffect(() => {
    // Ajouter des event listeners passifs pour améliorer les performances de défilement
    const addPassiveListener = (element: EventTarget, event: string, handler: EventListener) => {
      element.addEventListener(event, handler, { passive: true });
    };

    // Optimiser le scroll avec throttling
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        // Gestion passive du scroll
      }, 16); // ~60fps
    };

    // Optimiser le touch avec throttling
    let touchTimeout: NodeJS.Timeout;
    const handleTouch = () => {
      if (touchTimeout) clearTimeout(touchTimeout);
      touchTimeout = setTimeout(() => {
        // Gestion passive du touch
      }, 16); // ~60fps
    };

    // Ajouter les listeners passifs
    addPassiveListener(window, 'scroll', handleScroll);
    addPassiveListener(window, 'touchstart', handleTouch);
    addPassiveListener(window, 'touchmove', handleTouch);

    // Nettoyer au démontage
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouch);
      window.removeEventListener('touchmove', handleTouch);
    };
  }, []);

  return null;
}
