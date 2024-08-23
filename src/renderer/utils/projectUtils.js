import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
  const navigate = useNavigate();

  const navigateToPath = path => {
    navigate(path);
  };

  return { navigateToPath };
};

export const getUserDefinedSettings = (
  frameworkName,
  variantName,
  selectedDependenciesIndex,
  optionConfig,
  customName
) => {
  const framework = variantName
    ? `${frameworkName}-${variantName}`
    : frameworkName;
  const variant = variantName ? [variantName] : ["undefined"];
  const dependencies = selectedDependenciesIndex.map(
    index => optionConfig.dependenciesSelector[index].name
  );

  return {
    framework,
    variant,
    dependencies,
    customName: customName === "userDefined" ? undefined : customName
  };
};

export const getSelectedProjectSettings = async (
  customName,
  loadProjectList
) => {
  const projectData = await loadProjectList();
  const selectedProject = projectData.find(
    project => project.custom.customName === customName
  );

  if (!selectedProject) {
    return { framework: null, variant: null, dependencies: null };
  }

  const {
    framework,
    variant,
    custom: { dependencies }
  } = selectedProject;

  return { framework, variant, dependencies };
};

export const createProjectWithSettings = async ({
  projectName,
  path,
  framework,
  variant,
  customName,
  dependencies,
  installProject,
  installDependencies
}) => {
  await installProject({
    projectName,
    path,
    framework,
    variant,
    customName
  });

  if (dependencies && dependencies.length > 0) {
    await installDependencies({
      projectName,
      path,
      dependencies
    });
  }
};

export const setupProjectEnvironment = async (projectName, path, api) => {
  const projectPath = await api.joinProjectPath(path, projectName);
  const projectFolderStructure = await api.readAllDirectory(projectPath);

  return {
    projectPath,
    projectFolderStructure
  };
};

export const processProjectData = (projectData, selectedSettingOption) => {
  if (!Array.isArray(projectData)) {
    throw new Error("프로젝트 데이터가 배열 형식이 아닙니다.");
  }

  const selectedProject = projectData.find(
    project => project.custom.customName === selectedSettingOption
  );

  if (selectedProject) {
    const {
      framework,
      custom: { dependencies }
    } = selectedProject;
    const dependenciesList = dependencies.join(", ");
    return {
      type: "customSave",
      message: `<p>${selectedSettingOption}</p><br/>프레임워크: ${framework}<br/>의존성: ${dependenciesList}`
    };
  }

  return {
    type: "customSave",
    message: `${selectedSettingOption}에 해당하는 프로젝트를 찾을 수 없습니다.`
  };
};
