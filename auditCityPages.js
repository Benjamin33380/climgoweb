const fs = require('fs');
const { glob } = require('glob');

console.log('🔍 AUDIT COMPLET DES 47 PAGES VILLE');
console.log('=====================================\n');

// Trouver toutes les pages ville
const cityPages = glob.sync('src/app/*-chauffage-climatisation/page.tsx');

console.log(`📊 ${cityPages.length} pages à auditer\n`);

const issues = {
  heroSections: [],
  colorConflicts: [],
  missingColors: [],
  inconsistencies: []
};

let totalIssues = 0;

cityPages.forEach((filePath, index) => {
  const cityName = filePath.split('/').pop().replace('-chauffage-climatisation', '').replace('.tsx', '');
  console.log(`🔍 [${index + 1}/${cityPages.length}] Audit: ${cityName}`);
  
  if (!fs.existsSync(filePath)) {
    console.log(`❌ Fichier non trouvé: ${filePath}`);
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  let pageIssues = [];

  // 1. AUDIT HERO SECTION
  console.log(`   🎯 Hero Section...`);
  
  // Vérifier le background de la hero section
  const heroSectionMatch = content.match(/section className="[^"]*relative[^"]*h-\[90vh\][^"]*bg-([^"]*)/);
  if (heroSectionMatch) {
    const heroBg = heroSectionMatch[1];
    if (heroBg.includes('black dark:bg-white') || heroBg.includes('bg-black')) {
      pageIssues.push('❌ Hero: fond inversé (noir au lieu de blanc)');
      issues.heroSections.push(cityName);
    } else if (!heroBg.includes('white dark:bg-black')) {
      pageIssues.push('⚠️ Hero: fond non standard');
      issues.heroSections.push(cityName);
    }
  }

  // Vérifier les boutons CTA dans le hero
  const ctaButtonsMatches = content.matchAll(/className="[^"]*bg-([^"]*)[^"]*text-([^"]*)"/g);
  for (let match of ctaButtonsMatches) {
    const bgClass = match[1];
    const textClass = match[2];
    if (bgClass.includes('black dark:bg-white') && textClass.includes('white dark:text-black')) {
      pageIssues.push('❌ CTA: couleurs inversées');
      issues.heroSections.push(cityName);
    }
  }

  // 2. AUDIT SECTION "POURQUOI CHOISIR CLIMGO"
  console.log(`   🎨 Section Pourquoi choisir...`);
  
  // Vérifier les couleurs des icônes (doivent être vibrantes, pas subtiles)
  const subtileIconMatches = content.matchAll(/bg-\[#[a-fA-F0-9]{6}\]\/10/g);
  let subtileIconCount = 0;
  for (let match of subtileIconMatches) {
    subtileIconCount++;
  }
  if (subtileIconCount > 2) {
    pageIssues.push(`⚠️ ${subtileIconCount} icônes trop subtiles (opacité 10%)`);
    issues.missingColors.push(cityName);
  }

  // Vérifier la cohérence des couleurs hover
  const inconsistentHovers = content.match(/group-hover:text-\[#10b981\].*?group-hover:text-\[#0ea5e9\]/s);
  if (inconsistentHovers) {
    pageIssues.push('❌ Hovers incohérents (mélange vert/bleu)');
    issues.colorConflicts.push(cityName);
  }

  // 3. AUDIT SECTION "NOS SOLUTIONS CLIMGO"
  console.log(`   🛠️ Section Solutions...`);
  
  // Vérifier les bordures colorées vs noires
  const solutionBorders = content.matchAll(/border-2 border-([^"]*)/g);
  let coloredBorders = 0;
  let blackBorders = 0;
  for (let match of solutionBorders) {
    const borderClass = match[1];
    if (borderClass.includes('blue-') || borderClass.includes('orange-') || borderClass.includes('green-') || borderClass.includes('purple-')) {
      coloredBorders++;
    } else if (borderClass.includes('black dark:border-white')) {
      blackBorders++;
    }
  }
  
  if (coloredBorders > 0 && blackBorders > 0) {
    pageIssues.push(`❌ Solutions: bordures mixtes (${coloredBorders} colorées, ${blackBorders} noires)`);
    issues.inconsistencies.push(cityName);
  }

  // Vérifier les badges colorés vs neutres
  const badgeMatches = content.matchAll(/bg-(blue|orange|green|purple)-500[^"]*text-white/g);
  const neutralBadgeMatches = content.matchAll(/bg-black\/20 dark:bg-white\/20/g);
  
  if (badgeMatches && Array.from(badgeMatches).length > 0 && Array.from(neutralBadgeMatches).length > 0) {
    pageIssues.push('❌ Solutions: badges mixtes (colorés + neutres)');
    issues.inconsistencies.push(cityName);
  }

  // 4. AUDIT ÉLÉMENTS DE FOND
  console.log(`   🌀 Éléments de fond...`);
  
  // Vérifier les éléments de fond problématiques
  if (content.includes('bg-transparent') || content.includes('bg-black/10') || content.includes('bg-white/10')) {
    pageIssues.push('⚠️ Éléments de fond transparents détectés');
    issues.missingColors.push(cityName);
  }

  // 5. RÉSUMÉ POUR CETTE PAGE
  if (pageIssues.length > 0) {
    console.log(`   📋 Issues trouvées:`);
    pageIssues.forEach(issue => console.log(`      ${issue}`));
    totalIssues += pageIssues.length;
  } else {
    console.log(`   ✅ Page parfaite !`);
  }
  
  console.log('');
});

// RAPPORT FINAL
console.log('\n🎯 RAPPORT FINAL D\'AUDIT');
console.log('=========================');
console.log(`📊 Total issues détectées: ${totalIssues}`);
console.log(`\n🎭 Hero Sections problématiques (${issues.heroSections.length}):`);
console.log(issues.heroSections.join(', '));
console.log(`\n🎨 Conflits de couleurs (${issues.colorConflicts.length}):`);
console.log(issues.colorConflicts.join(', '));
console.log(`\n🌈 Couleurs manquantes (${issues.missingColors.length}):`);
console.log(issues.missingColors.join(', '));
console.log(`\n⚖️ Incohérences (${issues.inconsistencies.length}):`);
console.log(issues.inconsistencies.join(', '));

console.log('\n🔧 PROCHAINES ÉTAPES:');
console.log('1. Corriger toutes les hero sections');
console.log('2. Uniformiser les couleurs des solutions');
console.log('3. Renforcer les couleurs subtiles');
console.log('4. Nettoyer les éléments de fond');
