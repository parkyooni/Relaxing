import styled from "styled-components";
import SectionTitle from "@components/common/SectionTitle";
import icons from "@public/images";
import { commonBoxShadow } from "@public/style/utils.styles";

const ToggleSectionAction = styled.div.withConfig({
  shouldForwardProp: prop => prop !== "isOpen"
})`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: ${({ isOpen }) => (isOpen ? "62.5rem" : "4.375rem")};
  margin-bottom: 1.25rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  overflow: hidden;
  transition: all 0.5s ease;

  &:hover,
  &:focus-within {
    background-color: ${({ theme }) => theme.colors.deepBlue};
    ${commonBoxShadow}
  }
`;

const SectionContainer = styled.div.withConfig({
  shouldForwardProp: prop => prop !== "isVisible"
})`
  display: block;
  max-height: ${({ isVisible }) => (isVisible ? "62.5rem" : "0")};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition:
    opacity 0.3s ease,
    max-height 0.5s ease;
`;

const ToggleSection = ({
  title,
  description,
  isComplete,
  isActive,
  onToggle,
  isVisible,
  children
}) => {
  return (
    <ToggleSectionAction isOpen={isActive}>
      <SectionContainer isVisible={isVisible}>
        <SectionTitle
          isActive={isActive}
          isComplete={isComplete}
          onClick={onToggle}
        >
          <div className="title">
            <span>{title}</span>
            {isActive && <span className="description">{description}</span>}
          </div>

          <img src={icons.arrowIcon} alt="Arrow Icon" />
        </SectionTitle>
        {isActive && children}
      </SectionContainer>
    </ToggleSectionAction>
  );
};

export default ToggleSection;
