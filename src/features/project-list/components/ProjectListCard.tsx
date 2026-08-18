import { Link } from "react-router-dom";
import type { ProjectCardProperties } from "../../../types";
import styles from "../project-list.module.css";
import Tag from "../../../components/Tag";
import { RxArrowTopRight } from "react-icons/rx";
import { getProjectFocusTagColor } from "../../../utils";

export type ProjectListCardProps = {
  project: ProjectCardProperties;
};

function ProjectListCard({ project }: ProjectListCardProps) {
  const frameworkTags = Object.entries(project.technology)
    .filter(([key]) => key === "frameworks")
    .flatMap(([, value]) => value);

  const toolsTags = Object.entries(project.technology)
    .filter(([key]) => key === "tools")
    .flatMap(([, value]) => value);

  // Prioritize framework tags; projects with no framework will show Tools fallback (e.g. Tableau)
  const childTags = frameworkTags.length > 0 ? frameworkTags : toolsTags;

  return (
    <Link className={styles.projectCardWrapper} to={project.path}>
      <div className={styles.projectCardContent}>
        <div className={styles.imageWrapper}>
          <img
            src={project.thumbnail ?? project.image}
            className={styles.projectImage}
          />
        </div>
        <div className={styles.textContainer}>
          <h3 className="fancy-card-title">{project.title}</h3>
          <p className="card-description">{project.description}</p>
          <div className={styles.projectCardTags}>
            <div>
              <Tag
                key={`focus-${project.focus}`}
                label={project.focus}
                color={getProjectFocusTagColor(project.focus)}
              />
              <Tag key={`type-${project.type}`} label={project.type} />
            </div>
            {childTags.map((label) => {
              return <Tag key={`tag-${label}`} label={label} color="blue" />;
            })}
          </div>
          <p className="card-link">
            View project <RxArrowTopRight />
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProjectListCard;
