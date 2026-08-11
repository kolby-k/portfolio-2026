import type { ProjectCardProperties } from "../home.types";
import styles from "../home.module.css";
import Tag, { type TagColors } from "../../../components/Tag";

function ProjectCard({ project }: { project: ProjectCardProperties }) {
  let tagColor: TagColors = "blue";
  switch (project.type) {
    case "Case Study":
      tagColor = "blue";
      break;
    case "Data Analytics":
      tagColor = "green";
      break;
    case "Web App":
      tagColor = "purple";
      break;
    case "Mobile App":
      tagColor = "orange";
      break;
  }

  return (
    <div key={project.title} className={styles.card}>
      <div className={styles.cardContent}>
        <img src={project.image} />
        <span className={styles.cardDivider}></span>
        <p className={styles.projectTitle}>{project.title}</p>
        <Tag label={project.type} color={tagColor} />
        <p className={styles.projectDescription}>{project.description}</p>
        <a href={project.path} className={styles.path}>
          View details
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
