/* eslint-disable @next/next/no-sync-scripts */
import { NextPage } from "next";
import Style from "../styles/Contact.module.scss"
import { Header } from "@/components/Header/Header";
import ContactCard from "@/components/ContactCard/ContactCard";
import LocationCards from "@/components/LocationCards/LocationCards";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <script src="https://kit.fontawesome.com/3b8b94a692.js" crossOrigin="anonymous"></script>
      </Head>
      
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