import Style from "./LocationsContainer.module.scss"
import CanadaMapImage from "public/locations-imgs/image-map-canada.png"
import CanadaMapImageTablet from "public/locations-imgs/image-map-canada-tablet.png"
import UkMapImage from "public/locations-imgs/image-map-uk.png"
import UkMapImageTablet from "public/locations-imgs/image-map-uk-tablet.png"
import AustraliaMapImage from "public/locations-imgs/image-map-australia.png"
import AustraliaMapImageTablet from "public/locations-imgs/image-map-australia-tablet.png"
import Image from "next/image"


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
        <picture>
          <source media="(min-width: 1024px)" srcSet={CanadaMapImage.src}/>
          <Image className={Style.image} src={CanadaMapImageTablet} alt="canada" height={280} width={280}></Image>
        </picture>
      </div>

      <div className={Style.location_image}>
        <picture>
          <source media="(min-width: 1024px)" srcSet={AustraliaMapImage.src}/>
          <Image className={Style.image} src={AustraliaMapImageTablet} alt="australia" height={280} width={280}></Image>
        </picture>
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
        <picture>
          <source media="(min-width: 1024px)" srcSet={UkMapImage.src}/>
          <Image className={Style.image} src={UkMapImageTablet} alt="canada" height={280} width={280}></Image>
        </picture>
      </div>
    </section>
  )
}

export default LocationsContainer