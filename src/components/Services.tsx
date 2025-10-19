'use client';

import Link from 'next/link';
import Image from 'next/image';
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
              <Link href="/climatisation" className="group block relative overflow-hidden rounded-2xl sm:rounded-3xl h-64 sm:h-80 lg:h-96 shadow-xl hover:shadow-2xl transition-all duration-300">
                <Image
                  src="/outro/cardclim.png"
                  alt="Climatisation"
                  width={400}
                  height={384}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={100}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white uppercase tracking-wide drop-shadow-2xl text-center px-4" style={{ textShadow: '3px 3px 10px rgba(0,0,0,0.9)' }}>
                    Climatisation
                  </h2>
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
              <Link href="/chauffage" className="group block relative overflow-hidden rounded-2xl sm:rounded-3xl h-64 sm:h-80 lg:h-96 shadow-xl hover:shadow-2xl transition-all duration-300">
                <Image
                  src="/outro/chauffageseul.png"
                  alt="Chauffage"
                  width={400}
                  height={384}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={100}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white uppercase tracking-wide drop-shadow-2xl text-center px-4" style={{ textShadow: '3px 3px 10px rgba(0,0,0,0.9)' }}>
                    Chauffage
                  </h2>
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
              <Link href="/eau-chaude-sanitaire" className="group block relative overflow-hidden rounded-2xl sm:rounded-3xl h-64 sm:h-80 lg:h-96 shadow-xl hover:shadow-2xl transition-all duration-300">
                <Image
                  src="/img/thermoecs.png"
                  alt="Eau chaude sanitaire"
                  width={400}
                  height={384}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={100}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white uppercase tracking-wide drop-shadow-2xl text-center px-4" style={{ textShadow: '3px 3px 10px rgba(0,0,0,0.9)' }}>
                    Eau chaude sanitaire
                  </h2>
                </div>
              </Link>
            </motion.div>
          </SimpleWrapper>
        </div>
      </div>
    </section>
  );
}
