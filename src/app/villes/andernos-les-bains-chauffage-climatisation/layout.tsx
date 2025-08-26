import { Metadata } from 'next';
import { getCityConfig } from '@/config/cities';
import { generateCityMetadata } from '@/components/CityLayout';
import CityLayout from '@/components/CityLayout';

export const metadata: Metadata = generateCityMetadata(
  getCityConfig('andernos-les-bains-chauffage-climatisation')!
);

export default function AndernosLesBainsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cityData = getCityConfig('andernos-les-bains-chauffage-climatisation')!;
  
  return (
    <CityLayout cityData={cityData}>
      {children}
    </CityLayout>
  );
}
