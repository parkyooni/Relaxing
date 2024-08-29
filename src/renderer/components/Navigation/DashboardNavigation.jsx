import { Link } from "react-router-dom";
import { Navigation } from "@public/style/Project.styles";
import icons from "@public/images";

const DashboardNavigation = () => {
  return (
    <Navigation>
      <ul>
        <li>
          <Link to="/dashboard/:id">
            <img src={icons.logoIcon} alt="Logo Icon" />
          </Link>
        </li>
        <li>
          <Link to="project">
            <img src={icons.homeIcon} alt="Home Icon" />
            <span>Project List</span>
          </Link>
        </li>
        <li>
          <Link to="/dashboard/:id">
            <img src={icons.dashboardIcon} alt="puzzle Icon" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/my-dependencies">
            <img src={icons.puzzleIcon} alt="setting Icon" />
            <span>Dependency Install</span>
          </Link>
        </li>
      </ul>
    </Navigation>
  );
};

export default DashboardNavigation;
