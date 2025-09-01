# Configuration Nodemailer avec OVH/Zimbra

## 🚀 Vue d'ensemble

Ce projet utilise **nodemailer** pour envoyer des emails via votre serveur mail OVH/Zimbra (contact@climgo.fr).

## ⚙️ Variables d'environnement requises

Ajoutez ces variables dans votre fichier `.env` :

```bash
# Configuration SMTP OVH/Zimbra
SMTP_HOST=ssl0.ovh.net
SMTP_PORT=587
SMTP_USER=contact@climgo.fr
SMTP_PASS=votre_mot_de_passe_zimbra

# URL du site (pour les liens dans les emails)
NEXT_PUBLIC_SITE_URL=https://climgo.fr
```

## 🔧 Configuration SMTP

### Serveur OVH
- **Host :** `ssl0.ovh.net`
- **Port :** `587` (TLS) ou `465` (SSL)
- **Sécurité :** TLS recommandé
- **Authentification :** Oui

### Ports disponibles
- **Port 587 :** STARTTLS (recommandé)
- **Port 465 :** SSL/TLS direct
- **Port 25 :** Non recommandé (pas de chiffrement)

## 📧 Fonctionnalités

### 1. Envoi automatique lors de création d'articles
- Quand un article est créé et publié, une notification est automatiquement envoyée à tous les utilisateurs
- Template : `templateArticleCreatedNotification`

### 2. Envoi d'emails personnalisés
- Sélection des destinataires (utilisateurs + newsletter)
- Templates disponibles :
  - `templateArticleCreatedNotification` : Notification d'article
  - `templateCustomMail` : Email personnalisé

### 3. Gestion des destinataires
- **Utilisateurs :** Tous les utilisateurs avec email vérifié
- **Newsletter :** Abonnés à la newsletter
- **Déduplication :** Évite les doublons d'emails

## 🧪 Test de la configuration

### Bouton "Test SMTP"
1. Allez sur `/admin/newsletter`
2. Cliquez sur "Test SMTP"
3. Entrez votre email de test
4. Vérifiez la réception

### Vérification des logs
Les logs d'envoi apparaissent dans la console du serveur :
```
📧 Envoi de notification par email...
✅ 15 notifications envoyées avec succès
⚠️ 2 échecs d'envoi
```

## 🐛 Dépannage

### Erreur de connexion SMTP
```
❌ Erreur connexion SMTP: connect ECONNREFUSED
```
**Solutions :**
- Vérifiez `SMTP_HOST` et `SMTP_PORT`
- Vérifiez votre mot de passe Zimbra
- Testez avec un client mail externe

### Erreur d'authentification
```
❌ Erreur connexion SMTP: Invalid login
```
**Solutions :**
- Vérifiez `SMTP_USER` et `SMTP_PASS`
- Vérifiez que le compte n'est pas bloqué
- Testez la connexion sur OVH

### Emails non reçus
**Vérifications :**
1. Vérifiez les logs du serveur
2. Vérifiez le dossier spam
3. Testez avec un email différent
4. Vérifiez la configuration du serveur de réception

## 📋 Templates d'emails

### Variables disponibles
- `{{firstName}}` : Prénom du destinataire
- `{{articleTitle}}` : Titre de l'article
- `{{articleExcerpt}}` : Extrait de l'article
- `{{articleUrl}}` : Lien vers l'article
- `{{unsubscribeUrl}}` : Lien de désinscription

### Personnalisation
Les templates sont dans `src/lib/emailTemplates.ts` et peuvent être modifiés selon vos besoins.

## 🔒 Sécurité

- Les mots de passe SMTP ne sont jamais exposés côté client
- Utilisation de TLS pour le chiffrement des emails
- Validation des destinataires avant envoi
- Gestion des erreurs sans exposition d'informations sensibles

## 📱 Interface d'administration

### Page `/admin/newsletter`
- **Sélection des destinataires** : Liste tous les emails disponibles
- **Éditeur d'emails** : Création et prévisualisation
- **Test SMTP** : Vérification de la configuration
- **Statistiques** : Comptage des destinataires

### Fonctionnalités
- Recherche dans les destinataires
- Sélection multiple (tout, filtrés, individuels)
- Prévisualisation des emails
- Envoi par lots

## 🚀 Déploiement

### Variables d'environnement de production
```bash
# Production
SMTP_HOST=ssl0.ovh.net
SMTP_PORT=587
SMTP_USER=contact@climgo.fr
SMTP_PASS=votre_mot_de_passe_production
NEXT_PUBLIC_SITE_URL=https://climgo.fr
```

### Vérification post-déploiement
1. Testez la connexion SMTP
2. Envoyez un email de test
3. Vérifiez la réception
4. Testez la création d'article avec notification

## 📞 Support

En cas de problème :
1. Vérifiez les logs du serveur
2. Testez la configuration SMTP
3. Vérifiez les variables d'environnement
4. Contactez le support OVH si nécessaire 