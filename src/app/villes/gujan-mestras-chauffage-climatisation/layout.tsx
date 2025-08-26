import { Metadata } from 'next';
import { getCityConfig } from '@/config/cities';
import { generateCityMetadata } from '@/components/CityLayout';
import CityLayout from '@/components/CityLayout';

export const metadata: Metadata = generateCityMetadata(
  getCityConfig('gujan-mestras-chauffage-climatisation')!
);

export default function Gujan-mestrasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cityData = getCityConfig('gujan-mestras-chauffage-climatisation')!;
  
  return (
    <CityLayout cityData={cityData}>
      {children}
    </CityLayout>
  );
}
