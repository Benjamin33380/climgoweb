import { Metadata } from 'next';
import { getCityConfig } from '@/config/cities';
import { generateCityMetadata } from '@/components/CityLayout';
import CityLayout from '@/components/CityLayout';

export const metadata: Metadata = generateCityMetadata(
  getCityConfig('saucats-chauffage-climatisation')!
);

export default function SaucatsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cityData = getCityConfig('saucats-chauffage-climatisation')!;
  
  return (
    <CityLayout cityData={cityData}>
      {children}
    </CityLayout>
  );
}
