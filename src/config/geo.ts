// Configuration des coordonnées géographiques pour le SEO

// Coordonnées du siège social ClimGO (Marcheprime)
export const HEADQUARTERS_COORDINATES = {
  lat: 44.6917,
  lng: -0.8547,
  address: {
    streetAddress: "28 rue de Cantelaude",
    addressLocality: "Marcheprime",
    addressRegion: "Nouvelle-Aquitaine",
    postalCode: "33380",
    addressCountry: "FR"
  }
};

// Coordonnées des mairies des principales villes desservies
export const CITY_COORDINATES: Record<string, { lat: number; lng: number }> = {
  // Bassin d'Arcachon - Coordonnées des mairies
  'arcachon': { lat: 44.6580, lng: -1.1680 }, // Mairie d'Arcachon
  'audenge': { lat: 44.6860, lng: -1.0130 }, // Mairie d'Audenge
  'la-teste-de-buch': { lat: 44.6300, lng: -1.1500 }, // Mairie de La Teste-de-Buch
  'le-teich': { lat: 44.6330, lng: -1.0170 }, // Mairie du Teich
  'gujan-mestras': { lat: 44.6330, lng: -1.0670 }, // Mairie de Gujan-Mestras
  'biganos': { lat: 44.6330, lng: -0.9670 }, // Mairie de Biganos
  'lanton': { lat: 44.7000, lng: -1.0330 }, // Mairie de Lanton
  'andernos-les-bains': { lat: 44.7500, lng: -1.1000 }, // Mairie d'Andernos-les-Bains
  'lege-cap-ferret': { lat: 44.7000, lng: -1.2000 }, // Mairie de Lège-Cap-Ferret
  'pyla-sur-mer': { lat: 44.6300, lng: -1.2000 }, // Mairie de Pyla-sur-Mer
  
  // Bordeaux Métropole - Coordonnées des mairies
  'bordeaux': { lat: 44.8378, lng: -0.5792 }, // Mairie de Bordeaux
  'merignac': { lat: 44.8333, lng: -0.6333 }, // Mairie de Mérignac
  'pessac': { lat: 44.8000, lng: -0.6333 }, // Mairie de Pessac
  'talence': { lat: 44.8000, lng: -0.5833 }, // Mairie de Talence
  'begles': { lat: 44.8000, lng: -0.5500 }, // Mairie de Bègles
  'villenave-d-ornon': { lat: 44.7833, lng: -0.5667 }, // Mairie de Villenave-d'Ornon
  'gradignan': { lat: 44.7667, lng: -0.6167 }, // Mairie de Gradignan
  'cenon': { lat: 44.8500, lng: -0.5167 }, // Mairie de Cenon
  'floirac': { lat: 44.8333, lng: -0.5167 }, // Mairie de Floirac
  'bruges': { lat: 44.8833, lng: -0.6167 }, // Mairie de Bruges
  'le-bouscat': { lat: 44.8667, lng: -0.6000 }, // Mairie du Bouscat
  'le-haillan': { lat: 44.8667, lng: -0.6667 }, // Mairie du Haillan
  'martignas-sur-jalle': { lat: 44.8500, lng: -0.7667 }, // Mairie de Martignas-sur-Jalle
  'saint-aubin-de-medoc': { lat: 44.9167, lng: -0.7167 }, // Mairie de Saint-Aubin-de-Médoc
  'saint-medard-en-jalles': { lat: 44.9167, lng: -0.7167 }, // Mairie de Saint-Médard-en-Jalles
  'saint-jean-d-illac': { lat: 44.8333, lng: -0.5667 }, // Mairie de Saint-Jean-d'Illac
  'saint-loubes': { lat: 44.9167, lng: -0.4333 }, // Mairie de Saint-Loubès
  'saint-selve': { lat: 44.7000, lng: -0.4667 }, // Mairie de Saint-Selve
  'salles': { lat: 44.5500, lng: -0.8667 }, // Mairie de Salles
  'sanguinet': { lat: 44.4833, lng: -1.0833 }, // Mairie de Sanguinet
  'saucats': { lat: 44.6500, lng: -0.6000 }, // Mairie de Saucats
  'cestas': { lat: 44.7500, lng: -0.6833 }, // Mairie de Cestas
  'leognan': { lat: 44.7333, lng: -0.6000 }, // Mairie de Léognan
  'martillac': { lat: 44.7167, lng: -0.5167 }, // Mairie de Martillac
  'cadaujac': { lat: 44.7500, lng: -0.5167 }, // Mairie de Cadaujac
  'canejan': { lat: 44.7667, lng: -0.5333 }, // Mairie de Canéjan
  'eysines': { lat: 44.8833, lng: -0.6500 }, // Mairie d'Eysines
  'la-brede': { lat: 44.6833, lng: -0.5333 }, // Mairie de La Brède
  'bouliac': { lat: 44.8167, lng: -0.5167 }, // Mairie de Bouliac
  'lacanau': { lat: 45.0000, lng: -1.2000 }, // Mairie de Lacanau
  'le-barp': { lat: 44.6167, lng: -0.7667 }, // Mairie du Barp
  'mios': { lat: 44.6000, lng: -0.9333 }, // Mairie de Mios
  'marcheprime': { lat: 44.6917, lng: -0.8547 }, // Mairie de Marcheprime
  'parentis': { lat: 44.3500, lng: -1.0667 }, // Mairie de Parentis-en-Born
  'mimizan': { lat: 44.2000, lng: -1.2333 }, // Mairie de Mimizan
  'ares': { lat: 44.7667, lng: -1.1333 }, // Mairie d'Arès
  'belin-beliet': { lat: 44.5000, lng: -0.7833 }, // Mairie de Belin-Béliet
  'biscarrosse': { lat: 44.4000, lng: -1.1667 } // Mairie de Biscarrosse
};

// Fonction utilitaire pour obtenir les coordonnées d'une ville
export function getCityCoordinates(citySlug: string): { lat: number; lng: number } | null {
  return CITY_COORDINATES[citySlug] || null;
}

// Fonction pour générer le JSON-LD géographique
export function generateGeoJsonLd(coordinates: { lat: number; lng: number }, name: string) {
  return {
    "@type": "GeoCoordinates",
    "latitude": coordinates.lat,
    "longitude": coordinates.lng,
    "name": name
  };
}

// Fonction pour générer le serviceArea avec géolocalisation
export function generateServiceAreaJsonLd(coordinates: { lat: number; lng: number }, radius: string = "25000") {
  return {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": coordinates.lat,
      "longitude": coordinates.lng
    },
    "geoRadius": radius
  };
}
