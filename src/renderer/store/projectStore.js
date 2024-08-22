import { create } from "zustand";

const initialProjectState = {
  files: [],
  selectedSettingOption: "userDefined",
  selectedPackageManager: "",
  projectName: "",
  isUserDefinedSetting: true,
  isProjectStarterValid: false,
  isFrameworksSelected: false,
  isDependenciesSelected: false,
  selectedFrameworkIndex: null,
  selectedOptionIndex: null,
  selectedVariantIndex: null,
  selectedDependenciesIndex: [],
  path: "",
  projects: [],
  frameworkName: "",
  variantName: "",
  customName: ""
};

const checkProjectStarterValidity = state =>
  !!state.path && !!state.selectedPackageManager && !!state.projectName;

const updateState = (state, field, value) => {
  const updatedState = { ...state, [field]: value };
  return {
    ...updatedState,
    isProjectStarterValid: checkProjectStarterValidity(updatedState)
  };
};

const useProjectStore = create(set => ({
  ...initialProjectState,

  setFrameworkName: state => set({ frameworkName: state }),
  setVariantName: state => set({ variantName: state }),
  setCustomName: customName => set({ customName }),

  setSelectedSettingOption: option =>
    set(() => ({
      selectedSettingOption: option,
      isUserDefinedSetting: option === "userDefined"
    })),

  setFiles: files => set({ files }),
  setProjectName: projectName =>
    set(state => updateState(state, "projectName", projectName)),
  setSelectedPackageManager: selectedPackageManager =>
    set(state =>
      updateState(state, "selectedPackageManager", selectedPackageManager)
    ),
  setSelectedFrameworkIndex: index => set({ selectedFrameworkIndex: index }),
  setSelectedOptionIndex: index => set({ selectedOptionIndex: index }),
  setSelectedVariantIndex: index => set({ selectedVariantIndex: index }),
  setSelectedDependenciesIndex: index =>
    set({ selectedDependenciesIndex: index }),
  setPath: path => set(state => updateState(state, "path", path)),
  setProjects: projects => set({ projects }),

  setFrameworksSelected: isSelected =>
    set({ isFrameworksSelected: isSelected }),
  setDependenciesSelected: isSelected =>
    set({ isDependenciesSelected: isSelected }),

  checkProjectPath: path => {
    return true;
  },

  resetProjectState: () => set(initialProjectState)
}));

export default useProjectStore;
