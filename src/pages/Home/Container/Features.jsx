import styled from "styled-components";

const Features = () => {
  return (
    <section>
      <Title>Selected work</Title>
      <CardContainer></CardContainer>
    </section>
  );
};

const Title = styled.h2`
  margin-block: 20px;
  font-weight: 500;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default Features;
