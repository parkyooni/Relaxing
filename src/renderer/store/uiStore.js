import { create } from "zustand";

const initialState = {
  searchQuery: "",
  packageItems: [],
  selectedPackageItem: null,
  activeModal: null,
  modalMessage: "",
  errorMessage: "",
  isErrorModalOpen: false,
  existingProjectNames: [],
  activeTab: "dependencies",
  uiFlags: {
    isDropdownVisible: false,
    isEnterPressed: false,
    isModalOpen: false,
    switchToggle: false
  },
  sections: {
    showSettingLoad: false,
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
  },
  isChecked: false,
  deleteMessage: "",
  onConfirm: null
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
    set(state => {
      const isErrorModal = modalType === "error";
      return {
        uiFlags: {
          ...state.uiFlags,
          isModalOpen: true
        },
        activeModal: modalType,
        modalMessage: message,
        isErrorModalOpen: isErrorModal,
        errorMessage: isErrorModal ? message : state.errorMessage
      };
    }),

  closeErrorModal: () =>
    set(() => ({
      isErrorModalOpen: false,
      errorMessage: ""
    })),

  closeModal: () =>
    set(() => ({
      uiFlags: {
        isModalOpen: false
      },
      activeModal: null,
      modalMessage: "",
      deleteMessage: "",
      onConfirm: null
    })),

  setErrorMessage: message => set({ errorMessage: message }),
  setExistingProjectNames: names => set({ existingProjectNames: names }),

  toggleSection: section =>
    set(state => {
      const newSections = Object.keys(state.sections).reduce((acc, key) => {
        if (key === section) {
          acc[key] = !state.sections[key];
        } else {
          if (
            (section === "showSettingLoad" && key === "showProjectStarter") ||
            (section === "showProjectStarter" && key === "showSettingLoad")
          ) {
            acc[key] = state.sections[key];
          } else {
            acc[key] = false;
          }
        }
        return acc;
      }, {});

      return { sections: newSections };
    }),

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

  resetUIState: () => set(initialState),

  setIsChecked: isChecked => set({ isChecked }),

  showDeleteModal: (message, deleteFunction) =>
    set(() => ({
      uiFlags: {
        isModalOpen: true
      },
      activeModal: "deleteModal",
      deleteMessage: message,
      onConfirm: deleteFunction
    }))
}));

export default useUIStore;
