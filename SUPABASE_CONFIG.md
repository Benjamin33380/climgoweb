# 🔧 CONFIGURATION SUPABASE POUR LE PANNEAU ADMIN

## ❌ PROBLÈME IDENTIFIÉ
Vous ne pouvez pas accéder au panneau admin car **les variables d'environnement Supabase ne sont pas configurées**.

## ✅ SOLUTION ÉTAPE PAR ÉTAPE

### 📍 ÉTAPE 1 : CRÉER LE FICHIER .env
Créez un fichier `.env` à la racine du projet avec ce contenu :

```env
# Configuration Supabase - OBLIGATOIRE
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# Configuration Email (optionnel pour l'instant)
RESEND_API_KEY=your_resend_api_key_here
SMTP_USER=your_smtp_user_here
SMTP_PASS=your_smtp_password_here
```

### 📍 ÉTAPE 2 : RÉCUPÉRER VOS CLÉS SUPABASE

1. **Allez sur** : [https://supabase.com/dashboard](https://supabase.com/dashboard)
2. **Sélectionnez** votre projet ClimGO
3. **Allez dans** Settings → API
4. **Copiez** :
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **service_role secret** → `SUPABASE_SERVICE_ROLE_KEY`

### 📍 ÉTAPE 3 : VÉRIFIER VOTRE UTILISATEUR ADMIN

Une fois le `.env` configuré, exécutez :
```bash
npm run check-admin
```

### 📍 ÉTAPE 4 : CRÉER L'UTILISATEUR ADMIN (si nécessaire)

Si l'utilisateur n'existe pas, vous avez 2 options :

#### Option A : Via Supabase Dashboard
1. **Authentication** → **Users** → **Add user**
2. **Email** : `contact@climgo.fr`
3. **Password** : `benclimgo06`
4. **Confirm email** : ✅

#### Option B : Via SQL
Dans **SQL Editor** de Supabase :
```sql
-- 1. Créer l'utilisateur (si pas déjà fait via l'interface)
-- 2. Ajouter le profil admin
INSERT INTO users (
  id, 
  email, 
  username, 
  is_admin, 
  email_verified, 
  created_at
) VALUES (
  'USER_ID_FROM_AUTH',  -- Remplacez par l'ID de l'utilisateur Auth
  'contact@climgo.fr',
  'admin',
  true,
  true,
  now()
);
```

### 📍 ÉTAPE 5 : CONNEXION AU PANNEAU ADMIN

Une fois configuré :
1. **URL** : `http://localhost:3000/admin/login`
2. **Email** : `contact@climgo.fr`
3. **Mot de passe** : `benclimgo06`

## 🚨 IMPORTANT
**Sans le fichier `.env` avec les bonnes variables Supabase, le panneau admin ne peut pas fonctionner !**

## 🔧 COMMANDES UTILES
```bash
# Vérifier l'admin
npm run check-admin

# Créer l'admin (après config .env)
npm run create-admin-supabase

# Démarrer le serveur
npm run dev
```
