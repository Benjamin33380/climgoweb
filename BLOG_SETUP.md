# Configuration du Blog ClimGo

## Variables d'environnement requises

Créez un fichier `.env.local` à la racine du projet avec les variables suivantes :

```env
# Base de données
DATABASE_URL="mongodb://localhost:27017/climgoweb"

# JWT
JWT_SECRET="votre_secret_jwt_tres_long_et_complexe_ici"

# Cloudinary
CLOUDINARY_CLOUD_NAME="votre_cloud_name"
CLOUDINARY_API_KEY="votre_api_key"
CLOUDINARY_API_SECRET="votre_api_secret"
```

## Installation et configuration

1. **Installer les dépendances** :
   ```bash
   npm install
   ```

2. **Générer le client Prisma** :
   ```bash
   npx prisma generate
   ```

3. **Pousser le schéma vers la base de données** :
   ```bash
   npx prisma db push
   ```

4. **Créer l'utilisateur admin** :
   ```bash
   npm run create-admin
   ```
   Cela créera un utilisateur admin avec :
   - Email : admin@climgo.fr
   - Mot de passe : admin123

## Utilisation

### Panel Admin
- **Connexion** : `/admin/login`
- **Dashboard** : `/admin/dashboard`
- **Nouvel article** : `/admin/articles/new`
- **Gestion commentaires** : `/admin/comments`

### Blog Public
- **Liste des articles** : `/blog`
- **Article individuel** : `/blog/[slug]`

## Fonctionnalités

### Pour l'admin :
- ✅ Création d'articles avec éditeur markdown
- ✅ Upload d'images via Cloudinary
- ✅ Gestion des commentaires (approuver/rejeter)
- ✅ Dashboard avec statistiques
- ✅ Authentification JWT sécurisée

### Pour les visiteurs :
- ✅ Lecture des articles publiés
- ✅ Système de commentaires
- ✅ Système de rating (1-5 étoiles)
- ✅ Interface responsive et moderne

## Structure des données

### Article
- Titre, contenu markdown, extrait
- Image principale (optionnelle)
- Métadonnées SEO automatiques
- Statut publié/brouillon
- Slug automatique généré

### Commentaire
- Auteur, email, contenu
- Statut approuvé/en attente
- Modération par l'admin

### Rating
- Note de 1 à 5 étoiles
- Calcul automatique de la moyenne
- Compteur total des avis

## Sécurité

- Authentification JWT pour l'admin
- Validation des données côté serveur
- Modération des commentaires
- Protection CSRF sur les formulaires
- Upload d'images sécurisé via Cloudinary

## Déploiement

1. Configurez vos variables d'environnement sur votre serveur
2. Assurez-vous que MongoDB est accessible
3. Configurez Cloudinary pour l'upload d'images
4. Déployez avec `npm run build && npm start` 