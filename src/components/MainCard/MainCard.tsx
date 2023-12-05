import Link from "next/link"
import Style from "./MainCard.module.scss"
import Image from "next/image"
import PhoneImage from "public/image-hero-phone.png"

const MainCard: React.FC = () => {
  return (
    <div className={Style.main_card}>
      <svg className={Style.background_image} width="640" height="639" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a"><stop stop-color="#5D0202" stop-opacity="0" offset="0%"/><stop stop-color="#5D0202" stop-opacity=".498" offset="100%"/></linearGradient></defs><circle fill="url(#a)" transform="matrix(0 -1 -1 0 640 640)" cx="320" cy="320" r="320" fill-rule="evenodd" opacity=".309"/></svg>
      <div className={Style.info_Side}>
        <h1>Award-winning custom designs and digital branding solutions</h1>
        <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
        <Link href="/company">
          <button className={Style.cardBtn}>learn more</button>
        </Link>
      </div>
      <div className={Style.image_Side  }>
          <Image className={Style.image} src={PhoneImage} height={500} width={400} alt="phone image"></Image>
      </div>
    </div>
  )
}

export default MainCard