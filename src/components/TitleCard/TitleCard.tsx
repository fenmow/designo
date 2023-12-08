import Style from "./TitleCard.module.scss"

type TitleCardProps = {
  title: string
  text: string
}

const TitleCard: React.FC<TitleCardProps> = (props: {
  title: string
  text: string
}) => {
  return (
    <div className={Style.title_card}>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  )
}

export default TitleCard