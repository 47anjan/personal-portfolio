import styled from "styled-components";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <Nav>
      <NavLink to={"/profile"}>Profile</NavLink>
      <NavLink to={"/work"}>Work</NavLink>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export default Navbar;
