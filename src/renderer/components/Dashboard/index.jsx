import { DashboardContentContainer } from "@public/style/Dashboard.styles";
import MyProject from "@components/Dashboard/MyProject";
import ProjectController from "@components/Dashboard/MyProject/ProjectController";
import useDashboardStore from "@/store/dashboardStore";

const Dashboard = () => {
  const projectPath = useDashboardStore(state => state.projectPath);

  return (
    <DashboardContentContainer>
      <span className="root-path">{projectPath || "No Project Selected"}</span>
      <p>Dashboard</p>
      <div className="layer">
        <MyProject />
        <ProjectController />
      </div>
    </DashboardContentContainer>
  );
};

export default Dashboard;
