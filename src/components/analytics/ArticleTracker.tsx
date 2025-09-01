'use client';

import { useEffect, useRef, useState } from 'react';
import { useUser } from '@/components/providers/UserProvider';

interface ArticleTrackerProps {
  articleId: string;
  articleSlug: string;
}

export function ArticleTracker({ articleId, articleSlug }: ArticleTrackerProps) {
  const { user } = useUser();
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [startTime] = useState<number>(Date.now());
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const trackedRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Générer un ID de session unique
  useEffect(() => {
    const generateSessionId = () => {
      return 'session_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
    };
    setSessionId(generateSessionId());
  }, []);

  // Tracker la vue initiale
  useEffect(() => {
    if (!sessionId || trackedRef.current) return;

    const trackView = async () => {
      try {
        // Enregistrer la vue via notre API
        const response = await fetch(`/api/articles/${articleSlug}/views`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            articleSlug,
            userId: user?.id || null,
            sessionId,
            userAgent: navigator.userAgent,
            referrer: document.referrer || null,
            timestamp: new Date().toISOString()
          })
        });

        if (response.ok) {
          trackedRef.current = true;
        }
      } catch (error) {
        console.error('Erreur lors du tracking de la vue:', error);
      }
    };

    trackView();
  }, [articleId, user, sessionId]); // eslint-disable-line react-hooks/exhaustive-deps
 
  // Tracker le scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = Math.round((scrollTop / scrollHeight) * 100);
      
      setScrollPercentage(Math.max(scrollPercentage, percentage));

      // Débounce l'update du scroll
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      scrollTimeoutRef.current = setTimeout(() => {
        // Ici on pourrait envoyer les données de scroll si nécessaire
      }, 1000);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPercentage]);

  // Tracker la visibilité de la page
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Tracker le temps de lecture
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      
      // Ici on pourrait envoyer les données de temps de lecture si nécessaire
    }, 5000);

    return () => clearInterval(interval);
  }, [isVisible, startTime]);

  // Tracker quand l'utilisateur quitte la page
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (trackedRef.current) {
        // Ici on pourrait envoyer les données finales si nécessaire
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  // Ce composant ne rend rien visuellement
  return null;
}
