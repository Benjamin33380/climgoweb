import { Metadata } from 'next';
import { getCityConfig } from '@/config/cities';
import { generateCityMetadata } from '@/components/CityLayout';
import CityLayout from '@/components/CityLayout';

export const metadata: Metadata = generateCityMetadata(
  getCityConfig('le-bouscat-chauffage-climatisation')!
);

export default function Le-bouscatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cityData = getCityConfig('le-bouscat-chauffage-climatisation')!;
  
  return (
    <CityLayout cityData={cityData}>
      {children}
    </CityLayout>
  );
}
