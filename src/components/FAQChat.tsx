'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Logo3D } from '@/components/ui/Logo3D';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQChatProps {
  title?: string;
  subtitle?: string;
  faqs?: FAQItem[];
  ctaTitle?: string;
  ctaSubtitle?: string;
  phoneNumber?: string;
  email?: string;
}

const defaultFAQs: FAQItem[] = [
  {
    question: "Combien de temps dure une intervention de chauffage/climatisation ?",
    answer: "Cela dépend de la complexité ! Une simple réparation prend 1-2h, tandis qu'une installation complète peut nécessiter une journée. Je vous donne toujours une estimation précise avant de commencer."
  },
  {
    question: "Vous intervenez en urgence le week-end ?",
    answer: "Absolument ! Je suis disponible 7j/7 pour les urgences de chauffage et climatisation. Panne totale, système qui ne démarre pas, problème de sécurité... Je me déplace rapidement sur Andernos et ses environs."
  },
  {
    question: "Comment se déroule la mise aux normes de mon installation ?",
    answer: "Je commence par un diagnostic complet de votre installation. Ensuite, je vous présente un devis détaillé avec les travaux nécessaires. Chaque étape respecte les normes en vigueur pour votre sécurité et votre confort."
  },
  {
    question: "Vos tarifs sont-ils transparents ? Pas de surprise sur la facture ?",
    answer: "Transparence totale ! Je vous remets systématiquement un devis détaillé avant toute intervention. Tarif horaire fixe, matériaux au prix coûtant, aucun frais caché. Votre confiance est ma priorité."
  }
];

export default function FAQChat({
  title = "Questions Fréquentes",
  subtitle = "Nos réponses à vos préoccupations les plus courantes",
  faqs = defaultFAQs,
  ctaTitle = "Une autre question ?",
  ctaSubtitle = "N'hésitez pas à nous contacter directement !",
  phoneNumber = "0123456789",
  email = "contact@climgo.fr"
}: FAQChatProps) {
  return (
          <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-white dark:bg-black" />
      
              <div className="relative z-10 w-full px-4">
        {/* Titre */}
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        </div>

                    {/* FAQ Chat Cards - 4 colonnes sur une ligne */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-4 md:px-6 max-w-full">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  className="chat-card bg-white dark:bg-black rounded-2xl shadow-lg p-4 md:p-6 border-2 border-black dark:border-white h-[350px] md:h-[400px] flex flex-col"
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0, delay: 0 }}
                  whileHover={{ y: 0 }}
                >
                  {/* Question du client - 2 lignes fixes */}
                  <div className="flex items-start mb-3 md:mb-4 h-16 md:h-20">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center mr-2 md:mr-3 flex-shrink-0 shadow-md">
                      <span className="text-white font-semibold text-xs md:text-sm">
                        {index === 0 ? "JD" : index === 1 ? "ML" : index === 2 ? "SP" : "AB"}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="bg-black dark:bg-white text-white dark:text-black rounded-2xl rounded-tl-md px-2 md:px-3 py-2 h-full flex items-center">
                        <p className="text-base md:text-lg leading-tight">{faq.question}</p>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Client • À l'instant</p>
                    </div>
                  </div>
                  
                  {/* Réponse de l'expert - 5 lignes fixes */}
                  <div className="flex items-start justify-end flex-grow h-36 md:h-48">
                    <div className="flex-1 flex justify-end">
                      <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-2xl rounded-tr-md px-2 md:px-3 py-2 max-w-full h-full flex items-center">
                        <p className="text-base md:text-lg leading-tight">{faq.answer}</p>
                      </div>
                    </div>
                    <div className="ml-2 md:ml-3 flex-shrink-0 flex items-center">
                      <Logo3D 
                        glbUrl="/favicon/logo.glb" 
                        isHovered={false}
                        className="w-6 h-6 md:w-8 md:h-8"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-right">Expert ClimGO • À l'instant</p>
                </motion.div>
              ))}
            </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Vous avez d'autres questions ?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-full hover:bg-gray-700 dark:hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contactez-nous
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </Link>
        </motion.div>
      </div>


    </section>
  );
}
