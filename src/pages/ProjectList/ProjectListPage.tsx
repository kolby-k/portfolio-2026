import ProjectList from "../../features/project-list/ProjectList";
import NavButton from "../../components/NavButton";

function ProjectListPage() {
  return (
    <div className="page">
      <NavButton title="Home" to="/" hint="back" />
      <ProjectList />
    </div>
  );
}

export default ProjectListPage;
