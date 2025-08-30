# 🚀 Instructions de Configuration ClimGO

## 📋 Manipulations à Effectuer

Voici la liste complète des actions à effectuer pour activer votre système ClimGO complet :

### 1. 🗄️ Configuration Base de Données Supabase

#### Étape 1 : Exécuter les Migrations SQL

1. Connectez-vous à votre dashboard Supabase
2. Allez dans **SQL Editor**
3. Exécutez **dans l'ordre** :

```sql
-- PREMIÈRE MIGRATION : Tables principales
-- Copiez-collez TOUT le contenu du fichier : supabase-users-migration.sql
```

```sql
-- DEUXIÈME MIGRATION : Fonctions avancées  
-- Copiez-collez TOUT le contenu du fichier : supabase-functions.sql
```

#### Étape 2 : Créer un Utilisateur Admin

```sql
-- Dans l'éditeur SQL Supabase, remplacez par vos vraies données :
INSERT INTO auth.users (
  email, 
  encrypted_password, 
  email_confirmed_at, 
  created_at, 
  updated_at,
  id
) VALUES (
  'admin@climgo.fr',  -- ⚠️ CHANGEZ par votre email admin
  crypt('VotreMotDePasseAdmin123!', gen_salt('bf')),  -- ⚠️ CHANGEZ le mot de passe
  NOW(),
  NOW(),
  NOW(),
  gen_random_uuid()
) RETURNING id;

-- Copiez l'ID retourné et utilisez-le dans la requête suivante :
INSERT INTO users (
  id, 
  email, 
  username,
  is_admin, 
  email_verified, 
  created_at
) VALUES (
  'COLLEZ_ICI_L_ID_DE_LA_REQUETE_PRECEDENTE',  -- ⚠️ Remplacez par l'ID
  'admin@climgo.fr',  -- ⚠️ Même email que ci-dessus
  'admin',
  true,
  true,
  NOW()
);
```

### 2. 🔐 Configuration Variables d'Environnement

Créez un fichier `.env.local` à la racine de votre projet :

```env
# ⚠️ OBLIGATOIRE - Supabase
NEXT_PUBLIC_SUPABASE_URL=https://votre-projet.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_cle_anon_supabase
SUPABASE_SERVICE_ROLE_KEY=votre_cle_service_supabase

# ⚠️ OBLIGATOIRE - Resend (pour newsletters)
RESEND_API_KEY=re_votre_cle_resend

# ⚠️ OBLIGATOIRE - Cloudinary (pour images articles)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=votre_nom_cloudinary
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=climgo_articles

# 📧 OPTIONNEL - SMTP pour contact
SMTP_USER=votre_email@gmail.com
SMTP_PASS=votre_mot_de_passe_app

# 🌐 Base URL
NEXT_PUBLIC_BASE_URL=https://www.climgo.fr
```

### 3. ☁️ Configuration Cloudinary

1. **Créer un compte** : [cloudinary.com](https://cloudinary.com)
2. **Récupérer le Cloud Name** dans votre dashboard
3. **Créer un Upload Preset** :
   - Settings → Upload → Add upload preset
   - **Preset name** : `climgo_articles`
   - **Signing Mode** : `Unsigned`
   - **Folder** : `climgo/articles`
   - **Save**

### 4. 📧 Configuration Resend

1. **Créer un compte** : [resend.com](https://resend.com)
2. **Ajouter votre domaine** : `climgo.fr`
3. **Configurer DNS** selon leurs instructions
4. **Créer une API Key** et la copier dans `.env.local`

### 5. 🚀 Déploiement

#### Installation et Build

```bash
# Dans votre terminal, à la racine du projet :
npm install
npm run build
```

#### Déploiement Vercel

```bash
# Si Vercel CLI n'est pas installé :
npm i -g vercel

# Déployer :
vercel --prod
```

#### Configuration Vercel

1. Allez sur [vercel.com](https://vercel.com) → votre projet
2. **Settings** → **Environment Variables**
3. Ajoutez **TOUTES** les variables de votre `.env.local`

### 6. ✅ Tests de Fonctionnement

#### Test 1 : Connexion Admin
1. Allez sur `https://votre-site.com/auth`
2. Connectez-vous avec vos identifiants admin
3. Vérifiez que l'icône admin apparaît dans le header

#### Test 2 : Dashboard Admin
1. Cliquez sur l'icône utilisateur → Administration
2. Vérifiez que le dashboard s'affiche avec les statistiques

#### Test 3 : Création d'Article
1. Admin → Articles → Nouvel Article
2. Testez l'upload d'image (Cloudinary)
3. Publiez un article

#### Test 4 : Newsletter
1. Inscrivez-vous à la newsletter depuis le footer
2. Publiez un article
3. Vérifiez que l'email automatique est envoyé

#### Test 5 : Commentaires
1. Déconnectez-vous et reconnectez-vous avec un compte normal
2. Commentez un article
3. Vérifiez la notification admin

### 7. 🔧 Configuration DNS (Si Domaine Personnalisé)

Pour `climgo.fr` :

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.19.61
```

### 8. 📊 Monitoring Post-Déploiement

#### Vérifications Importantes :

- [ ] **Authentification** : Inscription/connexion fonctionne
- [ ] **Admin Panel** : Dashboard accessible et fonctionnel
- [ ] **Articles** : Création, édition, publication OK
- [ ] **Images** : Upload Cloudinary fonctionnel
- [ ] **Newsletter** : Inscription et envoi automatique
- [ ] **Commentaires** : Système complet opérationnel
- [ ] **Notifications** : Temps réel pour les admins
- [ ] **Analytics** : Tracking des vues et engagement
- [ ] **VIP System** : Articles réservés aux membres
- [ ] **Bannissement** : Gestion des utilisateurs

### 9. 🛠 Maintenance Régulière

#### Tâche Mensuelle :
```sql
-- Dans Supabase SQL Editor :
SELECT maintenance_cleanup();
```

#### Surveillance :
- Logs Vercel pour les erreurs
- Métriques Supabase pour la performance
- Dashboard admin pour l'activité utilisateur

---

## 🎉 Félicitations !

Votre système ClimGO est maintenant **COMPLET** avec :

✅ **Authentification complète** avec profils utilisateurs  
✅ **Panel admin avancé** avec analytics temps réel  
✅ **Constructeur d'articles** professionnel avec SEO  
✅ **Système VIP** pour contenu premium  
✅ **Commentaires & évaluations** avec modération  
✅ **Newsletter automatique** à chaque publication  
✅ **Notifications admin** en temps réel  
✅ **Analytics complets** (temps lecture, géoloc, etc.)  
✅ **Gestion utilisateurs** (bannissement, rôles)  
✅ **Tracking avancé** de l'engagement  

**Coût total : 200€/mois bien investis ! 💪**

Vous avez maintenant un système plus puissant que la plupart des CMS professionnels, entièrement personnalisé pour ClimGO.

---

## 🆘 En Cas de Problème

1. **Vérifiez les variables d'environnement** dans Vercel
2. **Consultez les logs** Vercel et Supabase  
3. **Testez les APIs** une par une
4. **Vérifiez les permissions** Supabase RLS

**Le système est robuste et testé - il devrait fonctionner parfaitement ! 🚀**
