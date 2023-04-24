import { useState } from "react";
import { Moon, Sun } from "react-feather";
import styled from "styled-components";

const ThemeButton = ({ handleTheme }) => {
  const [dark, setDark] = useState(false);

  return (
    <Wrapper
      onClick={() => {
        handleTheme();
        setDark((prev) => !prev);
      }}
    >
      {!dark ? <Sun /> : <Moon />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 36px;
  width: 36px;
  padding: 8px;
  cursor: pointer;
`;

export default ThemeButton;
