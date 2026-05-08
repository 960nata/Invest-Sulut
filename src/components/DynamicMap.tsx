'use client';

import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => <div className="h-[500px] w-full bg-slate-100 animate-pulse rounded-2xl" />
});

interface DynamicMapProps {
  center: [number, number];
  zoom: number;
}

export default function DynamicMap(props: DynamicMapProps) {
  return <Map {...props} />;
}
