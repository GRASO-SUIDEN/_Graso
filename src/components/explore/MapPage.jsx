import { useLocation, useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Navbar from '../navbar/NavBar';

export default function MapPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { mapData } = location.state;

  return (
    <>
      <Navbar />
      <div className="w-full p-4 map_page">
        <button 
          onClick={() => navigate(-1)} 
          className="bg-white text-[#24c2a5] px-4 py-2 rounded mb-4"
        >
          Back
        </button>
        <h1 className="text-2xl text-white font-bold mb-4">{mapData.name} - Location</h1>
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
    </>
  );
}
