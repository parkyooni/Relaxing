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
import CancelModal from "@components/Modal/CancelModal";
import SaveModal from "@components/Modal/SaveModal";
import CustomSaveModal from "@components/Modal/CustomSaveModal";
import useUIStore from "@/store/uiStore";
import useProjectStore from "@/store/projectStore";

const CreateProject = () => {
  const { navigateToPath } = useNavigation();
  const {
    isModalOpen,
    activeModal,
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
    if (isProjectStarterValid || isDependenciesSelected) {
      showModal("cancel", "프로젝트 생성을 취소하시겠습니까?");
    } else {
      navigateToPath("/project/project-list");
    }
  };

  const handleSaveClick = () => {
    if (isProjectStarterValid) {
      showModal("customSave", "프로젝트를 저장하시겠습니까?");
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

      {isModalOpen && activeModal === "cancel" && (
        <CancelModal
          onConfirm={handleConfirmCancel}
          onCancel={closeModal}
          message="프로젝트 생성을 취소하시겠습니까?"
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

      {isModalOpen && activeModal === "customSave" && (
        <CustomSaveModal
          onSave={handleConfirmSave}
          onCancel={closeModal}
          message="프로젝트를 저장하시겠습니까?"
        />
      )}
    </PageContentContainer>
  );
};

export default CreateProject;
