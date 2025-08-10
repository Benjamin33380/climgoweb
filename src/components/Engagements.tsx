'use client';

import { useRef, useEffect, useState } from 'react';
import { SimpleWrapper } from '@/components/ui/SimpleWrapper';

const Content = () => (
  <div className="space-y-4 text-center max-w-3xl mx-auto">
    <SimpleWrapper>
      <p className="text-lg text-gray-800 dark:text-gray-200 leading-normal">
        Chez <strong>ClimGO</strong>, nous vous accompagnons dans tous les domaines du confort thermique et sanitaire : <strong>chauffage</strong>, <strong>climatisation</strong>, <strong>eau chaude sanitaire</strong> et <strong>maintenance</strong>.
      </p>
    </SimpleWrapper>

    <p className="text-base text-gray-800 dark:text-gray-200 leading-normal">
      Nos solutions sont pensées pour allier <strong>performance</strong>, <strong>durabilité</strong>, <strong>économies d'énergie</strong> et <strong>sérénité</strong>, année après année.
    </p>

    <div className="my-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Notre Expertise</h3>
      <p className="text-base text-gray-800 dark:text-gray-200 leading-normal">
        Notre expertise technique, développée depuis plus de 10 ans, nous permet de vous proposer les équipements les plus adaptés à votre habitat et à votre mode de vie.
      </p>
    </div>

    <div className="my-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Service Complet</h3>
      <p className="text-base text-gray-800 dark:text-gray-200 leading-normal">
        De l'installation à la maintenance, en passant par le conseil et le dépannage, nous vous garantissons un service complet et personnalisé.
      </p>
    </div>

    <div className="my-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Qualité & Conformité</h3>
      <p className="text-base text-gray-800 dark:text-gray-200 leading-normal">
        Chaque intervention est réalisée dans le respect des normes en vigueur, avec des équipements certifiés et une garantie sur nos prestations.
      </p>
    </div>

    <div className="my-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Nos Engagements</h3>
      <ul className="text-center text-base text-gray-800 dark:text-gray-200 leading-normal space-y-1 max-w-xl mx-auto">
        <li>✓ Intervention rapide et professionnelle</li>
        <li>✓ Devis gratuit et transparent</li>
        <li>✓ Garantie sur toutes nos prestations</li>
        <li>✓ Équipements certifiés et de qualité</li>
        <li>✓ Respect des délais convenus</li>
        <li>✓ SAV réactif et disponible</li>
      </ul>
    </div>

    <div className="my-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Zone d'Intervention</h3>
      <p className="text-base text-gray-800 dark:text-gray-200 leading-normal">
        Nous intervenons dans toute la Gironde : Bordeaux métropole, Bassin d'Arcachon, Médoc, Entre-deux-Mers et leurs communes environnantes.
      </p>
    </div>

    <p className="text-lg text-gray-800 dark:text-gray-200 leading-normal font-medium mt-6">
      Notre objectif : votre satisfaction et votre confort au quotidien, dans le respect de l'environnement et de votre budget.
    </p>
  </div>
);

export default function Engagements() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
        setScrollPosition(scrollTop);
        setMaxScroll(scrollHeight - clientHeight);
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      // Initialize maxScroll
      setMaxScroll(scrollElement.scrollHeight - scrollElement.clientHeight);
      
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const topShadowOpacity = Math.min(scrollPosition / 50, 1);
  const bottomShadowOpacity = Math.min((maxScroll - scrollPosition) / 50, 1);

  return (
    <section className="relative py-12 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 w-full h-full bg-white dark:bg-black"
        aria-hidden="true"
      ></div>
      
      {/* Titre centré */}
      <div className="relative z-10 container mx-auto px-4 mb-4">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-800 dark:text-white text-center">
          Notre savoir-faire
        </h2>
      </div>
      
      {/* Container de scroll sur toute la largeur de la page */}
      <div className="relative w-full">
        {/* Gradient de flou du haut */}
        <div 
          className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white dark:from-black to-transparent z-10 pointer-events-none transition-opacity duration-300"
          style={{ opacity: topShadowOpacity }}
        />
        
        {/* Zone de scroll sur toute la largeur de la page */}
        <div 
          ref={scrollRef}
          className="w-full h-[400px] px-4 py-4 overflow-y-auto scrollbar-hide cursor-default"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {/* Contenu centré dans la zone élargie */}
          <div className="max-w-4xl mx-auto">
            <Content />
          </div>
        </div>
        
        {/* Gradient de flou du bas */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white dark:from-black to-transparent z-10 pointer-events-none transition-opacity duration-300"
          style={{ opacity: bottomShadowOpacity }}
        />
      </div>
      
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
