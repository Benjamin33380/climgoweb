'use client';

import { useState } from 'react';
import { Users, Award, Clock, MapPin, Phone, Mail, CheckCircle, Star, Shield, Wrench, Settings, ThermometerSun, Camera } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AProposPage() {
  const [activeTab, setActiveTab] = useState('histoire');

  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      number: "50+",
      label: "Clients satisfaits",
      description: "Particuliers et professionnels"
    },
    {
      icon: <Award className="w-6 h-6" />,
      number: "10+",
      label: "Années d'expérience",
      description: "Dans le chauffage et climatisation"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      number: "48",
      label: "Communes desservies",
      description: "En Gironde et Nord des Landes"
    },
    {
      icon: <Star className="w-6 h-6" />,
      number: "5/5",
      label: "Satisfaction client",
      description: "Note moyenne Google"
    }
  ];

  const certifications = [
    {
      title: "Certification RGE",
      description: "Reconnu Garant de l'Environnement pour vos aides",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "QualiPAC",
      description: "Qualification pompe à chaleur air/eau et air/air",
      icon: <ThermometerSun className="w-8 h-8" />
    },
    {
      title: "Qualibat",
      description: "Certification qualité pour les travaux du bâtiment",
      icon: <Settings className="w-8 h-8" />
    },
    {
      title: "Dépannage Urgent",
      description: "Intervention 7j/7 pour vos urgences chauffage",
      icon: <Wrench className="w-8 h-8" />
    }
  ];

  const valeurs = [
    {
      title: "Qualité",
      description: "Nous sélectionnons uniquement des équipements haut de gamme et utilisons des techniques d'installation rigoureuses pour garantir la durabilité de vos installations.",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Transparence",
      description: "Devis détaillés, explications claires, pas de surprise. Nous vous accompagnons à chaque étape avec honnêteté et pédagogie.",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Réactivité",
      description: "Devis sous 48h, intervention rapide, dépannage d'urgence. Votre confort ne peut pas attendre.",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Proximité",
      description: "Une entreprise locale qui connaît le territoire. Nous sommes là pour vous, avant, pendant et après l'installation.",
      icon: <MapPin className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header Journal */}
      <div className="border-b-4 border-black dark:border-white py-6 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center border-b border-black dark:border-white pb-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <div className="text-xs font-bold tracking-wider text-orange-600">ÉDITION SPÉCIALE</div>
              <div className="text-xs font-bold tracking-wider text-blue-600">MAI 2025</div>
            </div>
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="w-12 h-12 relative">
                <Image 
                  src="/favicon/logo.png" 
                  alt="ClimGO Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight text-black dark:text-white">
                À PROPOS DE CLIMGO
              </h1>
              <div className="w-12 h-12 relative">
                <Image 
                  src="/favicon/logo.png" 
                  alt="ClimGO Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="text-sm font-semibold tracking-widest text-black dark:text-white">
              VOTRE EXPERT LOCAL EN CHAUFFAGE ET CLIMATISATION
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-black dark:text-white max-w-4xl mx-auto leading-tight">
              Depuis plus de 10 ans, <strong>ClimGO</strong> accompagne particuliers et professionnels en Gironde et dans le Nord des Landes. 
              Notre expertise : installation, <Link href="/maintenance" className="text-green-600 dark:text-green-400 hover:underline font-bold hover:text-green-700 dark:hover:text-green-300">maintenance</Link> et dépannage de <Link href="/services" className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent hover:underline font-bold">pompes à chaleur</Link>, <Link href="/climatisation" className="text-blue-600 dark:text-blue-400 hover:underline font-bold hover:text-blue-700 dark:hover:text-blue-300">climatisation</Link> et systèmes de <Link href="/chauffage" className="text-orange-600 dark:text-orange-400 hover:underline font-bold hover:text-orange-700 dark:hover:text-orange-300">chauffage</Link>.
            </p>
          </div>
        </div>
      </div>

      {/* Contenu Principal - Style Journal */}
      <div className="container mx-auto px-4 py-8">
        
        {/* Section des Statistiques - Style Encadré */}
        <div className="border-2 border-black dark:border-white p-6 mb-8">
          <h2 className="text-2xl font-black text-center mb-6 text-black dark:text-white tracking-tight">
            <span className="text-orange-600">CLIMGO</span> EN <span className="text-blue-600">CHIFFRES</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center border-r border-black dark:border-white last:border-r-0 pr-4 last:pr-0">
                <div className="flex justify-center mb-2">
                  <div className="text-black dark:text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl font-black text-black dark:text-white">
                  {stat.number}
                </div>
                <h3 className="text-xs font-bold text-black dark:text-white mb-1 uppercase tracking-wide">
                  {stat.label}
                </h3>
                <p className="text-xs text-black dark:text-white">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Articles en Colonnes */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Colonne 1 - Notre Histoire */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-black mb-4 text-black dark:text-white border-b-2 border-orange-600 pb-2">
              COMMENT TOUT A COMMENCÉ
            </h2>
            
            {/* Emplacement Photo - Style Journal */}
            <div className="border-2 border-black dark:border-white p-4 mb-4 bg-gradient-to-br from-orange-50 to-blue-50 dark:from-gray-800 dark:to-gray-700">
              <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-600 border border-dashed border-gray-400 dark:border-gray-500 flex items-center justify-center relative">
                <div className="text-center text-gray-500 dark:text-gray-400">
                  <Camera className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-sm font-bold">PHOTO À VENIR</p>
                  <p className="text-xs">Benjamin et son camion ClimGO</p>
                </div>
              </div>
              <p className="text-xs font-bold text-black dark:text-white mt-2 text-center border-t border-black dark:border-white pt-2">
                📸 <span className="text-orange-600">BENJAMIN CARDOSO</span>, fondateur de <span className="text-blue-600">ClimGO</span>.
              </p>
            </div>
            
            <div className="text-sm text-black dark:text-white leading-relaxed space-y-3 text-justify">
              <p>
                <strong className="font-bold text-orange-600">ClimGO est née d'une passion</strong> pour les technologies énergétiques et d'un constat simple : 
                les particuliers et professionnels méritent un service de qualité, transparent et accessible 
                pour leurs installations de <Link href="/chauffage" className="text-orange-600 dark:text-orange-400 hover:underline font-bold hover:text-orange-700 dark:hover:text-orange-300">chauffage</Link> et <Link href="/climatisation" className="text-blue-600 dark:text-blue-400 hover:underline font-bold hover:text-blue-700 dark:hover:text-blue-300">climatisation</Link>.
              </p>
              <p>
                Depuis nos débuts, nous avons fait le choix de la spécialisation et de l'excellence. 
                Plutôt que de disperser notre expertise, nous nous concentrons sur ce que nous savons 
                faire de mieux : les <Link href="/services" className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent hover:underline font-bold">pompes à chaleur</Link>, la <Link href="/climatisation" className="text-blue-600 dark:text-blue-400 hover:underline font-bold hover:text-blue-700 dark:hover:text-blue-300">climatisation</Link> et les systèmes de <Link href="/chauffage" className="text-orange-600 dark:text-orange-400 hover:underline font-bold hover:text-orange-700 dark:hover:text-orange-300">chauffage</Link> performants.
              </p>
              <p>
                <strong className="font-bold text-blue-600">Aujourd'hui, avec plus de 50 clients satisfaits</strong> et une présence sur 48 communes, 
                ClimGO est devenu un acteur incontournable du secteur en Gironde et dans le Nord des Landes.
              </p>
            </div>
          </div>

          {/* Colonne 2 - Encadré Valeurs */}
          <div className="border-2 border-black dark:border-white p-4 bg-white dark:bg-black">
                      <h3 className="text-lg font-black mb-4 text-black dark:text-white text-center">
            NOS <span className="text-orange-600">VALEURS</span>
          </h3>
            <div className="space-y-4">
              {valeurs.map((valeur, index) => (
                <div key={index} className="border-b border-black dark:border-white pb-3 last:border-b-0">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-black dark:text-white">
                      {valeur.icon}
                    </div>
                    <h4 className="text-sm font-bold text-black dark:text-white uppercase tracking-wide">
                      {valeur.title}
                    </h4>
                  </div>
                  <p className="text-xs text-black dark:text-white leading-tight">
                    {valeur.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section Mission - Article Principal */}
        <div className="mb-8">
          <h2 className="text-2xl font-black mb-4 text-black dark:text-white border-b-2 border-blue-600 pb-2">
            NOTRE <span className="text-blue-600">ENGAGEMENT</span> AU QUOTIDIEN
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-sm text-black dark:text-white leading-relaxed space-y-3 text-justify">
              <p>
                <strong className="font-bold">Notre mission est de démocratiser l'accès</strong> aux technologies énergétiques performantes 
                et respectueuses de l'environnement. Nous croyons que chacun doit pouvoir bénéficier 
                d'un confort thermique optimal tout en réduisant son impact écologique.
              </p>
              <p>
                Cette vision guide chacune de nos interventions, de l'étude initiale à la maintenance préventive.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-start gap-2 pb-2 border-b border-black dark:border-white">
                <CheckCircle className="w-4 h-4 text-black dark:text-white mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-black dark:text-white uppercase">Installation professionnelle</h4>
                  <p className="text-xs text-black dark:text-white">Équipements haut de gamme selon les normes</p>
                </div>
              </div>
              <div className="flex items-start gap-2 pb-2 border-b border-black dark:border-white">
                <CheckCircle className="w-4 h-4 text-black dark:text-white mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-black dark:text-white uppercase">Accompagnement complet</h4>
                  <p className="text-xs text-black dark:text-white">De l'étude à la mise en service</p>
                </div>
              </div>
              <div className="flex items-start gap-2 pb-2 border-b border-black dark:border-white">
                <CheckCircle className="w-4 h-4 text-black dark:text-white mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-black dark:text-white uppercase">Service après-vente</h4>
                  <p className="text-xs text-black dark:text-white">Maintenance et dépannage d'urgence</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-black dark:text-white mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-black dark:text-white uppercase">Garantie tranquillité</h4>
                  <p className="text-xs text-black dark:text-white">Intervention rapide garantie</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications - Style colonnes journal */}
        <div className="mb-8">
          <h2 className="text-2xl font-black mb-4 text-black dark:text-white border-b-2 border-black dark:border-white pb-2">
            NOS CERTIFICATIONS
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="border border-black dark:border-white p-3 text-center">
                <div className="flex justify-center mb-2">
                  <div className="text-black dark:text-white">
                    {cert.icon}
                  </div>
                </div>
                <h3 className="text-xs font-bold text-black dark:text-white mb-2 uppercase tracking-wide">
                  {cert.title}
                </h3>
                <p className="text-xs text-black dark:text-white leading-tight">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section Équipe */}
        <div className="mb-8 border-2 border-black dark:border-white p-6">
          <h2 className="text-2xl font-black mb-4 text-black dark:text-white text-center">
            NOTRE ÉQUIPE
          </h2>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-black dark:bg-white rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white dark:text-black" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-black dark:text-white mb-2">
              L'ÉQUIPE CLIMGO
            </h3>
            <p className="text-sm text-black dark:text-white mb-4 max-w-2xl mx-auto leading-relaxed">
              <strong>Experts en chauffage et climatisation.</strong> Une équipe de professionnels passionnés, 
              formés aux dernières technologies et certifiés RGE.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[
                { name: "Pompes à chaleur", href: "/services", hoverColor: "group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-blue-600 group-hover:bg-clip-text", hoverBg: "hover:bg-gradient-to-r hover:from-orange-50 hover:to-blue-50 dark:hover:from-orange-950 dark:hover:to-blue-950" },
                { name: "Climatisation", href: "/climatisation", hoverColor: "group-hover:text-blue-600 dark:group-hover:text-blue-400", hoverBg: "hover:bg-blue-50 dark:hover:bg-blue-950" },
                { name: "Chauffage", href: "/chauffage", hoverColor: "group-hover:text-orange-600 dark:group-hover:text-orange-400", hoverBg: "hover:bg-orange-50 dark:hover:bg-orange-950" },
                { name: "Maintenance", href: "/maintenance", hoverColor: "group-hover:text-green-600 dark:group-hover:text-green-400", hoverBg: "hover:bg-green-50 dark:hover:bg-green-950" }
              ].map((specialite, idx) => (
                <Link key={idx} href={specialite.href} className={`border border-black dark:border-white p-2 text-center ${specialite.hoverBg} transition-colors group`}>
                  <span className={`text-xs font-bold text-black dark:text-white ${specialite.hoverColor} uppercase tracking-wide`}>
                    {specialite.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Contact - Style Journal */}
        <div className="border-t-4 border-black dark:border-white pt-6">
          <h2 className="text-2xl font-black mb-6 text-black dark:text-white text-center">
            PRÊT À FAIRE ÉQUIPE AVEC CLIMGO ?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <a href="tel:0766460008" className="text-center border border-black dark:border-white p-4 hover:bg-orange-50 dark:hover:bg-gray-800 transition-colors group">
              <Phone className="w-6 h-6 text-black dark:text-white mx-auto mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400" />
              <h3 className="text-sm font-bold text-black dark:text-white mb-1 uppercase group-hover:text-orange-600 dark:group-hover:text-orange-400">Appelez-nous</h3>
              <p className="text-sm text-black dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400">07 66 46 00 08</p>
            </a>
            <a href="mailto:contact@climgo.fr" className="text-center border border-black dark:border-white p-4 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors group">
              <Mail className="w-6 h-6 text-black dark:text-white mx-auto mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
              <h3 className="text-sm font-bold text-black dark:text-white mb-1 uppercase group-hover:text-blue-600 dark:group-hover:text-blue-400">Écrivez-nous</h3>
              <p className="text-sm text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">contact@climgo.fr</p>
            </a>
            <Link href="/zones-interventions" className="text-center border border-black dark:border-white p-4 hover:bg-green-50 dark:hover:bg-gray-800 transition-colors group">
              <MapPin className="w-6 h-6 text-black dark:text-white mx-auto mb-2 group-hover:text-green-600 dark:group-hover:text-green-400" />
              <h3 className="text-sm font-bold text-black dark:text-white mb-1 uppercase group-hover:text-green-600 dark:group-hover:text-green-400">Notre zone</h3>
              <p className="text-sm text-black dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400">Gironde & Nord Landes</p>
            </Link>
          </div>
          
          <div className="text-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center bg-white dark:bg-black text-black dark:text-white px-8 py-3 font-bold text-sm uppercase tracking-wide border-2 border-black dark:border-white hover:bg-orange-50 dark:hover:bg-gray-800 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-300"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}