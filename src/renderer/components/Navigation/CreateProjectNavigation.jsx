import { Link, useLocation } from "react-router-dom";
import { Navigation } from "@public/style/Project.styles";
import icons from "@public/images";

const CreateProjectNavigation = () => {
  const location = useLocation();
  const isCreateProjectPage = location.pathname === "/project/create-project";

  return (
    <Navigation isCreateProjectPage={isCreateProjectPage}>
      <ul>
        <Link to="/project/project-list">
          <li>
            <img
              src={isCreateProjectPage ? icons.logoWhiteIcon : icons.logoIcon}
              alt="Logo Icon"
            />
          </li>
        </Link>
        {!isCreateProjectPage && (
          <>
            <li>
              <Link to="/project/project-list">
                <img src={icons.listIcon} alt="Project List Icon" />
                <span>Project List</span>
              </Link>
            </li>
            <li>
              <Link to="/project/create-project">
                <img src={icons.folderIcon} alt="Create Project Icon" />
                <span>Create Project</span>
              </Link>
            </li>
          </>
        )}
      </ul>
    </Navigation>
  );
};

export default CreateProjectNavigation;
