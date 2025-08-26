import { Metadata } from 'next';
import { getCityConfig } from '@/config/cities';
import { generateCityMetadata } from '@/components/CityLayout';
import CityLayout from '@/components/CityLayout';

export const metadata: Metadata = generateCityMetadata(
  getCityConfig('canejan-chauffage-climatisation')!
);

export default function CanejanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cityData = getCityConfig('canejan-chauffage-climatisation')!;
  
  return (
    <CityLayout cityData={cityData}>
      {children}
    </CityLayout>
  );
}
