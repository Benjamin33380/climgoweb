const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

// Configuration Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://dummy.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'dummy-key';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function checkAdmin() {
  try {
    console.log('🔍 Vérification de l\'utilisateur admin...\n');

    // 1. Vérifier dans Supabase Auth
    console.log('📧 Recherche dans Supabase Auth...');
    const { data: authUsers, error: authError } = await supabase.auth.admin.listUsers();
    
    if (authError) {
      console.error('❌ Erreur Auth:', authError.message);
      console.log('\n🔧 Vérifiez vos variables d\'environnement Supabase !');
      return;
    }

    const adminAuthUser = authUsers.users.find(u => u.email === 'contact@climgo.fr');
    
    if (adminAuthUser) {
      console.log('✅ Utilisateur trouvé dans Auth !');
      console.log(`   ID: ${adminAuthUser.id}`);
      console.log(`   Email: ${adminAuthUser.email}`);
      console.log(`   Confirmé: ${adminAuthUser.email_confirmed_at ? 'Oui' : 'Non'}`);
      console.log(`   Créé: ${new Date(adminAuthUser.created_at).toLocaleString('fr-FR')}`);
    } else {
      console.log('❌ Utilisateur NOT trouvé dans Auth');
    }

    // 2. Vérifier dans la table users
    console.log('\n👤 Recherche dans la table users...');
    const { data: profileUsers, error: profileError } = await supabase
      .from('users')
      .select('*')
      .eq('email', 'contact@climgo.fr');

    if (profileError) {
      console.error('❌ Erreur table users:', profileError.message);
    } else if (profileUsers && profileUsers.length > 0) {
      const adminProfile = profileUsers[0];
      console.log('✅ Profil trouvé dans la table users !');
      console.log(`   ID: ${adminProfile.id}`);
      console.log(`   Email: ${adminProfile.email}`);
      console.log(`   Username: ${adminProfile.username || 'Non défini'}`);
      console.log(`   Is Admin: ${adminProfile.is_admin ? 'OUI' : 'NON'}`);
      console.log(`   Email vérifié: ${adminProfile.email_verified ? 'Oui' : 'Non'}`);
    } else {
      console.log('❌ Profil NOT trouvé dans la table users');
    }

    // 3. Résumé et recommandations
    console.log('\n📋 RÉSUMÉ:');
    
    if (adminAuthUser && profileUsers && profileUsers.length > 0) {
      const adminProfile = profileUsers[0];
      if (adminProfile.is_admin) {
        console.log('🎉 TOUT EST CONFIGURÉ ! Vous pouvez vous connecter avec:');
        console.log('   📧 Email: contact@climgo.fr');
        console.log('   🔑 Mot de passe: benclimgo06');
        console.log('   🌐 URL: http://localhost:3000/admin/login');
      } else {
        console.log('⚠️  L\'utilisateur existe mais n\'est PAS admin !');
        console.log('🔧 Solution: Mettre is_admin = true dans la table users');
      }
    } else if (adminAuthUser && (!profileUsers || profileUsers.length === 0)) {
      console.log('⚠️  Utilisateur Auth existe mais pas de profil !');
      console.log('🔧 Solution: Créer le profil dans la table users');
    } else if (!adminAuthUser) {
      console.log('❌ Aucun utilisateur admin trouvé !');
      console.log('🔧 Solution: Créer l\'utilisateur dans Supabase Auth + table users');
    }

  } catch (error) {
    console.error('❌ Erreur lors de la vérification:', error.message);
    console.log('\n🔧 Vérifiez que vos variables d\'environnement Supabase sont correctes :');
    console.log('- NEXT_PUBLIC_SUPABASE_URL');
    console.log('- SUPABASE_SERVICE_ROLE_KEY');
  }
}

checkAdmin();
