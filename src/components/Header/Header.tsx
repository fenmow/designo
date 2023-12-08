import Image from "next/image"
import Link from "next/link"
import Logo from "public/logo-dark.png"
import Style from "./Header.module.scss"

export const Header: React.FC = () => {
  return (
    <header className={Style.header}>
      <div className={Style.logo_container}>
        <Link href='/'>
          <Image alt="logo" src={Logo} height={23} width={170}></Image>
        </Link>
      </div>

      <nav className={Style.nav_bar}>
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
    </header>
  )
}