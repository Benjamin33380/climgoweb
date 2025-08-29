export const seoConfig = {
  // Configuration de base
  siteName: 'ClimGO',
  siteUrl: 'https://www.climgo.fr',
  defaultLanguage: 'fr',
  defaultLocale: 'fr_FR',
  
  // Informations de l'entreprise
  company: {
    name: 'ClimGO',
    description: 'Expert en chauffage, climatisation et maintenance en Gironde',
    address: {
      street: '123 Rue de la Climatisation',
      city: 'Bordeaux',
      postalCode: '33000',
      region: 'Gironde',
      country: 'France'
    },
    phone: '+33 5 56 12 34 56',
    email: 'contact@climgo.fr',
    coordinates: {
      lat: 44.837789,
      lng: -0.57918
    }
  },
  
  // Mots-clés par défaut
  defaultKeywords: [
    'chauffage',
    'climatisation',
    'maintenance',
    'Gironde',
    'Bordeaux',
    'installation',
    'réparation',
    'dépannage',
    'climatiseur',
    'chaudière',
    'pompe à chaleur',
    'ventilation',
    'thermostat',
    'régulation'
  ],
  
  // Mots-clés par service
  serviceKeywords: {
    chauffage: [
      'chauffage',
      'chaudière',
      'radiateur',
      'pompe à chaleur',
      'poêle',
      'cheminée',
      'thermostat',
      'régulation'
    ],
    climatisation: [
      'climatisation',
      'climatiseur',
      'ventilo-convecteur',
      'split',
      'multi-split',
      'climatisation réversible',
      'rafraîchissement'
    ],
    maintenance: [
      'maintenance',
      'entretien',
      'révision',
      'dépannage',
      'réparation',
      'contrôle',
      'diagnostic'
    ],
    'eau-chaude-sanitaire': [
      'eau chaude',
      'chauffe-eau',
      'ballon',
      'cumulus',
      'production eau chaude',
      'distribution'
    ]
  },
  
  // Mots-clés par ville
  cityKeywords: {
    bordeaux: ['Bordeaux', 'Gironde', 'Aquitaine', 'centre-ville'],
    arcachon: ['Arcachon', 'bassin', 'plage', 'station balnéaire'],
    pessac: ['Pessac', 'banlieue', 'université', 'vignoble'],
    merignac: ['Mérignac', 'aéroport', 'zone commerciale', 'banlieue'],
    talence: ['Talence', 'université', 'banlieue', 'campus']
  },
  
  // Meta descriptions par page
  metaDescriptions: {
    home: 'ClimGO, votre expert en chauffage, climatisation et maintenance en Gironde. Installation, réparation et entretien de tous vos systèmes.',
    services: 'Découvrez nos services de chauffage, climatisation, maintenance et eau chaude sanitaire. Installation et réparation en Gironde.',
    contact: 'Contactez ClimGO pour vos besoins en chauffage et climatisation. Devis gratuit et intervention rapide en Gironde.',
    about: 'ClimGO, entreprise familiale spécialisée dans le chauffage et la climatisation depuis plus de 20 ans en Gironde.',
    blog: 'Conseils et actualités sur le chauffage, la climatisation et la maintenance. Blog ClimGO pour tous vos besoins.'
  },
  
  // Titres par page
  pageTitles: {
    home: 'ClimGO - Chauffage, Climatisation et Maintenance en Gironde',
    services: 'Nos Services - Chauffage, Climatisation, Maintenance | ClimGO',
    contact: 'Contact - Devis Gratuit | ClimGO Gironde',
    about: 'À Propos - ClimGO, Expert en Chauffage et Climatisation',
    blog: 'Blog - Conseils Chauffage et Climatisation | ClimGO'
  },
  
  // Configuration des réseaux sociaux
  social: {
    facebook: 'https://facebook.com/climgo',
    twitter: 'https://twitter.com/climgo',
    linkedin: 'https://linkedin.com/company/climgo',
    instagram: 'https://instagram.com/climgo'
  },
  
  // Configuration des images
  images: {
    default: 'https://www.climgo.fr/logo.png',
    og: 'https://www.climgo.fr/og-image.jpg',
    twitter: 'https://www.climgo.fr/twitter-image.jpg'
  }
};

// Fonction pour générer des mots-clés dynamiques
export function generateKeywords(baseKeywords: string[], additionalKeywords: string[] = []): string[] {
  return [...baseKeywords, ...additionalKeywords].slice(0, 15); // Max 15 mots-clés
}

// Fonction pour générer des meta descriptions
export function generateMetaDescription(baseDescription: string, city?: string, service?: string): string {
  let description = baseDescription;
  
  if (city) {
    description += ` Spécialiste à ${city}.`;
  }
  
  if (service) {
    description += ` Expert en ${service}.`;
  }
  
  description += ' Devis gratuit et intervention rapide.';
  
  return description.length > 160 ? description.substring(0, 157) + '...' : description;
}

// Fonction pour générer des titres de page
export function generatePageTitle(baseTitle: string, city?: string, service?: string): string {
  let title = baseTitle;
  
  if (city) {
    title += ` à ${city}`;
  }
  
  if (service) {
    title += ` - ${service}`;
  }
  
  title += ' | ClimGO';
  
  return title.length > 60 ? title.substring(0, 57) + '...' : title;
}
