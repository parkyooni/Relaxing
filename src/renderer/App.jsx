import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { useState } from "react";
import DependencyInstall from "@components/Dashboard/DependencyInstall";
import Dashboard from "@components/Dashboard";
import CreateProject from "@components/CreateProject";
import ProjectList from "@components/ProjectList";
import ErrorModal from "@components/Modal/ErrorModal";
import DashboardLayout from "@components/Layout/DashboardLayout";
import PrivateLayout from "@components/Layout/PrivateLayout";

function App() {
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const closeErrorModal = () => {
    setIsErrorModalOpen(false);
    setErrorMessage("");
  };

  const openErrorModal = message => {
    setErrorMessage(message);
    setIsErrorModalOpen(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="project/project-list" />} />
        <Route path="/" element={<DashboardLayout />}>
          <Route path="dashboard/:id" element={<Dashboard />} />
          <Route
            path="my-dependencies"
            element={<DependencyInstall showModal={openErrorModal} />}
          />
        </Route>
        <Route path="project" element={<PrivateLayout />}>
          <Route index element={<ProjectList showModal={openErrorModal} />} />
          <Route path="project-list" element={<ProjectList />} />
          <Route path="create-project" element={<CreateProject />} />
        </Route>

        <Route
          path="*"
          element={<Navigate to="/project/project-list" replace />}
        />
      </Routes>

      {isErrorModalOpen && (
        <ErrorModal message={errorMessage} onClose={closeErrorModal} />
      )}
    </Router>
  );
}

export default App;
