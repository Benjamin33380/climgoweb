// Données ultra-complètes pour chaque ville - SEO Local Premium
export interface CityData {
  name: string;
  slug: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  postalCodes: string[];
  population: number;
  area: number; // km²
  department: string;
  region: string;
  intercommunality: string;
  mayor?: string;
  altitude: {
    min: number;
    max: number;
  };
  nearbyTowns: string[];
  landmarks: string[];
  districts?: string[];
  seoData: {
    title: string;
    description: string;
    keywords: string[];
    h1: string;
    localKeywords: string[];
    competitors: string[];
  };
  businessData: {
    serviceArea: string[];
    priceRange: string;
    workingHours: {
      [key: string]: string;
    };
    emergencyService: boolean;
    certifications: string[];
  };
}

export const cityDatabase: Record<string, CityData> = {
  'arcachon': {
    name: 'Arcachon',
    slug: 'arcachon-chauffage-climatisation',
    coordinates: {
      lat: 44.6582,
      lng: -1.1654
    },
    postalCodes: ['33120'],
    population: 10825,
    area: 7.64,
    department: 'Gironde',
    region: 'Nouvelle-Aquitaine',
    intercommunality: 'Communauté d\'Agglomération du Bassin d\'Arcachon Sud',
    mayor: 'Yves Foulon',
    altitude: { min: 0, max: 43 },
    nearbyTowns: ['La Teste-de-Buch', 'Gujan-Mestras', 'Le Teich'],
    landmarks: ['Dune du Pilat', 'Ville d\'Hiver', 'Casino d\'Arcachon', 'Jetée Thiers'],
    districts: ['Ville d\'Été', 'Ville d\'Hiver', 'Ville d\'Automne', 'Ville de Printemps'],
    seoData: {
      title: 'Chauffage Climatisation Arcachon 33120 | ClimGO Expert Local',
      description: 'Expert chauffage climatisation à Arcachon 33120. Installation, dépannage, entretien PAC. Devis gratuit, intervention rapide. Artisan RGE certifié Gironde.',
      keywords: ['chauffage arcachon', 'climatisation arcachon', 'pompe à chaleur arcachon', 'plombier chauffagiste arcachon 33120'],
      h1: 'Chauffage & Climatisation à Arcachon - Expert Bassin d\'Arcachon',
      localKeywords: ['bassin arcachon', 'ville hiver arcachon', 'dune pilat', 'jetée thiers'],
      competitors: ['Daikin Arcachon', 'Atlantic Arcachon', 'Viessmann Arcachon']
    },
    businessData: {
      serviceArea: ['Arcachon', 'La Teste-de-Buch', 'Gujan-Mestras', 'Le Teich', 'Biganos'],
      priceRange: '€€',
      workingHours: {
        'Monday': '08:00-18:00',
        'Tuesday': '08:00-18:00',
        'Wednesday': '08:00-18:00',
        'Thursday': '08:00-18:00',
        'Friday': '08:00-18:00',
        'Saturday': '09:00-17:00',
        'Sunday': 'Urgences uniquement'
      },
      emergencyService: true,
      certifications: ['RGE', 'QualiPAC', 'Qualibat', 'PG Gaz']
    }
  },
  
  'bordeaux': {
    name: 'Bordeaux',
    slug: 'bordeaux-chauffage-climatisation',
    coordinates: {
      lat: 44.8378,
      lng: -0.5792
    },
    postalCodes: ['33000', '33100', '33200', '33300', '33800'],
    population: 257068,
    area: 49.36,
    department: 'Gironde',
    region: 'Nouvelle-Aquitaine',
    intercommunality: 'Bordeaux Métropole',
    mayor: 'Pierre Hurmic',
    altitude: { min: 1, max: 90 },
    nearbyTowns: ['Mérignac', 'Pessac', 'Talence', 'Bègles', 'Cenon'],
    landmarks: ['Place de la Bourse', 'Cathédrale Saint-André', 'Grand Théâtre', 'Cité du Vin'],
    districts: ['Centre', 'Bastide', 'Chartrons', 'Saint-Michel', 'Victoire', 'Nansouty'],
    seoData: {
      title: 'Chauffage Climatisation Bordeaux 33000 | ClimGO Expert Métropole',
      description: 'Expert chauffage climatisation Bordeaux 33000-33800. Installation PAC, dépannage urgent, entretien. Artisan RGE Bordeaux Métropole. Devis gratuit.',
      keywords: ['chauffage bordeaux', 'climatisation bordeaux', 'pompe à chaleur bordeaux', 'plombier chauffagiste bordeaux métropole'],
      h1: 'Chauffage & Climatisation à Bordeaux - Expert Bordeaux Métropole',
      localKeywords: ['bordeaux métropole', 'place bourse bordeaux', 'chartrons', 'bastide bordeaux'],
      competitors: ['Daikin Bordeaux', 'Atlantic Bordeaux', 'Mitsubishi Bordeaux']
    },
    businessData: {
      serviceArea: ['Bordeaux', 'Mérignac', 'Pessac', 'Talence', 'Bègles', 'Cenon', 'Floirac'],
      priceRange: '€€€',
      workingHours: {
        'Monday': '07:30-19:00',
        'Tuesday': '07:30-19:00',
        'Wednesday': '07:30-19:00',
        'Thursday': '07:30-19:00',
        'Friday': '07:30-19:00',
        'Saturday': '08:00-18:00',
        'Sunday': 'Urgences uniquement'
      },
      emergencyService: true,
      certifications: ['RGE', 'QualiPAC', 'Qualibat', 'PG Gaz', 'Qualifioul']
    }
  },

  'talence': {
    name: 'Talence',
    slug: 'talence-chauffage-climatisation',
    coordinates: {
      lat: 44.8085,
      lng: -0.5897
    },
    postalCodes: ['33400'],
    population: 42637,
    area: 8.4,
    department: 'Gironde',
    region: 'Nouvelle-Aquitaine',
    intercommunality: 'Bordeaux Métropole',
    mayor: 'Christophe Duprat',
    altitude: { min: 15, max: 73 },
    nearbyTowns: ['Bordeaux', 'Pessac', 'Bègles', 'Villenave-d\'Ornon'],
    landmarks: ['Université de Bordeaux', 'Forum des Arts et de la Culture', 'Parc Peixotto'],
    districts: ['Centre-ville', 'Peixotto', 'Thouars', 'Médoquine'],
    seoData: {
      title: 'Chauffage Climatisation Talence 33400 | ClimGO Expert Université',
      description: 'Chauffage climatisation Talence 33400. Proche université Bordeaux. Installation PAC, dépannage, entretien. Artisan RGE certifié. Devis gratuit 24h.',
      keywords: ['chauffage talence', 'climatisation talence', 'pompe à chaleur talence 33400', 'chauffagiste université bordeaux'],
      h1: 'Chauffage & Climatisation à Talence - Expert Campus Universitaire',
      localKeywords: ['université bordeaux talence', 'campus talence', 'forum arts talence', 'peixotto'],
      competitors: ['Daikin Talence', 'Atlantic Talence', 'Viessmann Talence']
    },
    businessData: {
      serviceArea: ['Talence', 'Bordeaux', 'Pessac', 'Bègles', 'Villenave-d\'Ornon'],
      priceRange: '€€',
      workingHours: {
        'Monday': '08:00-18:30',
        'Tuesday': '08:00-18:30',
        'Wednesday': '08:00-18:30',
        'Thursday': '08:00-18:30',
        'Friday': '08:00-18:30',
        'Saturday': '09:00-17:00',
        'Sunday': 'Fermé'
      },
      emergencyService: true,
      certifications: ['RGE', 'QualiPAC', 'Qualibat']
    }
  }
  // TODO: Ajouter toutes les autres villes...
};

// Fonction pour obtenir les données d'une ville
export function getCityData(slug: string): CityData | null {
  const cityKey = slug.replace('-chauffage-climatisation', '');
  return cityDatabase[cityKey] || null;
}

// Fonction pour générer les mots-clés locaux dynamiquement
export function generateLocalKeywords(cityData: CityData): string[] {
  return [
    ...cityData.seoData.keywords,
    ...cityData.seoData.localKeywords,
    `${cityData.name.toLowerCase()} ${cityData.department.toLowerCase()}`,
    `${cityData.postalCodes[0]} chauffage`,
    `${cityData.postalCodes[0]} climatisation`,
    ...cityData.nearbyTowns.map(town => `${town.toLowerCase()} chauffage`),
    ...cityData.landmarks.map(landmark => `chauffage près ${landmark.toLowerCase()}`),
    `${cityData.intercommunality.toLowerCase()} chauffage`
  ];
}
