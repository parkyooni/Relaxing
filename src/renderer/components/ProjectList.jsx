import { useEffect } from "react";
import { useNavigation } from "@utils/projectUtils";
import useProjectStore from "@/store/projectStore";
import useDashboardStore from "@/store/dashboardStore";
import icons from "@public/images";
import { PageContentContainer } from "@public/style/Project.styles";

const ProjectList = ({ showModal, showDeleteModal }) => {
  const { projects, setProjects } = useProjectStore();
  const { navigateToPath } = useNavigation();

  const { setFolderStructure, setProjectPath, setSelectedProject } =
    useDashboardStore(state => ({
      setFolderStructure: state.setFolderStructure,
      setProjectPath: state.setProjectPath,
      setSelectedProject: state.setSelectedProject
    }));

  useEffect(() => {
    const loadProjectLists = async () => {
      try {
        const projectData = await window.api.loadProjectList();
        setProjects(projectData);
      } catch (error) {
        showModal("error", "프로젝트 목록을 불러오는 중 오류가 발생했습니다.");
        console.error(error);
      }
    };

    loadProjectLists();
  }, [setProjects, showModal]);

  const handleProjectClick = async project => {
    try {
      const isValidPath = await window.api.checkProjectPath(project.path);

      if (!isValidPath) {
        showModal("error", "경로를 찾을 수 없습니다");
        return;
      }

      const projectPath = await window.api.joinProjectPath(
        project.path,
        project.projectName
      );

      const projectFolderStructure =
        await window.api.readAllDirectory(projectPath);

      if (
        !Array.isArray(projectFolderStructure) ||
        projectFolderStructure.length === 0
      ) {
        showModal("error", `경로에 프로젝트가 없습니다: ${projectPath}`);
        return;
      }

      setFolderStructure({
        name: project.projectName,
        type: "folder",
        children: projectFolderStructure || []
      });

      setProjectPath(projectPath);
      setSelectedProject(project);

      navigateToPath(`/dashboard/${project.projectName}`);
    } catch (error) {
      showModal("error", "프로젝트를 불러오는 중 오류가 발생했습니다.");
      console.error("Error in handleProjectClick:", error);
    }
  };
  const handleDeleteIconClick = project => {
    showDeleteModal(
      `${project.projectName}을(를) 삭제하시겠습니까?`,
      async () => {
        try {
          const response = await window.api.deleteProjectList(
            project.projectName
          );
          setProjects(response);
        } catch (error) {
          showModal("error", "프로젝트를 삭제하는 중 오류가 발생했습니다.");
          console.error(error);
        }
      }
    );
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
                    handleDeleteIconClick(project);
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
