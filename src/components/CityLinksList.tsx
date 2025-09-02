import Link from 'next/link';

const cities = [
  'Andernos-les-Bains', 'Arcachon', 'Arès', 'Audenge', 'Bègles', 'Belin-Béliet', 'Biganos', 'Biscarrosse', 'Bordeaux', 'Bouliac', 'Bruges', 'Cadaujac', 'Canéjan', 'Cenon', 'Cestas', 'Eysines', 'Floirac', 'Gradignan', 'Gujan-Mestras', 'La Brède', 'La Teste-de-Buch', 'Lacanau', 'Lanton', 'Le Barp', 'Le Bouscat', 'Le Haillan', 'Le Teich', 'Lège Cap Ferret', 'Léognan', 'Marcheprime', 'Martignas-sur-Jalle', 'Martillac', 'Mérignac', 'Mimizan', 'Mios', 'Parentis', 'Pessac', 'Saint-Aubin-de-Médoc', "Saint-Jean-d'Illac", 'Saint-Loubès', "Saint-Médard-en-Jalles", 'Saint-Selve', 'Salles', 'Sanguinet', 'Saucats', 'Talence', "Villenave-d'Ornon"
];

const CityLinksList = () => {
  return (
    <div className="py-6 sm:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap justify-center items-center gap-1 sm:gap-2">
          {cities.map((city, index) => (
            <span key={city} className="flex items-center">
              <Link
                href={`/villes/${city.toLowerCase().replace(/\s+/g, '-').replace(/[éèê]/g, 'e').replace(/[àâ]/g, 'a').replace(/[ôö]/g, 'o').replace(/[ùûü]/g, 'u').replace(/[ç]/g, 'c').replace(/'/g, '-')}-chauffage-climatisation`}
                className="text-black dark:text-white hover:text-black/80 dark:hover:text-white/80 transition-colors duration-200 whitespace-nowrap text-xs sm:text-sm"
              >
                {city}
              </Link>
              {index < cities.length - 1 && (
                <span className="text-black/60 dark:text-white/60 mx-1 sm:mx-2 text-xs sm:text-sm">•</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CityLinksList;
