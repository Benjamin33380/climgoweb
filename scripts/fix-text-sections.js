const fs = require('fs');
const path = require('path');

// Liste des villes à corriger
const cities = [
  'gujan-mestras-chauffage-climatisation',
  'le-teich-chauffage-climatisation', 
  'biganos-chauffage-climatisation',
  'audenge-chauffage-climatisation',
  'lanton-chauffage-climatisation',
  'andernos-les-bains-chauffage-climatisation',
  'ares-chauffage-climatisation',
  'lege-cap-ferret-chauffage-climatisation',
  'pessac-chauffage-climatisation',
  'talence-chauffage-climatisation',
  'merignac-chauffage-climatisation',
  'mimizan-chauffage-climatisation',
  'biscarrosse-chauffage-climatisation',
  'lacanau-chauffage-climatisation',
  'sanguinet-chauffage-climatisation',
  'begles-chauffage-climatisation'
];

function fixTextSection(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 1. Corriger la section py-12 -> py-8 sm:py-12
    content = content.replace(
      /<section className="relative py-12 overflow-hidden">/g,
      '<section className="relative py-8 sm:py-12 overflow-hidden">'
    );
    
    // 2. Corriger le titre mb-4 -> mb-6 sm:mb-8
    content = content.replace(
      /<div className="relative z-10 container mx-auto px-4 mb-4">/g,
      '<div className="relative z-10 container mx-auto px-4 mb-6 sm:mb-8">'
    );
    
    // 3. Corriger les tailles de titre text-2xl md:text-3xl -> text-xl sm:text-2xl md:text-3xl
    content = content.replace(
      /<h2 className="text-2xl md:text-3xl font-medium text-gray-800 dark:text-black dark:text-white text-center">/g,
      '<h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-800 dark:text-black dark:text-white text-center">'
    );
    
    // 4. Supprimer le gradient du haut
    content = content.replace(
      /{\/\* Gradient de flou du haut \*\/}\s*<div\s+className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white dark:from-black to-transparent z-10 pointer-events-none"\s*\/>/g,
      ''
    );
    
    // 5. Corriger la hauteur h-[300px] -> h-[300px] sm:h-[350px] md:h-[300px]
    content = content.replace(
      /className="w-full h-\[300px\] px-4 py-16 overflow-y-auto scrollbar-hide cursor-default"/g,
      'className="w-full h-[300px] sm:h-[350px] md:h-[300px] px-4 py-16 overflow-y-auto scrollbar-hide cursor-default"'
    );
    
    // 6. Corriger l'espacement space-y-6 -> space-y-4 sm:space-y-5 md:space-y-6
    content = content.replace(
      /<div className="space-y-6 text-center pt-8 pb-20">/g,
      '<div className="space-y-4 sm:space-y-5 md:space-y-6 text-center pt-4 sm:pt-6 md:pt-8 pb-12 sm:pb-16 md:pb-20">'
    );
    
    // 7. Corriger les tailles de texte text-lg -> text-sm sm:text-base md:text-lg
    content = content.replace(
      /<p className="text-lg text-gray-800 dark:text-white leading-normal">/g,
      '<p className="text-sm sm:text-base md:text-lg text-gray-800 dark:text-white leading-normal">'
    );
    
    // 8. Corriger les tailles de texte text-base -> text-sm sm:text-base
    content = content.replace(
      /<p className="text-base text-gray-800 dark:text-white leading-normal">/g,
      '<p className="text-sm sm:text-base text-gray-800 dark:text-white leading-normal">'
    );
    
    // 9. Supprimer le gradient du bas
    content = content.replace(
      /{\/\* Gradient de flou du bas \*\/}\s*<div\s+className="absolute bottom-0 left-0 right-0 h-70 bg-gradient-to-t from-white dark:from-black to-transparent z-10 pointer-events-none"\s*\/>/g,
      ''
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Corrigé: ${path.basename(filePath)}`);
    
  } catch (error) {
    console.error(`❌ Erreur avec ${filePath}:`, error.message);
  }
}

// Appliquer les corrections à toutes les villes
cities.forEach(city => {
  const filePath = path.join(__dirname, '..', 'src', 'app', 'villes', city, 'page.tsx');
  if (fs.existsSync(filePath)) {
    fixTextSection(filePath);
  } else {
    console.log(`⚠️  Fichier non trouvé: ${filePath}`);
  }
});

console.log('\n🎉 Corrections terminées !');
