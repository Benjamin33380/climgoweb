const fs = require('fs');
const { glob } = require('glob');

console.log('🔧 CORRECTION DES COULEURS HERO - LIGHT/DARK');
console.log('=============================================\n');

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

  // 1. CORRIGER LA SECTION HERO PRINCIPALE
  if (content.includes('bg-black dark:bg-white text-white dark:text-black')) {
    content = content.replace(
      /bg-black dark:bg-white text-white dark:text-black/g,
      'bg-white dark:bg-black text-black dark:text-white'
    );
    fixes.push('📄 Section hero principale corrigée (light=blanc, dark=noir)');
    modified = true;
  }

  // 2. CORRIGER LA FORME DIAGONALE
  if (content.includes('bg-black dark:bg-white z-5')) {
    content = content.replace(
      /bg-black dark:bg-white z-5/g,
      'bg-white dark:bg-black z-5'
    );
    fixes.push('🔳 Forme diagonale corrigée (light=blanc, dark=noir)');
    modified = true;
  }

  // 3. CORRIGER LE TEXTE DU TITRE ET DESCRIPTION
  if (content.includes('text-white dark:text-white')) {
    content = content.replace(
      /text-white dark:text-white/g,
      'text-black dark:text-white'
    );
    fixes.push('📝 Texte titre corrigé (light=noir, dark=blanc)');
    modified = true;
  }

  // 4. CORRIGER LE TEXTE DE DESCRIPTION
  if (content.includes('text-white/90 dark:text-white/90')) {
    content = content.replace(
      /text-white\/90 dark:text-white\/90/g,
      'text-black/90 dark:text-white/90'
    );
    fixes.push('📝 Texte description corrigé (light=noir, dark=blanc)');
    modified = true;
  }

  // 5. CORRIGER LES BOUTONS CTA
  if (content.includes('bg-black dark:bg-black text-white dark:text-white')) {
    content = content.replace(
      /bg-black dark:bg-black text-white dark:text-white/g,
      'bg-white dark:bg-white text-black dark:text-black'
    );
    fixes.push('🔘 Boutons CTA corrigés (light=blanc, dark=blanc)');
    modified = true;
  }

  // 6. CORRIGER LES BOUTONS SECONDAIRES
  if (content.includes('border-white/50 dark:border-white/30 text-white dark:text-white')) {
    content = content.replace(
      /border-white\/50 dark:border-white\/30 text-white dark:text-white/g,
      'border-black/50 dark:border-white/30 text-black dark:text-white'
    );
    fixes.push('🔘 Boutons secondaires corrigés');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`   📋 Corrections appliquées:`);
    fixes.forEach(fix => console.log(`      ${fix}`));
    totalFixed++;
  } else {
    console.log(`   ✅ Déjà correct`);
  }
  
  console.log('');
});

// RAPPORT FINAL
console.log('\n🎉 CORRECTION TERMINÉE !');
console.log('========================');
console.log(`📊 Pages corrigées: ${totalFixed}/${cityPages.length}`);
console.log('\n🎯 Couleurs correctes:');
console.log('   ☀️  MODE LIGHT: fond blanc, texte noir');
console.log('   🌙 MODE DARK: fond noir, texte blanc');
console.log('\n✨ Hero sections maintenant cohérentes avec le thème !');
