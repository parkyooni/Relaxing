import { create } from "zustand";

const initialState = {
  folderStructure: [],
  projectPath: "",
  dependencies: {},
  devDependencies: {},
  processId: null,
  selectedProject: null
};

const useDashboardStore = create(set => ({
  ...initialState,

  setFolderStructure: folderStructure => {
    set({ folderStructure });
  },
  setProjectPath: projectPath => set({ projectPath }),
  setSelectedProject: selectedProject => set({ selectedProject }),
  setDependencies: dependencies => set({ dependencies }),
  setDevDependencies: devDependencies => set({ devDependencies }),
  setProcessId: processId => set({ processId })
}));

export default useDashboardStore;
