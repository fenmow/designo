import Link from "next/link"
import Style from "./LinkCard.module.scss"

type LinkCardProps = {
  cardTitle: string
  cardImage: string
  cardLink: string
}

const LinkCard: React.FC<LinkCardProps> = (props: {
  cardTitle: string
  cardImage: string
  cardLink: string
}) => {
  return (
    <div className={Style.link_card} style={{ backgroundImage: `url(${props.cardImage})` }}>
      <h1 className={Style.title}>{props.cardTitle}</h1>
      <Link href={props.cardLink} legacyBehavior>
        <a className={Style.link}>view projects <span>&gt;</span></a>
      </Link>
    </div>
  )
}

export default LinkCard