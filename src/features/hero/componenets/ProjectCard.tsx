import type { ProjectCardProperties } from "../../../types.ts";
import styles from "../hero.module.css";
import Tag from "../../../components/Tag";
import { RxArrowTopRight } from "react-icons/rx";
import { Link } from "react-router-dom";
import { getProjectFocusTagColor } from "../../../utils.ts";

function ProjectCard({ project }: { project: ProjectCardProperties }) {
  return (
    <Link key={project.title} to={project.path} className={styles.card}>
      <div className={styles.cardContent}>
        <img src={project.image} />
        <span className={styles.cardDivider}></span>
        <p className="fancy-card-title">{project.title}</p>
        <span className="tag-row">
          <Tag
            style={styles.cardTag}
            label={project.focus}
            color={getProjectFocusTagColor(project.focus)}
          />
          <Tag style={styles.cardTag} label={project.type} />
        </span>
        <p className="card-description">{project.description}</p>
        <p className={"card-link"}>
          View details <RxArrowTopRight />
        </p>
      </div>
    </Link>
  );
}

export default ProjectCard;
