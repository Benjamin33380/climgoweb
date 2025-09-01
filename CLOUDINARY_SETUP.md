# Configuration Cloudinary pour ClimGO

## 🔧 Configuration requise

Pour utiliser l'upload d'images dans les articles, vous devez configurer Cloudinary.

### 1. Créer un compte Cloudinary
- Allez sur [cloudinary.com](https://cloudinary.com)
- Créez un compte gratuit
- Récupérez vos informations d'identification

### 2. Variables d'environnement
Ajoutez ces variables dans votre fichier `.env.local` :

```bash
# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 3. Récupérer vos informations Cloudinary
1. Connectez-vous à votre dashboard Cloudinary
2. Allez dans "Dashboard" → "Account Details"
3. Copiez :
   - **Cloud name** → `CLOUDINARY_CLOUD_NAME`
   - **API Key** → `CLOUDINARY_API_KEY`
   - **API Secret** → `CLOUDINARY_API_SECRET`

### 4. Redémarrer le serveur
```bash
npm run dev
```

## 🚀 Utilisation

Une fois configuré, vous pourrez :
- ✅ Uploader des images par drag & drop
- ✅ Prévisualiser les images avant publication
- ✅ Optimiser automatiquement les images (1200x630)
- ✅ Stocker les images dans le dossier `climgo-articles`

## 📁 Structure des dossiers Cloudinary
- **Articles** : `climgo-articles/`
- **Images optimisées** : Format WebP automatique
- **Transformations** : Redimensionnement automatique

## 🔒 Sécurité
- Seuls les administrateurs peuvent uploader des images
- Validation des types de fichiers (PNG, JPG, GIF)
- Limite de taille : 5MB maximum
- Authentification requise pour chaque upload 