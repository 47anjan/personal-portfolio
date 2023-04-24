import styled from "styled-components";
import { Hero } from "./Container/Hero";

const Home = () => {
  return (
    <Wrapper>
      <Hero />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding-top: 4rem;
`;

export default Home;
