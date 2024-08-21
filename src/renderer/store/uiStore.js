import { create } from "zustand";

const useUIStore = create(set => ({
  isModalOpen: false,
  activeModal: null,
  modalMessage: "",
  sections: {
    showSettingLoad: true,
    showProjectStarter: false,
    showFrameworkSelector: false,
    showVariantSelector: false,
    showDependenciesSelector: false
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
    set(state => ({
      sections: {
        ...state.sections,
        [section]: !state.sections[section]
      }
    })),

  setSwitchToggle: value => set({ switchToggle: value }),
  setActiveTab: tabName => set({ activeTab: tabName }),

  resetUIState: () =>
    set(state => ({
      sections: {
        showSettingLoad: true,
        showProjectStarter: false,
        showFrameworkSelector: false,
        showVariantSelector: false,
        showDependenciesSelector: false
      },
      switchToggle: false,
      activeTab: "dependencies",
      isModalOpen: false,
      activeModal: null,
      modalMessage: ""
    }))
}));

export default useUIStore;
