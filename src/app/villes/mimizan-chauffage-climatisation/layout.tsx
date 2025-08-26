import { Metadata } from 'next';
import { getCityConfig } from '@/config/cities';
import { generateCityMetadata } from '@/components/CityLayout';
import CityLayout from '@/components/CityLayout';

export const metadata: Metadata = generateCityMetadata(
  getCityConfig('mimizan-chauffage-climatisation')!
);

export default function MimizanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cityData = getCityConfig('mimizan-chauffage-climatisation')!;
  
  return (
    <CityLayout cityData={cityData}>
      {children}
    </CityLayout>
  );
}
