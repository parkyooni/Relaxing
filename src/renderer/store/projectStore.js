import { create } from "zustand";

const checkProjectStarterValidity = state => {
  return !!state.path && !!state.selectedPackageManager && !!state.projectName;
};
const updateState = (set, state, field, value) => {
  const newState = {
    ...state,
    [field]: value
  };

  return {
    ...newState,
    isProjectStarterValid: checkProjectStarterValidity(newState)
  };
};

const useProjectStore = create(set => ({
  path: "",
  selectedPackageManager: "",
  projectName: "",
  files: [],
  projects: [],
  selectedSettingOption: "userDefined",
  isUserDefinedSetting: true,
  isProjectStarterValid: false,
  isDependenciesSelected: false,
  searchQuery: "",
  packageItems: [],
  selectedPackageItem: null,
  isDropdownVisible: false,
  isEnterPressed: false,

  setSelectedSettingOption: option =>
    set(state => ({
      selectedSettingOption: option,
      isUserDefinedSetting: option === "userDefined"
    })),

  setPath: path => set(state => updateState(set, state, "path", path)),
  setSelectedPackageManager: selectedPackageManager =>
    set(state => updateState(set, state, "selectedPackageManager", selectedPackageManager)),
  setProjectName: projectName => set(state => updateState(set, state, "projectName", projectName)),

  setFiles: files => set({ files }),
  setUserDefinedSetting: isUserDefined => set({ isUserDefinedSetting: isUserDefined }),
  setDependenciesSelected: isSelected => set({ isDependenciesSelected: isSelected }),
  setSearchQuery: query => set({ searchQuery: query }),
  setPackageItems: items => set({ packageItems: items }),
  setSelectedPackageItem: item => set({ selectedPackageItem: item }),
  setIsDropdownVisible: isVisible => set({ isDropdownVisible: isVisible }),
  setIsEnterPressed: isPressed => set({ isEnterPressed: isPressed }),
  setProjects: projects => set({ projects }),

  checkProjectPath: path => {
    return true;
  },

  resetProjectState: () =>
    set({
      path: "",
      selectedPackageManager: "",
      projectName: "",
      files: [],
      projects: [],
      isProjectStarterValid: false,
      isDependenciesSelected: false,
      searchQuery: "",
      packageItems: [],
      selectedPackageItem: null,
      isDropdownVisible: false,
      selectedSettingOption: "userDefined",
      isEnterPressed: false
    })
}));

export default useProjectStore;
