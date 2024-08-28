import { DependencyInstallContentContainer } from "@public/style/DependencyInstall.styles";
import MyDependencies from "@components/Dashboard/DependencyInstall/MyDependencies";
import NPMManager from "@components/Dashboard/DependencyInstall/MyDependencies/NPMManager";
import useDashboardStore from "@/store/dashboardStore";

const DependencyInstall = ({ showModal: showModalProp, showDeleteModal }) => {
  const projectPath = useDashboardStore(state => state.projectPath);
  return (
    <DependencyInstallContentContainer>
      <div className="my-dependencies">
        <span className="root-path">
          {projectPath || "No Project Selected"}
        </span>
        <h1>package.json</h1>
        <MyDependencies
          showModal={showModalProp}
          showDeleteModal={showDeleteModal}
        />
      </div>
      <NPMManager showModal={showModalProp} />
    </DependencyInstallContentContainer>
  );
};

export default DependencyInstall;
