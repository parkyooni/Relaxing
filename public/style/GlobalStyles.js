import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    overflow-x: hidden;

    ::-webkit-scrollbar {
      width: .625rem;
    }

    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.mainScroll};
      border-radius: .625rem;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.border};
      border-radius: .625rem;
    }
  }

  *,
  *::before,
  *::after {
    -webkit-text-size-adjust: none;
    box-sizing: inherit;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  menu,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section {
    display: block;
  }

  button,
  input,
  select,
  textarea {
    font-size: 100%;
    margin: 0;
    vertical-align: baseline;
  }

  input,
  textarea {
    outline: 0;
  }

  img {
    max-width: 100%;
  }

  button {
    cursor: pointer;
  }

  button,
  input {
    line-height: normal;
    border: none;
    background: none;
    outline: none;
  }

  *[hidden] {
    display: none;
  }

  body {
    margin: 0;
    line-height: 1;
  }

  menu,
  ol,
  ul,
  li {
    list-style: none;
  }

  li {
    display: list-item;
  }

  table {
    display: table;
    border-collapse: collapse;
    border-spacing: 0;
  }

  tr {
    display: table-row;
  }

  thead {
    display: table-header-group;
  }

  tbody {
    display: table-row-group;
  }

  tfoot {
    display: table-footer-group;
  }

  col {
    display: table-column;
  }

  colgroup {
    display: table-column-group;
  }

  td,
  th {
    display: table-cell;
  }

  caption {
    display: table-caption;
  }

  th {
    font-weight: bolder;
    text-align: center;
  }

  caption {
    text-align: center;
  }

  textarea {
    overflow: auto;
    vertical-align: top;
    resize: vertical;
  }

  a {
    margin: 0;
    padding: 0;
    font-size: 100%;
    color: inherit;
    vertical-align: baseline;
    text-decoration: none;
    cursor: pointer;
    outline: none;
    background-color: transparent;
  }

  a:focus,
  a:active,
  a:hover {
    outline: 0;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
`;

export default GlobalStyle;
