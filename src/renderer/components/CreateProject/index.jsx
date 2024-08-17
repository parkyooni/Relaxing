import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageContentContainer } from "@public/style/Project.styles";
import DependenciesSelector from "@components/CreateProject/Project/DependenciesSelector";
import DetailDependencies from "@components/CreateProject/Project/DetailDependencies";
import ProjectStarter from "@components/CreateProject/Project/ProjectStarter";
import SettingLoad from "@components/CreateProject/Project/SettingLoad";
import ButtonBox from "@components/common/ButtonBox";
import styled from "styled-components";
import icons from "@public/images";
import SectionTitle from "@components/common/SectionTitle";
import CancelModal from "@components/Modal/CancelModal";
import SaveModal from "@components/Modal/SaveModal";

const ButtonContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  gap: 1rem;
`;

const CreateProject = () => {
  const navigate = useNavigate();

  const [sections, setSections] = useState({
    showSettingLoad: false,
    showProjectStarter: false,
    showDependenciesSelector: false,
    showDetailDependencies: false
  });

  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);

  const toggleSection = section => {
    setSections(prevSections => ({
      ...prevSections,
      [section]: !prevSections[section]
    }));
    setHasUnsavedChanges(true);
  };

  const handleCancelClick = () => {
    if (hasUnsavedChanges) {
      setShowCancelModal(true);
    } else {
      console.log("No unsaved changes. Proceed with cancellation.");
      navigate("/project/project-list");
    }
  };

  const handleSaveClick = () => {
    if (hasUnsavedChanges) {
      setShowSaveModal(true);
    }
  };

  const handleConfirmCancel = () => {
    console.log("Cancel confirmed. Navigating to ProjectList...");
    setSections({
      showSettingLoad: false,
      showProjectStarter: false,
      showDependenciesSelector: false,
      showDetailDependencies: false
    });

    setHasUnsavedChanges(false);
    setShowCancelModal(false);
    navigate("/project/project-list");
  };

  const handleDismissCancelModal = () => {
    setShowCancelModal(false);
  };

  const handleDismissSaveModal = () => {
    setShowSaveModal(false);
  };

  return (
    <PageContentContainer>
      <ButtonContainer>
        <ButtonBox onClick={handleCancelClick}>취소</ButtonBox>
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
        <SectionTitle
          isActive={sections.showSettingLoad}
          onClick={() => toggleSection("showSettingLoad")}
        >
          <span>Setting Load</span>
          <img src={icons.arrowIcon} alt="Arrow Icon" />
        </SectionTitle>
        {sections.showSettingLoad && (
          <SettingLoad onChange={() => setHasUnsavedChanges(true)} />
        )}

        <SectionTitle
          isActive={sections.showProjectStarter}
          onClick={() => toggleSection("showProjectStarter")}
        >
          <span>Project Starter</span>
          <img src={icons.arrowIcon} alt="Project List Icon" />
        </SectionTitle>
        {sections.showProjectStarter && (
          <ProjectStarter onChange={() => setHasUnsavedChanges(true)} />
        )}

        <SectionTitle
          isActive={sections.showDependenciesSelector}
          onClick={() => toggleSection("showDependenciesSelector")}
        >
          <span>Dependencies Selector</span>
          <img src={icons.arrowIcon} alt="Project List Icon" />
        </SectionTitle>
        {sections.showDependenciesSelector && (
          <DependenciesSelector onChange={() => setHasUnsavedChanges(true)} />
        )}

        <SectionTitle
          isActive={sections.showDetailDependencies}
          onClick={() => toggleSection("showDetailDependencies")}
        >
          <span>Detail Dependencies</span>
          <img src={icons.arrowIcon} alt="Project List Icon" />
        </SectionTitle>
        {sections.showDetailDependencies && (
          <DetailDependencies onChange={() => setHasUnsavedChanges(true)} />
        )}
      </div>

      {showCancelModal && (
        <CancelModal
          onConfirm={handleConfirmCancel}
          onCancel={handleDismissCancelModal}
        />
      )}

      {showSaveModal && (
        <SaveModal
          onSave={() => console.log("Save confirmed!")}
          onCreate={() => console.log("Save custom!")}
          onCancel={handleDismissSaveModal}
        />
      )}
    </PageContentContainer>
  );
};

export default CreateProject;
