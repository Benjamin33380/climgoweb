const fs = require('fs');
const { glob } = require('glob');

console.log('🔍 DIAGNOSTIC DES PROBLÈMES DARK/LIGHT');
console.log('======================================\n');

// Lire la page d'accueil comme référence
const homePage = fs.readFileSync('src/app/page.tsx', 'utf8');
console.log('📄 Page d\'accueil chargée comme référence\n');

// Extraire la section hero de la page d'accueil
const homeHeroMatch = homePage.match(/<section className="[^"]*"[^>]*>/);
const homeHeroClass = homeHeroMatch ? homeHeroMatch[0] : 'Non trouvé';

console.log('🏠 HERO PAGE D\'ACCUEIL:');
console.log(`   ${homeHeroClass}\n`);

// Analyser quelques pages villes
const cityPages = glob.sync('src/app/*-chauffage-climatisation/page.tsx').slice(0, 5);

console.log('🏙️  PAGES VILLES À ANALYSER:');
cityPages.forEach((filePath, index) => {
  const cityName = filePath.split('/').pop().replace('-chauffage-climatisation', '').replace('.tsx', '');
  console.log(`   ${index + 1}. ${cityName}`);
});
console.log('');

let differences = [];

cityPages.forEach((filePath, index) => {
  const cityName = filePath.split('/').pop().replace('-chauffage-climatisation', '').replace('.tsx', '');
  console.log(`🔧 [${index + 1}/${cityPages.length}] Analyse: ${cityName}`);
  
  if (!fs.existsSync(filePath)) {
    console.log(`❌ Fichier non trouvé: ${filePath}`);
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  
  // Extraire la section hero
  const heroMatch = content.match(/<section className="[^"]*"[^>]*>/);
  const heroClass = heroMatch ? heroMatch[0] : 'Non trouvé';
  
  console.log(`   Hero: ${heroClass}`);
  
  // Comparer avec la page d'accueil
  if (heroClass !== homeHeroClass) {
    differences.push({
      city: cityName,
      expected: homeHeroClass,
      actual: heroClass
    });
    console.log(`   ⚠️  DIFFÉRENCE DÉTECTÉE !`);
  } else {
    console.log(`   ✅ Identique à la page d'accueil`);
  }
  
  // Vérifier d'autres éléments problématiques
  const issues = [];
  
  // Vérifier les classes de texte
  if (content.includes('text-white dark:text-black')) {
    issues.push('Texte inversé (blanc en light, noir en dark)');
  }
  
  if (content.includes('bg-black dark:bg-white')) {
    issues.push('Fond inversé (noir en light, blanc en dark)');
  }
  
  // Vérifier les boutons
  if (content.includes('bg-black dark:bg-black text-white dark:text-white')) {
    issues.push('Boutons tout noirs');
  }
  
  if (issues.length > 0) {
    console.log(`   🚨 PROBLÈMES DÉTECTÉS:`);
    issues.forEach(issue => console.log(`      - ${issue}`));
  }
  
  console.log('');
});

// RAPPORT FINAL
console.log('\n📊 RAPPORT FINAL');
console.log('================');

if (differences.length === 0) {
  console.log('✅ Toutes les pages hero sont identiques à la page d\'accueil');
} else {
  console.log(`❌ ${differences.length} page(s) avec des différences:`);
  differences.forEach(diff => {
    console.log(`\n🏙️  ${diff.city.toUpperCase()}:`);
    console.log(`   Attendu: ${diff.expected}`);
    console.log(`   Actuel:  ${diff.actual}`);
  });
}

console.log('\n🔍 VÉRIFICATIONS SUPPLÉMENTAIRES:');
console.log('Recherche de patterns problématiques...\n');

// Chercher tous les patterns problématiques
const allCityPages = glob.sync('src/app/*-chauffage-climatisation/page.tsx');
let globalIssues = {
  'text-white dark:text-black': 0,
  'bg-black dark:bg-white': 0,
  'bg-black dark:bg-black text-white dark:text-white': 0
};

allCityPages.forEach(filePath => {
  const content = fs.readFileSync(filePath, 'utf8');
  Object.keys(globalIssues).forEach(pattern => {
    if (content.includes(pattern)) {
      globalIssues[pattern]++;
    }
  });
});

Object.entries(globalIssues).forEach(([pattern, count]) => {
  if (count > 0) {
    console.log(`❌ "${pattern}": ${count} pages affectées`);
  } else {
    console.log(`✅ "${pattern}": Aucun problème`);
  }
});

console.log('\n🎯 RECOMMANDATIONS:');
if (differences.length > 0) {
  console.log('   1. Uniformiser les classes hero avec la page d\'accueil');
}
if (globalIssues['text-white dark:text-black'] > 0) {
  console.log('   2. Corriger les textes inversés');
}
if (globalIssues['bg-black dark:bg-white'] > 0) {
  console.log('   3. Corriger les fonds inversés');
}
if (globalIssues['bg-black dark:bg-black text-white dark:text-white'] > 0) {
  console.log('   4. Corriger les boutons tout noirs');
}

console.log('\n🚀 Diagnostic terminé !');
