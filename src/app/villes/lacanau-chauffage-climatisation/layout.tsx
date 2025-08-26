import { Metadata } from 'next';
import { getCityConfig } from '@/config/cities';
import { generateCityMetadata } from '@/components/CityLayout';
import CityLayout from '@/components/CityLayout';

export const metadata: Metadata = generateCityMetadata(
  getCityConfig('lacanau-chauffage-climatisation')!
);

export default function LacanauLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cityData = getCityConfig('lacanau-chauffage-climatisation')!;
  
  return (
    <CityLayout cityData={cityData}>
      {children}
    </CityLayout>
  );
}
