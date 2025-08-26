import { Metadata } from 'next';
import { getCityConfig } from '@/config/cities';
import { generateCityMetadata } from '@/components/CityLayout';
import CityLayout from '@/components/CityLayout';

export const metadata: Metadata = generateCityMetadata(
  getCityConfig('le-barp-chauffage-climatisation')!
);

export default function Le-barpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cityData = getCityConfig('le-barp-chauffage-climatisation')!;
  
  return (
    <CityLayout cityData={cityData}>
      {children}
    </CityLayout>
  );
}
