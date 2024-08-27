import { ProjectControllerContainer } from "@public/style/Dashboard.styles";
import useUIStore from "@/store/uiStore";
import useDashboardStore from "@/store/dashboardStore";

const ProjectController = () => {
  const { isChecked, setIsChecked } = useUIStore(state => ({
    isChecked: state.isChecked,
    setIsChecked: state.setIsChecked
  }));
  const { projectPath, processId, setProcessId } = useDashboardStore(state => ({
    projectPath: state.projectPath,
    processId: state.processId,
    setProcessId: state.setProcessId
  }));

  const handleProjectOnOff = async () => {
    if (!isChecked) {
      try {
        const runningProcess = await window.api.runProject(projectPath);
        setProcessId(runningProcess.runProcessId);
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        await window.api.endProject(processId);
        setProcessId(null);
      } catch (error) {
        console.error(error);
      }
    }
    setIsChecked(!isChecked);
  };

  return (
    <ProjectControllerContainer isStartChecked={isChecked}>
      <h1>$ npm run dev</h1>
      <label className="project-controller">
        <span>{isChecked ? "Run" : "End"}</span>
        <input
          className="project-controller-button"
          type="checkbox"
          checked={isChecked}
          onChange={handleProjectOnOff}
        ></input>
      </label>
    </ProjectControllerContainer>
  );
};

export default ProjectController;
