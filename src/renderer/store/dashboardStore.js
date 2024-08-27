import { create } from "zustand";

const initialState = {
  folderStructure: null,
  projectPath: "",
  dependencies: {},
  devDependencies: {},
  processId: null
};

const useDashboardStore = create(set => ({
  ...initialState,

  setFolderStructure: folderStructure => {
    set({ folderStructure });
  },
  setProjectPath: projectPath => set({ projectPath }),
  setDependencies: dependencies => set({ dependencies }),
  setDevDependencies: devDependencies => set({ devDependencies }),
  setProcessId: processId => set({ processId })
}));

export default useDashboardStore;
