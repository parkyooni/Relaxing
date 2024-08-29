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

const CreateProject = () => {
  const { navigateToPath } = useNavigation();
  const {
    uiFlags: { isModalOpen },
    loading,
    setLoadingState,
    activeModal,
    showModal,
    closeModal,
    modalMessage,
    sections,
    toggleSection,
    resetUIState,
    setSectionsVisibility
  } = useUIStore();
  const {
    isProjectStarterValid,
    isFrameworksSelected,
    selectedSettingOption,
    selectedFrameworkIndex,
    selectedOptionIndex,
    selectedDependenciesIndex,
    selectedPackageManager,
    setSelectedVariantIndex,
    setSelectedOptionIndex,
    path,
    projectName,
    frameworkName,
    variantName,
    resetProjectState
  } = useProjectStore(state => ({
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
  const { setFolderStructure, setProjectPath } = useDashboardStore(state => ({
    setFolderStructure: state.setFolderStructure,
    setProjectPath: state.setProjectPath
  }));

  const resetState = () => {
    resetUIState();
    resetProjectState();
  };

  const isSaveEnabled = () => {
    const areBasicFieldsValid =
      !!path &&
      !!selectedPackageManager &&
      !!projectName &&
      isProjectStarterValid;

    if (selectedSettingOption === "userDefined") {
      return (
        areBasicFieldsValid &&
        isFrameworksSelected &&
        selectedFrameworkIndex !== null &&
        selectedOptionIndex !== null
      );
    }

    return areBasicFieldsValid;
  };

  const isSectionVisible = () => ({
    showSettingLoad: sections.showSettingLoad || selectedSettingOption,
    showProjectStarter: sections.showProjectStarter || selectedSettingOption,
    showFrameworkSelector:
      selectedSettingOption && selectedPackageManager && path,
    showVariantSelector:
      selectedSettingOption && isProjectStarterValid && isFrameworksSelected,
    showDependenciesSelector:
      selectedSettingOption &&
      isProjectStarterValid &&
      isFrameworksSelected &&
      selectedFrameworkIndex !== null &&
      selectedOptionIndex !== null
  });

  useEffect(() => {
    const visibilitySettings = isSectionVisible();
    setSectionsVisibility(visibilitySettings);

    if (selectedPackageManager && path) {
      toggleSection("showSettingLoad");
    }
    if (selectedFrameworkIndex !== null) {
      toggleSection("showVariantSelector");
    }
    if (selectedOptionIndex !== null) {
      toggleSection("showDependenciesSelector");
    }
  }, [
    selectedPackageManager,
    path,
    selectedFrameworkIndex,
    selectedOptionIndex
  ]);

  const getSaveMessage = async () => {
    if (selectedSettingOption === "userDefined" && isSaveEnabled()) {
      return {
        type: "save",
        message:
          "의존성 설치 및 설정에 대한 정보가 저장됩니다. 생성으로 선택할경우 사용자 설정은 저장되지않고, 프로젝트가 만들어집니다."
      };
    } else if (
      selectedSettingOption !== "userDefined" &&
      !!path &&
      !!selectedPackageManager &&
      !!projectName
    ) {
      try {
        const projectData = await window.api.loadProjectList();
        return processProjectData(projectData, selectedSettingOption);
      } catch (error) {
        console.error("Error loading project data:", error);
        return {
          type: "error",
          message: "프로젝트 데이터를 불러오는 중 오류가 발생했습니다."
        };
      }
    }

    return null;
  };

  const handleCancelClick = () => {
    const anySectionActive =
      sections.showSettingLoad ||
      sections.showProjectStarter ||
      sections.showFrameworkSelector ||
      sections.showVariantSelector;

    if (isProjectStarterValid || isFrameworksSelected || anySectionActive) {
      showModal("cancel", "프로젝트 생성을 취소하시겠습니까?");
    } else {
      navigateToPath("/project/project-list");
    }
  };

  const handleSaveClick = async () => {
    const saveMessage = await getSaveMessage();
    if (saveMessage) {
      showModal(saveMessage.type, saveMessage.message);
    }
  };

  const handleConfirmCreate = async customName => {
    try {
      setLoadingState("loading", true);

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

      setFolderStructure({
        name: projectName,
        type: "folder",
        children: projectFolderStructure
      });

      setProjectPath(projectPath);
      resetState();
      closeModal();
      navigateToPath(`/dashboard/${projectName}`);
    } catch (error) {
      console.error("프로젝트 생성 중 오류 발생:", error);
    } finally {
      setLoadingState("loading", false);
    }
  };

  const handleConfirmCancel = () => {
    resetState();
    closeModal();
    navigateToPath("/project/project-list");
  };

  return (
    <PageContentContainer>
      {loading.isLoading && (
        <Loading
          noSpinner={false}
          customStyles={false}
          loadingMessages={[
            "프로젝트를 생성중 입니다....",
            "Vite Create Project..."
          ]}
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
        <h1>Create Project</h1>
        <ToggleSection
          title="1. Setting Load"
          description="Select either ' Custom Project Creation ' or ' One-Time Project Creation '"
          isActive={sections.showSettingLoad}
          onToggle={() => toggleSection("showSettingLoad")}
          isComplete={selectedSettingOption}
          isVisible={true}
        >
          <SettingLoad />
        </ToggleSection>
        <ToggleSection
          title="2. Project Starter"
          description="Please Target directory path & Project name"
          isActive={sections.showProjectStarter}
          onToggle={() => toggleSection("showProjectStarter")}
          isComplete={projectName && selectedPackageManager && path}
          isVisible={selectedSettingOption}
        >
          <ProjectStarter />
        </ToggleSection>
        <ToggleSection
          title="3. Framework Selector"
          description="Select a framework"
          isActive={sections.showFrameworkSelector}
          onToggle={() => toggleSection("showFrameworkSelector")}
          isComplete={selectedFrameworkIndex !== null}
          isVisible={
            selectedSettingOption === "userDefined" &&
            selectedPackageManager &&
            projectName &&
            path
          }
        >
          <FrameworkSelector selectedFrameworkIndex={selectedFrameworkIndex} />
        </ToggleSection>
        <ToggleSection
          title="4. Variant Selector"
          description="Select a variant"
          isActive={sections.showVariantSelector}
          onToggle={() => toggleSection("showVariantSelector")}
          isComplete={selectedOptionIndex !== null}
          isVisible={selectedFrameworkIndex !== null}
        >
          <VariantSelector
            selectedFrameworkIndex={selectedFrameworkIndex}
            setSelectedVariantIndex={setSelectedVariantIndex}
            setSelectedOptionIndex={setSelectedOptionIndex}
          />
        </ToggleSection>
        <ToggleSection
          title="5. [option] Dependencies Selector"
          description="Please search for and add the dependency package(s)"
          isActive={sections.showDependenciesSelector}
          onToggle={() => toggleSection("showDependenciesSelector")}
          isComplete={selectedDependenciesIndex}
          isVisible={
            selectedFrameworkIndex !== null &&
            setSelectedVariantIndex &&
            setSelectedOptionIndex
          }
        >
          <DependenciesSelector
            selectedDependenciesIndex={selectedDependenciesIndex}
          />
        </ToggleSection>
      </div>

      {isModalOpen &&
        (activeModal === "cancel" || activeModal === "customSave") && (
          <CancelCompleteModal
            onSave={
              activeModal === "cancel"
                ? handleConfirmCancel
                : () => handleConfirmCreate(selectedSettingOption)
            }
            onCancel={closeModal}
            message={modalMessage}
            subMessage={
              activeModal === "cancel"
                ? "입력한 정보는 복구할 수 없습니다."
                : "프로젝트를 생성 하시겠습니까?"
            }
          />
        )}

      {isModalOpen && activeModal === "save" && (
        <>
          <SaveModal
            onSave={customName => {
              closeModal();
              handleConfirmCreate(customName);
            }}
            onCreate={customName => {
              closeModal();
              handleConfirmCreate(customName);
            }}
            onCancel={closeModal}
            title="사용자 설정 저장"
            description={
              <>
                의존성 설치 및 설정에 대한 정보가 저장됩니다. <br />
                생성으로 선택할 경우 사용자 설정은 저장되지 않고, 프로젝트가
                만들어집니다.
              </>
            }
          />
        </>
      )}
    </PageContentContainer>
  );
};

export default CreateProject;
