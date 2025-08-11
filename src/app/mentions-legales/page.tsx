export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex justify-center pt-24 pb-16">
      <div className="max-w-4xl text-black dark:text-white p-4 md:p-8">
        <h1 className="text-3xl md:text-4xl font-medium mb-8 text-gray-900 dark:text-white">
          Mentions légales
        </h1>

        <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-900 dark:text-white">
          1. Informations sur l&apos;entreprise
        </h2>
        <ul className="list-none space-y-2 mb-6 text-gray-700 dark:text-gray-300">
          <li><strong className="text-gray-900 dark:text-white">Nom de la société :</strong> ClimGO</li>
          <li><strong className="text-gray-900 dark:text-white">Forme juridique :</strong> SASU</li>
          <li><strong className="text-gray-900 dark:text-white">Capital social :</strong> 3 000 euros</li>
          <li><strong className="text-gray-900 dark:text-white">Siège social :</strong> 28 rue de Cantelaude, 33380 Marcheprime, France</li>
          <li><strong className="text-gray-900 dark:text-white">SIREN :</strong> 943699066</li>
          <li><strong className="text-gray-900 dark:text-white">TVA intracommunautaire :</strong> FR17943699066</li>
          <li><strong className="text-gray-900 dark:text-white">Responsable de la publication :</strong> Benjamin Cardoso (Président)</li>
          <li><strong className="text-gray-900 dark:text-white">Adresse email :</strong> 
            <a href="mailto:contact@climgo.fr" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
              contact@climgo.fr
            </a>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-900 dark:text-white">
          2. Hébergement
        </h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Le site www.climgo.fr est hébergé par la société :
        </p>
        <ul className="list-none space-y-2 mb-6 text-gray-700 dark:text-gray-300">
          <li><strong className="text-gray-900 dark:text-white">Vercel Inc.</strong></li>
          <li><strong className="text-gray-900 dark:text-white">Siège social :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
          <li><strong className="text-gray-900 dark:text-white">Site web :</strong> 
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
              https://vercel.com
            </a>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-900 dark:text-white">
          3. Propriété intellectuelle
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          L&apos;ensemble du contenu du site www.climgo.fr (textes, images, graphismes, logos, icônes, etc.) est la propriété exclusive de la société ClimGO, sauf mentions contraires. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de ClimGO.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-900 dark:text-white">
          4. Responsabilité
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          ClimGO s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, la société ne saurait être tenue responsable des erreurs, omissions ou d&apos;un dysfonctionnement technique.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-900 dark:text-white">
          5. Données personnelles
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          Pour consulter notre politique de traitement des données personnelles et cookies, merci de vous référer à notre page 
          <a href="/politique-confidentialite" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
            &quot;Politique de confidentialité&quot;
          </a>.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-900 dark:text-white">
          6. Droit applicable et juridiction compétente
        </h2>
        <p className="mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">
          Les présentes mentions légales sont régies par le droit français. En cas de litige, et après tentative de recherche d&apos;une solution amiable, les tribunaux français seront seuls compétents.
        </p>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-8">
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
            ClimGO © 2025. Tous droits réservés.
          </p>
        </div>
      </div>
    </div>
  );
}
