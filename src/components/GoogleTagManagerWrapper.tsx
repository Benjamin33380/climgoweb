'use client';

import dynamic from 'next/dynamic';

const GoogleTagManager = dynamic(() => import('@/components/GoogleTagManager'), {
  ssr: false,
  loading: () => null
});

export default function GoogleTagManagerWrapper() {
  return <GoogleTagManager />;
} 