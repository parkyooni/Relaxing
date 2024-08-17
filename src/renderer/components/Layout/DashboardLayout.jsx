import { Outlet } from "react-router-dom";
import DashboardNavigation from "@components/Navigation/DashboardNavigation";
import { Container } from "@public/style/Project.styles";

const DashboardLayout = () => {
  return (
    <Container>
      <DashboardNavigation />
      <Outlet />
    </Container>
  );
};

export default DashboardLayout;
