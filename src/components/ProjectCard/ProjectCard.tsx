import Image from "next/image"
import Style from "./ProjectCard.module.scss"

type ProjectCardProps = {
  imageSrc: string
  title: string
  description: string
}

const ProjectCard: React.FC<ProjectCardProps> = (props: {
  imageSrc: string
  title: string
  description: string
}) => {
  return (
    <div className={Style.project_card}>
      <Image src={props.imageSrc} alt={props.title} height={315} width={315} className={Style.card_image}></Image>
      <div className={Style.card_details}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default ProjectCard