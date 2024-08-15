import { Outlet } from "react-router-dom";
import CreateProjectNavigation from "@components/Navigation/CreateProjectNavigation";
import { Container } from "@public/style/Project.styles";

const PrivateLayout = () => {
  return (
    <Container>
      <CreateProjectNavigation />
      <Outlet />
    </Container>
  );
};

export default PrivateLayout;
