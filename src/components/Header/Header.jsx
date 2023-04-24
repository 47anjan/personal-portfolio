import Navbar from "../Navbar/Navbar";
import Logo from "../Logo/Logo";
import ThemeButton from "../../Buttons/ThemeButton";
import styled from "styled-components";
import NavLink from "../Navbar/NavLink";

const Header = ({ handleTheme }) => {
  return (
    <header>
      <Wrapper>
        <Logo />
        <Navbar />
        <ThemeButton handleTheme={handleTheme} />
      </Wrapper>
    </header>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 640px;
  padding: 0 24px 32px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 1.125rem;
  padding: 8px 32px;
`;

export default Header;
