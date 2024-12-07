import { useLocation, useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { mapData } = location.state;

  return (
    <>
    
      <div className="w-full p-4 map_page">
        <button 
          onClick={() => navigate(-1)} 
          className="bg-white text-[#24c2a5] px-4 py-2 rounded mb-4"
        >
          Back
        </button>
        <h1 className="text-2xl text-white font-bold mb-4">{mapData.title} - Location</h1>
        <div className="h-[calc(100vh-100px)] w-full">
          <MapContainer center={[mapData.latitude, mapData.longitude]} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[mapData.latitude, mapData.longitude]}>
              <Popup>
                {mapData.name}
                <br />
                {mapData.location}
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  );
}
