'use client';

import Link from 'next/link';
import { MapPin } from 'lucide-react';

// Villes principales pour la navigation
const mainCities = [
  { name: 'Bordeaux', slug: 'bordeaux', postalCode: '33000' },
  { name: 'Arcachon', slug: 'arcachon', postalCode: '33120' },
  { name: 'Mérignac', slug: 'merignac', postalCode: '33700' },
  { name: 'Pessac', slug: 'pessac', postalCode: '33600' },
  { name: 'Talence', slug: 'talence', postalCode: '33400' },
  { name: 'Bègles', slug: 'begles', postalCode: '33130' },
  { name: 'Gradignan', slug: 'gradignan', postalCode: '33170' },
  { name: 'Le Bouscat', slug: 'le-bouscat', postalCode: '33110' },
  { name: 'Cenon', slug: 'cenon', postalCode: '33150' },
  { name: 'Floirac', slug: 'floirac', postalCode: '33270' },
  { name: 'Eysines', slug: 'eysines', postalCode: '33320' },
  { name: 'Bruges', slug: 'bruges', postalCode: '33520' },
  { name: 'Villenave-d\'Ornon', slug: 'villenave-d-ornon', postalCode: '33140' },
  { name: 'Leognan', slug: 'leognan', postalCode: '33850' },
  { name: 'Saint-Médard-en-Jalles', slug: 'saint-medard-en-jalles', postalCode: '33160' },
  { name: 'Saint-Aubin-de-Médoc', slug: 'saint-aubin-de-medoc', postalCode: '33160' },
  { name: 'Saint-Jean-d\'Illac', slug: 'saint-jean-d-illac', postalCode: '33127' },
  { name: 'Saint-Loubes', slug: 'saint-loubes', postalCode: '33450' },
  { name: 'Saint-Selve', slug: 'saint-selve', postalCode: '33650' },
  { name: 'Salles', slug: 'salles', postalCode: '33770' },
  { name: 'Sanguinet', slug: 'sanguinet', postalCode: '40660' },
  { name: 'Saucats', slug: 'saucats', postalCode: '33650' },
  { name: 'Le Barp', slug: 'le-barp', postalCode: '33114' },
  { name: 'Le Haillan', slug: 'le-haillan', postalCode: '33185' },
  { name: 'Le Teich', slug: 'le-teich', postalCode: '33470' },
  { name: 'Lege-Cap-Ferret', slug: 'lege-cap-ferret', postalCode: '33950' },
  { name: 'Gujan-Mestras', slug: 'gujan-mestras', postalCode: '33260' },
  { name: 'La Teste-de-Buch', slug: 'la-teste-de-buch', postalCode: '33260' },
  { name: 'Lacanau', slug: 'lacanau', postalCode: '33680' },
  { name: 'Lanton', slug: 'lanton', postalCode: '33138' },
  { name: 'Andernos-les-Bains', slug: 'andernos-les-bains', postalCode: '33510' },
  { name: 'Ares', slug: 'ares', postalCode: '33640' },
  { name: 'Audenge', slug: 'audenge', postalCode: '33980' },
  { name: 'Belin-Beliet', slug: 'belin-beliet', postalCode: '33830' },
  { name: 'Biganos', slug: 'biganos', postalCode: '33380' },
  { name: 'Biscarrosse', slug: 'biscarrosse', postalCode: '40600' },
  { name: 'Bouliac', slug: 'bouliac', postalCode: '33270' },
  { name: 'Cadaujac', slug: 'cadaujac', postalCode: '33140' },
  { name: 'Canejan', slug: 'canejan', postalCode: '33610' },
  { name: 'Cestas', slug: 'cestas', postalCode: '33610' },
  { name: 'Gradignan', slug: 'gradignan', postalCode: '33170' },
  { name: 'Marcheprime', slug: 'marcheprime', postalCode: '33380' },
  { name: 'Martignas-sur-Jalle', slug: 'martignas-sur-jalle', postalCode: '33127' },
  { name: 'Martillac', slug: 'martillac', postalCode: '33650' },
  { name: 'Mimizan', slug: 'mimizan', postalCode: '40200' },
  { name: 'Mios', slug: 'mios', postalCode: '33380' },
  { name: 'Parentis-en-Born', slug: 'parentis-en-born', postalCode: '40160' }
];

interface CityNavigationProps {
  currentCity?: string;
  showTitle?: boolean;
  maxCities?: number;
}

export default function CityNavigation({ 
  currentCity, 
  showTitle = true, 
  maxCities = 20 
}: CityNavigationProps) {
  // Filtrer la ville actuelle si elle est spécifiée
  const citiesToShow = currentCity 
    ? mainCities.filter(city => city.slug !== currentCity).slice(0, maxCities)
    : mainCities.slice(0, maxCities);

  return (
    <div className="my-8 p-6 bg-gradient-to-r from-blue-50 to-orange-50 rounded-lg border border-blue-100">
      {showTitle && (
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-800">
            Zones d'intervention ClimGO
          </h3>
        </div>
      )}
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {citiesToShow.map((city) => (
          <Link
            key={city.slug}
            href={`/villes/${city.slug}-chauffage-climatisation`}
            className="group p-3 bg-white rounded-md border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
          >
            <div className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
              {city.name}
            </div>
            <div className="text-xs text-gray-500 group-hover:text-blue-500 transition-colors">
              {city.postalCode}
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <Link
          href="/zones-interventions"
          className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          <MapPin className="w-4 h-4" />
          Voir toutes nos zones d'intervention
        </Link>
      </div>
    </div>
  );
}
