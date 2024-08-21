import { useEffect } from "react";
import { useNavigation } from "@utils/common";
import {
  PageContentContainer,
  ButtonContainer
} from "@public/style/Project.styles";
import DependenciesSelector from "@components/CreateProject/Project/DependenciesSelector";
import DetailDependencies from "@components/CreateProject/Project/DetailDependencies";
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
    isModalOpen,
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
    isProjectStarterValid,
    isDependenciesSelected,
    selectedSettingOption,
    resetProjectState,
    isUserDefinedSetting
  } = useProjectStore();

  useEffect(() => {
    setSectionsVisibility({
      showSettingLoad: true,
      showProjectStarter: true,
      showDependenciesSelector: isProjectStarterValid && isUserDefinedSetting,
      showDetailDependencies:
        isProjectStarterValid && isDependenciesSelected && isUserDefinedSetting
    });
  }, [
    isProjectStarterValid,
    isDependenciesSelected,
    isUserDefinedSetting,
    setSectionsVisibility
  ]);

  const handleCancelClick = () => {
    const anySectionActive =
      sections.showSettingLoad ||
      sections.showProjectStarter ||
      sections.showDependenciesSelector ||
      sections.showDetailDependencies;

    if (isProjectStarterValid || isDependenciesSelected || anySectionActive) {
      showModal("cancel", "프로젝트 생성을 취소하시겠습니까?");
    } else {
      navigateToPath("/project/project-list");
    }
  };

  const handleSaveClick = () => {
    if (isProjectStarterValid) {
      showModal("customSave", `${selectedSettingOption}`);
    }
  };

  const handleConfirmCancel = () => {
    resetUIState();
    resetProjectState();
    closeModal();
    navigateToPath("/project/project-list");
  };

  const handleConfirmSave = () => {
    closeModal();
    navigateToPath("/project/project-list");
  };

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
          title="Dependencies Selector"
          isActive={sections.showDependenciesSelector}
          onToggle={() => toggleSection("showDependenciesSelector")}
        >
          <DependenciesSelector />
        </ToggleSection>
        <ToggleSection
          title="Detail Dependencies"
          isActive={sections.showDetailDependencies}
          onToggle={() => toggleSection("showDetailDependencies")}
        >
          <DetailDependencies />
        </ToggleSection>
      </div>

      {isModalOpen &&
        (activeModal === "cancel" || activeModal === "customSave") && (
          <CancelCompleteModal
            onConfirm={
              activeModal === "cancel"
                ? handleConfirmCancel
                : handleConfirmCancel
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
        <SaveModal
          onSave={() => {
            console.log("Save confirmed!");
            closeModal();
          }}
          onCreate={() => {
            console.log("Save custom!");
            closeModal();
          }}
          onCancel={closeModal}
        />
      )}
    </PageContentContainer>
  );
};

export default CreateProject;
