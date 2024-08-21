import styled from "styled-components";

const SectionTitle = styled.h2.withConfig({
  shouldForwardProp: prop => prop !== "isActive" && prop !== "disabled"
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin: 1.25rem 0;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme, isActive, disabled }) =>
    disabled
      ? theme.colors.gray
      : isActive
        ? theme.colors.white
        : theme.colors.gray};
  color: ${({ theme, isActive, disabled }) =>
    disabled
      ? theme.colors.sub
      : isActive
        ? theme.colors.action
        : theme.colors.sub};
  box-shadow: ${({ isActive, disabled }) =>
    disabled ? "none" : isActive ? "0 4px 4px 0 rgba(0, 0, 0, 0.25)" : "none"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  span {
    color: ${({ theme, isActive, disabled }) =>
      disabled
        ? theme.colors.white
        : isActive
          ? theme.colors.basic
          : theme.colors.white};
    font-weight: ${({ isActive, disabled }) =>
      disabled ? "normal" : isActive ? "bold" : "normal"};
  }

  img {
    filter: ${({ isActive, disabled }) =>
      disabled
        ? "grayscale(100%)"
        : isActive
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
