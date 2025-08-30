# 🚀 Guide de Déploiement Production ClimGO

## 📋 Checklist Complète pour la Production

### 1. 🗄️ Configuration Base de Données

#### A. Exécuter le Script SQL Principal
```sql
-- Dans l'éditeur SQL de Supabase Production :
-- Copiez-collez TOUT le contenu de PRODUCTION_DATABASE_SETUP.sql
-- Exécutez le script complet
```

#### B. Créer l'Utilisateur Admin
```bash
# En local, avec les variables d'environnement de PRODUCTION :
npm run create-admin-supabase
```

#### C. Vérifier l'Admin
```bash
# Vérifier que l'admin existe :
npm run check-admin
```

### 2. 🔐 Variables d'Environnement Production

#### Variables Supabase (CRITIQUES)
```env
NEXT_PUBLIC_SUPABASE_URL=https://votre-projet.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
```

#### Variables Email
```env
RESEND_API_KEY=re_...
CONTACT_EMAIL=contact@climgo.fr
```

#### Variables JWT
```env
JWT_SECRET=votre-secret-super-securise-production
```

#### Variables Optionnelles
```env
GOOGLE_REVIEWS_API_KEY=AIza...
UPSTASH_REDIS_REST_URL=https://...
UPSTASH_REDIS_REST_TOKEN=...
```

### 3. 🔧 Vérifications Techniques

#### A. Tests Fonctionnels
- [ ] ✅ Connexion admin fonctionne
- [ ] ✅ Création d'articles
- [ ] ✅ Système de commentaires
- [ ] ✅ Système de notes/évaluations
- [ ] ✅ Newsletter
- [ ] ✅ Authentification utilisateurs
- [ ] ✅ Dashboard utilisateur
- [ ] ✅ Modération admin

#### B. Tests de Performance
- [ ] ✅ Globe 3D s'affiche correctement
- [ ] ✅ Logo 3D fonctionne
- [ ] ✅ Pages se chargent rapidement
- [ ] ✅ Images optimisées
- [ ] ✅ SEO configuré

#### C. Tests de Sécurité
- [ ] ✅ RLS activé sur toutes les tables
- [ ] ✅ Policies configurées
- [ ] ✅ Variables sensibles sécurisées
- [ ] ✅ HTTPS activé

### 4. 🚀 Déploiement

#### A. Build et Test Local
```bash
# Nettoyer et builder
npm run build

# Tester en local
npm start
```

#### B. Déploiement Vercel/Netlify
```bash
# Push vers le repo
git add .
git commit -m "🚀 Production ready - Database synchronized"
git push origin main

# Le déploiement se fait automatiquement
```

### 5. 🔍 Post-Déploiement

#### A. Vérifications Immédiates
1. **Site accessible** : https://climgo.fr
2. **Admin accessible** : https://climgo.fr/admin/login
3. **Connexion admin** : contact@climgo.fr / benclimgo06
4. **Blog fonctionnel** : https://climgo.fr/blog
5. **Newsletter** : Test d'inscription

#### B. Tests Utilisateur
1. **Inscription utilisateur**
2. **Connexion utilisateur**
3. **Commentaire sur article**
4. **Note sur article**
5. **Dashboard utilisateur**

#### C. Tests Admin
1. **Connexion admin**
2. **Création d'article**
3. **Modération commentaires**
4. **Gestion utilisateurs**
5. **Statistiques dashboard**

### 6. 🛠️ Maintenance

#### A. Tâches Automatiques
- Nettoyage des sessions (24h)
- Suppression anciennes notifications (90j)
- Suppression anciennes vues (1 an)

#### B. Tâches Manuelles
```sql
-- À exécuter périodiquement en production :
SELECT maintenance_cleanup();
```

### 7. 🚨 Résolution de Problèmes

#### Problème : Admin ne peut pas se connecter
```bash
# Vérifier l'admin existe
npm run check-admin

# Recréer si nécessaire
npm run create-admin-supabase
```

#### Problème : Tables manquantes
```sql
-- Ré-exécuter le script complet
-- PRODUCTION_DATABASE_SETUP.sql
```

#### Problème : RLS bloque les requêtes
```sql
-- Vérifier les policies
SELECT * FROM pg_policies WHERE schemaname = 'public';

-- Désactiver temporairement si nécessaire
ALTER TABLE nom_table DISABLE ROW LEVEL SECURITY;
```

### 8. 📊 Monitoring

#### Métriques à Surveiller
- Nombre d'utilisateurs actifs
- Articles publiés
- Commentaires en attente
- Performance des pages
- Erreurs 500

#### Logs Importants
- Erreurs d'authentification
- Échecs de connexion DB
- Erreurs API
- Problèmes de build

### 9. 🔄 Synchronisation Dev/Prod

#### Garder la Cohérence
1. **Même structure DB** : Utiliser le même script SQL
2. **Mêmes variables** : Adapter selon l'environnement
3. **Tests identiques** : Même checklist
4. **Code synchronisé** : Git flow propre

#### Script de Sync (si nécessaire)
```bash
# Sauvegarder la prod avant sync
# Appliquer les changements
# Tester immédiatement
# Rollback si problème
```

---

## ✅ Résumé Final

**Fichiers Critiques :**
- `PRODUCTION_DATABASE_SETUP.sql` - Script DB complet
- `.env` - Variables d'environnement
- `scripts/createAdminSupabase.js` - Création admin

**Commandes Essentielles :**
```bash
npm run create-admin-supabase  # Créer admin
npm run check-admin           # Vérifier admin
npm run build                 # Builder pour prod
```

**URLs Importantes :**
- Admin : https://climgo.fr/admin/login
- Blog : https://climgo.fr/blog
- API : https://climgo.fr/api/*

**Identifiants Admin :**
- Email : contact@climgo.fr
- Mot de passe : benclimgo06

---

🎉 **Votre site ClimGO est maintenant prêt pour la production !**
