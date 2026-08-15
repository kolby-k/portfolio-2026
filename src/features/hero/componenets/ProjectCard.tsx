import type { ProjectCardProperties } from "../../../types.ts";
import styles from "../hero.module.css";
import Tag, { type TagColors } from "../../../components/Tag";
import { FaArrowRightLong } from "react-icons/fa6";

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
        <Tag style={styles.cardTag} label={project.type} color={tagColor} />
        <p className={styles.projectDescription}>{project.description}</p>
        <a href={project.path} className={styles.path}>
          View details <FaArrowRightLong />
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
