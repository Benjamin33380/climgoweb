import { Metadata } from 'next';
import { getCityConfig } from '@/config/cities';
import { generateCityMetadata } from '@/components/CityLayout';
import CityLayout from '@/components/CityLayout';

export const metadata: Metadata = generateCityMetadata(
  getCityConfig('pessac-chauffage-climatisation')!
);

export default function PessacLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cityData = getCityConfig('pessac-chauffage-climatisation')!;
  
  return (
    <CityLayout cityData={cityData}>
      {children}
    </CityLayout>
  );
}
