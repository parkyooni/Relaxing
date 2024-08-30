import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { useEffect } from "react";
import DependencyInstall from "@components/Dashboard/DependencyInstall";
import Dashboard from "@components/Dashboard";
import CreateProject from "@components/CreateProject";
import ProjectList from "@components/ProjectList";
import ErrorModal from "@components/Modal/ErrorModal";
import DeleteModal from "@/components/Modal/DeleteModal";
import DashboardLayout from "@components/Layout/DashboardLayout";
import PrivateLayout from "@components/Layout/PrivateLayout";
import useUIStore from "@/store/uiStore";

function App() {
  const {
    isErrorModalOpen,
    errorMessage,
    closeErrorModal,
    closeModal,
    activeModal,
    showModal,
    showDeleteModal,
    deleteMessage,
    onConfirm
  } = useUIStore(state => ({
    isErrorModalOpen: state.isErrorModalOpen,
    errorMessage: state.errorMessage,
    activeModal: state.activeModal,
    showModal: state.showModal,
    closeModal: state.closeModal,
    closeErrorModal: state.closeErrorModal,
    showDeleteModal: state.showDeleteModal,
    deleteMessage: state.deleteMessage,
    onConfirm: state.onConfirm
  }));

  useEffect(() => {
    const isElectron = !!window.process?.versions?.electron;
    const handleBeforeUnload = event => {
      if (!isElectron) {
        event.preventDefault();
        event.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="project/project-list" />} />
        <Route path="/" element={<DashboardLayout />}>
          <Route path="dashboard/:id" element={<Dashboard />} />
          <Route
            path="my-dependencies"
            element={
              <DependencyInstall
                showModal={showModal}
                showDeleteModal={showDeleteModal}
              />
            }
          />
        </Route>
        <Route path="project" element={<PrivateLayout />}>
          <Route
            index
            element={
              <ProjectList
                showModal={showModal}
                showDeleteModal={showDeleteModal}
              />
            }
          />
          <Route
            path="project-list"
            element={
              <ProjectList
                showModal={showModal}
                showDeleteModal={showDeleteModal}
              />
            }
          />
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

      {activeModal === "deleteModal" && (
        <DeleteModal
          message={deleteMessage}
          onConfirm={onConfirm}
          onClose={closeModal}
        />
      )}
    </Router>
  );
}

export default App;
