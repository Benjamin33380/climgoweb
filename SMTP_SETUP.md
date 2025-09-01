# 📧 Configuration SMTP pour les notifications ClimGO

## 🔧 Variables d'environnement requises

Ajoutez ces variables dans votre fichier `.env.local` :

```bash
# Configuration SMTP pour les notifications
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"

# URL du site
NEXT_PUBLIC_SITE_URL="https://climgo.fr"
```

## 📧 Configuration Gmail

### 1. Activer l'authentification à 2 facteurs
- Allez dans les paramètres de votre compte Google
- Activez l'authentification à 2 facteurs

### 2. Générer un mot de passe d'application
- Allez dans "Sécurité" > "Mots de passe d'application"
- Sélectionnez "Mail" et générez un mot de passe
- Utilisez ce mot de passe dans `SMTP_PASS`

### 3. Autoriser l'accès moins sécurisé (alternative)
- Si vous ne voulez pas utiliser l'auth à 2 facteurs
- Activez "Accès moins sécurisé aux applications" dans les paramètres Google

## 📧 Configuration autres fournisseurs

### Outlook/Hotmail
```bash
SMTP_HOST="smtp-mail.outlook.com"
SMTP_PORT="587"
```

### Yahoo
```bash
SMTP_HOST="smtp.mail.yahoo.com"
SMTP_PORT="587"
```

### Serveur SMTP personnalisé
```bash
SMTP_HOST="votre-serveur-smtp.com"
SMTP_PORT="587" # ou 465 pour SSL
```

## 🧪 Test des notifications

1. **Configurez les variables SMTP**
2. **Redémarrez le serveur de développement**
3. **Allez dans l'admin** : `/admin/dashboard`
4. **Utilisez le composant "Test des notifications"**
5. **Saisissez votre email et testez**

## 📋 Fonctionnalités

- ✅ **Notifications automatiques** lors de la publication d'articles
- ✅ **Emails HTML** avec design ClimGO
- ✅ **Gestion des erreurs** et logs détaillés
- ✅ **Test en temps réel** depuis l'interface admin
- ✅ **Support multi-fournisseurs** SMTP

## 🚨 Dépannage

### Erreur "Authentication failed"
- Vérifiez `SMTP_USER` et `SMTP_PASS`
- Assurez-vous que l'auth à 2 facteurs est activé (Gmail)

### Erreur "Connection timeout"
- Vérifiez `SMTP_HOST` et `SMTP_PORT`
- Vérifiez votre pare-feu/antivirus

### Erreur "Relay not permitted"
- Vérifiez que votre fournisseur SMTP autorise l'envoi depuis votre serveur 