const fs = require('fs');
const { glob } = require('glob');

console.log('🔧 CORRECTION DES COULEURS INVERSÉES');
console.log('====================================\n');

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

  // 1. CORRIGER LES FONDS INVERSÉS bg-black dark:bg-white → bg-white dark:bg-black
  const beforeFix = content;
  content = content.replace(/bg-black dark:bg-white/g, 'bg-white dark:bg-black');
  
  if (content !== beforeFix) {
    const matches = beforeFix.match(/bg-black dark:bg-white/g);
    fixes.push(`🔄 ${matches.length} fond(s) inversé(s) corrigé(s)`);
    modified = true;
  }

  // 2. CORRIGER LES TEXTES INVERSÉS text-white dark:text-black → text-black dark:text-white
  const beforeTextFix = content;
  content = content.replace(/text-white dark:text-black/g, 'text-black dark:text-white');
  
  if (content !== beforeTextFix) {
    const matches = beforeTextFix.match(/text-white dark:text-black/g);
    fixes.push(`📝 ${matches.length} texte(s) inversé(s) corrigé(s)`);
    modified = true;
  }

  // 3. CORRIGER LES BORDURES INVERSÉES border-white dark:border-black → border-black dark:border-white
  const beforeBorderFix = content;
  content = content.replace(/border-white dark:border-black/g, 'border-black dark:border-white');
  
  if (content !== beforeBorderFix) {
    const matches = beforeBorderFix.match(/border-white dark:border-black/g);
    fixes.push(`🔲 ${matches.length} bordure(s) inversée(s) corrigée(s)`);
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`   📋 Corrections appliquées:`);
    fixes.forEach(fix => console.log(`      ${fix}`));
    totalFixed++;
  } else {
    console.log(`   ✅ Aucune couleur inversée détectée`);
  }
  
  console.log('');
});

// RAPPORT FINAL
console.log('\n🎉 CORRECTION TERMINÉE !');
console.log('========================');
console.log(`📊 Pages corrigées: ${totalFixed}/${cityPages.length}`);
console.log('\n🎯 Corrections appliquées:');
console.log('   🔄 bg-black dark:bg-white → bg-white dark:bg-black');
console.log('   📝 text-white dark:text-black → text-black dark:text-white');
console.log('   🔲 border-white dark:border-black → border-black dark:border-white');
console.log('\n✨ Toutes les couleurs sont maintenant cohérentes !');
console.log('☀️  LIGHT MODE: blanc/noir');
console.log('🌙 DARK MODE: noir/blanc');
