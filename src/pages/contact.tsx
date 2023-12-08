import { NextPage } from "next";
import Style from "../styles/Contact.module.scss"
import { Header } from "@/components/Header/Header";
import ContactCard from "@/components/ContactCard/ContactCard";
import LocationCards from "@/components/LocationCards/LocationCards";
import Footer from "@/components/Footer/Footer";

const Contact: NextPage = () => {
  return (
    <>
      <main className={Style.container}>
        <Header />

        <ContactCard />

        <LocationCards />
      </main>

      <Footer />
    </>
  )
}

export default Contact