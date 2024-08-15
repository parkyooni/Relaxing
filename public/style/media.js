import { css } from "styled-components";

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
