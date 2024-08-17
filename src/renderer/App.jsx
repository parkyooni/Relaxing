import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DependencyInstall from "@components/DependencyInstall";
import Dashboard from "@components/Dashboard";
import CreateProject from "@components/CreateProject";
import ProjectList from "@components/ProjectList";
import ErrorModal from "@components/Modal/ErrorModal";
import DashboardLayout from "@components/Layout/DashboardLayout";
import PrivateLayout from "@components/Layout/PrivateLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="dashboard/:id" element={<Dashboard />} />
          <Route path="my-dependencies" element={<DependencyInstall />} />
        </Route>

        <Route path="project" element={<PrivateLayout />}>
          <Route index element={<ProjectList />} />
          <Route path="project-list" element={<ProjectList />} />
          <Route path="create-project" element={<CreateProject />} />
        </Route>

        <Route path="*" element={<ErrorModal />} />
      </Routes>
    </Router>
  );
}

export default App;
