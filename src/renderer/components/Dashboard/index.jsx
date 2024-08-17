import { DashboardContentContainer } from "@public/style/Dashboard.styles";
import MyProject from "@components/Dashboard/MyProject";
import ProjectController from "@components/Dashboard/MyProject/ProjectController";

const Dashboard = () => {
  return (
    <DashboardContentContainer>
      <p>Dashboard</p>
      <div className="layer">
        <MyProject />
        <ProjectController />
      </div>
    </DashboardContentContainer>
  );
};

export default Dashboard;
