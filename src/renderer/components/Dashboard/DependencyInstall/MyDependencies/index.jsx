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
  },
  {
    packageName: "electron-squirrel-startup",
    currentVersion: "1.0.1",
    latestVersion: "1.0.1"
  },
  {
    packageName: "electron-squirrel-startup",
    currentVersion: "1.0.1",
    latestVersion: "1.0.1"
  },
  {
    packageName: "electron-squirrel-startup",
    currentVersion: "1.0.1",
    latestVersion: "1.0.1"
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
      <>
        {dependencies.map(dependency => (
          <li key={dependency.packageName}>
            <span>{dependency.packageName}</span>
            <div className="version-container">
              <span>현재 버전 {dependency.currentVersion}</span>
              <span>최신 버전 {dependency.latestVersion}</span>
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
      </>
    );
  };

  return (
    <MyDependenciesContainer>
      <ul>
        <li>
          <button
            className={`${activeTab === "dependencies" ? "active" : ""}`}
            onClick={() => handleActiveTab("dependencies")}
          >
            dependencies
          </button>
          <button
            className={`${activeTab === "devDependencies" ? "active" : ""}`}
            onClick={() => handleActiveTab("devDependencies")}
          >
            devDependencies
          </button>
        </li>
        <li>
          {activeTab === "dependencies" && (
            <ul>{renderDependencies(dummyDependency)}</ul>
          )}
          {activeTab === "devDependencies" && (
            <ul>{renderDependencies(dummyDevDependency)}</ul>
          )}
        </li>
      </ul>
    </MyDependenciesContainer>
  );
};

export default MyDependencies;
