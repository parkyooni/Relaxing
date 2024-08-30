import { useEffect } from "react";
import {
  useNavigation,
  getUserDefinedSettings,
  getSelectedProjectSettings,
  createProjectWithSettings,
  setupProjectEnvironment,
  processProjectData
} from "@utils/projectUtils";
import {
  PageContentContainer,
  ButtonContainer
} from "@public/style/Project.styles";
import DependenciesSelector from "@components/CreateProject/Project/DependenciesSelector";
import FrameworkSelector from "@components/CreateProject/Project/FrameworkSelector";
import VariantSelector from "@components/CreateProject/Project/VariantSelector";
import ProjectStarter from "@components/CreateProject/Project/ProjectStarter";
import SettingLoad from "@components/CreateProject/Project/SettingLoad";
import CancelCompleteModal from "@components/Modal/CancelCompleteModal";
import SaveModal from "@components/Modal/SaveModal";
import Loading from "@/components/common/Loading";
import ToggleSection from "@components/common/ToggleSection";
import ButtonBox from "@components/common/ButtonBox";
import useUIStore from "@/store/uiStore";
import useProjectStore from "@/store/projectStore";
import optionConfig from "@utils/option.config";
import useDashboardStore from "@/store/dashboardStore";
import {
  MODAL_TYPES,
  MESSAGES,
  LOADING_MESSAGES,
  TOTAL_TOGGLES
} from "@utils/constants";

const CreateProject = () => {
  const { navigateToPath } = useNavigation();
  const uiStore = useUIStore();
  const projectStore = useProjectStore(state => ({
    projectName: state.projectName,
    path: state.path,
    frameworkName: state.frameworkName,
    variantName: state.variantName,
    selectedPackageManager: state.selectedPackageManager,
    isProjectStarterValid: state.isProjectStarterValid,
    isFrameworksSelected: state.isFrameworksSelected,
    selectedSettingOption: state.selectedSettingOption,
    resetProjectState: state.resetProjectState,
    selectedDependenciesIndex: state.selectedDependenciesIndex,
    selectedFrameworkIndex: state.selectedFrameworkIndex,
    setSelectedOptionIndex: state.setSelectedOptionIndex,
    selectedOptionIndex: state.selectedOptionIndex,
    setSelectedVariantIndex: state.setSelectedVariantIndex
  }));
  const dashboardStore = useDashboardStore(state => ({
    setFolderStructure: state.setFolderStructure,
    setProjectPath: state.setProjectPath
  }));

  const resetState = () => {
    uiStore.resetUIState();
    projectStore.resetProjectState();
  };

  const isSaveEnabled = () => {
    const {
      path,
      selectedPackageManager,
      projectName,
      isProjectStarterValid,
      selectedSettingOption
    } = projectStore;
    const areBasicFieldsValid =
      !!path &&
      !!selectedPackageManager &&
      !!projectName &&
      isProjectStarterValid;

    if (selectedSettingOption === "userDefined") {
      return (
        areBasicFieldsValid &&
        projectStore.isFrameworksSelected &&
        projectStore.selectedFrameworkIndex !== null &&
        projectStore.selectedOptionIndex !== null
      );
    }

    return areBasicFieldsValid;
  };

  const isSectionVisible = () => {
    const { sections } = uiStore;
    const {
      selectedSettingOption,
      selectedPackageManager,
      path,
      isProjectStarterValid,
      isFrameworksSelected,
      selectedFrameworkIndex,
      selectedOptionIndex
    } = projectStore;

    if (!selectedSettingOption) return {};

    return {
      showSettingLoad: sections.showSettingLoad || selectedSettingOption,
      showProjectStarter: sections.showProjectStarter || selectedSettingOption,
      showFrameworkSelector: selectedPackageManager && path,
      showVariantSelector: isProjectStarterValid && isFrameworksSelected,
      showDependenciesSelector:
        isProjectStarterValid &&
        isFrameworksSelected &&
        selectedFrameworkIndex !== null &&
        selectedOptionIndex !== null
    };
  };

  const getCompletedToggleCount = () => {
    const {
      selectedSettingOption,
      projectName,
      selectedPackageManager,
      path,
      selectedFrameworkIndex,
      selectedOptionIndex,
      selectedDependenciesIndex
    } = projectStore;

    let completedCount = 0;

    if (selectedSettingOption) completedCount++;
    if (projectName && selectedPackageManager && path) completedCount++;
    if (selectedFrameworkIndex !== null) completedCount++;
    if (selectedOptionIndex !== null) completedCount++;
    if (
      selectedDependenciesIndex !== null &&
      typeof selectedDependenciesIndex !== "undefined"
    )
      completedCount++;

    return completedCount;
  };

  useEffect(() => {
    const visibilitySettings = isSectionVisible();

    uiStore.setSectionsVisibility(visibilitySettings);

    if (projectStore.selectedPackageManager && projectStore.path) {
      uiStore.toggleSection("showSettingLoad");
    }
    if (projectStore.selectedFrameworkIndex !== null) {
      uiStore.toggleSection("showVariantSelector");
    }
    if (projectStore.selectedOptionIndex !== null) {
      uiStore.toggleSection("showDependenciesSelector");
    }
  }, [
    projectStore.selectedPackageManager,
    projectStore.path,
    projectStore.selectedFrameworkIndex,
    projectStore.selectedOptionIndex
  ]);

  const getSaveMessage = async () => {
    if (
      projectStore.selectedSettingOption === "userDefined" &&
      isSaveEnabled()
    ) {
      return {
        type: MODAL_TYPES.SAVE,
        message: MESSAGES.SAVE_DESCRIPTION
      };
    } else if (
      projectStore.selectedSettingOption !== "userDefined" &&
      isSaveEnabled()
    ) {
      try {
        const projectData = await window.api.loadProjectList();
        return processProjectData(
          projectData,
          projectStore.selectedSettingOption
        );
      } catch (error) {
        console.error("Error loading project data:", error);
        return {
          type: MODAL_TYPES.ERROR,
          message: "프로젝트 데이터를 불러오는 중 오류가 발생했습니다."
        };
      }
    }

    return null;
  };

  const handleCancelClick = () => {
    const {
      showSettingLoad,
      showProjectStarter,
      showFrameworkSelector,
      showVariantSelector
    } = uiStore.sections;
    const anySectionActive =
      showSettingLoad ||
      showProjectStarter ||
      showFrameworkSelector ||
      showVariantSelector;

    if (
      projectStore.isProjectStarterValid ||
      projectStore.isFrameworksSelected ||
      anySectionActive
    ) {
      uiStore.showModal(MODAL_TYPES.CANCEL, MESSAGES.CANCEL_CONFIRMATION);
    } else {
      navigateToPath("/project/project-list");
    }
  };

  const handleSaveClick = async () => {
    const saveMessage = await getSaveMessage();
    if (saveMessage) {
      uiStore.showModal(saveMessage.type, saveMessage.message);
    }
  };

  const handleConfirmCreate = async customName => {
    try {
      uiStore.setLoadingState("loading", true);
      const {
        selectedSettingOption,
        frameworkName,
        variantName,
        selectedDependenciesIndex,
        path,
        projectName
      } = projectStore;

      const projectSettings =
        selectedSettingOption === "userDefined"
          ? getUserDefinedSettings(
              frameworkName,
              variantName,
              selectedDependenciesIndex,
              optionConfig,
              customName
            )
          : await getSelectedProjectSettings(
              customName,
              window.api.loadProjectList
            );

      if (
        !projectSettings.framework ||
        !projectSettings.variant ||
        projectSettings.dependencies === undefined
      ) {
        console.error("해당하는 프로젝트 데이터를 찾을 수 없습니다.");
        return;
      }

      await createProjectWithSettings({
        ...projectSettings,
        projectName,
        path,
        installProject: window.api.installProject,
        installDependencies: window.api.installDependencies
      });

      const { projectPath, projectFolderStructure } =
        await setupProjectEnvironment(projectName, path, window.api);

      dashboardStore.setFolderStructure({
        name: projectName,
        type: "folder",
        children: projectFolderStructure
      });

      dashboardStore.setProjectPath(projectPath);
      resetState();
      uiStore.closeModal();
      navigateToPath(`/dashboard/${projectName}`);
    } catch (error) {
      console.error("프로젝트 생성 중 오류 발생:", error);
    } finally {
      uiStore.setLoadingState("loading", false);
    }
  };

  const handleConfirmCancel = () => {
    resetState();
    uiStore.closeModal();
    navigateToPath("/project/project-list");
  };

  const completedToggles = getCompletedToggleCount();

  const renderModalContent = () => {
    if (!uiStore.uiFlags.isModalOpen) {
      return null;
    }

    switch (uiStore.activeModal) {
      case MODAL_TYPES.CANCEL:
        return (
          <CancelCompleteModal
            onSave={handleConfirmCancel}
            onCancel={uiStore.closeModal}
            message={uiStore.modalMessage}
            subMessage={MESSAGES.PROJECT_CANCEL_SUB_MESSAGE}
          />
        );

      case MODAL_TYPES.CUSTOM_SAVE:
        return (
          <CancelCompleteModal
            onSave={() =>
              handleConfirmCreate(projectStore.selectedSettingOption)
            }
            onCancel={uiStore.closeModal}
            message={uiStore.modalMessage}
            subMessage={MESSAGES.PROJECT_CREATION_CONFIRMATION}
          />
        );

      case MODAL_TYPES.SAVE:
        return (
          <SaveModal
            onSave={customName => {
              uiStore.closeModal();
              handleConfirmCreate(customName);
            }}
            onCreate={customName => {
              uiStore.closeModal();
              handleConfirmCreate(customName);
            }}
            onCancel={uiStore.closeModal}
            title="사용자 설정 저장"
            description={<>{MESSAGES.SAVE_DESCRIPTION}</>}
            existingProjectNames={uiStore.existingProjectNames}
          />
        );

      default:
        return null;
    }
  };

  useEffect(() => {
    const loadProjectNames = async () => {
      try {
        const projectData = await window.api.loadProjectList();
        const projectNames = projectData.map(
          project => project.custom?.customName || ""
        );

        uiStore.setExistingProjectNames(projectNames.filter(name => name));
      } catch (error) {
        console.error("Error loading project names:", error);
      }
    };

    loadProjectNames();
  }, []);

  return (
    <PageContentContainer>
      {uiStore.loading.isLoading && (
        <Loading
          noSpinner={false}
          customStyles={false}
          loadingMessages={LOADING_MESSAGES}
        />
      )}
      <ButtonContainer>
        <ButtonBox variant="default" onClick={handleCancelClick}>
          취소
        </ButtonBox>
        <ButtonBox
          onClick={handleSaveClick}
          variant={isSaveEnabled() ? "active" : "disabled"}
          disabled={!isSaveEnabled()}
        >
          저장
        </ButtonBox>
      </ButtonContainer>
      <div className="toggle-layout">
        <h1>
          Create Project
          <span className="toggle-status">
            <span>{completedToggles}</span> / <span>{TOTAL_TOGGLES}</span>
          </span>
        </h1>
        <ToggleSection
          title="1. Setting Load"
          description="Select either ' Custom Project Creation ' or ' One-Time Project Creation '"
          isActive={uiStore.sections.showSettingLoad}
          onToggle={() => uiStore.toggleSection("showSettingLoad")}
          isComplete={projectStore.selectedSettingOption}
          isVisible={true}
        >
          <SettingLoad />
        </ToggleSection>
        <ToggleSection
          title="2. Project Starter"
          description="Please Target directory path & Project name"
          isActive={uiStore.sections.showProjectStarter}
          onToggle={() => uiStore.toggleSection("showProjectStarter")}
          isComplete={
            projectStore.projectName &&
            projectStore.selectedPackageManager &&
            projectStore.path
          }
          isVisible={projectStore.selectedSettingOption}
        >
          <ProjectStarter />
        </ToggleSection>
        <ToggleSection
          title="3. Framework Selector"
          description="Select a framework"
          isActive={uiStore.sections.showFrameworkSelector}
          onToggle={() => uiStore.toggleSection("showFrameworkSelector")}
          isComplete={projectStore.selectedFrameworkIndex !== null}
          isVisible={
            projectStore.selectedSettingOption === "userDefined" &&
            projectStore.selectedPackageManager &&
            projectStore.projectName &&
            projectStore.path
          }
        >
          <FrameworkSelector
            selectedFrameworkIndex={projectStore.selectedFrameworkIndex}
          />
        </ToggleSection>
        <ToggleSection
          title="4. Variant Selector"
          description="Select a variant"
          isActive={uiStore.sections.showVariantSelector}
          onToggle={() => uiStore.toggleSection("showVariantSelector")}
          isComplete={projectStore.selectedOptionIndex !== null}
          isVisible={projectStore.selectedFrameworkIndex !== null}
        >
          <VariantSelector
            selectedFrameworkIndex={projectStore.selectedFrameworkIndex}
            setSelectedVariantIndex={projectStore.setSelectedVariantIndex}
            setSelectedOptionIndex={projectStore.setSelectedOptionIndex}
          />
        </ToggleSection>
        <ToggleSection
          title="5. [option] Dependencies Selector"
          description="Please search for and add the dependency package(s)"
          isActive={uiStore.sections.showDependenciesSelector}
          onToggle={() => uiStore.toggleSection("showDependenciesSelector")}
          isComplete={projectStore.selectedDependenciesIndex}
          isVisible={
            projectStore.selectedFrameworkIndex !== null &&
            projectStore.setSelectedVariantIndex &&
            projectStore.setSelectedOptionIndex
          }
        >
          <DependenciesSelector
            selectedDependenciesIndex={projectStore.selectedDependenciesIndex}
          />
        </ToggleSection>
      </div>

      {renderModalContent()}
    </PageContentContainer>
  );
};

export default CreateProject;
