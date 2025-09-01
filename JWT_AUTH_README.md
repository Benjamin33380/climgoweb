# 🔐 Système d'authentification JWT - ClimGo

## 📋 Vue d'ensemble

Système d'authentification JWT simple et sécurisé pour remplacer Supabase, utilisant MongoDB avec Prisma.

## ✨ Fonctionnalités

- **Authentification JWT** : Token unique valide 24h
- **Gestion des rôles** : USER, ADMIN, MODERATOR
- **Hashage sécurisé** : Mots de passe hashés avec bcrypt
- **Cookies sécurisés** : httpOnly, secure en production
- **Base MongoDB** : Avec Prisma ORM

## 🚀 Installation et configuration

### 1. Variables d'environnement

Créez un fichier `.env.local` :

```bash
DATABASE_URL="mongodb://localhost:27017/climgoweb"
JWT_SECRET="votre-clé-secrète-jwt-change-in-production"
```

### 2. Base de données

```bash
# Générer le client Prisma
npx prisma generate

# Pousser le schéma vers MongoDB
npx prisma db push
```

### 3. Créer le premier administrateur

```bash
npm run create-admin
```

Identifiants par défaut :
- **Email** : admin@climgo.fr
- **Mot de passe** : admin123

## 🔧 Structure des composants

### API Routes
- `/api/auth/login` - Connexion
- `/api/auth/register` - Inscription
- `/api/auth/logout` - Déconnexion
- `/api/auth/me` - Informations utilisateur

### Composants
- `UserProvider` - Context d'authentification
- `AuthForm` - Formulaire de connexion/inscription
- `UserMenu` - Menu utilisateur
- `ProtectedRoute` - Protection des routes
- `AdminNav` - Navigation d'administration

### Hooks
- `useUser()` - Accès au contexte d'authentification
- `useIsAdmin()` - Vérification du rôle admin
- `useIsAuthenticated()` - Vérification de la connexion

## 📱 Utilisation

### Connexion utilisateur
```typescript
const { login } = useUser();

const handleLogin = async () => {
  const result = await login(email, password);
  if (result.success) {
    // Redirection automatique
  } else {
    console.error(result.error);
  }
};
```

### Protection de routes
```typescript
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';

<ProtectedRoute requireAdmin={true}>
  <AdminDashboard />
</ProtectedRoute>
```

### Vérification des rôles
```typescript
const { user } = useUser();
const isAdmin = user?.role === 'ADMIN';
```

## 🔒 Sécurité

- **Tokens JWT** : Expiration automatique après 24h
- **Cookies** : httpOnly, secure en production
- **Mots de passe** : Hashés avec bcrypt (12 rounds)
- **Validation** : Vérification des rôles et statut actif

## 🗄️ Schéma de base de données

```prisma
model User {
  id            String    @id @default(auto()) @map("_id") @db.ObjectId
  email         String    @unique
  password      String
  firstName     String?
  lastName      String?
  role          UserRole  @default(USER)
  isActive      Boolean   @default(true)
  emailVerified Boolean   @default(false)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  
  articles      Article[]
  comments      Comment[]
}

enum UserRole {
  USER
  ADMIN
  MODERATOR
}
```

## 🧪 Tests

1. **Inscription** : `/auth` → Onglet Inscription
2. **Connexion** : `/auth` → Onglet Connexion
3. **Administration** : `/admin` (rôle ADMIN requis)
4. **Profil** : `/profile` (utilisateur connecté requis)

## 🔄 Migration depuis Supabase

- ✅ Suppression des dépendances Supabase
- ✅ Remplacement par système JWT personnalisé
- ✅ Conservation de la structure des composants
- ✅ Mise à jour des hooks d'authentification

## 📝 Notes importantes

- **Production** : Changez obligatoirement `JWT_SECRET`
- **MongoDB** : Assurez-vous que la base est accessible
- **Cookies** : Vérifiez la configuration HTTPS en production
- **Expiration** : Les tokens expirent automatiquement après 24h

## 🆘 Dépannage

### Erreur de connexion à MongoDB
```bash
# Vérifier que MongoDB est démarré
sudo systemctl status mongod

# Vérifier l'URL de connexion
echo $DATABASE_URL
```

### Erreur de génération Prisma
```bash
# Nettoyer et régénérer
rm -rf node_modules/.prisma
npx prisma generate
```

### Problème d'authentification
```bash
# Vérifier les variables d'environnement
cat .env.local

# Vérifier les cookies dans le navigateur
# DevTools → Application → Cookies
``` 