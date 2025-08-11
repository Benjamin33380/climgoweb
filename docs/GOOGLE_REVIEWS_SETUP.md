# Configuration des Avis Google pour ClimGO

## 🚀 **Comment afficher les vrais avis Google**

### **1. Créer un fichier `.env.local`**

Créez un fichier `.env.local` à la racine du projet avec :

```bash
# Clé API Google pour les avis
NEXT_PUBLIC_GOOGLE_API_KEY=votre_clé_api_google_ici

# Place ID de ClimGO (à remplacer par votre vrai Place ID)
NEXT_PUBLIC_GOOGLE_PLACE_ID=votre_place_id_ici
```

### **2. Obtenir une clé API Google**

1. Allez sur [Google Cloud Console](https://console.cloud.google.com/)
2. Créez un nouveau projet ou sélectionnez un projet existant
3. Activez l'API "Places API"
4. Créez des identifiants (clé API)
5. Restreignez la clé à l'API Places uniquement

### **3. Obtenir votre Place ID**

1. Allez sur [Google Maps](https://maps.google.com/)
2. Recherchez votre entreprise "ClimGO"
3. Cliquez sur votre entreprise
4. Dans l'URL, vous verrez quelque chose comme : `place_id=ChIJ...`
5. Copiez cette valeur

### **4. Redémarrer le serveur**

Après avoir créé le fichier `.env.local`, redémarrez votre serveur de développement :

```bash
npm run dev
```

## 🔧 **Mode Développement vs Production**

- **En local** : Les avis statiques s'affichent automatiquement
- **En production** : Les vrais avis Google s'affichent si la clé API est configurée

## 📝 **Avis Statiques Actuels**

En attendant la configuration de l'API Google, le composant affiche 6 avis statiques réalistes :

1. **Marie Dubois** - 5★ - "Service impeccable ! Installation rapide et propre..."
2. **Jean Martin** - 5★ - "Excellent travail pour l'installation de notre pompe à chaleur..."
3. **Sophie Laurent** - 5★ - "Entreprise sérieuse et compétente. Installation de climatisation..."
4. **Pierre Dupont** - 5★ - "Installation pompe à chaleur impeccable. Équipe professionnelle..."
5. **Isabelle Moreau** - 5★ - "Service de qualité pour notre système de climatisation..."
6. **Michel Bernard** - 4★ - "Bonne prestation dans l'ensemble. Installation efficace..."

## ⚠️ **Sécurité**

- Ne commitez jamais votre fichier `.env.local`
- Le fichier est déjà dans `.gitignore`
- Restreignez votre clé API Google aux domaines autorisés uniquement

## 🎯 **Test**

Une fois configuré, vous devriez voir vos vrais avis Google s'afficher sur la page d'accueil dans la section "Avis Clients".


