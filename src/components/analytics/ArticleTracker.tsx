'use client';

import { useEffect, useRef, useState } from 'react';
import { useUser } from '@/hooks/useUser';
import { supabase } from '@/lib/supabase';

interface ArticleTrackerProps {
  articleId: string;
  articleSlug: string;
}

export function ArticleTracker({ articleId, articleSlug }: ArticleTrackerProps) {
  const { user } = useUser();
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [startTime, setStartTime] = useState<number>(Date.now());
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
        // Obtenir les informations de géolocalisation et device
        const deviceInfo = getDeviceInfo();
        const locationInfo = await getLocationInfo();

        // Enregistrer la vue
        await supabase
          .from('article_views')
          .insert([
            {
              article_id: articleId,
              user_id: user?.id || null,
              ip_address: null, // Sera rempli côté serveur si nécessaire
              user_agent: navigator.userAgent,
              referrer: document.referrer || null,
              reading_time: 0,
              scroll_percentage: 0,
              created_at: new Date().toISOString()
            }
          ]);

        // Mettre à jour le compteur de vues de l'article
        await supabase.rpc('increment_article_views', {
          article_id: articleId
        });

        // Enregistrer la session utilisateur si connecté
        if (user && sessionId) {
          await supabase
            .from('user_sessions')
            .insert([
              {
                user_id: user.id,
                ip_address: null,
                user_agent: navigator.userAgent,
                country: locationInfo.country,
                city: locationInfo.city,
                device_type: deviceInfo.deviceType,
                browser: deviceInfo.browser,
                os: deviceInfo.os,
                session_start: new Date().toISOString(),
                is_active: true
              }
            ]);
        }

        trackedRef.current = true;
      } catch (error) {
        console.error('Erreur lors du tracking de la vue:', error);
      }
    };

    trackView();
  }, [articleId, user, sessionId]);

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
        updateReadingProgress(percentage);
      }, 1000);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [scrollPercentage]);

  // Tracker la visibilité de la page
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
      
      if (document.hidden) {
        // Page cachée, sauvegarder le temps de lecture
        updateReadingTime();
      } else {
        // Page visible, reprendre le tracking
        setStartTime(Date.now());
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Sauvegarder les données avant de quitter la page
  useEffect(() => {
    const handleBeforeUnload = () => {
      updateReadingTime();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  const updateReadingTime = async () => {
    if (!sessionId || !trackedRef.current) return;

    const readingTime = Math.round((Date.now() - startTime) / 1000);
    
    try {
      await supabase
        .from('article_views')
        .update({
          reading_time: readingTime,
          scroll_percentage: scrollPercentage
        })
        .eq('article_id', articleId)
        .eq('created_at', new Date().toISOString().split('T')[0]); // Approximation pour aujourd'hui
    } catch (error) {
      console.error('Erreur lors de la mise à jour du temps de lecture:', error);
    }
  };

  const updateReadingProgress = async (percentage: number) => {
    if (!sessionId || !trackedRef.current) return;

    try {
      await supabase
        .from('article_views')
        .update({
          scroll_percentage: percentage
        })
        .eq('article_id', articleId)
        .eq('created_at', new Date().toISOString().split('T')[0]);
    } catch (error) {
      console.error('Erreur lors de la mise à jour du scroll:', error);
    }
  };

  return null; // Composant invisible
}

// Fonctions utilitaires
function getDeviceInfo() {
  const userAgent = navigator.userAgent;
  
  // Détection du type d'appareil
  let deviceType = 'desktop';
  if (/tablet|ipad|playbook|silk/i.test(userAgent)) {
    deviceType = 'tablet';
  } else if (/mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i.test(userAgent)) {
    deviceType = 'mobile';
  }

  // Détection du navigateur
  let browser = 'unknown';
  if (userAgent.includes('Chrome')) browser = 'Chrome';
  else if (userAgent.includes('Firefox')) browser = 'Firefox';
  else if (userAgent.includes('Safari')) browser = 'Safari';
  else if (userAgent.includes('Edge')) browser = 'Edge';
  else if (userAgent.includes('Opera')) browser = 'Opera';

  // Détection de l'OS
  let os = 'unknown';
  if (userAgent.includes('Windows')) os = 'Windows';
  else if (userAgent.includes('Mac')) os = 'macOS';
  else if (userAgent.includes('Linux')) os = 'Linux';
  else if (userAgent.includes('Android')) os = 'Android';
  else if (userAgent.includes('iOS')) os = 'iOS';

  return { deviceType, browser, os };
}

async function getLocationInfo() {
  try {
    // Utiliser une API de géolocalisation par IP (gratuite)
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    
    return {
      country: data.country_name || 'Unknown',
      city: data.city || 'Unknown'
    };
  } catch (error) {
    return {
      country: 'Unknown',
      city: 'Unknown'
    };
  }
}
