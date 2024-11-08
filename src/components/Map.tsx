"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression, LatLngTuple } from "leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

interface MapProps {
  posix: LatLngExpression | LatLngTuple;
  zoom?: number;
}

const defaults = {
  zoom: 19,
};

const Map = (Map: MapProps) => {
  const { zoom = defaults.zoom, posix } = Map;
  const customIcon = new L.Icon({
    iconUrl: "/static/logoWhite.svg",
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -30],
  });

  return (
    <MapContainer
      center={posix}
      zoom={zoom}
      scrollWheelZoom={true}
      className="h-[500px] w-[100%] lg:w-[860px] lg:h-[560px]"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={posix} draggable={false} icon={customIcon}>
        <Popup>Vanilla Tattoo Concept</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
