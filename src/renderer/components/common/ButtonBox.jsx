import styled from "styled-components";

const getBackgroundColor = (theme, variant) => {
  if (variant === "active") return theme.colors.action;
  if (variant === "disabled") return theme.colors.sub;
  if (variant === "default") return theme.colors.white;
  return theme.colors.white;
};

const getHoverBackgroundColor = (theme, variant) => {
  if (variant === "disabled") return theme.colors.sub;
  if (variant === "default") return theme.colors.white;
  return theme.colors.action;
};

const getHoverTextColor = (theme, variant) => {
  if (variant === "disabled") return theme.colors.main;
  if (variant === "default") return theme.colors.basic;
  return theme.colors.white;
};

const getBorderColor = (theme, variant) => {
  if (variant === "default") return theme.colors.gray;
  return "transparent";
};

const ButtonBox = styled.button.withConfig({
  shouldForwardProp: prop => prop !== "variant"
})`
  font-size: ${({ theme }) => theme.fontSizes.normal};
  background-color: ${({ theme, variant }) =>
    getBackgroundColor(theme, variant)};
  color: ${({ theme }) => theme.colors.basic};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: 0.5rem 1rem;
  cursor: ${({ variant }) =>
    variant === "disabled" ? "not-allowed" : "pointer"};
  border: 1px solid ${({ theme, variant }) => getBorderColor(theme, variant)};
  opacity: ${({ variant }) => (variant === "disabled" ? 0.5 : 1)};

  &:hover {
    background-color: ${({ theme, variant }) =>
      getHoverBackgroundColor(theme, variant)};
    color: ${({ theme, variant }) => getHoverTextColor(theme, variant)};
  }
`;

export default ButtonBox;
