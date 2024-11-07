import React, { useState, useEffect, useRef } from "react";
import { Transaction } from "@mysten/sui/transactions";
import { useCurrentAccount, useSignAndExecuteTransaction, useSuiClient } from "@mysten/dapp-kit";
import { useNetworkVariable } from "../../utils/networkConfig";
import { useProperties } from "../../contexts/PropertyContext";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { OpenStreetMapProvider, GeoSearchControl } from 'leaflet-geosearch';
import 'leaflet-geosearch/dist/geosearch.css';
import "./addproperties.css";

function AddProperties() {
  const { addProperty } = useProperties();
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const searchControlRef = useRef(null);

  const currentAccount = useCurrentAccount();
  const realEstateICOPackageId = useNetworkVariable("realEstateICOPackageId");

  const suiClient = useSuiClient();
  const { mutate: signAndExecute } = useSignAndExecuteTransaction();

  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current) {
      mapInstanceRef.current = L.map(mapRef.current).setView([6.8667, 7.3833], 13); // Centered on Nsukka
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(mapInstanceRef.current);

      const provider = new OpenStreetMapProvider();
      searchControlRef.current = new GeoSearchControl({
        provider: provider,
        style: 'bar',
        showMarker: true,
        showPopup: false,
        autoClose: true,
        retainZoomLevel: false,
        animateZoom: true,
        keepResult: true,
        searchLabel: 'Search for location'
      });

      mapInstanceRef.current.addControl(searchControlRef.current);

      mapInstanceRef.current.on('click', function(e) {
        const latitude = e.latlng.lat.toFixed(6);
        const longitude = e.latlng.lng.toFixed(6);
        setLat(latitude);
        setLng(longitude);
      });

      mapInstanceRef.current.on('geosearch/showlocation', function(e) {
        setLat(e.location.y.toFixed(6));
        setLng(e.location.x.toFixed(6));
      });
    }

    return () => {
      if (mapInstanceRef.current) {
        if (searchControlRef.current) {
          mapInstanceRef.current.removeControl(searchControlRef.current);
        }
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  const convertToUnixTimestamp = (dateString) => {
    return Math.floor(new Date(dateString).getTime() / 1000);
  };

  const handleStartDateChange = (e) => {
    const date = e.target.value;
    setStartDate(date);
    console.log("Start Date (Unix Timestamp):", convertToUnixTimestamp(date));
  };

  const handleEndDateChange = (e) => {
    const date = e.target.value;
    setEndDate(date);
    console.log("End Date (Unix Timestamp):", convertToUnixTimestamp(date));
  };

  const createIdo = () => {
    let isFractional;
    if(file === "" || title === "" || price <= 0 || startDate === "" || endDate === "" || description === "" || lat === "" || lng === ""){
      return;
    }

    if(description === "land"){
      isFractional = false;
    } else {
      isFractional = true;
    }

    const tx = new Transaction();
    
    tx.moveCall({
      target: `${realEstateICOPackageId}::real_estate_ido::create_ido`,
      arguments: [
        tx.pure.address('0xc07806106468ad7e77577db4f8d0827a46ad1fd43632eb8231f431601620dde8'),
        tx.pure.address('0x8116b754b460db1c881bc9a98601a825a216d2ec07337ce27de3e23dc75a0a87'),
        tx.pure.string(title),
        tx.pure.string(file.name),
        tx.pure.string(description),
        tx.pure.u64(price),
        tx.pure.u64(convertToUnixTimestamp(startDate)),
        tx.pure.u64(convertToUnixTimestamp(endDate)),
        tx.pure.bool(isFractional),
        tx.pure.string(`a ${description} called ${title} valued at ${price}`),
        tx.pure.string(`on sui`),
        tx.pure.string(lat),
        tx.pure.string(lng),
      ]
    });

    tx.setGasBudget(20000000);

    signAndExecute(
      {
        transaction: tx,
      },
      {
        onSuccess: async() => {
          console.log("Property added");
        },
      }
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    createIdo();
  }

  return (
    <div className="add-properties-wrapper">
      <div className="add-properties">
        <div className="sub-head">
          <h1>Explore land</h1>
          <h3>
            Graso <span className="arrow"></span> {" > "}{" "}
            <span>Add properties</span>
          </h3>
        </div>

        <div className="input-container">
          <div className="input-box input-box1">
            <h1>
              Upload your property image here, please click "Upload Image"
              Button.
            </h1>
            <input
              type="file"
              className="image-input"
              accept="image/png, image/jpeg"
              placeholder="Supports JPG, PNG, Max file size: 10MB"
              onChange={(e) => {
                const file = e.target.files[0];
                setFile(file);
              }}  required
            />
          </div>

          <div className="input-box input-box2">
            <form onSubmit={handleSubmit}>
              <span>
                <h1>Title:</h1>
                <input
                  type="text"
                  placeholder="Property Title:"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </span>

              <span>
                <h1>Select property:</h1>
                <select
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                >
                  <option value="">Select Property</option>
                  <option value="land">Land</option>
                  <option value="landedProperty">Landed Property</option>
                </select>
              </span>

              <span>
                <h1>Price:</h1>
                <input
                  type="text"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
              </span>

              <span>
                <h1>Start Date:</h1>
                <input
                  type="date"
                  value={startDate}
                  onChange={handleStartDateChange}
                />
              </span>

              <span>
                <h1>End Date:</h1>
                <input
                  type="date"
                  value={endDate}
                  onChange={handleEndDateChange}
                />
              </span>

              <div className="map-wrapper">
                <h1>Fix Property Location on map:</h1>
                <div ref={mapRef} style={{ height: '400px', width: '100%' }}></div>
                <div className="coordinates-input">
                  <div className="coordinates">
                    <label htmlFor="latitude">Latitude</label>
                    <input
                      id="latitude"
                      value={lat}
                      onChange={(e) => setLat(e.target.value)}
                      placeholder="Click on the map" readOnly required
                    />
                  </div>
                  <div className="coordinates">
                    <label htmlFor="longitude">Longitude</label>
                    <input
                      id="longitude"
                      value={lng}
                      onChange={(e) => setLng(e.target.value)}
                      placeholder="Click on the map" readOnly required
                    />
                  </div>
                </div>
              </div>

              <button type="submit">Add Property</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProperties;