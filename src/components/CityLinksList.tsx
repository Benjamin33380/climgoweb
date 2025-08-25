import Link from 'next/link';

const cities = [
  'Andernos-les-Bains', 'Arcachon', 'Arès', 'Audenge', 'Bègles', 'Belin-Béliet', 'Biganos', 'Biscarrosse', 'Bordeaux', 'Bouliac', 'Bruges', 'Cadaujac', 'Canéjan', 'Cenon', 'Cestas', 'Eysines', 'Floirac', 'Gradignan', 'Gujan-Mestras', 'La Brède', 'La Teste-de-Buch', 'Lacanau', 'Lanton', 'Le Barp', 'Le Bouscat', 'Le Haillan', 'Le Teich', 'Lège Cap Ferret', 'Léognan', 'Marcheprime', 'Martignas-sur-Jalle', 'Martillac', 'Mérignac', 'Mimizan', 'Mios', 'Parentis-en-Born', 'Pessac', 'Saint-Aubin-de-Médoc', "Saint-Jean-d'Illac", 'Saint-Loubès', "Saint-Médard-en-Jalles", 'Saint-Selve', 'Salles', 'Sanguinet', 'Saucats', 'Talence', "Villenave-d'Ornon"
];

const CityLinksList = () => {
  return (
    <div className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-2">
          {cities.map((city, index) => (
            <span key={city} className="flex items-center">
              <Link
                href={`/villes/${city.toLowerCase().replace(/\s+/g, '-').replace(/[éèê]/g, 'e').replace(/[àâ]/g, 'a').replace(/[ôö]/g, 'o').replace(/[ùûü]/g, 'u').replace(/[ç]/g, 'c')}-chauffage-climatisation`}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200 whitespace-nowrap"
              >
                {city}
              </Link>
              {index < cities.length - 1 && (
                <span className="text-gray-400 dark:text-gray-600 mx-2">•</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CityLinksList;
