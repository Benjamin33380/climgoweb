import { Metadata } from 'next';
import { getCityConfig } from '@/config/cities';
import { generateCityMetadata } from '@/components/CityLayout';
import CityLayout from '@/components/CityLayout';

export const metadata: Metadata = generateCityMetadata(
  getCityConfig('eysines-chauffage-climatisation')!
);

export default function EysinesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cityData = getCityConfig('eysines-chauffage-climatisation')!;
  
  return (
    <CityLayout cityData={cityData}>
      {children}
    </CityLayout>
  );
}
