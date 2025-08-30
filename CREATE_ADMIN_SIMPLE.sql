-- =====================================================
-- CRÉATION ADMIN SIMPLE - Version sécurisée
-- =====================================================
-- Ce script crée seulement le profil admin dans la table users
-- L'utilisateur doit être créé via l'interface Supabase Auth

-- 1. Créer un utilisateur admin temporaire avec un UUID fixe
-- (Tu devras créer l'utilisateur dans Supabase Auth séparément)

-- Insérer le profil admin (en supposant que l'utilisateur existe dans auth.users)
INSERT INTO users (
  id,
  email,
  username,
  is_admin,
  email_verified,
  created_at,
  updated_at
) 
SELECT 
  au.id,
  'contact@climgo.fr',
  'admin',
  true,
  true,
  NOW(),
  NOW()
FROM auth.users au 
WHERE au.email = 'contact@climgo.fr'
AND NOT EXISTS (
  SELECT 1 FROM users u WHERE u.email = 'contact@climgo.fr'
);

-- Si aucun utilisateur n'a été inséré, c'est que l'utilisateur n'existe pas dans auth.users
-- Afficher un message d'aide
DO $$
DECLARE
  user_count INTEGER;
BEGIN
  SELECT COUNT(*) INTO user_count FROM users WHERE email = 'contact@climgo.fr' AND is_admin = true;
  
  IF user_count = 0 THEN
    RAISE NOTICE '❌ UTILISATEUR NON TROUVÉ !';
    RAISE NOTICE '📋 ÉTAPES À SUIVRE :';
    RAISE NOTICE '1. Va dans Authentication > Users dans Supabase';
    RAISE NOTICE '2. Clique sur "Add user"';
    RAISE NOTICE '3. Email: contact@climgo.fr';
    RAISE NOTICE '4. Password: benclimgo06';
    RAISE NOTICE '5. Confirme l''email automatiquement';
    RAISE NOTICE '6. Relance ce script SQL';
  ELSE
    RAISE NOTICE '✅ Admin créé avec succès !';
    RAISE NOTICE '📧 Email: contact@climgo.fr';
    RAISE NOTICE '🔑 Mot de passe: benclimgo06';
  END IF;
END $$;

-- Vérification finale
SELECT 
  u.id,
  u.email,
  u.username,
  u.is_admin,
  u.email_verified,
  'Utilisateur admin prêt !' as status
FROM users u
WHERE u.email = 'contact@climgo.fr' AND u.is_admin = true;
