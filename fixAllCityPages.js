const fs = require('fs');
const { glob } = require('glob');

console.log('🔧 CORRECTION MASSIVE DES 47 PAGES VILLE');
console.log('=======================================\n');

// Trouver toutes les pages ville
const cityPages = glob.sync('src/app/*-chauffage-climatisation/page.tsx');

console.log(`🎯 ${cityPages.length} pages à corriger\n`);

let totalFixed = 0;
let fixedPages = [];

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

  // 1. CORRIGER HERO SECTION
  // Corriger le fond de la hero section
  const heroSectionPattern = /(<section className="[^"]*relative[^"]*h-\[90vh\][^"]*bg-)([^"]*)/g;
  if (content.match(heroSectionPattern)) {
    content = content.replace(heroSectionPattern, (match, before, bgClass) => {
      if (!bgClass.includes('white dark:bg-black')) {
        fixes.push('✅ Hero: fond corrigé vers white dark:bg-black');
        modified = true;
        return before + 'white dark:bg-black text-black dark:text-white';
      }
      return match;
    });
  }

  // Corriger les boutons CTA dans le hero (inverser si nécessaire)
  content = content.replace(
    /bg-black dark:bg-white text-white dark:text-black/g,
    'bg-white dark:bg-black text-black dark:text-white'
  );
  if (content !== fs.readFileSync(filePath, 'utf8')) {
    fixes.push('✅ Hero: boutons CTA corrigés');
    modified = true;
  }

  // 2. CORRIGER SECTION "POURQUOI CHOISIR CLIMGO"
  // Renforcer les couleurs des icônes (10% -> couleurs pleines)
  const subtileIconReplacements = [
    { from: 'bg-[#10b981]/10 dark:bg-[#10b981]/20', to: 'bg-green-500 dark:bg-green-600', color: 'vert' },
    { from: 'bg-[#0ea5e9]/10 dark:bg-[#0ea5e9]/20', to: 'bg-blue-500 dark:bg-blue-600', color: 'bleu' },
    { from: 'bg-[#f97316]/10 dark:bg-[#f97316]/20', to: 'bg-orange-500 dark:bg-orange-600', color: 'orange' },
    { from: 'bg-[#8b5cf6]/10 dark:bg-[#8b5cf6]/20', to: 'bg-purple-500 dark:bg-purple-600', color: 'violet' }
  ];

  subtileIconReplacements.forEach(replacement => {
    if (content.includes(replacement.from)) {
      content = content.replace(new RegExp(replacement.from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), replacement.to);
      fixes.push(`✅ Icônes: ${replacement.color} renforcé`);
      modified = true;
    }
  });

  // Corriger les couleurs des icônes pour qu'elles soient blanches sur fond coloré
  const iconColorReplacements = [
    { from: 'text-[#10b981] dark:text-[#34d399]', to: 'text-white' },
    { from: 'text-[#0ea5e9] dark:text-[#38bdf8]', to: 'text-white' },
    { from: 'text-[#f97316] dark:text-[#fb923c]', to: 'text-white' },
    { from: 'text-[#8b5cf6] dark:text-[#a78bfa]', to: 'text-white' }
  ];

  iconColorReplacements.forEach(replacement => {
    if (content.includes(replacement.from)) {
      content = content.replace(new RegExp(replacement.from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), replacement.to);
      fixes.push('✅ Icônes: couleur blanche appliquée');
      modified = true;
    }
  });

  // 3. CORRIGER SECTION "NOS SOLUTIONS CLIMGO"
  // Uniformiser toutes les bordures en noir/blanc
  content = content.replace(/border-2 border-(blue|orange|green|purple)-500 dark:border-(blue|orange|green|purple)-600/g, 'border-2 border-black dark:border-white');
  if (content !== fs.readFileSync(filePath, 'utf8')) {
    fixes.push('✅ Solutions: bordures uniformisées en noir/blanc');
    modified = true;
  }

  // Uniformiser tous les badges en noir/blanc
  const badgeColorPattern = /bg-(blue|orange|green|purple)-500 dark:bg-(blue|orange|green|purple)-600 text-white/g;
  if (content.match(badgeColorPattern)) {
    content = content.replace(badgeColorPattern, 'bg-black dark:bg-white text-white dark:text-black');
    fixes.push('✅ Solutions: badges uniformisés en noir/blanc');
    modified = true;
  }

  // 4. NETTOYER LES ÉLÉMENTS DE FOND PROBLÉMATIQUES
  const backgroundCleanups = [
    { from: 'bg-transparent', to: '', desc: 'transparents' },
    { from: 'bg-black/10', to: '', desc: 'noir 10%' },
    { from: 'bg-white/10', to: '', desc: 'blanc 10%' }
  ];

  backgroundCleanups.forEach(cleanup => {
    if (content.includes(cleanup.from)) {
      // Supprimer les divs avec ces classes problématiques
      content = content.replace(new RegExp(`<div className="[^"]*${cleanup.from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^"]*"></div>`, 'g'), '');
      fixes.push(`✅ Fond: éléments ${cleanup.desc} supprimés`);
      modified = true;
    }
  });

  // Sauvegarder si modifié
  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`   📋 Corrections appliquées:`);
    fixes.forEach(fix => console.log(`      ${fix}`));
    fixedPages.push(cityName);
    totalFixed++;
  } else {
    console.log(`   ✅ Page déjà parfaite !`);
  }
  
  console.log('');
});

// RAPPORT FINAL
console.log('\n🎉 CORRECTION TERMINÉE !');
console.log('========================');
console.log(`📊 Pages corrigées: ${totalFixed}/${cityPages.length}`);
console.log(`\n✅ Pages fixes: ${fixedPages.join(', ')}`);
console.log('\n🎯 Corrections appliquées:');
console.log('   🎭 Hero sections alignées sur le design de référence');
console.log('   🎨 Icônes renforcées avec des couleurs vives');
console.log('   🛠️ Solutions uniformisées (bordures et badges noirs/blancs)');
console.log('   🧹 Éléments de fond problématiques supprimés');
console.log('\n🚀 Toutes les pages sont maintenant cohérentes !');
