import { Link } from "react-router-dom";
import { PROJECTS } from "../../constants";
import styles from "./project-list.module.css";

function ProjectList() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Project List</h2>
        <div className={styles.searchTools}>
          <span> search input </span>
          <span> tag filters </span>
        </div>
      </div>
      <div className={styles.projectList}>
        {PROJECTS.flatMap((p) =>
          p.projects.map((project) => {
            return (
              <Link
                key={`project-${project.title}`}
                className={styles.projectCardWrapper}
                to={project.path}
              >
                <div className={styles.projectCardContent}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <img src={project.image} className={styles.projectImage} />
                </div>
              </Link>
            );
          }),
        )}
      </div>
    </div>
  );
}

export default ProjectList;
