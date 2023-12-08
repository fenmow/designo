import Image from "next/image"
import Style from "./LocationCards.module.scss"
import Canada from "/public/locations_illustrations/illustration-canada.svg"
import Australia from "/public/locations_illustrations/illustration-australia.svg"
import Uk from "/public/locations_illustrations/illustration-united-kingdom.svg"
import BackgroundImage from "public/bg-pattern-hero-home.svg"
import Link from "next/link"

const LocationCards: React.FC = () => {
  return (
    <section className={Style.links_row}>
      <div className={Style.link_card}>
        <div className={Style.image_container} style={{ backgroundImage: `url(${BackgroundImage.src})` }}>
          <Image src={Canada.src} alt="canada" height={220} width={220}></Image>
        </div>
        <h1>canada</h1>
        <Link href='/locations'>
          <button>see location</button>
        </Link>
      </div>
      <div className={Style.link_card}>
        <div className={Style.image_container} style={{ backgroundImage: `url(${BackgroundImage.src})` }}>
          <Image src={Australia.src} alt="australia" height={220} width={220}></Image>
        </div>
        <h1>australia</h1>
        <Link href='/locations'>
          <button>see location</button>
        </Link>
      </div>
      <div className={Style.link_card}>
        <div className={Style.image_container} style={{ backgroundImage: `url(${BackgroundImage.src})` }}>
          <Image src={Uk.src} alt="united kingdom" height={220} width={220}></Image>
        </div>
        <h1>united kingdom</h1>
        <Link href='/locations'>
          <button>see location</button>
        </Link>
      </div>
    </section>
  )
}

export default LocationCards