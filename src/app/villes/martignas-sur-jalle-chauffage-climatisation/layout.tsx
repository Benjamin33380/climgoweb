import { Metadata } from 'next';
import { getCityConfig } from '@/config/cities';
import { generateCityMetadata } from '@/components/CityLayout';
import CityLayout from '@/components/CityLayout';

export const metadata: Metadata = generateCityMetadata(
  getCityConfig('martignas-sur-jalle-chauffage-climatisation')!
);

export default function Martignas-sur-jalleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cityData = getCityConfig('martignas-sur-jalle-chauffage-climatisation')!;
  
  return (
    <CityLayout cityData={cityData}>
      {children}
    </CityLayout>
  );
}
