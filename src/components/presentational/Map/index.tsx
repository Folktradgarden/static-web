import * as L from "leaflet"
import React, { FC } from "react"
import { MapContainer, Marker, TileLayer } from "react-leaflet"
import markerIcon from "../../../../static/images/marker.png"
import { MapRoot } from "./styled"

const url =
  "https://api.mapbox.com/styles/v1/maxbekkhus/cki5563ue1hoc19rnrxeu0v5q/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWF4YmVra2h1cyIsImEiOiJja2k1Nm1iMmQzaTRpMnJwNWpjZjVrZDVyIn0.FXS3jOGpTJ-idJRZXpbCPA"

const centerPosition: L.LatLngTuple = [58.393181196361, 15.603732328477589]
const markerPosition: L.LatLngTuple = [58.393181196361, 15.603732328477589]

let icon: L.Icon | undefined

if (typeof window !== "undefined") {
  icon = new L.Icon({
    iconUrl: markerIcon,
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50],
  })
}

const Map: FC = () => {
  const renderLeaflet = () => {
    if (typeof window !== undefined) {
      return (
        <MapContainer
          center={centerPosition}
          zoom={30}
          style={{ height: "100%", zIndex: 0 }}
          dragging={false}
          maxZoom={15}
          minZoom={15}
          boxZoom={false}
          touchZoom={false}
          scrollWheelZoom={false}
          keyboard={false}
          doubleClickZoom={false}
          zoomControl={false}
        >
          <TileLayer url={url} />
          <Marker position={markerPosition} icon={icon} />
        </MapContainer>
      )
    }
  }

  return <MapRoot>{renderLeaflet()}</MapRoot>
}

export default Map
