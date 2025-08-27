'use client';

import { SimpleWrapper } from '@/components/ui/SimpleWrapper';

interface LocationMapProps {
  backgroundColor?: string;
}

export default function LocationMap({ backgroundColor = "bg-white dark:bg-black" }: LocationMapProps) {
  return (
    <div className={`w-screen ml-[calc(-50vw+50%)] ${backgroundColor}`}>
              <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.9835896155786!2d-0.8562622!3d44.6965443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x55e91babdbbad05%3A0x35eae658ca1b3c85!2sClimGO!5e0!3m2!1sfr!2sfr!4v1699999999999!5m2!1sfr!2sfr&z=8"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
          title="Zone d'intervention ClimGO - Gironde"
        />
    </div>
  );
}
