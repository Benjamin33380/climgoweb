const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function checkAdmin() {
  try {
    console.log('🔍 Vérification des administrateurs dans MongoDB...\n');

    // Vérifier la connexion à la base
    console.log('📡 Test de connexion à MongoDB...');
    await prisma.$connect();
    console.log('✅ Connexion à MongoDB réussie !\n');

    // Rechercher les utilisateurs admin
    console.log('👥 Recherche des administrateurs...');
    const adminUsers = await prisma.user.findMany({
      where: {
        role: 'ADMIN'
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        isActive: true,
        createdAt: true
      }
    });

    if (adminUsers.length === 0) {
      console.log('❌ Aucun administrateur trouvé !');
      console.log('\n🔧 Pour créer un administrateur, exécutez :');
      console.log('npm run create-admin');
    } else {
      console.log(`✅ ${adminUsers.length} administrateur(s) trouvé(s) :\n`);
      
      adminUsers.forEach((admin, index) => {
        console.log(`${index + 1}. ${admin.firstName || 'N/A'} ${admin.lastName || 'N/A'}`);
        console.log(`   📧 Email: ${admin.email}`);
        console.log(`   🎭 Rôle: ${admin.role}`);
        console.log(`   📅 Créé le: ${admin.createdAt.toLocaleDateString('fr-FR')}`);
        console.log(`   ✅ Actif: ${admin.isActive ? 'Oui' : 'Non'}`);
        console.log('');
      });
    }

    // Statistiques générales
    console.log('📊 Statistiques de la base :');
    const totalUsers = await prisma.user.count();
    const activeUsers = await prisma.user.count({ where: { isActive: true } });
    
    console.log(`   👥 Total utilisateurs: ${totalUsers}`);
    console.log(`   ✅ Utilisateurs actifs: ${activeUsers}`);
    console.log(`   🔒 Utilisateurs inactifs: ${totalUsers - activeUsers}`);

  } catch (error) {
    console.error('❌ Erreur lors de la vérification :', error.message);
    
    if (error.message.includes('ECONNREFUSED')) {
      console.log('\n🔧 MongoDB n\'est pas accessible !');
      console.log('   - Vérifiez que MongoDB est démarré');
      console.log('   - Vérifiez votre DATABASE_URL dans .env.local');
    } else if (error.message.includes('P2021')) {
      console.log('\n🔧 La base de données n\'existe pas !');
      console.log('   - Exécutez: npx prisma db push');
    }
  } finally {
    await prisma.$disconnect();
  }
}

// Exécuter le script
checkAdmin(); 