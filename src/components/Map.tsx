import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface MapProps {
  lat: number;
  lng: number;
  zoom?: number;
}

export default function Map({ lat, lng, zoom = 14 }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY', // Replace with your API key
      version: 'weekly',
    });

    loader.load().then(() => {
      if (mapRef.current) {
        const map = new google.maps.Map(mapRef.current, {
          center: { lat, lng },
          zoom,
          styles: [
            {
              featureType: 'poi',
              elementType: 'labels',
              stylers: [{ visibility: 'off' }],
            },
          ],
        });

        new google.maps.Marker({
          position: { lat, lng },
          map,
        });
      }
    });
  }, [lat, lng, zoom]);

  return <div ref={mapRef} className="w-full h-[400px] rounded-lg" />;
}