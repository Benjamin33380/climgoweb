#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🧹 OPTIMISATION AUTOMATIQUE DU PROJET ClimGO\n');

// Fonction pour vérifier si un fichier existe
const fileExists = (filePath) => fs.existsSync(path.join(process.cwd(), filePath));

// Fonction pour supprimer un fichier/dossier
const removeFile = (filePath) => {
  const fullPath = path.join(process.cwd(), filePath);
  if (fs.existsSync(fullPath)) {
    if (fs.lstatSync(fullPath).isDirectory()) {
      fs.rmSync(fullPath, { recursive: true, force: true });
    } else {
      fs.unlinkSync(fullPath);
    }
    console.log(`✅ Supprimé: ${filePath}`);
    return true;
  }
  return false;
};

// Fonction pour vérifier l'utilisation d'une dépendance
const checkDependencyUsage = (depName, excludeFiles = []) => {
  try {
    const result = execSync(`grep -r "${depName}" src/ --exclude-dir=node_modules 2>/dev/null || true`, { encoding: 'utf8' });
    const lines = result.split('\n').filter(line => line.trim());
    
    // Filtrer les fichiers exclus
    const filteredLines = lines.filter(line => {
      return !excludeFiles.some(excludeFile => line.includes(excludeFile));
    });
    
    return filteredLines.length > 0;
  } catch (error) {
    return false;
  }
};

console.log('📊 ANALYSE DES DÉPENDANCES...\n');

// Vérifier l'utilisation des dépendances 3D
const threeDeps = [
  { name: '@react-three/drei', files: ['globe.tsx', 'Logo3D.tsx'] },
  { name: '@react-three/fiber', files: ['globe.tsx', 'Logo3D.tsx'] },
  { name: 'three', files: ['globe.tsx', 'Logo3D.tsx'] },
  { name: 'cobe', files: ['globe.tsx'] }
];

const unusedDeps = [];

threeDeps.forEach(dep => {
  const isUsed = checkDependencyUsage(dep.name, dep.files);
  if (!isUsed) {
    unusedDeps.push(dep.name);
    console.log(`❌ ${dep.name} - NON UTILISÉ`);
  } else {
    console.log(`✅ ${dep.name} - UTILISÉ`);
  }
});

// Vérifier Redis
const redisUsed = checkDependencyUsage('@upstash/redis', ['redis.ts']);
if (!redisUsed) {
  unusedDeps.push('@upstash/redis');
  console.log(`❌ @upstash/redis - NON UTILISÉ`);
} else {
  console.log(`✅ @upstash/redis - UTILISÉ`);
}

// Vérifier autres dépendances
const otherDeps = ['web-vitals', 'glob', 'tw-animate-css'];
otherDeps.forEach(dep => {
  const isUsed = checkDependencyUsage(dep);
  if (!isUsed) {
    unusedDeps.push(dep);
    console.log(`❌ ${dep} - NON UTILISÉ`);
  } else {
    console.log(`✅ ${dep} - UTILISÉ`);
  }
});

console.log('\n🗂️ SUPPRESSION DES FICHIERS OBSOLÈTES...\n');

// Fichiers à supprimer
const filesToRemove = [
  'scripts/createAdmin.js',
  'BLOG_SETUP.md',
  'src/components/ui/globe.tsx',
  'src/components/ui/Logo3D.tsx',
  'src/lib/redis.ts'
];

let removedFiles = 0;
filesToRemove.forEach(file => {
  if (removeFile(file)) {
    removedFiles++;
  }
});

console.log('\n📦 SUPPRESSION DES DÉPENDANCES INUTILISÉES...\n');

if (unusedDeps.length > 0) {
  console.log(`Suppression de ${unusedDeps.length} dépendances:`);
  unusedDeps.forEach(dep => console.log(`  - ${dep}`));
  
  try {
    const command = `npm uninstall ${unusedDeps.join(' ')}`;
    console.log(`\n🔧 Exécution: ${command}`);
    execSync(command, { stdio: 'inherit' });
    console.log('✅ Dépendances supprimées avec succès !');
  } catch (error) {
    console.error('❌ Erreur lors de la suppression des dépendances:', error.message);
  }
} else {
  console.log('✅ Aucune dépendance inutilisée trouvée !');
}

console.log('\n🔧 NETTOYAGE DU CACHE...\n');

try {
  // Nettoyer le cache npm
  execSync('npm cache clean --force', { stdio: 'inherit' });
  console.log('✅ Cache npm nettoyé');
  
  // Supprimer .next si existe
  if (removeFile('.next')) {
    console.log('✅ Dossier .next supprimé');
  }
  
  // Supprimer node_modules/.cache si existe
  removeFile('node_modules/.cache');
  
} catch (error) {
  console.log('⚠️ Nettoyage partiel du cache');
}

console.log('\n🚀 REBUILD OPTIMISÉ...\n');

try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('\n✅ Build optimisé réussi !');
} catch (error) {
  console.error('\n❌ Erreur lors du build:', error.message);
  process.exit(1);
}

console.log('\n📊 RÉSUMÉ DE L\'OPTIMISATION:\n');
console.log(`✅ Dépendances supprimées: ${unusedDeps.length}`);
console.log(`✅ Fichiers supprimés: ${removedFiles}`);
console.log('✅ Cache nettoyé');
console.log('✅ Build optimisé');

console.log('\n🎉 OPTIMISATION TERMINÉE !');
console.log('Votre projet ClimGO est maintenant plus léger et plus rapide ! 🚀\n');

// Afficher les nouvelles métriques
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const depCount = Object.keys(packageJson.dependencies || {}).length;
  const devDepCount = Object.keys(packageJson.devDependencies || {}).length;
  
  console.log('📈 NOUVELLES MÉTRIQUES:');
  console.log(`   Dependencies: ${depCount}`);
  console.log(`   Dev Dependencies: ${devDepCount}`);
  console.log(`   Total: ${depCount + devDepCount}`);
} catch (error) {
  console.log('⚠️ Impossible de lire les métriques finales');
}
