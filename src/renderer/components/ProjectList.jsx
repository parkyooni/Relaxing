import { useEffect } from "react";
import { PageContentContainer } from "@public/style/Project.styles";
import { useNavigation } from "@utils/projectUtils";
import icons from "@public/images";
import useUIStore from "@/store/uiStore";
import useProjectStore from "@/store/projectStore";

const ProjectList = () => {
  const { showModal } = useUIStore();
  const { projects, setProjects, checkProjectPath } = useProjectStore();
  const { navigateToPath } = useNavigation();

  useEffect(() => {
    const loadProjectLists = async () => {
      try {
        const projectData = await window.api.loadProjectList();
        setProjects(projectData);
      } catch (error) {
        console.error(error);
      }
    };

    loadProjectLists();
  }, [setProjects]);

  const handleProjectClick = async project => {
    if (checkProjectPath(project.path)) {
      const projectPath = await window.api.joinProjectPath(
        project.path,
        project.projectName
      );
      const projectFolderStructure =
        await window.api.readAllDirectory(projectPath);

      if (!projectFolderStructure) {
        console.error(
          "Failed to load directory structure, the result is undefined."
        );
      }

      navigateToPath(`/dashboard/${project.projectName}`);
    } else {
      showModal(`경로를 찾을 수 없습니다: ${project.path}`);
    }
  };

  const handleIconClick = async project => {
    try {
      const response = await window.api.deleteProjectList(project.projectName);
      setProjects(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PageContentContainer>
      <h1>Project List</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index} onClick={() => handleProjectClick(project)}>
            <div className="project-title">
              <span>{project.projectName}</span>
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
    </PageContentContainer>
  );
};

export default ProjectList;
