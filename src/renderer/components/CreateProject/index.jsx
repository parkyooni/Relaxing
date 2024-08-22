import { useEffect } from "react";
import { useNavigation } from "@utils/common";
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
    loading: { isLoading },
    setLoading,
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
    isUserDefinedSetting,
    isProjectStarterValid,
    isFrameworksSelected,
    selectedSettingOption,
    selectedFrameworkIndex,
    selectedOptionIndex,
    selectedVariantIndex,
    setSelectedFrameworkIndex,
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
    setSelectedFrameworkIndex: state.setSelectedFrameworkIndex,
    selectedPackageManager: state.selectedPackageManager,
    isProjectStarterValid: state.isProjectStarterValid,
    isFrameworksSelected: state.isFrameworksSelected,
    selectedSettingOption: state.selectedSettingOption,
    resetProjectState: state.resetProjectState,
    isUserDefinedSetting: state.isUserDefinedSetting,
    selectedDependenciesIndex: state.selectedDependenciesIndex,
    selectedFrameworkIndex: state.selectedFrameworkIndex,
    setSelectedOptionIndex: state.setSelectedOptionIndex,
    selectedOptionIndex: state.selectedOptionIndex,
    selectedVariantIndex: state.selectedVariantIndex,
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
    showSettingLoad: true,
    showProjectStarter: true,
    showFrameworkSelector: isProjectStarterValid && isUserDefinedSetting,
    showVariantSelector:
      isProjectStarterValid && isFrameworksSelected && isUserDefinedSetting,
    showDependenciesSelector:
      isUserDefinedSetting &&
      isProjectStarterValid &&
      isFrameworksSelected &&
      selectedFrameworkIndex !== null &&
      selectedOptionIndex !== null
  });

  const getSaveMessage = () => {
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
      return {
        type: "customSave",
        message: "프로젝트를 생성 하시겠습니까?"
      };
    }
    return null;
  };

  useEffect(() => {
    const visibilitySettings = isSectionVisible();
    setSectionsVisibility(visibilitySettings);
  }, [
    isUserDefinedSetting,
    isProjectStarterValid,
    isFrameworksSelected,
    selectedFrameworkIndex,
    selectedVariantIndex,
    selectedOptionIndex,
    setSectionsVisibility
  ]);

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

  const handleSaveClick = () => {
    const saveMessage = getSaveMessage();
    if (saveMessage) {
      showModal(saveMessage.type, saveMessage.message);
    }
  };

  const handleConfirmCreate = async customName => {
    const framework = variantName
      ? `${frameworkName}-${variantName}`
      : frameworkName;

    try {
      setLoading(true);
      await window.api.installProject({
        projectName,
        path,
        framework,
        variant: variantName ? [variantName] : ["undefined"],
        customName
      });

      if (selectedDependenciesIndex.length > 0) {
        const selectedDependencies = selectedDependenciesIndex.map(
          index => optionConfig.dependenciesSelector[index].name
        );
        await window.api.installDependencies({
          projectName,
          path,
          dependencies: selectedDependencies
        });
      }
      const projectPath = await window.api.joinProjectPath(path, projectName);
      const projectFolderStructure =
        await window.api.readAllDirectory(projectPath);

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
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmCancel = () => {
    resetState();
    closeModal();
    navigateToPath("/project/project-list");
  };

  return (
    <PageContentContainer>
      {isLoading && <Loading />}
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
          title="Setting Load"
          isActive={sections.showSettingLoad}
          onToggle={() => toggleSection("showSettingLoad")}
        >
          <SettingLoad />
        </ToggleSection>
        <ToggleSection
          title="Project Starter"
          isActive={sections.showProjectStarter}
          onToggle={() => toggleSection("showProjectStarter")}
        >
          <ProjectStarter />
        </ToggleSection>
        <ToggleSection
          title="Framework Selector"
          isActive={sections.showFrameworkSelector}
          onToggle={() => toggleSection("showFrameworkSelector")}
          disabled={!sections.showFrameworkSelector}
        >
          <FrameworkSelector
            selectedFrameworkIndex={selectedFrameworkIndex}
            setSelectedFrameworkIndex={setSelectedFrameworkIndex}
          />
        </ToggleSection>
        <ToggleSection
          title="Variant Selector"
          isActive={sections.showVariantSelector}
          onToggle={() => toggleSection("showVariantSelector")}
          disabled={!sections.showVariantSelector}
        >
          <VariantSelector
            selectedFrameworkIndex={selectedFrameworkIndex}
            setSelectedVariantIndex={setSelectedVariantIndex}
            setSelectedOptionIndex={setSelectedOptionIndex}
          />
        </ToggleSection>
        <ToggleSection
          title="Dependencies Selector"
          isActive={sections.showDependenciesSelector}
          onToggle={() => toggleSection("showDependenciesSelector")}
          disabled={!sections.showDependenciesSelector}
        >
          <DependenciesSelector
            selectedDependenciesIndex={selectedDependenciesIndex}
          />
        </ToggleSection>
      </div>

      {isModalOpen &&
        (activeModal === "cancel" || activeModal === "customSave") && (
          <>
            <CancelCompleteModal
              onSave={handleConfirmCancel}
              onCancel={closeModal}
              message={modalMessage}
              subMessage={
                activeModal === "cancel"
                  ? "입력한 정보는 복구할 수 없습니다."
                  : "프로젝트를 생성 하시겠습니까?"
              }
            />
          </>
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
