import { Snowflake, Flame, Droplets, Wrench } from 'lucide-react';
import Link from 'next/link';
import { SimpleWrapper } from '@/components/ui/SimpleWrapper';

export default function Services() {
  return (
    <section id="services" className="relative py-12 sm:py-16 md:py-20 bg-white dark:bg-black overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre de section */}
        <SimpleWrapper>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 dark:text-white mb-4 px-4">
              Notre expertise
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
              Expertise technique et solutions sur-mesure pour votre confort thermique
            </p>
          </div>
        </SimpleWrapper>

        {/* Cards harmonisées - Responsive optimisé */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto px-4 sm:px-6">
          {/* Climatisation */}
          <SimpleWrapper>
            <Link href="/climatisation" className="group block bg-white dark:bg-black backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-200 dark:border-gray-600/30 hover:border-[#2563EB]/50 dark:hover:border-[#60A5FA] h-64 sm:h-72 lg:h-80 flex flex-col">
            <div className="text-center flex flex-col justify-center h-full">
              {/* Icône service avec pastille uniforme */}
              <div className="bg-[#2563EB]/10 dark:bg-[#2563EB]/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Snowflake className="w-10 h-10 text-[#2563EB] dark:text-[#60A5FA]" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] transition-colors px-2">
                Climatisation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed px-2">
                Systèmes de climatisation haute performance pour un confort optimal. 
                <strong className="text-[#2563EB] dark:text-[#60A5FA]">Réversible</strong> pour chauffer en hiver et refroidir en été.
              </p>
            </div>
            </Link>
          </SimpleWrapper>

          {/* Chauffage */}
          <SimpleWrapper>
            <Link href="/chauffage" className="group block bg-white dark:bg-black backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-200 dark:border-gray-600/30 hover:border-[#FF8C00]/50 dark:hover:border-[#FFA500] h-64 sm:h-72 lg:h-80 flex flex-col">
            <div className="text-center flex flex-col justify-center h-full">
              {/* Icône service avec pastille uniforme */}
              <div className="bg-[#FF8C00]/10 dark:bg-[#FF8C00]/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Flame className="w-10 h-10 text-[#FF8C00] dark:text-[#FFA500]" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 group-hover:text-[#FF8C00] dark:group-hover:text-[#FFA500] transition-colors px-2">
                Chauffage
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed px-2">
                Pompes à chaleur et planchers chauffants pour un <strong className="text-[#FF8C00] dark:text-[#FFA500]">chauffage écologique</strong> et économique toute l&apos;année.
              </p>
            </div>
            </Link>
          </SimpleWrapper>

          {/* Eau Chaude Sanitaire */}
          <SimpleWrapper>
            <Link href="/eau-chaude-sanitaire" className="group block bg-white dark:bg-black backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-200 dark:border-gray-600/30 hover:border-[#FF6B6B]/50 dark:hover:border-[#FF6B6B] h-64 sm:h-72 lg:h-80 flex flex-col">
            <div className="text-center flex flex-col justify-center h-full">
              {/* Icône service avec pastille uniforme */}
              <div className="bg-[#FF6B6B]/10 dark:bg-[#FF6B6B]/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Droplets className="w-10 h-10 text-[#FF6B6B] dark:text-[#FF6B6B]" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 group-hover:text-[#FF6B6B] dark:group-hover:text-[#FF6B6B] transition-colors px-2">
                Eau Chaude Sanitaire
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed px-2">
                Ballons thermodynamiques et cumulus électriques pour une <strong className="text-[#FF6B6B] dark:text-[#FF6B6B]">eau chaude</strong> disponible 24h/24 et économique.
              </p>
            </div>
            </Link>
          </SimpleWrapper>

          {/* Maintenance */}
          <SimpleWrapper>
            <Link href="/maintenance" className="group block bg-white dark:bg-black backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-200 dark:border-gray-600/30 hover:border-[#10B981]/50 dark:hover:border-[#34D399] h-64 sm:h-72 lg:h-80 flex flex-col">
            <div className="text-center flex flex-col justify-center h-full">
              {/* Icône service avec pastille uniforme */}
              <div className="bg-[#10B981]/10 dark:bg-[#10B981]/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Wrench className="w-10 h-10 text-[#10B981] dark:text-[#34D399]" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 group-hover:text-[#10B981] dark:group-hover:text-[#10B981] transition-colors px-2">
                Maintenance
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed px-2">
                Maintenance experte et <strong className="text-[#10B981] dark:text-[#10B981]">garantie décennale</strong>. 
                Engagement sur 10 ans pour la tranquillité de vos équipements.
              </p>
            </div>
            </Link>
          </SimpleWrapper>
        </div>
      </div>
    </section>
  );
}
