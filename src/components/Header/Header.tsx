/* eslint-disable @next/next/no-sync-scripts */
import Image from "next/image"
import Link from "next/link"
import Logo from "public/logo-dark.png"
import Style from "./Header.module.scss"
import Head from "next/head"
import MenuIcon from "../menuIcon/MenuIcon"

type HeaderProps = {
  menuIsOpen: boolean
  setMenuIsOpen: (menuIsOpen: boolean) => void
}

export const Header: React.FC<HeaderProps> = (props: {
  menuIsOpen: boolean
  setMenuIsOpen: (menuIsOpen: boolean) => void
}) => {
  
  return (
    <>
      <header className={`${Style.header}`}>
        <div className={Style.logo_container}>
          <Link href='/'>
            <Image className={Style.logo_image} alt="logo" src={Logo} height={23} width={170}></Image>
          </Link>
        </div>

        <nav className={`${Style.nav_bar} ${props.menuIsOpen === true ? `${Style.show}` : null}`}>
          <Link href="/about" legacyBehavior>
            <a className={Style.nav_link}>our company</a>
          </Link>
          <Link href="/locations" legacyBehavior>
            <a className={Style.nav_link}>locations</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className={Style.nav_link}>contact</a>
          </Link>
        </nav>

        <MenuIcon menuIsOpen={props.menuIsOpen} setMenuIsOpen={props.setMenuIsOpen}></MenuIcon>
      </header>
    </>
  )
}