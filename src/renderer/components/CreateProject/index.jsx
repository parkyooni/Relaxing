import DependenciesSelector from "@components/CreateProject/Project/DependenciesSelector";
import DetailDependencies from "@components/CreateProject/Project/DetailDependencies";
import ProjectStarter from "@components/CreateProject/Project/ProjectStarter";
import SettingLoad from "@components/CreateProject/Project/SettingLoad";

const CreateProject = () => {
  return (
    <>
      <SettingLoad />
      <ProjectStarter />
      <DependenciesSelector />
      <DetailDependencies />
    </>
  );
};

export default CreateProject;
