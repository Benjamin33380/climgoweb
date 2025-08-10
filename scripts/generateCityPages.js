const fs = require('fs');
const path = require('path');

// Liste des villes du fichier zones-interventions
const cities = [
  { name: 'Arcachon', slug: 'arcachon-chauffage-climatisation' },
  { name: 'La Teste-de-Buch', slug: 'la-teste-de-buch-chauffage-climatisation' },
  { name: 'Gujan-Mestras', slug: 'gujan-mestras-chauffage-climatisation' },
  { name: 'Le Teich', slug: 'le-teich-chauffage-climatisation' },
  { name: 'Biganos', slug: 'biganos-chauffage-climatisation' },
  { name: 'Audenge', slug: 'audenge-chauffage-climatisation' },
  { name: 'Lanton', slug: 'lanton-chauffage-climatisation' },
  // Andernos existe déjà
  { name: 'Arès', slug: 'ares-chauffage-climatisation' },
  { name: 'Lège Cap Ferret', slug: 'lege-cap-ferret-chauffage-climatisation' },
];

// Template pour une page de ville
const getPageTemplate = (cityKey, cityName) => `import CityPageTemplate from '@/components/CityPageTemplate';
import { getCityData } from '@/data/citiesData';

export default function ${cityKey.replace(/-/g, '')}() {
  const cityData = getCityData('${cityKey}');
  
  if (!cityData) {
    return <div>Ville non trouvée</div>;
  }

  return <CityPageTemplate cityData={cityData} />;
}
`;

// Fonction pour créer une page de ville
function createCityPage(city) {
  const cityKey = city.slug.replace('-chauffage-climatisation', '');
  const cityName = city.name.replace(/[^a-zA-Z]/g, '');
  
  const pageContent = getPageTemplate(cityKey, cityName);
  const dirPath = path.join(__dirname, '..', 'src', 'app', city.slug);
  const filePath = path.join(dirPath, 'page.tsx');
  
  // Créer le dossier s'il n'existe pas
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  // Créer le fichier page.tsx
  fs.writeFileSync(filePath, pageContent);
  console.log(`✅ Page créée: ${city.slug}`);
}

// Générer toutes les pages
console.log('🚀 Génération des pages de villes...\n');

cities.forEach(city => {
  createCityPage(city);
});

console.log('\n✨ Toutes les pages ont été générées avec succès !');
