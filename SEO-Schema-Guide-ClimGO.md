# Guide SEO Schema Layout - ClimGO Gironde

## 🎯 Objectifs du référencement local

- Couvrir toute la Gironde avec focus sur Bordeaux et Bassin d'Arcachon
- Optimiser pour les recherches "chauffagiste + ville"
- Équilibrer détail vs performance (Google privilégie la simplicité)

## ⚠️ Problèmes identifiés dans votre schema actuel

### 1. **Surcharge d'informations**
- Trop de villes listées dans `areaServed`
- Reviews fictives (Google peut pénaliser)
- JSON-LD trop volumineux (impact performance)

### 2. **Redondances**
- Multiples scripts JSON-LD pour des données similaires
- Informations dupliquées entre LocalBusiness et WebSite

## 🚀 Schema optimisé recommandé

### Structure principale simplifiée

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.climgo.fr/#organization",
  "name": "ClimGO",
  "url": "https://www.climgo.fr",
  "telephone": "+33766460008",
  "description": "Expert chauffage et climatisation en Gironde. Installation PAC, entretien, dépannage. Artisan RGE.",
  
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "28 rue de Cantelaude",
    "addressLocality": "Marcheprime",
    "postalCode": "33380",
    "addressCountry": "FR"
  },
  
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 44.6969,
    "longitude": -0.8533
  },
  
  "areaServed": [
    {
      "@type": "State",
      "name": "Gironde"
    },
    {
      "@type": "City", 
      "name": "Bordeaux"
    },
    {
      "@type": "Place",
      "name": "Bassin d'Arcachon"
    }
  ],
  
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "name": "RGE",
    "credentialCategory": "certification"
  },
  
  "priceRange": "€€",
  "openingHours": "Mo-Fr 08:00-19:30",
  
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33766460008",
    "contactType": "customer service"
  }
}
```

## 🏙️ Stratégie de couverture géographique

### Approche recommandée : 3 niveaux

1. **Niveau département** : Gironde (couverture globale)
2. **Niveau agglomération** : Bordeaux Métropole
3. **Niveau zone** : Bassin d'Arcachon

### Villes prioritaires à cibler dans le contenu

#### Zone Bordeaux (33000-33700)
- Bordeaux, Talence, Pessac, Mérignac, Bègles
- Villenave-d'Ornon, Gradignan, Le Bouscat

#### Bassin d'Arcachon (33120-33470)
- Arcachon, La Teste-de-Buch, Gujan-Mestras
- Andernos-les-Bains, Arès, Lège-Cap-Ferret

#### Périphérie stratégique
- Libourne, Langon, Blaye, Lesparre-Médoc

## 📍 Pages de destination locales recommandées

### Structure URL optimisée
```
/chauffagiste-bordeaux
/chauffagiste-bassin-arcachon  
/pompe-a-chaleur-gironde
/climatisation-bordeaux-metropole
/zones-intervention (page hub)
```

### Contenu local par page
- H1 avec ville + service : "Chauffagiste à Bordeaux | Installation PAC"
- Paragraphes mentionnant quartiers/communes limitrophes
- Témoignages géolocalisés
- Informations pratiques (délais, zones couvertes)

## 🔧 Schema technique simplifié

### 1. LocalBusiness (principal)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "ClimGO",
  "areaServed": [
    {"@type": "State", "name": "Gironde"},
    {"@type": "City", "name": "Bordeaux"}, 
    {"@type": "Place", "name": "Bassin d'Arcachon"}
  ]
}
```

### 2. Service (par page de service)
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Installation Pompe à Chaleur",
  "provider": {"@id": "https://www.climgo.fr/#organization"},
  "areaServed": {"@type": "State", "name": "Gironde"}
}
```

### 3. FAQ (questions géolocalisées)
```json
{
  "@context": "https://schema.org", 
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Quel est le prix d'une PAC à Bordeaux ?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "À Bordeaux, l'installation d'une PAC coûte entre 8000€ et 15000€ selon la surface. ClimGO intervient dans toute la métropole bordelaise."
    }
  }]
}
```

## 📊 KPIs de performance SEO local

### Métriques à surveiller
- **Positions locales** : "chauffagiste bordeaux", "PAC bassin arcachon"
- **Pack local Google** : apparition dans les 3 premiers résultats
- **CTR local** : taux de clic depuis Google Maps
- **Conversions géolocalisées** : appels/devis par zone

### Outils recommandés
- Google My Business Insights
- Google Search Console (requêtes géographiques)
- SEMrush Local SEO
- BrightLocal pour le suivi multi-villes

## ⚡ Optimisations techniques

### Performance Core Web Vitals
```javascript
// Charger les schemas de façon asynchrone
const loadSchema = () => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schemaData);
  document.head.appendChild(script);
};

// Charger après le contenu principal
window.addEventListener('load', loadSchema);
```

### Optimisation mobile
- Schema compact pour mobile
- Données essentielles en priorité
- Éviter les schemas > 10KB

## 🎯 Actions prioritaires

### Semaine 1 : Nettoyage
- [ ] Simplifier le schema LocalBusiness
- [ ] Supprimer les reviews fictives
- [ ] Réduire la liste areaServed à 3-5 éléments maximum

### Semaine 2 : Pages locales
- [ ] Créer /chauffagiste-bordeaux
- [ ] Créer /chauffagiste-bassin-arcachon
- [ ] Optimiser les titles/meta par ville

### Semaine 3 : Contenu géolocalisé
- [ ] Ajouter des FAQ par zone géographique
- [ ] Créer des témoignages clients avec localisation
- [ ] Optimiser Google My Business

### Semaine 4 : Monitoring
- [ ] Configurer le suivi des positions locales
- [ ] Analyser les performances Core Web Vitals
- [ ] Ajuster selon les premiers résultats

## 💡 Conseils bonus

### Schema "Service Area Business"
Pour une couverture géographique étendue, considérez le type `ServiceAreaBusiness` au lieu de `LocalBusiness` :

```json
{
  "@type": "ServiceAreaBusiness",
  "serviceArea": {
    "@type": "GeoCircle", 
    "geoMidpoint": {"latitude": 44.6969, "longitude": -0.8533},
    "geoRadius": "50000"
  }
}
```

### Citations locales
- Créer des profils Pages Jaunes par ville
- S'inscrire sur les annuaires locaux girondins
- Cohérence NAP (Name, Address, Phone) partout

### Contenu local authentique
- Photos d'interventions par zone
- Études de cas clients avec localisation
- Articles blog "Chauffage à [Ville]"

---

**Résultat attendu** : Amélioration du référencement local de 30-50% en 3 mois avec une réduction du temps de chargement grâce à des schemas plus légers.

## 📝 Notes d'implémentation

### Priorité immédiate
1. **Nettoyer le schema actuel** - Trop de données tuent la donnée
2. **Simplifier les zones desservies** - 3-5 zones max au lieu de 20+
3. **Supprimer les faux avis** - Risque de pénalité Google

### Stratégie long terme
- Développer des pages dédiées par ville principale
- Créer du contenu local authentique
- Optimiser Google My Business pour chaque zone

### Mesures de succès
- Position dans le pack local Google (top 3)
- Augmentation du trafic organique local (+30%)
- Amélioration du taux de conversion géolocalisé (+25%)
