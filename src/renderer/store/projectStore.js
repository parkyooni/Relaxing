import { create } from "zustand";

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
    set(state => {
      const isUserDefined = option === "userDefined";
      return {
        selectedSettingOption: option,
        isUserDefinedSetting: isUserDefined
      };
    }),

  setPath: path => {
    set({ path });
    set(state => ({
      isProjectStarterValid:
        !!state.path && !!state.selectedPackageManager && !!state.projectName
    }));
  },

  setSelectedPackageManager: selectedPackageManager => {
    set({ selectedPackageManager });
    set(state => ({
      isProjectStarterValid:
        !!state.path && !!state.selectedPackageManager && !!state.projectName
    }));
  },

  setProjectName: projectName => {
    set({ projectName });
    set(state => ({
      isProjectStarterValid:
        !!state.path && !!state.selectedPackageManager && !!state.projectName
    }));
  },

  setFiles: files => set({ files }),

  setUserDefinedSetting: isUserDefined =>
    set({ isUserDefinedSetting: isUserDefined }),

  setDependenciesSelected: isSelected =>
    set({ isDependenciesSelected: isSelected }),

  validateProjectStarter: () =>
    set(state => ({
      isProjectStarterValid:
        !!state.path && !!state.selectedPackageManager && !!state.projectName
    })),

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
