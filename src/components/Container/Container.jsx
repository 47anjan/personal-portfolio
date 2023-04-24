import styled from "styled-components";

const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 640px;
  padding: 0 24px 32px;
  margin: 0 auto;
`;

export default Container;
