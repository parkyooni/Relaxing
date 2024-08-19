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

  showModal: message => set({ modalMessage: message, isModalOpen: true }),
  closeModal: () =>
    set({ isModalOpen: false, activeModal: null, modalMessage: "" }),
  setActiveModal: type => set({ activeModal: type }),

  toggleSection: section =>
    set(state => ({
      sections: {
        ...state.sections,
        [section]: !state.sections[section]
      },
      switchToggle: true
    })),
  setSwitchToggle: hasSwitch => set({ switchToggle: hasSwitch }),

  resetSections: () =>
    set({
      sections: {
        showSettingLoad: true,
        showProjectStarter: false,
        showDependenciesSelector: false,
        showDetailDependencies: false
      },
      switchToggle: false
    }),

  setActiveTab: tabName => set({ activeTab: tabName })
}));

export default useUIStore;
