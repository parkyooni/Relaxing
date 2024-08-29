import GlobalStyle from "./GlobalStyles";

export const theme = {
  fontSizes: {
    small: ".625rem",
    normal: ".9375rem",
    largePlus: "1.25rem",
    middleLarge: "1.5625rem",
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
    basic: "#333333",
    white: "#ffffff",
    border: "#8299Bc",
    gray: "#cacaca",
    deepBlue: "rgba(79, 124, 211, 0.7)",
    deepGray: "#606060",
    action: "#ffde5a",
    lighAction: "#fae282",
    activeButton: "#699eff",
    lightMain: "#c9dbff",
    mainScroll: "#f7f7f7",
    subScroll: "#88b1ff",
    opacity: "rgba(51, 51, 51, 0.9)"
  },
  spacing: {
    calc_5rem: "calc(100% - 5rem)"
  },
  breakpoints: {
    smallToMedium: "(min-width: 600px) and (max-width: 1200px)",
    mediumToLarge: "(min-width: 1201px)"
  }
};

export { GlobalStyle };
