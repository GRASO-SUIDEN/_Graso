import { useLocation } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export default function MapPage() {
  const location = useLocation();
  const { mapData } = location.state;

  return (
    <div className="h-screen w-full p-4">
      <h1 className="text-2xl font-bold mb-4">{mapData.name} - Location</h1>
      <div className="h-[calc(100vh-100px)] w-full">
        <MapContainer center={[mapData.coordinates.lat, mapData.coordinates.lng]} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[mapData.coordinates.lat, mapData.coordinates.lng]}>
            <Popup>
              {mapData.name}
              <br />
              {mapData.location}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}