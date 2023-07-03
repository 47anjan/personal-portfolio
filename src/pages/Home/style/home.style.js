import styled from "styled-components";
import { Link } from "react-router-dom";
const LinkWrpper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;

  .icon {
    transition: all 0.3s linear;
  }

  &:hover .icon {
    margin-left: 0.5rem;
    transition: all 0.15s linear;
  }
`;

const ProflileLink = styled.a`
  font-size: 1.3rem;
  line-height: 1.6;
`;

export { ProflileLink, LinkWrpper };
