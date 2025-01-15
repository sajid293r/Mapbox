import * as React from 'react';
import { useState, useEffect } from 'react';
import Map from 'react-map-gl';


function App() {
  const Token = process.env.REACT_APP_MAPBOX_TOKEN;

  const [isTablet, setIsTablet] = useState(window.innerWidth <= 1024);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    function handleResize() {
      setIsTablet(window.innerWidth <= 1024);
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const mapStyles = {
    width: isMobile ? '100%' : isTablet ? 'calc(50% - 20px)' : 750,
    height: isMobile || isTablet ? 'auto' : 350,
    margin: 10,
    borderRadius: 15,
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s ease'
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: 20 }}>
      <Map
        mapboxAccessToken={Token}
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5
        }}
        style={mapStyles}
        mapStyle="mapbox://styles/mapbox/outdoors-v12"
      />
      <Map
        mapboxAccessToken={Token}
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5
        }}
        style={mapStyles}
        mapStyle="mapbox://styles/mapbox/light-v11"
      />
      <Map
        mapboxAccessToken={Token}
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5
        }}
        style={mapStyles}
        mapStyle="mapbox://styles/mapbox/dark-v11"
      />
      <Map
        mapboxAccessToken={Token}
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5
        }}
        style={mapStyles}
        mapStyle="mapbox://styles/mapbox/outdoors-v12"
      />
      <Map
        mapboxAccessToken={Token}
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5
        }}
        style={mapStyles}
        mapStyle="mapbox://styles/mapbox/satellite-v9"
      />
      <Map
        mapboxAccessToken={Token}
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5
        }}
        style={mapStyles}
        mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
      />
      <Map
        mapboxAccessToken={Token}
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5
        }}
        style={mapStyles}
        mapStyle="mapbox://styles/mapbox/navigation-day-v1"
      />
      <Map
        mapboxAccessToken={Token}
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5
        }}
        style={mapStyles}
        mapStyle="mapbox://styles/mapbox/navigation-night-v1"
      />
    </div>
  );
}

export default App;

