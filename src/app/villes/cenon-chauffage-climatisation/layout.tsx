import { Metadata } from 'next';
import { getCityConfig } from '@/config/cities';
import { generateCityMetadata } from '@/components/CityLayout';
import CityLayout from '@/components/CityLayout';

export const metadata: Metadata = generateCityMetadata(
  getCityConfig('cenon-chauffage-climatisation')!
);

export default function CenonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cityData = getCityConfig('cenon-chauffage-climatisation')!;
  
  return (
    <CityLayout cityData={cityData}>
      {children}
    </CityLayout>
  );
}
