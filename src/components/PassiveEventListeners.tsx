'use client';

import { useEffect } from 'react';

export default function PassiveEventListeners() {
  useEffect(() => {
    // Ajouter des event listeners passifs pour améliorer les performances de défilement
    const addPassiveListener = (element: EventTarget, event: string, handler: EventListener) => {
      element.addEventListener(event, handler, { passive: true });
    };

    // Optimiser le scroll
    const handleScroll = () => {
      // Gestion passive du scroll
    };

    // Optimiser le touch
    const handleTouch = () => {
      // Gestion passive du touch
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
