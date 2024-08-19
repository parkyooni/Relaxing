import { useState } from "react";
import { useNavigation, useModal } from "@utils/common";
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
import useUIStore from "@/store/UIStore";

const CreateProject = () => {
  const { navigateToPath } = useNavigation();

  const {
    isModalOpen,
    activeModal,
    showModal,
    closeModal,
    setActiveModal,
    sections,
    toggleSection,
    switchToggle,
    setSwitchToggle,
    resetSections
  } = useUIStore();

  const handleCancelClick = () => {
    if (switchToggle) {
      setActiveModal("cancel");
      showModal();
    } else {
      navigateToPath("/project/project-list");
    }
  };

  const handleSaveClick = () => {
    if (switchToggle) {
      setActiveModal("save");
      showModal();
    }
  };

  const handleConfirmCancel = () => {
    resetSections();
    setSwitchToggle(false);
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
          variant={switchToggle ? "active" : "disabled"}
          disabled={!switchToggle}
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
          <SettingLoad onChange={() => setSwitchToggle(true)} />
        </ToggleSection>
        <ToggleSection
          title="Project Starter"
          isActive={sections.showProjectStarter}
          onToggle={() => toggleSection("showProjectStarter")}
        >
          <ProjectStarter onChange={() => setSwitchToggle(true)} />
        </ToggleSection>
        <ToggleSection
          title="Dependencies Selector"
          isActive={sections.showDependenciesSelector}
          onToggle={() => toggleSection("showDependenciesSelector")}
        >
          <DependenciesSelector onChange={() => setSwitchToggle(true)} />
        </ToggleSection>
        <ToggleSection
          title="Detail Dependencies"
          isActive={sections.showDetailDependencies}
          onToggle={() => toggleSection("showDetailDependencies")}
        >
          <DetailDependencies onChange={() => setSwitchToggle(true)} />
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
