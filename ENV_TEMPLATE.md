# 📋 TEMPLATE .env ORGANISÉ PAR APPLICATION

Copiez ce contenu dans votre fichier `.env` et remplacez les valeurs marquées `REMPLACER_PAR_...`

```env
# =============================================================================
# 🌐 CONFIGURATION SITE WEB - ClimGO
# =============================================================================

# URLs du site (✅ OK - pas besoin de changer)
NEXT_PUBLIC_SITE_URL=https://www.climgo.fr
NEXT_PUBLIC_PHONE=+33766460008
NEXT_PUBLIC_EMAIL=contact@climgo.fr

# Google Analytics (✅ OK - pas besoin de changer)
NEXT_PUBLIC_GTM_ID=GTM-K5D2MM6F

# Google Maps (✅ OK - pas besoin de changer)
NEXT_PUBLIC_GOOGLE_API_KEY=AIzaSyAeJj0o8jLnWdM17iV1aNvs3PkX82DoxFc
NEXT_PUBLIC_GOOGLE_PLACE_ID=ChIJBa27vbqRXgURhTwbyljm6jU

# =============================================================================
# 🔐 SUPABASE - BASE DE DONNÉES ET AUTHENTIFICATION
# =============================================================================
# ⚠️ URGENT : RÉGÉNÉRER CES CLÉS SUR https://supabase.com/dashboard
# Projet : mpgyuwiwhfulbbilhkoy
# Settings → API → Reset Keys

NEXT_PUBLIC_SUPABASE_URL=https://mpgyuwiwhfulbbilhkoy.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=REMPLACER_PAR_NOUVELLE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY=REMPLACER_PAR_NOUVELLE_SERVICE_ROLE_KEY

# =============================================================================
# ☁️ CLOUDINARY - GESTION DES IMAGES
# =============================================================================
# ⚠️ URGENT : RÉGÉNÉRER CES CLÉS SUR https://cloudinary.com/console
# Dashboard → Settings → Security → Generate New API Key

CLOUDINARY_CLOUD_NAME=deudb7u9g
CLOUDINARY_API_KEY=REMPLACER_PAR_NOUVELLE_API_KEY
CLOUDINARY_API_SECRET=REMPLACER_PAR_NOUVEAU_SECRET
CLOUDINARY_URL=cloudinary://NOUVELLE_API_KEY:NOUVEAU_SECRET@deudb7u9g

# =============================================================================
# 📧 RESEND - ENVOI D'EMAILS / NEWSLETTER
# =============================================================================
# ⚠️ URGENT : RÉGÉNÉRER CETTE CLÉ SUR https://resend.com/api-keys
# Supprimer l'ancienne clé → Create API Key

RESEND_API_KEY=REMPLACER_PAR_NOUVELLE_RESEND_KEY

# =============================================================================
# 📮 SMTP - FORMULAIRE DE CONTACT
# =============================================================================
# ⚠️ URGENT : CHANGER LE MOT DE PASSE
# Gmail : Générer un nouveau "App Password"
# Autre : Changer le mot de passe du compte email

SMTP_USER=contact@climgo.fr
SMTP_PASSWORD=REMPLACER_PAR_NOUVEAU_MOT_DE_PASSE
SMTP_PASS=REMPLACER_PAR_NOUVEAU_MOT_DE_PASSE

# =============================================================================
# 🔴 UPSTASH REDIS - CACHE ET SESSIONS
# =============================================================================
# ⚠️ URGENT : RÉGÉNÉRER CES TOKENS SUR https://console.upstash.com/
# Sélectionner votre base Redis → Settings → Reset Token

UPSTASH_REDIS_REST_URL=REMPLACER_PAR_NOUVELLE_URL
UPSTASH_REDIS_REST_TOKEN=REMPLACER_PAR_NOUVEAU_TOKEN

# =============================================================================
# 🔒 SÉCURITÉ - JWT ET AUTHENTIFICATION
# =============================================================================
# ⚠️ URGENT : GÉNÉRER UN NOUVEAU SECRET
# Commande : node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

JWT_SECRET="REMPLACER_PAR_NOUVEAU_SECRET_64_CARACTERES"

# =============================================================================
# 📊 MONGODB (LEGACY - PEUT-ÊTRE SUPPRIMÉ)
# =============================================================================
# ⚠️ Cette variable semble être un reste de l'ancienne config
# Vérifiez si elle est encore utilisée

DATABASE_URL="mongodb+srv://climgocontact:faXXK2PSu1xrjD3WQcluster0.uq5codb.mongodb.net/climgodb?retryWrites=true&w=majority&appName=Cluster0"
```

## 📋 ORDRE DE REMPLACEMENT RECOMMANDÉ

### 🔥 PRIORITÉ 1 : SUPABASE (pour débloquer l'admin)
```env
NEXT_PUBLIC_SUPABASE_ANON_KEY=VOTRE_NOUVELLE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY=VOTRE_NOUVELLE_SERVICE_ROLE_KEY
```

### 🔥 PRIORITÉ 2 : CLOUDINARY (pour les images)
```env
CLOUDINARY_API_KEY=VOTRE_NOUVELLE_API_KEY
CLOUDINARY_API_SECRET=VOTRE_NOUVEAU_SECRET
CLOUDINARY_URL=cloudinary://NOUVELLE_API_KEY:NOUVEAU_SECRET@deudb7u9g
```

### 🔥 PRIORITÉ 3 : RESEND (pour les emails)
```env
RESEND_API_KEY=VOTRE_NOUVELLE_RESEND_KEY
```

### 🔥 PRIORITÉ 4 : REDIS (pour le cache)
```env
UPSTASH_REDIS_REST_URL=VOTRE_NOUVELLE_URL
UPSTASH_REDIS_REST_TOKEN=VOTRE_NOUVEAU_TOKEN
```

### 🔥 PRIORITÉ 5 : SMTP (pour le contact)
```env
SMTP_PASSWORD=VOTRE_NOUVEAU_MOT_DE_PASSE
SMTP_PASS=VOTRE_NOUVEAU_MOT_DE_PASSE
```

### 🔥 PRIORITÉ 6 : JWT SECRET
```bash
# Générer un nouveau secret
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

## 🎯 INSTRUCTIONS

1. **Copiez** ce template dans votre fichier `.env`
2. **Remplacez** chaque `REMPLACER_PAR_...` par la vraie valeur
3. **Commencez par SUPABASE** pour débloquer l'admin
4. **Testez** après chaque service : `npm run dev`
5. **Vérifiez l'admin** : `http://localhost:3001/admin/login`

## ⚡ COMMANDES UTILES

```bash
# Générer JWT Secret
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

# Tester l'admin
npm run check-admin

# Redémarrer le serveur
npm run dev
```
