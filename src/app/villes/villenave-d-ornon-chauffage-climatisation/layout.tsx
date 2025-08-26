import { Metadata } from 'next';
import { getCityConfig } from '@/config/cities';
import { generateCityMetadata } from '@/components/CityLayout';
import CityLayout from '@/components/CityLayout';

export const metadata: Metadata = generateCityMetadata(
  getCityConfig('villenave-d-ornon-chauffage-climatisation')!
);

const cityData = getCityConfig('villenave-d-ornon-chauffage-climatisation')!;

export default function VillenaveDOrnonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CityLayout cityData={cityData}>{children}</CityLayout>;
}
