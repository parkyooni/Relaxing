import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import DependencyInstall from "@components/Dashboard/DependencyInstall";
import Dashboard from "@components/Dashboard";
import CreateProject from "@components/CreateProject";
import ProjectList from "@components/ProjectList";
import ErrorModal from "@components/Modal/ErrorModal";
import DashboardLayout from "@components/Layout/DashboardLayout";
import PrivateLayout from "@components/Layout/PrivateLayout";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const showModal = message => {
    setModalMessage(message);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="project/project-list" />} />
        <Route path="/" element={<DashboardLayout />}>
          <Route path="dashboard/:id" element={<Dashboard />} />
          <Route path="my-dependencies" element={<DependencyInstall />} />
        </Route>
        <Route path="project" element={<PrivateLayout />}>
          <Route index element={<ProjectList showModal={showModal} />} />
          <Route
            path="project-list"
            element={<ProjectList showModal={showModal} />}
          />
          <Route path="create-project" element={<CreateProject />} />
        </Route>

        <Route
          path="*"
          element={<ErrorModal message="Page not found" onClose={closeModal} />}
        />
      </Routes>

      {isModalOpen && (
        <ErrorModal message={modalMessage} onClose={closeModal} />
      )}
    </Router>
  );
}

export default App;
