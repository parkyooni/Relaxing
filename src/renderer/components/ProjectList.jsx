import { useEffect } from "react";
import { PageContentContainer } from "@public/style/Project.styles";
import { useNavigation } from "@utils/projectUtils";
import icons from "@public/images";
import useProjectStore from "@/store/projectStore";
import useDashboardStore from "@/store/dashboardStore";

const ProjectList = ({ showModal: showModalProp }) => {
  const { projects, setProjects } = useProjectStore();
  const { navigateToPath } = useNavigation();

  useEffect(() => {
    const loadProjectLists = async () => {
      try {
        const projectData = await window.api.loadProjectList();
        setProjects(projectData);
      } catch (error) {
        showModalProp("프로젝트 목록을 불러오는 중 오류가 발생했습니다.");
        console.error(error);
      }
    };

    loadProjectLists();
  }, [setProjects, showModalProp]);

  const handleProjectClick = async project => {
    try {
      const isValidPath = await window.api.checkProjectPath(project.path);

      if (!isValidPath) {
        showModalProp(`경로를 찾을 수 없습니다: ${project.path}`);
        return;
      }

      const projectPath = await window.api.joinProjectPath(
        project.path,
        project.projectName
      );

      const projectFolderStructure =
        await window.api.readAllDirectory(projectPath);

      if (!projectFolderStructure || projectFolderStructure.length === 0) {
        showModalProp(`경로에 프로젝트가 없습니다: ${projectPath}`);
        return;
      }

      const { dependencies, devDependencies } =
        await window.api.loadPackageJsonData(projectPath);

      const {
        setFolderStructure,
        setProjectPath,
        setDependencies,
        setDevDependencies
      } = useDashboardStore.getState();

      setFolderStructure({
        name: project.projectName,
        children: projectFolderStructure
      });

      setProjectPath(projectPath);
      setDependencies(dependencies);
      setDevDependencies(devDependencies);

      navigateToPath(`/dashboard/${project.projectName}`);
    } catch (error) {
      showModalProp("프로젝트를 불러오는 중 오류가 발생했습니다.");
      console.error("Error in handleProjectClick:", error);
    }
  };

  const handleIconClick = async project => {
    try {
      const response = await window.api.deleteProjectList(project.projectName);
      setProjects(response);
    } catch (error) {
      showModalProp("프로젝트를 삭제하는 중 오류가 발생했습니다.");
      console.error(error);
    }
  };

  return (
    <PageContentContainer>
      <h1>Project List</h1>
      {projects.length !== 0 ? (
        <ul>
          {projects.map((project, index) => (
            <li key={index} onClick={() => handleProjectClick(project)}>
              <div className="project-title">
                <span>{project.projectName}</span>
                {project.custom.customName !== "undefined" && (
                  <span>{project.custom.customName}</span>
                )}
                <span>{project.path}</span>
              </div>
              <button>
                <img
                  src={icons.closeIcon}
                  alt="Close Icon"
                  onClick={e => {
                    e.stopPropagation();
                    handleIconClick(project);
                  }}
                />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <span className="not-found">프로젝트가 없습니다.</span>
      )}
    </PageContentContainer>
  );
};

export default ProjectList;
