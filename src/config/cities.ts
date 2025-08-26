// Configuration centralisée pour toutes les villes
export interface CityConfig {
  name: string;
  slug: string;
  services: string[];
  description: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  region: string;
}

export const citiesConfig: CityConfig[] = [
  {
    name: "Bordeaux",
    slug: "bordeaux-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Bordeaux. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.8378, lng: -0.5792 },
    region: "Bordeaux Métropole"
  },
  {
    name: "Arcachon",
    slug: "arcachon-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Arcachon. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.6617, lng: -1.1663 },
    region: "Bassin d'Arcachon"
  },
  {
    name: "Mérignac",
    slug: "merignac-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Mérignac. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.8325, lng: -0.6333 },
    region: "Bordeaux Métropole"
  },
  {
    name: "Pessac",
    slug: "pessac-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Pessac. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.8067, lng: -0.6317 },
    region: "Bordeaux Métropole"
  },
  {
    name: "Marcheprime",
    slug: "marcheprime-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Marcheprime. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.6833, lng: -0.8500 },
    region: "Bassin d'Arcachon"
  },
  {
    name: "Biganos",
    slug: "biganos-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Biganos. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.6333, lng: -0.9667 },
    region: "Bassin d'Arcachon"
  },
  {
    name: "La Teste-de-Buch",
    slug: "la-teste-de-buch-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à La Teste-de-Buch. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.6333, lng: -1.1500 },
    region: "Bassin d'Arcachon"
  },
  {
    name: "Gujan-Mestras",
    slug: "gujan-mestras-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Gujan-Mestras. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.6333, lng: -1.0667 },
    region: "Bassin d'Arcachon"
  },
  {
    name: "Le Teich",
    slug: "le-teich-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Le Teich. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.6333, lng: -1.0167 },
    region: "Bassin d'Arcachon"
  },
  {
    name: "Cestas",
    slug: "cestas-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Cestas. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.7333, lng: -0.6833 },
    region: "Bordeaux Métropole"
  }
];

// Fonction utilitaire pour obtenir la configuration d'une ville par son slug
export function getCityConfig(slug: string): CityConfig | undefined {
  return citiesConfig.find(city => city.slug === slug);
}

// Fonction utilitaire pour obtenir toutes les villes d'une région
export function getCitiesByRegion(region: string): CityConfig[] {
  return citiesConfig.filter(city => city.region === region);
}

// Fonction utilitaire pour obtenir toutes les villes
export function getAllCities(): CityConfig[] {
  return citiesConfig;
}
