import React from "react";
import styled from "styled-components";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <Nav>
      <NavLink>Profile</NavLink>
      <NavLink>Work</NavLink>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export default Navbar;
