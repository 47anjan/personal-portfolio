import styled from "styled-components";
import { Hero } from "./Container/Hero";
import Features from "./Container/Features";

const Home = () => {
  return (
    <Wrapper>
      <Hero />
      <Features />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding-top: 4rem;
`;

export default Home;
