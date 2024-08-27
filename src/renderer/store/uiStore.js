import { create } from "zustand";

const initialState = {
  searchQuery: "",
  packageItems: [],
  selectedPackageItem: null,
  activeModal: null,
  modalMessage: "",
  errorMessage: "",
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
  },
  loading: {
    loadingMessages: [],
    currentLoadingMessageIndex: 0,
    isLoading: false
  },
  npmLoading: {
    isLoading: false,
    loadingMessages: [],
    currentLoadingMessageIndex: 0
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

  setErrorMessage: message => set({ errorMessage: message }),

  toggleSection: section =>
    set(state => ({
      sections: {
        ...state.sections,
        [section]: !state.sections[section]
      }
    })),

  setActiveTab: tabName => set({ activeTab: tabName }),

  setLoadingState: (type, isLoading) =>
    set(state => ({
      [type]: {
        ...state[type],
        isLoading
      }
    })),

  setLoadingMessages: (type, messages) =>
    set(state => ({
      [type]: {
        ...state[type],
        loadingMessages: messages
      }
    })),

  updateLoadingMessageIndex: type =>
    set(state => {
      const { loadingMessages, currentLoadingMessageIndex } = state[type];
      if (!loadingMessages || loadingMessages.length === 0) return state[type];

      const newIndex =
        (currentLoadingMessageIndex + 1) % loadingMessages.length;

      return {
        [type]: {
          ...state[type],
          currentLoadingMessageIndex: newIndex
        }
      };
    }),

  resetLoadingMessageIndex: type =>
    set(state => ({
      [type]: {
        ...state[type],
        currentLoadingMessageIndex: 0
      }
    })),

  resetUIState: () => set(initialState)
}));

export default useUIStore;
