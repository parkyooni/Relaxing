import { DependencyInstallContentContainer } from "@public/style/DependencyInstall.styles";
import MyDependencies from "@components/DependencyInstall/MyDependencies";
import NPMManager from "@components/DependencyInstall/MyDependencies/NPMManager";

const DependencyInstall = () => {
  return (
    <DependencyInstallContentContainer>
      <div className="my-dependencies">
        <p>package.json</p>
        <MyDependencies />
      </div>
      <NPMManager />
    </DependencyInstallContentContainer>
  );
};

export default DependencyInstall;
