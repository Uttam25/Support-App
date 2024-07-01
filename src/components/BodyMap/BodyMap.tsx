"use client";

// pages/map.js

import React, { useState } from "react";
import { GoogleMap, LoadScript, Polygon } from "@react-google-maps/api";

type Coordinate = {
  lat: number;
  lng: number;
};

const stateCoordinates: Record<string, Coordinate[]> = {
  California: [
    { lat: 32.5121, lng: -117.3397 },
    { lat: 42.0126, lng: -114.1312 },
    // Add more points for California...
  ],
  Texas: [
    { lat: 25.8371, lng: -106.6456 },
    { lat: 36.5007, lng: -93.5085 },
    // Add more points for Texas...
  ],
  // Add more states...
};

const BodyMap = () => {
  const [center, setCenter] = useState({ lat: 37.0902, lng: -95.7129 }); // Center of USA
  const [zoom, setZoom] = useState(4);

  const handleStateClick = (coordinates: Coordinate[]) => {
    // Calculate the center of the state
    const latitudes = coordinates.map((coord) => coord.lat);
    const longitudes = coordinates.map((coord) => coord.lng);
    const centerLat = (Math.max(...latitudes) + Math.min(...latitudes)) / 2;
    const centerLng = (Math.max(...longitudes) + Math.min(...longitudes)) / 2;

    setCenter({ lat: centerLat, lng: centerLng });
    setZoom(7); // Adjust zoom level as needed
  };

  return (
    <>
      <div className="bg-[#fff] mx-auto flex flex-col">
        <LoadScript googleMapsApiKey="AIzaSyDb6hutfoAAWbW3_qJAP2leiWpaQjfah0Q">
          <GoogleMap
            mapContainerStyle={{
              width: "50%",
              height: "100vh",
              backgroundColor: "white",
            }}
            center={center}
            zoom={zoom}
          >
          </GoogleMap>
        </LoadScript>
      </div>

      <div className="flex flex-col">
        <h1>State Map</h1>
      </div>
    </>
  );
};

export default BodyMap;
