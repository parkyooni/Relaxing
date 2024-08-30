import { Link, useLocation, useNavigate } from "react-router-dom";
import { Navigation } from "@public/style/Project.styles";
import icons from "@public/images";
import useUIStore from "@/store/uiStore";
import useProjectStore from "@/store/projectStore";

const CreateProjectNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isCreateProjectPage = location.pathname === "/project/create-project";
  const projectStore = useProjectStore(state => ({
    isProjectStarterValid: state.isProjectStarterValid,
    isFrameworksSelected: state.isFrameworksSelected
  }));
  const uiStore = useUIStore();

  const anySectionActive =
    uiStore.sections.showSettingLoad ||
    uiStore.sections.showProjectStarter ||
    uiStore.sections.showFrameworkSelector ||
    uiStore.sections.showVariantSelector;

  const handleLogoClick = event => {
    if (
      projectStore.isProjectStarterValid ||
      projectStore.isFrameworksSelected ||
      anySectionActive
    ) {
      uiStore.showModal("cancel", "프로젝트 생성을 취소하시겠습니까?");
    } else {
      navigate("/project/project-list");
    }
  };

  return (
    <Navigation isCreateProjectPage={isCreateProjectPage}>
      <ul>
        <li onClick={handleLogoClick}>
          <img
            src={isCreateProjectPage ? icons.logoWhiteIcon : icons.logoIcon}
            alt="Logo Icon"
          />
        </li>
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
