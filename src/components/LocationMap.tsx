'use client';

import { SimpleWrapper } from '@/components/ui/SimpleWrapper';

interface LocationMapProps {
  backgroundColor?: string;
}

export default function LocationMap({ backgroundColor = "bg-white dark:bg-black" }: LocationMapProps) {
  return (
    <section className={`py-20 pb-0 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        <SimpleWrapper>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-4">
              Notre localisation
            </h2>
            <div className="w-24 h-1 bg-black dark:bg-white mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Retrouvez <strong className="text-gray-900 dark:text-white">ClimGO</strong> au cœur de Marcheprime pour tous vos besoins en <strong className="text-gray-900 dark:text-white">climatisation</strong>, <strong className="text-gray-900 dark:text-white">chauffage</strong> et <strong className="text-gray-900 dark:text-white">eau chaude sanitaire</strong>.
            </p>
          </div>
        </SimpleWrapper>
      </div>

      {/* Map en pleine largeur */}
      <SimpleWrapper>
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.9835896155786!2d-0.8562622!3d44.6965443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x55e91babdbbad05%3A0x35eae658ca1b3c85!2sClimGO!5e0!3m2!1sfr!2sfr!4v1699999999999!5m2!1sfr!2sfr"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
            title="Localisation ClimGO"
          />
        </div>
      </SimpleWrapper>
    </section>
  );
}
