import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = () => {
  return <Wrapper to={"/"}>Anjan Karmakar</Wrapper>;
};

const Wrapper = styled(Link)`
  margin-right: auto;
  font-weight: 500;
`;

export default Logo;
