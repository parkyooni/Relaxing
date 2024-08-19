import { useState } from "react";
import { useNavigation, useModal } from "@utils/common.cjs";
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

const CreateProject = () => {
  const { navigateToPath } = useNavigation();
  const [sections, setSections] = useState({
    showSettingLoad: false,
    showProjectStarter: false,
    showDependenciesSelector: false,
    showDetailDependencies: false
  });

  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const { isModalOpen, openModal, closeModal } = useModal();
  const [activeModal, setActiveModal] = useState(null);

  const toggleSection = section => {
    setSections(prevSections => ({
      ...prevSections,
      [section]: !prevSections[section]
    }));
    setHasUnsavedChanges(true);
  };

  const handleCancelClick = () => {
    if (hasUnsavedChanges) {
      setActiveModal("cancel");
      openModal();
    } else {
      navigateToPath("/project/project-list");
    }
  };

  const handleSaveClick = () => {
    if (hasUnsavedChanges) {
      setActiveModal("save");
      openModal();
    }
  };

  const handleConfirmCancel = () => {
    setSections({
      showSettingLoad: false,
      showProjectStarter: false,
      showDependenciesSelector: false,
      showDetailDependencies: false
    });
    setHasUnsavedChanges(false);
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
          variant={hasUnsavedChanges ? "active" : "disabled"}
          disabled={!hasUnsavedChanges}
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
          <SettingLoad onChange={() => setHasUnsavedChanges(true)} />
        </ToggleSection>
        <ToggleSection
          title="Project Starter"
          isActive={sections.showProjectStarter}
          onToggle={() => toggleSection("showProjectStarter")}
        >
          <ProjectStarter onChange={() => setHasUnsavedChanges(true)} />
        </ToggleSection>
        <ToggleSection
          title="Dependencies Selector"
          isActive={sections.showDependenciesSelector}
          onToggle={() => toggleSection("showDependenciesSelector")}
        >
          <DependenciesSelector onChange={() => setHasUnsavedChanges(true)} />
        </ToggleSection>
        <ToggleSection
          title="Detail Dependencies"
          isActive={sections.showDetailDependencies}
          onToggle={() => toggleSection("showDetailDependencies")}
        >
          <DetailDependencies onChange={() => setHasUnsavedChanges(true)} />
        </ToggleSection>
      </div>

      {isModalOpen && activeModal === "cancel" && (
        <CancelModal onConfirm={handleConfirmCancel} onCancel={closeModal} />
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
