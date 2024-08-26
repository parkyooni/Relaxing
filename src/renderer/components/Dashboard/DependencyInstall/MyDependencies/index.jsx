import { useEffect } from "react";
import { MyDependenciesContainer } from "@public/style/DependencyInstall.styles";
import DependencyList from "@components/common/DependencyList";
import Loading from "@components/common/Loading";
import useUIStore from "@/store/uiStore";
import useDashboardStore from "@/store/dashboardStore";

const MyDependencies = ({ showModal }) => {
  const { activeTab, setActiveTab, isLoading, setActiveLoading } = useUIStore(
    state => ({
      activeTab: state.activeTab,
      setActiveTab: state.setActiveTab,
      isLoading: state.isLoading,
      setActiveLoading: state.setActiveLoading
    })
  );
  const {
    projectPath,
    dependencies,
    devDependencies,
    setDependencies,
    setDevDependencies
  } = useDashboardStore(state => ({
    projectPath: state.projectPath,
    dependencies: state.dependencies,
    devDependencies: state.devDependencies,
    setDependencies: state.setDependencies,
    setDevDependencies: state.setDevDependencies
  }));

  useEffect(() => {
    const loadPackageJson = async () => {
      try {
        if (projectPath) {
          setActiveLoading(true);
        }

        const packageJsonData =
          await window.api.loadPackageJsonData(projectPath);

        if (packageJsonData) {
          setDependencies(packageJsonData.dependencies);
          setDevDependencies(packageJsonData.devDependencies);
        }
      } catch (error) {
        console.error(error);
        showModal("패키지를 검색하는 중 오류가 발생했습니다.");
      } finally {
        setActiveLoading(false);
      }
    };

    loadPackageJson();
  }, [projectPath, setDependencies, setDevDependencies]);

  const handleIconClick = dependency => {
    console.log(`삭제 할 패키지: ${dependency.packageName}`);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <MyDependenciesContainer>
      <ul>
        <li>
          <button
            className={activeTab === "dependencies" ? "active" : ""}
            onClick={() => setActiveTab("dependencies")}
          >
            dependencies
          </button>
          <button
            className={activeTab === "devDependencies" ? "active" : ""}
            onClick={() => setActiveTab("devDependencies")}
          >
            devDependencies
          </button>
        </li>
        <li>
          {activeTab === "dependencies" && (
            <DependencyList
              dependencies={Object.entries(dependencies)}
              onDelete={handleIconClick}
            />
          )}
          {activeTab === "devDependencies" && (
            <DependencyList
              dependencies={Object.entries(devDependencies)}
              onDelete={handleIconClick}
            />
          )}
        </li>
      </ul>
    </MyDependenciesContainer>
  );
};

export default MyDependencies;
