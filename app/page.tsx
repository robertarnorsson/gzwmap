"use client";

import dynamic from 'next/dynamic';
import { useMemo } from 'react';

export default function MyPage() {
  const Map = useMemo(() => dynamic(
    () => import('@/components/map'), { 
      loading: () => <p>A map is loading</p>,
      ssr: false,
    }
  ), [])

  return (
    <div>
      <Map />
    </div>
  )
}