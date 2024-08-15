import { Link } from "react-router-dom";

const DashboardNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="project">Home</Link>
        </li>

        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/my-dependencies">My Dependencies</Link>
        </li>
      </ul>
    </nav>
  );
};

export default DashboardNavigation;
