import { useContext } from "react";
import { Moon, Sun } from "react-feather";
import styled from "styled-components";
import { ThemeContext } from "styled-components";

const ThemeButton = () => {
  const { state } = useContext(ThemeContext);

  return (
    <Wrapper
      onClick={() => {
        state?.setDark((prev) => !prev);
      }}
    >
      {state?.dark ? <Sun /> : <Moon />}
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
