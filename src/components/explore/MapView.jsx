// src/components/MapView.jsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapView = ({ lat, lng, name }) => {
  const [position, setPosition] = useState([lat, lng]);

  useEffect(() => {
    setPosition([lat, lng]);
  }, [lat, lng]);

  return (
    <div className="w-full h-[300px] rounded-lg">
      <MapContainer
        center={position}
        zoom={14}
        scrollWheelZoom={false}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={new L.Icon.Default()}>
          <Popup>{name}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapView;
