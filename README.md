# ClimGO - Système SEO Dynamique 🚀

Un système SEO avancé pour ClimGO, spécialiste climatisation et chauffage en Gironde, avec contenu dynamique et optimisation locale.

## 🌟 Fonctionnalités Principales

### 📍 SEO Localisé
- **Pages dynamiques par ville** : Andernos-les-Bains, Lanton, Marcheprime, Audenge
- **Mots-clés spécifiques** : Adaptés à chaque zone géographique
- **Contenu personnalisé** : Titres, descriptions et FAQ localisés

### 📅 Contenu Saisonnier
- **Titres adaptatifs** : Automatiquement ajustés selon la saison
- **Services prioritaires** : Mise en avant des services selon la période
- **Messages d'urgence** : Alertes canicule/hiver rigoureux

### 💰 Prix Dynamiques
- **Calcul intelligent** : Basé sur ville, saison et complexité
- **Multiplicateurs locaux** : Prix adaptés au marché de chaque ville
- **Facteurs saisonniers** : Climatisation plus chère en été, chauffage en hiver

### 🔍 SEO Technique
- **JSON-LD structuré** : Données riches pour Google
- **Sitemap dynamique** : Génération automatique XML
- **Meta tags optimisés** : Open Graph, Twitter Cards
- **URLs propres** : Structure `/ville/service`

## 🏗️ Architecture

```
src/
├── types/                    # Types TypeScript
├── lib/
│   ├── seo/                 # Logique SEO principale
│   │   ├── data-generator.ts    # Générateur SEO
│   │   ├── content-generator.ts # Générateur contenu
│   │   ├── city-database.ts     # Base villes
│   │   ├── service-database.ts  # Base services
│   │   └── sitemap-generator.ts # Générateur sitemap
│   ├── utils/
│   │   ├── seasons.ts       # Logique saisonnière
│   │   └── pricing.ts       # Calculs prix
│   └── constants/
│       └── business.ts      # Infos ClimGO
├── hooks/                   # Hooks React
├── components/seo/          # Composants SEO
└── app/                     # Pages Next.js
    ├── [city]/              # Pages villes dynamiques
    └── [city]/[service]/    # Pages services
```

## 🚀 Démarrage Rapide

### Installation
```bash
npm install
npm run dev
```

### URLs de Test
- **Page d'accueil** : `http://localhost:3000/`
- **Ville** : `http://localhost:3000/andernos-les-bains`
- **Service** : `http://localhost:3000/andernos-les-bains/climatisation-reversible`
- **Sitemap** : `http://localhost:3000/sitemap.xml`

## 📊 Exemples de Contenu Dynamique

### Titres SEO Saisonniers
- **Été** : "☀️ climatisation Andernos-les-Bains | ClimGO RGE Certifié"
- **Hiver** : "❄️ chauffage Andernos-les-Bains | ClimGO RGE Certifié"

### Prix Dynamiques
- **Climatisation Andernos** : 1,800€ - 8,000€ (multiplicateur 1.05)
- **PAC Lanton** : 8,160€ - 16,320€ (multiplicateur 1.02)

### FAQ Localisée
- Questions spécifiques à la zone océanique
- Réponses adaptées à chaque ville
- Conseils anti-corrosion pour le sel marin

## 🔧 Configuration

### Ajouter une Ville
```typescript
// src/lib/seo/city-database.ts
export const CITIES_DATABASE = {
  'nouvelle-ville': {
    name: 'Nouvelle Ville',
    slug: 'nouvelle-ville',
    postalCode: '33000',
    // ... autres propriétés
  }
};
```

### Ajouter un Service
```typescript
// src/lib/seo/service-database.ts
export const SERVICES_DATABASE = {
  'nouveau-service': {
    name: 'Nouveau Service',
    slug: 'nouveau-service',
    // ... autres propriétés
  }
};
```

## 📈 SEO Features

### Meta Tags Dynamiques
- **Title** : Adapté ville + saison + service
- **Description** : Inclut prix, téléphone, mots-clés
- **Keywords** : Mots-clés spécifiques ville + service

### JSON-LD Structuré
- **LocalBusiness** : Pour pages villes
- **Service** : Pour pages services
- **WebPage** : Pour pages d'accueil

### Sitemap XML
- **Génération automatique** : Toutes les URLs
- **Priorités** : Page accueil (1.0), villes (0.8), services (0.7)
- **Fréquence** : Mise à jour mensuelle

## 🎯 Optimisations Locales

### Zones Climatiques
- **Océanique** : Andernos, Lanton, Marcheprime, Audenge
- **Spécificités** : Protection sel marin, équipements anti-corrosion

### Mots-clés Spécifiques
- **Andernos** : "climatisation front de mer", "PAC résistante sel marin"
- **Lanton** : "chauffage villa Taussat", "climatisation Cassy"

### Prix Adaptés
- **Multiplicateurs** : 1.0 (Marcheprime) à 1.05 (Andernos)
- **Facteurs** : Population, revenus moyens, concurrence

## 🔄 Middleware SEO

### Redirections
- **Anciennes URLs** : `/chauffage-andernos` → `/andernos-les-bains/pac-air-eau`
- **WWW** : `www.climgo.fr` → `climgo.fr`
- **404** : URLs invalides → page 404 custom

## 📱 Responsive Design

- **Mobile-first** : Optimisé pour tous les écrans
- **Performance** : Images optimisées, lazy loading
- **Accessibilité** : Contrastes, navigation clavier

## 🚀 Déploiement

### Build Production
```bash
npm run build
npm start
```

### Variables d'Environnement
```env
NEXT_PUBLIC_GA_ID=GA-XXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

## 📞 Support

**ClimGO SARL**
- **Téléphone** : 07.66.46.00.08
- **Email** : contact@climgo.fr
- **Adresse** : 15 Avenue des Pins, 33380 Marcheprime

---

*Système développé pour optimiser le référencement local de ClimGO en Gironde* 🏆
