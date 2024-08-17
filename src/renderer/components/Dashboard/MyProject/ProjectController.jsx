import { useState } from "react";
import { ProjectControllerContainer } from "@public/style/Dashboard.styles";

const ProjectController = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleSwitch = () => {
    setIsChecked(!isChecked);
    console.log(isChecked ? "프로젝트 실행중" : "프로젝트 종료");
  };

  return (
    <ProjectControllerContainer isStartChecked={isChecked}>
      <h1>$npm run dev</h1>
      <div className="project-controller">
        <label>
          <span>{isChecked ? "Run" : "End"}</span>
          <input
            className="project-controller-button"
            type="checkbox"
            checked={isChecked}
            onChange={handleToggleSwitch}
          ></input>
        </label>
      </div>
    </ProjectControllerContainer>
  );
};

export default ProjectController;
