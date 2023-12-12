import { NextPage } from "next";
import Style from '../styles/Home.module.scss'
import { Header } from "@/components/Header/Header";
import MainCard from "@/components/MainCard/MainCard"
import LinkCard from "@/components/LinkCard/LinkCard";
import WebDesignImage from "public/image-web-design-large.jpg"
import AppDesignImage from "public/image-app-design.jpg"
import GraphicDesignImage from "public/image-graphic-design.jpg"
import Passionate from "public/illustration-passionate.svg"
import Resorceful from "public/illustration-resourceful.svg"
import Friendly from "/public/illustration-friendly.svg"
import Image from "next/image";
import BackgroundImage from "public/bg-pattern-hero-home.svg"
import Footer from "@/components/Footer/Footer";
import { useState } from "react";
import Head from "next/head";

const Home: NextPage = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page" />
      </Head>
      <main className={`${Style.container} ${menuIsOpen === true ? `${Style.overlay}` : ``}`}>
      <Header menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <MainCard />
      <section className={Style.link_section}>
        <LinkCard cardTitle="web design" cardImage={WebDesignImage.src} cardLink="/webdesign" />
        <LinkCard cardTitle="app design" cardImage={AppDesignImage.src} cardLink="/appdesign"/>
        <LinkCard cardTitle="graphics design" cardImage={GraphicDesignImage.src} cardLink="/graphicdesign" />
      </section>
      <section className={Style.image_section}>
        <div className={Style.image_section_container}>
          <div className={Style.img_container} style={{ backgroundImage: `url(${BackgroundImage.src})`}}>
            <Image src={Passionate.src} height={200} width={200} alt="passionate"/>
          </div>
          <div className={Style.text_content}>
            <h2>passionate</h2>
            <p>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
          </div>
        </div>
        <div className={Style.image_section_container}>
          <div className={Style.img_container} style={{ backgroundImage: `url(${BackgroundImage.src})`}}>
            <Image src={Resorceful.src} height={200} width={200} alt="resorceful"/>
          </div>
          <div className={Style.text_content}>
            <h2>resorceful</h2>
            <p>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
          </div>
        </div>
        <div className={Style.image_section_container}>
          <div className={Style.img_container} style={{ backgroundImage: `url(${BackgroundImage.src})`}}>
            <Image src={Friendly.src} height={200} width={200} alt="friendly"/>
          </div>
          <div className={Style.text_content}>
            <h2>friendly</h2>
            <p>We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
          </div>  
        </div>
      </section>
      </main>
      { menuIsOpen === false ? (<Footer />) : null }
    </>
  )
}

export default Home