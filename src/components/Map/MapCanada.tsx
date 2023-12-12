import { MapContainer, TileLayer } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import Style from "./Map.module.scss"

const MapCanada = () => {

  return (
  <MapContainer
  className={Style.map} 
  center={[43.646041, -79.38574]} 
  zoom={13} 
  scrollWheelZoom={true}
  style={{ height: '298px', borderRadius: '.8em' }}
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  </MapContainer>
  )
}

export default MapCanada