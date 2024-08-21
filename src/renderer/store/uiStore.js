import { create } from "zustand";

const initialState = {
  searchQuery: "",
  packageItems: [],
  selectedPackageItem: null,
  activeModal: null,
  modalMessage: "",
  activeTab: "dependencies",
  uiFlags: {
    isDropdownVisible: false,
    isEnterPressed: false,
    isModalOpen: false,
    switchToggle: false
  },
  sections: {
    showSettingLoad: true,
    showProjectStarter: false,
    showFrameworkSelector: false,
    showVariantSelector: false,
    showDependenciesSelector: false
  }
};

const useUIStore = create(set => ({
  ...initialState,

  setSearchQuery: query => set({ searchQuery: query }),
  setPackageItems: items => set({ packageItems: items }),
  setSelectedPackageItem: item => set({ selectedPackageItem: item }),

  setUIFlag: (flag, value) =>
    set(state => ({
      uiFlags: {
        ...state.uiFlags,
        [flag]: value
      }
    })),

  setSectionsVisibility: newVisibility =>
    set(state => ({
      sections: {
        ...state.sections,
        ...newVisibility
      }
    })),

  showModal: (modalType, message = "") =>
    set(() => ({
      uiFlags: {
        isModalOpen: true
      },
      activeModal: modalType,
      modalMessage: message
    })),
  closeModal: () =>
    set(() => ({
      uiFlags: {
        isModalOpen: false
      },
      activeModal: null,
      modalMessage: ""
    })),

  toggleSection: section =>
    set(state => ({
      sections: {
        ...state.sections,
        [section]: !state.sections[section]
      }
    })),

  setActiveTab: tabName => set({ activeTab: tabName }),

  resetUIState: () => set(initialState)
}));

export default useUIStore;
