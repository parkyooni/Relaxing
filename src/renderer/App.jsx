import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MyDependencies from "@components/Dashboard/MyDependencies";
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
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="my-dependencies" element={<MyDependencies />} />
        </Route>

        <Route path="project" element={<PrivateLayout />}>
          <Route path="project-list" element={<ProjectList />} />
          <Route path="create-project" element={<CreateProject />} />
        </Route>

        <Route path="*" element={<ErrorModal />} />
      </Routes>
    </Router>
  );
}

export default App;
