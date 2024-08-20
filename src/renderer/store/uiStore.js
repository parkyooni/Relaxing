import { create } from "zustand";

const useUIStore = create(set => ({
  isModalOpen: false,
  activeModal: null,
  modalMessage: "",
  sections: {
    showSettingLoad: true,
    showProjectStarter: false,
    showDependenciesSelector: false,
    showDetailDependencies: false
  },

  switchToggle: false,
  activeTab: "dependencies",

  setSectionsVisibility: newVisibility =>
    set(state => ({
      sections: {
        ...state.sections,
        ...newVisibility
      }
    })),

  showModal: (modalType, message = "") =>
    set({
      isModalOpen: true,
      activeModal: modalType,
      modalMessage: message
    }),
  closeModal: () =>
    set({
      isModalOpen: false,
      activeModal: null,
      modalMessage: ""
    }),

  toggleSection: section =>
    set(state => {
      if (section === "showSettingLoad" || section === "showProjectStarter") {
        return {
          sections: {
            ...state.sections,
            [section]: !state.sections[section]
          }
        };
      }

      return state;
    }),

  setSwitchToggle: value => set({ switchToggle: value }),
  setActiveTab: tabName => set({ activeTab: tabName }),

  resetUIState: () =>
    set(state => {
      const initialSections = {
        showSettingLoad: true,
        showProjectStarter: false,
        showDependenciesSelector: false,
        showDetailDependencies: false
      };

      return {
        ...state,
        sections: initialSections,
        switchToggle: false,
        activeTab: "dependencies",
        ...state.closeModal()
      };
    })
}));

export default useUIStore;
