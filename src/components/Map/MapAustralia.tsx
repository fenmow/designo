import { MapContainer, TileLayer } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import Style from "./Map.module.scss"

const MapAustralia = () => {

  return (
  <MapContainer 
  className={Style.map} 
  center={[-31.646544, 152.794124]} 
  zoom={13} 
  scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  </MapContainer>
  )
}

export default MapAustralia