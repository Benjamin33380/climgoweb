'use client';

import { useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface AutoRefreshBlogProps {
  children: ReactNode;
  intervalMs?: number;
}

export default function AutoRefreshBlog({ 
  children, 
  intervalMs = 60000 // 60 secondes par défaut
}: AutoRefreshBlogProps) {
  const router = useRouter();

  useEffect(() => {
    console.log('🔄 [AutoRefreshBlog] Démarrage de la revalidation automatique toutes les', intervalMs / 1000, 'secondes');
    
    // Timer pour recharger la page
    const interval = setInterval(() => {
      console.log('🔄 [AutoRefreshBlog] Revalidation automatique de la page blog...');
      
      // Recharger la page pour mettre à jour les articles
      router.refresh();
    }, intervalMs);

    // Nettoyage du timer
    return () => {
      console.log('🔄 [AutoRefreshBlog] Arrêt de la revalidation automatique');
      clearInterval(interval);
    };
  }, [router, intervalMs]);

  return <>{children}</>;
} 