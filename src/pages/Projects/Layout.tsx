import { Link, Outlet, useLocation } from "react-router-dom";
import { projectUrls } from "../../constants";
import { getProjectByPath } from "../../utils";
import { FaGithub } from "react-icons/fa";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { FiArrowRightCircle } from "react-icons/fi";

function Layout() {
  const path = useLocation();
  const urlKey = path.pathname.replace(/\/projects\//, "");

  const webUrl = projectUrls?.[`${urlKey}-web`];
  const iosUrl = projectUrls?.[`${urlKey}-ios`];
  const gitUrl = projectUrls?.[`${urlKey}-git`];

  const projectProperties = getProjectByPath(path.pathname);

  return (
    <div className="project-page-wrapper">
      <div className="project-page-header">
        <Link
          className="project-page-back-button"
          to="/projects"
          title="See All Projects"
        >
          Back
        </Link>
        <h3>{projectProperties?.title}</h3>
        <p>{projectProperties?.description}</p>
      </div>

      <div className="project-page-links">
        {webUrl && (
          <a href={webUrl} target="_blank" title={`View Full Project`}>
            Full Project
            <FiArrowRightCircle size={18} />
          </a>
        )}
        {iosUrl && (
          <a href={iosUrl} target="_blank" title="View in App Store">
            View in App Store
            <IoLogoAppleAppstore size={18} />
          </a>
        )}
        {gitUrl && (
          <a href={gitUrl} target="_blank" title="View on Github">
            Source Code
            <FaGithub size={18} />
          </a>
        )}
      </div>

      <div className="project-page-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
