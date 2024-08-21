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
import ToggleSection from "@components/common/ToggleSection";
import ButtonBox from "@components/common/ButtonBox";
import CancelCompleteModal from "@components/Modal/CancelCompleteModal";
import SaveModal from "@components/Modal/SaveModal";
import useUIStore from "@/store/uiStore";
import useProjectStore from "@/store/projectStore";

const CreateProject = () => {
  const { navigateToPath } = useNavigation();
  const {
    uiFlags: { isModalOpen },
    activeModal,
    modalMessage,
    showModal,
    closeModal,
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
    setSelectedFrameworkIndex,
    selectedVariantIndex,
    setSelectedVariantIndex,
    selectedDependenciesIndex,
    resetProjectState,
    path,
    selectedPackageManager,
    projectName
  } = useProjectStore();

  useEffect(() => {
    setSectionsVisibility({
      showSettingLoad: true,
      showProjectStarter: true,
      showFrameworkSelector: isProjectStarterValid && isUserDefinedSetting,
      showVariantSelector:
        isProjectStarterValid && isFrameworksSelected && isUserDefinedSetting,
      showDependenciesSelector:
        isProjectStarterValid &&
        isFrameworksSelected &&
        selectedFrameworkIndex !== null &&
        isUserDefinedSetting
    });
  }, [
    isProjectStarterValid,
    isFrameworksSelected,
    isUserDefinedSetting,
    setSectionsVisibility,
    selectedFrameworkIndex
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
    const canShowSaveModal =
      isProjectStarterValid &&
      isFrameworksSelected &&
      selectedFrameworkIndex !== null &&
      selectedDependenciesIndex.length > 0;

    if (selectedSettingOption === "userDefined") {
      if (canShowSaveModal) {
        showModal(
          "save",
          "의존성 설치 및 설정에 대한 정보가 저장됩니다. 생성으로 선택할경우 사용자 설정은 저장되지않고, 프로젝트가 만들어집니다."
        );
      }
    } else {
      if (isProjectStarterValid) {
        showModal("customSave", "프로젝트를 생성 하시겠습니까?");
      }
    }
  };

  const handleConfirmCancel = () => {
    resetUIState();
    resetProjectState();
    closeModal();
    navigateToPath("/project/project-list");
  };

  const isProjectStarterComplete =
    !!path && !!selectedPackageManager && !!projectName;

  return (
    <PageContentContainer>
      <ButtonContainer>
        <ButtonBox variant="default" onClick={handleCancelClick}>
          취소
        </ButtonBox>
        <ButtonBox
          onClick={handleSaveClick}
          variant={isProjectStarterValid ? "active" : "disabled"}
          disabled={!isProjectStarterValid}
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
          disabled={
            !isProjectStarterComplete || selectedSettingOption !== "userDefined"
          }
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
          disabled={
            selectedFrameworkIndex === null ||
            selectedSettingOption !== "userDefined"
          }
        >
          <VariantSelector
            selectedFrameworkIndex={selectedFrameworkIndex}
            selectedVariantIndex={selectedVariantIndex}
            setSelectedVariantIndex={setSelectedVariantIndex}
          />
        </ToggleSection>
        <ToggleSection
          title="Dependencies Selector"
          isActive={sections.showDependenciesSelector}
          onToggle={() => toggleSection("showDependenciesSelector")}
          disabled={selectedSettingOption !== "userDefined"}
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
            onSave={closeModal}
            onCreate={closeModal}
            onCancel={closeModal}
          />
        </>
      )}
    </PageContentContainer>
  );
};

export default CreateProject;
