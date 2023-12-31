/* eslint-disable @next/next/no-sync-scripts */
import { NextPage } from "next";
import Style from "../styles/Contact.module.scss"
import { Header } from "@/components/Header/Header";
import ContactCard from "@/components/ContactCard/ContactCard";
import LocationCards from "@/components/LocationCards/LocationCards";
import Footer from "@/components/Footer/Footer";
import { useState } from "react";
import Head from "next/head";

const Contact: NextPage = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)
  
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact" />
      </Head>
      <main className={`${Style.container} ${menuIsOpen === true ? `${Style.overlay}` : ``}`}>
        <Header menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />

        <ContactCard />

        <LocationCards />
      </main>

      { menuIsOpen === false ? (<Footer />) : null }
    </>
  )
}

export default Contact