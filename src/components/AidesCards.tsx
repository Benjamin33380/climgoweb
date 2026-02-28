'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface AidItemProps {
  title: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
  link: string;
  reverse?: boolean;
}

const AidItem: React.FC<AidItemProps> = ({
  title,
  description,
  iconSrc,
  iconAlt,
  link,
  reverse = false,
}) => {
  return (
    <Link href={link} className="block group relative py-12 md:py-16 lg:py-20 cursor-pointer">
      {/* Contenu principal */}
      <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 md:gap-8 lg:gap-12 items-center transition-opacity duration-300 group-hover:opacity-20`}>
        {/* Logo */}
        <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
          <Image
            src={iconSrc}
            alt={iconAlt}
            width={200}
            height={200}
            className="object-contain w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
          />
        </div>

      {/* Contenu texte */}
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
          {title}
        </h3>
        <p 
          className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      </div>

      {/* Overlay avec bouton au hover - Effet glassmorphism */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
        <div className="flex items-center gap-3 px-8 py-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-semibold text-lg rounded-xl shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
          <span>Découvrir cette aide</span>
          <ArrowRight className="w-6 h-6" />
        </div>
      </div>
    </Link>
  );
};

export function AidesCards() {
  const aidsData = [
    {
      title: "MaPrimeRénov'",
      description: "<strong>MaPrimeRénov'</strong> finance jusqu'à <strong>80% de vos travaux</strong> de rénovation énergétique d'ampleur. Selon vos revenus, bénéficiez d'une prise en charge de 45% à 80% du montant HT, avec un plafond pouvant atteindre <strong>70 000€</strong>. Travaux d'isolation, chauffage performant, ventilation : un accompagnement obligatoire vous guide à chaque étape.",
      iconSrc: "/logoannexe/mpr.webp",
      iconAlt: "Logo MaPrimeRénov'",
      link: "/aides-etat",
    },
    {
      title: "Certificats d'Économie d'Énergie (CEE)",
      description: "Les <strong>CEE</strong> sont des primes versées directement par les fournisseurs d'énergie (EDF, Engie, TotalEnergies...) pour financer vos travaux. <strong>Cumulables avec MaPrimeRénov'</strong>, elles permettent de réduire encore plus votre reste à charge. Chez <strong>ClimGO</strong>, nous vous aidons à constituer votre dossier CEE.",
      iconSrc: "/logoannexe/cee.webp",
      iconAlt: "Logo CEE",
      link: "/aides-etat",
    },
    {
      title: "TVA à taux réduit 5,5%",
      description: "Pour vos travaux de rénovation énergétique éligibles, bénéficiez d'une <strong>TVA réduite à 5,5%</strong> au lieu de 20%. Cette réduction s'applique <strong>directement sur votre facture</strong> et concerne aussi bien les équipements que la main-d'œuvre, pour un gain immédiat sur votre investissement.",
      iconSrc: "/logoannexe/tva55.webp",
      iconAlt: "Logo TVA 5.5%",
      link: "/aides-etat",
    },
    {
      title: "Éco-Prêt à Taux Zéro (Éco-PTZ)",
      description: "L'<strong>Éco-PTZ MaPrimeRénov'</strong> vous permet d'emprunter jusqu'à <strong>50 000€ à taux zéro</strong> pour financer le reste à charge de vos travaux de rénovation énergétique. Remboursable sur <strong>20 ans maximum</strong>, ce prêt est accessible à tous les propriétaires sans condition de revenus.",
      iconSrc: "/logoannexe/ecopret0.webp",
      iconAlt: "Logo Éco-PTZ",
      link: "/aides-etat",
    },
    {
      title: "Aides locales et régionales",
      description: "En complément des aides nationales, votre région, département ou commune peut proposer des <strong>subventions supplémentaires</strong> pour vos travaux de rénovation énergétique. Ces aides locales sont <strong>cumulables avec MaPrimeRénov' et les CEE</strong>. Consultez l'<strong>ANIL</strong> pour connaître les dispositifs disponibles dans votre zone.",
      iconSrc: "/logoannexe/anil.webp",
      iconAlt: "Logo ANIL",
      link: "/aides-etat",
    },
  ];

  return (
    <section className="py-8 xs:py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-background">
      <div className="container mx-auto px-4 xs:px-5 sm:px-6 max-w-6xl">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {aidsData.map((aid, index) => (
            <AidItem key={index} {...aid} reverse={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
