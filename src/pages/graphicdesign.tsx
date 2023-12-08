import { NextPage } from "next";
import Style from "../styles/GraphicDesign.module.scss"
import { Header } from "@/components/Header/Header";
import TitleCard from "@/components/TitleCard/TitleCard";
import ProjectsContainer from "@/components/ProjectContainer/ProjectsContainer";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import Timbrown from "public/graphic-design-imgs/image-change.jpg"
import Boxedwater from "public/graphic-design-imgs/image-boxed-water.jpg"
import Science from "public/graphic-design-imgs/image-science.jpg"
import LinkCard from "@/components/LinkCard/LinkCard";
import AppDesignImage from "public/image-app-design.jpg"
import WebDesignImage from "public/image-web-design-large.jpg"
import Footer from "@/components/Footer/Footer";

const GraphicDesign: NextPage = () => {
  return (
    <>
    <main className={Style.container}>
      <Header />
      <TitleCard title="graphic design" text="We deliver eye-catching branding materials that are tailored to meet the business objectives." />

      <ProjectsContainer>
        <ProjectCard
          imageSrc={Timbrown.src}
          title="tim brown"
          description="A book cover designed for Tim Brown´s new release, 'Change'"
        />
        <ProjectCard
          imageSrc={Boxedwater.src}
          title="boxed water"
          description="A simple packaging concept made for Boxed Water"
        />
        <ProjectCard
          imageSrc={Science.src}
          title="SCIENCE!"
          description="A poster made in collaboration with the Federal Art Project"
        />
      </ProjectsContainer>

      <section className={Style.link_section}>
        <LinkCard
        cardImage={AppDesignImage.src}
        cardTitle="app design"
        cardLink="/appdesign"
        />
        <LinkCard
        cardImage={WebDesignImage.src}
        cardTitle="web design"
        cardLink="/webdesign"
        />
      </section>
    </main>
    <Footer />
  </>
  )
}

export default GraphicDesign