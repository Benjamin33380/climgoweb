# 🔒 Guide HTTPS pour ClimGO

## 🎯 Problème : Icône de Verrouillage

L'icône de verrouillage (🔓) que vous voyez avec `http://localhost:3000` est **NORMALE** en développement local.

## 📋 Solutions Disponibles

### ✅ Option 1 : HTTP (Recommandé pour le développement)

```bash
npm run dev
```

- **URL** : `http://localhost:3000`
- **Icône** : 🔓 Non sécurisé (normal en dev)
- **Avantages** : 
  - Simple et rapide
  - Pas de configuration
  - Pas d'avertissements navigateur

### 🔒 Option 2 : HTTPS (Pour tester en conditions réelles)

```bash
npm run dev:https
```

- **URL** : `https://localhost:3001`
- **Icône** : 🔒 Sécurisé
- **Avantages** :
  - Teste les fonctionnalités HTTPS
  - Simule l'environnement de production
  - Certificat SSL auto-signé

## 🚀 Configuration HTTPS

### Installation automatique

```bash
npm run setup-https
```

Cette commande :
1. Crée le dossier `certs/`
2. Génère un certificat SSL auto-signé
3. Configure le serveur HTTPS

### Utilisation

```bash
# Démarrer en HTTPS
npm run dev:https

# Accéder au site
open https://localhost:3001
```

## ⚠️ Avertissement Navigateur

Avec le certificat auto-signé, votre navigateur affichera :

**"Votre connexion n'est pas privée"**

### Comment procéder :

1. Cliquez sur **"Avancé"**
2. Cliquez sur **"Continuer vers localhost (non sécurisé)"**
3. Le site se charge avec l'icône 🔒

## 🔧 Fichiers Créés

```
certs/
├── localhost.key  # Clé privée
└── localhost.crt  # Certificat SSL
```

Ces fichiers sont automatiquement ignorés par Git (`.gitignore`).

## 📊 Comparaison

| Aspect | HTTP | HTTPS |
|--------|------|-------|
| **URL** | `http://localhost:3000` | `https://localhost:3001` |
| **Icône** | 🔓 Non sécurisé | 🔒 Sécurisé |
| **Configuration** | Aucune | Certificat requis |
| **Avertissement** | Non | Oui (certificat auto-signé) |
| **Performance** | Plus rapide | Légèrement plus lent |
| **Usage** | Développement | Test production |

## 🎯 Recommandations

### Pour le développement quotidien :
```bash
npm run dev  # HTTP - Simple et efficace
```

### Pour tester les fonctionnalités HTTPS :
```bash
npm run dev:https  # HTTPS - Test réaliste
```

### Pour la production :
- Utilisez un vrai certificat SSL (Let's Encrypt, Cloudflare, etc.)
- Configurez HTTPS sur votre serveur de production

## 🔄 Basculer entre HTTP et HTTPS

```bash
# Arrêter le serveur actuel
pkill -f "next dev"

# Démarrer en HTTP
npm run dev

# OU démarrer en HTTPS
npm run dev:https
```

## 🛠️ Dépannage

### Erreur "openssl command not found"

**macOS :**
```bash
brew install openssl
```

**Ubuntu/Debian :**
```bash
sudo apt-get install openssl
```

### Port déjà utilisé

Si le port 3001 est occupé :
```bash
lsof -ti:3001 | xargs kill -9
```

### Régénérer le certificat

```bash
rm -rf certs/
npm run setup-https
```

## 📞 Support

**ClimGO SARL**
- **Téléphone** : 07.66.46.00.08
- **Email** : contact@climgo.fr

---

*Guide créé pour résoudre les problèmes d'icône de verrouillage en développement* 🔒
