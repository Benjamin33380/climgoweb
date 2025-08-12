const fs = require('fs');
const { glob } = require('glob');

console.log('🎨 RESTAURATION DES BORDURES COLORÉES');
console.log('===================================\n');

const cityPages = glob.sync('src/app/*-chauffage-climatisation/page.tsx');

console.log(`🎯 ${cityPages.length} pages à corriger\n`);

let totalFixed = 0;

cityPages.forEach((filePath, index) => {
  const cityName = filePath.split('/').pop().replace('-chauffage-climatisation', '').replace('.tsx', '');
  console.log(`🔧 [${index + 1}/${cityPages.length}] Correction: ${cityName}`);
  
  if (!fs.existsSync(filePath)) {
    console.log(`❌ Fichier non trouvé: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  let fixes = [];

  // 1. CORRIGER LES BORDURES DES CARTES SOLUTIONS COLORÉES
  
  // Carte bleue (Types de logements)
  const blueCardPattern = /(<motion\.div[^>]*className="[^"]*)(border-2 border-black dark:border-white)([^"]*"[^>]*>[\s\S]*?bg-blue-500 dark:bg-blue-600)/g;
  if (content.match(blueCardPattern)) {
    content = content.replace(blueCardPattern, '$1border-2 border-blue-500 dark:border-blue-600$3');
    fixes.push('🔵 Bordure bleue restaurée');
    modified = true;
  }

  // Carte orange (Processus d'installation)
  const orangeCardPattern = /(<motion\.div[^>]*className="[^"]*)(border-2 border-black dark:border-white)([^"]*"[^>]*>[\s\S]*?bg-orange-500 dark:bg-orange-600)/g;
  if (content.match(orangeCardPattern)) {
    content = content.replace(orangeCardPattern, '$1border-2 border-orange-500 dark:border-orange-600$3');
    fixes.push('🟠 Bordure orange restaurée');
    modified = true;
  }

  // Carte verte (Entretien & maintenance)
  const greenCardPattern = /(<motion\.div[^>]*className="[^"]*)(border-2 border-black dark:border-white)([^"]*"[^>]*>[\s\S]*?bg-green-500 dark:bg-green-600)/g;
  if (content.match(greenCardPattern)) {
    content = content.replace(greenCardPattern, '$1border-2 border-green-500 dark:border-green-600$3');
    fixes.push('🟢 Bordure verte restaurée');
    modified = true;
  }

  // Carte violette (Aides financières)
  const purpleCardPattern = /(<motion\.div[^>]*className="[^"]*)(border-2 border-black dark:border-white)([^"]*"[^>]*>[\s\S]*?bg-purple-500 dark:bg-purple-600)/g;
  if (content.match(purpleCardPattern)) {
    content = content.replace(purpleCardPattern, '$1border-2 border-purple-500 dark:border-purple-600$3');
    fixes.push('🟣 Bordure violette restaurée');
    modified = true;
  }

  // 2. CORRIGER LES BADGES POUR QU'ILS CORRESPONDENT AUX COULEURS
  
  // Restaurer les badges colorés aussi
  content = content.replace(
    /(<span className="inline-block )(bg-black dark:bg-white text-white dark:text-black)([^"]*"[^>]*>[\s\S]*?Tous types d'habitats)/g,
    '$1bg-blue-500 dark:bg-blue-600 text-white$3'
  );

  content = content.replace(
    /(<span className="inline-block )(bg-black dark:bg-white text-white dark:text-black)([^"]*"[^>]*>[\s\S]*?Devis gratuit)/g,
    '$1bg-orange-500 dark:bg-orange-600 text-white$3'
  );

  content = content.replace(
    /(<span className="inline-block )(bg-black dark:bg-white text-white dark:text-black)([^"]*"[^>]*>[\s\S]*?Suivi personnalisé)/g,
    '$1bg-green-500 dark:bg-green-600 text-white$3'
  );

  content = content.replace(
    /(<span className="inline-block )(bg-black dark:bg-white text-white dark:text-black)([^"]*"[^>]*>[\s\S]*?Accompagnement complet)/g,
    '$1bg-purple-500 dark:bg-purple-600 text-white$3'
  );

  if (content.includes('bg-blue-500 dark:bg-blue-600 text-white') || 
      content.includes('bg-orange-500 dark:bg-orange-600 text-white') ||
      content.includes('bg-green-500 dark:bg-green-600 text-white') ||
      content.includes('bg-purple-500 dark:bg-purple-600 text-white')) {
    fixes.push('🏷️ Badges colorés restaurés');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`   📋 Corrections appliquées:`);
    fixes.forEach(fix => console.log(`      ${fix}`));
    totalFixed++;
  } else {
    console.log(`   ⚪ Aucune correction nécessaire`);
  }
  
  console.log('');
});

// RAPPORT FINAL
console.log('\n🎉 RESTAURATION TERMINÉE !');
console.log('==========================');
console.log(`📊 Pages corrigées: ${totalFixed}/${cityPages.length}`);
console.log('\n🎯 Corrections appliquées:');
console.log('   🔵 Bordures bleues pour les cartes bleues');
console.log('   🟠 Bordures orange pour les cartes orange');
console.log('   🟢 Bordures vertes pour les cartes vertes');
console.log('   🟣 Bordures violettes pour les cartes violettes');
console.log('   🏷️ Badges assortis aux couleurs des cartes');
console.log('\n🚀 Toutes les bordures et badges sont maintenant colorés !');
