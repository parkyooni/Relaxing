import { PageContentContainer } from "@public/style/Project.styles";
import { useNavigation } from "@utils/common.cjs";
import icons from "@public/images";
import mockData from "@utils/mockData.json";

const ProjectList = ({ showModal }) => {
  const { navigateToPath } = useNavigation();

  const handleProjectClick = project => {
    if (checkProjectPath(project.path)) {
      navigateToPath(`/dashboard/${project.id}`);
    } else {
      showModal(`경로를 찾을 수 없습니다: ${project.path}`);
    }
  };

  const handleIconClick = project => {
    console.log(`삭제할 프로젝트: ${project.name}`);
  };

  const checkProjectPath = path => {
    return true;
  };

  return (
    <PageContentContainer>
      <h1>Project List</h1>
      <ul>
        {mockData.projects.map((project, index) => (
          <li key={index} onClick={() => handleProjectClick(project)}>
            <div className="project-title">
              <span>{project.name}</span>
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
