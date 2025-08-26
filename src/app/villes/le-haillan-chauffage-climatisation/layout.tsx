import { Metadata } from 'next';
import { getCityConfig } from '@/config/cities';
import { generateCityMetadata } from '@/components/CityLayout';
import CityLayout from '@/components/CityLayout';

export const metadata: Metadata = generateCityMetadata(
  getCityConfig('le-haillan-chauffage-climatisation')!
);

const cityData = getCityConfig('le-haillan-chauffage-climatisation')!;

export default function LeHaillanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CityLayout cityData={cityData}>{children}</CityLayout>;
}
