import { Outlet } from "react-router-dom";
import DashboardNavigation from "@components/Navigation/DashboardNavigation";

const DashboardLayout = () => {
  return (
    <>
      <DashboardNavigation />
      <Outlet />
    </>
  );
};

export default DashboardLayout;
