import { Metadata } from 'next';
import { getCityConfig } from '@/config/cities';
import { generateCityMetadata } from '@/components/CityLayout';
import CityLayout from '@/components/CityLayout';

export const metadata: Metadata = generateCityMetadata(
  getCityConfig('saint-jean-d-illac-chauffage-climatisation')!
);

export default function Saint-jean-d-illacLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cityData = getCityConfig('saint-jean-d-illac-chauffage-climatisation')!;
  
  return (
    <CityLayout cityData={cityData}>
      {children}
    </CityLayout>
  );
}
