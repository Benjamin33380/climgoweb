import { Metadata } from 'next';
import { getCityConfig } from '@/config/cities';
import { generateCityMetadata } from '@/components/CityLayout';
import CityLayout from '@/components/CityLayout';

export const metadata: Metadata = generateCityMetadata(
  getCityConfig('audenge-chauffage-climatisation')!
);

export default function AudengeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cityData = getCityConfig('audenge-chauffage-climatisation')!;
  
  return (
    <CityLayout cityData={cityData}>
      {children}
    </CityLayout>
  );
}
