const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function createAdmin() {
  try {
    const existingAdmin = await prisma.admin.findFirst({
      where: {
        email: 'contact@climgo.fr'
      }
    });

    if (existingAdmin) {
      console.log('L\'administrateur existe déjà !');
      return;
    }

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash('benclimgo06', 10);

    // Créer l'administrateur
    const admin = await prisma.admin.create({
      data: {
        name: 'bcardoso',
        email: 'contact@climgo.fr',
        password: hashedPassword,
        role: 'ADMIN'
      }
    });

    console.log('Administrateur créé avec succès !');
    console.log('Email: contact@climgo.fr');
    console.log('Mot de passe: benclimgo06');
    console.log('ID:', admin.id);

  } catch (error) {
    console.error('Erreur lors de la création de l\'administrateur:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createAdmin(); 