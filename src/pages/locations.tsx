import { NextPage } from "next";
import Style from "../styles/Locations.module.scss"
import { Header } from "@/components/Header/Header";
import LocationsContainer from "@/components/LocationsContainer/LocationsContainer";
import Footer from "@/components/Footer/Footer";

const Locations: NextPage = () => {
  return (
    <>
      <main className={Style.container}>
        <Header />

        <LocationsContainer />
      </main>

      <Footer />
    </>
  )
}

export default Locations