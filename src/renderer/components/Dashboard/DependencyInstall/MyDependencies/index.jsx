import { MyDependenciesContainer } from "@public/style/DependencyInstall.styles";
import DependencyList from "@components/common/DependencyList";
import mockData from "@utils/mockData.json";
import useUIStore from "@/store/UIStore";

const MyDependencies = () => {
  const { activeTab, setActiveTab } = useUIStore();

  const handleIconClick = dependency => {
    console.log(`삭제 할 패키지: ${dependency.packageName}`);
  };

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
              dependencies={mockData.dependencies}
              onDelete={handleIconClick}
            />
          )}
          {activeTab === "devDependencies" && (
            <DependencyList
              dependencies={mockData.devDependencies}
              onDelete={handleIconClick}
            />
          )}
        </li>
      </ul>
    </MyDependenciesContainer>
  );
};

export default MyDependencies;
