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
    <div className='relative h-screen'>
      <Map />
      <div className="absolute bg-black/50 -p-0.5 px-1 pl-4 rounded-tl-3xl bottom-0 right-0 z-[9999]">
        <a href="https://github.com/robertarnorsson" target="_blank" rel="noopener noreferrer" className="text-white text-xs hover:text-gray-400 transition duration-300">Robert Arnorsson</a>
      </div>
    </div>
  );
}