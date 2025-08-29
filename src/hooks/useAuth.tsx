import { useState, useEffect, createContext, useContext } from 'react';

interface User {
  id: string;
  email: string;
  username?: string;
  avatar_url?: string;
  role?: 'user' | 'admin';
  points_activity?: number;
  is_banned?: boolean;
  created_at?: string;
  last_login?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error?: string }>;
  signUp: (email: string, password: string, username: string) => Promise<{ error?: string }>;
  signOut: () => Promise<void>;
  updateProfile: (updates: Partial<User>) => Promise<{ error?: string }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Remplacer par Supabase Auth
    // Simuler la vérification de l'authentification
    const checkAuth = async () => {
      try {
        // Vérifier si un utilisateur est stocké en localStorage
        const storedUser = localStorage.getItem('climgo_user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Erreur lors de la vérification de l\'authentification:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      // TODO: Remplacer par Supabase Auth
      // Simuler la connexion
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (email === 'admin@climgo.fr' && password === 'admin123') {
        const userData: User = {
          id: 'admin-1',
          email: 'admin@climgo.fr',
          username: 'Admin',
          role: 'admin',
          points_activity: 1000,
          is_banned: false,
          created_at: new Date().toISOString(),
          last_login: new Date().toISOString()
        };
        
        setUser(userData);
        localStorage.setItem('climgo_user', JSON.stringify(userData));
        return { error: undefined };
      } else {
        return { error: 'Email ou mot de passe incorrect' };
      }
    } catch (error) {
      return { error: 'Erreur lors de la connexion' };
    }
  };

  const signUp = async (email: string, password: string, username: string) => {
    try {
      // TODO: Remplacer par Supabase Auth
      // Simuler l'inscription
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const userData: User = {
        id: `user-${Date.now()}`,
        email,
        username,
        role: 'user',
        points_activity: 0,
        is_banned: false,
        created_at: new Date().toISOString(),
        last_login: new Date().toISOString()
      };
      
      setUser(userData);
      localStorage.setItem('climgo_user', JSON.stringify(userData));
      return { error: undefined };
    } catch (error) {
      return { error: 'Erreur lors de l\'inscription' };
    }
  };

  const signOut = async () => {
    try {
      // TODO: Remplacer par Supabase Auth
      // Simuler la déconnexion
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setUser(null);
      localStorage.removeItem('climgo_user');
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
    }
  };

  const updateProfile = async (updates: Partial<User>) => {
    try {
      // TODO: Remplacer par Supabase
      // Simuler la mise à jour du profil
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (user) {
        const updatedUser = { ...user, ...updates };
        setUser(updatedUser);
        localStorage.setItem('climgo_user', JSON.stringify(updatedUser));
        return { error: undefined };
      }
      
      return { error: 'Utilisateur non connecté' };
    } catch (error) {
      return { error: 'Erreur lors de la mise à jour du profil' };
    }
  };

  const value: AuthContextType = {
    user,
    loading,
    signIn,
    signUp,
    signOut,
    updateProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook utilitaire pour vérifier si l'utilisateur est admin
export function useIsAdmin() {
  const { user } = useAuth();
  return user?.role === 'admin';
}

// Hook utilitaire pour vérifier si l'utilisateur est connecté
export function useIsAuthenticated() {
  const { user, loading } = useAuth();
  return { isAuthenticated: !!user, loading };
}

// Hook utilitaire pour obtenir les points d'activité
export function useActivityPoints() {
  const { user } = useAuth();
  return user?.points_activity || 0;
}
