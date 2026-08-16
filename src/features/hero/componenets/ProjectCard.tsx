import type { ProjectCardProperties } from "../../../types.ts";
import styles from "../hero.module.css";
import Tag, { type TagColors } from "../../../components/Tag";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function ProjectCard({ project }: { project: ProjectCardProperties }) {
  let tagColor: TagColors = "blue";
  switch (project.focus) {
    case "Full Stack":
      tagColor = "orange";
      break;
    case "Data Analytics":
      tagColor = "green";
      break;
    case "Frontend":
      tagColor = "purple";
      break;
    default:
      tagColor = "blue";
      break;
  }

  return (
    <Link key={project.title} to={project.path} className={styles.card}>
      <div className={styles.cardContent}>
        <img src={project.image} />
        <span className={styles.cardDivider}></span>
        <p className={styles.projectTitle}>{project.title}</p>
        <Tag style={styles.cardTag} label={project.focus} color={tagColor} />
        <p className={styles.projectDescription}>{project.description}</p>
        <p className={styles.path}>
          View details <FaArrowRightLong />
        </p>
      </div>
    </Link>
  );
}

export default ProjectCard;
