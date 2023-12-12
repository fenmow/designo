import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import Style from "./MenuIcon.module.scss"

type menuIconProps = {
  menuIsOpen: boolean
  setMenuIsOpen: (menuIsOpen: boolean) => void
}

const MenuIcon: React.FC<menuIconProps> = (props: {
  menuIsOpen: boolean
  setMenuIsOpen: (menuIsOpen: boolean) => void
}) => {
  return (
    <div onClick={() => props.setMenuIsOpen(!props.menuIsOpen)} className={Style.icon}>
      { props.menuIsOpen === true ? (<GrClose />) : (<FaBars />) }
    </div>
  )
}

export default MenuIcon