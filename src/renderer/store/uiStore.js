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
    loadingMessages: ["프로젝트를 생성중 입니다....", "Vite Create Project..."],
    currentLoadingMessageIndex: 0
  },
  isLoading: false
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

  setActiveLoading: isLoading => set({ isLoading }),

  setLoading: isLoading =>
    set(state => ({
      loading: {
        ...state.loading,
        isLoading
      }
    })),

  updateLoadingMessageIndex: () =>
    set(state => {
      const { loadingMessages, currentLoadingMessageIndex } = state.loading;

      return {
        loading: {
          ...state.loading,
          currentLoadingMessageIndex:
            (currentLoadingMessageIndex + 1) % loadingMessages.length
        }
      };
    }),

  resetLoadingMessageIndex: () =>
    set(state => ({
      loading: {
        ...state.loading,
        currentLoadingMessageIndex: 0
      }
    })),

  resetUIState: () => set(initialState)
}));

export default useUIStore;
