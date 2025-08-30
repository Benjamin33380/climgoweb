const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔒 Configuration HTTPS pour le développement local...\n');

// Créer le dossier certs s'il n'existe pas
const certsDir = path.join(process.cwd(), 'certs');
if (!fs.existsSync(certsDir)) {
  fs.mkdirSync(certsDir);
  console.log('✅ Dossier certs créé');
}

// Générer le certificat auto-signé
try {
  console.log('🔧 Génération du certificat SSL auto-signé...');
  
  // Générer la clé privée
  execSync(`openssl genrsa -out ${certsDir}/localhost.key 2048`, { stdio: 'inherit' });
  
  // Générer le certificat
  execSync(`openssl req -new -x509 -key ${certsDir}/localhost.key -out ${certsDir}/localhost.crt -days 365 -subj "/C=FR/ST=Gironde/L=Marcheprime/O=ClimGO/OU=Dev/CN=localhost"`, { stdio: 'inherit' });
  
  console.log('\n✅ Certificat SSL généré avec succès !');
  console.log('📁 Fichiers créés :');
  console.log(`   - ${certsDir}/localhost.key`);
  console.log(`   - ${certsDir}/localhost.crt`);
  
} catch (error) {
  console.error('❌ Erreur lors de la génération du certificat:', error.message);
  console.log('\n💡 Solution alternative : Utilisez HTTP en développement');
  console.log('   L\'icône de verrouillage est normale avec http://localhost:3000');
  process.exit(1);
}

// Créer le script de démarrage HTTPS
const httpsScript = `const { createServer } = require('https');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = 3001;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync(path.join(__dirname, '../certs/localhost.key')),
  cert: fs.readFileSync(path.join(__dirname, '../certs/localhost.crt')),
};

app.prepare().then(() => {
  createServer(httpsOptions, async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(\`🔒 Serveur HTTPS prêt sur https://\${hostname}:\${port}\`);
  });
});`;

fs.writeFileSync(path.join(process.cwd(), 'scripts/dev-https.js'), httpsScript);

console.log('\n🚀 Configuration terminée !');
console.log('\n📋 Utilisation :');
console.log('   • HTTP (normal) : npm run dev → http://localhost:3000');
console.log('   • HTTPS (dev)   : node scripts/dev-https.js → https://localhost:3001');
console.log('\n⚠️  Note : Avec HTTPS auto-signé, votre navigateur affichera un avertissement');
console.log('   Cliquez sur "Avancé" puis "Continuer vers localhost" pour accepter');
