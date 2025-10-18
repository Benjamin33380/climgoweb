'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SimpleWrapper } from '@/components/ui/SimpleWrapper';
import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="relative py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Grid principal - 2 colonnes en haut, 2 colonnes en bas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
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
                  src="/img/climdame.png"
                  alt="Climatisation"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase tracking-wider drop-shadow-2xl text-center px-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
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
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase tracking-wider drop-shadow-2xl text-center px-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                    Pompes à chaleur
                  </h2>
                </div>
              </Link>
            </motion.div>
          </SimpleWrapper>

          {/* Card 3: Intervention Professionnelle (largeur double en desktop) */}
          <SimpleWrapper>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-1"
            >
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl h-64 sm:h-80 lg:h-96 shadow-xl bg-gradient-to-br from-[#03144A] to-[#0a2463]">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-8 text-center">
                  <div className="mb-6">
                    <Wrench className="w-16 h-16 sm:w-20 sm:h-20 text-white mx-auto mb-4" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wider mb-4 sm:mb-6">
                    Intervention Professionnelle
                  </h2>
                  <p className="text-base sm:text-lg text-white/90 mb-3 max-w-2xl">
                    Votre Artisan est agréé <strong>RGE QUALIPAC</strong> et <strong>QUALIPV</strong>
                  </p>
                  <p className="text-sm sm:text-base text-white/80 mb-6">
                    (Reconnu Garant de l'Environnement)
                  </p>
                  <p className="text-base sm:text-lg text-white/90 mb-8">
                    Attestation de capacité et Garantie Décennale
                  </p>
                  <Link 
                    href="/aides-etat"
                    className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 bg-white text-[#03144A] text-base sm:text-lg font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 uppercase tracking-wide"
                  >
                    Bénéficier des aides d'État
                  </Link>
                </div>
              </div>
            </motion.div>
          </SimpleWrapper>

          {/* Card 4: Autres services */}
          <SimpleWrapper>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <Link href="/contact" className="group block relative overflow-hidden rounded-2xl sm:rounded-3xl h-64 sm:h-80 lg:h-96 shadow-xl hover:shadow-2xl transition-all duration-300">
                <Image
                  src="/img/mainclim.png"
                  alt="Autres services"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase tracking-wider drop-shadow-2xl text-center px-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
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
