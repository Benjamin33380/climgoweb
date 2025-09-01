export const authConfig = {
  // Clés JWT (à configurer dans les variables d'environnement)
  jwt: {
    secret: process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production',
    expiresIn: '24h'
  },
  
  // Configuration des cookies
  cookies: {
    authToken: 'auth-token',
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const
  },
  
  // Rôles utilisateur
  roles: {
    USER: 'USER',
    ADMIN: 'ADMIN',
    MODERATOR: 'MODERATOR'
  } as const
};

export type UserRole = typeof authConfig.roles[keyof typeof authConfig.roles]; 