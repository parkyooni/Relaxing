import { useState } from "react";
import { PageContentContainer } from "@public/style/Project.styles";
import DependenciesSelector from "@components/CreateProject/Project/DependenciesSelector";
import DetailDependencies from "@components/CreateProject/Project/DetailDependencies";
import ProjectStarter from "@components/CreateProject/Project/ProjectStarter";
import SettingLoad from "@components/CreateProject/Project/SettingLoad";
import ButtonBox from "@components/common/ButtonBox";
import styled from "styled-components";
import icons from "@public/images";
import SectionTitle from "@components/common/SectionTitle";

const ButtonContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  gap: 1rem;
`;

const CreateProject = () => {
  const [sections, setSections] = useState({
    showSettingLoad: false,
    showProjectStarter: false,
    showDependenciesSelector: false,
    showDetailDependencies: false
  });

  const toggleSection = section => {
    setSections(prevSections => ({
      ...prevSections,
      [section]: !prevSections[section]
    }));
  };

  return (
    <PageContentContainer>
      <ButtonContainer>
        <ButtonBox>취소</ButtonBox>
        <ButtonBox variant="disabled">저장</ButtonBox>
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
        {sections.showSettingLoad && <SettingLoad />}

        <SectionTitle
          isActive={sections.showProjectStarter}
          onClick={() => toggleSection("showProjectStarter")}
        >
          <span>Project Starter</span>
          <img src={icons.arrowIcon} alt="Project List Icon" />
        </SectionTitle>
        {sections.showProjectStarter && <ProjectStarter />}

        <SectionTitle
          isActive={sections.showDependenciesSelector}
          onClick={() => toggleSection("showDependenciesSelector")}
        >
          <span>Dependencies Selector</span>
          <img src={icons.arrowIcon} alt="Project List Icon" />
        </SectionTitle>
        {sections.showDependenciesSelector && <DependenciesSelector />}

        <SectionTitle
          isActive={sections.showDetailDependencies}
          onClick={() => toggleSection("showDetailDependencies")}
        >
          <span>Detail Dependencies</span>
          <img src={icons.arrowIcon} alt="Project List Icon" />
        </SectionTitle>
        {sections.showDetailDependencies && <DetailDependencies />}
      </div>
    </PageContentContainer>
  );
};

export default CreateProject;
