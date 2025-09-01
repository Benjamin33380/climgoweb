const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function createAdmin() {
  try {
    console.log('🔐 Création de l\'administrateur...');

    // Vérifier si un admin existe déjà
    const existingAdmin = await prisma.user.findFirst({
      where: {
        role: 'ADMIN'
      }
    });

    if (existingAdmin) {
      console.log('⚠️  Un administrateur existe déjà:', existingAdmin.email);
      return;
    }

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash('admin123', 12);

    // Créer l'administrateur
    const admin = await prisma.user.create({
      data: {
        email: 'admin@climgo.fr',
        password: hashedPassword,
        firstName: 'Admin',
        lastName: 'ClimGo',
        role: 'ADMIN',
        isActive: true,
        emailVerified: true
      }
    });

    console.log('✅ Administrateur créé avec succès!');
    console.log('📧 Email:', admin.email);
    console.log('🔑 Mot de passe: admin123');
    console.log('⚠️  N\'oubliez pas de changer le mot de passe après la première connexion!');

  } catch (error) {
    console.error('❌ Erreur lors de la création de l\'administrateur:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Exécuter le script
createAdmin(); 