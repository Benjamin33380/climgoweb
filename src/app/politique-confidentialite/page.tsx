import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background flex justify-center pt-24 pb-16">
      <div className="max-w-4xl text-black dark:text-white p-4 md:p-8">
        <h1 className="text-3xl md:text-4xl font-medium mb-4 text-gray-900 dark:text-white">
          Politique de Confidentialité
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Dernière mise à jour : 12 mai 2025
        </p>

        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          La présente Politique de Confidentialité décrit la manière dont ClimGO collecte, utilise et protège vos données personnelles lors de votre utilisation du site www.climgo.fr. En accédant à nos services, vous acceptez les pratiques décrites ci-dessous.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-900 dark:text-white">
          1. Données collectées, données personnelles
        </h2>

        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Nous pouvons collecter les informations suivantes :
        </p>

        <ul className="list-disc ml-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Nom et prénom</li>
          <li>Adresse e-mail</li>
          <li>Numéro de téléphone</li>
          <li>Toute information fournie via nos formulaires de contact ou de devis</li>
          <li>Données de navigation (données d&apos;utilisation)</li>
          <li>Adresse IP</li>
          <li>Type d&apos;appareil et de navigateur</li>
          <li>Pages consultées, durée de visite</li>
          <li>Cookies et technologies similaires</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-900 dark:text-white">
          2. Utilisation des données
        </h2>

        <p className="mb-4 text-gray-700 dark:text-gray-300">
          ClimGO utilise vos données pour :
        </p>

        <ul className="list-disc ml-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Vous contacter dans le cadre d&apos;un devis ou d&apos;une prestation</li>
          <li>Améliorer nos services et votre expérience utilisateur</li>
          <li>Vous transmettre des offres commerciales si vous y avez consenti</li>
          <li>Répondre à vos demandes ou questions</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-900 dark:text-white">
          3. Partage des données
        </h2>

        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Nous ne partageons vos données personnelles avec des tiers que dans les cas suivants :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Prestataires techniques hébergeant ou maintenant le site</li>
          <li>Obligations légales ou demandes des autorités compétentes</li>
        </ul>

        <p className="mb-6 text-gray-700 dark:text-gray-300">
          Vos données ne sont ni vendues ni cédées à des fins commerciales sans votre consentement explicite.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-900 dark:text-white">
          4. Cookies
        </h2>

        <p className="mb-4 text-gray-700 dark:text-gray-300">
          ClimGO utilise des cookies pour :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Mémoriser vos préférences</li>
          <li>Mesurer la fréquentation du site via Google Analytics</li>
        </ul>

        <p className="mb-6 text-gray-700 dark:text-gray-300">
          Vous pouvez désactiver les cookies à tout moment via les paramètres de votre navigateur.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-900 dark:text-white">
          5. Durée de conservation
        </h2>

        <p className="mb-6 text-gray-700 dark:text-gray-300">
          Vos données sont conservées pendant une durée maximale de 3 ans à compter du dernier contact, sauf obligations légales contraires.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-900 dark:text-white">
          6. Vos droits
        </h2>

        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Conformément au RGPD, vous disposez des droits suivants :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Accès, rectification ou suppression de vos données</li>
          <li>Opposition ou limitation du traitement</li>
          <li>Portabilité de vos données</li>
        </ul>

        <p className="mb-6 text-gray-700 dark:text-gray-300">
          Vous pouvez exercer vos droits par e-mail à l&apos;adresse suivante : 
          <a href="mailto:contact@climgo.fr" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
            contact@climgo.fr
          </a>
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-900 dark:text-white">
          7. Sécurité
        </h2>

        <p className="mb-6 text-gray-700 dark:text-gray-300">
          ClimGO met en œuvre toutes les mesures techniques raisonnables pour protéger vos données contre la perte, l&apos;accès non autorisé ou l&apos;altération.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-900 dark:text-white">
          8. Modifications
        </h2>

        <p className="mb-8 text-gray-700 dark:text-gray-300">
          ClimGO peut mettre à jour cette politique à tout moment. Toute modification importante vous sera notifiée sur le site.
        </p>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-8">
          <p className="mb-2 text-gray-700 dark:text-gray-300">
            <strong className="text-gray-900 dark:text-white">Société :</strong> ClimGO, fondée en 2025
          </p>
          <p className="mb-2 text-gray-700 dark:text-gray-300">
            <strong className="text-gray-900 dark:text-white">Adresse e-mail :</strong> 
            <a href="mailto:contact@climgo.fr" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
              contact@climgo.fr
            </a>
          </p>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            <strong className="text-gray-900 dark:text-white">Site :</strong> 
            <a href="https://www.climgo.fr" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
              www.climgo.fr
            </a>
          </p>

          <p className="mb-4 text-gray-700 dark:text-gray-300">
            <strong className="text-gray-900 dark:text-white">Documents utiles :</strong>
          </p>
          <ul className="list-disc ml-6 mb-8 text-gray-700 dark:text-gray-300">
            <li>
              <Link href="/mentions-legales" className="text-blue-600 dark:text-blue-400 hover:underline">
                Mentions légales
              </Link>
            </li>
          </ul>

          <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
            ClimGO © 2025. Tous droits réservés.
          </p>
        </div>
      </div>
    </div>
  );
}
