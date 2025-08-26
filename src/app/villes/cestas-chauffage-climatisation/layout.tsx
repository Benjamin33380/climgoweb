import { Metadata } from 'next';
import { getCityConfig } from '@/config/cities';
import { generateCityMetadata } from '@/components/CityLayout';
import CityLayout from '@/components/CityLayout';

export const metadata: Metadata = generateCityMetadata(
  getCityConfig('cestas-chauffage-climatisation')!
);

export default function CestasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cityData = getCityConfig('cestas-chauffage-climatisation')!;
  
  return (
    <CityLayout cityData={cityData}>
      {children}
    </CityLayout>
  );
}
