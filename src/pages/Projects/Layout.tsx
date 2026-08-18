import { Outlet, useLocation } from "react-router-dom";
import { getProjectByPath } from "../../utils";
import { FaGithub } from "react-icons/fa";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { FiArrowRightCircle } from "react-icons/fi";
import NavButton from "../../components/NavButton";

function Layout() {
  const path = useLocation();

  const projectProperties = getProjectByPath(path.pathname);

  const { git, web, ios } = projectProperties?.urls ?? {};

  return (
    <div className="project-page-wrapper">
      <div className="project-page-header">
        <NavButton title="All Projects" to="/projects" hint="back" />
        <h3 className="fancy-title">{projectProperties?.title}</h3>
        <p className="fancy-title">{projectProperties?.description}</p>
      </div>

      <div className="project-page-links">
        {web && (
          <a href={web} target="_blank" title={`View Full Project`}>
            Full Project
            <FiArrowRightCircle size={18} />
          </a>
        )}
        {ios && (
          <a href={ios} target="_blank" title="View in App Store">
            View in App Store
            <IoLogoAppleAppstore size={18} />
          </a>
        )}
        {git && (
          <a href={git} target="_blank" title="View on Github">
            Source Code
            <FaGithub size={18} />
          </a>
        )}
      </div>
      <div className="h-divider"></div>
      <Outlet />
    </div>
  );
}

export default Layout;
