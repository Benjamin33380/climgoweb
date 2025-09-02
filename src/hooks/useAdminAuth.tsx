'use client';

import { useState, useEffect, createContext, useContext } from 'react';
import { useRouter } from 'next/navigation';

interface AdminUser {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  role: string;
  isActive: boolean;
  emailVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

interface AdminAuthContextType {
  user: AdminUser | null;
  loading: boolean;
  logout: () => void;
  login: (email: string, password: string) => Promise<boolean>;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Vérifier l'authentification au montage du composant
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      setLoading(true);
      
      const response = await fetch('/api/auth/me', {
        credentials: 'include' // Important pour inclure les cookies
      });

      if (response.ok) {
        const data = await response.json();
        console.log('🔐 [useAdminAuth] Utilisateur authentifié:', data.user);
        setUser(data.user);
      } else {
        console.log('🔐 [useAdminAuth] Non authentifié ou erreur:', response.status);
        setUser(null);
      }
    } catch (error) {
      console.error('🔐 [useAdminAuth] Erreur lors de la vérification auth:', error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      // Appeler l'API de déconnexion
      await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include'
      });
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
    } finally {
      // Nettoyer l'état local
      setUser(null);
      // Rediriger vers la page de connexion
      router.push('/admin/login');
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      console.log('🔐 [useAdminAuth] Tentative de connexion pour:', email);
      
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password })
      });

      console.log('🔐 [useAdminAuth] Réponse de l\'API login:', {
        status: response.status,
        ok: response.ok,
        statusText: response.statusText
      });

      if (response.ok) {
        const data = await response.json();
        console.log('🔐 [useAdminAuth] Connexion réussie, données:', data);
        
        await checkAuth(); // Vérifier l'auth après connexion
        router.push('/admin'); // Rediriger vers le dashboard
        return true;
      } else {
        const errorData = await response.json();
        console.error('🔐 [useAdminAuth] Erreur de connexion:', errorData);
        return false;
      }
    } catch (error) {
      console.error('🔐 [useAdminAuth] Erreur lors de la connexion:', error);
      return false;
    }
  };

  const value = {
    user,
    loading,
    logout,
    login,
    isAuthenticated: !!user && user.isActive,
    isAdmin: !!user && user.role === 'ADMIN' && user.isActive
  };

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (context === undefined) {
    throw new Error('useAdminAuth doit être utilisé dans un AdminAuthProvider');
  }
  return context;
}

// Hook utilitaire pour vérifier si l'utilisateur est admin
export function useIsAdmin() {
  const { isAdmin } = useAdminAuth();
  return isAdmin;
}

// Hook utilitaire pour vérifier si l'utilisateur est connecté
export function useIsAuthenticated() {
  const { isAuthenticated } = useAdminAuth();
  return isAuthenticated;
}
