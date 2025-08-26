const fs = require('fs');
const path = require('path');

console.log('🚀 Correction des doublons CityLinksList...\n');

const villesDir = path.join(__dirname, '..', 'src', 'app', 'villes');
const cityFolders = fs.readdirSync(villesDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

let fixedCount = 0;

cityFolders.forEach(cityFolder => {
  const pagePath = path.join(villesDir, cityFolder, 'page.tsx');
  
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf8');
    
    // Compte combien de CityLinksList il y a
    const cityLinksCount = (content.match(/<CityLinksList \/>/g) || []).length;
    
    if (cityLinksCount > 1) {
      // Supprime tous les CityLinksList sauf le premier
      const firstMatch = content.indexOf('<CityLinksList />');
      const secondMatch = content.indexOf('<CityLinksList />', firstMatch + 1);
      
      if (secondMatch !== -1) {
        // Supprime le deuxième et tous les suivants
        content = content.replace(/<CityLinksList \/>/g, '');
        content = content.replace('{/* Section Liste des Villes - Juste au-dessus de la carte */}', 
          '{/* Section Liste des Villes - Juste au-dessus de la carte */}\n      <CityLinksList />');
        
        fs.writeFileSync(pagePath, content);
        console.log(`✅ ${cityFolder} - Supprimé ${cityLinksCount - 1} doublon(s)`);
        fixedCount++;
      }
    } else {
      console.log(`ℹ️  ${cityFolder} - OK (${cityLinksCount} CityLinksList)`);
    }
  }
});

console.log(`\n🎉 Terminé ! ${fixedCount} villes corrigées`);
