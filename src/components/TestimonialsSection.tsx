'use client';

import { SimpleWrapper } from '@/components/ui/SimpleWrapper';

export default function TestimonialsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <SimpleWrapper>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 dark:text-white mb-4 px-4">
              Témoignages clients
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <span className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
                5.0
              </span>
              <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                (11 témoignages)
              </span>
            </div>
            <div className="w-20 sm:w-24 h-1 bg-black dark:bg-white mx-auto"></div>
          </div>
        </SimpleWrapper>

        {/* Carrousel horizontal infini avec animation CSS */}
        <div className="w-full overflow-hidden relative">
          {/* Gradient de flou gauche */}
          <div className="absolute top-0 left-0 bottom-0 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-gray-50 dark:from-background to-transparent z-10 pointer-events-none" />
          
          {/* Gradient de flou droit */}
          <div className="absolute top-0 right-0 bottom-0 w-12 sm:w-16 md:w-20 bg-gradient-to-l from-gray-50 dark:from-background to-transparent z-10 pointer-events-none" />
          
          <div 
            className="flex animate-scroll hover:animate-pause"
            style={{
              width: `${(6 * 2) * 320}px`,
              animationDuration: `36s`
            }}
          >
            {/* Première série d'avis */}
            {/* Cecilia Arago - Pages Jaunes */}
            <div className="flex-shrink-0 w-[300px] sm:w-[360px] mx-1 sm:mx-2">
              <div className="bg-white dark:bg-card backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 min-h-[320px] sm:min-h-[380px] flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white font-semibold text-base sm:text-lg border-2 border-gray-200 dark:border-gray-500">
                    C
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                      Cecilia Arago
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Pages Jaunes</div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1 overflow-hidden line-clamp-6">
                  <span className="text-gray-400">"</span>
                  J'ai eu une panne de climatisation en pleine chaleur d'été, ClimGO est intervenu rapidement. Le technicien a diagnostiqué la panne et a réparé la clim sur place. Service sérieux, ponctuel et professionnel. Ma clim fonctionne à nouveau parfaitement.
                  <span className="text-gray-400">"</span>
                </p>
                
                <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2 sm:pt-3">
                  <span className="font-medium">Août 2025</span>
                  <a href="/climatisation" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">Climatisation</a>
                </div>
              </div>
            </div>

            {/* Gauthier Nicolas - Pages Jaunes */}
            <div className="flex-shrink-0 w-[300px] sm:w-[360px] mx-1 sm:mx-2">
              <div className="bg-white dark:bg-card backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 min-h-[320px] sm:min-h-[380px] flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white font-semibold text-base sm:text-lg border-2 border-gray-200 dark:border-gray-500">
                    G
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                      Gauthier Nicolas
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Pages Jaunes</div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1 overflow-hidden line-clamp-6">
                  <span className="text-gray-400">"</span>
                  Un vrai pro sur Mios, qui trouve la panne là où d'autres changent tout. Après plusieurs devis sur Biganos où on me conseillait de remplacer entièrement mon système de climatisation, Benjamin a pris le temps de diagnostiquer précisément la panne. Résultat : une simple fuite et une recharge de gaz ont suffi. Travail propre, honnête, rapide et efficace.
                  <span className="text-gray-400">"</span>
                </p>
                
                <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2 sm:pt-3">
                  <span className="font-medium">Juillet 2025</span>
                  <a href="/chauffage" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">PAC</a>
                </div>
              </div>
            </div>

            {/* Yoan Demondion - Google */}
            <div className="flex-shrink-0 w-[300px] sm:w-[360px] mx-1 sm:mx-2">
              <div className="bg-white dark:bg-card backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 min-h-[320px] sm:min-h-[380px] flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white font-semibold text-base sm:text-lg border-2 border-gray-200 dark:border-gray-500">
                    Y
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                      Yoan Demondion
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Google • Local Guide</div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1 overflow-hidden line-clamp-6">
                  <span className="text-gray-400">"</span>
                  Très satisfait de l'intervention pour mon système gainable. Le travail été propre, soigné et réalisé avec beaucoup de professionnalisme. L'installation est discrète et parfaitement réalisée. Il a mis le système en route en mode froid sans aucun souci. Tout fonctionne à merveille. Je recommande sans hésitation pour son sérieux et la qualité de son travail.
                  <span className="text-gray-400">"</span>
                </p>
                
                <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2 sm:pt-3">
                  <span className="font-medium">Il y a 2 mois</span>
                  <a href="/climatisation" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">Gainable</a>
                </div>
              </div>
            </div>

            {/* Paul Challat - Google */}
            <div className="flex-shrink-0 w-[300px] sm:w-[360px] mx-1 sm:mx-2">
              <div className="bg-white dark:bg-card backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 min-h-[320px] sm:min-h-[380px] flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white font-semibold text-base sm:text-lg border-2 border-gray-200 dark:border-gray-500">
                    P
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                      Paul Challat
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Google</div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1 overflow-hidden line-clamp-6">
                  <span className="text-gray-400">"</span>
                  Au Top ! Très bonne relation client. Personnel qui connaît ce qu'il fait et qui est de très bons conseils :)
                  <span className="text-gray-400">"</span>
                </p>
                
                <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2 sm:pt-3">
                  <span className="font-medium">Il y a 2 mois</span>
                  <a href="/blog" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">Conseil</a>
                </div>
              </div>
            </div>

            {/* Lilou Auvray - Google */}
            <div className="flex-shrink-0 w-[300px] sm:w-[360px] mx-1 sm:mx-2">
              <div className="bg-white dark:bg-card backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 min-h-[320px] sm:min-h-[380px] flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white font-semibold text-base sm:text-lg border-2 border-gray-200 dark:border-gray-500">
                    L
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                      Lilou Auvray
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Google • Local Guide</div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1 overflow-hidden line-clamp-6">
                  <span className="text-gray-400">"</span>
                  Travail soigné et rapide, le résultat est impeccable. Je recommande !
                  <span className="text-gray-400">"</span>
                </p>
                
                <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2 sm:pt-3">
                  <span className="font-medium">Il y a 2 mois</span>
                  <a href="/pompe-a-chaleur" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">Installation</a>
                </div>
              </div>
            </div>

            {/* Jérôme Bernard - Google */}
            <div className="flex-shrink-0 w-[300px] sm:w-[360px] mx-1 sm:mx-2">
              <div className="bg-white dark:bg-card backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 min-h-[320px] sm:min-h-[380px] flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white font-semibold text-base sm:text-lg border-2 border-gray-200 dark:border-gray-500">
                    J
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                      Jérôme Bernard
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Google</div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1 overflow-hidden line-clamp-6">
                  <span className="text-gray-400">"</span>
                  Jeune entrepreneur avec des qualités d'écoutes, de conseils et un professionnalisme à la hauteur de mes attentes. Pose d'un groupe Clim extérieur avec deux unités intérieures sur une vieilles bâtisse en pierre, sur le nord Gironde. Je recommande.
                  <span className="text-gray-400">"</span>
                </p>
                
                <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2 sm:pt-3">
                  <span className="font-medium">Il y a 2 mois</span>
                  <a href="/climatisation" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">Climatisation</a>
                </div>
              </div>
            </div>

            {/* Manuela Nunes - Google */}
            <div className="flex-shrink-0 w-[300px] sm:w-[360px] mx-1 sm:mx-2">
              <div className="bg-white dark:bg-card backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 min-h-[320px] sm:min-h-[380px] flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white font-semibold text-base sm:text-lg border-2 border-gray-200 dark:border-gray-500">
                    M
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                      Manuela Nunes
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Google</div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1 overflow-hidden line-clamp-6">
                  <span className="text-gray-400">"</span>
                  Installation d'une clim Daikin au top à Salles. Après avoir comparé plusieurs devis, j'ai choisi Benjamin de ClimGO pour l'installation d'une climatisation monosplit Daikin dans mon salon à Salles, et je ne regrette absolument pas mon choix ! Professionnalisme, ponctualité, conseils avisés et travail soigné : tout y est.
                  <span className="text-gray-400">"</span>
                </p>
                
                <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2 sm:pt-3">
                  <span className="font-medium">Il y a 2 mois</span>
                  <a href="/climatisation" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">Climatisation</a>
                </div>
              </div>
            </div>

            {/* Philippe Rivain - Google */}
            <div className="flex-shrink-0 w-[300px] sm:w-[360px] mx-1 sm:mx-2">
              <div className="bg-white dark:bg-card backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 min-h-[320px] sm:min-h-[380px] flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white font-semibold text-base sm:text-lg border-2 border-gray-200 dark:border-gray-500">
                    P
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                      Philippe Rivain
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Google</div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1 overflow-hidden line-clamp-6">
                  <span className="text-gray-400">"</span>
                  Intervention rapide et efficace sur un changement de carte électronique sur la commune de LANTON.
                  <span className="text-gray-400">"</span>
                </p>
                
                <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2 sm:pt-3">
                  <span className="font-medium">Il y a 2 mois</span>
                  <a href="/maintenance" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">Dépannage</a>
                </div>
              </div>
            </div>

            {/* Duplication pour l'effet infini */}
            {/* Cecilia Arago - Pages Jaunes */}
            <div className="flex-shrink-0 w-[300px] sm:w-[360px] mx-1 sm:mx-2">
              <div className="bg-white dark:bg-card backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 min-h-[320px] sm:min-h-[380px] flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white font-semibold text-base sm:text-lg border-2 border-gray-200 dark:border-gray-500">
                    C
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                      Cecilia Arago
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Pages Jaunes</div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1 overflow-hidden line-clamp-6">
                  <span className="text-gray-400">"</span>
                  J'ai eu une panne de climatisation en pleine chaleur d'été, ClimGO est intervenu rapidement. Le technicien a diagnostiqué la panne et a réparé la clim sur place. Service sérieux, ponctuel et professionnel. Ma clim fonctionne à nouveau parfaitement.
                  <span className="text-gray-400">"</span>
                </p>
                
                <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2 sm:pt-3">
                  <span className="font-medium">Août 2025</span>
                  <a href="/climatisation" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">Climatisation</a>
                </div>
              </div>
            </div>

            {/* Gauthier Nicolas - Pages Jaunes */}
            <div className="flex-shrink-0 w-[300px] sm:w-[360px] mx-1 sm:mx-2">
              <div className="bg-white dark:bg-card backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 min-h-[320px] sm:min-h-[380px] flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white font-semibold text-base sm:text-lg border-2 border-gray-200 dark:border-gray-500">
                    G
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                      Gauthier Nicolas
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Pages Jaunes</div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1 overflow-hidden line-clamp-6">
                  <span className="text-gray-400">"</span>
                  Un vrai pro sur Mios, qui trouve la panne là où d'autres changent tout. Après plusieurs devis sur Biganos où on me conseillait de remplacer entièrement mon système de climatisation, Benjamin a pris le temps de diagnostiquer précisément la panne. Résultat : une simple fuite et une recharge de gaz ont suffi. Travail propre, honnête, rapide et efficace.
                  <span className="text-gray-400">"</span>
                </p>
                
                <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2 sm:pt-3">
                  <span className="font-medium">Juillet 2025</span>
                  <a href="/chauffage" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">PAC</a>
                </div>
              </div>
            </div>

            {/* Yoan Demondion - Google */}
            <div className="flex-shrink-0 w-[300px] sm:w-[360px] mx-1 sm:mx-2">
              <div className="bg-white dark:bg-card backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 min-h-[320px] sm:min-h-[380px] flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white font-semibold text-base sm:text-lg border-2 border-gray-200 dark:border-gray-500">
                    Y
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                      Yoan Demondion
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Google • Local Guide</div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1 overflow-hidden line-clamp-6">
                  <span className="text-gray-400">"</span>
                  Très satisfait de l'intervention pour mon système gainable. Le travail été propre, soigné et réalisé avec beaucoup de professionnalisme. L'installation est discrète et parfaitement réalisée. Il a mis le système en route en mode froid sans aucun souci. Tout fonctionne à merveille. Je recommande sans hésitation pour son sérieux et la qualité de son travail.
                  <span className="text-gray-400">"</span>
                </p>
                
                <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2 sm:pt-3">
                  <span className="font-medium">Il y a 2 mois</span>
                  <a href="/climatisation" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">Gainable</a>
                </div>
              </div>
            </div>

            {/* Paul Challat - Google */}
            <div className="flex-shrink-0 w-[300px] sm:w-[360px] mx-1 sm:mx-2">
              <div className="bg-white dark:bg-card backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 min-h-[320px] sm:min-h-[380px] flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white font-semibold text-base sm:text-lg border-2 border-gray-200 dark:border-gray-500">
                    P
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                      Paul Challat
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Google</div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1 overflow-hidden line-clamp-6">
                  <span className="text-gray-400">"</span>
                  Au Top ! Très bonne relation client. Personnel qui connaît ce qu'il fait et qui est de très bons conseils :)
                  <span className="text-gray-400">"</span>
                </p>
                
                <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2 sm:pt-3">
                  <span className="font-medium">Il y a 2 mois</span>
                  <a href="/blog" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">Conseil</a>
                </div>
              </div>
            </div>

            {/* Lilou Auvray - Google */}
            <div className="flex-shrink-0 w-[300px] sm:w-[360px] mx-1 sm:mx-2">
              <div className="bg-white dark:bg-card backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 min-h-[320px] sm:min-h-[380px] flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white font-semibold text-base sm:text-lg border-2 border-gray-200 dark:border-gray-500">
                    L
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                      Lilou Auvray
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Google • Local Guide</div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1 overflow-hidden line-clamp-6">
                  <span className="text-gray-400">"</span>
                  Travail soigné et rapide, le résultat est impeccable. Je recommande !
                  <span className="text-gray-400">"</span>
                </p>
                
                <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2 sm:pt-3">
                  <span className="font-medium">Il y a 2 mois</span>
                  <a href="/pompe-a-chaleur" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">Installation</a>
                </div>
              </div>
            </div>

            {/* Jérôme Bernard - Google */}
            <div className="flex-shrink-0 w-[300px] sm:w-[360px] mx-1 sm:mx-2">
              <div className="bg-white dark:bg-card backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 min-h-[320px] sm:min-h-[380px] flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white font-semibold text-base sm:text-lg border-2 border-gray-200 dark:border-gray-500">
                    J
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                      Jérôme Bernard
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Google</div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1 overflow-hidden line-clamp-6">
                  <span className="text-gray-400">"</span>
                  Jeune entrepreneur avec des qualités d'écoutes, de conseils et un professionnalisme à la hauteur de mes attentes. Pose d'un groupe Clim extérieur avec deux unités intérieures sur une vieilles bâtisse en pierre, sur le nord Gironde. Je recommande.
                  <span className="text-gray-400">"</span>
                </p>
                
                <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2 sm:pt-3">
                  <span className="font-medium">Il y a 2 mois</span>
                  <a href="/climatisation" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">Climatisation</a>
                </div>
              </div>
            </div>

            {/* Manuela Nunes - Google */}
            <div className="flex-shrink-0 w-[300px] sm:w-[360px] mx-1 sm:mx-2">
              <div className="bg-white dark:bg-card backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 min-h-[320px] sm:min-h-[380px] flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white font-semibold text-base sm:text-lg border-2 border-gray-200 dark:border-gray-500">
                    M
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                      Manuela Nunes
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Google</div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1 overflow-hidden line-clamp-6">
                  <span className="text-gray-400">"</span>
                  Installation d'une clim Daikin au top à Salles. Après avoir comparé plusieurs devis, j'ai choisi Benjamin de ClimGO pour l'installation d'une climatisation monosplit Daikin dans mon salon à Salles, et je ne regrette absolument pas mon choix ! Professionnalisme, ponctualité, conseils avisés et travail soigné : tout y est.
                  <span className="text-gray-400">"</span>
                </p>
                
                <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2 sm:pt-3">
                  <span className="font-medium">Il y a 2 mois</span>
                  <a href="/climatisation" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">Climatisation</a>
                </div>
              </div>
            </div>

            {/* Philippe Rivain - Google */}
            <div className="flex-shrink-0 w-[300px] sm:w-[360px] mx-1 sm:mx-2">
              <div className="bg-white dark:bg-card backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 min-h-[320px] sm:min-h-[380px] flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white font-semibold text-base sm:text-lg border-2 border-gray-200 dark:border-gray-500">
                    P
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                      Philippe Rivain
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Google</div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1 overflow-hidden line-clamp-6">
                  <span className="text-gray-400">"</span>
                  Intervention rapide et efficace sur un changement de carte électronique sur la commune de LANTON.
                  <span className="text-gray-400">"</span>
                </p>
                
                <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2 sm:pt-3">
                  <span className="font-medium">Il y a 2 mois</span>
                  <a href="/maintenance" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-colors">Dépannage</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SimpleWrapper>
          <div className="text-center mt-12 space-y-4">
            {/* Boutons CTA - Layout responsive */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Bouton pour laisser un avis Google */}
              <a
                href="https://g.page/r/CYU8G8pY5uo1EBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                {/* Google icon */}
                <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="flex items-center gap-1 whitespace-nowrap">
                  {/* Plus icon */}
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Laissez votre avis Google
                </span>
              </a>

              {/* Bouton pour nous contacter */}
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-white dark:bg-background border-2 border-blue-600 dark:border-white text-blue-600 dark:text-white hover:bg-blue-50 dark:hover:bg-muted font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                {/* Message icon */}
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="whitespace-nowrap">Nous contacter</span>
              </a>
            </div>
            
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Ces témoignages reflètent notre engagement quotidien : un service professionnel, des conseils personnalisés et des installations de qualité sur tout le Bassin d'Arcachon et la Gironde.
            </p>
          </div>
        </SimpleWrapper>
      </div>
    </section>
  );
}
