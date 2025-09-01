import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Types
export interface JWTPayload {
  userId: string;
  email: string;
  role: string;
  iat?: number;
  exp?: number;
}

export interface AuthResult {
  success: boolean;
  user?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  token?: string;
  error?: string;
}

// Configuration JWT
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production';
const JWT_EXPIRES_IN = '24h'; // Token valide 24h

// Générer un hash de mot de passe
export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 12;
  return bcrypt.hash(password, saltRounds);
}

// Vérifier un mot de passe
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

// Générer un token JWT
export function generateJWT(payload: Omit<JWTPayload, 'iat' | 'exp'>): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

// Vérifier un token JWT
export function verifyJWT(token: string): JWTPayload | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JWTPayload;
    return decoded;
  } catch (error) {
    console.error('Erreur de vérification du token:', error);
    return null;
  }
}

// Authentifier un utilisateur
export async function authenticateUser(email: string, password: string): Promise<AuthResult> {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        password: true,
        firstName: true,
        lastName: true,
        role: true,
        isActive: true,
        points: true
      }
    });

    if (!user || !user.isActive) {
      return { success: false, error: 'Utilisateur non trouvé ou inactif' };
    }

    const isValidPassword = await verifyPassword(password, user.password);
    if (!isValidPassword) {
      return { success: false, error: 'Mot de passe incorrect' };
    }

    // Générer le token
    const payload: Omit<JWTPayload, 'iat' | 'exp'> = {
      userId: user.id,
      email: user.email,
      role: user.role
    };

    const token = generateJWT(payload);

    // Retourner l'utilisateur sans le mot de passe
    const { password: _, ...userWithoutPassword } = user;

    return {
      success: true,
      user: userWithoutPassword,
      token
    };
  } catch (error) {
    console.error('Erreur d\'authentification:', error);
    return { success: false, error: 'Erreur interne du serveur' };
  }
}

// Déconnecter un utilisateur
export async function logoutUser(): Promise<boolean> {
  try {
    // Pour un système simple, on peut juste retourner true
    // Les tokens JWT expireront naturellement
    return true;
  } catch (error) {
    console.error('Erreur de déconnexion:', error);
    return false;
  }
}

// Créer un nouvel utilisateur
export async function createUser(userData: {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  role?: string;
}): Promise<AuthResult> {
  try {
    const hashedPassword = await hashPassword(userData.password);

    const user = await prisma.user.create({
      data: {
        email: userData.email,
        password: hashedPassword,
        firstName: userData.firstName,
        lastName: userData.lastName,
        role: (userData.role as any) || 'USER' // eslint-disable-line @typescript-eslint/no-explicit-any
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        isActive: true,
        emailVerified: true,
        createdAt: true
      }
    });

    return {
      success: true,
      user
    };
  } catch (error) {
    console.error('Erreur de création d\'utilisateur:', error);
    if (error instanceof Error && error.message.includes('Unique constraint')) {
      return { success: false, error: 'Un utilisateur avec cet email existe déjà' };
    }
    return { success: false, error: 'Erreur interne du serveur' };
  }
}

// Middleware pour vérifier l'authentification
export async function authenticateToken(token: string): Promise<JWTPayload | null> {
  const decoded = verifyJWT(token);
  if (!decoded) return null;

  // Vérifier que l'utilisateur existe toujours
  const user = await prisma.user.findUnique({
    where: { id: decoded.userId },
    select: { id: true, isActive: true }
  });

  if (!user || !user.isActive) return null;

  return decoded;
} 