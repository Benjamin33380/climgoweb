'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/components/providers/UserProvider';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
  redirectTo?: string;
}

export function ProtectedRoute({ 
  children, 
  requireAdmin = false, 
  redirectTo = '/auth' 
}: ProtectedRouteProps) {
  const { user, loading } = useUser();
  const router = useRouter();

  console.log('🛡️ [ProtectedRoute] État actuel:', { 
    loading, 
    user: user ? { id: user.id, email: user.email, role: user.role } : null,
    requireAdmin,
    redirectTo 
  });

  useEffect(() => {
    console.log('🛡️ [ProtectedRoute] useEffect déclenché:', { 
      loading, 
      user: user ? { id: user.id, email: user.email, role: user.role } : null,
      requireAdmin 
    });

    if (!loading) {
      if (!user) {
        console.log('🛡️ [ProtectedRoute] Pas d\'utilisateur, redirection vers:', redirectTo);
        router.push(redirectTo);
        return;
      }

      if (requireAdmin && user.role !== 'ADMIN') {
        console.log('🛡️ [ProtectedRoute] Utilisateur non-admin, redirection vers /');
        console.log('🛡️ [ProtectedRoute] Rôle utilisateur:', user.role, 'Requiert ADMIN:', requireAdmin);
        router.push('/');
        return;
      }

      console.log('🛡️ [ProtectedRoute] Accès autorisé pour l\'utilisateur:', user.role);
    }
  }, [user, loading, requireAdmin, redirectTo, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  if (requireAdmin && user.role !== 'ADMIN') {
    return null;
  }

  return <>{children}</>;
} 