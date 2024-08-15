import { Outlet } from "react-router-dom";
import CreateProjectNavigation from "@components/Navigation/CreateProjectNavigation";

const PrivateLayout = () => {
  return (
    <>
      <CreateProjectNavigation />
      <Outlet />
    </>
  );
};

export default PrivateLayout;
