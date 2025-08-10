# 🎨 Guide du Scroll Shadow Global - ClimGO

## 📖 Vue d'ensemble

Ce guide explique comment utiliser et personnaliser le système de scroll shadow global qui remplace toutes les animations ScrollReveal sur votre site ClimGO.

## ✨ Avantages du nouveau système

- **Performance** : Plus d'animations JavaScript lourdes
- **Élégance** : Effet de flou subtil et professionnel
- **Personnalisable** : Taille, couleur et intensité du flou ajustables
- **Cohérent** : Même effet sur toutes les pages
- **Responsive** : S'adapte à tous les écrans

## 🎛️ Configuration

### Fichier de configuration principal
```typescript
// src/config/scrollShadow.ts
export const scrollShadowConfig = {
  size: 120,                    // Taille des ombres (px)
  shadowColor: 'rgba(3, 20, 74, 0.15)',  // Couleur ClimGO
  blurIntensity: 25,            // Intensité du flou (px)
  transitionDuration: 300       // Durée des transitions (ms)
};
```

### Personnalisation rapide

#### 1. **Taille des ombres**
```typescript
// Plus grand = ombres plus étendues
size: 150,  // Ombres très étendues
size: 80,   // Ombres compactes
```

#### 2. **Couleur des ombres**
```typescript
// Couleurs personnalisées
shadowColor: 'rgba(255, 0, 0, 0.2)',    // Rouge
shadowColor: 'rgba(0, 255, 0, 0.15)',    // Vert
shadowColor: 'rgba(0, 0, 255, 0.1)',     // Bleu
```

#### 3. **Intensité du flou**
```typescript
// Plus grand = plus flou
blurIntensity: 10,  // Flou subtil
blurIntensity: 40,  // Flou prononcé
```

## 🎨 Exemples de configurations

### Configuration Subtile (Recommandée)
```typescript
{
  size: 80,
  shadowColor: 'rgba(0, 0, 0, 0.08)',
  blurIntensity: 15
}
```

### Configuration Dramatique
```typescript
{
  size: 200,
  shadowColor: 'rgba(3, 20, 74, 0.25)',
  blurIntensity: 35
}
```

### Configuration Moderne
```typescript
{
  size: 120,
  shadowColor: 'rgba(59, 130, 246, 0.12)',
  blurIntensity: 20
}
```

## 🔧 Utilisation avancée

### Thème sombre/clair
```typescript
// src/config/scrollShadow.ts
export function getScrollShadowConfig(theme: 'light' | 'dark') {
  return {
    ...scrollShadowConfig,
    shadowColor: theme === 'dark' 
      ? 'rgba(0, 0, 0, 0.3)' 
      : 'rgba(3, 20, 74, 0.15)'
  };
}
```

### Composant personnalisé
```tsx
// Dans votre composant
import { GlobalScrollShadow } from '@/components/ui/GlobalScrollShadow';

<GlobalScrollShadow 
  size={150}
  shadowColor="rgba(255, 0, 0, 0.2)"
  blurIntensity={30}
>
  {/* Votre contenu */}
</GlobalScrollShadow>
```

## 📱 Responsive Design

Le scroll shadow s'adapte automatiquement :
- **Mobile** : Ombres plus petites et flou réduit
- **Tablet** : Taille moyenne
- **Desktop** : Configuration complète

## 🚀 Performance

- **Rendu GPU** : Utilise `transform` et `filter` pour de meilleures performances
- **Événements optimisés** : Gestion intelligente du scroll
- **Mémoire** : Pas de fuites mémoire

## 🎯 Cas d'usage

### 1. **Sites d'entreprise** (Recommandé)
```typescript
{
  size: 100,
  shadowColor: 'rgba(0, 0, 0, 0.1)',
  blurIntensity: 20
}
```

### 2. **Sites créatifs**
```typescript
{
  size: 150,
  shadowColor: 'rgba(59, 130, 246, 0.2)',
  blurIntensity: 30
}
```

### 3. **Sites minimalistes**
```typescript
{
  size: 60,
  shadowColor: 'rgba(0, 0, 0, 0.05)',
  blurIntensity: 15
}
```

## 🔍 Dépannage

### Ombres trop visibles
```typescript
// Réduire l'opacité
shadowColor: 'rgba(3, 20, 74, 0.08)'  // Plus transparent
```

### Flou trop prononcé
```typescript
// Réduire l'intensité
blurIntensity: 15  // Moins de flou
```

### Ombres trop étendues
```typescript
// Réduire la taille
size: 80  // Ombres plus compactes
```

## 📝 Notes importantes

- ✅ **Compatible** avec tous les navigateurs modernes
- ✅ **Accessible** : N'interfère pas avec la navigation clavier
- ✅ **SEO-friendly** : Pas d'impact sur le référencement
- ✅ **Maintenable** : Code simple et documenté

## 🎨 Personnalisation des couleurs ClimGO

### Palette officielle
```typescript
// Couleurs ClimGO
primary: 'rgba(3, 20, 74, 0.15)',     // Bleu principal
secondary: 'rgba(0, 0, 0, 0.08)',      // Noir subtil
accent: 'rgba(59, 130, 246, 0.1)'      // Bleu accent
```

### Variations
```typescript
// Plus clair
shadowColor: 'rgba(3, 20, 74, 0.08)'

// Plus foncé
shadowColor: 'rgba(3, 20, 74, 0.25)'

// Avec teinte
shadowColor: 'rgba(3, 20, 74, 0.12)'
```

---

**💡 Conseil** : Commencez avec la configuration par défaut et ajustez progressivement selon vos préférences !
