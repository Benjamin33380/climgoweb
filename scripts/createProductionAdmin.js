const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

/**
 * Crée le compte administrateur OFFICIEL pour la production
 * Ce compte doit être stable et documenté
 */
async function createProductionAdmin() {
  try {
    console.log('🔐 CRÉATION DU COMPTE ADMIN PRODUCTION\n');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

    // Configuration du compte admin production
    const ADMIN_CONFIG = {
      email: 'contact@climgo.fr',
      password: 'benclimgo0699',
      firstName: 'Admin',
      lastName: 'ClimGO',
      role: 'ADMIN'
    };

    // Vérifier si le compte existe déjà
    const existingAdmin = await prisma.user.findUnique({
      where: { email: ADMIN_CONFIG.email }
    });

    if (existingAdmin) {
      console.log('⚠️  Le compte existe déjà !');
      console.log('   Voulez-vous mettre à jour le mot de passe ?');
      console.log('   → Supprimez d\'abord l\'ancien compte ou modifiez l\'email\n');
      
      console.log('📋 Compte existant:');
      console.log('   Email:', existingAdmin.email);
      console.log('   Nom:', existingAdmin.firstName, existingAdmin.lastName);
      console.log('   Créé le:', existingAdmin.createdAt.toLocaleDateString('fr-FR'));
      
      // Option : mettre à jour le mot de passe
      const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });

      readline.question('\n🔄 Voulez-vous réinitialiser le mot de passe ? (oui/non): ', async (answer) => {
        if (answer.toLowerCase() === 'oui' || answer.toLowerCase() === 'o') {
          const hashedPassword = await bcrypt.hash(ADMIN_CONFIG.password, 12);
          
          await prisma.user.update({
            where: { email: ADMIN_CONFIG.email },
            data: {
              password: hashedPassword,
              isActive: true,
              emailVerified: true,
              role: 'ADMIN'
            }
          });

          console.log('\n✅ Mot de passe réinitialisé !');
          displayCredentials(ADMIN_CONFIG);
        } else {
          console.log('\n❌ Opération annulée');
        }
        
        readline.close();
        await prisma.$disconnect();
      });

      return;
    }

    // Créer le nouveau compte admin
    console.log('➕ Création du nouveau compte admin...\n');

    const hashedPassword = await bcrypt.hash(ADMIN_CONFIG.password, 12);

    const admin = await prisma.user.create({
      data: {
        email: ADMIN_CONFIG.email,
        password: hashedPassword,
        firstName: ADMIN_CONFIG.firstName,
        lastName: ADMIN_CONFIG.lastName,
        role: ADMIN_CONFIG.role,
        isActive: true,
        emailVerified: true
      }
    });

    console.log('✅ COMPTE ADMIN CRÉÉ AVEC SUCCÈS !\n');
    displayCredentials(ADMIN_CONFIG);

    // Sauvegarder dans un fichier sécurisé
    await saveToSecureFile(ADMIN_CONFIG);

  } catch (error) {
    console.error('❌ Erreur:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

/**
 * Affiche les identifiants de manière claire
 */
function displayCredentials(config) {
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🔑 IDENTIFIANTS ADMIN PRODUCTION');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`📧 Email: ${config.email}`);
  console.log(`🔐 Mot de passe: ${config.password}`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('\n⚠️  IMPORTANT:');
  console.log('   1. Notez ces identifiants dans un endroit sûr');
  console.log('   2. NE les partagez PAS dans Git');
  console.log('   3. Changez le mot de passe après la première connexion');
  console.log('   4. Les identifiants sont sauvegardés dans .admin-credentials.txt');
  console.log('\n🌐 URL de connexion:');
  console.log('   Production: https://www.climgo.fr/admin/login');
  console.log('   Local: http://localhost:3000/admin/login');
}

/**
 * Sauvegarde les identifiants dans un fichier sécurisé
 */
async function saveToSecureFile(config) {
  const fs = require('fs');
  const path = require('path');
  
  const content = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    COMPTE ADMINISTRATEUR ClimGO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📧 Email: ${config.email}
🔐 Mot de passe: ${config.password}

🌐 URL de connexion:
   Production: https://www.climgo.fr/admin/login
   Local: http://localhost:3000/admin/login

📅 Créé le: ${new Date().toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR')}

⚠️  IMPORTANT:
   - Ne JAMAIS commiter ce fichier dans Git
   - Conservez ces identifiants en lieu sûr
   - Changez le mot de passe après la première connexion

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;

  const filePath = path.join(process.cwd(), '.admin-credentials.txt');
  fs.writeFileSync(filePath, content, 'utf8');
  
  console.log('\n💾 Identifiants sauvegardés dans: .admin-credentials.txt');
  
  // Ajouter au .gitignore si pas déjà présent
  const gitignorePath = path.join(process.cwd(), '.gitignore');
  if (fs.existsSync(gitignorePath)) {
    let gitignoreContent = fs.readFileSync(gitignorePath, 'utf8');
    if (!gitignoreContent.includes('.admin-credentials.txt')) {
      fs.appendFileSync(gitignorePath, '\n# Identifiants admin (NE PAS COMMITER)\n.admin-credentials.txt\n');
      console.log('✅ Ajouté à .gitignore pour sécurité');
    }
  }
}

// Exécuter
createProductionAdmin();

