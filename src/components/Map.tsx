'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

// Fix for Leaflet default icon issues in Next.js
const DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface MapProps {
  center: [number, number];
  zoom: number;
}

export default function Map({ center, zoom }: MapProps) {
  return (
    <div className="h-[400px] w-full rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800">
      <MapContainer 
        center={center} 
        zoom={zoom} 
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center}>
          <Popup>
            Forum Investasi SULUT <br /> Sulawesi Utara.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
