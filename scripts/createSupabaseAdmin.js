const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

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

async function createSupabaseAdmin() {
  try {
    console.log('🔧 Création de l\'utilisateur admin dans Supabase Auth...\n');

    // 1. Vérifier si l'utilisateur existe déjà
    const { data: existingUsers, error: listError } = await supabase.auth.admin.listUsers();
    
    if (listError) {
      console.error('❌ Erreur lors de la vérification:', listError.message);
      return;
    }

    const existingUser = existingUsers.users.find(u => u.email === 'contact@climgo.fr');
    
    if (existingUser) {
      console.log('✅ L\'utilisateur existe déjà dans Supabase Auth !');
      console.log(`   ID: ${existingUser.id}`);
      console.log(`   Email: ${existingUser.email}`);
      console.log(`   Confirmé: ${existingUser.email_confirmed_at ? 'Oui' : 'Non'}`);
      return;
    }

    // 2. Créer l'utilisateur dans Supabase Auth
    console.log('📧 Création de l\'utilisateur...');
    const { data: authUser, error: authError } = await supabase.auth.admin.createUser({
      email: 'contact@climgo.fr',
      password: 'benclimgo06',
      email_confirm: true, // Confirmer automatiquement l'email
      user_metadata: {
        name: 'Admin ClimGO',
        username: 'benclimgo'
      }
    });

    if (authError) {
      console.error('❌ Erreur lors de la création:', authError.message);
      return;
    }

    console.log('✅ Utilisateur créé avec succès dans Supabase Auth !');
    console.log(`   ID: ${authUser.user.id}`);
    console.log(`   Email: ${authUser.user.email}`);

    // 3. Vérifier/Mettre à jour le profil dans la table users
    console.log('\n👤 Vérification du profil dans la table users...');
    
    const { data: existingProfile, error: profileCheckError } = await supabase
      .from('users')
      .select('*')
      .eq('email', 'contact@climgo.fr')
      .single();

    if (profileCheckError && profileCheckError.code !== 'PGRST116') {
      console.error('❌ Erreur lors de la vérification du profil:', profileCheckError.message);
      return;
    }

    if (existingProfile) {
      // Mettre à jour l'ID auth si nécessaire
      if (existingProfile.id !== authUser.user.id) {
        console.log('🔄 Mise à jour de l\'ID auth dans le profil...');
        const { error: updateError } = await supabase
          .from('users')
          .update({ id: authUser.user.id })
          .eq('email', 'contact@climgo.fr');

        if (updateError) {
          console.error('❌ Erreur lors de la mise à jour:', updateError.message);
        } else {
          console.log('✅ Profil mis à jour !');
        }
      } else {
        console.log('✅ Profil déjà synchronisé !');
      }
    } else {
      // Créer le profil
      console.log('📝 Création du profil utilisateur...');
      const { error: insertError } = await supabase
        .from('users')
        .insert({
          id: authUser.user.id,
          email: 'contact@climgo.fr',
          username: 'benclimgo',
          is_admin: true,
          email_verified: true,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        });

      if (insertError) {
        console.error('❌ Erreur lors de la création du profil:', insertError.message);
      } else {
        console.log('✅ Profil créé !');
      }
    }

    console.log('\n🎉 CONFIGURATION TERMINÉE !');
    console.log('📧 Email: contact@climgo.fr');
    console.log('🔑 Mot de passe: benclimgo06');
    console.log('🌐 URL: http://localhost:3000/admin/login');
    console.log('\n✨ Vous pouvez maintenant vous connecter à l\'interface admin !');

  } catch (error) {
    console.error('❌ Erreur inattendue:', error.message);
  }
}

createSupabaseAdmin();
