# 🚨 CORRECTIONS SÉCURITÉ URGENTES - À FAIRE IMMÉDIATEMENT

## 1. **CHANGER LES MOTS DE PASSE** (CRITIQUE)

### Supabase Dashboard
1. Aller sur https://supabase.com/dashboard
2. Projet ClimGO → Authentication → Users
3. Créer un nouvel admin avec mot de passe fort :
   ```
   Email: contact@climgo.fr
   Password: [GÉNÉRER UN MOT DE PASSE FORT - 16+ caractères]
   ```

### Exemple de mot de passe fort :
```
Clim@GO2024!Secure#Admin$
```

## 2. **VARIABLES D'ENVIRONNEMENT** (URGENT)

### Fichier .env (à créer/modifier)
```env
# Supabase (OBLIGATOIRE)
NEXT_PUBLIC_SUPABASE_URL=https://votre-projet.supabase.co
SUPABASE_SERVICE_ROLE_KEY=votre_service_role_key_ici

# JWT Secret (OBLIGATOIRE)
JWT_SECRET=votre_secret_jwt_64_caracteres_minimum_ici

# SMTP (pour contact)
SMTP_USER=votre_email@gmail.com
SMTP_PASS=votre_app_password_gmail

# Cloudinary (pour images)
CLOUDINARY_CLOUD_NAME=votre_cloud_name
CLOUDINARY_API_KEY=votre_api_key
CLOUDINARY_API_SECRET=votre_api_secret
```

## 3. **VERCEL DEPLOYMENT** (URGENT)

### Variables d'environnement Vercel
1. Aller sur https://vercel.com/dashboard
2. Projet ClimGO → Settings → Environment Variables
3. Ajouter TOUTES les variables ci-dessus

## 4. **CERTIFICAT SSL** (CRITIQUE)

### Vérifications Vercel
1. Dashboard Vercel → Domains
2. Vérifier que climgo.fr pointe vers Vercel
3. Forcer HTTPS dans next.config.ts :

```typescript
const nextConfig = {
  // Forcer HTTPS
  async redirects() {
    return [
      {
        source: '/(.*)',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://climgo.fr/:path*',
        permanent: true,
      },
    ]
  },
}
```

## 5. **TESTS IMMÉDIATS**

### Après corrections :
1. `npm run build` - Vérifier que ça compile
2. Tester connexion admin avec nouveau mot de passe
3. Vérifier HTTPS sur climgo.fr
4. Scanner sécurité : https://securityheaders.com

## ⚠️ ORDRE D'EXÉCUTION

1. **MAINTENANT** - Changer mot de passe Supabase
2. **MAINTENANT** - Ajouter variables Vercel
3. **MAINTENANT** - Déployer corrections
4. **MAINTENANT** - Tester sécurité

---
**🔥 CES CORRECTIONS SONT CRITIQUES - NE PAS ATTENDRE !**
