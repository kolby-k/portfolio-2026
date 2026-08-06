import type { ProjectCardProperties } from "../home.types";
import styles from "../home.module.css";

function ProjectCard({ project }: { project: ProjectCardProperties }) {
  return (
    <div key={project.title} className={styles.card}>
      <img src={project.image} />
      <span>
        <p className={styles.projectTitle}>{project.title} —</p>
        <a href={project.path}>View Details</a>
      </span>
      <p className={styles.projectDescription}>{project.description}</p>
      <p className={styles.projectTag}>{project.type}</p>
    </div>
  );
}

export default ProjectCard;
