'use client';

import { useState, useEffect, createContext, useContext } from 'react';
import { useRouter } from 'next/navigation';

interface AdminUser {
  id: string;
  email: string;
  role: string;
}

interface AdminAuthContextType {
  user: AdminUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Vérifier si l'utilisateur est déjà connecté
    const adminToken = localStorage.getItem('adminToken');
    const adminUser = localStorage.getItem('adminUser');

    if (adminToken && adminUser) {
      try {
        setUser(JSON.parse(adminUser));
      } catch (error) {
        console.error('Erreur lors du parsing des données admin:', error);
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminUser');
      }
    }
    
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Connexion avec Supabase Auth
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Réponse API login:', data); // Debug
        
        // Vérifier si l'utilisateur est admin
        if (data.user && data.user.is_admin) {
          const adminUser = {
            id: data.user.id,
            email: data.user.email,
            role: 'admin'
          };

          // Stocker les données
          localStorage.setItem('adminToken', data.session.access_token);
          localStorage.setItem('adminUser', JSON.stringify(adminUser));
          
          setUser(adminUser);
          console.log('Redirection vers dashboard...'); // Debug
          
          // Forcer la redirection
          setTimeout(() => {
            window.location.href = '/admin/dashboard';
          }, 100);
          
          return true;
        } else {
          console.log('Utilisateur non admin:', data.user); // Debug
          return false;
        }
      } else {
        console.log('Erreur response:', response.status); // Debug
        return false;
      }
    } catch (error) {
      console.error('Erreur de connexion:', error);
      return false;
    }
  };

  const logout = () => {
    // Supprimer les données
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    
    setUser(null);
    router.push('/admin/login');
  };

  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user
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
  const { user } = useAdminAuth();
  return user?.role === 'admin';
}

// Hook utilitaire pour vérifier si l'utilisateur est connecté
export function useIsAuthenticated() {
  const { isAuthenticated } = useAdminAuth();
  return isAuthenticated;
}
