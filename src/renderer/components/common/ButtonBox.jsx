import styled from "styled-components";

const getBackgroundColor = (theme, variant) => {
  if (variant === "active") return theme.colors.main;
  if (variant === "disabled") return theme.colors.sub;
  return theme.colors.white;
};

const getHoverBackgroundColor = (theme, variant) => {
  if (variant === "disabled") return theme.colors.sub;
  return theme.colors.main;
};

const getHoverTextColor = (theme, variant) => {
  if (variant === "disabled") return theme.colors.main;
  return theme.colors.white;
};

const ButtonBox = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.normal};
  background-color: ${({ theme, variant }) =>
    getBackgroundColor(theme, variant)};
  color: ${({ theme }) => theme.colors.basic};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: 0.5rem 1rem;
  cursor: ${({ variant }) =>
    variant === "disabled" ? "not-allowed" : "pointer"};
  border: none;
  opacity: ${({ variant }) => (variant === "disabled" ? 0.5 : 1)};

  &:hover {
    background-color: ${({ theme, variant }) =>
      getHoverBackgroundColor(theme, variant)};
    color: ${({ theme, variant }) => getHoverTextColor(theme, variant)};
  }
`;

export default ButtonBox;
