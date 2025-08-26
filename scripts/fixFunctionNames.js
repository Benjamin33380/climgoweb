const fs = require('fs');
const path = require('path');

// Fonction pour convertir un nom de ville en nom de fonction valide
function toValidFunctionName(cityName) {
  return cityName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

// Fonction pour corriger un fichier layout
function fixLayoutFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Extraire le nom de la ville du chemin du fichier
    const fileName = path.basename(filePath);
    const citySlug = fileName.replace('-layout.tsx', '');
    
    // Générer le nom de fonction valide
    const validFunctionName = toValidFunctionName(citySlug) + 'Layout';
    
    // Remplacer le nom de fonction invalide
    const oldFunctionPattern = new RegExp(`export default function [^-]+-.*Layout\\(`, 'g');
    const newFunctionPattern = `export default function ${validFunctionName}(`;
    
    if (oldFunctionPattern.test(content)) {
      content = content.replace(oldFunctionPattern, newFunctionPattern);
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Erreur lors du traitement de ${filePath}:`, error.message);
    return false;
  }
}

// Fonction principale
function main() {
  const villesDir = path.join(__dirname, '../src/app/villes');
  
  if (!fs.existsSync(villesDir)) {
    console.error('Le répertoire des villes n\'existe pas');
    return;
  }
  
  const villes = fs.readdirSync(villesDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  let fixedCount = 0;
  let totalCount = 0;
  
  for (const ville of villes) {
    const layoutPath = path.join(villesDir, ville, 'layout.tsx');
    
    if (fs.existsSync(layoutPath)) {
      totalCount++;
      if (fixLayoutFile(layoutPath)) {
        fixedCount++;
        console.log(`✅ ${ville} corrigé`);
      } else {
        console.log(`ℹ️  ${ville} déjà correct`);
      }
    }
  }
  
  console.log(`\n🎯 Résumé : ${fixedCount}/${totalCount} villes corrigées`);
}

main();
