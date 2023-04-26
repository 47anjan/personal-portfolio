import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root{
  --dark-canvas: #14182c;
  --dark-well: #242b4f;
  --dark-text: #fff;
  --light-canvas: #fff;
  --light-well: #e6e6e6;
  --light-text: #161e40;

  isolation: isolate;
}

@font-face {
  font-family: "Neue Haas Unica";
  src: url(/public/fonts/NeueHaasUnica-Bold.woff2) format("woff2"),
    url(/public/fonts/NeueHaasUnica-Bold..woff) format("woff");
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
   background-color: ${(p) => p.theme.colors.canvas};
  color: ${(p) => p.theme.colors.text};
  font-family: "Neue Haas Unica", sans-serif;
}

a{
  text-decoration: none;
 color: ${(p) => p.theme.colors.text};
}

ol li,
p,
ul li {
  font-size: 1.3rem;
  line-height: 1.6;
}
h1 {
  font-size: 2.4rem;
  font-size: clamp(2.4rem, 2.2rem + 0.75vw, 3rem);
  font-weight: 700;
  line-height: 1.3;
}

a[href^="https://twitter.com"]
{
  color: #55acee;
}
a[href^="https://github.com"]
{
  color: #aaa;
}
a[href^="https://www.linkedin.com/in/"]
{
  color: #ea4c89;
}

`;

export default GlobalStyles;
