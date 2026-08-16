import { Link } from "react-router-dom";
import type { ProjectCardProperties } from "../../../types";
import styles from "../project-list.module.css";

export type ProjectListCardProps = {
  project: ProjectCardProperties;
};

function ProjectListCard({ project }: ProjectListCardProps) {
  return (
    <Link className={styles.projectCardWrapper} to={project.path}>
      <div className={styles.projectCardContent}>
        <span className={styles.textContainer}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </span>
        <div className={styles.imageWrapper}>
          <img src={project.image} className={styles.projectImage} />
        </div>
      </div>
    </Link>
  );
}

export default ProjectListCard;
