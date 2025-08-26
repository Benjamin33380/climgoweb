const fs = require('fs');
const path = require('path');

console.log('🧹 Nettoyage des sections CityFAQ et imports inutiles...\n');

const villesDir = path.join(__dirname, '..', 'src', 'app', 'villes');
const cityFolders = fs.readdirSync(villesDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

let cleanedCount = 0;

cityFolders.forEach(cityFolder => {
  const pagePath = path.join(villesDir, cityFolder, 'page.tsx');
  
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf8');
    let modified = false;
    
    // Supprime le composant CityFAQ s'il existe
    if (content.includes('<CityFAQ')) {
      content = content.replace(/{\/\* Section FAQ spécifique à la ville \*\/\s*<CityFAQ[^>]*>[\s\S]*?<\/CityFAQ>/g, '');
      modified = true;
      console.log(`  ✅ Supprimé CityFAQ de ${cityFolder}`);
    }
    
    // Supprime les imports inutiles
    const lines = content.split('\n');
    const newLines = [];
    
    for (const line of lines) {
      // Garde seulement les imports essentiels
      if (!line.includes('import CityFAQ') && 
          !line.includes('import { generateCityFAQ }') &&
          !line.includes('import { getCityFAQSet, getCityInitials }')) {
        newLines.push(line);
      } else {
        modified = true;
        console.log(`  🗑️  Supprimé import inutile: ${line.trim()}`);
      }
    }
    
    if (modified) {
      const newContent = newLines.join('\n');
      fs.writeFileSync(pagePath, newContent);
      cleanedCount++;
      console.log(`✅ ${cityFolder} - Nettoyé`);
    } else {
      console.log(`ℹ️  ${cityFolder} - Déjà propre`);
    }
  }
});

console.log(`\n🎉 Nettoyage terminé ! ${cleanedCount} villes nettoyées`);
