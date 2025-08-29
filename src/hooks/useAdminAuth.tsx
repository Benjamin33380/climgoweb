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
      // TODO: Remplacer par Supabase Auth
      // const { data, error } = await supabase.auth.signInWithPassword({
      //   email,
      //   password,
      // });

      // Simulation de connexion admin
      if (email === 'admin@climgo.fr' && password === 'admin123') {
        const adminUser = {
          id: 'admin-1',
          email: 'admin@climgo.fr',
          role: 'admin'
        };

        // Stocker les données
        localStorage.setItem('adminToken', 'admin-token-123');
        localStorage.setItem('adminUser', JSON.stringify(adminUser));
        
        setUser(adminUser);
        return true;
      } else {
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
