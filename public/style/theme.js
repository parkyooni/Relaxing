import GlobalStyle from "./GlobalStyles";
import { media } from "./media";

export const theme = {
  fontSizes: {
    small: ".625rem",
    normal: ".9375rem",
    largePlus: "1.25rem",
    xlarge: "1.875rem"
  },
  borderRadius: {
    main: "1.875rem",
    sub: "1.25rem",
    minSmall: ".9375rem",
    small: ".625rem",
    largest: "9.375rem"
  },
  colors: {
    main: "#699dff",
    sub: "#878787",
    lightMain: "#c9dbff",
    basic: "#333333",
    white: "#ffffff",
    border: "#8299Bc",
    opacity: "rgba(51, 51, 51, 0.9)",
    gray: "#cacaca",
    action: "#ffde5a",
    activeButton: "#699eff",
    subScroll: "#88b1ff",
    mainScroll: "#f7f7f7"
  },
  breakpoints: {
    smallToMedium: "(min-width: 600px) and (max-width: 1200px)",
    mediumToLarge: "(min-width: 1201px)"
  }
};

export { GlobalStyle, media };
