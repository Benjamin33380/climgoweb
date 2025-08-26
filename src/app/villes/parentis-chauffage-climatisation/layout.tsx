import { Metadata } from 'next';
import { getCityConfig } from '@/config/cities';
import { generateCityMetadata } from '@/components/CityLayout';
import CityLayout from '@/components/CityLayout';

export const metadata: Metadata = generateCityMetadata(
  getCityConfig('parentis-chauffage-climatisation')!
);

export default function ParentisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cityData = getCityConfig('parentis-chauffage-climatisation')!;
  
  return (
    <CityLayout cityData={cityData}>
      {children}
    </CityLayout>
  );
}
