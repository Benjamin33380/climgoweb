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
  // Bordeaux Métropole
  {
    name: "Bordeaux",
    slug: "bordeaux-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Bordeaux. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.8378, lng: -0.5792 },
    region: "Bordeaux Métropole"
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
    name: "Talence",
    slug: "talence-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Talence. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.8067, lng: -0.6317 },
    region: "Bordeaux Métropole"
  },
  {
    name: "Cenon",
    slug: "cenon-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Cenon. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.8579, lng: -0.5319 },
    region: "Bordeaux Métropole"
  },
  {
    name: "Bègles",
    slug: "begles-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Bègles. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.8067, lng: -0.5483 },
    region: "Bordeaux Métropole"
  },
  {
    name: "Floirac",
    slug: "floirac-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Floirac. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.8579, lng: -0.5319 },
    region: "Bordeaux Métropole"
  },
  {
    name: "Bruges",
    slug: "bruges-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Bruges. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.8833, lng: -0.6167 },
    region: "Bordeaux Métropole"
  },
  {
    name: "Eysines",
    slug: "eysines-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Eysines. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.8833, lng: -0.6500 },
    region: "Bordeaux Métropole"
  },
  {
    name: "Le Haillan",
    slug: "le-haillan-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation au Haillan. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.8833, lng: -0.6500 },
    region: "Bordeaux Métropole"
  },
  {
    name: "Saint-Médard-en-Jalles",
    slug: "saint-medard-en-jalles-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Saint-Médard-en-Jalles. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.8833, lng: -0.7167 },
    region: "Bordeaux Métropole"
  },
  {
    name: "Saint-Aubin-de-Médoc",
    slug: "saint-aubin-de-medoc-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Saint-Aubin-de-Médoc. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.8833, lng: -0.7167 },
    region: "Bordeaux Métropole"
  },
  {
    name: "Le Bouscat",
    slug: "le-bouscat-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation au Bouscat. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.8667, lng: -0.6000 },
    region: "Bordeaux Métropole"
  },
  {
    name: "Gradignan",
    slug: "gradignan-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Gradignan. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.7667, lng: -0.6167 },
    region: "Bordeaux Métropole"
  },
  {
    name: "Cestas",
    slug: "cestas-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Cestas. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.7333, lng: -0.6833 },
    region: "Bordeaux Métropole"
  },
  {
    name: "Canejan",
    slug: "canejan-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Canejan. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.7667, lng: -0.6500 },
    region: "Bordeaux Métropole"
  },
  {
    name: "Cadaujac",
    slug: "cadaujac-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Cadaujac. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.7500, lng: -0.5333 },
    region: "Bordeaux Métropole"
  },
  {
    name: "Bouliac",
    slug: "bouliac-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Bouliac. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.8167, lng: -0.5167 },
    region: "Bordeaux Métropole"
  },
  {
    name: "La Brède",
    slug: "la-brede-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à La Brède. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.6833, lng: -0.5333 },
    region: "Bordeaux Métropole"
  },
  {
    name: "Léognan",
    slug: "leognan-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Léognan. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.7167, lng: -0.6000 },
    region: "Bordeaux Métropole"
  },
  {
    name: "Saint-Selve",
    slug: "saint-selve-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Saint-Selve. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.6833, lng: -0.6167 },
    region: "Bordeaux Métropole"
  },
  {
    name: "Martignas-sur-Jalle",
    slug: "martignas-sur-jalle-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Martignas-sur-Jalle. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.8500, lng: -0.7833 },
    region: "Bordeaux Métropole"
  },
  {
    name: "Martillac",
    slug: "martillac-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Martillac. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.7167, lng: -0.5167 },
    region: "Bordeaux Métropole"
  },
  {
    name: "Saint-Loubès",
    slug: "saint-loubes-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Saint-Loubès. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.9167, lng: -0.4333 },
    region: "Bordeaux Métropole"
  },
  {
    name: "Saint-Jean-d'Illac",
    slug: "saint-jean-d-illac-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Saint-Jean-d'Illac. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.8167, lng: -0.7833 },
    region: "Bordeaux Métropole"
  },
  {
    name: "Villenave-d'Ornon",
    slug: "villenave-d-ornon-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Villenave-d'Ornon. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.7667, lng: -0.5667 },
    region: "Bordeaux Métropole"
  },
  {
    name: "Salles",
    slug: "salles-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Salles. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.5500, lng: -0.8667 },
    region: "Bordeaux Métropole"
  },
  {
    name: "Saucats",
    slug: "saucats-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Saucats. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.6500, lng: -0.6000 },
    region: "Bordeaux Métropole"
  },

  // Bassin d'Arcachon
  {
    name: "Arcachon",
    slug: "arcachon-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Arcachon. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.6617, lng: -1.1663 },
    region: "Bassin d'Arcachon"
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
    description: "ClimGO, expert chauffage et climatisation au Teich. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.6333, lng: -1.0167 },
    region: "Bassin d'Arcachon"
  },
  {
    name: "Lège-Cap-Ferret",
    slug: "lege-cap-ferret-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Lège-Cap-Ferret. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.7167, lng: -1.1833 },
    region: "Bassin d'Arcachon"
  },
  {
    name: "Lanton",
    slug: "lanton-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Lanton. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.7167, lng: -1.0333 },
    region: "Bassin d'Arcachon"
  },
  {
    name: "Belin-Béliet",
    slug: "belin-beliet-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Belin-Béliet. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.5000, lng: -0.7833 },
    region: "Bassin d'Arcachon"
  },
  {
    name: "Le Barp",
    slug: "le-barp-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation au Barp. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.6167, lng: -0.7667 },
    region: "Bassin d'Arcachon"
  },
  {
    name: "Andernos-les-Bains",
    slug: "andernos-les-bains-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Andernos-les-Bains. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.7333, lng: -1.1000 },
    region: "Bassin d'Arcachon"
  },
  {
    name: "Arès",
    slug: "ares-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Arès. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.7667, lng: -1.1333 },
    region: "Bassin d'Arcachon"
  },
  {
    name: "Audenge",
    slug: "audenge-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Audenge. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.6833, lng: -1.0167 },
    region: "Bassin d'Arcachon"
  },
  {
    name: "Biscarrosse",
    slug: "biscarrosse-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Biscarrosse. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.4000, lng: -1.1667 },
    region: "Bassin d'Arcachon"
  },
  {
    name: "Mios",
    slug: "mios-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Mios. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.6000, lng: -0.9333 },
    region: "Bassin d'Arcachon"
  },
  {
    name: "Parentis-en-Born",
    slug: "parentis-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Parentis-en-Born. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.3500, lng: -1.0667 },
    region: "Bassin d'Arcachon"
  },
  {
    name: "Lacanau",
    slug: "lacanau-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Lacanau. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.9833, lng: -1.2000 },
    region: "Bassin d'Arcachon"
  },
  {
    name: "Sanguinet",
    slug: "sanguinet-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Sanguinet. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.4833, lng: -1.0833 },
    region: "Bassin d'Arcachon"
  },
  {
    name: "Mimizan",
    slug: "mimizan-chauffage-climatisation",
    services: ["Chauffage", "Climatisation", "Pompe à Chaleur", "Maintenance", "Eau Chaude Sanitaire"],
    description: "ClimGO, expert chauffage et climatisation à Mimizan. Installation PAC, entretien et dépannage. Artisan RGE certifié. Devis gratuit sous 24h.",
    coordinates: { lat: 44.2000, lng: -1.2333 },
    region: "Bassin d'Arcachon"
  },
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
