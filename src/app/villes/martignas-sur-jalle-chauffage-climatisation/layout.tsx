import { Metadata } from 'next';
import { getCityConfig } from '@/config/cities';
import { generateCityMetadata } from '@/components/CityLayout';
import CityLayout from '@/components/CityLayout';

export const metadata: Metadata = generateCityMetadata(
  getCityConfig('martignas-sur-jalle-chauffage-climatisation')!
);

const cityData = getCityConfig('martignas-sur-jalle-chauffage-climatisation')!;

export default function MartignasSurJalleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CityLayout cityData={cityData}>{children}</CityLayout>;
}
