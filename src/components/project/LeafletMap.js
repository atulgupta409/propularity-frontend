import React from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";

function LeafletMap({ latitude, longitude, name }) {
  const position = [latitude, longitude];

  return (
    <div>
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "440px", borderRadius: "20px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>{name}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default LeafletMap;
