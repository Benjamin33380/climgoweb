require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

// Configuration Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Variables d\'environnement Supabase manquantes !');
  console.log('Vérifiez que vous avez bien configuré :');
  console.log('- NEXT_PUBLIC_SUPABASE_URL');
  console.log('- SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function createAdmin() {
  try {
    console.log('🔧 Création de l\'utilisateur admin...');

    // 1. Créer l'utilisateur dans Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email: 'contact@climgo.fr',
      password: 'benclimgo06',
      email_confirm: true
    });

    if (authError) {
      if (authError.message.includes('already registered')) {
        console.log('✅ L\'utilisateur admin existe déjà dans Auth !');
        
        // Récupérer l'utilisateur existant
        const { data: existingUser } = await supabase.auth.admin.listUsers();
        const adminUser = existingUser.users.find(u => u.email === 'contact@climgo.fr');
        
        if (adminUser) {
          // Mettre à jour le profil pour s'assurer qu'il est admin
          const { error: updateError } = await supabase
            .from('users')
            .upsert({
              id: adminUser.id,
              email: adminUser.email,
              username: 'admin',
              is_admin: true,
              email_verified: true,
              created_at: new Date().toISOString()
            });

          if (updateError) {
            console.error('❌ Erreur lors de la mise à jour du profil:', updateError);
          } else {
            console.log('✅ Profil admin mis à jour avec succès !');
          }
        }
      } else {
        throw authError;
      }
    } else {
      console.log('✅ Utilisateur créé dans Supabase Auth !');

      // 2. Créer le profil dans la table users
      const { error: profileError } = await supabase
        .from('users')
        .insert({
          id: authData.user.id,
          email: authData.user.email,
          username: 'admin',
          is_admin: true,
          email_verified: true,
          created_at: new Date().toISOString()
        });

      if (profileError) {
        console.error('❌ Erreur lors de la création du profil:', profileError);
      } else {
        console.log('✅ Profil admin créé avec succès !');
      }
    }

    console.log('\n🎉 CONFIGURATION TERMINÉE !');
    console.log('📧 Email: contact@climgo.fr');
    console.log('🔑 Mot de passe: benclimgo06');
    console.log('🌐 Connexion: http://localhost:3000/admin/login');
    console.log('\n💡 Vous pouvez maintenant vous connecter au panneau admin !');

  } catch (error) {
    console.error('❌ Erreur lors de la création de l\'administrateur:', error);
    console.log('\n🔧 Vérifiez que vos variables d\'environnement Supabase sont correctes :');
    console.log('- NEXT_PUBLIC_SUPABASE_URL');
    console.log('- SUPABASE_SERVICE_ROLE_KEY');
  }
}

createAdmin();
