import { TbSnowflake, TbFlame, TbDroplet, TbTools } from 'react-icons/tb';
import Link from 'next/link';
import { SimpleWrapper } from '@/components/ui/SimpleWrapper';

export default function Services() {
  return (
    <section className="relative py-20 bg-white dark:bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Titre de section */}
        <SimpleWrapper>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-4">
              Notre Expertise
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Expertise technique et solutions sur-mesure pour votre confort thermique
            </p>
          </div>
        </SimpleWrapper>

        {/* Cards harmonisées */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Climatisation */}
          <SimpleWrapper>
            <Link href="/climatisation" className="group block bg-white dark:bg-black backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-600/30 hover:border-[#2563EB]/50 dark:hover:border-[#60A5FA]">
            <div className="text-center">
              <div className="bg-[#2563EB]/10 dark:bg-[#2563EB]/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TbSnowflake className="w-12 h-12 text-[#2563EB] dark:text-[#60A5FA]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] transition-colors">
                Climatisation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Systèmes de climatisation haute performance pour un confort optimal. 
                <strong className="text-[#2563EB] dark:text-[#60A5FA]">Réversible</strong> pour chauffer en hiver et refroidir en été.
              </p>
            </div>
            </Link>
          </SimpleWrapper>

          {/* Chauffage */}
          <SimpleWrapper>
            <Link href="/chauffage" className="group block bg-white dark:bg-black backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-600/30 hover:border-[#DC2626]/50 dark:hover:border-[#F87171]">
            <div className="text-center">
              <div className="bg-[#DC2626]/10 dark:bg-[#DC2626]/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TbFlame className="w-12 h-12 text-[#DC2626] dark:text-[#F87171]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-[#DC2626] dark:group-hover:text-[#F87171] transition-colors">
                Chauffage
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Pompes à chaleur et planchers chauffants pour un <strong className="text-[#DC2626] dark:text-[#F87171]">chauffage écologique</strong> et économique toute l&apos;année.
              </p>
            </div>
            </Link>
          </SimpleWrapper>

          {/* Eau Chaude Sanitaire */}
          <SimpleWrapper>
            <Link href="/eau-chaude-sanitaire" className="group block bg-white dark:bg-black backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-600/30 hover:border-[#0EA5E9]/50 dark:hover:border-[#38BDF8]">
            <div className="text-center">
              <div className="bg-[#0EA5E9]/10 dark:bg-[#0EA5E9]/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TbDroplet className="w-12 h-12 text-[#0EA5E9] dark:text-[#38BDF8]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-[#0EA5E9] dark:group-hover:text-[#38BDF8] transition-colors">
                Eau Chaude Sanitaire
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Ballons thermodynamiques et cumulus électriques pour une <strong className="text-[#0EA5E9] dark:text-[#38BDF8]">eau chaude</strong> disponible 24h/24 et économique.
              </p>
            </div>
            </Link>
          </SimpleWrapper>

          {/* Maintenance */}
          <SimpleWrapper>
            <Link href="/maintenance" className="group block bg-white dark:bg-black backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-600/30 hover:border-[#10B981]/50 dark:hover:border-[#34D399]">
            <div className="text-center">
              <div className="bg-[#10B981]/10 dark:bg-[#10B981]/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TbTools className="w-12 h-12 text-[#10B981] dark:text-[#34D399]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-[#10B981] dark:group-hover:text-[#34D399] transition-colors">
                Maintenance
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Maintenance experte et <strong className="text-[#10B981] dark:text-[#34D399]">garantie décennale</strong>. 
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
