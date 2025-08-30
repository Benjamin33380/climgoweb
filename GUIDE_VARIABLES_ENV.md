# 🔧 GUIDE COMPLET : CONFIGURATION DES VARIABLES D'ENVIRONNEMENT

## ❌ PROBLÈME IDENTIFIÉ
Vos variables d'environnement apparaissent **en rouge dans Google** car elles contiennent des **clés sensibles exposées publiquement**.

## 🚨 SÉCURITÉ CRITIQUE
**JAMAIS exposer ces clés :**
- ❌ Service Role Keys
- ❌ API Keys privées  
- ❌ Mots de passe SMTP
- ❌ Tokens Redis

## 📍 ÉTAPE 1 : IDENTIFIER LES VARIABLES À REMPLACER

### 🔴 VARIABLES SENSIBLES (À RÉGÉNÉRER IMMÉDIATEMENT)

```env
# ⚠️ SUPABASE - RÉGÉNÉRER CES CLÉS
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# ⚠️ CLOUDINARY - RÉGÉNÉRER CES CLÉS
CLOUDINARY_API_SECRET=Bp9K0qZNP4ztDtME08NXltwC8fY
CLOUDINARY_API_KEY=833361592398452

# ⚠️ RESEND - RÉGÉNÉRER CETTE CLÉ
RESEND_API_KEY=re_9TNSEuCe_36CieK2GABnk6ZwGhGBv14Nq

# ⚠️ REDIS - RÉGÉNÉRER CES TOKENS
UPSTASH_REDIS_REST_TOKEN=AWoIAAIncDEyZThjYmQ2MmI3Mjc0ZTk2OTdjNTI1M2QzMWVlNWYyNHAxMjcxNDQ%

# ⚠️ SMTP - CHANGER LE MOT DE PASSE
SMTP_PASSWORD=benclimgo06
```

### 🟢 VARIABLES PUBLIQUES (OK)
```env
# ✅ Ces variables peuvent rester
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_PHONE=+33766460008
NEXT_PUBLIC_EMAIL=contact@climgo.fr
NEXT_PUBLIC_GTM_ID=GTM-K5D2MM6F
```

## 📍 ÉTAPE 2 : RÉGÉNÉRER LES CLÉS SUPABASE

### 🔑 SUPABASE
1. **Allez sur** : [https://supabase.com/dashboard](https://supabase.com/dashboard)
2. **Sélectionnez** votre projet : `mpgyuwiwhfulbbilhkoy`
3. **Settings** → **API**
4. **RÉGÉNÉREZ** les clés :
   - Cliquez sur **"Reset"** pour `anon` key
   - Cliquez sur **"Reset"** pour `service_role` key
5. **Copiez** les nouvelles clés

### 📝 REMPLACEZ DANS .env
```env
NEXT_PUBLIC_SUPABASE_URL=https://mpgyuwiwhfulbbilhkoy.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=NOUVELLE_ANON_KEY_ICI
SUPABASE_SERVICE_ROLE_KEY=NOUVELLE_SERVICE_ROLE_KEY_ICI
```

## 📍 ÉTAPE 3 : RÉGÉNÉRER LES CLÉS CLOUDINARY

### ☁️ CLOUDINARY
1. **Allez sur** : [https://cloudinary.com/console](https://cloudinary.com/console)
2. **Dashboard** → **Settings** → **Security**
3. **API Keys** → **Generate New API Key**
4. **Copiez** les nouvelles clés

### 📝 REMPLACEZ DANS .env
```env
CLOUDINARY_CLOUD_NAME=deudb7u9g
CLOUDINARY_API_KEY=NOUVELLE_API_KEY_ICI
CLOUDINARY_API_SECRET=NOUVEAU_SECRET_ICI
CLOUDINARY_URL=cloudinary://NOUVELLE_API_KEY:NOUVEAU_SECRET@deudb7u9g
```

## 📍 ÉTAPE 4 : RÉGÉNÉRER LA CLÉ RESEND

### 📧 RESEND
1. **Allez sur** : [https://resend.com/api-keys](https://resend.com/api-keys)
2. **Supprimez** l'ancienne clé exposée
3. **Create API Key** → Nouvelle clé
4. **Copiez** la nouvelle clé

### 📝 REMPLACEZ DANS .env
```env
RESEND_API_KEY=NOUVELLE_RESEND_KEY_ICI
```

## 📍 ÉTAPE 5 : RÉGÉNÉRER LES TOKENS REDIS

### 🔴 UPSTASH REDIS
1. **Allez sur** : [https://console.upstash.com/](https://console.upstash.com/)
2. **Sélectionnez** votre base Redis
3. **Settings** → **Reset Token**
4. **Copiez** les nouveaux tokens

### 📝 REMPLACEZ DANS .env
```env
UPSTASH_REDIS_REST_URL=NOUVELLE_URL_ICI
UPSTASH_REDIS_REST_TOKEN=NOUVEAU_TOKEN_ICI
```

## 📍 ÉTAPE 6 : CHANGER LE MOT DE PASSE SMTP

### 📮 SMTP (Gmail/Autre)
1. **Gmail** : Générez un nouveau "App Password"
2. **Autre** : Changez le mot de passe du compte email
3. **Mettez à jour** le mot de passe

### 📝 REMPLACEZ DANS .env
```env
SMTP_USER=contact@climgo.fr
SMTP_PASSWORD=NOUVEAU_MOT_DE_PASSE_ICI
SMTP_PASS=NOUVEAU_MOT_DE_PASSE_ICI
```

## 📍 ÉTAPE 7 : RÉGÉNÉRER LE JWT SECRET

### 🔐 JWT SECRET
```bash
# Générer un nouveau secret aléatoirement
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

### 📝 REMPLACEZ DANS .env
```env
JWT_SECRET="NOUVEAU_SECRET_GENERE_ICI"
```

## 📍 ÉTAPE 8 : FICHIER .env FINAL

Votre nouveau fichier `.env` devrait ressembler à :

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://www.climgo.fr
NEXT_PUBLIC_PHONE=+33766460008
NEXT_PUBLIC_EMAIL=contact@climgo.fr
NEXT_PUBLIC_GTM_ID=GTM-K5D2MM6F

# Supabase (NOUVELLES CLÉS)
NEXT_PUBLIC_SUPABASE_URL=https://mpgyuwiwhfulbbilhkoy.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=NOUVELLE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY=NOUVELLE_SERVICE_ROLE_KEY

# Cloudinary (NOUVELLES CLÉS)
CLOUDINARY_CLOUD_NAME=deudb7u9g
CLOUDINARY_API_KEY=NOUVELLE_API_KEY
CLOUDINARY_API_SECRET=NOUVEAU_SECRET
CLOUDINARY_URL=cloudinary://NOUVELLE_API_KEY:NOUVEAU_SECRET@deudb7u9g

# Email (NOUVELLES CLÉS)
RESEND_API_KEY=NOUVELLE_RESEND_KEY
SMTP_USER=contact@climgo.fr
SMTP_PASSWORD=NOUVEAU_MOT_DE_PASSE
SMTP_PASS=NOUVEAU_MOT_DE_PASSE

# Redis (NOUVEAUX TOKENS)
UPSTASH_REDIS_REST_URL=NOUVELLE_URL
UPSTASH_REDIS_REST_TOKEN=NOUVEAU_TOKEN

# Security (NOUVEAU SECRET)
JWT_SECRET="NOUVEAU_SECRET_64_CARACTERES"
```

## 📍 ÉTAPE 9 : TESTER LA CONFIGURATION

### 🧪 TESTS
```bash
# 1. Redémarrer le serveur
npm run dev

# 2. Tester l'admin
# Aller sur : http://localhost:3001/admin/login
# Email: contact@climgo.fr
# Password: benclimgo06

# 3. Vérifier l'admin
npm run check-admin
```

## 🚨 MESURES DE SÉCURITÉ SUPPLÉMENTAIRES

### 🔒 APRÈS RÉGÉNÉRATION
1. **Vérifiez** que l'ancien code n'est plus accessible
2. **Surveillez** les logs pour des tentatives d'accès
3. **Changez** le mot de passe admin si nécessaire
4. **Activez** l'authentification 2FA sur tous les services

### 📋 CHECKLIST SÉCURITÉ
- [ ] Supabase : Clés régénérées
- [ ] Cloudinary : Clés régénérées  
- [ ] Resend : Clé régénérée
- [ ] Redis : Tokens régénérés
- [ ] SMTP : Mot de passe changé
- [ ] JWT : Secret régénéré
- [ ] Tests : Tout fonctionne
- [ ] Monitoring : Logs vérifiés

## ⚡ COMMANDES RAPIDES

```bash
# Vérifier les variables
cat .env

# Tester la connexion admin
npm run check-admin

# Redémarrer le serveur
npm run dev

# Accéder au panneau admin
# http://localhost:3001/admin/login
```

## 🆘 EN CAS DE PROBLÈME

Si quelque chose ne fonctionne pas :
1. **Vérifiez** que toutes les clés sont bien copiées
2. **Redémarrez** le serveur complètement
3. **Consultez** les logs du navigateur (F12)
4. **Testez** une clé à la fois

---

**⚠️ IMPORTANT : Une fois toutes les clés régénérées, votre site sera à nouveau sécurisé !**
