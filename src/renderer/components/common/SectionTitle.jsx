import styled from "styled-components";

const getBackgroundColor = (theme, isActive) =>
  isActive ? theme.colors.white : theme.colors.gray;

const getColor = (theme, isActive) =>
  isActive ? theme.colors.action : theme.colors.sub;

const getBoxShadow = isActive =>
  isActive ? "0 4px 4px 0 rgba(0, 0, 0, 0.25)" : "none";

const getFontColor = (theme, isActive) =>
  isActive ? theme.colors.basic : theme.colors.white;

const getFontWeight = isActive => (isActive ? "bold" : "normal");

const SectionTitle = styled.h2.withConfig({
  shouldForwardProp: prop => prop !== "isActive"
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin: 1.25rem 0;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme, isActive }) =>
    getBackgroundColor(theme, isActive)};
  color: ${({ theme, isActive }) => getColor(theme, isActive)};
  box-shadow: ${({ theme, isActive }) => getBoxShadow(theme, isActive)};
  cursor: pointer;

  span {
    color: ${({ theme, isActive }) => getFontColor(theme, isActive)};
    font-weight: ${({ isActive }) => getFontWeight(isActive)};
  }

  img {
    filter: ${({ isActive }) =>
      isActive
        ? "invert(65%) sepia(92%) saturate(679%) hue-rotate(358deg) brightness(102%) contrast(101%)"
        : "invert(29%) sepia(5%) saturate(440%) hue-rotate(173deg) brightness(96%) contrast(91%)"};
    transform: ${({ isActive }) =>
      isActive ? "rotate(0deg)" : "rotate(180deg)"};
    transition:
      transform 0.3s ease,
      fill 0.3s ease;
  }
`;

export default SectionTitle;
