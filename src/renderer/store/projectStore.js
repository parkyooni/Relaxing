import { create } from "zustand";

const projectStore = create(set => ({
  projects: [],

  setProjects: projects => set({ projects }),
  checkProjectPath: path => {
    return true;
  }
}));

export default projectStore;
