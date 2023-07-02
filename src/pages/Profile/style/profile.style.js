import styled from "styled-components";

const Break = styled.span`
  margin-bottom: 20px;
  display: block;
`;

const SkillsContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
`;

const Line = styled.hr`
  margin-block: 20px;
`;

const Heading = styled.h1`
  margin-block: 40px;
`;

const SubHeading = styled.h2`
  margin-block: 20px 16px;
  font-size: 1.5rem;
  letter-spacing: normal;
`;

export { SkillsContainer, SubHeading, Line, Break, Heading };
