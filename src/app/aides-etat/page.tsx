'use client';

import { useState } from 'react';
import { ChevronDown, CheckCircle, FileText, Calculator, Settings, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Clé unique pour éviter le cache

export default function AidesEtatPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const aides = [
    {
      id: 0,
      title: "Certificats d'économies d'énergie (CEE)",
      logo: "/LogoCEE.webp",
      color: "bg-blue-50",
      content: {
        description: "Le CEE est une aide proposée par les fournisseurs d'énergie pour financer vos travaux de rénovation énergétique. Elle permet de réduire directement le montant de votre facture, sans avance de trésorerie.",
        eligibility: "Propriétaires ou locataires, occupants ou bailleurs, tous peuvent en bénéficier. Il suffit que les travaux soient réalisés par une entreprise RGE comme ClimGO.",
        works: ["Installation de pompes à chaleur", "Chauffe-eaux thermodynamiques", "Travaux d'isolation thermique", "Systèmes de chauffage performants"]
      }
    },
    {
      id: 1,
      title: "TVA à taux réduit 5,5%",
      logo: "/LogoTvA55.webp",
      color: "bg-green-50",
      content: {
        description: "Il s'agit d'un taux de TVA abaissé à 5,5 % au lieu de 20 %, applicable sur les travaux de rénovation énergétique. Il est directement appliqué sur la facture.",
        eligibility: "Oui, si votre logement a plus de 2 ans, que vous êtes propriétaire, locataire ou occupant, et que les travaux sont réalisés par une entreprise certifiée comme ClimGO.",
        works: ["Pompes à chaleur", "Chauffe-eaux thermodynamiques", "Travaux d'isolation", "Systèmes de régulation du chauffage"]
      }
    },
    {
      id: 2,
      title: "MaPrimeRénov'",
      logo: "/LogoMaPrimRenov.webp",
      color: "bg-purple-50",
      content: {
        description: "C'est une aide directe de l'État pour financer vos travaux. Elle est versée après les travaux, sur votre compte, sans avance de frais.",
        eligibility: "Tous les propriétaires, selon leurs revenus. Le montant de l'aide dépend d'un barème national, mais ClimGO vous aide à estimer ce à quoi vous avez droit.",
        process: "Elle se fait en ligne sur maprimerenov.gouv.fr. Nous vous assistons dans toutes les démarches."
      }
    },
    {
      id: 3,
      title: "Éco-PTZ (Prêt à taux zéro)",
      logo: "/LogoEcoPret0Pourcent.webp",
      color: "bg-orange-50",
      content: {
        description: "L'éco-PTZ est un prêt à 0 % d'intérêt pour financer vos travaux énergétiques. Il peut atteindre 50 000 €, remboursable sur 20 ans.",
        eligibility: "Tous les propriétaires de logements de plus de 2 ans, qu'ils soient occupants ou bailleurs, sans condition de revenus.",
        works: ["Isolation", "Chauffe-eaux", "Pompes à chaleur", "Ventilation"],
        note: "(Travaux réalisés par une entreprise RGE uniquement.)"
      }
    },
    {
      id: 4,
      title: "Aides locales ANIL",
      logo: "/LogoAnil.webp",
      color: "bg-indigo-50",
      content: {
        description: "En plus des aides de l'État, certaines collectivités (mairies, départements, régions) proposent des aides locales supplémentaires.",
        where: "L'ANIL (Agence Nationale pour l'Information sur le Logement) recense toutes les aides disponibles selon votre commune.",
        how: "Consultez www.anil.org pour voir les aides locales disponibles. ClimGO peut également vous orienter et monter les dossiers."
      }
    }
  ];

  const steps = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Analyse de votre projet",
      description: "On évalue vos besoins, votre logement et votre éligibilité aux aides."
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Devis & estimation des aides",
      description: "Vous recevez un devis clair avec les aides estimées, sans mauvaise surprise."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Constitution du dossier",
      description: "On gère toute la paperasse : dossier, justificatifs, formulaires… vous soufflez."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Installation & aides appliquées",
      description: "On installe, les aides sont directement déduites ou versées."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Épuré sans image */}
      <section className="relative bg-[#03144a] text-white py-16 xs:py-20 sm:py-24 md:py-28">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 xs:px-5 sm:px-6 py-12 xs:py-16 sm:py-20 md:py-24">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-6 xs:mb-7 sm:mb-8">
              <span className="inline-block px-3 xs:px-4 py-1.5 xs:py-2 bg-blue-700/50 rounded-full text-xs xs:text-sm font-medium mb-4 xs:mb-5 sm:mb-6">
                Financement & Subventions
              </span>
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 xs:mb-5 sm:mb-6 leading-tight">
                Aides & Subventions
              </h1>
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-light mb-6 xs:mb-7 sm:mb-8 text-blue-100">
                Simplifiez vos démarches avec ClimGO
              </h2>
            </div>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed text-blue-100 max-w-4xl mx-auto px-2">
              <strong className="text-white">Aides & Subventions</strong> : plusieurs dispositifs existent pour alléger le coût de vos travaux de chauffage, climatisation ou rénovation énergétique. Chez ClimGO, nous vous aidons à chaque étape pour bénéficier sereinement des aides de l&apos;État.
            </p>
          </div>
        </div>
        {/* Vague décorative */}
        <div className="absolute -bottom-1 left-0 right-0 h-24 bg-[#f8f9f4]" 
             style={{clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 60%)'}}>
        </div>
      </section>

      {/* Section Introduction */}
      <section className="py-20 bg-[#f8f9f4] ">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Quelles aides & subventions pour vos travaux en 2025 ?
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
      </section>

      {/* Section Accordéons - Design moderne */}
      <section className="py-12 xs:py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 xs:px-5 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-4 xs:space-y-5 sm:space-y-6">
              {aides.map((aide) => (
                <div key={aide.id} className="bg-[#f8f9f4] rounded-xl xs:rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl">
                  <button
                    onClick={() => toggleFaq(aide.id)}
                    className="w-full p-4 xs:p-5 sm:p-6 md:p-8 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3 xs:gap-4 sm:gap-5 md:gap-6">
                      <div className={`w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 ${aide.color} rounded-lg xs:rounded-xl flex items-center justify-center shadow-sm overflow-hidden`}>
                        <Image 
                          src={aide.logo} 
                          alt={`Logo ${aide.title}`}
                          width={40}
                          height={40}
                          className="object-contain w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12"
                        />
                      </div>
                      <span className="text-base xs:text-lg sm:text-xl md:text-xl font-semibold text-blue-900">
                        {aide.title}
                      </span>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 xs:w-6 xs:h-6 text-blue-600 transition-transform duration-300 ${
                        openFaq === aide.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {openFaq === aide.id && (
                    <div className="px-8 pb-8 border-t border-gray-100">
                      <div className="pt-6 space-y-6">
                        {/* Description */}
                        {aide.content.description && (
                          <div>
                            <h5 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500" />
                              À quoi correspond cette aide ?
                            </h5>
                            <p className="text-gray-700 leading-relaxed pl-7">
                              {aide.content.description}
                            </p>
                          </div>
                        )}
                        
                        {/* Éligibilité */}
                        {aide.content.eligibility && (
                          <div>
                            <h5 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500" />
                              Qui peut en profiter ?
                            </h5>
                            <p className="text-gray-700 leading-relaxed pl-7">
                              {aide.content.eligibility}
                            </p>
                          </div>
                        )}
                        
                        {/* Travaux */}
                        {aide.content.works && (
                          <div>
                            <h5 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500" />
                              Quels travaux sont pris en charge ?
                            </h5>
                            <div className="pl-7">
                              <p className="text-gray-700 mb-3">
                                {aide.id === 0 ? "Les CEE couvrent une large gamme de travaux comme :" : 
                                 aide.id === 1 ? "Le taux réduit s'applique aux travaux visant à améliorer la performance énergétique :" :
                                 ""}
                              </p>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {aide.content.works.map((work, index) => (
                                  <div key={index} className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    <span className="text-gray-700">{work}</span>
                                  </div>
                                ))}
                              </div>
                              {aide.content.note && (
                                <p className="text-gray-600 text-sm mt-3 italic">{aide.content.note}</p>
                              )}
                            </div>
                          </div>
                        )}
                        
                        {/* Autres champs spécifiques */}
                        {aide.content.process && (
                          <div>
                            <h5 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500" />
                              Comment faire une demande ?
                            </h5>
                            <p className="text-gray-700 leading-relaxed pl-7">
                              {aide.content.process}
                            </p>
                          </div>
                        )}
                        
                        {aide.content.where && (
                          <div>
                            <h5 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500" />
                              Où les trouver ?
                            </h5>
                            <p className="text-gray-700 leading-relaxed pl-7">
                              {aide.content.where}
                            </p>
                          </div>
                        )}
                        
                        {aide.content.how && (
                          <div>
                            <h5 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500" />
                              Comment en bénéficier ?
                            </h5>
                            <p className="text-gray-700 leading-relaxed pl-7">
                              {aide.content.how}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Comment ça se passe avec ClimGO - Design moderne */}
      <section className="py-20 bg-[#03144a] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Comment ça se passe avec ClimGO ?
            </h2>
            <div className="w-24 h-1 bg-[#f8f9f4] mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-[#f8f9f4] rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <div className="text-blue-900">
                        {step.icon}
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-4">
                    {step.title}
                  </h3>
                  <p className="text-blue-100 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Motifs décoratifs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/10 rounded-full translate-y-24 -translate-x-24"></div>
      </section>

      {/* Section CTA Final */}
      <section className="py-20 bg-[#f8f9f4]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Profitez des aides avec ClimGO
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              Bénéficiez d&apos;un accompagnement complet pour optimiser vos aides, sans stress ni paperasse.
            </p>
            <p className="text-gray-600 mb-12">
              ClimGO s&apos;occupe de tout, vous profitez des économies.
            </p>
            <Link href="/contact" className="w-full flex justify-center bg-[#03144a] text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-blue-800 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Demander mon devis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
