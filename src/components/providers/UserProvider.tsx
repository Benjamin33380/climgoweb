'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  role: string;
  isActive: boolean;
  emailVerified: boolean;
  points?: number;
  createdAt: string;
}

interface UserContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (email: string, password: string, firstName?: string, lastName?: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Vérifier l'authentification au chargement
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      console.log('🔍 [UserProvider] Vérification de l\'authentification...');
      const response = await fetch('/api/auth/me');
      console.log('🔍 [UserProvider] Réponse de /api/auth/me:', response.status, response.statusText);
      
      if (response.ok) {
        const userData = await response.json();
        console.log('🔍 [UserProvider] Données utilisateur reçues:', userData);
        setUser(userData.user);
        console.log('🔍 [UserProvider] Utilisateur défini:', userData.user);
      } else {
        console.log('🔍 [UserProvider] Échec de l\'authentification:', response.status);
        const errorData = await response.text();
        console.log('🔍 [UserProvider] Détails de l\'erreur:', errorData);
      }
    } catch (error) {
      console.error('❌ [UserProvider] Erreur lors de la vérification de l\'authentification:', error);
    } finally {
      console.log('🔍 [UserProvider] Fin de la vérification, loading = false');
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      console.log('🔐 [UserProvider] Tentative de connexion pour:', email);
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log('🔐 [UserProvider] Réponse de connexion:', response.status, data);

      if (response.ok) {
        console.log('🔐 [UserProvider] Connexion réussie, utilisateur:', data.user);
        setUser(data.user);
        return { success: true };
      } else {
        console.log('🔐 [UserProvider] Échec de connexion:', data.error);
        return { success: false, error: data.error };
      }
    } catch (error) {
      console.error('❌ [UserProvider] Erreur de connexion:', error);
      return { success: false, error: 'Erreur de connexion' };
    }
  };

  const register = async (email: string, password: string, firstName?: string, lastName?: string) => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, firstName, lastName }),
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data.user);
        return { success: true };
      } else {
        return { success: false, error: data.error };
      }
    } catch (error) {
      console.error('Erreur d\'inscription:', error);
      return { success: false, error: 'Erreur d\'inscription' };
    }
  };

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
      });
      setUser(null);
      router.push('/');
    } catch (error) {
      console.error('Erreur de déconnexion:', error);
      setUser(null);
      router.push('/');
    }
  };



  const value = {
    user,
    loading,
    login,
    register,
    logout,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser doit être utilisé dans un UserProvider');
  }
  return context;
}

// Hook utilitaire pour vérifier si l'utilisateur est admin
export function useIsAdmin() {
  const { user } = useUser();
  return user?.role === 'ADMIN';
}

// Hook utilitaire pour vérifier si l'utilisateur est connecté
export function useIsAuthenticated() {
  const { user, loading } = useUser();
  return { isAuthenticated: !!user, loading };
} 