import styled from "styled-components";

const NavLink = ({ children }) => {
  return (
    <Wrapper>
      <MainText>{children}</MainText>
      <HoverText>{children}</HoverText>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  display: block;
  font-size: 1.125rem;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  cursor: pointer;

  /* Text slide up effect */
  overflow: hidden;

  &:first-of-type {
    color: ${(p) => p.theme.colors.text};
  }
`;

const Text = styled.span`
  display: block;

  transform: translateY(var(--translate-from));
  transition: transform 500ms;

  ${Wrapper}:hover & {
    transition: transform 200ms;
    transform: translateY(var(--translate-to));
  }
`;

const MainText = styled(Text)`
  --translate-from: 0%;
  --translate-to: -100%;
`;
const HoverText = styled(Text)`
  position: absolute;
  top: 0;
  left: 0;
  font-weight: 500;
  height: 100%;
  width: 100%;

  --translate-from: 100%;
  --translate-to: 0%;
`;

export default NavLink;
