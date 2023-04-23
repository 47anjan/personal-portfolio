import styled, { ThemeProvider } from "styled-components";
import Header from "./components/Header/Header";
import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);

  const themeLight = {
    colors: {
      canvas: "#fff",
      well: "#e6e6e6",
      text: "#161e40",
    },
  };

  const themeDark = {
    colors: {
      canvas: "#14182c",
      well: "#242b4f",
      text: "#fff",
    },
  };

  const handleTheme = () => setDark((prev) => !prev);

  return (
    <ThemeProvider theme={dark ? themeDark : themeLight}>
      <Wrapper>
        <Header handleTheme={handleTheme} />
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  background-color: ${(p) => p.theme.colors.canvas};
  color: ${(p) => p.theme.colors.text};
`;

export default App;
