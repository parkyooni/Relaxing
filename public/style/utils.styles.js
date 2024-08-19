import styled, { css } from "styled-components";

export const media = {
  smallToMedium: styles => css`
    @media ${({ theme }) => theme.breakpoints.smallToMedium} {
      ${styles}
    }
  `,
  mediumToLarge: styles => css`
    @media ${({ theme }) => theme.breakpoints.mediumToLarge} {
      ${styles}
    }
  `
};

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ direction }) => direction || "row"};
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "auto"};
`;

export const FlexCenterBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const commonBoxShadow = css`
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`;

export const commonBorderRadius = css`
  border-radius: ${({ theme }) => theme.borderRadius.minSmall};
`;

export const ContainerStyle = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 3rem;
  padding-left: 15rem;
  margin-bottom: 3rem;
  transition: padding 0.1s ease-in-out;
  cursor: default;

  ${media.smallToMedium`
    padding: 2rem;
    padding-left: 10rem;
  `}
`;

export const ListContainerStyle = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;

  > li {
    display: flex;
    justify-content: space-around;
    padding: 1rem 0;
    font-size: ${({ theme }) => theme.fontSizes.largePlus};
    text-align: center;
    color: ${({ theme }) => theme.colors.basic};
    background-color: ${({ theme }) => theme.colors.background};
    transition: background-color 0.3s ease-in-out;
    cursor: pointer;
  }

  ${media.smallToMedium`
    width: 100%;
  `}
`;

export const InputStyle = styled.input`
  width: 100%;
  height: 1.875rem;
  padding: 0.9375rem;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  ${commonBorderRadius}
  ${commonBoxShadow}
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ButtonContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.625rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0 0 ${({ theme }) => theme.borderRadius.small}
    ${({ theme }) => theme.borderRadius.small};
  ${commonBoxShadow}

  button {
    width: 6.25rem;
    height: 3.125rem;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    ${commonBorderRadius}

    &:first-child {
      background-color: ${({ theme }) => theme.colors.action};
      color: ${({ theme }) => theme.colors.basic};
    }

    &:last-child {
      background-color: ${({ disabled, theme }) =>
        disabled ? theme.colors.gray : theme.colors.main};
      color: ${({ disabled, theme }) =>
        disabled ? theme.colors.basic : theme.colors.white};
      cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    }
  }
`;
