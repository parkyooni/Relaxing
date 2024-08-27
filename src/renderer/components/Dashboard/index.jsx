import { DashboardContentContainer } from "@public/style/Dashboard.styles";
import MyProject from "@components/Dashboard/MyProject";
import ProjectController from "@components/Dashboard/MyProject/ProjectController";
import useDashboardStore from "@/store/dashboardStore";

const Dashboard = () => {
  const { projectPath, folderStructure } = useDashboardStore(state => ({
    projectPath: state.projectPath,
    folderStructure: state.folderStructure
  }));

  return (
    <DashboardContentContainer>
      <span className="root-path">{projectPath || "No Project Selected"}</span>
      <p>Dashboard</p>
      <div className="layer">
        <MyProject folderStructure={folderStructure} />
        <ProjectController projectPath={projectPath} />
      </div>
    </DashboardContentContainer>
  );
};

export default Dashboard;
