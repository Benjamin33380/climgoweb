// FAQ optimisées SEO pour les pages de villes
// Questions basées sur les requêtes les plus populaires sur les moteurs de recherche

export interface FAQItem {
  question: string;
  answer: string;
}

// Questions les plus recherchées sur Google pour chauffage/climatisation/pompes à chaleur
export const seoOptimizedFAQs = {
  // FAQ Set 1 - Focus Pompe à Chaleur & Prix
  set1: [
    {
      question: "Quel est le prix d'une pompe à chaleur air-eau ?",
      answer: "Le prix varie entre 8 000€ et 16 000€ selon la puissance et les options. Avec les aides (MaPrimeRénov', CEE), le reste à charge peut être réduit de 40 à 70%. Je vous établis un devis personnalisé gratuit."
    },
    {
      question: "Combien consomme une climatisation par mois ?",
      answer: "Une climatisation moderne consomme 15-25€/mois pour 100m². Les modèles inverter récents sont 3x plus économiques que les anciens. Je vous conseille selon votre budget et vos besoins."
    },
    {
      question: "Quelles aides pour installer une pompe à chaleur en 2024 ?",
      answer: "MaPrimeRénov' (jusqu'à 4 000€), CEE (jusqu'à 2 500€), éco-PTZ, TVA réduite 5,5%. Je m'occupe de toutes vos démarches administratives pour maximiser vos aides."
    },
    {
      question: "Quelle différence entre PAC air-air et air-eau ?",
      answer: "Air-air : climatisation uniquement. Air-eau : chauffage + eau chaude sanitaire. La PAC air-eau est plus polyvalente et éligible à plus d'aides. Je vous explique tout lors du devis."
    }
  ],

  // FAQ Set 2 - Focus Entretien & Dépannage
  set2: [
    {
      question: "À quelle fréquence entretenir sa climatisation ?",
      answer: "Entretien annuel obligatoire pour les unités >12kW. Pour les autres, je recommande tous les 2 ans. Nettoyage des filtres tous les 3 mois. Je propose des contrats d'entretien avantageux."
    },
    {
      question: "Pourquoi ma pompe à chaleur fait du bruit ?",
      answer: "Souvent dû à un manque d'entretien ou un défaut d'installation. Ventilateur encrassé, vibrations, réfrigérant... J'interviens rapidement pour diagnostiquer et réparer."
    },
    {
      question: "Combien coûte un dépannage de chauffage ?",
      answer: "Diagnostic : 60-80€. Réparations courantes : 150-300€. Interventions d'urgence : +50€. Devis gratuit, tarifs transparents, aucune surprise sur la facture."
    },
    {
      question: "Ma chaudière ne démarre plus, que faire ?",
      answer: "Vérifiez pression, thermostat, disjoncteur. Si le problème persiste, coupez l'arrivée de gaz et appelez-moi. J'interviens en urgence 7j/7 pour remettre votre chauffage en marche."
    }
  ],

  // FAQ Set 3 - Focus Installation & Réglementation  
  set3: [
    {
      question: "Faut-il un permis pour installer une climatisation ?",
      answer: "Unité extérieure ≤20kg : déclaration préalable. >20kg ou façade classée : permis requis. Je gère toutes les démarches administratives pour une installation conforme."
    },
    {
      question: "Quelle puissance de PAC pour 100m² ?",
      answer: "6-8 kW selon isolation et région. Calcul précis basé sur bilan thermique : surface, isolation, exposition, nombre d'occupants. Je dimensionne parfaitement votre installation."
    },
    {
      question: "Peut-on installer une PAC sur un chauffage existant ?",
      answer: "Oui, souvent possible avec radiateurs ou plancher chauffant existants. Système hybride ou remplacement complet selon votre configuration. Étude personnalisée gratuite."
    },
    {
      question: "Combien de temps pour installer une pompe à chaleur ?",
      answer: "1-2 jours selon complexité. Pose unité extérieure, raccordements, mise en service, réglages. Installation certifiée RGE avec garantie constructeur et main d'œuvre."
    }
  ],

  // FAQ Set 4 - Focus Économies & Performance
  set4: [
    {
      question: "Une pompe à chaleur est-elle rentable ?",
      answer: "Retour sur investissement 5-8 ans. Économies 40-60% sur facture chauffage. COP jusqu'à 4 (4kW produits pour 1kW consommé). Rentabilité excellente avec les aides actuelles."
    },
    {
      question: "La climatisation réversible chauffe-t-elle bien l'hiver ?",
      answer: "Oui, efficace jusqu'à -15°C pour les modèles récents. COP de 3-4 même par temps froid. Idéal en demi-saison, complément possible par grand froid selon région."
    },
    {
      question: "Quel entretien pour un chauffe-eau thermodynamique ?",
      answer: "Détartrage annuel, vérification anode, nettoyage évaporateur. Durée de vie 15-20 ans avec bon entretien. Je propose des contrats maintenance adaptés."
    },
    {
      question: "Comment réduire sa facture de chauffage ?",
      answer: "Pompe à chaleur, isolation, programmation, entretien régulier. Jusqu'à 70% d'économies possibles. Audit énergétique gratuit pour identifier les meilleures solutions."
    }
  ]
};

// Initiales diversifiées par page
export const pageInitials = {
  'bordeaux': ['MC', 'TL', 'RD', 'SB'],
  'arcachon': ['JD', 'ML', 'SP', 'AB'], 
  'andernos-les-bains': ['PH', 'CG', 'MR', 'LV'],
  'biganos': ['FT', 'NK', 'JC', 'DM'],
  'villenave-d-ornon': ['AM', 'BL', 'ER', 'GS'],
  'saucats': ['HP', 'QR', 'VW', 'XY'],
  'pessac': ['ZA', 'BC', 'DE', 'FG'],
  'talence': ['HI', 'JK', 'LM', 'NO'],
  'gradignan': ['PQ', 'RS', 'TU', 'VX'],
  'cestas': ['YZ', 'CD', 'EF', 'GH'],
  'merignac': ['IJ', 'KL', 'MN', 'OP'],
  'begles': ['QR', 'ST', 'UV', 'WX'],
  'bruges': ['YA', 'BC', 'DE', 'FH'],
  'ares': ['GI', 'JK', 'LN', 'OP'],
  'audenge': ['QS', 'TU', 'VW', 'XZ'],
  'lanton': ['AB', 'CD', 'EG', 'HI'],
  'lacanau': ['JL', 'MN', 'OP', 'QS'],
  'le-teich': ['TU', 'VX', 'YZ', 'AC'],
  'gujan-mestras': ['BD', 'EF', 'GI', 'JK'],
  'la-teste-de-buch': ['LM', 'NO', 'PR', 'ST'],
  'biscarrosse': ['UV', 'WX', 'YA', 'BC'],
  'mimizan': ['DE', 'FG', 'HJ', 'KL'],
  'parentis': ['MN', 'OP', 'QS', 'TU'],
  'sanguinet': ['VW', 'XY', 'ZB', 'CD'],
  'marcheprime': ['EF', 'GH', 'IK', 'LM'],
  'mios': ['NO', 'PQ', 'RT', 'SU'],
  'le-barp': ['VW', 'XZ', 'AB', 'CE'],
  'salles': ['DF', 'GH', 'IJ', 'LM'],
  'lege-cap-ferret': ['NO', 'PQ', 'RS', 'TV'],
  'belin-beliet': ['UW', 'XY', 'ZA', 'BD'],
  'default': ['JD', 'ML', 'SP', 'AB'] // Fallback
};

// Fonction pour obtenir les initiales d'une ville
export function getCityInitials(citySlug: string): string[] {
  return pageInitials[citySlug as keyof typeof pageInitials] || pageInitials.default;
}

// Fonction pour obtenir un set de FAQ aléatoire
export function getRandomFAQSet(): FAQItem[] {
  const sets = [seoOptimizedFAQs.set1, seoOptimizedFAQs.set2, seoOptimizedFAQs.set3, seoOptimizedFAQs.set4];
  const randomIndex = Math.floor(Math.random() * sets.length);
  return sets[randomIndex];
}

// Fonction pour obtenir un set de FAQ spécifique par ville
export function getCityFAQSet(citySlug: string): FAQItem[] {
  // Distribution des sets par ville pour diversifier
  const cityToSetMap: { [key: string]: keyof typeof seoOptimizedFAQs } = {
    'bordeaux': 'set1',
    'arcachon': 'set2', 
    'andernos-les-bains': 'set3',
    'biganos': 'set4',
    'villenave-d-ornon': 'set1',
    'saucats': 'set2',
    'pessac': 'set3',
    'talence': 'set4',
    'gradignan': 'set1',
    'cestas': 'set2',
    'merignac': 'set3',
    'begles': 'set4',
    'bruges': 'set1',
    'ares': 'set2',
    'audenge': 'set3',
    'lanton': 'set4',
    'lacanau': 'set1',
    'le-teich': 'set2',
    'gujan-mestras': 'set3',
    'la-teste-de-buch': 'set4',
    'biscarrosse': 'set1',
    'mimizan': 'set2',
    'parentis': 'set3',
    'sanguinet': 'set4',
    'marcheprime': 'set1',
    'mios': 'set2',
    'le-barp': 'set3',
    'salles': 'set4',
    'lege-cap-ferret': 'set1',
    'belin-beliet': 'set2',
  };

  const setKey = cityToSetMap[citySlug] || 'set1';
  return seoOptimizedFAQs[setKey];
}
