import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root{
  --dark-canvas: #14182c;
  --dark-well: #242b4f;
  --dark-text: #fff;
  --light-canvas: #fff;
  --light-well: #e6e6e6;
  --light-text: #161e40;
}

@font-face {
  font-family: "Neue Haas Unica";
  src: url(/public/fonts/NeueHaasUnica-Medium.woff2) format("woff2"),
    url(/public/fonts/NeueHaasUnica-Medium.woff) format("woff");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Neue Haas Unica";
  src: url(/public/fonts/NeueHaasUnica-Medium.woff2) format("woff2"),
    url(/public/fonts/NeueHaasUnica-Medium.woff) format("woff");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Neue Haas Unica";
  src: url(/public/fonts/NeueHaasUnica-Regular.woff2) format("woff2"),
    url(/public/fonts/NeueHaasUnica-Regular.woff) format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

* {
margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

body {
  background: var(--light-canvas);
  color: var(--light-text);
  font-family: "Neue Haas Unica", sans-serif;
}

ol li,
p,
ul li {
  font-size: 1.3rem;
  line-height: 1.6;
}
h1 {
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: -0.15rem;
  line-height: 1.15;
}`;
export default GlobalStyles;
