import { ThemeProvider } from "styled-components";
import Header from "./components/Header/Header";
import { useState } from "react";
import GlobalStyles from "./GlobalStyles";
import Container from "./components/Container/Container";
import { Outlet } from "react-router-dom";

function App() {
  const [dark, setDark] = useState(true);

  const themeLight = {
    state: { dark, setDark },
    colors: {
      canvas: "#fff",
      well: "#e6e6e6",
      text: "#161e40",
    },
  };

  const themeDark = {
    state: { dark, setDark },
    colors: {
      canvas: "#14182c",
      well: "#242b4f",
      text: "#fff",
    },
  };

  return (
    <ThemeProvider theme={dark ? themeDark : themeLight}>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
