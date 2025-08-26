import { Metadata } from 'next';
import { getCityConfig } from '@/config/cities';
import { generateCityMetadata } from '@/components/CityLayout';
import CityLayout from '@/components/CityLayout';

export const metadata: Metadata = generateCityMetadata(
  getCityConfig('merignac-chauffage-climatisation')!
);

export default function MerignacLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cityData = getCityConfig('merignac-chauffage-climatisation')!;
  
  return (
    <CityLayout cityData={cityData}>
      {children}
    </CityLayout>
  );
}
