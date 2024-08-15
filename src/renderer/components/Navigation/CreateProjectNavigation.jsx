import { Link } from "react-router-dom";

const CreateProjectNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/project/project-list">Project List</Link>
        </li>
        <li>
          <Link to="/project/create-project">Create Project</Link>
        </li>
      </ul>
    </nav>
  );
};

export default CreateProjectNavigation;
