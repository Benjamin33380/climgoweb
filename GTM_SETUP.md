# Configuration Google Tag Manager (GTM)

## Variables d'environnement

Ajoutez la variable suivante dans votre fichier `.env.local` :

```bash
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

Remplacez `GTM-XXXXXXX` par votre véritable ID GTM.

## Utilisation

### 1. Initialisation automatique

Le composant `GoogleTagManager` s'initialise automatiquement dans votre application. Assurez-vous qu'il est inclus dans votre layout principal.

### 2. Envoi d'événements personnalisés

```typescript
import { sendGTMEvent } from '@/lib/analytics';

// Exemple d'événement de page vue
sendGTMEvent('page_view', {
  page_title: 'Accueil',
  page_location: '/',
  page_referrer: document.referrer
});

// Exemple d'événement de clic
sendGTMEvent('button_click', {
  button_name: 'contact',
  button_location: 'header'
});

// Exemple d'événement de formulaire
sendGTMEvent('form_submit', {
  form_name: 'contact_form',
  form_location: 'contact_page'
});
```

### 3. Événements automatiques

Les événements suivants sont automatiquement envoyés :

- `page_view` - À chaque changement de page
- `user_engagement` - Temps passé sur la page
- `scroll` - Défilement de la page

## Configuration GTM

### 1. Créer un compte GTM

1. Allez sur [Google Tag Manager](https://tagmanager.google.com/)
2. Créez un nouveau compte
3. Créez un nouveau conteneur
4. Copiez l'ID GTM (format : GTM-XXXXXXX)

### 2. Configurer Google Analytics 4

1. Dans GTM, créez un nouveau tag de type "Google Analytics: GA4 Configuration"
2. Ajoutez votre ID de mesure GA4
3. Configurez les déclencheurs appropriés

### 3. Configurer les événements personnalisés

1. Créez des variables personnalisées pour capturer les données
2. Créez des déclencheurs pour les événements
3. Créez des tags pour envoyer les données à GA4

## Exemples de configuration

### Déclencheur de clic sur bouton

```javascript
// Dans GTM, créez un déclencheur personnalisé
function() {
  return function() {
    var element = {{Click Element}};
    if (element && element.tagName === 'BUTTON') {
      return {
        button_name: element.textContent || element.getAttribute('aria-label'),
        button_location: {{Page Path}}
      };
    }
    return false;
  };
}
```

### Variable pour le titre de la page

```javascript
// Dans GTM, créez une variable personnalisée
function() {
  return document.title || 'Sans titre';
}
```

## Débogage

### 1. Mode aperçu GTM

1. Cliquez sur "Aperçu" dans GTM
2. Ouvrez votre site
3. Vérifiez que les événements se déclenchent

### 2. Console du navigateur

Vérifiez que `dataLayer` est bien initialisé :

```javascript
console.log(window.dataLayer);
```

### 3. Extension Google Tag Assistant

Installez l'extension "Tag Assistant Legacy" pour Chrome pour déboguer GTM.

## Bonnes pratiques

1. **Nommage des événements** : Utilisez des noms descriptifs et cohérents
2. **Paramètres** : N'envoyez que les données nécessaires
3. **Test** : Testez toujours en mode aperçu avant de publier
4. **Documentation** : Documentez tous vos événements personnalisés
5. **Performance** : Évitez d'envoyer trop d'événements

## Support

Pour plus d'informations, consultez :
- [Documentation officielle GTM](https://developers.google.com/tag-manager)
- [Documentation GA4](https://developers.google.com/analytics/devguides/collection/ga4)
- [Guide des événements GA4](https://developers.google.com/analytics/devguides/collection/ga4/events) 