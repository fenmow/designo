import { Header } from "@/components/Header/Header";
import { NextPage } from "next";
import Style from "../styles/WebDesign.module.scss"
import TitleCard from "@/components/TitleCard/TitleCard";
import ProjectsContainer from "@/components/ProjectContainer/ProjectsContainer";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import Express from "public/web-design-imgs/image-express.jpg"
import Transfer from "public/web-design-imgs/image-transfer.jpg"
import Photon from "public/web-design-imgs/image-photon.jpg"
import Builder from "public/web-design-imgs/image-builder.jpg"
import Blogr from "public/web-design-imgs/image-blogr.jpg"
import Camp from "public/web-design-imgs/image-camp.jpg"
import LinkCard from "@/components/LinkCard/LinkCard";
import AppDesignImage from "public/image-app-design.jpg"
import GraphicDesignImage from "public/image-graphic-design.jpg"
import Footer from "@/components/Footer/Footer";
import { useState } from "react";

const WebDesign: NextPage = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

  return (
    <>
      <main className={`${Style.container} ${menuIsOpen === true ? `${Style.overlay}` : ``}`}>
        <Header  menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
        <TitleCard title="web design" text="We build websites that serve as powerful marketing tools and bring memorable brand experiences." />

        <ProjectsContainer>
          <ProjectCard
            imageSrc={Express.src}
            title="express"
            description="A multi-carrier shipping website for ecommerce businesses"
          />
          <ProjectCard
            imageSrc={Transfer.src}
            title="transfer"
            description="Site for low-cost money transfers and sending money within seconds"
          />
          <ProjectCard
            imageSrc={Photon.src}
            title="photon"
            description="A state-of-the-art music player with high-resolution audio and DSP effects"
          />
          <ProjectCard
            imageSrc={Builder.src}
            title="builder"
            description="Connects users with local constractors based on their location"
          />
          <ProjectCard
            imageSrc={Blogr.src}
            title="blogr"
            description="Blogr is a platform for creating an online blog or publication"
          />
          <ProjectCard
            imageSrc={Camp.src}
            title="camp"
            description="Get expert training in coding, data, design, and digital marketing"
          />
        </ProjectsContainer>

        <section className={Style.link_section}>
          <LinkCard
          cardImage={AppDesignImage.src}
          cardTitle="app design"
          cardLink="/appdesign"
          />
          <LinkCard
          cardImage={GraphicDesignImage.src}
          cardTitle="graphic design"
          cardLink="/graphicdesign"
          />
        </section>
      </main>
      { menuIsOpen === false ? (<Footer />) : null }
    </>
  )
}

export default WebDesign