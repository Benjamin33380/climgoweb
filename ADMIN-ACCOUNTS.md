# 👥 Comptes Administrateurs ClimGO

## 📊 Vue d'ensemble

Vous avez actuellement **3 comptes administrateurs** actifs dans votre base de données.

---

## 🔑 Comptes disponibles

### 1. 🏢 **Compte Oxelya** (Ancien)
- **Email:** `contact@oxelya.com`
- **Créé le:** 30/08/2025
- **Statut:** ✅ Actif
- **Usage:** Compte historique de Oxelya
- **Recommandation:** ⚠️ À désactiver ou supprimer si plus utilisé

---

### 2. 📧 **Compte Contact**
- **Email:** `contact@climgo.fr`
- **Mot de passe:** `admin123`
- **Créé le:** 06/10/2025
- **Statut:** ✅ Actif
- **Usage:** Compte créé aujourd'hui pour tests
- **Recommandation:** ⚠️ Peut être supprimé (mot de passe trop simple)

---

### 3. 🎯 **Compte Production** (PRINCIPAL)
- **Email:** `admin@climgo.fr`
- **Mot de passe:** `ClimGO2025!Prod`
- **Créé le:** 07/10/2025
- **Statut:** ✅ Actif
- **Usage:** 🌟 **COMPTE OFFICIEL POUR LA PRODUCTION**
- **Recommandation:** ✅ À utiliser en production
- **Sécurité:** Mot de passe fort, email professionnel

---

## 🌐 Connexion

### URL d'administration :
- **Production:** https://www.climgo.fr/admin/login
- **Local:** http://localhost:3000/admin/login

### Identifiants recommandés pour la production :
```
📧 Email: admin@climgo.fr
🔐 Mot de passe: ClimGO2025!Prod
```

---

## 🔒 Recommandations de sécurité

### Actions à faire maintenant :

1. ✅ **Tester le compte production**
   - Connectez-vous avec `admin@climgo.fr`
   - Vérifiez que tout fonctionne
   - Changez le mot de passe depuis l'interface admin

2. 🗑️ **Nettoyer les comptes inutiles**
   - Supprimez `contact@oxelya.com` si plus utilisé
   - Supprimez `contact@climgo.fr` (mot de passe trop simple)

3. 📝 **Sauvegarder les identifiants**
   - Notez les identifiants dans un gestionnaire de mots de passe
   - Conservez `.admin-credentials.txt` en lieu sûr
   - **NE PAS** commiter ce fichier dans Git

4. 🔐 **Bonnes pratiques**
   - Changez le mot de passe tous les 3-6 mois
   - N'utilisez PAS le même mot de passe ailleurs
   - Activez l'authentification à deux facteurs (si disponible)

---

## 🛠️ Scripts utiles

### Vérifier les comptes admin :
```bash
node scripts/checkAdminMongo.js
```

### Créer un nouveau compte admin :
```bash
node scripts/createAdminMongo.js
```

### Recréer le compte production :
```bash
node scripts/createProductionAdmin.js
```

---

## 🗑️ Supprimer un compte admin

Si vous souhaitez supprimer un compte admin (ex: contact@oxelya.com), utilisez MongoDB directement ou créez un script.

### Exemple de script de suppression :

```javascript
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function deleteAdmin() {
  await prisma.user.delete({
    where: { email: 'contact@oxelya.com' }
  });
  console.log('✅ Compte supprimé');
}

deleteAdmin();
```

---

## 📅 Historique

- **30/08/2025** : Création compte Oxelya
- **06/10/2025** : Création compte contact@climgo.fr (test)
- **07/10/2025** : Création compte admin@climgo.fr (production) ✨

---

## ⚠️ Important

- Les identifiants complets sont dans : `.admin-credentials.txt`
- Ce fichier est ajouté au `.gitignore` pour sécurité
- **NE JAMAIS** commiter les mots de passe dans Git
- Changez TOUJOURS le mot de passe après la première connexion

---

**Dernière mise à jour :** 07/10/2025

