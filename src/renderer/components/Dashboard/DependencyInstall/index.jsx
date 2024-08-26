import { DependencyInstallContentContainer } from "@public/style/DependencyInstall.styles";
import MyDependencies from "@components/Dashboard/DependencyInstall/MyDependencies";
import NPMManager from "@components/Dashboard/DependencyInstall/MyDependencies/NPMManager";

const DependencyInstall = ({ showModal: showModalProp }) => {
  return (
    <DependencyInstallContentContainer>
      <div className="my-dependencies">
        <h1>package.json</h1>
        <MyDependencies showModal={showModalProp} />
      </div>
      <NPMManager showModal={showModalProp} />
    </DependencyInstallContentContainer>
  );
};

export default DependencyInstall;
