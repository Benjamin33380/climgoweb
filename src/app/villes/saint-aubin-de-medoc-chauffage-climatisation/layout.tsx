import { Metadata } from 'next';
import { getCityConfig } from '@/config/cities';
import { generateCityMetadata } from '@/components/CityLayout';
import CityLayout from '@/components/CityLayout';

export const metadata: Metadata = generateCityMetadata(
  getCityConfig('saint-aubin-de-medoc-chauffage-climatisation')!
);

const cityData = getCityConfig('saint-aubin-de-medoc-chauffage-climatisation')!;

export default function SaintAubinDeMedocLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CityLayout cityData={cityData}>{children}</CityLayout>;
}
