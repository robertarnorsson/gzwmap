"use client";

import dynamic from 'next/dynamic';
import { useMemo } from 'react';


export default function Page() {
  const Map = useMemo(() => dynamic(
    () => import('@/components/map/map'), { 
      loading: () => (
        <div className='w-full h-full flex justify-center items-center'>
          <p>Loading map</p>
        </div>
      ),
      ssr: false,
    }
  ), [])

  return (
    <div className='h-screen'>
      <Map />
    </div>
  );
}