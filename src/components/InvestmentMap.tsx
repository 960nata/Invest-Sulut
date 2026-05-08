'use client';

import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { isWebGLSupported } from '@/lib/webgl';
import dynamic from 'next/dynamic';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Leaflet Fallback
const LeafletMap = dynamic(() => import('./Map'), { ssr: false });

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

interface ProjectPin {
  id: string;
  name: string;
  sector: string;
  value: string;
  status: string;
  location?: string;
  coordinates: [number, number];
}

const mockProjects: ProjectPin[] = [
  { id: '1', name: 'KEK Likupang', sector: 'Tourism', value: 'IDR 2.1T', status: 'Ready', coordinates: [125.1000, 1.7000] },
  { id: '2', name: 'Bitung Port', sector: 'Infrastructure', value: 'IDR 4.5T', status: 'Pipeline', coordinates: [125.1800, 1.4400] },
  { id: '3', name: 'Solar Farm', sector: 'Energy', value: 'IDR 850B', status: 'Study', coordinates: [124.9000, 1.2500] },
];

export default function InvestmentMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null);

  useEffect(() => {
    setWebglSupported(isWebGLSupported());
  }, []);

  useEffect(() => {
    if (webglSupported && mapContainer.current && !map.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [124.8421, 1.4748],
        zoom: 9,
      });

      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      mockProjects.forEach((project) => {
        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
          <div class="p-2 min-w-[150px]">
            <h3 class="font-bold text-sm mb-1">${project.name}</h3>
            <div class="text-xs text-slate-500 mb-2">${project.sector} • ${project.location || 'North Sulawesi'}</div>
            <div class="flex justify-between items-center">
              <span class="text-[10px] font-bold text-blue-600">${project.value}</span>
              <span class="text-[10px] px-1.5 py-0.5 bg-slate-100 rounded">${project.status}</span>
            </div>
            <a href="/investment/projects/${project.id}" class="block mt-2 text-center text-[10px] font-bold text-white bg-blue-600 py-1 rounded">View Project</a>
          </div>
        `);

        new mapboxgl.Marker({ color: '#2563eb' })
          .setLngLat(project.coordinates)
          .setPopup(popup)
          .addTo(map.current!);
      });
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [webglSupported]);

  if (webglSupported === false) {
    return (
      <div className="h-[600px] w-full rounded-2xl overflow-hidden border border-slate-200">
        <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur p-2 rounded text-xs font-bold text-slate-500 border">
          WebGL not supported - Using Leaflet fallback
        </div>
        <LeafletMap center={[1.4748, 124.8421]} zoom={10} />
      </div>
    );
  }

  return (
    <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-inner border border-slate-200 dark:border-slate-800">
      <div ref={mapContainer} className="h-full w-full" />
    </div>
  );
}
