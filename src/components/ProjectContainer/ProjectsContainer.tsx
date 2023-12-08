import { ReactNode } from "react";
import Style from "./ProjectsContainer.module.scss";

type ProjectsContainerProps = {
  children: ReactNode
}

const ProjectsContainer: React.FC<ProjectsContainerProps> = ({ children }) => {
  return (
    <div className={Style.projects_container}>
      { children }
    </div>
  )
}

export default ProjectsContainer