import { Header } from "@/components/Header/Header";
import { NextPage } from "next";
import Style from "../styles/About.module.scss"
import Image from "next/image";
import ImageHero from "public/about-imgs/image-about-hero.jpg"
import ImageHeroTablet from "public/about-imgs/image-about-hero-tablet.jpg"
import ImageHeroMobile from "public/about-imgs/image-about-hero-mobile.jpg"
import ImageWorldClassTalent from "public/about-imgs/image-world-class-talent.jpg"
import ImageWorldClassTalentTablet from "public/about-imgs/image-world-class-talent-tablet.jpg"
import ImageWorldClassTalentMobile from "public/about-imgs/image-world-class-talent-mobile.jpg"
import ImageRealDeal from "public/about-imgs/image-real-deal.jpg"
import ImageRealDealTablet from "public/about-imgs/image-real-deal-tablet.jpg"
import ImageRealDealMobile from "public/about-imgs/image-real-deal-mobile.jpg"
import BgImage from "public/bg-pattern-hero-home.svg"
import LocationCards from "@/components/LocationCards/LocationCards";
import Footer from "@/components/Footer/Footer";
import { useState } from "react";
import Head from "next/head";

const About: NextPage = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)
  
  return (
    <>
    <Head>
      <title>About Us</title>
      <meta name="description" content="About Our Company" />
    </Head>
      <main className={`${Style.container} ${menuIsOpen === true ? `${Style.overlay}` : ``}`}>
        <Header menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />

        <section className={Style.main_about_card}>
          <div className={Style.text_content} style={{ backgroundImage: `url(${BgImage.src})` }}>
            <h1>about us</h1>
            <p>Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.</p>
          </div>
          
          <picture>
            <source media="(min-width: 1024px)" srcSet={ImageHero.src}/>
            <source media="(min-width: 640px)" srcSet={ImageHeroTablet.src}/>
            <Image className={Style.image_content} src={ImageHeroMobile.src} alt="About Us" height={400} width={440}></Image>
          </picture>
        </section>


        <section className={`${Style.main_about_card} ${Style.world_class_about_card}`}>
        <picture>
            <source media="(min-width: 1024px)" srcSet={ImageWorldClassTalent.src}/>
            <source media="(min-width: 640px)" srcSet={ImageWorldClassTalentTablet.src} />
            <Image className={`${Style.image_content} ${Style.image_content_world_class}`} src={ImageWorldClassTalentMobile.src} alt="About Us" height={400} width={440}></Image>
          </picture>
          
          <div className={Style.text_content}>
            <h1>World-class talent</h1>
            <p>We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.</p>
            <p>Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.</p>
          </div>
        </section>
        
        <LocationCards />

        <section className={`${Style.main_about_card} ${Style.world_class_about_card} ${Style.real_deal_card}`}>          
          <div className={Style.text_content}>
            <h1>The real deal</h1>
            <p>As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.</p>
            <p>We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.</p>
          </div>

          <picture>
            <source media="(min-width: 1024px)" srcSet={ImageRealDeal.src}/>
            <source media="(min-width: 640px)" srcSet={ImageRealDealTablet.src}/>
            <Image className={`${Style.image_content}`} src={ImageRealDealMobile.src} alt="About Us" height={400} width={440}></Image>
          </picture>
        </section>
      </main>

      { menuIsOpen === false ? (<Footer />) : null }
    </>
  )
}

export default About