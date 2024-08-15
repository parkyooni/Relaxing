import { PageContentContainer } from "@public/style/Project.styles";
import { useNavigate } from "react-router-dom";
import icons from "@public/images";

const dummyProjects = [
  { id: 1, name: "Project 1", path: "/Users/yooni/Desktop/vaco/project1" },
  { id: 2, name: "Project 2", path: "/Users/yooni/Desktop/vaco/project2" },
  { id: 3, name: "Project 3", path: "/Users/yooni/Desktop/vaco/project3" },
  { id: 4, name: "Project 4", path: "/Users/yooni/Desktop/vaco/project4" },
  { id: 5, name: "Project 5", path: "/Users/yooni/Desktop/vaco/project5" },
  {
    id: 6,
    name: "ProjectProjectProject 6",
    path: "/Users/yooni/Desktop/vaco/project6"
  },
  {
    id: 7,
    name: "ProjectProjectProject 7",
    path: "/Users/yooni/Desktop/vaco/project7"
  },
  { id: 8, name: "Project 8", path: "/Users/yooni/Desktop/vaco/project8" },
  { id: 9, name: "Project 9", path: "/Users/yooni/Desktop/vaco/project9" }
];

const ProjectList = ({ showModal }) => {
  const navigate = useNavigate();

  const handleProjectClick = project => {
    if (checkProjectPath(project.path)) {
      navigate(`/dashboard/${project.id}`);
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
        {dummyProjects.map((project, index) => (
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
