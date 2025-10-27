// src/components/MapComponent.tsx
import React, { useEffect, useRef } from "react";
import mapboxgl, { GeoJSONSource } from "mapbox-gl";

interface MovingObject {
  id: number;
  name: string;
  coordinates: number[];
}

const MapComponent: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);

  const movingObjects: MovingObject[] = [
    // Define your moving objects here
  ];

  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
    if (mapContainer.current) {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/minhdapham/cmh8fefsb00a901qpe6y1b3u2",
        center: [-74.0060152, 40.7127281],
        zoom: 15,
        maxZoom: 20,
        pitch: 60,
        bearing: 0,
      });

      // Add zoom controls
      map.addControl(new mapboxgl.NavigationControl(), "top-left");

      // Add your custom markers and lines here

      // Clean up on unmount
      return () => map.remove();
    }
  }, []);

  return (
    <div
      ref={mapContainer}
      style={{ position: "absolute", top: 0, bottom: 0, width: "100%" }}
    />
  );
};

export default MapComponent;
