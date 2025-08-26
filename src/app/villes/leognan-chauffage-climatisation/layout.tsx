import { Metadata } from 'next';
import { getCityConfig } from '@/config/cities';
import { generateCityMetadata } from '@/components/CityLayout';
import CityLayout from '@/components/CityLayout';

export const metadata: Metadata = generateCityMetadata(
  getCityConfig('leognan-chauffage-climatisation')!
);

export default function LeognanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cityData = getCityConfig('leognan-chauffage-climatisation')!;
  
  return (
    <CityLayout cityData={cityData}>
      {children}
    </CityLayout>
  );
}
