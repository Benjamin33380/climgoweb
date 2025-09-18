import Link from 'next/link';

const cities = [
  'Andernos-les-Bains', 'Arcachon', 'Arès', 'Audenge', 'Bègles', 'Belin-Béliet', 'Biganos', 'Biscarrosse', 'Bordeaux', 'Bouliac', 'Bruges', 'Cadaujac', 'Canéjan', 'Cenon', 'Cestas', 'Eysines', 'Floirac', 'Gradignan', 'Gujan-Mestras', 'La Brède', 'La Teste-de-Buch', 'Lacanau', 'Lanton', 'Le Barp', 'Le Bouscat', 'Le Haillan', 'Le Teich', 'Lège Cap Ferret', 'Léognan', 'Marcheprime', 'Martignas-sur-Jalle', 'Martillac', 'Mérignac', 'Mimizan', 'Mios', 'Parentis', 'Pessac', 'Saint-Aubin-de-Médoc', "Saint-Jean-d'Illac", 'Saint-Loubès', "Saint-Médard-en-Jalles", 'Saint-Selve', 'Salles', 'Sanguinet', 'Saucats', 'Talence', "Villenave-d'Ornon"
];

const CityLinksList = () => {
  return (
    <div className="py-8 sm:py-12 bg-gray-50 dark:bg-background border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white text-center mb-6 sm:mb-8">
          Nos interventions dans toute la Gironde
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
          {cities.map((city, index) => (
            <span key={city} className="flex items-center">
              <Link
                href={`/villes/${city.toLowerCase().replace(/\s+/g, '-').replace(/[éèê]/g, 'e').replace(/[àâ]/g, 'a').replace(/[ôö]/g, 'o').replace(/[ùûü]/g, 'u').replace(/[ç]/g, 'c').replace(/'/g, '-')}-chauffage-climatisation`}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 whitespace-nowrap text-sm sm:text-base font-medium hover:underline"
              >
                {city}
              </Link>
              {index < cities.length - 1 && (
                <span className="text-gray-400 dark:text-gray-600 mx-2 sm:mx-3 text-sm">•</span>
              )}
            </span>
          ))}
        </div>
        <div className="text-center mt-6 sm:mt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            ClimGO intervient sur l'ensemble du Bassin d'Arcachon et de la métropole bordelaise pour tous vos besoins en climatisation, chauffage et eau chaude sanitaire.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CityLinksList;
