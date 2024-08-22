import { create } from "zustand";

const initialState = {
  folderStructure: null,
  projectPath: ""
};

const useDashboardStore = create(set => ({
  ...initialState,

  setFolderStructure: folderStructure =>
    set(() => ({
      folderStructure
    })),
  setProjectPath: projectPath => set({ projectPath })
}));

export default useDashboardStore;
