import styles from "./project-list.module.css";
import ProjectListCard from "./components/ProjectListCard";
import useFilteredProjects from "../../hooks/useFilteredProjects";
import TechnologyFilter from "./components/TechnologyFilter";

function ProjectList() {
  const { projects, add, remove, clear, active, options } =
    useFilteredProjects();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Past Projects</h2>
        <p className="description">Explore some of my favourite past work! </p>
        <div className={styles.searchTools}>
          <TechnologyFilter
            add={add}
            remove={remove}
            clear={clear}
            active={active}
            options={options}
          />
        </div>
      </div>
      <div className={styles.projectList}>
        {projects.map((p) => (
          <ProjectListCard key={`${p.id}`} project={p} />
        ))}
      </div>
      <div className="h-divider"></div>
    </div>
  );
}

export default ProjectList;
