import { TbAward, TbUsers, TbShieldCheck, TbLeaf } from "react-icons/tb";
import { SimpleWrapper } from '@/components/ui/SimpleWrapper';

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 bg-white dark:bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <SimpleWrapper>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-4">
              Pourquoi choisir ClimGO ?
            </h2>
            <div className="w-24 h-1 bg-black dark:bg-white mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Votre <strong className="text-gray-900 dark:text-white">confort</strong> mérite une <strong className="text-gray-900 dark:text-white">attention particulière</strong>, nous avons développé une <strong className="text-gray-900 dark:text-white">approche élégante</strong> et <strong className="text-gray-900 dark:text-white">sur-mesure</strong> pour chacun de nos clients. Choisir <strong className="text-gray-900 dark:text-white">ClimGO</strong>, c&apos;est opter pour :
            </p>
          </div>
        </SimpleWrapper>

        {/* Cards harmonisées avec le design existant */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12 sm:mb-16">
          {/* Expertise */}
          <SimpleWrapper>
            <div className="group bg-white/80 dark:bg-[#2a2a2a]/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-600/30 hover:border-[#2563EB]/50 dark:hover:border-[#60A5FA] h-[420px] flex flex-col">
              <div className="text-center flex flex-col h-full">
                <div className="bg-[#2563EB]/10 dark:bg-[#2563EB]/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TbAward className="w-12 h-12 text-[#2563EB] dark:text-[#60A5FA]" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] transition-colors">
                  Expertise
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 sm:mb-6 flex-grow">
                  Chaque projet est unique. <strong className="text-[#2563EB] dark:text-[#60A5FA]">Notre savoir-faire technique</strong> et <strong className="text-[#2563EB] dark:text-[#60A5FA]">notre maîtrise des dernières innovations</strong> garantissent une <strong className="text-[#2563EB] dark:text-[#60A5FA]">qualité irréprochable</strong>.
                </p>
              </div>
            </div>
          </SimpleWrapper>

          {/* Accompagnement Personnalisé */}
          <SimpleWrapper>
            <div className="group bg-white/80 dark:bg-[#2a2a2a]/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-600/30 hover:border-[#f97316]/50 dark:hover:border-[#fb923c] h-[420px] flex flex-col">
              <div className="text-center flex flex-col h-full">
                <div className="bg-[#f97316]/10 dark:bg-[#f97316]/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TbUsers className="w-12 h-12 text-[#f97316] dark:text-[#fb923c]" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 group-hover:text-[#f97316] dark:group-hover:text-[#fb923c] transition-colors">
                  Accompagnement
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 sm:mb-6 flex-grow">
                  Nous <strong className="text-[#f97316] dark:text-[#fb923c]">prenons le temps de vous écouter</strong> pour comprendre précisément vos besoins. <strong className="text-[#f97316] dark:text-[#fb923c]">Chaque installation est conçue sur mesure</strong>.
                </p>
              </div>
            </div>
          </SimpleWrapper>

          {/* Discrétion et Confiance */}
          <SimpleWrapper>
            <div className="group bg-white/80 dark:bg-[#2a2a2a]/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-600/30 hover:border-[#8B5CF6]/50 dark:hover:border-[#A78BFA] h-[420px] flex flex-col">
              <div className="text-center flex flex-col h-full">
                <div className="bg-[#8B5CF6]/10 dark:bg-[#8B5CF6]/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TbShieldCheck className="w-12 h-12 text-[#8B5CF6] dark:text-[#A78BFA]" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 group-hover:text-[#8B5CF6] dark:group-hover:text-[#A78BFA] transition-colors">
                  Discrétion
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 sm:mb-6 flex-grow">
                  Votre intimité est précieuse. <strong className="text-[#8B5CF6] dark:text-[#A78BFA]">ClimGO s&apos;engage</strong> à intervenir dans le <strong className="text-[#8B5CF6] dark:text-[#A78BFA]">plus grand respect de votre vie privée</strong>.
                </p>
              </div>
            </div>
          </SimpleWrapper>

          {/* Engagement Durable */}
          <SimpleWrapper>
            <div className="group bg-white/80 dark:bg-[#2a2a2a]/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-600/30 hover:border-[#059669]/50 dark:hover:border-[#10B981] h-[420px] flex flex-col">
              <div className="text-center flex flex-col h-full">
                <div className="bg-[#059669]/10 dark:bg-[#059669]/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TbLeaf className="w-12 h-12 text-[#059669] dark:text-[#10B981]" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 group-hover:text-[#059669] dark:group-hover:text-[#10B981] transition-colors">
                  Engagement
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 sm:mb-6 flex-grow">
                  Nous privilégions des <strong className="text-[#059669] dark:text-[#10B981]">solutions à haute performance énergétique</strong>, <strong className="text-[#059669] dark:text-[#10B981]">respectueuses de l&apos;environnement</strong> et <strong className="text-[#059669] dark:text-[#10B981]">pensées pour durer</strong>.
                </p>
              </div>
            </div>
          </SimpleWrapper>
        </div>
      </div>
    </section>
  );
}
