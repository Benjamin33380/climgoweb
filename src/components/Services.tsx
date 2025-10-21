'use client';

import Link from 'next/link';
import { SimpleWrapper } from '@/components/ui/SimpleWrapper';
import { motion } from 'framer-motion';

export default function Services() {
  return (
    <section id="services" className="relative py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1800px]">
        {/* Grid principal - 3 colonnes sur la même ligne */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Climatisation */}
          <SimpleWrapper>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Link href="/climatisation" className="block group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-white hover:-translate-y-2 h-64 sm:h-80 lg:h-96 cursor-pointer">
                    {/* Image en fond pour toutes les résolutions */}
                    <div 
                      className="absolute inset-0 bg-no-repeat bg-center bg-cover"
                      style={{ 
                        backgroundImage: 'url(/outro/cardclim.png)',
                        backgroundColor: '#f3f4f6'
                      }}
                    >
                      {/* Overlay léger pour contraste sur desktop uniquement */}
                      <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white/40 via-white/20 to-transparent dark:from-black/40 dark:via-black/20 dark:to-transparent" />
                    </div>
                    
                    {/* Bannière avec le titre - toujours visible sur mobile, au survol sur desktop */}
                    <div className="absolute bottom-0 left-0 z-20 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 transform translate-y-0 lg:translate-y-2 lg:group-hover:translate-y-0">
                      <div className="bg-white/90 dark:bg-black/90 lg:bg-white/60 lg:dark:bg-black/60 backdrop-blur-md text-black dark:text-white px-4 py-2 lg:px-6 lg:py-3 rounded-tr-2xl border border-white/30 dark:border-white/10">
                        <h2 className="text-sm sm:text-base lg:text-lg xl:text-xl font-light tracking-wide">
                          Climatisation
                        </h2>
                      </div>
                    </div>
              </Link>
            </motion.div>
          </SimpleWrapper>

          {/* Card 2: Chauffage */}
          <SimpleWrapper>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              <Link href="/air+eau" className="block group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-white hover:-translate-y-2 h-64 sm:h-80 lg:h-96 cursor-pointer">
                    {/* Image en fond pour toutes les résolutions */}
                    <div 
                      className="absolute inset-0 bg-no-repeat bg-center bg-cover"
                      style={{ 
                        backgroundImage: 'url(/outro/chauffageseul.png)',
                        backgroundColor: '#f3f4f6'
                      }}
                    >
                      {/* Overlay léger pour contraste sur desktop uniquement */}
                      <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white/40 via-white/20 to-transparent dark:from-black/40 dark:via-black/20 dark:to-transparent" />
                    </div>
                    
                    {/* Bannière avec le titre - toujours visible sur mobile, au survol sur desktop */}
                    <div className="absolute bottom-0 left-0 z-20 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 transform translate-y-0 lg:translate-y-2 lg:group-hover:translate-y-0">
                      <div className="bg-white/90 dark:bg-black/90 lg:bg-white/60 lg:dark:bg-black/60 backdrop-blur-md text-black dark:text-white px-4 py-2 lg:px-6 lg:py-3 rounded-tr-2xl border border-white/30 dark:border-white/10">
                        <h2 className="text-sm sm:text-base lg:text-lg xl:text-xl font-light tracking-wide">
                          Chauffage
                        </h2>
                      </div>
                    </div>
              </Link>
            </motion.div>
          </SimpleWrapper>

          {/* Card 3: Eau chaude sanitaire */}
          <SimpleWrapper>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <Link href="/thermodynamique" className="block group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-white hover:-translate-y-2 h-64 sm:h-80 lg:h-96 cursor-pointer">
                    {/* Image en fond pour toutes les résolutions */}
                    <div 
                      className="absolute inset-0 bg-no-repeat bg-center bg-cover"
                      style={{ 
                        backgroundImage: 'url(/img/thermoecs.png)',
                        backgroundColor: '#f3f4f6'
                      }}
                    >
                      {/* Overlay léger pour contraste sur desktop uniquement */}
                      <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white/40 via-white/20 to-transparent dark:from-black/40 dark:via-black/20 dark:to-transparent" />
                    </div>
                    
                    {/* Bannière avec le titre - toujours visible sur mobile, au survol sur desktop */}
                    <div className="absolute bottom-0 left-0 z-20 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 transform translate-y-0 lg:translate-y-2 lg:group-hover:translate-y-0">
                      <div className="bg-white/90 dark:bg-black/90 lg:bg-white/60 lg:dark:bg-black/60 backdrop-blur-md text-black dark:text-white px-4 py-2 lg:px-6 lg:py-3 rounded-tr-2xl border border-white/30 dark:border-white/10">
                        <h2 className="text-sm sm:text-base lg:text-lg xl:text-xl font-light tracking-wide">
                          Eau chaude sanitaire
                        </h2>
                      </div>
                    </div>
              </Link>
            </motion.div>
          </SimpleWrapper>
        </div>
      </div>
    </section>
  );
}
