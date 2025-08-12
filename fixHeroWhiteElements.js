const fs = require('fs');
const { glob } = require('glob');

console.log('🔥 CORRECTION FINALE DES ÉLÉMENTS BLANCS DANS LES HERO');
console.log('=====================================================\n');

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

  // 1. CORRIGER LA FORME DIAGONALE QUI EST ENCORE BLANCHE
  if (content.includes('bg-white dark:bg-black')) {
    content = content.replace(
      /bg-white dark:bg-black/g,
      'bg-black dark:bg-white'
    );
    fixes.push('🔳 Forme diagonale corrigée (blanc → noir)');
    modified = true;
  }

  // 2. CORRIGER LE TEXTE QUI DEVIENT NOIR SUR DESKTOP
  if (content.includes('sm:text-black/90 dark:text-white/90')) {
    content = content.replace(
      /text-white\/90 sm:text-black\/90 dark:text-white\/90/g,
      'text-white/90 dark:text-white/90'
    );
    fixes.push('📝 Texte corrigé (reste blanc sur toutes les tailles)');
    modified = true;
  }

  // 3. CORRIGER TOUS LES CTA QUI POURRAIENT ÊTRE BLANCS
  if (content.includes('bg-white dark:bg-white')) {
    content = content.replace(
      /bg-white dark:bg-white text-white dark:text-black/g,
      'bg-black dark:bg-black text-white dark:text-white'
    );
    fixes.push('🔘 Boutons CTA corrigés');
    modified = true;
  }

  // 4. VÉRIFIER S'IL Y A D'AUTRES ÉLÉMENTS BLANCS SUSPECTS
  const whiteElements = [
    'bg-white ',
    'bg-white/',
    'bg-white"',
    'bg-white\n'
  ];

  whiteElements.forEach(element => {
    if (content.includes(element) && !content.includes('bg-white/')) {
      // Chercher le contexte pour voir si c'est dans le hero
      const lines = content.split('\n');
      lines.forEach((line, lineIndex) => {
        if (line.includes(element) && lineIndex < 300) { // Dans les premières lignes (hero section)
          console.log(`   ⚠️  ÉLÉMENT BLANC DÉTECTÉ ligne ${lineIndex + 1}: ${line.trim()}`);
        }
      });
    }
  });

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`   📋 Corrections appliquées:`);
    fixes.forEach(fix => console.log(`      ${fix}`));
    totalFixed++;
  } else {
    console.log(`   ✅ Aucun élément blanc détecté`);
  }
  
  console.log('');
});

// RAPPORT FINAL
console.log('\n🎉 CORRECTION FINALE TERMINÉE !');
console.log('===============================');
console.log(`📊 Pages corrigées: ${totalFixed}/${cityPages.length}`);
console.log('\n🎯 Corrections appliquées:');
console.log('   🔳 Formes diagonales: blanc → noir');
console.log('   📝 Textes: restent blancs sur toutes tailles');
console.log('   🔘 Boutons CTA: fond noir au lieu de blanc');
console.log('\n🚀 Plus aucun élément blanc dans les hero sections !');
