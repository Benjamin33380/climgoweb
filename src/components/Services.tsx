'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SimpleWrapper } from '@/components/ui/SimpleWrapper';
import { motion } from 'framer-motion';

export default function Services() {
  return (
    <section id="services" className="relative py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
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
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white uppercase tracking-wider drop-shadow-2xl text-center px-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                    Climatisation
                  </h2>
                </div>
              </Link>
            </motion.div>
          </SimpleWrapper>

          {/* Card 2: Pompes à chaleur */}
          <SimpleWrapper>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              <Link href="/pompe-a-chaleur" className="group block relative overflow-hidden rounded-2xl sm:rounded-3xl h-64 sm:h-80 lg:h-96 shadow-xl hover:shadow-2xl transition-all duration-300">
                <Image
                  src="/img/uipacspacex.png"
                  alt="Pompes à chaleur"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white uppercase tracking-wider drop-shadow-2xl text-center px-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                    Pompes à chaleur
                  </h2>
                </div>
              </Link>
            </motion.div>
          </SimpleWrapper>

          {/* Card 3: Autres services */}
          <SimpleWrapper>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <Link href="/contact" className="group block relative overflow-hidden rounded-2xl sm:rounded-3xl h-64 sm:h-80 lg:h-96 shadow-xl hover:shadow-2xl transition-all duration-300">
                <Image
                  src="/img/thermoecs.png"
                  alt="Autres services"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white uppercase tracking-wider drop-shadow-2xl text-center px-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                    Autres services
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
