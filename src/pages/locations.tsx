import { NextPage } from "next";
import Style from "../styles/Locations.module.scss"
import { Header } from "@/components/Header/Header";
import LocationsContainer from "@/components/LocationsContainer/LocationsContainer";
import Footer from "@/components/Footer/Footer";
import { useState } from "react";

const Locations: NextPage = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)
  
  return (
    <>
      <main className={`${Style.container} ${menuIsOpen === true ? `${Style.overlay}` : ``}`}>
        <Header menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />

        <LocationsContainer />
      </main>

      { menuIsOpen === false ? (<Footer />) : null }
    </>
  )
}

export default Locations