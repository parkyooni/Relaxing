import { create } from "zustand";

const initialState = {
  folderStructure: null,
  projectPath: "",
  dependencies: {},
  devDependencies: {}
};

const useDashboardStore = create(set => ({
  ...initialState,

  setFolderStructure: folderStructure =>
    set(() => ({
      folderStructure
    })),
  setProjectPath: projectPath => set({ projectPath }),
  setDependencies: dependencies => set({ dependencies }),
  setDevDependencies: devDependencies => set({ devDependencies })
}));

export default useDashboardStore;
