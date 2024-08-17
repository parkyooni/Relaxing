import { useState } from "react";
import { MyDependenciesContainer } from "@public/style/DependencyInstall.styles";
import icons from "@public/images";

const dummyDependency = [
  { packageName: "react", currentVersion: "18.3.1", latestVersion: "18.3.1" },
  {
    packageName: "react-dom",
    currentVersion: "18.3.0",
    latestVersion: "18.3.1"
  },
  {
    packageName: "react-router",
    currentVersion: "6.26.0",
    latestVersion: "6.26.0"
  },
  {
    packageName: "react-router-dom",
    currentVersion: "6.26.0",
    latestVersion: "6.26.0"
  },
  { packageName: "redux", currentVersion: "4.2.1", latestVersion: "4.2.1" },
  {
    packageName: "styled-components",
    currentVersion: "6.1.12",
    latestVersion: "6.1.12"
  },
  {
    packageName: "electron-squirrel-startup",
    currentVersion: "1.0.1",
    latestVersion: "1.0.1"
  }
];

const dummyDevDependency = [
  { packageName: "webpack", currentVersion: "5.88.1", latestVersion: "5.88.1" },
  { packageName: "babel", currentVersion: "7.22.10", latestVersion: "7.22.10" },
  { packageName: "eslint", currentVersion: "8.47.0", latestVersion: "8.47.0" },
  { packageName: "jest", currentVersion: "29.7.0", latestVersion: "29.7.0" }
];

const MyDependencies = () => {
  const [activeTab, setActiveTab] = useState("dependencies");

  const handleActiveTab = tabName => {
    setActiveTab(tabName);
  };

  const handleIconClick = dependency => {
    console.log(`삭제 할 패키지: ${dependency.packageName}`);
  };

  const renderDependencies = dependencies => {
    return (
      <ul className="dependencies-list">
        {dependencies.map(dependency => (
          <li className="package" key={dependency.packageName}>
            <span className="package-name">{dependency.packageName}</span>
            <div className="version-container">
              <span className="package-current-version">
                현재 버전 {dependency.currentVersion}
              </span>
              <span className="package-latest-version">
                최신 버전 {dependency.latestVersion}
              </span>
            </div>
            <button>
              <img
                src={icons.closeIcon}
                alt="Close Icon"
                onClick={e => {
                  e.stopPropagation();
                  handleIconClick(dependency);
                }}
              />
            </button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <MyDependenciesContainer>
      <div className="tabs">
        <div className="tab-menu">
          <button
            className={`tab-link ${activeTab === "dependencies" ? "active" : ""}`}
            onClick={() => handleActiveTab("dependencies")}
          >
            dependencies
          </button>
          <button
            className={`tab-link ${activeTab === "devDependencies" ? "active" : ""}`}
            onClick={() => handleActiveTab("devDependencies")}
          >
            devDependencies
          </button>
        </div>
        {activeTab === "dependencies" && (
          <div className="tab-content active">
            <div className="dependencies-list-container">
              {renderDependencies(dummyDependency)}
            </div>
          </div>
        )}
        {activeTab === "devDependencies" && (
          <div className="tab-content active">
            <div className="dependencies-list-container">
              {renderDependencies(dummyDevDependency)}
            </div>
          </div>
        )}
      </div>
    </MyDependenciesContainer>
  );
};

export default MyDependencies;
