import React, { useEffect, useRef, useCallback } from "react";
import mapboxgl from "mapbox-gl";

const MapComponent: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  const initializeMap = useCallback(() => {
    if (!mapContainer.current || mapRef.current) return;

    const accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
    if (!accessToken) {
      console.error('Mapbox access token is required');
      return;
    }

    mapboxgl.accessToken = accessToken;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/minhdapham/cmh8fefsb00a901qpe6y1b3u2",
      center: [-74.0060152, 40.7127281], // NYC coordinates
      zoom: 15,
      maxZoom: 20,
      pitch: 0,
      bearing: 0,
    });

    // Add navigation controls
    const navigationControl = new mapboxgl.NavigationControl({
      showCompass: false,
      showZoom: true,
    });
    map.addControl(navigationControl, "top-right");

    // Add geolocation control
    const geolocateControl = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
      showUserHeading: true,
    });
    map.addControl(geolocateControl, "top-right");

    mapRef.current = map;
  }, []);

  // Initialize the map when the component mounts 
  // Don't have to re-initialize the map when the component re-renders
  useEffect(() => {
    initializeMap();

    // Cleanup function
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [initializeMap]);

  return (
    <div
      ref={mapContainer}
      style={{ 
        position: "absolute", 
        top: 0, 
        bottom: 0, 
        width: "100%" 
      }}
      className="map-container"
    />
  );
};

export default MapComponent;