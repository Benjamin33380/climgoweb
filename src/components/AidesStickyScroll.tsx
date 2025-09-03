"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Certificats d'économies d'énergie (CEE)",
    description:
      "Le CEE est une aide proposée par les fournisseurs d'énergie pour financer vos travaux de rénovation énergétique. Elle permet de réduire directement le montant de votre facture, sans avance de trésorerie. Propriétaires ou locataires, occupants ou bailleurs, tous peuvent en bénéficier. Il suffit que les travaux soient réalisés par une entreprise RGE comme ClimGO. Les CEE couvrent une large gamme de travaux : installation de pompes à chaleur, chauffe-eaux thermodynamiques, travaux d'isolation thermique, systèmes de chauffage performants.",
    image: {
      src: "/logoannexe/cee.webp",
      alt: "Logo CEE"
    },
    content: (
      <div className="h-full w-full bg-white dark:bg-black flex items-center justify-center p-8">
        <div className="text-center">
                           <div className="w-36 h-36 bg-white dark:bg-black rounded-full flex items-center justify-center mx-auto mb-4">
            <Image 
              src="/logoannexe/cee.webp" 
              alt="Logo CEE"
              width={96}
              height={96}
              className="object-contain"
            />
          </div>
          <h3 className="text-xl font-semibold text-black dark:text-white mb-2">CEE</h3>
                   <p className="text-sm text-black dark:text-white">Financement direct par les fournisseurs d'énergie</p>
        </div>
      </div>
    ),
  },
  {
    title: "TVA à taux réduit 5,5%",
    description:
      "Il s'agit d'un taux de TVA abaissé à 5,5 % au lieu de 20 %, applicable sur les travaux de rénovation énergétique. Il est directement appliqué sur la facture. Disponible si votre logement a plus de 2 ans, que vous êtes propriétaire, locataire ou occupant, et que les travaux sont réalisés par une entreprise certifiée comme ClimGO. Le taux réduit s'applique aux travaux visant à améliorer la performance énergétique : pompes à chaleur, chauffe-eaux thermodynamiques, travaux d'isolation, systèmes de régulation du chauffage.",
    image: {
      src: "/logoannexe/tva55.webp",
      alt: "Logo TVA 5.5%"
    },
    content: (
      <div className="h-full w-full bg-white dark:bg-black flex items-center justify-center p-8">
        <div className="text-center">
                           <div className="w-36 h-36 bg-white dark:bg-black rounded-full flex items-center justify-center mx-auto mb-4">
            <Image 
              src="/logoannexe/tva55.webp" 
              alt="Logo TVA 5.5%"
              width={96}
              height={96}
              className="object-contain"
            />
          </div>
          <h3 className="text-xl font-semibold text-black dark:text-white mb-2">TVA 5,5%</h3>
                   <p className="text-sm text-black dark:text-white">Taux réduit directement appliqué</p>
        </div>
      </div>
    ),
  },
  {
    title: "MaPrimeRénov'",
    description:
      "C'est une aide directe de l'État pour financer vos travaux. Elle est versée après les travaux, sur votre compte, sans avance de frais. Tous les propriétaires peuvent en bénéficier selon leurs revenus. ClimGO vous aide à estimer ce à quoi vous avez droit et vous assiste dans toutes les démarches.",
    image: {
      src: "/logoannexe/mpr.webp",
      alt: "Logo MaPrimeRénov'"
    },
    content: (
      <div className="h-full w-full bg-white dark:bg-black flex items-center justify-center p-8">
        <div className="text-center">
                           <div className="w-36 h-36 bg-white dark:bg-black rounded-full flex items-center justify-center mx-auto mb-4">
            <Image 
              src="/logoannexe/mpr.webp" 
              alt="Logo MaPrimeRénov'"
              width={96}
              height={96}
              className="object-contain"
            />
          </div>
          <h3 className="text-xl font-semibold text-black dark:text-white mb-2">MaPrimeRénov'</h3>
                   <p className="text-sm text-black dark:text-white">Aide directe de l'État</p>
        </div>
      </div>
    ),
  },
  {
    title: "Éco-PTZ (Prêt à taux zéro)",
    description:
      "L'éco-PTZ est un prêt à 0 % d'intérêt pour financer vos travaux énergétiques. Il peut atteindre 50 000 €, remboursable sur 20 ans. Tous les propriétaires de logements de plus de 2 ans peuvent en bénéficier, qu'ils soient occupants ou bailleurs, sans condition de revenus. Les travaux éligibles incluent : isolation, chauffe-eaux, pompes à chaleur, ventilation. Attention : travaux réalisés par une entreprise RGE uniquement.",
    image: {
      src: "/logoannexe/ecopret0.webp",
      alt: "Logo Éco-PTZ"
    },
    content: (
      <div className="h-full w-full bg-white dark:bg-black flex items-center justify-center p-8">
        <div className="text-center">
                           <div className="w-36 h-36 bg-white dark:bg-black rounded-full flex items-center justify-center mx-auto mb-4">
            <Image 
              src="/logoannexe/ecopret0.webp" 
              alt="Logo Éco-PTZ"
              width={96}
              height={96}
              className="object-contain"
            />
          </div>
          <h3 className="text-xl font-semibold text-black dark:text-white mb-2">Éco-PTZ</h3>
                   <p className="text-sm text-black dark:text-white">Prêt à taux zéro jusqu'à 50 000€</p>
        </div>
      </div>
    ),
  },
  {
    title: "Aides locales ANIL",
    description:
      "En plus des aides de l'État, certaines collectivités (mairies, départements, régions) proposent des aides locales supplémentaires. L'ANIL (Agence Nationale pour l'Information sur le Logement) recense toutes les aides disponibles selon votre commune. Consultez www.anil.org pour voir les aides locales disponibles dans votre région. ClimGO peut également vous orienter et monter les dossiers pour cumuler toutes les aides possibles et maximiser vos économies.",
    image: {
      src: "/logoannexe/anil.webp",
      alt: "Logo ANIL"
    },
    content: (
      <div className="h-full w-full bg-white dark:bg-black flex items-center justify-center p-8">
        <div className="text-center">
                           <div className="w-36 h-36 bg-white dark:bg-black rounded-full flex items-center justify-center mx-auto mb-4">
            <Image 
              src="/logoannexe/anil.webp" 
              alt="Logo ANIL"
              width={96}
              height={96}
              className="object-contain"
            />
          </div>
          <h3 className="text-xl font-semibold text-black dark:text-white mb-2">Aides ANIL</h3>
                   <p className="text-sm text-black dark:text-white">Aides locales complémentaires</p>
        </div>
      </div>
    ),
  },
];

export function AidesStickyScroll() {
  return (
    <div className="w-full bg-white dark:bg-black">
      <StickyScroll content={content} />
    </div>
  );
}
