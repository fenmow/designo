import Style from "./LocationsContainer.module.scss"
import CanadaMapImage from "public/locations-imgs/image-map-canada.png"
import CanadaMapImageTablet from "public/locations-imgs/image-map-canada-tablet.png"
import UkMapImage from "public/locations-imgs/image-map-uk.png"
import UkMapImageTablet from "public/locations-imgs/image-map-uk-tablet.png"
import AustraliaMapImage from "public/locations-imgs/image-map-australia.png"
import AustraliaMapImageTablet from "public/locations-imgs/image-map-australia-tablet.png"
import Image from "next/image"
import dynamic from "next/dynamic"


const MapCanada = dynamic(() => import('@/components/Map/MapCanada'), {
  ssr: false
})

const MapAustralia = dynamic(() => import('@/components/Map/MapAustralia'), {
  ssr: false
})

const MapUk = dynamic(() => import('@/components/Map/MapUk'), {
  ssr: false
})

const LocationsContainer: React.FC = () => {
  return (
    <section className={Style.locations_container}>
      <div className={`${Style.location_details} ${Style.mobile_card_margin}`}>
        <h1>canada</h1>
        <div className={Style.main_info}>
          <div className={Style.location_info}>
            <span className={Style.info_title}>designo central office</span>
            <span>3886 Wellington Street</span>
            <span>Toronto, Ontario M9C 3J5</span>
          </div>
          <div className={Style.contact_info}>
            <span className={Style.info_title}>contact</span>
            <span>P: +1253-863-8967</span>
            <span>M: contact@designo.co</span>
          </div>
        </div>
      </div>
      <div className={`${Style.location_image} ${Style.canada_image_position}`}>
        <MapCanada />
      </div>

      <div className={Style.location_image}>
        <MapAustralia />
      </div>
      <div className={`${Style.location_details} ${Style.mobile_card_margin}`}>
        <h1>australia</h1>
        <div className={Style.main_info}>
          <div className={Style.location_info}>
            <span className={Style.info_title}>Designo AU Office</span>
            <span>19 Balonne Street</span>
            <span>New South Wales 2443</span>
          </div>
          <div className={Style.contact_info}>
            <span className={Style.info_title}>contact</span>
            <span>P: (02) 6720 9092</span>
            <span>M: contact@designo.au</span>
          </div>
        </div>
      </div>

      <div className={Style.location_details}>
        <h1>united kingdom</h1>
        <div className={Style.main_info}>
          <div className={Style.location_info}>
            <span className={Style.info_title}>designo UK office</span>
            <span>13 Colorado Way</span>
            <span>Rhyd-y-fro SA8 9GA</span>
          </div>
          <div className={Style.contact_info}>
            <span className={Style.info_title}>contact</span>
            <span>P: 078 3115 1400</span>
            <span>M: contact@designo.uk</span>
          </div>
        </div>
      </div>
      <div className={`${Style.location_image} ${Style.uk_image_position}`}>
        <MapUk />
      </div>
    </section>
  )
}

export default LocationsContainer