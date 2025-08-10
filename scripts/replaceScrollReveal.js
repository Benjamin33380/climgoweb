const fs = require('fs');
const path = require('path');

// Fonction pour remplacer ScrollReveal par SimpleWrapper
function replaceScrollReveal(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remplacer les imports
    if (content.includes("import { ScrollReveal }")) {
      content = content.replace(
        /import \{ ScrollReveal \} from ['"]([^'"]+)['"];?/g,
        "import { SimpleWrapper } from '@/components/ui/SimpleWrapper';"
      );
      modified = true;
    }

    // Remplacer les composants ScrollReveal par SimpleWrapper
    if (content.includes('<ScrollReveal')) {
      content = content.replace(
        /<ScrollReveal([^>]*)>/g,
        '<SimpleWrapper>'
      );
      content = content.replace(
        /<\/ScrollReveal>/g,
        '</SimpleWrapper>'
      );
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Modifié: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Erreur avec ${filePath}:`, error.message);
  }
}

// Fonction récursive pour parcourir les dossiers
function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      replaceScrollReveal(filePath);
    }
  });
}

// Démarrer le processus
console.log('🔄 Remplacement des ScrollReveal par SimpleWrapper...');
processDirectory('./src');
console.log('✅ Remplacement terminé !');
