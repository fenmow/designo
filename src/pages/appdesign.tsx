import { Header } from "@/components/Header/Header";
import LinkCard from "@/components/LinkCard/LinkCard";
import ProjectsContainer from "@/components/ProjectContainer/ProjectsContainer";
import TitleCard from "@/components/TitleCard/TitleCard";
import { NextPage } from "next";
import Style from "../styles/AppDesign.module.scss"
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import Footer from "@/components/Footer/Footer";
import Airfilter from "public/app-design-imgs/image-airfilter.jpg"
import Eyecam from "public/app-design-imgs/image-eyecam.jpg"
import Faceit from "public/app-design-imgs/image-faceit.jpg"
import Todo from "public/app-design-imgs/image-todo.jpg"
import Loopstudios from "public/app-design-imgs/image-loopstudios.jpg"
import WebDesignImage from "public/image-web-design-large.jpg" 
import GraphicDesignImage from "public/image-graphic-design.jpg"
import { useState } from "react";

const AppDesign: NextPage = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

  return (
    <>
      <main className={`${Style.container} ${menuIsOpen === true ? `${Style.overlay}` : ``}`}>
        <Header menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
        <TitleCard title="app design" text="Our mobile designs bring intuitive digital solutions to your customers right at ther fingertips." />

        <ProjectsContainer>
          <ProjectCard
            imageSrc={Airfilter.src}
            title="airfiter"
            description="Solving the problem of poor indoor air quality by filtering the air"
          />
          <ProjectCard
            imageSrc={Eyecam.src}
            title="eyecam"
            description="Product that lets you edit your favorite photos and videos at any time"
          />
          <ProjectCard
            imageSrc={Faceit.src}
            title="faceit"
            description="Get to meet your favorite internet superstar with the faceit app"
          />
          <ProjectCard
            imageSrc={Todo.src}
            title="todo"
            description="A todo app that features cloud sync with light and dark mode"
          />
          <ProjectCard
            imageSrc={Loopstudios.src}
            title="loopstudios"
            description="A VR experience app made for Loopstudios"
          />
        </ProjectsContainer>

        <section className={Style.link_section}>
          <LinkCard
          cardImage={WebDesignImage.src}
          cardTitle="web design"
          cardLink="/webdesign"
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

export default AppDesign