const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function createAdmin() {
  try {
    console.log('🚀 Création du compte admin...')
    
    // Vérifier si l'admin existe déjà
    const existingAdmin = await prisma.user.findUnique({
      where: { email: 'admin@climgo.fr' }
    })
    
    if (existingAdmin) {
      console.log('✅ Le compte admin existe déjà!')
      console.log('📧 Email: admin@climgo.fr')
      console.log('🔑 Mot de passe: climgo2025')
      return
    }
    
    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash('climgo2025', 12)
    
    // Créer l'admin
    const admin = await prisma.user.create({
      data: {
        name: 'Admin ClimGO',
        email: 'admin@climgo.fr',
        password: hashedPassword,
        role: 'ADMIN',
        verified: true
      }
    })
    
    console.log('✅ Compte admin créé avec succès!')
    console.log('📧 Email: admin@climgo.fr')
    console.log('🔑 Mot de passe: climgo2025')
    console.log('👤 ID:', admin.id)
    
  } catch (error) {
    console.error('❌ Erreur lors de la création:', error.message)
  } finally {
    await prisma.$disconnect()
  }
}

createAdmin()

